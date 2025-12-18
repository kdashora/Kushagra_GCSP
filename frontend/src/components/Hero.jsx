import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-black opacity-90"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight animate-fade-in">
            Kushagra Dashora
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
            Robotics Engineering Student
          </p>
          
          <p className="text-lg sm:text-xl text-gray-400">
            at Arizona State University
          </p>
          
          <div className="pt-8">
            <div className="inline-block">
              <p className="text-gray-400 text-sm mb-2">Grand Challenge Theme</p>
              <p className="text-3xl sm:text-4xl font-bold text-white">Joy of Living</p>
            </div>
          </div>
          
          <p className="text-gray-400 text-lg pt-4">
            Grand Challenges Scholars Program Digital Portfolio
          </p>
          
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2 text-white hover:text-gray-300 transition-all mt-12"
          >
            <span className="text-sm tracking-wider uppercase">Scroll Down</span>
            <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-500" size={32} />
      </div>
    </section>
  );
};

export default Hero;
