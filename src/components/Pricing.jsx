import { useState, useEffect, useRef } from 'react';
import './Pricing.css';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
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

  const plans = {
    basic:    { name: "Starter",    monthly: 179, annual: Math.round(179 * 10 / 12), features: ["1 Website", "10 GB NVMe Storage", "Unmetered Bandwidth", "Free SSL Certificate", "Daily Backups"], enterprise: false },
    standard: { name: "Pro",        monthly: 329, annual: Math.round(329 * 10 / 12), features: ["5 Websites", "50 GB NVMe Storage", "Unmetered Bandwidth", "Free SSL Certificate", "Daily Backups", "Priority Support"], featured: true, enterprise: false },
    premium:  { name: "Business",   monthly: 549, annual: Math.round(549 * 10 / 12), features: ["Unlimited Websites", "100 GB NVMe Storage", "Unmetered Bandwidth", "Free SSL Certificate", "Daily Backups", "Priority Support", "Dedicated IP"], enterprise: false },
    enterprise: { name: "Enterprise", monthly: null, annual: null, features: ["Unlimited Everything", "Custom NVMe Storage", "Dedicated Servers", "99.99% SLA Uptime", "24/7 Dedicated Support", "Custom Security Rules", "Managed Migrations", "Private Cloud Option"], enterprise: true }
  };

  const formatPrice = (price) => price.toLocaleString('en-IN');

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-bg-text">PRICING</div>
      <div className="pricing-header reveal" ref={addToRefs}>
        <div className="section-label">
          <div className="section-label-line"></div>
          <span className="section-label-text">// Honest Pricing</span>
        </div>
        <h2 className="section-title">NO RENEWAL <span style={{color: 'var(--red)'}}>SHOCKS.</span></h2>
      </div>

      <div className="billing-toggle reveal" ref={addToRefs}>
        <span className={`toggle-label ${!isAnnual ? 'active' : ''}`}>Monthly</span>
        <div className={`toggle-switch ${isAnnual ? 'on' : ''}`} onClick={() => setIsAnnual(!isAnnual)}>
          <div className="toggle-thumb"></div>
        </div>
        <span className={`toggle-label ${isAnnual ? 'active' : ''}`}>Annually</span>
        <span className="annual-badge">2 MONTHS FREE</span>
      </div>

      <div className="pricing-grid">
        {Object.entries(plans).map(([key, plan]) => {
          const currentPrice = isAnnual ? plan.annual : plan.monthly;
          const saving = plan.monthly * 2;

          return (
            <div key={key} className={`plan-card reveal ${plan.featured ? 'featured' : ''} ${plan.enterprise ? 'enterprise' : ''}`} ref={addToRefs}>
              {plan.featured && (
                <div className="plan-pick-ribbon">
                  <div className="plan-pick-glow"></div>
                  <div className="plan-pick-text">
                    <span className="plan-pick-star">★</span>
                    MERCION PICK
                  </div>
                </div>
              )}
              <div className="plan-top-line"></div>
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price-wrap">
                {plan.enterprise ? (
                  <>
                    <div className="plan-enterprise-label">Custom Pricing</div>
                    <div className="plan-enterprise-sub">Tailored to your infrastructure needs.</div>
                  </>
                ) : (
                  <>
                    <div className="plan-original-price">
                      {isAnnual ? `₹${formatPrice(plan.monthly)}/mo normally` : '\u00A0'}
                    </div>
                    <div className="plan-price">
                      <span className="currency">₹</span>
                      <span className="amount">{formatPrice(currentPrice)}</span>
                    </div>
                    <div className="plan-period">{isAnnual ? '/ month, billed annually' : '/ month'}</div>
                    <div className="plan-savings" style={{ opacity: isAnnual ? 1 : 0 }}>
                      ✦ SAVE ₹{formatPrice(saving)} IN YEAR ONE
                    </div>
                  </>
                )}
              </div>
              <div className="plan-divider"></div>
              <ul className="plan-features">
                {plan.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              {plan.enterprise ? (
                <a href="#contact" className="plan-cta plan-cta-enterprise">Contact Us →</a>
              ) : (
                <a href="#contact" className="plan-cta">{plan.featured ? 'Get Started →' : 'Select Plan'}</a>
              )}
            </div>
          );
        })}
      </div>

      <div className="annual-note reveal" ref={addToRefs} style={{ display: isAnnual ? 'flex' : 'none' }}>
        <div className="annual-note-icon">💡</div>
        <div className="annual-note-text">
          <strong>SMART CHOICE:</strong> You're getting 12 months of hosting for the price of 10!
        </div>
      </div>
    </section>
  );
}
