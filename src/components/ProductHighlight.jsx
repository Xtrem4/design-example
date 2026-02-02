import './ProductHighlight.css'

const products = [
  {
    id: 'macbook',
    title: 'MacBook Air',
    subtitle: 'Lean. Mean. M4 machine.',
    theme: 'dark',
    bg: 'linear-gradient(180deg, #000 0%, #1d1d1f 100%)',
    color: '#f5f5f7',
    tagColor: '#ff6b35',
    tag: 'New',
    visual: (
      <div className="product-visual laptop-visual">
        <div className="laptop-body">
          <div className="laptop-screen">
            <div className="screen-content">
              <div className="screen-gradient-1" />
            </div>
          </div>
          <div className="laptop-base">
            <div className="laptop-trackpad" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'ipad',
    title: 'iPad Pro',
    subtitle: 'Thinpossible.',
    theme: 'light',
    bg: '#f5f5f7',
    color: '#1d1d1f',
    tagColor: '#1d1d1f',
    tag: 'New',
    visual: (
      <div className="product-visual tablet-visual">
        <div className="tablet-frame">
          <div className="tablet-screen">
            <div className="screen-gradient-2" />
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'watch',
    title: 'Apple Watch',
    subtitle: 'Thinstant classic.',
    theme: 'dark',
    bg: 'linear-gradient(180deg, #1d1d1f 0%, #000 100%)',
    color: '#f5f5f7',
    tagColor: '#bf4800',
    tag: 'Series 10',
    visual: (
      <div className="product-visual watch-visual">
        <div className="watch-frame">
          <div className="watch-screen">
            <div className="watch-face">
              <div className="watch-dial" />
              <div className="watch-hand watch-hand-hr" />
              <div className="watch-hand watch-hand-min" />
            </div>
          </div>
          <div className="watch-band-top" />
          <div className="watch-band-bottom" />
        </div>
      </div>
    ),
  },
  {
    id: 'airpods',
    title: 'AirPods Pro 2',
    subtitle: 'Intelligent noise cancellation.',
    theme: 'light',
    bg: '#f5f5f7',
    color: '#1d1d1f',
    tagColor: '#1d1d1f',
    tag: null,
    visual: (
      <div className="product-visual airpods-visual">
        <div className="airpods-case">
          <div className="airpods-case-lid" />
          <div className="airpods-case-body">
            <div className="airpods-led" />
          </div>
        </div>
      </div>
    ),
  },
]

export default function ProductHighlight() {
  return (
    <section className="product-highlight-section">
      <div className="product-grid">
        {products.map(product => (
          <div
            key={product.id}
            className={`product-card product-card--${product.theme}`}
            style={{ background: product.bg, color: product.color }}
          >
            <div className="product-card-text">
              <h3 className="product-card-title">{product.title}</h3>
              <p className="product-card-subtitle">{product.subtitle}</p>
              {product.tag && (
                <span className="product-card-tag" style={{ color: product.tagColor }}>
                  {product.tag}
                </span>
              )}
              <div className="product-card-cta">
                <a href="#" style={{ color: product.theme === 'dark' ? '#2997ff' : '#06c' }}>
                  Learn more
                </a>
                <a href="#" style={{ color: product.theme === 'dark' ? '#2997ff' : '#06c' }}>
                  Buy {'>'}
                </a>
              </div>
            </div>
            {product.visual}
          </div>
        ))}
      </div>
    </section>
  )
}
