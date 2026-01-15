import React from 'react';

const Research = () => {
  return (
    <section id="research" className="py-32 bg-zinc-950 text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-4">Talent Competency</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Research & Creative Projects
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          <div>
            <div className="mb-8">
              <img 
                src="https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/su97u3i1_Wisk_Logo.webp" 
                alt="Wisk Aero Logo"
                className="h-12 mb-6"
              />
            </div>
            <h4 className="text-2xl font-bold mb-6">Capstone Project</h4>
            <h5 className="text-xl text-gray-400 mb-8">Wisk Aero Partnership</h5>
            
            <h6 className="text-lg font-semibold mb-4">Automated Battery Sorting System</h6>
            <p className="text-gray-400 leading-relaxed mb-6">
              As part of my capstone project, I am collaborating with <span className="font-semibold text-white">Wisk Aero</span>, a pioneering company in autonomous electric aviation. Our team is developing an innovative Automated Battery Sorting System designed specifically for their factory assembly line to handle battery pouches for their Generation 6 electric VTOL (Vertical Take-Off and Landing) aircraft.
            </p>

            <div className="space-y-6">
              <div>
                <h6 className="font-semibold text-white mb-2">Team Collaboration</h6>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Working alongside a multidisciplinary team of engineers to design, prototype, and test the automated sorting system
                </p>
              </div>
              
              <div>
                <h6 className="font-semibold text-white mb-2">Technical Skills Developed</h6>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Automation systems, robotics integration, quality control mechanisms, and manufacturing optimization for aerospace applications
                </p>
              </div>
              
              <div>
                <h6 className="font-semibold text-white mb-2">Impact & Innovation</h6>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Improving manufacturing efficiency and safety standards in the emerging electric aviation industry
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-800 pl-8">
              <h4 className="text-xl font-bold mb-6">Project Objectives</h4>
              <div className="space-y-6">
                <div>
                  <span className="text-gray-600 font-bold mr-3">01</span>
                  <span className="text-gray-300">Design an automated system to efficiently sort and organize battery pouches based on quality metrics and specifications</span>
                </div>
                <div>
                  <span className="text-gray-600 font-bold mr-3">02</span>
                  <span className="text-gray-300">Integrate computer vision and sensor systems for real-time quality assessment and defect detection</span>
                </div>
                <div>
                  <span className="text-gray-600 font-bold mr-3">03</span>
                  <span className="text-gray-300">Optimize the assembly line workflow to reduce manual handling and improve production throughput</span>
                </div>
                <div>
                  <span className="text-gray-600 font-bold mr-3">04</span>
                  <span className="text-gray-300">Ensure compliance with aerospace industry standards and safety protocols</span>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-gray-800 pl-8">
              <h4 className="text-xl font-bold mb-6">Key Learnings</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Understanding the critical role of automation in modern manufacturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Applying robotics engineering principles to solve industry-specific challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Managing complex project timelines and stakeholder expectations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-600 mt-1">•</span>
                  <span>Collaborating effectively in a professional engineering environment</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-gray-800 pl-8">
          <h3 className="text-2xl font-bold mb-4">Connection to Joy of Living Theme</h3>
          <p className="text-gray-400 leading-relaxed text-lg">
            This research experience directly aligns with my <span className="font-semibold text-white">Joy of Living</span> theme by contributing to the advancement of sustainable electric aviation technology. The development of efficient, automated manufacturing systems for electric VTOLs supports the creation of cleaner, more accessible transportation solutions that can enhance quality of life by reducing travel time, decreasing environmental impact, and improving urban mobility. Through this project, I am contributing to technologies that will shape a more sustainable and connected future, ultimately enhancing the joy and quality of daily life for communities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
