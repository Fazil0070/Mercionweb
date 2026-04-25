import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
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

  const audiences = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      ),
      title: "Startups",
      desc: "Launch your venture with hosting that scales with your growth. Fast infrastructure, transparent pricing, and support that understands your journey."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: "Entrepreneurs",
      desc: "Turn your ideas into reality with reliable hosting. From MVP to scale, we provide the infrastructure you need to build and grow your business."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.66 4 3 9 3s9-1.34 9-3v-5" />
        </svg>
      ),
      title: "Freelancers",
      desc: "Launch client projects fast without burning through your budget. Reliable hosting that keeps your portfolio and client sites running smoothly."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
      title: "E-Commerce Stores",
      desc: "Run your store on fast, secure infrastructure built to handle traffic spikes. SSL, backups, and uptime that keeps sales flowing."
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-header">
        <div ref={addToRefs} className="reveal">
          <div className="section-label">
            <div className="section-label-line"></div>
            <span className="section-label-text">// Who We Serve</span>
          </div>
          <h2 className="section-title">
            BUILT FOR THE<br />
            <span style={{ color: 'var(--red)' }}>DOERS.</span>
          </h2>
        </div>
        <div ref={addToRefs} className="reveal">
          <p className="section-desc about-desc">
            Mercion was created with one goal: make powerful web hosting accessible to everyone. 
            Whether you are shipping your first project or running a growing store, we have got your back 
            with transparent pricing and infrastructure that just works.
          </p>
        </div>
      </div>

      <div className="about-grid">
        {audiences.map((audience, index) => (
          <div key={index} className="about-card reveal" ref={addToRefs}>
            <div className="about-card-icon">{audience.icon}</div>
            <h3 className="about-card-title">{audience.title}</h3>
            <p className="about-card-desc">{audience.desc}</p>
            <div className="about-card-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
