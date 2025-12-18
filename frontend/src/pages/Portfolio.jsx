import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import AboutMe from '../components/AboutMe';
import Research from '../components/Research';
import Multidisciplinary from '../components/Multidisciplinary';
import Entrepreneurship from '../components/Entrepreneurship';
import Multicultural from '../components/Multicultural';
import ServiceLearning from '../components/ServiceLearning';
import Conclusion from '../components/Conclusion';
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-slate-50">
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
