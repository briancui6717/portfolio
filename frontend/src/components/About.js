const About = () => {
  return (
    <section id="about">
      <div className="about-grid">
        <div className="about-text reveal">
          <div className="section-label">About</div>
          <h2>Building systems that <em>scale</em></h2>
          <p>Senior full-stack developer with a decade of experience building <strong>web applications, mobile apps, backend services,</strong> and business software solutions across the full product lifecycle.</p>
          <p>I thrive across the stack — from frontend architecture to backend services and deployment pipelines — with a focus on <strong>maintainability, scalability, and performance.</strong></p>
          <p>Deeply experienced in modernizing legacy environments, containerizing services, and improving backend portability for distributed and startup teams.</p>
        </div>
        <div className="about-right reveal" style={{ transitionDelay: '0.15s' }}>
          <div className="info-row">
            <span className="info-key">Location</span>
            <span className="info-val">Remote (Worldwide)</span>
          </div>
          <div className="info-row">
            <span className="info-key">Email</span>
            <span className="info-val">briancui6717@gmail.com</span>
          </div>
          <div className="info-row">
            <span className="info-key">Focus</span>
            <span className="info-val">MERN Stack · AI Integration · DevOps</span>
          </div>
          <div className="info-row">
            <span className="info-key">Type</span>
            <span className="info-val">Contract · Freelance</span>
          </div>
          <div className="info-row">
            <span className="info-key">Status</span>
            <span className="info-val" style={{ color: '#5dba7e' }}>● Open to Work</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;