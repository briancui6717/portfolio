const Experience = () => {
  const experiences = [
    {
      period: '2021 – Present',
      company: 'TechFlow Solutions',
      url: 'https://www.techflowsolutions.com',
      title: 'Senior Full-Stack Developer (Contract)',
      desc: 'Worked with distributed teams and startups to develop web platforms, mobile applications, and backend services. Built modern frontend applications using React and Angular, developed REST APIs, designed reusable frontend components, and built cross-platform mobile applications using Ionic integrated with Angular.',
      bullets: []
    },
    {
      period: '2018 – 2021',
      company: 'Insight Analytics',
      url: 'https://www.insightanalytics.io',
      title: 'Full-Stack Software Engineer',
      desc: 'Worked on the monitoring and analytics platform for cloud infrastructure. Developed frontend dashboards using Angular for analytics and reporting tools, built backend services using Node.js and Python, designed REST APIs, implemented auth systems and role-based access control, and optimized database queries on PostgreSQL and MongoDB.',
      bullets: []
    },
    {
      period: '2015 – 2018',
      company: 'DigitalCraft Studios',
      url: 'https://www.digitalcraftstudios.com',
      title: 'Web & Mobile Application Developer',
      desc: 'Developed custom web and mobile applications for e-commerce and SaaS clients. Built responsive web applications using Angular, developed backend APIs using Node.js, PHP, and Python, created cross-platform mobile apps using Ionic, and managed deployments on AWS and Linux environments.',
      bullets: []
    }
  ];

  return (
    <section id="experience">
      <div className="exp-container">
        <div className="section-label reveal">Experience</div>
        <h2 className="reveal">Professional <em>Journey</em></h2>
        {experiences.map((exp, i) => (
          <div key={i} className="exp-item reveal">
            <div className="exp-meta">
              <div className="exp-period">{exp.period}</div>
              <div className="exp-company">{exp.company}</div>
              {exp.url && (
                <a
                  className="exp-link"
                  href={exp.url}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {new URL(exp.url).hostname}
                </a>
              )}
            </div>
            <div className="exp-content">
              <div className="exp-title">{exp.title}</div>
              <div className="exp-desc">{exp.desc}</div>
              {exp.bullets.length > 0 && (
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;