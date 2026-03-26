const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-left">
        <div className="hero-eyebrow">Available for Remote Work</div>
        <h1>Senior<br /><em>Full-Stack</em><br />Developer</h1>
        <p className="hero-desc">10+ years crafting scalable web platforms, mobile apps, and AI-integrated systems. MERN Stack specialist with deep expertise in DevOps and ERP solutions.</p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Get in Touch</a>
          <a href="#experience" className="btn-ghost">
            View Work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-visual">
          <div className="hero-grid"></div>
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">10+</div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-label">Databases</div>
          </div>
          <div className="stat">
            <div className="stat-num">∞</div>
            <div className="stat-label">Remote First</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;