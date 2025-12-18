import React from 'react';
import { GraduationCap, Award, Users, Target } from 'lucide-react';

const AboutMe = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-600 rounded-lg p-3">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Academic Background</h3>
                  <p className="text-slate-700 leading-relaxed">
                    I am a senior majoring in <span className="font-semibold text-teal-700">Robotics Engineering</span> at Arizona State University's Ira A. Fulton Schools of Engineering, graduating in <span className="font-semibold">Spring 2026</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-600 rounded-lg p-3">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Grand Challenges Theme</h3>
                  <p className="text-slate-700 leading-relaxed">
                    My focus for the Grand Challenges Scholars Program centers on the theme of <span className="font-semibold text-teal-700">"Joy of Living."</span> This theme deeply resonates with my passion for developing technologies that enhance quality of life and restore independence to individuals facing physical challenges.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-teal-50 rounded-2xl p-8 border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-teal-600 rounded-lg p-3">
                  <Users className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Leadership Experience</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Throughout my college career, I have been actively engaged in numerous student organizations and have proudly served in more than <span className="font-semibold text-teal-700">5 leadership positions</span>, demonstrating my commitment to service and community building.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-white shadow-xl">
              <Award className="mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-4">About the Grand Challenges Scholars Program</h3>
              <p className="leading-relaxed mb-4">
                The National Academy of Engineering's Grand Challenges Scholars Program is designed to prepare the next generation of engineers to address humanity's most pressing challenges. The program requires students to develop competencies in five key areas:
              </p>
              <ul className="space-y-2 text-teal-100">
                <li className="flex items-start gap-2">
                  <span className="text-teal-300 font-bold mt-1">•</span>
                  <span><span className="font-semibold text-white">Talent:</span> Research or Creative Project Experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-300 font-bold mt-1">•</span>
                  <span><span className="font-semibold text-white">Multidisciplinary:</span> Interdisciplinary Coursework</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-300 font-bold mt-1">•</span>
                  <span><span className="font-semibold text-white">Entrepreneurship:</span> Business Viability Skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-300 font-bold mt-1">•</span>
                  <span><span className="font-semibold text-white">Multicultural:</span> Global Perspective</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-300 font-bold mt-1">•</span>
                  <span><span className="font-semibold text-white">Social Consciousness:</span> Service Learning</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Portfolio Overview</h3>
              <p className="leading-relaxed text-slate-300">
                This digital portfolio documents my journey through the Grand Challenges Scholars Program, showcasing how each competency area has contributed to my growth as an engineer committed to the <span className="font-semibold text-teal-300">Joy of Living</span> theme. Through research, interdisciplinary learning, entrepreneurship, global engagement, and service, I have developed a holistic understanding of how engineering can meaningfully improve human lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
