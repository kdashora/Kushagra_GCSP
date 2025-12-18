import React from 'react';
import { Lightbulb, Users as UsersIcon, BookOpen, TrendingUp } from 'lucide-react';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Talent Competency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Research & Creative Projects</h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 text-white">
              <Lightbulb size={40} className="mb-4" />
              <h3 className="text-2xl font-bold mb-2">Capstone Project</h3>
              <p className="text-teal-100 text-lg font-medium">Wisk Aero Partnership</p>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Automated Battery Sorting System</h4>
              <p className="text-slate-700 leading-relaxed mb-6">
                As part of my capstone project, I am collaborating with <span className="font-semibold text-teal-700">Wisk Aero</span>, a pioneering company in autonomous electric aviation. Our team is developing an innovative Automated Battery Sorting System designed specifically for their factory assembly line to handle battery pouches for their Generation 6 electric VTOL (Vertical Take-Off and Landing) aircraft.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 rounded-lg p-2 mt-1">
                    <UsersIcon size={20} className="text-teal-700" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">Team Collaboration</h5>
                    <p className="text-slate-600 text-sm">Working alongside a multidisciplinary team of engineers to design, prototype, and test the automated sorting system</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 rounded-lg p-2 mt-1">
                    <BookOpen size={20} className="text-teal-700" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">Technical Skills Developed</h5>
                    <p className="text-slate-600 text-sm">Automation systems, robotics integration, quality control mechanisms, and manufacturing optimization for aerospace applications</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 rounded-lg p-2 mt-1">
                    <TrendingUp size={20} className="text-teal-700" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 mb-1">Impact & Innovation</h5>
                    <p className="text-slate-600 text-sm">Improving manufacturing efficiency and safety standards in the emerging electric aviation industry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Project Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                  <span className="text-slate-700">Design an automated system to efficiently sort and organize battery pouches based on quality metrics and specifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                  <span className="text-slate-700">Integrate computer vision and sensor systems for real-time quality assessment and defect detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                  <span className="text-slate-700">Optimize the assembly line workflow to reduce manual handling and improve production throughput</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-teal-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                  <span className="text-slate-700">Ensure compliance with aerospace industry standards and safety protocols</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Learnings</h3>
              <p className="text-slate-700 leading-relaxed mb-4">
                This capstone experience has been instrumental in bridging theoretical knowledge with real-world industry applications. Key learnings include:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Understanding the critical role of automation in modern manufacturing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Applying robotics engineering principles to solve industry-specific challenges</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Managing complex project timelines and stakeholder expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600 font-bold mt-1">•</span>
                  <span>Collaborating effectively in a professional engineering environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Connection to Joy of Living Theme</h3>
          <p className="text-slate-200 leading-relaxed text-lg">
            This research experience directly aligns with my <span className="font-semibold text-teal-300">Joy of Living</span> theme by contributing to the advancement of sustainable electric aviation technology. The development of efficient, automated manufacturing systems for electric VTOLs supports the creation of cleaner, more accessible transportation solutions that can enhance quality of life by reducing travel time, decreasing environmental impact, and improving urban mobility. Through this project, I am contributing to technologies that will shape a more sustainable and connected future, ultimately enhancing the joy and quality of daily life for communities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
