import React from 'react';
import { Users, DollarSign, Briefcase, Clock, Award, HeadphonesIcon } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from industry professionals with years of real-world experience and proven track records.',
      gradient: 'from-emerald-500 to-green-400'
    },
    {
      icon: DollarSign,
      title: 'Affordable Prices',
      description: 'Quality education at competitive prices with flexible payment options and money-back guarantee.',
      gradient: 'from-green-400 to-emerald-500'
    },
    {
      icon: Briefcase,
      title: 'Hands-on Projects',
      description: 'Build real-world projects that you can showcase in your portfolio and impress potential employers.',
      gradient: 'from-emerald-600 to-green-500'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with lifetime access to course materials and 24/7 online support.',
      gradient: 'from-green-500 to-emerald-400'
    },
    {
      icon: Award,
      title: 'Industry Certification',
      description: 'Receive recognized certificates upon completion to boost your professional credibility.',
      gradient: 'from-emerald-500 to-green-600'
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team and active community forums.',
      gradient: 'from-green-400 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium mb-4 backdrop-blur-sm border border-emerald-800">
            Why Choose Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Makes Us
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Different
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're committed to providing the best learning experience with proven methods that deliver results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${feature.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '150+', label: 'Students Enrolled' },
            { number: '6+', label: 'Expert Instructors' },
            { number: '10+', label: 'Courses Available' },
            { number: '98%', label: 'Success Rate' }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;