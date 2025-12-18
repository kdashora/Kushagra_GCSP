import React from 'react';
import { Heart, Users, Award, HandHeart, Sparkles, DollarSign } from 'lucide-react';

const ServiceLearning = () => {
  return (
    <section id="service" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Social Consciousness Competency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Service Learning</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full"></div>
        </div>

        {/* EPICS - Devils Prosthetics */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-rose-600 to-rose-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <Heart size={36} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">EPICS Program</h3>
                  <p className="text-rose-200 text-lg">Devils Prosthetics - Electrical Design Lead</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">3D-Printed Myoelectric Prosthetic Development</h4>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  As Devils Prosthetics' electrical design lead within EPICS (Engineering Projects in Community Service), my focus centered on developing a 3D-printed myoelectric prosthetic for trans-radial amputations. Working alongside a diverse and talented team, we collaboratively tackled the intricate electrical and mechanical subsystems required to create a functional, affordable prosthetic solution.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-rose-600 rounded-lg p-2">
                      <Users size={24} className="text-white" />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900">Leadership Role</h5>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    My role extended beyond technical design to encompass leadership that fostered open communication and mutual respect among team members. I coordinated electrical subsystem integration with mechanical design to ensure seamless functionality.
                  </p>
                </div>

                <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-rose-600 rounded-lg p-2">
                      <HandHeart size={24} className="text-white" />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900">Community Partnership</h5>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Recognizing the complexity of finding suitable recipients, we initiated communication with our community partner, Noah Nemgar, CPO at Limb Labs. This collaboration streamlined the identification process, ensuring our prosthetic met real-world needs.
                  </p>
                </div>

                <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-rose-600 rounded-lg p-2">
                      <DollarSign size={24} className="text-white" />
                    </div>
                    <h5 className="text-lg font-bold text-slate-900">EPICS Elite Funding</h5>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    The success of securing <span className="font-semibold text-rose-700">$10,000 in EPICS Elite Pitch Funding</span> highlighted the effectiveness of our collaborative approach in translating our vision into reality and securing resources to advance our project.
                  </p>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-4">Community Impact & Social Responsibility</h4>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Our collaboration with Limb Labs went beyond theoretical considerations. Community involvement was not an added component but a driving force that shaped our project from inception to implementation. The direct engagement with prosthetics professionals and potential users provided invaluable insights that informed our design decisions.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  Witnessing the tangible impact of our efforts on individuals facing challenges underscored the significance of empathy and social responsibility in the engineering and design process. Devils Prosthetics, fueled by collaborative teamwork and genuine community engagement, exemplifies the powerful intersection of innovation and authentic connection with the needs of those we aim to serve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Fulton Ambassadors */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <Sparkles size={36} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">Fulton Ambassadors</h3>
                  <p className="text-teal-200 text-lg">3.5 Years • Poly Co-Tour Director • Poly President</p>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="mb-8">
                <h4 className="text-2xl font-bold text-slate-900 mb-4">Bridging Communities & Building Futures</h4>
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  Fulton Ambassadors (FAs) stands as a vital link between prospective students and donors and the vibrant engineering community within the university. As an international student drawn to ASU's robotics program, my initial decision-making process lacked exposure to this valuable resource. The absence of a connection with an FA early on underscored the importance of engaging with current students to gain insights into the academic journey—a factor that can significantly impact prospective students' decision-making.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-3">Leadership Evolution</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      Throughout my four years with the organization, I've had the unique opportunity to contribute to K-12 outreach initiatives aimed at promoting engineering studies across diverse platforms. Beyond these experiences, I assumed several leadership roles within the organization, including:
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <Award size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Poly Co-Tour Director:</span> Coordinating campus tours and visitor experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Award size={16} className="text-teal-600 mt-1 flex-shrink-0" />
                        <span><span className="font-semibold">Poly President:</span> Leading the organization and strategic initiatives</span>
                      </li>
                    </ul>
                    <p className="text-slate-600 text-sm leading-relaxed mt-3">
                      These leadership roles have been instrumental in honing and expanding my skill set, providing me with comprehensive abilities that extend beyond the technical realm.
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-3">Community Building</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Upon joining Fulton Ambassadors in my first semester, I discovered a platform that not only offered opportunities to enhance soft skills and build a professional network but also allowed me to actively contribute to the university community by assisting incoming students. The program's unique facets, such as the chance to interact with deans and donors, added a distinctive and enriching dimension to my university experience.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-3">Diverse Responsibilities</h5>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3">
                      As a Fulton Ambassador, my responsibilities spanned a diverse range of activities:
                    </p>
                    <ul className="space-y-2 text-slate-700 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Conducting one-on-one sessions with incoming engineering students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Representing the school at donor events</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Participating in high school visits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Conducting campus tours for prospective students</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-teal-600 font-bold mt-1">•</span>
                        <span>Coordinating with the outreach office for consistent event presence</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-3">Personal Growth</h5>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Engaging with prospective students has been a rewarding experience, fueling my motivation to contribute to their educational journey. Witnessing their enthusiasm and passion reinforces the significance of my role. Moreover, my time as a Fulton Ambassador has marked significant personal growth—from honing public speaking and leadership skills to expanding my network within the engineering community. Daily interactions with diverse individuals refresh and motivate me, creating a positive impact on my overall university experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-600 to-rose-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Connection to Joy of Living Theme & Engineering</h3>
          <p className="text-rose-100 leading-relaxed text-lg mb-6">
            Both service-learning experiences directly embody the <span className="font-semibold text-white">Joy of Living</span> theme through meaningful community engagement. Devils Prosthetics represents the tangible application of engineering to restore independence and enhance quality of life for individuals with limb loss. By developing cost-effective, accessible prosthetic solutions, we're directly contributing to improving the daily experiences and capabilities of people facing physical challenges.
          </p>
          <p className="text-rose-100 leading-relaxed text-lg">
            Similarly, Fulton Ambassadors service work enhances the joy of living by helping prospective students discover educational opportunities that will shape their futures. By sharing my experiences and insights, I've helped students make informed decisions about their academic journeys, contributing to their long-term success and satisfaction. Both experiences demonstrate how engineering and service work together to create meaningful positive impact—whether through innovative assistive technology or through educational outreach that opens doors to opportunity. These experiences have reinforced my commitment to using engineering as a force for enhancing human well-being and quality of life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceLearning;
