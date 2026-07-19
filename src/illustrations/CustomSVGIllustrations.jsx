import React from 'react';

// Farm landscape illustration
export const FarmIllustration = () => {
  return (
    <svg viewBox="0 0 600 400" className="w-full h-auto max-w-lg mx-auto transition-transform duration-700 hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sky background */}
      <rect width="600" height="400" rx="16" fill="url(#farmSky)" />
      
      {/* Sun */}
      <circle cx="480" cy="100" r="40" fill="url(#sunGrad)" opacity="0.9" />
      <circle cx="480" cy="100" r="55" stroke="#D9A514" strokeWidth="1" strokeDasharray="4 4" className="animate-spin-slow origin-[480px_100px]" />
      
      {/* Far mountains/hills */}
      <path d="M-50 400 L120 220 L300 400 Z" fill="#113028" opacity="0.4" />
      <path d="M150 400 L320 250 L520 400 Z" fill="#113028" opacity="0.6" />
      <path d="M300 400 L460 210 L650 400 Z" fill="#113028" opacity="0.3" />

      {/* Spice agricultural fields / terrace lines */}
      <path d="M-20 400 C 150 300, 350 350, 620 400 Z" fill="#173F35" />
      
      {/* Terraces */}
      <path d="M-20 370 C 120 280, 300 320, 620 360" stroke="#648B4A" strokeWidth="4" fill="none" opacity="0.5" />
      <path d="M-20 340 C 100 260, 260 290, 620 320" stroke="#D9A514" strokeWidth="3" fill="none" opacity="0.4" />
      <path d="M-20 310 C 80 240, 220 260, 620 280" stroke="#648B4A" strokeWidth="2" fill="none" opacity="0.3" />

      {/* Animated Spice Leaves swaying in the fields */}
      <g className="animate-float-slow origin-[120px_310px]">
        {/* Leaf stem */}
        <path d="M120 310 Q 130 260 145 230" stroke="#E88A1A" strokeWidth="3" strokeLinecap="round" />
        {/* Leaves */}
        <path d="M145 230 C 130 215 110 230 120 255 C 130 280 145 230 145 230 Z" fill="#648B4A" />
        <path d="M145 230 C 160 215 180 230 170 255 C 160 280 145 230 145 230 Z" fill="#173F35" />
        <path d="M135 270 C 115 260 100 275 110 290 C 120 305 135 270 135 270 Z" fill="#D9A514" />
        <path d="M135 270 C 155 260 170 275 160 290 C 150 305 135 270 135 270 Z" fill="#648B4A" opacity="0.8" />
      </g>
      
      <g className="animate-float-medium origin-[320px_350px]">
        <path d="M320 350 Q 310 290 290 250" stroke="#E88A1A" strokeWidth="4" strokeLinecap="round" />
        <path d="M290 250 C 275 230 250 240 260 270 C 270 300 290 250 290 250 Z" fill="#D9A514" />
        <path d="M290 250 C 305 230 330 240 320 270 C 310 300 290 250 290 250 Z" fill="#648B4A" />
      </g>

      <g className="animate-float-fast origin-[450px_360px]">
        <path d="M450 360 Q 465 310 485 280" stroke="#648B4A" strokeWidth="3" strokeLinecap="round" />
        <path d="M485 280 C 470 265 450 280 460 305 C 470 330 485 280 485 280 Z" fill="#173F35" />
        <path d="M485 280 C 500 265 520 280 510 305 C 500 330 485 280 485 280 Z" fill="#E88A1A" />
      </g>

      {/* Foreground border styling */}
      <rect x="15" y="15" width="570" height="370" rx="8" stroke="#FFF8E8" strokeWidth="1" opacity="0.25" />

      {/* Gradients */}
      <defs>
        <linearGradient id="farmSky" x1="300" y1="0" x2="300" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF8E8" />
          <stop offset="60%" stopColor="#FAF4EB" />
          <stop offset="100%" stopColor="#E6D7C3" />
        </linearGradient>
        <linearGradient id="sunGrad" x1="480" y1="60" x2="480" y2="140" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E88A1A" />
          <stop offset="100%" stopColor="#D9A514" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Spice processing conveyor line illustration
export const ProcessingLineIllustration = () => {
  return (
    <svg viewBox="0 0 600 350" className="w-full h-auto max-w-lg mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Frame */}
      <rect width="600" height="350" rx="16" fill="#173F35" />
      
      {/* Grid lines in bg */}
      <path d="M 0 50 L 600 50 M 0 100 L 600 100 M 0 150 L 600 150 M 0 200 L 600 200 M 0 250 L 600 250 M 0 300 L 600 300" stroke="#FFF8E8" strokeWidth="0.5" opacity="0.05" />
      <path d="M 100 0 L 100 350 M 200 0 L 200 350 M 300 0 L 300 350 M 400 0 L 400 350 M 500 0 L 500 350" stroke="#FFF8E8" strokeWidth="0.5" opacity="0.05" />

      {/* Machine 1: Inlet Hopper & Cleaner (Left) */}
      <path d="M50 80 L110 80 L95 130 L65 130 Z" fill="#3A2418" stroke="#D9A514" strokeWidth="2" />
      <rect x="60" y="130" width="60" height="70" rx="4" fill="#3A2418" />
      <line x1="60" y1="170" x2="120" y2="185" stroke="#E88A1A" strokeWidth="3" className="animate-pulse" />
      <text x="90" y="165" fill="#FFF8E8" fontSize="10" textAnchor="middle" fontFamily="sans-serif">CLEANER</text>
      
      {/* Falling particles */}
      <circle cx="80" cy="210" r="3" fill="#D9A514" className="animate-bounce" />
      <circle cx="90" cy="215" r="2.5" fill="#E88A1A" />
      <circle cx="100" cy="208" r="2" fill="#B7372D" />

      {/* Conveyor Belt System (Middle) */}
      <rect x="110" y="195" width="360" height="15" rx="7.5" fill="#3A2418" stroke="#D9A514" strokeWidth="2" />
      {/* Conveyor wheels */}
      <circle cx="125" cy="202.5" r="5" fill="#FAF4EB" />
      <circle cx="205" cy="202.5" r="5" fill="#FAF4EB" />
      <circle cx="285" cy="202.5" r="5" fill="#FAF4EB" />
      <circle cx="365" cy="202.5" r="5" fill="#FAF4EB" />
      <circle cx="445" cy="202.5" r="5" fill="#FAF4EB" />
      
      {/* Moving spices on the belt */}
      <g className="animate-float-fast">
        {/* Bulk whole cardamom */}
        <circle cx="150" cy="188" r="4.5" fill="#648B4A" />
        {/* Turmeric root */}
        <path d="M 215 186 Q 225 182 235 188" stroke="#D9A514" strokeWidth="5" strokeLinecap="round" />
        {/* Whole cumin heap */}
        <path d="M290 190 Q297 180 305 190 Z" fill="#E88A1A" />
        {/* Chilli pod */}
        <path d="M370 190 Q382 180 390 190" stroke="#B7372D" strokeWidth="4.5" strokeLinecap="round" />
      </g>

      {/* Machine 2: Steam Sterilisation Chamber (Middle-Right) */}
      <rect x="310" y="60" width="80" height="110" rx="8" fill="#3A2418" stroke="#648B4A" strokeWidth="2" />
      <circle cx="350" cy="115" r="25" fill="#173F35" stroke="#E88A1A" strokeWidth="2" />
      <path d="M350 98 L350 132 M333 115 L367 115" stroke="#FAF4EB" strokeWidth="2" opacity="0.3" />
      <text x="350" y="118" fill="#D9A514" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">STEAM</text>
      {/* Steam puffs */}
      <circle cx="330" cy="50" r="8" fill="#FFF8E8" opacity="0.2" className="animate-bounce" />
      <circle cx="370" cy="45" r="10" fill="#FFF8E8" opacity="0.3" className="animate-bounce" />

      {/* Machine 3: Metal Detector & Packaging (Far Right) */}
      <rect x="460" y="120" width="80" height="90" rx="4" fill="#3A2418" stroke="#B7372D" strokeWidth="2" />
      <rect x="480" y="135" width="40" height="25" rx="2" fill="#173F35" />
      {/* Flashing green light */}
      <circle cx="500" cy="147" r="4" fill="#648B4A" className="animate-ping" />
      <text x="500" y="180" fill="#FFF8E8" fontSize="8" textAnchor="middle" fontFamily="sans-serif">METAL DETECT</text>

      {/* Finished Sacks / Containers */}
      <path d="M 480 280 L 520 280 L 530 330 L 470 330 Z" fill="#E6D7C3" stroke="#3A2418" strokeWidth="2" />
      <text x="500" y="310" fill="#3A2418" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="serif">SaffronLeaf</text>
      
      {/* Sacks on palette */}
      <path d="M 460 330 L 540 330 L 540 340 L 460 340 Z" fill="#3A2418" />
    </svg>
  );
};

// Private Label packaging options illustration
export const PackagingIllustration = ({ activeProduct = "cumin", activeContainer = "pouch", activeColor = "#E88A1A" }) => {
  return (
    <svg viewBox="0 0 450 350" className="w-full h-auto max-w-sm mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="450" height="350" rx="16" fill="#FFF8E8" stroke="#3A2418" strokeWidth="1" opacity="0.2" />

      {activeContainer === 'pouch' && (
        <g className="animate-float-slow origin-[225px_175px]">
          {/* Stand-up Pouch Body */}
          <path d="M140 60 L310 60 L330 260 C330 285, 290 295, 225 295 C160 295, 120 285, 120 260 Z" fill="#FFF" stroke="#3A2418" strokeWidth="4" />
          {/* Pouch zip lock line */}
          <line x1="145" y1="85" x2="305" y2="85" stroke="#3A2418" strokeWidth="2" strokeDasharray="3 3" />
          
          {/* Main Label Wrapper */}
          <rect x="145" y="110" width="160" height="135" rx="8" fill="#173F35" />
          
          {/* Label Header */}
          <text x="225" y="140" fill="#FFF8E8" fontSize="16" fontFamily="serif" fontWeight="bold" textAnchor="middle">SaffronLeaf</text>
          
          {/* Selected Spice Color Fill Accent */}
          <rect x="175" y="155" width="100" height="5" fill={activeColor} rx="2" />
          
          {/* Product Name */}
          <text x="225" y="185" fill={activeColor} fontSize="14" fontWeight="bold" textAnchor="middle" className="uppercase tracking-widest">{activeProduct}</text>
          <text x="225" y="200" fill="#E6D7C3" fontSize="9" textAnchor="middle">Pure Origins. Global Flavours.</text>
          
          {/* Net weight & barcode mock */}
          <text x="165" y="230" fill="#FFF8E8" fontSize="9" opacity="0.8">Net Wt. 250g</text>
          
          {/* Barcode lines */}
          <g opacity="0.6">
            <line x1="260" y1="220" x2="260" y2="232" stroke="#FFF8E8" strokeWidth="1.5" />
            <line x1="264" y1="220" x2="264" y2="232" stroke="#FFF8E8" strokeWidth="3" />
            <line x1="269" y1="220" x2="269" y2="232" stroke="#FFF8E8" strokeWidth="1" />
            <line x1="272" y1="220" x2="272" y2="232" stroke="#FFF8E8" strokeWidth="2.5" />
            <line x1="277" y1="220" x2="277" y2="232" stroke="#FFF8E8" strokeWidth="1.5" />
          </g>

          {/* Sealed top handle tear notch */}
          <path d="M 130 65 L 140 70 L 130 75" stroke="#3A2418" strokeWidth="2" fill="none" />
          <path d="M 320 65 L 310 70 L 320 75" stroke="#3A2418" strokeWidth="2" fill="none" />
        </g>
      )}

      {activeContainer === 'jar' && (
        <g className="animate-float-slow origin-[225px_175px]">
          {/* Jar Lid (Wood Grain Mock) */}
          <rect x="160" y="55" width="130" height="25" rx="6" fill="#3A2418" stroke="#3A2418" strokeWidth="3" />
          <line x1="165" y1="68" x2="285" y2="68" stroke="#E6D7C3" strokeWidth="1" opacity="0.15" />

          {/* Jar neck */}
          <rect x="175" y="80" width="100" height="15" fill="#FAF4EB" stroke="#3A2418" strokeWidth="3" />
          
          {/* Jar glass body */}
          <path d="M140 95 C140 95, 130 115, 130 135 L130 270 C130 285, 145 295, 160 295 L290 295 C305 295, 320 285, 320 270 L320 135 C320 115, 310 95, 310 95 Z" fill="#FFF" fillOpacity="0.85" stroke="#3A2418" strokeWidth="4" />
          
          {/* Glass reflections */}
          <path d="M 142 135 L 142 260" stroke="#FFF8E8" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
          <path d="M 308 135 L 308 220" stroke="#E6D7C3" strokeWidth="2" opacity="0.5" />

          {/* Label wrapper on glass */}
          <rect x="145" y="130" width="160" height="120" rx="4" fill="#173F35" />
          <text x="225" y="160" fill="#FFF8E8" fontSize="15" fontFamily="serif" fontWeight="bold" textAnchor="middle">SaffronLeaf</text>
          
          <rect x="175" y="172" width="100" height="3" fill={activeColor} />
          
          {/* Product Name */}
          <text x="225" y="198" fill={activeColor} fontSize="13" fontWeight="bold" textAnchor="middle" className="uppercase tracking-widest">{activeProduct}</text>
          <text x="225" y="212" fill="#E6D7C3" fontSize="8" textAnchor="middle">Premium B2B Pack</text>
          
          {/* Small batch & Net wt */}
          <text x="165" y="238" fill="#FFF8E8" fontSize="8" opacity="0.8">Net Wt. 100g</text>
          
          {/* Organic / Quality Badge */}
          <circle cx="275" cy="235" r="8" fill={activeColor} />
          <path d="M 272 235 L 274 237 L 278 233" stroke="#FFF8E8" strokeWidth="1.5" fill="none" />
        </g>
      )}

      {activeContainer === 'box' && (
        <g className="animate-float-slow origin-[225px_175px]">
          {/* Cardboard box 3D-ish view */}
          {/* Top lid flap side */}
          <path d="M 150 90 L 225 55 L 300 90 L 225 110 Z" fill="#E6D7C3" stroke="#3A2418" strokeWidth="3" />
          
          {/* Left front face */}
          <path d="M 150 90 L 225 110 L 225 290 L 150 260 Z" fill="#FFF" stroke="#3A2418" strokeWidth="3" />
          
          {/* Right front face */}
          <path d="M 225 110 L 300 90 L 300 260 L 225 290 Z" fill="#E6D7C3" stroke="#3A2418" strokeWidth="3" opacity="0.9" />

          {/* Left Face details (Logo & Name) */}
          <text x="187" y="145" fill="#173F35" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="serif" transform="skewY(14.5)">SaffronLeaf</text>
          <rect x="165" y="160" width="45" height="2" fill={activeColor} transform="skewY(14.5)" />
          <text x="187" y="185" fill={activeColor} fontSize="11" fontWeight="bold" textAnchor="middle" className="uppercase" transform="skewY(14.5)">{activeProduct}</text>
          <text x="187" y="200" fill="#3A2418" fontSize="6.5" textAnchor="middle" transform="skewY(14.5)">100% Pure Origin</text>

          {/* Right Face details (Certifications & barcode) */}
          <g transform="skewY(-14.5) translate(22, 160)" opacity="0.8">
            <line x1="220" y1="20" x2="220" y2="35" stroke="#3A2418" strokeWidth="1" />
            <line x1="223" y1="20" x2="223" y2="35" stroke="#3A2418" strokeWidth="2" />
            <line x1="227" y1="20" x2="227" y2="35" stroke="#3A2418" strokeWidth="1" />
            <line x1="230" y1="20" x2="230" y2="35" stroke="#3A2418" strokeWidth="1.5" />
            <text x="225" y="45" fill="#3A2418" fontSize="5.5" textAnchor="middle">BATCH SPEC</text>
          </g>
        </g>
      )}

      {activeContainer === 'bag' && (
        <g className="animate-float-slow origin-[225px_175px]">
          {/* Bulk jute / PP bag */}
          <path d="M 150 90 C 150 90, 160 70, 225 70 C 290 70, 300 90, 300 90 L 315 270 C 315 285, 275 295, 225 295 C 175 295, 135 285, 135 270 Z" fill="#E6D7C3" stroke="#3A2418" strokeWidth="4" />
          
          {/* Bag neck tied string */}
          <path d="M 175 90 C 200 97, 250 97, 275 90" stroke="#3A2418" strokeWidth="3" fill="none" />
          <circle cx="225" cy="94" r="5" fill="#3A2418" />
          
          {/* Jute woven texture overlay (lines) */}
          <path d="M 155 110 L 295 110 M 145 130 L 305 130 M 140 150 L 310 150 M 137 170 L 313 170 M 135 190 L 315 190 M 135 210 L 315 210 M 135 230 L 315 230 M 137 250 L 313 250 M 140 270 L 310 270" stroke="#3A2418" strokeWidth="0.5" opacity="0.15" />
          <path d="M 170 95 L 170 290 M 200 95 L 200 295 M 230 95 L 230 295 M 260 95 L 260 295 M 280 95 L 280 290" stroke="#3A2418" strokeWidth="0.5" opacity="0.15" />

          {/* Green stripe in center */}
          <rect x="210" y="110" width="30" height="175" fill="#173F35" fillOpacity="0.2" />

          {/* Bulk label */}
          <rect x="160" y="140" width="130" height="110" rx="2" fill="#FFF" fillOpacity="0.95" stroke="#3A2418" strokeWidth="2" />
          
          <text x="225" y="165" fill="#173F35" fontSize="13" fontFamily="serif" fontWeight="bold" textAnchor="middle">SaffronLeaf</text>
          
          {/* Selected spice name */}
          <text x="225" y="195" fill={activeColor} fontSize="14" fontWeight="bold" textAnchor="middle" className="uppercase tracking-widest">{activeProduct}</text>
          <text x="225" y="210" fill="#3A2418" fontSize="7" textAnchor="middle">BULK EXPORT GRADE</text>
          
          <text x="225" y="235" fill="#3A2418" fontSize="8" fontWeight="bold" textAnchor="middle">NET WT. 25 KG</text>
        </g>
      )}
    </svg>
  );
};

// World export route visual map illustration
export const ExportMapIllustration = () => {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-auto max-w-2xl mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ocean bg */}
      <rect width="800" height="450" rx="16" fill="#173F35" />
      
      {/* Grid lines */}
      <path d="M 0 50 H 800 M 0 100 H 800 M 0 150 H 800 M 0 200 H 800 M 0 250 H 800 M 0 300 H 800 M 0 350 H 800 M 0 400 H 800" stroke="#FFF8E8" strokeWidth="0.5" opacity="0.05" />
      <path d="M 100 0 V 450 M 200 0 V 450 M 300 0 V 450 M 400 0 V 450 M 500 0 V 450 M 600 0 V 450 M 700 0 V 450" stroke="#FFF8E8" strokeWidth="0.5" opacity="0.05" />

      {/* Simplified World Continents (Paths representing generalized landmasses) */}
      {/* North America */}
      <path d="M 30 100 Q 60 70 120 70 Q 180 80 160 140 Q 130 180 150 220 Q 130 250 110 270 L 100 240 Q 60 170 30 100 Z" fill="#FFF8E8" opacity="0.1" />
      {/* Europe */}
      <path d="M 280 80 Q 320 60 380 70 Q 420 90 400 130 Q 370 150 360 180 Q 320 180 290 140 Z" fill="#FFF8E8" opacity="0.1" />
      {/* Africa */}
      <path d="M 320 180 Q 380 180 400 220 Q 430 280 390 340 L 370 360 Q 350 300 320 240 Z" fill="#FFF8E8" opacity="0.12" />
      {/* Asia */}
      <path d="M 400 70 Q 550 50 680 90 Q 720 160 700 230 Q 650 270 580 250 Q 560 210 500 200 Q 480 160 400 130 Z" fill="#FFF8E8" opacity="0.08" />
      {/* Australia */}
      <path d="M 640 280 Q 700 280 720 310 Q 700 360 650 350 Q 620 320 640 280 Z" fill="#FFF8E8" opacity="0.12" />
      
      {/* India (Origin Point - Ahmedabad, Gujarat) */}
      <path d="M 465 170 L 485 170 L 478 205 L 465 185 Z" fill="#E88A1A" opacity="0.5" />
      {/* Ahmedabad exact dot */}
      <circle cx="470" cy="180" r="5" fill="#E88A1A" className="animate-ping" />
      <circle cx="470" cy="180" r="3.5" fill="#E88A1A" />
      <text x="470" y="170" fill="#FFF8E8" fontSize="9" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AHMEDABAD</text>

      {/* Target Export Hubs */}
      {/* Dubai (Middle East) */}
      <circle cx="420" cy="190" r="3" fill="#D9A514" />
      <text x="415" y="202" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Dubai</text>

      {/* Rotterdam (Europe) */}
      <circle cx="340" cy="120" r="3" fill="#D9A514" />
      <text x="340" y="112" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Rotterdam</text>

      {/* London (UK) */}
      <circle cx="310" cy="115" r="3" fill="#D9A514" />
      <text x="300" y="107" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">London</text>

      {/* New York (US) */}
      <circle cx="140" cy="130" r="3" fill="#D9A514" />
      <text x="140" y="122" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">New York</text>

      {/* Sydney (Australia) */}
      <circle cx="680" cy="320" r="3" fill="#D9A514" />
      <text x="680" y="332" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Sydney</text>

      {/* Singapore (Southeast Asia) */}
      <circle cx="560" cy="240" r="3" fill="#D9A514" />
      <text x="575" y="250" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Singapore</text>

      {/* Durban (South Africa) */}
      <circle cx="410" cy="330" r="3" fill="#D9A514" />
      <text x="410" y="342" fill="#E6D7C3" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Durban</text>

      {/* Animated Route Lines radiating from Ahmedabad */}
      {/* Route to Dubai */}
      <path d="M 470 180 Q 445 185 420 190" stroke="#E88A1A" strokeWidth="2.5" className="animate-dash" strokeLinecap="round" />
      {/* Route to Rotterdam */}
      <path d="M 470 180 Q 405 130 340 120" stroke="#E88A1A" strokeWidth="1.5" className="animate-dash" strokeLinecap="round" />
      {/* Route to London */}
      <path d="M 470 180 Q 380 120 310 115" stroke="#E88A1A" strokeWidth="1.5" className="animate-dash" strokeLinecap="round" />
      {/* Route to New York */}
      <path d="M 470 180 C 350 150, 240 120, 140 130" stroke="#E88A1A" strokeWidth="1" className="animate-dash" strokeLinecap="round" opacity="0.8" />
      {/* Route to Sydney */}
      <path d="M 470 180 Q 560 250 680 320" stroke="#E88A1A" strokeWidth="1.5" className="animate-dash" strokeLinecap="round" />
      {/* Route to Singapore */}
      <path d="M 470 180 Q 515 210 560 240" stroke="#E88A1A" strokeWidth="2.5" className="animate-dash" strokeLinecap="round" />
      {/* Route to Durban */}
      <path d="M 470 180 Q 440 255 410 330" stroke="#E88A1A" strokeWidth="1.5" className="animate-dash" strokeLinecap="round" />
    </svg>
  );
};

// RFQ & CRM Workflow illustration
export const RFQWorkflowIllustration = () => {
  return (
    <svg viewBox="0 0 500 300" className="w-full h-auto max-w-sm mx-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="500" height="300" rx="16" fill="#FFF8E8" stroke="#3A2418" strokeWidth="1" opacity="0.2" />

      {/* Step 1: Web Form Icon (Left) */}
      <g className="animate-float-slow">
        <rect x="40" y="80" width="80" height="110" rx="8" fill="#173F35" stroke="#3A2418" strokeWidth="2" />
        <rect x="50" y="95" width="60" height="8" rx="2" fill="#E88A1A" />
        <rect x="50" y="115" width="40" height="6" rx="2" fill="#FFF8E8" opacity="0.5" />
        <rect x="50" y="130" width="55" height="6" rx="2" fill="#FFF8E8" opacity="0.5" />
        <rect x="50" y="145" width="50" height="6" rx="2" fill="#FFF8E8" opacity="0.5" />
        <rect x="55" y="165" width="20" height="12" rx="2" fill="#D9A514" />
        <text x="65" y="174" fill="#3A2418" fontSize="7" fontWeight="bold" textAnchor="middle">RFQ</text>
      </g>

      {/* Flow arrow 1 */}
      <path d="M 130 135 L 180 135" stroke="#E88A1A" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" className="animate-pulse" />

      {/* Step 2: CRM & Qualification Icon (Middle) */}
      <g className="animate-float-medium">
        <circle cx="225" cy="135" r="45" fill="#3A2418" stroke="#D9A514" strokeWidth="2" />
        {/* Gear 1 */}
        <circle cx="210" cy="125" r="12" fill="none" stroke="#648B4A" strokeWidth="3" strokeDasharray="4 4" className="animate-spin-slow origin-[210px_125px]" />
        {/* Gear 2 */}
        <circle cx="240" cy="140" r="16" fill="none" stroke="#E88A1A" strokeWidth="3" strokeDasharray="4 4" className="animate-spin-slow origin-[240px_140px]" />
        <text x="225" y="197" fill="#3A2418" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Zoho / CRM Sync</text>
      </g>

      {/* Flow arrow 2 */}
      <path d="M 280 135 L 330 135" stroke="#E88A1A" strokeWidth="3" strokeLinecap="round" strokeDasharray="5 5" className="animate-dash" />

      {/* Step 3: Sample Box & Quote Dispatch (Right) */}
      <g className="animate-float-fast">
        {/* Box drawing */}
        <path d="M 370 145 L 420 115 L 470 145 L 420 175 Z" fill="#E6D7C3" stroke="#3A2418" strokeWidth="2" />
        <path d="M 370 145 L 370 215 L 420 245 L 420 175 Z" fill="#D46A43" stroke="#3A2418" strokeWidth="2" opacity="0.9" />
        <path d="M 420 175 L 420 245 L 470 215 L 470 145 Z" fill="#E6D7C3" stroke="#3A2418" strokeWidth="2" />
        {/* Cardamom leaf detail on top */}
        <path d="M 410 130 C 400 120, 420 100, 430 115 C 440 130, 420 140, 410 130 Z" fill="#648B4A" opacity="0.8" />
        
        <text x="420" y="262" fill="#3A2418" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Sample Approved</text>
      </g>
    </svg>
  );
};
