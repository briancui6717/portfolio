import { useEffect, useState } from 'react';
import { getProfile } from '../services/api';

const Contact = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then(res => setProfile(res.data)).catch(() => {});
  }, []);

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <a href="mailto:briancui6717@gmail.com" className="text-blue-600 hover:underline">
              {profile?.email || 'briancui6717@gmail.com'}
            </a>
          </div>
          {profile?.phone && (
            <div>
              <h3 className="font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">{profile.phone}</p>
            </div>
          )}
          {profile?.location && (
            <div>
              <h3 className="font-semibold text-gray-700">Location</h3>
              <p className="text-gray-600">{profile.location}</p>
            </div>
          )}
          {profile?.linkedin && (
            <div>
              <h3 className="font-semibold text-gray-700">LinkedIn</h3>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline">
                {profile.linkedin}
              </a>
            </div>
          )}
          {profile?.github && (
            <div>
              <h3 className="font-semibold text-gray-700">GitHub</h3>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 hover:underline">
                {profile.github}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
