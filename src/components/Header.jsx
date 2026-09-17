import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#home" className="logo">
          <span className="logo-mark">🍔</span> QuickBite
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#menu" className="btn btn-primary btn-sm">Order Now</a>
          <button
            type="button"
            className="hamburger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
