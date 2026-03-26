import { useEffect, useState } from 'react';
import { getProfile } from '../services/api';

const Skills = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(res => setProfile(res.data)).catch(() => {});
  }, []);

  const defaultSkills = [
    { category: 'Languages', items: ['JavaScript', 'Python', 'PHP', 'C++', 'Ruby', 'HTML', 'CSS'] },
    { category: 'Frontend', items: ['Angular', 'component-based UI architecture', 'responsive web development'] },
    { category: 'Mobile Development', items: ['Ionic (Angular-based mobile apps)'] },
    { category: 'Backend', items: ['Node.js', 'Django', 'REST API development'] },
    { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra'] },
    { category: 'DevOps', items: ['Linux system administration', 'shell scripting', 'Docker containerization'] }
  ];

  const skills = profile?.skills || defaultSkills;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Skills & Tools</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{skill.category}</h2>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, j) => (
                <span key={j} className="bg-gray-200 px-3 py-1 rounded-full text-sm">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
