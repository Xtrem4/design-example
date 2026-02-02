import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">iPhone 16 Pro</h1>
        <h2 className="hero-subtitle">Hello, Apple Intelligence.</h2>
        <div className="hero-cta">
          <a href="#" className="btn-primary">Learn more</a>
          <a href="#" className="btn-secondary">Buy</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-phone">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-gradient"></div>
              <div className="phone-time">9:41</div>
              <div className="phone-camera"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="hero-footnote">Built for Apple Intelligence. Personal. Private. Powerful.</p>
    </section>
  )
}
