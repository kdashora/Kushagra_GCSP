import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Research from './Research';
import Multidisciplinary from './Multidisciplinary';
import Entrepreneurship from './Entrepreneurship';
import Multicultural from './Multicultural';
import ServiceLearning from './ServiceLearning';
import Conclusion from './Conclusion';
import Footer from './Footer';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'research', 'multidisciplinary', 'entrepreneurship', 'multicultural', 'service', 'conclusion'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <Navigation activeSection={activeSection} />
      <Hero />
      <AboutMe />
      <Research />
      <Multidisciplinary />
      <Entrepreneurship />
      <Multicultural />
      <ServiceLearning />
      <Conclusion />
      <Footer />
    </div>
  );
};

export default Portfolio;
