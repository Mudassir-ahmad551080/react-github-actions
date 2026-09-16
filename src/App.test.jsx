import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, within, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App.jsx'

/* ---------- helpers ---------- */

const getAllByRole = (role, name) =>
  screen.getAllByRole(role, name ? { name } : undefined)

const dishes = [
  'Classic Smash Burger',
  'Margherita Pizza',
  'Salmon Sushi Set',
  'Mediterranean Bowl',
  'Street Tacos Trio',
  'Spicy Ramen',
]

const navLinks = ['Home', 'Menu', 'How It Works', 'About', 'Contact']

beforeEach(() => {
  vi.stubGlobal('alert', vi.fn())
})

afterEach(() => {
  cleanup()
  vi.unstubAllGlobals()
})

/* ============================================
   1. Header / Navigation
   ============================================ */
describe('Header & Navigation', () => {
  it('renders the QuickBite brand logo', () => {
    render(<App />)
    const logos = screen.getAllByText(/QuickBite/)
    expect(logos.length).toBeGreaterThan(0)
  })

  it('renders a header landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it.each(navLinks)('renders the "%s" navigation link', (link) => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByRole('link', { name: link })).toBeInTheDocument()
  })

  it('points every nav link to its section anchor', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    const expected = ['#home', '#menu', '#how-it-works', '#about', '#contact']
    navLinks.forEach((link, i) => {
      expect(within(nav).getByRole('link', { name: link })).toHaveAttribute('href', expected[i])
    })
  })

  it('renders an "Order Now" button in the header', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /order now/i })).toBeInTheDocument()
  })

  it('toggles the mobile menu and reflects aria-expanded state', async () => {
    const user = userEvent.setup()
    render(<App />)
    const burger = screen.getByRole('button', { name: /toggle menu/i })

    expect(burger).toHaveAttribute('aria-expanded', 'false')
    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'true')
    await user.click(burger)
    expect(burger).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const burger = screen.getByRole('button', { name: /toggle menu/i })
    const nav = screen.getByRole('navigation')

    await user.click(burger)
    await user.click(within(nav).getByRole('link', { name: 'Menu' }))
    expect(burger).toHaveAttribute('aria-expanded', 'false')
  })
})

/* ============================================
   2. Hero section
   ============================================ */
describe('Hero Section', () => {
  it('renders the hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /delicious food, delivered in minutes/i })
    ).toBeInTheDocument()
  })

  it('renders the free-delivery promotional badge', () => {
    render(<App />)
    expect(screen.getByText(/free delivery on your first order/i)).toBeInTheDocument()
  })

  it('renders a delivery-address search input', () => {
    render(<App />)
    expect(screen.getByRole('textbox', { name: /delivery address/i })).toBeInTheDocument()
  })

  it('renders the "Find Food" submit button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /find food/i })).toBeInTheDocument()
  })

  it('search input is controlled and updates on typing', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByRole('textbox', { name: /delivery address/i })

    expect(input).toHaveValue('')
    await user.type(input, 'Main Boulevard 42')
    expect(input).toHaveValue('Main Boulevard 42')
  })

  it.each([
    ['500+', 'Restaurants'],
    ['1M+', 'Happy Customers'],
    ['30 min', 'Average Delivery'],
  ])('renders hero stat %s — %s', (value, label) => {
    render(<App />)
    expect(screen.getByText(value)).toBeInTheDocument()
    expect(screen.getByText(label)).toBeInTheDocument()
  })

  it('shows the entered address in the alert on search', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByRole('textbox', { name: /delivery address/i })

    await user.type(input, 'Downtown Street 7')
    await user.click(screen.getByRole('button', { name: /find food/i }))

    expect(globalThis.alert).toHaveBeenCalledTimes(1)
    expect(globalThis.alert).toHaveBeenCalledWith('Finding restaurants near "Downtown Street 7"...')
  })

  it('warns with an alert when searching with an empty address', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /find food/i }))

    expect(globalThis.alert).toHaveBeenCalledWith('Please enter your delivery address.')
  })

  it('warns when the address is only whitespace', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByRole('textbox', { name: /delivery address/i })

    await user.type(input, '    ')
    await user.click(screen.getByRole('button', { name: /find food/i }))
    expect(globalThis.alert).toHaveBeenCalledWith('Please enter your delivery address.')
  })

  it('trims the address before searching', async () => {
    const user = userEvent.setup()
    render(<App />)
    const input = screen.getByRole('textbox', { name: /delivery address/i })

    await user.type(input, '  Oak Avenue 12  ')
    await user.click(screen.getByRole('button', { name: /find food/i }))
    expect(globalThis.alert).toHaveBeenCalledWith('Finding restaurants near "Oak Avenue 12"...')
  })
})

/* ============================================
   3. Features section
   ============================================ */
describe('Features Section', () => {
  it('renders the section heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /why order with quickbite\?/i })).toBeInTheDocument()
  })

  it.each([
    'Fast Delivery',
    'Fresh Ingredients',
    'Easy Ordering',
    'Top-Rated Restaurants',
  ])('renders the "%s" feature card', (title) => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
  })

  it('renders exactly 4 feature cards', () => {
    render(<App />)
    const titles = ['Fast Delivery', 'Fresh Ingredients', 'Easy Ordering', 'Top-Rated Restaurants']
    titles.forEach((t) => expect(screen.getByRole('heading', { level: 3, name: t })).toBeInTheDocument())
  })
})

/* ============================================
   4. Popular dishes section
   ============================================ */
describe('Popular Dishes Section', () => {
  it('renders the "Popular near you" heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /popular near you/i })).toBeInTheDocument()
  })

  it.each(dishes)('renders the "%s" dish card', (name) => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
  })

  it('renders 6 dish articles', () => {
    render(<App />)
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })

  it('renders 6 "Add to cart" buttons', () => {
    render(<App />)
    expect(getAllByRole('button', /add to cart/i)).toHaveLength(6)
  })

  it.each([
    ['Classic Smash Burger', '8.99'],
    ['Margherita Pizza', '10.50'],
    ['Salmon Sushi Set', '16.00'],
    ['Mediterranean Bowl', '9.25'],
    ['Street Tacos Trio', '11.00'],
    ['Spicy Ramen', '12.75'],
  ])('shows the correct price ($%s) for %s', (name, price) => {
    render(<App />)
    const heading = screen.getByRole('heading', { level: 3, name })
    const card = heading.closest('article')
    expect(within(card).getByText(`$${price}`)).toBeInTheDocument()
  })

  it.each([
    ['Classic Smash Burger', '4.8'],
    ['Margherita Pizza', '4.7'],
    ['Salmon Sushi Set', '4.9'],
    ['Mediterranean Bowl', '4.6'],
    ['Street Tacos Trio', '4.8'],
    ['Spicy Ramen', '4.9'],
  ])('shows rating %s for %s', (name, rating) => {
    render(<App />)
    const card = screen.getByRole('heading', { level: 3, name }).closest('article')
    expect(within(card).getByText(rating)).toBeInTheDocument()
  })

  it.each(['Bestseller', 'Popular', 'Premium', 'Healthy'])('renders the "%s" dish tag', (tag) => {
    render(<App />)
    expect(screen.getAllByText(tag).length).toBeGreaterThan(0)
  })

  it('"Add to cart" buttons are clickable without errors', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = getAllByRole('button', /add to cart/i)
    for (const btn of buttons) {
      await user.click(btn)
    }
    expect(buttons).toHaveLength(6)
  })
})

/* ============================================
   5. How it works section
   ============================================ */
describe('How It Works Section', () => {
  it('renders the section heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /how it works/i })).toBeInTheDocument()
  })

  it.each(['Browse & Choose', 'Place Your Order', 'Enjoy Your Meal'])(
    'renders the "%s" step',
    (title) => {
      render(<App />)
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  )

  it('renders step numbers 1, 2 and 3', () => {
    render(<App />)
    const steps = screen.getByRole('heading', { name: /how it works/i }).closest('section')
    ;['1', '2', '3'].forEach((n) => {
      expect(within(steps).getByText(n)).toBeInTheDocument()
    })
  })
})

/* ============================================
   6. CTA banner
   ============================================ */
describe('CTA Banner', () => {
  it('renders the call-to-action heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /hungry\? you're two taps away\./i })).toBeInTheDocument()
  })

  it('renders App Store and Google Play links', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /app store/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /google play/i })).toBeInTheDocument()
  })
})

/* ============================================
   7. Footer
   ============================================ */
describe('Footer', () => {
  it('renders the footer content landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it.each(['About us', 'Careers', 'Blog', 'Help center', 'Partner with us', 'Rider sign-up'])(
    'renders the "%s" footer link',
    (label) => {
      render(<App />)
      const footer = screen.getByRole('contentinfo')
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }
  )

  it('renders contact email and phone links', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('link', { name: 'hello@quickbite.app' })).toHaveAttribute(
      'href',
      'mailto:hello@quickbite.app'
    )
    expect(within(footer).getByRole('link', { name: '+1 (234) 567-890' })).toHaveAttribute(
      'href',
      'tel:+1234567890'
    )
  })

  it('renders the copyright line with the current year', () => {
    render(<App />)
    const year = String(new Date().getFullYear())
    expect(screen.getByText(new RegExp(`© ${year} QuickBite`))).toBeInTheDocument()
  })
})

/* ============================================
   8. Overall page structure / accessibility
   ============================================ */
describe('Page Structure', () => {
  it('renders exactly one h1', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  })

  it('renders main, banner and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('section anchors referenced by the nav actually exist', () => {
    render(<App />)
    const ids = ['home', 'menu', 'how-it-works', 'about', 'contact']
    ids.forEach((id) => {
      expect(document.getElementById(id)).toBeInTheDocument()
    })
  })

  it('renders the whole app without crashing', () => {
    const { container } = render(<App />)
    expect(container.querySelector('.landing')).toBeInTheDocument()
  })
})
