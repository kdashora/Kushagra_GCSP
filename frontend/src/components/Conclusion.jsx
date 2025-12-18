import React from 'react';
import { Award, Target, Lightbulb, Users, TrendingUp, Heart } from 'lucide-react';

const Conclusion = () => {
  return (
    <section id="conclusion" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-teal-600 to-rose-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Concluding Remarks
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Becoming a Grand Challenges Scholar</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* Achievement Across Five Competencies */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-slate-900 to-teal-900 rounded-2xl p-8 md:p-12 text-white shadow-xl mb-8">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Award size={32} />
              Achieving GCSP Goals Across Five Competencies
            </h3>
            <p className="text-slate-200 leading-relaxed text-lg mb-8">
              The Grand Challenges Scholars Program has been a transformative journey that has shaped me into a more well-rounded, socially conscious, and capable engineer. Each of the five competency areas has contributed uniquely to my growth, and together they have created a comprehensive foundation for addressing complex global challenges.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500 rounded-lg p-2">
                    <Lightbulb size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Talent Competency</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Through my capstone project with <span className="font-semibold text-teal-300">Wisk Aero</span>, I developed advanced technical skills in automation and robotics while learning to apply engineering principles to solve real-world manufacturing challenges in the emerging electric aviation industry. This experience taught me the importance of innovation in advancing sustainable transportation technologies.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-purple-500 rounded-lg p-2">
                    <Target size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Multidisciplinary Competency</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-purple-300">FSE 150</span> and <span className="font-semibold text-purple-300">HST 318: History of Engineering</span> broadened my perspective beyond pure technical work. Understanding the historical context of engineering achievements and their cultural implications has made me a more thoughtful engineer who considers ethical dimensions, societal impact, and long-term consequences of technological development.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-orange-500 rounded-lg p-2">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Entrepreneurship Competency</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-orange-300">FSE 301</span> transformed how I approach innovation by teaching me to convert technical projects into viable business ventures. Working with <span className="font-semibold text-orange-300">Devils Prosthetics</span>, I learned active listening, stakeholder communication, and pitch development—skills that enabled us to secure funding and validate our business model. This competency taught me that great engineering must be combined with business acumen to create lasting impact.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-500 rounded-lg p-2">
                    <Users size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Multicultural Competency</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  <span className="font-semibold text-blue-300">ASB 300: Food and Culture</span> and <span className="font-semibold text-blue-300">SLC 212: Languages and Cultures Clash</span> developed my cultural awareness and sensitivity. These courses taught me that effective engineering solutions must consider diverse cultural contexts, communication styles, and societal needs. This global perspective is essential for creating inclusive technologies that serve all communities.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 md:col-span-2">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-rose-500 rounded-lg p-2">
                    <Heart size={24} />
                  </div>
                  <h4 className="text-xl font-bold">Social Consciousness Competency</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  My service-learning experiences with <span className="font-semibold text-rose-300">EPICS (Devils Prosthetics)</span> and <span className="font-semibold text-rose-300">Fulton Ambassadors (3.5 years)</span> reinforced that engineering is ultimately about serving people. Leading the electrical design for an affordable myoelectric prosthetic and helping prospective students discover their educational paths taught me the profound impact engineers can have on individual lives and communities. These experiences cemented my commitment to using engineering as a force for social good.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Connectivity and Theme Integration */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-teal-50 to-rose-50 rounded-2xl p-8 md:p-12 border border-teal-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">The Connectivity: Joy of Living as a Unifying Theme</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              What makes my GCSP experience particularly meaningful is how all five competencies interconnect through the central theme of <span className="font-semibold text-teal-700">Joy of Living</span>. This theme isn't just a label—it's the thread that weaves together every course, project, and experience into a cohesive vision of engineering for human well-being.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">From Research to Real-World Impact</h4>
                <p className="text-slate-700 leading-relaxed">
                  My research with <span className="font-semibold">Wisk Aero</span> on automated battery sorting systems contributes to sustainable electric aviation—technology that can reduce environmental impact and improve urban mobility, ultimately enhancing quality of life. This connects directly to my service work with <span className="font-semibold">Devils Prosthetics</span>, where we're developing affordable assistive technology to restore independence and capabilities to individuals with limb loss.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Cultural Awareness Meets Social Impact</h4>
                <p className="text-slate-700 leading-relaxed">
                  My multicultural coursework taught me that improving quality of life requires understanding diverse cultural contexts. This perspective directly informs my prosthetics work—different cultures have varying attitudes toward assistive technology, aesthetic preferences, and functional requirements. By combining cultural awareness with technical skills, I can create solutions that are truly inclusive and beneficial across diverse populations.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Entrepreneurship as a Vehicle for Impact</h4>
                <p className="text-slate-700 leading-relaxed">
                  The entrepreneurship skills I developed in <span className="font-semibold">FSE 301</span> are essential for translating innovative ideas into sustainable solutions that can reach more people. Securing funding and developing viable business models ensures that technologies like affordable prosthetics can move from concept to widespread availability, maximizing their contribution to the joy of living for those who need them most.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h4 className="font-bold text-slate-900 mb-2 text-lg">Historical Wisdom Guiding Future Innovation</h4>
                <p className="text-slate-700 leading-relaxed">
                  My multidisciplinary studies, particularly in the history of engineering, taught me to learn from both the successes and failures of past innovations. This historical awareness helps me anticipate potential negative consequences and ethical issues, ensuring that my work genuinely enhances quality of life rather than creating unintended problems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact on Career and Engineering Practice */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Preparation as an Engineer and Future Career</h3>
            <p className="text-slate-700 leading-relaxed text-lg mb-6">
              The GCSP experience has fundamentally shaped how I approach engineering challenges and has prepared me exceptionally well for my future career in robotics engineering.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Technical & Leadership Skills</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>Advanced technical expertise in automation, robotics, and electrical systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>Leadership experience managing multidisciplinary teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>Project management and stakeholder communication abilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-teal-600 font-bold mt-1">•</span>
                    <span>Business development and entrepreneurial thinking</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">Holistic Perspective</h4>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-1">•</span>
                    <span>Understanding of ethical implications and social responsibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-1">•</span>
                    <span>Cultural awareness for working in global, diverse teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-1">•</span>
                    <span>Systems thinking that considers multiple interconnected factors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold mt-1">•</span>
                    <span>Commitment to using engineering for meaningful social impact</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-lg">
              As I move forward in my robotics engineering career, I am equipped not just with technical skills but with a comprehensive framework for approaching complex challenges. I understand that successful engineering requires balancing technical excellence with business viability, cultural sensitivity, ethical considerations, and genuine commitment to improving human lives. This holistic preparation positions me to be an effective engineer who can lead innovative projects that create meaningful, positive change in the world.
            </p>
          </div>
        </div>

        {/* Overall Opinion and Feedback */}
        <div className="bg-gradient-to-br from-teal-600 to-rose-600 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-3xl font-bold mb-6">Overall Opinion of the GCSP Experience</h3>
          <p className="text-white/90 leading-relaxed text-lg mb-6">
            The Grand Challenges Scholars Program has been one of the most valuable aspects of my undergraduate education. It has transformed me from a student focused primarily on technical skills into a well-rounded engineer prepared to tackle humanity's greatest challenges. The program's five-competency framework ensures that graduates are not just technically proficient but also culturally aware, entrepreneurial, ethically grounded, and committed to social good.
          </p>
          <p className="text-white/90 leading-relaxed text-lg mb-6">
            What I appreciate most is the program's emphasis on connectivity and theme integration. By requiring students to demonstrate how their experiences interconnect around a central Grand Challenge theme, GCSP encourages holistic thinking rather than compartmentalized learning. This approach mirrors the real world, where complex problems require multifaceted solutions that draw on diverse knowledge and perspectives.
          </p>
          <p className="text-white/90 leading-relaxed text-lg mb-6">
            The experiences I've gained through GCSP—from leading Devils Prosthetics and Fulton Ambassadors to studying engineering history and cultural diversity—have given me confidence that I can make a meaningful difference in the world. I now understand that engineering is not just about building things; it's about building a better future for all people.
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="text-xl font-bold mb-3">Feedback for Program Improvement</h4>
            <p className="text-white/90 leading-relaxed">
              One suggestion for enhancing the program would be to create more structured opportunities for GCSP scholars to collaborate across different Grand Challenge themes. Interdisciplinary collaboration between scholars working on different themes could generate innovative solutions that address multiple challenges simultaneously, reflecting the interconnected nature of global problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
