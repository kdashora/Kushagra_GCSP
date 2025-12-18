import React from 'react';
import { Globe2, Utensils, Languages } from 'lucide-react';

const Multicultural = () => {
  return (
    <section id="multicultural" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Multicultural Competency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Global Perspectives</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* ASB 300 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <Utensils size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ASB 300</h3>
                  <p className="text-blue-200">Food and Culture</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Course Experience</h4>
              <p className="text-slate-700 leading-relaxed mb-6">
                ASB 300: Food and Culture offered a fascinating exploration of how food serves as a lens for understanding diverse cultures, social structures, and historical developments. This anthropological perspective revealed the deep connections between culinary traditions and cultural identity across different societies.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Cultural Significance of Food</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We examined how food traditions reflect cultural values, religious practices, economic systems, and social hierarchies. Understanding these connections helped me appreciate the complexity of cultural expression and the importance of respecting diverse traditions.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Globalization & Food Systems</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The course explored how globalization impacts food production, distribution, and consumption patterns worldwide. This analysis highlighted issues of food security, sustainability, and the preservation of traditional culinary practices in a rapidly changing world.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Cross-Cultural Communication</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    By studying food as a cultural artifact, I developed deeper cultural sensitivity and awareness—essential skills for working in diverse, global engineering teams and understanding the varied needs of international user populations.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-slate-900 mb-2">Connection to GCSP Theme</h5>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Understanding cultural diversity through food systems relates to the <span className="font-semibold text-blue-700">Joy of Living</span> theme by recognizing that quality of life is deeply influenced by cultural traditions and access to nutritious food. As an engineer, this perspective helps me design solutions that respect cultural contexts and enhance well-being across diverse populations.
                </p>
              </div>
            </div>
          </div>

          {/* SLC 212 */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg overflow-hidden border border-blue-100">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 rounded-lg p-2">
                  <Languages size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">SLC 212</h3>
                  <p className="text-blue-200">Languages and Cultures Clash</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-4">Course Experience</h4>
              <p className="text-slate-700 leading-relaxed mb-6">
                SLC 212: Languages and Cultures Clash provided an in-depth examination of how language shapes cultural identity and how cultural conflicts arise from linguistic differences and communication barriers. This course emphasized the critical role of effective cross-cultural communication in our increasingly interconnected world.
              </p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Language as Cultural Identity</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We explored how language serves not just as a communication tool but as a fundamental component of cultural identity. Understanding linguistic diversity helped me recognize the importance of clear, culturally-aware communication in global engineering projects.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Navigating Cultural Conflicts</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The course examined historical and contemporary examples of cultural clashes resulting from language barriers and miscommunication. These case studies provided valuable insights into conflict resolution and the importance of cultural sensitivity in professional environments.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Global Collaboration Skills</h5>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    By analyzing how language differences can create misunderstandings, I learned strategies for effective communication across cultural boundaries—essential skills for collaborating with international teams and serving diverse user communities.
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg p-4 border border-blue-200">
                <h5 className="font-semibold text-slate-900 mb-2">Connection to GCSP Theme</h5>
                <p className="text-slate-700 text-sm leading-relaxed">
                  This course deepens my understanding of the <span className="font-semibold text-blue-700">Joy of Living</span> theme by highlighting how effective cross-cultural communication enhances collaboration and understanding. Technologies that improve quality of life must be developed with cultural awareness to ensure they serve diverse populations effectively and respectfully.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white/20 rounded-lg p-3">
              <Globe2 size={32} />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Value of Multicultural Competency</h3>
              <p className="text-slate-200 leading-relaxed text-lg mb-4">
                These multicultural experiences have been invaluable in shaping my perspective as a global engineer. In today's interconnected world, engineering solutions must consider diverse cultural contexts, communication styles, and societal needs. Understanding how culture influences everything from food systems to language barriers has made me a more culturally aware and sensitive engineer.
              </p>
              <p className="text-slate-200 leading-relaxed text-lg">
                For my work in robotics and prosthetics—particularly with Devils Prosthetics—this cultural awareness is essential. Different cultures may have varying attitudes toward assistive technologies, different aesthetic preferences, and unique functional requirements based on their daily activities and traditions. By approaching engineering challenges with cultural sensitivity, I can develop solutions that truly enhance the <span className="font-semibold text-blue-300">Joy of Living</span> for people from all backgrounds, ensuring that technological innovations are inclusive, respectful, and genuinely beneficial to diverse communities worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Multicultural;
