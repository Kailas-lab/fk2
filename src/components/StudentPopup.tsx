import React, { useState, useEffect, useRef } from 'react';
import { X, GraduationCap, Sparkles, ArrowRight } from 'lucide-react';

const StudentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const popupRef = useRef(null);
  const ANIMATION_DURATION = 500; // match with CSS transition duration

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), ANIMATION_DURATION);
  };

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        handleClose();
      }
    };
    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        ref={popupRef}
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-md w-full border border-emerald-500/30 shadow-2xl transform transition-all duration-500 ${
          isAnimating ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
        }`}
      >
        {/* Close Button
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors duration-300 hover:bg-gray-700 rounded-full"
        >
          <X className="h-5 w-5" />
        </button> */}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-green-400/20 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-emerald-500 to-green-400 rounded-2xl shadow-lg animate-bounce">
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-4">
            🎓 Special Offer for
            <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
              School Students!
            </span>
          </h3>

          {/* Description */}
          <p className="text-gray-300 mb-6 leading-relaxed">
            All our premium courses are now available at a special student price of just
            <span className="text-emerald-400 font-bold text-xl"> ₹999</span>
          </p>

          {/* Features */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-gray-300 text-sm">
              <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
              <span>All 10+ courses included</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
              <span>Expert instructor guidance</span>
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
              <span>Industry certificates</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={handleClose}
            className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center"
          >
            Claim Student Offer
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>

          <p className="text-xs text-gray-400 mt-3">
            Limited time offer • Valid student ID required
          </p>
        </div>

        {/* Floating Animation Elements */}
        <div className="absolute top-6 left-6 animate-float">
          <span className="text-2xl">📚</span>
        </div>
        <div className="absolute bottom-6 right-6 animate-float delay-1000">
          <span className="text-2xl">🎯</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default StudentPopup;