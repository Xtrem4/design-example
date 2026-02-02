import './FeaturesPromo.css'

export default function FeaturesPromo() {
  return (
    <section className="features-promo">
      {/* Full-width banner */}
      <div className="promo-banner">
        <div className="promo-banner-content">
          <p className="promo-banner-eyebrow">Trade In</p>
          <h2 className="promo-banner-title">
            Get $200&ndash;$650 in credit when you trade in iPhone 12 or higher.
          </h2>
          <a href="#" className="promo-link">
            See what your device is worth {'>'}
          </a>
        </div>
      </div>

      {/* Card grid */}
      <div className="promo-cards">
        <div className="promo-card promo-card--wide promo-card--dark">
          <div className="promo-card-content">
            <div className="promo-card-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="#1c1c1e" />
                <path d="M18 8l2.5 6h6.5l-5 4 2 6.5L18 21l-6 3.5 2-6.5-5-4h6.5L18 8z" fill="#f5c518" />
              </svg>
            </div>
            <h3>Apple Intelligence</h3>
            <p>AI that knows you, helps you, and protects your privacy.</p>
            <a href="#">Learn more {'>'}</a>
          </div>
          <div className="promo-card-art ai-art">
            <div className="ai-orb ai-orb-1" />
            <div className="ai-orb ai-orb-2" />
            <div className="ai-orb ai-orb-3" />
          </div>
        </div>

        <div className="promo-card promo-card--light">
          <div className="promo-card-content">
            <div className="promo-card-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="#007aff" />
                <path d="M10 18h16M18 10v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3>Apple Card</h3>
            <p>Get up to 3% Daily Cash back with every purchase.</p>
            <a href="#">Learn more {'>'}</a>
          </div>
        </div>

        <div className="promo-card promo-card--light">
          <div className="promo-card-content">
            <div className="promo-card-icon">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="8" fill="#30d158" />
                <circle cx="18" cy="18" r="8" stroke="white" strokeWidth="2.5" fill="none" />
                <path d="M15 18l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3>Apple Fitness+</h3>
            <p>The first fitness service powered by Apple Watch.</p>
            <a href="#">Learn more {'>'}</a>
          </div>
        </div>

        <div className="promo-card promo-card--wide promo-card--gradient">
          <div className="promo-card-content promo-card-content--center">
            <p className="promo-eyebrow-light">Apple TV+</p>
            <h3 className="promo-tv-title">Stream award‑winning Apple Originals.</h3>
            <p className="promo-tv-sub">Try it free</p>
            <a href="#" className="promo-link-white">
              Learn more {'>'}
            </a>
          </div>
          <div className="promo-card-art tv-art">
            <div className="tv-glow" />
          </div>
        </div>
      </div>
    </section>
  )
}
