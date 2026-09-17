const steps = [
  { num: '1', title: 'Browse & Choose', text: 'Explore hundreds of menus from restaurants near you.' },
  { num: '2', title: 'Place Your Order', text: 'Customize your meal and check out securely in seconds.' },
  { num: '3', title: 'Enjoy Your Meal', text: 'Track your rider live and enjoy food delivered hot.' },
]

function HowItWorks() {
  return (
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
  )
}

export default HowItWorks
