const Skills = () => {
  const skills = [
    {
      icon: '⬡',
      title: 'Languages',
      tags: ['JavaScript', 'Python', 'PHP', 'C++', 'Ruby', 'HTML / CSS']
    },
    {
      icon: '⚛️',
      title: 'Frontend',
      tags: ['Angular', 'component-based UI architecture', 'responsive web development']
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      tags: ['Ionic (Angular-based mobile apps)']
    },
    {
      icon: '🔧',
      title: 'Backend',
      tags: ['Node.js', 'Django', 'REST API development']
    },
    {
      icon: '🗄️',
      title: 'Databases',
      tags: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra']
    },
    {
      icon: '🐳',
      title: 'DevOps',
      tags: ['Linux system administration', 'shell scripting', 'Docker containerization']
    }
  ];

  return (
    <section id="skills">
      <div className="skills-section">
        <div className="section-label reveal">Expertise</div>
        <h2 className="reveal">Technical <em>Stack</em></h2>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <div key={i} className="skill-card reveal">
              <span className="skill-card-icon">{skill.icon}</span>
              <div className="skill-card-title">{skill.title}</div>
              <div className="skill-tags">
                {skill.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;