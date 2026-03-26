import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navigation />
      <Hero />
      <div className="divider"></div>
      <About />
      <div className="divider"></div>
      <Skills />
      <div className="divider"></div>
      <Experience />
      <div className="divider"></div>
      <Education />
      <div className="divider"></div>
      <Contact />
      <footer>
        <div className="footer-name">Brian Cui</div>
        <div className="footer-copy">© 2026 All Rights Reserved</div>
      </footer>
    </div>
  );
}

export default App;
