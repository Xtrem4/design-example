import { useState } from 'react'
import './Navbar.css'

const navLinks = [
  'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods',
  'TV & Home', 'Entertainment', 'Accessories', 'Support'
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="navbar-logo" aria-label="Home">
          <svg height="18" viewBox="0 0 17 18" width="17" fill="currentColor">
            <path d="M8.5 1.625C4.875.062 1.5 2.875 1.5 6.25c0 4.063 5.25 9.75 7 10.625 1.75-.875 7-6.563 7-10.625 0-3.375-3.375-6.188-7-4.625z" />
          </svg>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button className="navbar-icon" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11.5 7a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.82 4.74a6 6 0 1 1 1.06-1.06l3.04 3.04a.75.75 0 1 1-1.06 1.06l-3.04-3.04Z"/>
            </svg>
          </button>
          <button className="navbar-icon" aria-label="Shopping bag">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="currentColor">
              <path d="M11.5 4V3a4.5 4.5 0 0 0-9 0v1H0v12.5A1.5 1.5 0 0 0 1.5 18h11a1.5 1.5 0 0 0 1.5-1.5V4h-2.5ZM4 3a3 3 0 0 1 6 0v1H4V3Zm8.5 13.5h-11V5.5h11v11Z"/>
            </svg>
          </button>
          <button
            className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />}
    </nav>
  )
}
