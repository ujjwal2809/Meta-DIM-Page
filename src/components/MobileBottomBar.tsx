import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const MobileBottomBar = () => {
  const phoneNumber = '+918451086339';
  
  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsAppClick = () => {
    window.location.href = `https://wa.me/${phoneNumber.replace('+', '')}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 shadow-lg md:hidden">
      <div className="grid grid-cols-2 h-16">
        {/* Call Us Button */}
        <button
          onClick={handleCallClick}
          className="flex items-center justify-center gap-2 bg-white text-neutral-900 font-semibold transition-all duration-200 hover:bg-neutral-50 active:bg-neutral-100"
        >
          <Phone className="w-5 h-5" />
          <span className="text-sm">Call Us</span>
        </button>
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center gap-2 bg-brand-500 text-white font-semibold transition-all duration-200 hover:bg-brand-600 active:bg-brand-700"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm">WhatsApp</span>
        </button>
      </div>
    </div>
  );
};

export default MobileBottomBar;