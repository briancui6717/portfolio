const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  email: String,
  phone: String,
  location: String,
  bio: String,
  linkedin: String,
  github: String,
  availability: String,
  skills: [{
    category: String,
    items: [String]
  }],
  experience: [{
    company: String,
    role: String,
    duration: String,
    description: String
  }],
  education: [{
    institution: String,
    degree: String,
    year: String
  }],
  projects: [{
    name: String,
    description: String,
    technologies: [String],
    link: String,
    github: String
  }]
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
