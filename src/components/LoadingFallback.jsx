import React from 'react';

export const LoadingFallback = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center bg-spice-ivory text-spice-cocoa font-sans">
      <div className="relative flex items-center justify-center">
        {/* Animated outer ring */}
        <div className="w-16 h-16 rounded-full border-4 border-spice-cream border-t-spice-saffron animate-spin"></div>
        {/* SVG leaf inside */}
        <svg viewBox="0 0 24 24" className="w-6 h-6 absolute text-spice-forest animate-pulse" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2C12 2 19 9 19 14C19 19 15.5 21.5 12 21.5C8.5 21.5 5 19 5 14C5 9 12 2 12 2Z" fill="currentColor" />
        </svg>
      </div>
      <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-spice-forest/70">
        Loading Specifications...
      </p>
    </div>
  );
};

export default LoadingFallback;
