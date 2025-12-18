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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-block">
          <div className="w-32 h-32 mx-auto bg-teal-500 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
            KD
          </div>
        </div>
        
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Kushagra Dashora
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-teal-300 mb-4 font-medium">
          Robotics Engineering
        </p>
        
        <p className="text-lg sm:text-xl text-slate-300 mb-8">
          Arizona State University • Spring 2026
        </p>
        
        <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl px-8 py-4 border border-white/20 mb-12">
          <p className="text-teal-200 text-sm font-medium mb-1">Grand Challenge Theme</p>
          <p className="text-2xl sm:text-3xl font-bold text-white">Joy of Living</p>
        </div>
        
        <p className="text-lg text-slate-200 max-w-3xl mx-auto mb-12 leading-relaxed">
          Grand Challenges Scholars Program Digital Portfolio
        </p>
        
        <button
          onClick={scrollToAbout}
          className="group inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl"
        >
          Explore My Journey
          <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
        </button>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </section>
  );
};

export default Hero;
