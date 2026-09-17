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

function Features() {
  return (
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
  )
}

export default Features
