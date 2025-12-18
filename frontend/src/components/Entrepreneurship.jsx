import React from 'react';
import { Rocket, TrendingUp, Users, MessageSquare, Award } from 'lucide-react';

const Entrepreneurship = () => {
  return (
    <section id="entrepreneurship" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Entrepreneurship Competency
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Business Viability & Innovation</h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-8 text-white">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 rounded-lg p-3">
                  <Rocket size={36} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold">FSE 301</h3>
                  <p className="text-orange-200 text-lg">Entrepreneurship Course</p>
                </div>
              </div>
              <p className="text-orange-100 text-lg">
                Transforming Devils Prosthetics from Project to Business Venture
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="prose max-w-none">
                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  The FSE301 entrepreneurship class has been a pivotal turning point in my academic journey, fundamentally shaping how I approach my team venture with <span className="font-semibold text-orange-700">Devils Prosthetics</span>. From the start of the class to our final Evidence-Based Pitch Deck, I engaged deeply with every stage of the entrepreneurial process. This class helped me understand how to transform an already existing project into a viable, sustainable business.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange-600 rounded-lg p-2">
                        <MessageSquare size={20} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Active Listening & Empathy</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      We began by understanding the importance of active listening and empathy. By genuinely engaging with potential users of our prosthetics, I learned not just to hear but to understand their diverse needs and concerns. This foundational step was crucial in shaping our approach to creating solutions that authentically meet user requirements.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange-600 rounded-lg p-2">
                        <TrendingUp size={20} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Research & Critical Thinking</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      During the course, I decided to work with my team at Devils Prosthetics to transform it into a successful venture, using this class as a launch pad and learning ground. This required rigorous research and critical thinking, where I explored various sources and methodologies to establish a solid foundation for our proposed solutions.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange-600 rounded-lg p-2">
                        <Award size={20} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Pitch Development & Funding</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      This project was already under development in the EPICS program, and this class helped me refine our pitch for funding. The skills learned in communicating our value proposition led us to win additional funding in various pitch competitions, validating our business model and approach.
                    </p>
                  </div>

                  <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-orange-600 rounded-lg p-2">
                        <Users size={20} className="text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">Stakeholder Communication</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Communicating our design's value proposition to stakeholders and investors was a critical component of the class. I learned to articulate the importance of our solutions from various perspectives, ensuring our pitches were compelling and grounded in real-world applications.
                    </p>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl p-8 my-8 text-white">
                  <h4 className="text-2xl font-bold mb-4">Key Skills Developed</h4>
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    Throughout the course, the emphasis on innovation, collaboration, and continuous improvement helped me see challenges not as barriers but as opportunities for growth. The skills I developed are essential for any professional setting, especially in entrepreneurial ventures:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3 text-slate-200">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold mt-1">•</span>
                      <span>Active listening and user empathy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold mt-1">•</span>
                      <span>Effective communication and presentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold mt-1">•</span>
                      <span>Adaptability and problem-solving</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold mt-1">•</span>
                      <span>Continuous learning and improvement</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold mt-1">•</span>
                      <span>Business model development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-400 font-bold mt-1">•</span>
                      <span>Evidence-based decision making</span>
                    </li>
                  </ul>
                </div>

                <p className="text-slate-700 leading-relaxed text-lg mb-6">
                  I'm committed to building on what I've learned, continuously improving, and staying informed. This journey in the entrepreneurship class has laid a solid foundation for my team's future, particularly as we aim to transition Devils Prosthetics from a project into a successful business.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">Connection to Joy of Living Theme</h3>
          <p className="text-orange-100 leading-relaxed text-lg">
            This entrepreneurship experience directly embodies the <span className="font-semibold text-white">Joy of Living</span> theme. The class didn't just teach me about starting a business—it instilled in me a mindset geared toward thoughtful innovation and meaningful engagement with the community. This aligns deeply with my personal theme, as it brings immense satisfaction to work on projects that not only advance technology but also enhance people's lives by providing more cost-effective prosthetic solutions. The entrepreneurial skills I've developed enable me to take innovative ideas that improve quality of life and transform them into sustainable, scalable solutions that can reach and benefit more people in need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurship;
