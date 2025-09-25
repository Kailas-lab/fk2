import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-emerald-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-600 rounded-full filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-auto text-gray-900 fill-current">
          <path d="M0,0V120H1200V0C1000,100 600,100 400,50C200,0 0,50 0,0Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-900/50 rounded-full text-emerald-400 text-sm font-medium mb-6 backdrop-blur-sm border border-emerald-800">
              <img 
                src="/logo.webp"
                alt="Future Key" 
                className="h-4 w-auto mr-2"
              />
              Your Virtual Space for Career Success
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Unlock Your</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                Dream Career
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              <b>Future Key</b>  is your virtual space where dreams meet opportunity. We provide the key to unlock doors to your professional future through expert-led courses and hands-on learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/courses"
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-full font-semibold text-lg hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="group px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald-400">150+</div>
                <div className="text-gray-400">Students Enrolled</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald-400">6+</div>
                <div className="text-gray-400">Expert Instructors</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-emerald-400">10+</div>
                <div className="text-gray-400">Customized Courses</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="lg:w-1/2 flex justify-center">
    <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-400 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
        {/* Removed bg-white from here */}
        <div className="relative p-8 rounded-3xl shadow-2xl max-w-md lg:max-w-lg hover:scale-105 transition-transform duration-500">
            <img
                src="/aa.webp"
                alt="Future Key Logo"
                className="w-full h-auto object-contain"
            />
        </div>
   
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-emerald-500 to-green-400 p-4 rounded-2xl shadow-lg animate-bounce">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-400 to-emerald-500 p-4 rounded-2xl shadow-lg animate-bounce delay-1000">
                <span className="text-2xl">💡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;