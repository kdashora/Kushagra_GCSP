import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-32 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-4">About me</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            I am a Senior pursuing my Bachelor's Degree in Robotics Engineering
          </h2>
        </div>

        <div className="mb-12">
          <img 
            src="https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/hsdxbeaf_About_Me.jpeg" 
            alt="Kushagra Dashora at Pitchfork Awards"
            className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              As a participant in the National Academy of Engineering's <span className="font-semibold text-white">Grand Challenges Scholars Program</span>, I have developed a comprehensive understanding of how engineering can address humanity's most pressing challenges through interdisciplinary collaboration and innovation.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My journey through the GCSP has been centered on the theme of <span className="font-semibold text-white">"Joy of Living"</span> — a commitment to developing technologies that enhance quality of life and restore independence to individuals facing physical challenges.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Throughout my college career, I have been actively engaged in numerous student organizations and have proudly served in more than <span className="font-semibold text-white">5 leadership positions</span>, demonstrating my commitment to service and community building.
            </p>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-gray-700 pl-8">
              <h4 className="text-2xl font-bold mb-4">About the Grand Challenges Scholars Program</h4>
              <p className="text-gray-400 leading-relaxed mb-6">
                The GCSP prepares the next generation of engineers to address humanity's most pressing challenges through five key competencies:
              </p>
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-white mb-1">Talent</h5>
                  <p className="text-sm text-gray-400">Research or Creative Project Experience</p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Multidisciplinary</h5>
                  <p className="text-sm text-gray-400">Interdisciplinary Coursework</p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Entrepreneurship</h5>
                  <p className="text-sm text-gray-400">Business Viability Skills</p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Multicultural</h5>
                  <p className="text-sm text-gray-400">Global Perspective</p>
                </div>
                <div>
                  <h5 className="font-semibold text-white mb-1">Social Consciousness</h5>
                  <p className="text-sm text-gray-400">Service Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
