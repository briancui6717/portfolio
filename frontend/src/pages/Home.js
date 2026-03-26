import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../services/api';

const Home = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(res => setProfile(res.data)).catch(() => {});
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            {profile?.name || 'Brian Cui'}
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            {profile?.title || 'Senior Full-Stack & Mobile Developer'}
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {profile?.bio || "Senior software developer with 10+ years of experience building web applications, mobile apps, and backend services. Strong background in JavaScript ecosystems, with extensive experience developing frontend applications using Angular and building backend services with Node.js and Django. Comfortable working across the stack—from frontend architecture to backend services—and building applications that are maintainable and scalable. Experienced in building responsive web platforms and cross-platform mobile applications, as well as managing deployments on Linux-based environments."}
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <Link to="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get In Touch
            </Link>
            <Link to="/projects" className="bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition">
              View Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
