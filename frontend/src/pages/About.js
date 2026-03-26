import { useEffect, useState } from 'react';
import { getProfile } from '../services/api';

const About = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(res => setProfile(res.data)).catch(() => {});
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Me</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          {profile?.bio || "Senior software developer with 10+ years of experience building web applications, mobile apps, and backend services. Strong background in JavaScript ecosystems, with extensive experience developing frontend applications using Angular and building backend services with Node.js and Django. Comfortable working across the stack—from frontend architecture to backend services—and building applications that are maintainable and scalable. Experienced in building responsive web platforms and cross-platform mobile applications, as well as managing deployments on Linux-based environments."}
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {profile?.education?.map((edu, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-xl font-semibold">{edu.institution}</h3>
            <p className="text-gray-600">{edu.degree}</p>
            <p className="text-gray-500 text-sm">{edu.year}</p>
          </div>
        )) || (
          <>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Riverdale City College</h3>
              <p className="text-gray-600">Bachelor of Science in Computer Science</p>
              <p className="text-gray-500 text-sm">2011 - 2015</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Tech Institute of Advanced Studies</h3>
              <p className="text-gray-600">Certificate in Full-Stack Web Development</p>
              <p className="text-gray-500 text-sm">2017</p>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Cloud Computing Academy</h3>
              <p className="text-gray-600">Professional Certificate in DevOps & Cloud Architecture</p>
              <p className="text-gray-500 text-sm">2019</p>
            </div>
          </>
        )}

        <h2 className="text-2xl font-bold mt-8 mb-4">What I Bring</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>10+ years of experience building web applications, mobile apps, and backend services</li>
          <li>Strong background in JavaScript ecosystems</li>
          <li>Extensive experience developing frontend applications using Angular</li>
          <li>Building backend services with Node.js and Django</li>
          <li>Comfortable working across the stack—from frontend architecture to backend services</li>
          <li>Building applications that are maintainable and scalable</li>
          <li>Experienced in building responsive web platforms and cross-platform mobile applications</li>
          <li>Managing deployments on Linux-based environments</li>
        </ul>

        <p className="mt-6 text-gray-700">
          <strong>Availability:</strong> {profile?.availability || 'Available for remote contract or freelance work (around 30 hours per week)'}
        </p>
      </div>
    </div>
  );
};

export default About;
