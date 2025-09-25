import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '+918680870950';
  const message = 'Hello! I would like to know more about Future Key courses and services.';
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
      
      {/* Pulse Animation */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
    </button>
  );
};

export default WhatsAppButton;