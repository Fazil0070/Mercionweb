import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const isHomePage = location.pathname === '/';

  const navLinks = isHomePage ? [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Why Us', href: '#why' },
  ] : [
    { label: 'Home', href: '/' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/mercionen.png" alt="Mercion Logo" className="nav-brand-img" />
          <span className="nav-brand-text">MERCION</span>
        </Link>

        <ul className="nav-links">
          {navLinks.map(link => (
            <li key={link.href}><Link to={link.href} onClick={closeMenu}>{link.label}</Link></li>
          ))}
          <li><Link to="/contact" className="nav-link-auth">Contact Us</Link></li>
          <li><Link to="/signin" className="nav-cta">Sign In</Link></li>
          <li><Link to="/signup" className="nav-link-auth nav-link-auth-primary">Sign Up</Link></li>
        </ul>

        <button
          className={`nav-hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`nav-overlay ${menuOpen ? 'open' : ''}`}>
        <div className="nav-overlay-bg"></div>
        <div className="nav-overlay-content">
          <ul className="nav-overlay-links">
            {navLinks.map((link, i) => (
              <li key={link.href} style={{ animationDelay: `${i * 60}ms` }}>
                <Link to={link.href} onClick={closeMenu}>
                  <span className="nav-overlay-num">0{i + 1}</span>
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ animationDelay: `${navLinks.length * 60}ms` }}>
              <Link to="/contact" onClick={closeMenu}>
                <span className="nav-overlay-num">0{navLinks.length + 1}</span>
                Contact
              </Link>
            </li>
          </ul>
          <div className="nav-overlay-auth">
            <Link to="/signin" className="nav-overlay-cta" onClick={closeMenu}>
              Sign In
            </Link>
            <Link to="/signup" className="nav-overlay-auth-link" onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
