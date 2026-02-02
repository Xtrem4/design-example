import './Footer.css'

const footerSections = [
  {
    title: 'Shop and Learn',
    links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'AirPods', 'TV & Home', 'AirTag', 'Accessories'],
  },
  {
    title: 'Services',
    links: ['Apple Music', 'Apple TV+', 'Apple Fitness+', 'Apple News+', 'Apple Arcade', 'iCloud', 'Apple One', 'Apple Card'],
  },
  {
    title: 'Apple Store',
    links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Group Reservations', 'Apple Camp', 'Apple Trade In', 'Financing', 'Order Status'],
  },
  {
    title: 'For Business',
    links: ['Apple and Business', 'Shop for Business'],
  },
  {
    title: 'Apple Values',
    links: ['Accessibility', 'Education', 'Environment', 'Inclusion and Diversity', 'Privacy', 'Supply Chain'],
  },
  {
    title: 'About Apple',
    links: ['Newsroom', 'Apple Leadership', 'Career Opportunities', 'Investors', 'Ethics & Compliance', 'Events', 'Contact Apple'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-disclaimer">
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device.
          Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit.
          Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card.
        </p>

        <div className="footer-divider" />

        <div className="footer-columns">
          {footerSections.map(section => (
            <div key={section.title} className="footer-column">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map(link => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copyright">
            More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you.
            Or call 1-800-MY-APPLE.
          </p>
          <div className="footer-bottom-row">
            <p>Copyright &copy; 2026 Apple Inc. All rights reserved.</p>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">Sales and Refunds</a>
              <a href="#">Legal</a>
              <a href="#">Site Map</a>
            </div>
            <p className="footer-locale">United States</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
