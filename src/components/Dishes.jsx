const dishes = [
  { emoji: '🍔', name: 'Classic Smash Burger', desc: 'Double patty, cheddar, house sauce', rating: 4.8, price: 8.99, tag: 'Bestseller' },
  { emoji: '🍕', name: 'Margherita Pizza', desc: 'Fresh basil, mozzarella, tomato', rating: 4.7, price: 10.5, tag: 'Popular' },
  { emoji: '🍣', name: 'Salmon Sushi Set', desc: '12 pcs chef-selected fresh salmon', rating: 4.9, price: 16.0, tag: 'Premium' },
  { emoji: '🥗', name: 'Mediterranean Bowl', desc: 'Quinoa, feta, olives, lemon dressing', rating: 4.6, price: 9.25, tag: 'Healthy' },
  { emoji: '🌮', name: 'Street Tacos Trio', desc: 'Carne asada, chicken, al pastor', rating: 4.8, price: 11.0, tag: 'Popular' },
  { emoji: '🍜', name: 'Spicy Ramen', desc: 'Rich broth, soft egg, chashu pork', rating: 4.9, price: 12.75, tag: 'Bestseller' },
]

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01z" />
    </svg>
  )
}

function Dishes() {
  return (
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
  )
}

export default Dishes
