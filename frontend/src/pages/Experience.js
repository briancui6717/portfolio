import { useEffect, useState } from 'react';
import { getProfile } from '../services/api';

const Experience = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(res => setProfile(res.data)).catch(() => {});
  }, []);

  const defaultExperience = [
    {
      company: 'Remote SaaS & Startup Clients',
      role: 'Senior Full-Stack Developer (Contract)',
      duration: '2021 – Present',
      description: 'Worked with distributed teams and early-stage startups to develop web platforms, mobile applications, and backend services. Built modern frontend applications using Angular, developed REST APIs, designed reusable frontend components, and built cross-platform mobile applications using Ionic integrated with Angular.',
      bullets: []
    },
    {
      company: 'Cloud-Based Analytics Platform (Mid-size Startup)',
      role: 'Full-Stack Software Engineer',
      duration: '2018 – 2021',
      description: 'Worked on a SaaS analytics platform used by small and medium-sized businesses. Developed frontend dashboards using Angular for analytics and reporting tools, built backend services using Node.js and Python, designed REST APIs, implemented authentication systems and role-based access control, and optimized database queries for PostgreSQL and MongoDB.',
      bullets: []
    },
    {
      company: 'Web Application Development Studio',
      role: 'Web & Mobile Application Developer',
      duration: '2015 – 2018',
      description: 'Developed custom web and mobile applications for client projects across e-commerce, SaaS platforms, and internal business tools. Built responsive web applications using Angular, developed backend APIs using Node.js, PHP, and Python, created cross-platform mobile apps using Ionic, and managed deployments on Linux environments.',
      bullets: []
    }
  ];

  const experience = profile?.experience || defaultExperience;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Work Experience</h1>
      <div className="space-y-6">
        {experience.map((exp, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-600">{exp.role}</h2>
            <h3 className="text-xl text-gray-700">{exp.company}</h3>
            <p className="text-gray-500 mb-4">{exp.duration}</p>
            {exp.description && <p className="text-gray-700 mb-3">{exp.description}</p>}
            {exp.bullets?.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
