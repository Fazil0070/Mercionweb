import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-bg-orb"></div>
      <div className="contact-bg-orb contact-bg-orb2"></div>

      <div className="contact-inner">
        {/* Header */}
        <div className="contact-header">
          <div className="section-label">
            <div className="section-label-line"></div>
            <span className="section-label-text">// Get In Touch</span>
          </div>
          <h2 className="section-title">LET'S BUILD SOMETHING <span style={{ color: 'var(--red)' }}>GREAT.</span></h2>
          <p className="section-desc">Have a question, need a custom enterprise plan, or want to discuss your infrastructure needs? We respond within 2 hours.</p>
        </div>

        <div className="contact-layout">
          {/* Info Panel */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <div>
                <div className="contact-info-label">Email Us</div>
                <a href="mailto:support@mercioncloud.com" className="contact-info-value">support@mercioncloud.com</a>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <div>
                <div className="contact-info-label">Call Us</div>
                <a href="tel:+919999999999" className="contact-info-value">+91 99999 99999</a>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">🕐</div>
              <div>
                <div className="contact-info-label">Response Time</div>
                <div className="contact-info-value">Within 2 Hours</div>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div>
                <div className="contact-info-label">Based In</div>
                <div className="contact-info-value">India 🇮🇳</div>
              </div>
            </div>

            <div className="contact-status-panel">
              <div className="status-dot-live"></div>
              <span>All systems operational — 99.9% uptime guaranteed</span>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">✅</div>
                <h3>Message Received!</h3>
                <p>Our team will get back to you within 2 hours. Check your inbox for a confirmation.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: '24px' }}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name <span className="required">*</span></label>
                    <input
                      id="contact-name"
                      className="form-input"
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address <span className="required">*</span></label>
                    <input
                      id="contact-email"
                      className="form-input"
                      type="email"
                      name="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">Company / Organization</label>
                    <input
                      id="contact-company"
                      className="form-input"
                      type="text"
                      name="company"
                      placeholder="Acme Corp."
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject <span className="required">*</span></label>
                    <select
                      id="contact-subject"
                      className="form-input form-select"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a topic…</option>
                      <option value="enterprise">Enterprise Plan Inquiry</option>
                      <option value="sales">Sales &amp; Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="migration">Website Migration</option>
                      <option value="billing">Billing Question</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Your Message <span className="required">*</span></label>
                  <textarea
                    id="contact-message"
                    className="form-input form-textarea"
                    name="message"
                    placeholder="Tell us about your project, your current hosting situation, and what you need..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
