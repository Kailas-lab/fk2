import React, { useState, useRef, useEffect } from 'react';
import { GraduationCap, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const StudentOfferButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const popupRef = useRef(null);

  // The custom animation duration is 0.5s for closing, and the timeout must match.
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 500); // <-- This matches the 0.5s (500ms) animation-out duration
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if the click is outside the popup and the popup is currently visible
      if (showPopup && popupRef.current && !popupRef.current.contains(e.target)) {
        handleClose();
      }
    };
    
    // Always attach the listener when the component mounts, and conditionally
    // check `showPopup` in the callback for cleaner cleanup.
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]); // Dependency on showPopup is fine, but the logic inside useEffect is now cleaner

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setShowPopup(true)}
        className="fixed bottom-24 left-6 z-40 group bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 text-white p-4 rounded-full shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Student Special Offer"
      >
        <GraduationCap className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Special Student Offer!
          {/* Tooltip arrow */}
          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
        
        {/* Pulse Animation */}
        {/* Note: Inset-0 and opacity-20 on a background div creates the halo effect */}
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-20"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
          🎓
        </div>
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div
            ref={popupRef}
            className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-md w-full border border-emerald-500/30 shadow-2xl transform 
              ${isClosing ? 'animate-bounce-out' : 'animate-bounce-in'}
            `}
          >
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
                🎓 Exclusive Offer for
                <span className="block bg-gradient-to-r from-emerald-400 to-green-300 bg-clip-text text-transparent">
                  School Students!
                </span>
              </h3>

              {/* Price Highlight */}
              <div className="bg-gradient-to-r from-emerald-900/50 to-green-900/50 rounded-xl p-6 mb-6 border border-emerald-700">
                <div className="text-center">
                  <div className="text-sm text-emerald-400 font-medium mb-2">Special Student Price</div>
                  <div className="flex items-center justify-center space-x-4 mb-2">
                    <span className="text-4xl font-bold text-white">₹999</span>
                    <span className="text-xl text-gray-400 line-through">₹2499</span>
                  </div>
                  <div className="text-sm text-gray-300">Save ₹1500 (60% discount)</div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-300 text-sm">
                  <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
                  <span>Access to all 10+ premium courses</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
                  <span>Expert instructor guidance</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
                  <span>Industry-recognized certificates</span>
                </div>
                <div className="flex items-center text-gray-300 text-sm">
                  <Sparkles className="h-4 w-4 text-emerald-400 mr-2" />
                  <span>Free demo class included</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link
                  to="/courses"
                  onClick={handleClose}
                  className="w-full px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-white rounded-xl font-semibold hover:from-emerald-600 hover:to-green-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center"
                >
                  Claim Student Offer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                
                <button
                  onClick={handleClose}
                  className="w-full px-6 py-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                >
                  Maybe Later
                </button>
              </div>

              <p className="text-xs text-gray-400 mt-4">
                Limited time offer • Valid student ID required • Terms apply
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StudentOfferButton;