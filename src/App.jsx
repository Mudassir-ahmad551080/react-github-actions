import { useState } from 'react'
import './App.css'

const navLinks = ['Home', 'Menu', 'How It Works', 'About', 'Contact']

const stats = [
  { value: '500+', label: 'Restaurants' },
  { value: '1M+', label: 'Happy Customers' },
  { value: '30 min', label: 'Average Delivery' },
]

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 4.5 13.5H11l-1 8.5 9.5-12.5H13l1-7.5z" />
      </svg>
    ),
    title: 'Fast Delivery',
    text: 'Hot meals at your door in 30 minutes or less, with live order tracking every step of the way.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
    title: 'Fresh Ingredients',
    text: 'Partner restaurants source locally and cook every order fresh — never frozen, never reheated.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: 'Easy Ordering',
    text: 'Browse menus, customize your meal and pay in a few taps. Reorder your favorites with one click.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />
      </svg>
    ),
    title: 'Top-Rated Restaurants',
    text: 'Only the best make the list. Every restaurant is vetted and rated by real customers like you.',
  },
]

const dishes = [
  { emoji: '🍔', name: 'Classic Smash Burger', desc: 'Double patty, cheddar, house sauce', rating: 4.8, price: 8.99, tag: 'Bestseller' },
  { emoji: '🍕', name: 'Margherita Pizza', desc: 'Fresh basil, mozzarella, tomato', rating: 4.7, price: 10.5, tag: 'Popular' },
  { emoji: '🍣', name: 'Salmon Sushi Set', desc: '12 pcs chef-selected fresh salmon', rating: 4.9, price: 16.0, tag: 'Premium' },
  { emoji: '🥗', name: 'Mediterranean Bowl', desc: 'Quinoa, feta, olives, lemon dressing', rating: 4.6, price: 9.25, tag: 'Healthy' },
  { emoji: '🌮', name: 'Street Tacos Trio', desc: 'Carne asada, chicken, al pastor', rating: 4.8, price: 11.0, tag: 'Popular' },
  { emoji: '🍜', name: 'Spicy Ramen', desc: 'Rich broth, soft egg, chashu pork', rating: 4.9, price: 12.75, tag: 'Bestseller' },
]

const steps = [
  { num: '1', title: 'Browse & Choose', text: 'Explore hundreds of menus from restaurants near you.' },
  { num: '2', title: 'Place Your Order', text: 'Customize your meal and check out securely in seconds.' },
  { num: '3', title: 'Enjoy Your Meal', text: 'Track your rider live and enjoy food delivered hot.' },
]

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [address, setAddress] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    alert(address.trim() ? `Finding restaurants near "${address.trim()}"...` : 'Please enter your delivery address.')
  }

  return (
    <div className="landing">
      {/* ===== Header ===== */}
      <header className="header">
        <div className="container header-inner">
          <a href="#home" className="logo">
            <span className="logo-mark">🍔</span> QuickBite
          </a>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMenuOpen(false)}>
                {link}
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

      <main>
        {/* ===== Hero ===== */}
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

        {/* ===== Features ===== */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-head">
              <h2>Why order with QuickBite?</h2>
              <p>We handle the hard parts so you can just enjoy the food.</p>
            </div>
            <div className="features-grid">
              {features.map((f) => (
                <div key={f.title} className="feature-card">
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Popular Dishes ===== */}
        <section id="menu" className="section section-alt">
          <div className="container">
            <div className="section-head">
              <h2>Popular near you</h2>
              <p>The dishes everyone in your city is ordering this week.</p>
            </div>
            <div className="dishes-grid">
              {dishes.map((d) => (
                <article key={d.name} className="dish-card">
                  <div className="dish-img">
                    <span className="dish-tag">{d.tag}</span>
                    <span className="dish-emoji">{d.emoji}</span>
                  </div>
                  <div className="dish-body">
                    <div className="dish-top">
                      <h3>{d.name}</h3>
                      <span className="dish-rating"><StarIcon /> {d.rating}</span>
                    </div>
                    <p>{d.desc}</p>
                    <div className="dish-foot">
                      <span className="dish-price">${d.price.toFixed(2)}</span>
                      <button type="button" className="btn btn-primary btn-sm">Add to cart</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== How It Works ===== */}
        <section id="how-it-works" className="section">
          <div className="container">
            <div className="section-head">
              <h2>How it works</h2>
              <p>Dinner is three simple steps away.</p>
            </div>
            <div className="steps-grid">
              {steps.map((s) => (
                <div key={s.num} className="step-card">
                  <span className="step-num">{s.num}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA Banner ===== */}
        <section className="cta">
          <div className="container cta-inner">
            <div>
              <h2>Hungry? You're two taps away.</h2>
              <p>Get the QuickBite app for exclusive deals and faster reordering.</p>
            </div>
            <div className="cta-buttons">
              <a href="#home" className="btn btn-light"> App Store</a>
              <a href="#home" className="btn btn-light">▶ Google Play</a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== Footer ===== */}
      <footer id="contact" className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <a href="#home" className="logo"><span className="logo-mark">🍔</span> QuickBite</a>
            <p>Great food from the best local restaurants, delivered fast.</p>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#about">About us</a>
            <a href="#how-it-works">Careers</a>
            <a href="#contact">Blog</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#contact">Help center</a>
            <a href="#contact">Partner with us</a>
            <a href="#contact">Rider sign-up</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@quickbite.app">hello@quickbite.app</a>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            © {new Date().getFullYear()} QuickBite. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

