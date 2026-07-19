import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/917600583156?text=Hello%20Tarasaka%20Digital,%20I%20am%20interested%20in%20a%20B2B%20spice%20exporter%20website%20demo."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-500 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-600"
      aria-label="Contact Trade Desk on WhatsApp"
    >
      <MessageSquare className="w-6 h-6 animate-pulse" />
      
      {/* Tooltip trigger on hover */}
      <span className="absolute right-full mr-3 bg-spice-forest text-spice-ivory text-xs font-semibold py-1.5 px-3 rounded shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-spice-ivory/10">
        WhatsApp Trade Desk
      </span>
    </a>
  );
};

export default WhatsAppButton;
