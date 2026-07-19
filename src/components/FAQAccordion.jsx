import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { faqsData } from '../data/faqsData';

export const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto font-sans">
      {faqsData.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={faq.id} 
            className="bg-white border border-spice-cocoa/10 rounded-lg overflow-hidden transition-all duration-200 hover:border-spice-forest/40 hover:shadow-md"
          >
            {/* Header / Toggle Button */}
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:bg-spice-cream/35 group"
              aria-expanded={isOpen}
            >
              <h3 className="font-serif text-base md:text-lg font-semibold text-spice-cocoa group-hover:text-spice-forest transition-colors pr-4">
                {faq.question}
              </h3>
              <div className="flex-shrink-0 bg-spice-cream p-1.5 rounded-full text-spice-forest group-hover:bg-spice-saffron group-hover:text-white transition-colors">
                {isOpen ? (
                  <Minus className="w-4 h-4" />
                ) : (
                  <Plus className="w-4 h-4" />
                )}
              </div>
            </button>

            {/* Answer body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                >
                  <div className="px-5 pb-5 pt-1 text-sm md:text-base text-spice-cocoa/80 border-t border-spice-cocoa/5 leading-relaxed bg-spice-cream/15">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
