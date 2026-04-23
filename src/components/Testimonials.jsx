import { useEffect, useRef } from 'react';
import './Testimonials.css';

export default function Testimonials() {
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

  const testimonials = [
    {
      initial: "R",
      name: "Rahul Mehta",
      role: "Founder, TechStartup.in",
      text: "Switched from a well-known provider and the difference is night and day. Our site loads 3x faster and the billing is actually transparent. No renewal shock."
    },
    {
      initial: "P",
      name: "Priya Sharma",
      role: "E-commerce Owner",
      text: "The automated invoicing alone saved me hours every month. Support actually responds within hours, not days. Most affordable hosting I've found in India."
    },
    {
      initial: "K",
      name: "Karthik Rajan",
      role: "Web Agency, Chennai",
      text: "We host 12 client websites through MERCION. The CyberPanel setup is clean, uptime has been flawless for 8 months straight. Far more reliable than our old provider."
    }
  ];

  return (
    <section className="testimonials">
      <div className="section-label reveal" ref={addToRefs}>
        <div className="section-label-line"></div>
        <span className="section-label-text">// Client Feedback</span>
      </div>
      <h2 className="section-title reveal" ref={addToRefs}>TRUSTED BY<br />REAL BUSINESSES</h2>

      <div className="test-grid">
        {testimonials.map((test, index) => (
          <div key={index} className="test-card reveal" ref={addToRefs}>
            <div className="test-quote">"</div>
            <p className="test-text">{test.text}</p>
            <div className="test-author">
              <div className="test-avatar">{test.initial}</div>
              <div>
                <div className="test-name">{test.name}</div>
                <div className="test-role">{test.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
