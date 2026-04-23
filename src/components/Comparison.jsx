import { useEffect, useRef } from 'react';
import './Comparison.css';

export default function Comparison() {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 100);
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="comparison">
      <div className="comparison-bg-text">VS</div>
      <div className="comparison-header reveal" ref={addToRefs}>
        <div className="section-label">
          <div className="section-label-line"></div>
          <span className="section-label-text">// The Reality Check</span>
        </div>
        <h2 className="section-title">WHY PAY MORE<br />FOR <span style={{color: 'var(--red)'}}>LESS?</span></h2>
        <p className="comparison-subtitle">
          See how we stack up against the "big names" in the Indian hosting market.
        </p>
      </div>

      <div className="compare-table-wrap reveal" ref={addToRefs}>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature / Metric</th>
              <th className="mercion-col">MERCION</th>
              <th>Hostinger (IN)</th>
              <th>GoDaddy (IN)</th>
              <th>Bluehost (IN)</th>
              <th>BigRock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="feature-col">Base Renewal Price</td>
              <td className="mercion-col" style={{color: 'var(--green)'}}>₹179/mo</td>
              <td><span className="cross">✘</span> ₹349+/mo</td>
              <td><span className="cross">✘</span> ₹499+/mo</td>
              <td><span className="cross">✘</span> ₹499+/mo</td>
              <td><span className="cross">✘</span> ₹399+/mo</td>
            </tr>
            <tr>
              <td className="feature-col">Performance Tech</td>
              <td className="mercion-col"><span className="check">✔</span> OLS + NVMe</td>
              <td><span className="partial">LiteSpeed</span></td>
              <td><span className="cross">✘</span> Apache + HDD</td>
              <td><span className="cross">✘</span> Apache</td>
              <td><span className="cross">✘</span> Apache</td>
            </tr>
            <tr>
              <td className="feature-col">Control Panel</td>
              <td className="mercion-col"><span className="check">✔</span> CyberPanel</td>
              <td><span className="partial">hPanel (Custom)</span></td>
              <td><span className="partial">cPanel</span></td>
              <td><span className="partial">cPanel</span></td>
              <td><span className="partial">cPanel</span></td>
            </tr>
            <tr>
              <td className="feature-col">Free SSL & Backups</td>
              <td className="mercion-col"><span className="check">✔</span> Included</td>
              <td><span className="check">✔</span> Included</td>
              <td><span className="cross">✘</span> Paid Extra</td>
              <td><span className="partial">1st Year Only</span></td>
              <td><span className="cross">✘</span> Paid Extra</td>
            </tr>
            <tr>
              <td className="feature-col">Support Quality</td>
              <td className="mercion-col"><span className="check">✔</span> Expert (Under 2hr)</td>
              <td><span className="check">✔</span></td>
              <td><span className="partial">Long wait times</span></td>
              <td><span className="partial">Chat only</span></td>
              <td><span className="partial">Ticket only</span></td>
            </tr>
            <tr>
              <td className="feature-col">INR Billing + Razorpay</td>
              <td className="mercion-col"><span className="check">✔</span> Native</td>
              <td><span className="partial">Limited</span></td>
              <td><span className="partial">Limited</span></td>
              <td><span className="cross">✘</span></td>
              <td><span className="check">✔</span></td>
            </tr>
            <tr>
              <td className="feature-col">Auto Scaling</td>
              <td className="mercion-col"><span className="check">✔</span> Premium</td>
              <td><span className="cross">✘</span></td>
              <td><span className="cross">✘</span></td>
              <td><span className="cross">✘</span></td>
              <td><span className="cross">✘</span></td>
            </tr>
            <tr className="highlight-row">
              <td className="feature-col">Annual Plan: 2 Months Free</td>
              <td className="mercion-col"><span className="check">✔</span> 1st Year</td>
              <td><span className="cross">✘</span></td>
              <td><span className="cross">✘</span></td>
              <td><span className="cross">✘</span></td>
              <td><span className="cross">✘</span></td>
            </tr>
            <tr>
              <td className="feature-col">Hidden Renewal Fees</td>
              <td className="mercion-col" style={{color: 'var(--green)'}}>None. Ever.</td>
              <td><span className="cross">✘</span> 2x renewal</td>
              <td><span className="cross">✘</span> 3x renewal</td>
              <td><span className="cross">✘</span> High renewal</td>
              <td><span className="cross">✘</span> Varies</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="compare-banner reveal" ref={addToRefs}>
        <div className="compare-banner-text">
          <strong>Less Cost. More Reliable. More Secure.</strong>
          MERCION offers the most value per rupee with enterprise features at startup-friendly pricing — and zero hidden charges.
        </div>
        <div className="compare-pillars">
          <div className="compare-pillar"><div className="compare-pillar-dot"></div><span className="compare-pillar-text">Most Affordable</span></div>
          <div className="compare-pillar"><div className="compare-pillar-dot"></div><span class="compare-pillar-text">99.9% Uptime</span></div>
          <div className="compare-pillar"><div className="compare-pillar-dot"></div><span className="compare-pillar-text">Enterprise Security</span></div>
          <div className="compare-pillar"><div className="compare-pillar-dot"></div><span className="compare-pillar-text">Zero Hidden Fees</span></div>
        </div>
      </div>
    </section>
  );
}
