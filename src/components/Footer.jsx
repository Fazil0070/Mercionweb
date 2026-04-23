import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', textDecoration: 'none'}}>
            <img src="/mercionen.png" alt="Mercion Logo" style={{height: '48px', width: 'auto', borderRadius: '4px'}} />
            <span style={{fontFamily: 'var(--font-orbitron)', fontSize: '28px', fontWeight: '700', letterSpacing: '4px', color: 'var(--white)', textTransform: 'uppercase', display: 'inline-block', marginLeft: '8px'}}>MERCION</span>
          </a>
          <div className="footer-tagline">Built for Performance. Designed for Trust.</div>
          <p className="footer-desc">
            Enterprise cloud hosting built for Indian businesses. Fast, secure, automated, and priced for growth. More affordable and more reliable than the competition.
          </p>
        </div>
        <div>
          <div className="footer-col-title">Hosting</div>
          <ul className="footer-links">
            <li><a href="#">Shared Hosting</a></li>
            <li><a href="#">VPS Hosting</a></li>
            <li><a href="#">Dedicated Servers</a></li>
            <li><a href="#">WordPress Hosting</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">Support</div>
          <ul className="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Status Page</a></li>
            <li><a href="#">SLA Policy</a></li>
            <li><a href="#pricing">Billing FAQ</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copy">© {new Date().getFullYear()} MERCION. All rights reserved.</span>
        <div className="footer-status">
          <div className="status-dot"></div>
          All systems operational
        </div>
      </div>
    </footer>
  );
}
