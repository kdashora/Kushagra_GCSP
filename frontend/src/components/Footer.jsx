import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Let's Collaborate and change the world
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="text-lg font-bold mb-4">Kushagra Dashora</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Grand Challenges Scholar
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Robotics Engineering
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Arizona State University
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Grand Challenge Theme</h4>
            <p className="text-white text-xl font-bold mb-2">Joy of Living</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Developing technologies that enhance quality of life and restore independence.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Program Information</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Grand Challenges Scholars Program
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-2">
              Ira A. Fulton Schools of Engineering
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expected Graduation: Spring 2026
            </p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Kushagra Dashora. GCSP Digital Portfolio.
            </p>
            <div className="flex gap-4">
              <button className="text-gray-400 hover:text-white transition-colors p-2">
                <Mail size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors p-2">
                <Linkedin size={20} />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors p-2">
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
