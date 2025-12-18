import React from 'react';
import { BookOpen, Globe, History, Sparkles } from 'lucide-react';

const Multidisciplinary = () => {
  return (
    <section id="multidisciplinary" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Multidisciplinary Competency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Interdisciplinary Learning</h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* FSE 150 */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">FSE 150</h3>
                  <p className="text-purple-200">Introduction to Grand Challenges</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Course Experience</h4>
              <p className="text-slate-700 leading-relaxed mb-6">
                The introductory course to the Grand Challenges Scholars Program, FSE 150, provided me with a comprehensive understanding of the program's main focus areas. The course aimed to familiarize students with diverse engineering solutions and their wide-ranging implications on society.
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Historical Context & Cultural Impact</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We explored historical technologies and their cultural impacts—examining both positive outcomes and negative consequences. This analysis raised important ethical considerations that are essential when developing solutions to global challenges.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Science Fiction & Engineering Innovation</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    A particularly fascinating aspect was examining how science fiction influences real engineering developments. This perspective challenged me to think beyond current constraints and envision the potential future applications and societal integration of emerging technologies.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Ethical Engineering Framework</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The course established a foundation for understanding the ethical dimensions of engineering work, emphasizing the responsibility engineers have in considering long-term societal impacts of their innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* HST 318 */}
          <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl shadow-lg overflow-hidden border border-purple-100">
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <History size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">HST 318</h3>
                  <p className="text-purple-200">History of Engineering</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Course Experience</h4>
              <p className="text-slate-700 leading-relaxed mb-6">
                The History of Engineering class was a transformative multidisciplinary experience that encouraged the development of a systems mindset through examining engineering from multiple perspectives. This course transcended traditional technical boundaries, exploring the complex interplay between engineering and broader subjects.
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Interdisciplinary Connections</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We investigated how engineering intersects with policy, politics, human behavior, economics, ethics, and business—developing a holistic understanding that engineers must consider multiple domains when solving complex problems.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Technology & Culture Reciprocity</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    One of the most impactful aspects was exploring the reciprocal relationship between technology and culture. We examined major engineering milestones since 1500, key historical figures, and pivotal events that have shaped global technological progress.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Learning from Engineering Failures</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Projects analyzing engineering failures, such as the Bhopal gas tragedy, underscored the critical importance of learning from past mistakes to prevent future calamities. This historical awareness can lead to safer and more ethical engineering practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white/20 rounded-lg p-3">
              <Globe size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Value & Connection to GCSP Theme</h3>
              <p className="text-slate-200 leading-relaxed text-lg mb-4">
                These interdisciplinary courses have been fundamental in shaping my approach to engineering challenges within the <span className="font-semibold text-purple-300">Joy of Living</span> theme. By understanding the historical context of technological development and its cultural implications, I've learned to approach engineering problems with a broader perspective that considers societal impact, ethical considerations, and long-term consequences.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg">
                This multidisciplinary foundation is essential for developing technologies that truly enhance quality of life. Whether working on prosthetics, automated systems, or other innovations, I now consider not just technical feasibility but also cultural acceptance, ethical implications, economic sustainability, and societal benefit—all critical factors in creating solutions that genuinely contribute to the joy of living.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multidisciplinary;
