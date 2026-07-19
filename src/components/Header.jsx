import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, MessageSquare, ShieldCheck, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioDisclaimer from './PortfolioDisclaimer';


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll detection for header background transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
    setIsProductDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Processing & Quality', path: '/processing' },
    { name: 'Private Label', path: '/private-label' },
    { name: 'Export Markets', path: '/exports' },
  ];

  const productCategories = [
    { name: 'Whole Spices', desc: 'Sortex cleaned whole cumin, coriander, cardamom, and chilli pods.', path: '/products?category=Whole%20Spices' },
    { name: 'Ground Spices', desc: 'Cryogenic ground turmeric, red chilli, and coriander powders.', path: '/products?category=Ground%20Spices' },
    { name: 'Spice Blends', desc: 'Custom formulated Garam Masala, dry rubs, and seasonings.', path: '/products?category=Spice%20Blends' },
  ];

  const linkColor = isScrolled 
    ? 'text-spice-ivory hover:text-spice-gold' 
    : 'text-spice-ivory lg:text-spice-forest hover:text-spice-gold lg:hover:text-spice-saffron';
    
  const logoText = isScrolled
    ? 'text-spice-ivory'
    : 'text-spice-ivory lg:text-spice-forest';

  const logoSub = isScrolled
    ? 'text-spice-gold'
    : 'text-spice-gold lg:text-spice-cocoa';

  const consultColor = isScrolled
    ? 'text-spice-gold hover:text-spice-saffron'
    : 'text-spice-gold lg:text-spice-forest hover:text-spice-saffron lg:hover:text-spice-saffron';

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {!isScrolled && <PortfolioDisclaimer />}
      
      <div className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-spice-forest shadow-lg py-3' 
          : 'bg-spice-forest/90 md:bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link to="/" className="flex items-center space-x-2 focus-visible:ring-offset-spice-forest">
            {/* SVG Logo Mark representing Saffron Leaf */}
            <svg viewBox="0 0 40 40" className="w-10 h-10 fill-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4 C20 4, 27 12, 27 20 C27 28, 20 36, 20 36 C20 36, 13 28, 13 20 C13 12, 20 4, 20 4 Z" fill="#E88A1A" />
              <path d="M20 10 C20 10, 24 16, 24 22 C24 28, 20 34, 20 34 C20 34, 16 28, 16 22 C16 16, 20 10, 20 10 Z" fill="#648B4A" />
              <path d="M20 4 V36" stroke="currentColor" strokeWidth="1.5" opacity="0.3" className={isScrolled ? 'text-spice-ivory' : 'text-spice-forest'} />
            </svg>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-wider leading-tight transition-colors ${logoText}`}>SaffronLeaf</span>
              <span className={`text-[9px] uppercase tracking-widest font-sans transition-colors ${logoSub}`}>Spices & Exports</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-8 font-sans">
            
            {/* Regular Links */}
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-[14px] font-medium tracking-wide transition-colors ${
                  isActive ? 'text-spice-saffron' : linkColor
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `text-[14px] font-medium tracking-wide transition-colors ${
                  isActive ? 'text-spice-saffron' : linkColor
                }`
              }
            >
              About
            </NavLink>

            {/* Products Mega Dropdown Triggers on Hover/Click */}
            <div 
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button 
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className={`flex items-center text-[14px] font-medium tracking-wide transition-colors focus:outline-none ${linkColor}`}
              >
                Products <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              <AnimatePresence>
                {isProductDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 mt-2 bg-spice-cream rounded-md shadow-xl border border-spice-cocoa/10 overflow-hidden z-50 py-2"
                  >
                    <div className="px-4 py-2 border-b border-spice-cocoa/10">
                      <span className="text-xs uppercase font-bold tracking-wider text-spice-forest/60">Spice Categories</span>
                    </div>
                    {productCategories.map((cat, i) => (
                      <Link 
                        key={i} 
                        to={cat.path}
                        className="block px-4 py-3 hover:bg-spice-sand/30 transition-colors group"
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-serif text-sm font-semibold text-spice-cocoa group-hover:text-spice-forest">{cat.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-spice-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-spice-cocoa/70 mt-0.5 leading-relaxed">{cat.desc}</p>
                      </Link>
                    ))}
                    <div className="bg-spice-forest text-spice-ivory px-4 py-2 flex items-center justify-between text-xs mt-1">
                      <span>Complete B2B Catalog</span>
                      <Link to="/products" className="text-spice-gold font-bold hover:underline">View All</Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other nav links */}
            {navLinks.slice(2).map((link, idx) => (
              <NavLink 
                key={idx} 
                to={link.path}
                className={({ isActive }) => 
                  `text-[14px] font-medium tracking-wide transition-colors ${
                    isActive ? 'text-spice-saffron' : linkColor
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/contact" 
              className={`text-[13px] font-bold transition-colors ${consultColor}`}
            >
              Consult Procurement
            </Link>
            
            <Link 
              to="/contact" 
              className="bg-spice-saffron hover:bg-spice-saffron/90 text-white text-[14px] font-semibold px-5 py-2.5 rounded shadow-md transition-all hover:shadow-lg focus:outline-none flex items-center space-x-1.5"
            >
              <span>Request Quote</span>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center space-x-4">
            <Link 
              to="/contact" 
              className="bg-spice-saffron text-white text-xs font-bold px-3 py-2 rounded focus:outline-none"
            >
              RFQ
            </Link>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-spice-ivory focus:outline-none focus:ring-2 focus:ring-spice-gold p-1 rounded"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>


        </div>
      </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-spice-forest border-t border-spice-ivory/10 shadow-2xl overflow-hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <Link 
                to="/" 
                className="block text-lg font-medium text-spice-ivory hover:text-spice-gold border-b border-spice-ivory/5 pb-2"
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-lg font-medium text-spice-ivory hover:text-spice-gold border-b border-spice-ivory/5 pb-2"
              >
                About
              </Link>

              {/* Mobile Products Category List */}
              <div className="space-y-2 border-b border-spice-ivory/5 pb-3">
                <span className="block text-xs uppercase font-bold text-spice-gold/60 tracking-wider">Spice Products</span>
                <div className="grid grid-cols-2 gap-2 pl-2">
                  <Link to="/products" className="text-sm text-spice-ivory/90 hover:text-spice-gold">All Products</Link>
                  <Link to="/products?category=Whole%20Spices" className="text-sm text-spice-ivory/90 hover:text-spice-gold">Whole Spices</Link>
                  <Link to="/products?category=Ground%20Spices" className="text-sm text-spice-ivory/90 hover:text-spice-gold">Ground Spices</Link>
                  <Link to="/products?category=Spice%20Blends" className="text-sm text-spice-ivory/90 hover:text-spice-gold">Spice Blends</Link>
                </div>
              </div>

              {navLinks.slice(2).map((link, idx) => (
                <Link 
                  key={idx} 
                  to={link.path}
                  className="block text-lg font-medium text-spice-ivory hover:text-spice-gold border-b border-spice-ivory/5 pb-2"
                >
                  {link.name}
                </Link>
              ))}

              <Link 
                to="/contact"
                className="block text-lg font-medium text-spice-ivory hover:text-spice-gold border-b border-spice-ivory/5 pb-2"
              >
                Contact
              </Link>

              {/* Mobile Buttons */}
              <div className="pt-4 flex flex-col space-y-3">
                <Link 
                  to="/contact" 
                  className="bg-spice-saffron hover:bg-spice-saffron/90 text-white text-center py-3 rounded font-bold transition-colors"
                >
                  Get Bulk RFQ Form
                </Link>
                <a 
                  href="https://wa.me/917600583156" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded font-bold flex items-center justify-center space-x-2 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp Trade Desk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
