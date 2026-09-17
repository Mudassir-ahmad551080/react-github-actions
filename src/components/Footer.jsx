const companyLinks = [
  { label: 'About us', href: '#about' },
  { label: 'Careers', href: '#contact' },
  { label: 'Blog', href: '#home' },
]

const supportLinks = [
  { label: 'Help center', href: '#contact' },
  { label: 'Partner with us', href: '#contact' },
  { label: 'Rider sign-up', href: '#contact' },
]

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="logo"><span className="logo-mark">🍔</span> QuickBite</a>
          <p>Great food from the best local restaurants, delivered fast.</p>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          {companyLinks.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          {supportLinks.map(({ label, href }) => (
            <a key={label} href={href}>{label}</a>
          ))}
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
  )
}

export default Footer
