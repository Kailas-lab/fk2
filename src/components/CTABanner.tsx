import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Rocket } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-black via-emerald-950 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/fkbg.webp" 
              alt="Future Key Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Start Your Learning
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              Journey Today!
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Join thousands of successful students who have transformed their careers with our expert-led courses.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-gray-300">
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-emerald-400 mr-2" />
              <span>Lifetime Access</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-emerald-400 mr-2" />
              <span>Expert Support</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-500 rounded-full"></div>
            <div className="flex items-center">
              <Sparkles className="h-5 w-5 text-emerald-400 mr-2" />
              <span>Industry Certificates</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/courses"
              className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-500/50 flex items-center"
            >
              Explore All Courses
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get Free Consultation
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">7-Day</div>
              <div className="text-sm">Money Back Guarantee</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">24/7</div>
              <div className="text-sm">Student Support</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">150+</div>
              <div className="text-sm">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;