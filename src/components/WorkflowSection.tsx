import React from 'react';
import { Users, CreditCard, BookOpen, Award, ArrowRight, CheckCircle } from 'lucide-react';

const WorkflowSection = () => {
  const steps = [
    {
      step: 1,
      title: 'Course Enrollment',
      description: 'Submit your enrollment form for any course',
      icon: Users,
      color: 'from-emerald-500 to-green-400',
      details: 'Fill out the enrollment form with your details and course preference'
    },
    {
      step: 2,
      title: 'Free Demo Class',
      description: 'Attend a complimentary demo session',
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-400',
      details: 'Our team will contact you and schedule a free demo class to understand the syllabus and course structure'
    },
    {
      step: 3,
      title: 'Pay 50% Fee',
      description: 'Secure your seat with 50% payment',
      icon: CreditCard,
      color: 'from-purple-500 to-pink-400',
      details: 'Once satisfied with the demo, pay 50% of the course fee to confirm your enrollment'
    },
    {
      step: 4,
      title: 'Start Learning',
      description: 'Begin your learning journey',
      icon: BookOpen,
      color: 'from-orange-500 to-yellow-400',
      details: 'Start attending regular classes and hands-on practical sessions'
    },
    {
      step: 5,
      title: 'Complete Payment',
      description: 'Pay remaining 50% in 1st week',
      icon: CreditCard,
      color: 'from-green-500 to-emerald-400',
      details: 'Complete the remaining 50% payment during your first week of classes'
    },
    {
      step: 6,
      title: 'Get Your Key',
      description: 'Receive your certificate',
      icon: Award,
      color: 'from-emerald-500 to-green-400',
      details: 'Upon course completion, receive your industry-recognized certificate - your key to career success'
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium mb-4 backdrop-blur-sm border border-emerald-800">
            Our Learning Workflow
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Journey to
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Career Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We've designed a simple, transparent process to ensure you get the best learning experience and achieve your career goals.
          </p>
        </div>

        {/* Desktop View - Horizontal Flow */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="grid grid-cols-6 gap-4 relative z-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.step} className="text-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-sm shadow-lg">
                        {step.step}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{step.details}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>


        {/* Mobile View - Vertical Flow */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xs shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-emerald-500 to-green-400 mx-auto mt-4"></div>
                  )}
                </div>

                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 mb-2">{step.description}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.details}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Benefits */}
        <div className="mt-16 bg-gray-800 rounded-2xl p-8 border border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Why Our Workflow Works</h3>
            <p className="text-gray-300">Designed for your success and satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">Risk-Free Trial</h4>
              <p className="text-gray-300 text-sm">Free demo class ensures you're confident before investing</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">Flexible Payment</h4>
              <p className="text-gray-300 text-sm">Split payment option makes quality education affordable</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="text-white font-semibold mb-2">Guaranteed Results</h4>
              <p className="text-gray-300 text-sm">Complete the course and earn your career key (certificate)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;