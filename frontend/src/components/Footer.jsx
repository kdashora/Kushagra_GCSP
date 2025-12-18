import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-rose-400 bg-clip-text text-transparent">
              Kushagra Dashora
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Grand Challenges Scholar
            </p>
            <p className="text-slate-400 leading-relaxed">
              Robotics Engineering
            </p>
            <p className="text-slate-400 leading-relaxed">
              Arizona State University
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Grand Challenge Theme</h4>
            <p className="text-teal-400 text-xl font-bold mb-2">Joy of Living</p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Developing technologies that enhance quality of life and restore independence to individuals facing physical challenges.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Program Information</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              Grand Challenges Scholars Program
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-2">
              Ira A. Fulton Schools of Engineering
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Expected Graduation: Spring 2026
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Kushagra Dashora. GCSP Digital Portfolio.
            </p>
            <div className="flex gap-4">
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition-colors">
                <Mail size={20} />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition-colors">
                <Linkedin size={20} />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white p-3 rounded-lg transition-colors">
                <Github size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
