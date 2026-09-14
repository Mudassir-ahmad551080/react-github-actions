import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('App', () => {
  it('renders the counter button with count 0 on first load', () => {
    render(<Ap />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    expect(button).toBeInTheDocument()
  })

  it('has the "counter" class on the button', () => {
    render(<App />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('counter')
  })

  it('increments the count by 1 when the button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button', { name: /count is 0/i })
    await user.click(button)

    expect(
      screen.getByRole('button', { name: /count is 1/i }),
    ).toBeInTheDocument()
  })

  it('keeps counting up on multiple clicks', async () => {
    const user = userEvent.setup()
    render(<App />)

    const button = screen.getByRole('button')
    await user.click(button)
    await user.click(button)
    await user.click(button)

    expect(button).toHaveTextContent(/count is 3/i)
  })

  it('handles rapid clicks in the same tick (stale-state bug check)', () => {
    render(<App />)

    const button = screen.getByRole('button')
    // teen clicks ek sath, koi wait/re-render nahi beech mein.
    // Correct code (functional update) -> 3. Buggy code (stale closure) -> 1.
    act(() => {
      fireEvent.click(button)
      fireEvent.click(button)
      fireEvent.click(button)
    })

    expect(button).toHaveTextContent(/count is 3/i)
  })

  it('renders only the counter — no other content', () => {
    const { container } = render(<App />)

    expect(screen.queryByText(/get started/i)).not.toBeInTheDocument()
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument()
    expect(container.querySelectorAll('button')).toHaveLength(1)
  })
})
