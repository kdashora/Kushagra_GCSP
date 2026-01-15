import React from 'react';

const Multidisciplinary = () => {
  return (
    <section id="multidisciplinary" className="py-32 bg-black text-white border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-16">
          <h3 className="text-sm tracking-widest uppercase text-gray-500 mb-4">Multidisciplinary Competency</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Interdisciplinary Learning
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* FSE 150 */}
          <div className="border-l-2 border-gray-800 pl-8">
            <h3 className="text-2xl font-bold mb-2">FSE 150</h3>
            <p className="text-gray-500 mb-6">Introduction to Grand Challenges</p>
            
            <h4 className="text-xl font-semibold mb-4 text-white">Course Experience</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              The introductory course to the Grand Challenges Scholars Program, FSE 150, provided me with a comprehensive understanding of the program's main focus areas. The course aimed to familiarize students with diverse engineering solutions and their wide-ranging implications on society.
            </p>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-white mb-2">Historical Context & Cultural Impact</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We explored historical technologies and their cultural impacts—examining both positive outcomes and negative consequences. This analysis raised important ethical considerations that are essential when developing solutions to global challenges.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Science Fiction & Engineering Innovation</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  A particularly fascinating aspect was examining how science fiction influences real engineering developments. This perspective challenged me to think beyond current constraints and envision the potential future applications and societal integration of emerging technologies.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Ethical Engineering Framework</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  The course established a foundation for understanding the ethical dimensions of engineering work, emphasizing the responsibility engineers have in considering long-term societal impacts of their innovations.
                </p>
              </div>
            </div>
          </div>

          {/* HST 318 */}
          <div className="border-l-2 border-gray-800 pl-8">
            <div className="mb-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_db1876d2-bfe7-4217-8fe1-4f5930ef662d/artifacts/7zxcv7q8_HST318.png" 
                alt="HST 318 History of Engineering"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">HST 318</h3>
            <p className="text-gray-500 mb-6">History of Engineering</p>
            
            <h4 className="text-xl font-semibold mb-4 text-white">Course Experience</h4>
            <p className="text-gray-400 leading-relaxed mb-6">
              The History of Engineering class was a transformative multidisciplinary experience that encouraged the development of a systems mindset through examining engineering from multiple perspectives. This course transcended traditional technical boundaries, exploring the complex interplay between engineering and broader subjects.
            </p>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-white mb-2">Interdisciplinary Connections</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  We investigated how engineering intersects with policy, politics, human behavior, economics, ethics, and business—developing a holistic understanding that engineers must consider multiple domains when solving complex problems.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Technology & Culture Reciprocity</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  One of the most impactful aspects was exploring the reciprocal relationship between technology and culture. We examined major engineering milestones since 1500, key historical figures, and pivotal events that have shaped global technological progress.
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-white mb-2">Learning from Engineering Failures</h5>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Projects analyzing engineering failures, such as the Bhopal gas tragedy, underscored the critical importance of learning from past mistakes to prevent future calamities. This historical awareness can lead to safer and more ethical engineering practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-l-2 border-gray-800 pl-8">
          <h3 className="text-2xl font-bold mb-4">Value & Connection to GCSP Theme</h3>
          <p className="text-gray-400 leading-relaxed text-lg mb-4">
            These interdisciplinary courses have been fundamental in shaping my approach to engineering challenges within the <span className="font-semibold text-white">Joy of Living</span> theme. By understanding the historical context of technological development and its cultural implications, I've learned to approach engineering problems with a broader perspective that considers societal impact, ethical considerations, and long-term consequences.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            This multidisciplinary foundation is essential for developing technologies that truly enhance quality of life. Whether working on prosthetics, automated systems, or other innovations, I now consider not just technical feasibility but also cultural acceptance, ethical implications, economic sustainability, and societal benefit—all critical factors in creating solutions that genuinely contribute to the joy of living.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Multidisciplinary;
