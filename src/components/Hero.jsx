import { useState } from 'react'

const stats = [
  { value: '500+', label: 'Restaurants' },
  { value: '1M+', label: 'Happy Customers' },
  { value: '30 min', label: 'Average Delivery' },
]

function Hero() {
  const [address, setAddress] = useState('')
  const [feedback, setFeedback] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    const trimmed = address.trim()

    if (!trimmed) {
      setFeedback({ type: 'error', message: 'Please enter your delivery address.' })
      return
    }

    setFeedback({ type: 'success', message: `Finding restaurants near "${trimmed}"...` })
  }

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="badge">🚀 Free delivery on your first order</span>
          <h1>Delicious food, delivered in minutes.</h1>
          <p>
            From your favorite local spots to award-winning restaurants — order in a
            few taps and track your meal right to your door.
          </p>
          <form className="search-bar" onSubmit={handleSearch}>
            <span className="search-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Enter your delivery address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              aria-label="Delivery address"
            />
            <button type="submit" className="btn btn-primary">Find Food</button>
          </form>
          {feedback && (
            <p className={`search-feedback ${feedback.type}`} role="status">
              {feedback.message}
            </p>
          )}
          <div className="stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-plate">🍜</div>
          <div className="float-card float-1">⏱️ <strong>28 min</strong><span>Delivery time</span></div>
          <div className="float-card float-2">⭐ <strong>4.9</strong><span>3.2k reviews</span></div>
          <div className="float-card float-3">🛵 <strong>On the way</strong><span>Your order</span></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
