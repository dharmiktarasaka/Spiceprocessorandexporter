import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Sparkles, Check, ArrowRight, Package } from 'lucide-react';
import { PackagingIllustration } from '../illustrations/CustomSVGIllustrations';

export const PrivateLabelConfigurator = ({ onSelectConfig }) => {
  const [selectedSpice, setSelectedSpice] = useState('turmeric');
  const [selectedContainer, setSelectedContainer] = useState('pouch');
  const [selectedSize, setSelectedSize] = useState('250g');
  const [selectedLabelStyle, setSelectedLabelStyle] = useState('natural');

  const spices = [
    { id: 'cumin', name: 'Cumin', color: '#E88A1A' },
    { id: 'turmeric', name: 'Turmeric', color: '#D9A514' },
    { id: 'chilli', name: 'Red Chilli', color: '#B7372D' },
    { id: 'coriander', name: 'Coriander', color: '#648B4A' },
    { id: 'blend', name: 'Garam Masala', color: '#3A2418' },
  ];

  const containers = [
    { id: 'pouch', name: 'Stand-Up Pouch', desc: 'Resealable zip-lock retail pouch.' },
    { id: 'jar', name: 'Glass Jar', desc: 'Premium glass container with wooden lid.' },
    { id: 'box', name: 'Paper Box', desc: 'Eco-friendly cardboard retail pack.' },
    { id: 'bag', name: 'Bulk Sack', desc: 'Woven PP bag for foodservice & wholesale.' },
  ];

  const sizes = [
    { id: '50g', name: '50 g', type: 'Retail' },
    { id: '100g', name: '100 g', type: 'Retail' },
    { id: '250g', name: '250 g', type: 'Retail' },
    { id: '500g', name: '500 g', type: 'Foodservice' },
    { id: '1kg', name: '1 kg', type: 'Foodservice' },
    { id: 'bulk', name: '25 kg Sack', type: 'Bulk Wholesale' },
  ];

  const labelStyles = [
    { id: 'premium', name: 'Editorial Premium', desc: 'Sleek luxury design with dark tones.' },
    { id: 'natural', name: 'Origins Natural', desc: 'Eco kraft paper finish and organic lines.' },
    { id: 'modern', name: 'Minimal Modern', desc: 'Bold typography and flat color panels.' },
    { id: 'traditional', name: 'Heritage Traditional', desc: 'Authentic Indian royal patterns.' },
  ];

  const activeColor = spices.find(s => s.id === selectedSpice)?.color || '#D9A514';

  const handleRequestQuote = () => {
    if (onSelectConfig) {
      onSelectConfig({
        spice: selectedSpice,
        container: selectedContainer,
        size: selectedSize,
        labelStyle: selectedLabelStyle
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 font-sans">
      
      {/* 2D Interactive Live Mockup Panel (Left 5 Cols) */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center bg-white p-6 rounded-xl border border-spice-cocoa/10 shadow-lg relative min-h-[350px]">
        <div className="absolute top-3 left-3 bg-spice-forest/5 text-spice-forest text-[10px] font-extrabold uppercase px-2.5 py-1 rounded tracking-widest flex items-center space-x-1">
          <Sparkles className="w-3.5 h-3.5 text-spice-gold" />
          <span>Interactive Preview</span>
        </div>
        
        {/* Dynamic SVG component renderer */}
        <PackagingIllustration 
          activeProduct={selectedSpice} 
          activeContainer={selectedContainer} 
          activeColor={activeColor} 
        />
        
        <div className="mt-4 text-center">
          <span className="text-[11px] text-spice-cocoa/50 block">Mockup Visual representation only</span>
          <span className="text-sm font-bold text-spice-forest capitalize mt-1 block">
            {selectedSize} {selectedContainer} &mdash; {selectedSpice} ({selectedLabelStyle} label)
          </span>
        </div>
      </div>

      {/* Configuration Controls Panel (Right 7 Cols) */}
      <div className="lg:col-span-7 bg-spice-cream/30 p-6 md:p-8 rounded-xl border border-spice-cocoa/5 space-y-6">
        
        {/* Step 1: Select Spice */}
        <div>
          <label className="block text-xs uppercase font-extrabold tracking-widest text-spice-cocoa/70 mb-2.5">
            1. Select Spice Sourcing
          </label>
          <div className="flex flex-wrap gap-2">
            {spices.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedSpice(s.id)}
                className={`px-4 py-2 text-xs font-bold rounded-full border transition-all flex items-center space-x-1.5 ${
                  selectedSpice === s.id 
                    ? 'bg-spice-forest text-white border-spice-forest' 
                    : 'bg-white text-spice-cocoa/80 border-spice-cocoa/10 hover:border-spice-forest'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }}></span>
                <span>{s.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Container Type */}
        <div>
          <label className="block text-xs uppercase font-extrabold tracking-widest text-spice-cocoa/70 mb-2.5">
            2. Container Selection
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {containers.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedContainer(c.id);
                  if (c.id === 'bag') {
                    setSelectedSize('bulk');
                  } else if (selectedSize === 'bulk') {
                    setSelectedSize('250g');
                  }
                }}
                className={`p-3 text-left rounded-lg border transition-all ${
                  selectedContainer === c.id 
                    ? 'bg-spice-forest text-white border-spice-forest shadow-md' 
                    : 'bg-white text-spice-cocoa/80 border-spice-cocoa/10 hover:border-spice-forest'
                }`}
              >
                <Package className="w-4 h-4 mb-1 text-spice-gold" />
                <span className="block text-xs font-bold">{c.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Size Selection */}
        <div>
          <label className="block text-xs uppercase font-extrabold tracking-widest text-spice-cocoa/70 mb-2.5">
            3. Target Pack Weight
          </label>
          <div className="flex flex-wrap gap-2">
            {sizes.map((sz) => {
              const disabled = selectedContainer === 'bag' ? sz.id !== 'bulk' : sz.id === 'bulk';
              if (disabled) return null;
              
              return (
                <button
                  key={sz.id}
                  onClick={() => setSelectedSize(sz.id)}
                  className={`px-3 py-2 rounded text-xs font-bold border transition-all ${
                    selectedSize === sz.id 
                      ? 'bg-spice-saffron text-white border-spice-saffron shadow-sm' 
                      : 'bg-white text-spice-cocoa/80 border-spice-cocoa/10 hover:border-spice-saffron'
                  }`}
                >
                  <span>{sz.name}</span>
                  <span className="text-[9px] block font-normal opacity-70">{sz.type}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Label Design style */}
        <div>
          <label className="block text-xs uppercase font-extrabold tracking-widest text-spice-cocoa/70 mb-2.5">
            4. Label Design Aesthetics
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {labelStyles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedLabelStyle(style.id)}
                className={`p-3 text-left rounded-lg border transition-all flex items-start space-x-2 ${
                  selectedLabelStyle === style.id 
                    ? 'bg-white border-spice-saffron shadow-md ring-2 ring-spice-saffron/20' 
                    : 'bg-white border-spice-cocoa/10 hover:border-spice-saffron'
                }`}
              >
                <div className={`mt-0.5 rounded-full p-0.5 ${selectedLabelStyle === style.id ? 'bg-spice-saffron text-white' : 'bg-spice-cream text-transparent'}`}>
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-spice-forest">{style.name}</span>
                  <span className="block text-[10px] text-spice-cocoa/60 mt-0.5 leading-tight">{style.desc}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Action button */}
        <div className="pt-2 border-t border-spice-cocoa/10 flex items-center justify-between gap-4">
          <div className="text-xs text-spice-cocoa/60 leading-relaxed max-w-md">
            Custom printing triggers are available for MOQ of 5,000 units. Samples are pre-produced on receipt of digital artwork files.
          </div>
          <button
            onClick={handleRequestQuote}
            className="bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold py-3 px-6 rounded-lg text-xs md:text-sm shadow-md transition-all flex items-center space-x-1.5 whitespace-nowrap"
          >
            <span>Request Specification Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};

export default PrivateLabelConfigurator;
