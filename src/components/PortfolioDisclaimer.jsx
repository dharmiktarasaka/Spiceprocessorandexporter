import React, { useState } from 'react';
import { ShieldAlert, ExternalLink, Code2, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const PortfolioDisclaimer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-spice-forest border-b border-spice-gold/20 text-spice-ivory font-sans relative z-[99]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
          
          <div className="flex items-center space-x-2">
            <span className="bg-spice-gold text-spice-cocoa font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
              SHOWCASE CONCEPT
            </span>
            <p className="text-spice-sand text-center sm:text-left">
              Fictional spice-export portfolio demo designed by <strong className="text-spice-ivory">TARASAKA DIGITAL Solutions</strong>.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-spice-gold hover:text-white font-bold underline transition-colors focus:outline-none"
            >
              {isExpanded ? 'Hide Architecture' : 'View System Specifications'}
            </button>
            <a 
              href="https://tarasaka.com/contact" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-spice-gold font-bold flex items-center space-x-0.5 border-l border-spice-ivory/20 pl-3"
            >
              <span>Hire Agency</span>
              <ExternalLink className="w-3 h-3 ml-0.5" />
            </a>
          </div>

        </div>
      </div>

      {/* Expanded System Info Dropdown */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-spice-ivory/10 bg-spice-cocoa/95 text-spice-ivory overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Box 1: Concept Goals */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-bold text-spice-gold uppercase tracking-wider flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 text-spice-saffron" />
                  <span>Portfolio Notice</span>
                </h4>
                <p className="text-xs text-spice-sand leading-relaxed">
                  SaffronLeaf Spices & Exports is a fictional Ahmedabad-based trading concept. Facility capacity details, analytical parameters, certifications (e.g. Halal, organic placeholders), and transaction paths are mock details created for demonstration. Do not use for real import or trade.
                </p>
                <div className="bg-white/5 p-3 rounded text-[11px] text-spice-sand border border-white/5">
                  <strong>Agency Contacts:</strong> +91 7600 583 156 / +91 90162 89684 <br />
                  Email: info@tarasaka.com
                </div>
              </div>

              {/* Box 2: System Capabilities */}
              <div className="space-y-3">
                <h4 className="font-serif text-sm font-bold text-spice-gold uppercase tracking-wider flex items-center space-x-1.5">
                  <Code2 className="w-4 h-4 text-spice-cardamom" />
                  <span>Demonstration Scope</span>
                </h4>
                <ul className="text-xs text-spice-sand space-y-1.5 pl-1">
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-spice-saffron flex-shrink-0" />
                    <span>Structured B2B Export Architecture</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-spice-saffron flex-shrink-0" />
                    <span>Interactive Private-Label Packaging configurator</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-spice-saffron flex-shrink-0" />
                    <span>3-Step RFQ form ready for CRM / Zapier integration</span>
                  </li>
                  <li className="flex items-center space-x-1.5">
                    <Check className="w-3.5 h-3.5 text-spice-saffron flex-shrink-0" />
                    <span>AEO / GEO question structures for organic indexing</span>
                  </li>
                </ul>
              </div>

              {/* Box 3: CTA */}
              <div className="space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <h4 className="font-serif text-sm font-bold text-spice-gold uppercase tracking-wider">
                    Need a Custom Web Platform?
                  </h4>
                  <p className="text-xs text-spice-sand leading-relaxed">
                    TARASAKA DIGITAL Solutions builds highly optimized web applications, interactive product catalogues, and customer workflows for chemical, food-grade, and export manufacturing groups.
                  </p>
                </div>
                
                <a 
                  href="https://tarasaka.com/contact" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-spice-saffron hover:bg-spice-saffron/90 text-white text-xs font-bold py-2.5 px-4 rounded text-center inline-flex items-center justify-center space-x-1.5 transition-colors self-start w-full sm:w-auto"
                >
                  <span>Inquire with Tarasaka Digital</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioDisclaimer;
