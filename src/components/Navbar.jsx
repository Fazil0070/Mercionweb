import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#" className="nav-logo">
        <img src="/mercionen.png" alt="Mercion Logo" className="nav-brand-img" />
        <span className="nav-brand-text">MERCION</span>
      </a>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#why">Why Us</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact" className="nav-cta">Get Started</a></li>
      </ul>
    </nav>
  );
}
