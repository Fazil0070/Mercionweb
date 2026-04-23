import './Ticker.css';

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <span className="ticker-item">99.9% UPTIME GUARANTEED</span>
        <span className="ticker-item">NO HIDDEN RENEWAL FEES</span>
        <span className="ticker-item">ENTERPRISE SECURITY</span>
        <span className="ticker-item">24/7 EXPERT SUPPORT</span>
        <span className="ticker-item">INDIA-FIRST INFRASTRUCTURE</span>
        {/* Duplicate for seamless loop */}
        <span className="ticker-item">99.9% UPTIME GUARANTEED</span>
        <span className="ticker-item">NO HIDDEN RENEWAL FEES</span>
        <span className="ticker-item">ENTERPRISE SECURITY</span>
        <span className="ticker-item">24/7 EXPERT SUPPORT</span>
        <span className="ticker-item">INDIA-FIRST INFRASTRUCTURE</span>
      </div>
    </div>
  );
}
