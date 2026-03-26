const Education = () => {
  const educations = [
    {
      icon: '🎓',
      degree: 'Bachelor of Science in Computer Science',
      school: 'Riverdale City College',
      year: '2011 – 2015'
    },
    {
      icon: '📜',
      degree: 'Certificate in Full-Stack Web Development',
      school: 'Tech Institute of Advanced Studies',
      year: '2017'
    },
    {
      icon: '☁️',
      degree: 'Professional Certificate in DevOps & Cloud Architecture',
      school: 'Cloud Computing Academy',
      year: '2019'
    }
  ];

  return (
    <section id="education">
      <div className="edu-grid">
        <div className="section-label reveal">Education</div>
        <h2 className="reveal">Academic <em>Background</em></h2>
        {educations.map((edu, i) => (
          <div key={i} className="edu-card reveal">
            <div className="edu-icon">{edu.icon}</div>
            <div>
              <div className="edu-degree">{edu.degree}</div>
              <div className="edu-school">{edu.school}</div>
              <div className="edu-year">{edu.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;