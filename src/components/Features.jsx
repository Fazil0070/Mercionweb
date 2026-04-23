import { useEffect, useRef } from 'react';
import './Features.css';

export default function Features() {
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

  const features = [
    {
      num: "01",
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Optimized for Indian networks with local data centers and advanced caching."
    },
    {
      num: "02",
      icon: "🛡️",
      title: "Enterprise Security",
      desc: "DDoS protection, malware scanning, and free SSL certificates come standard."
    },
    {
      num: "03",
      icon: "🔄",
      title: "Auto Scalable",
      desc: "Handles traffic spikes gracefully without taking your business offline."
    },
    {
      num: "04",
      icon: "💾",
      title: "Daily Backups",
      desc: "Automated daily backups ensure your data is always safe and recoverable."
    },
    {
      num: "05",
      icon: "⚙️",
      title: "CyberPanel Native",
      desc: "Manage your sites effortlessly with an intuitive, modern control panel."
    },
    {
      num: "06",
      icon: "💳",
      title: "INR Billing",
      desc: "Native Razorpay integration. Pay in Rupees without forex markup fees."
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-header">
        <div ref={addToRefs} className="reveal">
          <div className="section-label">
            <div className="section-label-line"></div>
            <span className="section-label-text">// Everything You Need</span>
          </div>
          <h2 className="section-title">THE MERCION<br /><span style={{color: 'var(--red)'}}>ADVANTAGE</span></h2>
        </div>
        <div ref={addToRefs} className="reveal">
          <p className="section-desc">
            We don't nickel-and-dime you for essential features. Everything you need to run a fast, secure, and reliable website is included in every plan.
          </p>
        </div>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card reveal" ref={addToRefs}>
            <div className="feature-num">{feature.num}</div>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-desc">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
