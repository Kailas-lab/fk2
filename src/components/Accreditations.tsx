import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Accreditations = () => {
  const accreditations = [
    {
      title: 'ISO 9001:2015 Certified',
      description: 'Quality Management System certification ensuring consistent, high-quality education delivery.',
      icon: Award,
      badge: 'ISO 9001:2015',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'NASSCOM Recognized',
      description: 'Recognized by National Association of Software and Service Companies for excellence in IT training.',
      icon: Shield,
      badge: 'NASSCOM',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Government Approved',
      description: 'Approved by Ministry of Skill Development & Entrepreneurship for vocational training programs.',
      icon: CheckCircle,
      badge: 'MSDE Approved',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium mb-4 backdrop-blur-sm border border-emerald-800">
            Accreditations & Certifications
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Trusted & Certified
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our commitment to quality education is recognized by leading industry bodies and government organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accreditations.map((accreditation, index) => {
            const Icon = accreditation.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-center mb-6">
                  <div className={`p-4 bg-gradient-to-r ${accreditation.color} rounded-2xl shadow-lg`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                
                <div className="mb-4">
                  <span className={`inline-block px-4 py-2 bg-gradient-to-r ${accreditation.color} text-white text-sm font-bold rounded-full`}>
                    {accreditation.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4">
                  {accreditation.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {accreditation.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Accreditations;