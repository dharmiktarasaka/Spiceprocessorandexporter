import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Shield, FileText, Compass, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-spice-cocoa text-spice-ivory pt-16 pb-8 border-t-4 border-spice-saffron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sitemap & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b border-spice-ivory/10 pb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8 fill-none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4 C20 4, 27 12, 27 20 C27 28, 20 36, 20 36 C20 36, 13 28, 13 20 C13 12, 20 4, 20 4 Z" fill="#E88A1A" />
                <path d="M20 10 C20 10, 24 16, 24 22 C24 28, 20 34, 20 34 C20 34, 16 28, 16 22 C16 16, 20 10, 20 10 Z" fill="#648B4A" />
              </svg>
              <span className="font-serif text-xl font-bold tracking-wider">SaffronLeaf Spices</span>
            </Link>
            
            <p className="text-sm text-spice-sand leading-relaxed max-w-sm">
              SaffronLeaf Spices & Exports is a premium spice processing and export concept supplying steam-sterilised whole spices, ground powders, and private-label masalas from Ahmedabad, Gujarat to global food sectors.
            </p>

            <div className="space-y-2 pt-2 text-xs text-spice-sand/80">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-spice-gold" />
                <span>GIDC Processing Zone, Ahmedabad, Gujarat, India (Fictional Site)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3.5 h-3.5 text-spice-gold" />
                <span>Serving Importers Across UAE, UK, US, Europe & Australia</span>
              </div>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="font-serif text-base font-semibold text-spice-gold mb-4 tracking-wider uppercase text-xs">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/about" className="text-spice-sand hover:text-spice-saffron transition-colors">Sourcing Philosophy</Link></li>
              <li><Link to="/products" className="text-spice-sand hover:text-spice-saffron transition-colors">Spice Catalogue</Link></li>
              <li><Link to="/processing" className="text-spice-sand hover:text-spice-saffron transition-colors">Cleaning & Sterilisation</Link></li>
              <li><Link to="/private-label" className="text-spice-sand hover:text-spice-saffron transition-colors">Private Label Solutions</Link></li>
              <li><Link to="/exports" className="text-spice-sand hover:text-spice-saffron transition-colors">Export Markets</Link></li>
            </ul>
          </div>

          {/* Spice Categories Col */}
          <div>
            <h4 className="font-serif text-base font-semibold text-spice-gold mb-4 tracking-wider uppercase text-xs">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/products?category=Whole%20Spices" className="text-spice-sand hover:text-spice-saffron transition-colors">Cumin & Coriander</Link></li>
              <li><Link to="/products?category=Whole%20Spices" className="text-spice-sand hover:text-spice-saffron transition-colors">Cardamom & Pepper</Link></li>
              <li><Link to="/products?category=Ground%20Spices" className="text-spice-sand hover:text-spice-saffron transition-colors">Turmeric & Chilli Powders</Link></li>
              <li><Link to="/products?category=Spice%20Blends" className="text-spice-sand hover:text-spice-saffron transition-colors">Custom Curry Powders</Link></li>
              <li><Link to="/products" className="text-spice-sand hover:text-spice-saffron transition-colors">Organic Options</Link></li>
            </ul>
          </div>

          {/* Legal / Contact Col */}
          <div>
            <h4 className="font-serif text-base font-semibold text-spice-gold mb-4 tracking-wider uppercase text-xs">Documentation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/privacy" className="text-spice-sand hover:text-spice-saffron transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-spice-sand hover:text-spice-saffron transition-colors">Terms of Trade</Link></li>
              <li><Link to="/disclaimer" className="text-spice-sand hover:text-spice-saffron transition-colors">Website Disclaimer</Link></li>
              <li><Link to="/contact" className="text-spice-sand hover:text-spice-saffron transition-colors">Request Samples</Link></li>
              <li><Link to="/contact" className="text-spice-sand hover:text-spice-saffron transition-colors">Submit RFQ Form</Link></li>
            </ul>
          </div>

        </div>

        {/* Agency Credits Box (TARASAKA DIGITAL Solutions) */}
        <div className="mt-8 bg-spice-forest/40 p-6 rounded-lg border border-spice-ivory/5 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          
          <div className="lg:col-span-2 space-y-2">
            <h5 className="font-sans text-sm font-bold text-spice-gold uppercase tracking-wider flex items-center space-x-1.5">
              <span>B2B Showcase Project Details</span>
            </h5>
            <p className="text-xs text-spice-sand leading-relaxed">
              This interactive B2B website is an industry portfolio concept designed and developed by <strong className="text-spice-ivory font-semibold">TARASAKA DIGITAL Solutions</strong>. It displays advanced SEO architecture, country-product routing, customizable packaging configurators, and CRM-ready lead capture forms for food manufacturers and spice exporters.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-xs">
              <a href="https://tarasaka.com" target="_blank" rel="noopener noreferrer" className="text-spice-saffron hover:underline flex items-center space-x-1 font-bold">
                <span>Visit Tarasaka Solutions</span> <ExternalLink className="w-3 h-3" />
              </a>
              <a href="https://portfolio.tarasaka.com" target="_blank" rel="noopener noreferrer" className="text-spice-saffron hover:underline flex items-center space-x-1 font-bold">
                <span>More Industry Concepts</span> <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="bg-spice-cocoa/50 p-4 rounded border border-spice-ivory/10 space-y-2.5 text-xs">
            <span className="block font-bold text-spice-gold uppercase tracking-wide">Tarasaka Digital Trade Desk</span>
            <div className="space-y-1 text-spice-sand">
              <p className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-spice-saffron" />
                <span>+91 7600 583 156 / +91 90162 89684</span>
              </p>
              <p className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-spice-saffron" />
                <span>info@tarasaka.com</span>
              </p>
            </div>
          </div>

        </div>

        {/* Fictional Disclaimer & copyright */}
        <div className="mt-8 pt-8 border-t border-spice-ivory/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-spice-sand/60">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            <strong>Disclaimer:</strong> SaffronLeaf Spices & Exports is a fictional demo entity. All facility capacities, certifications, test numbers, laboratory reports, and buyer testimonials shown are placeholders for visual illustration only. All rights reserved &copy; {currentYear} TARASAKA.
          </p>
          <p className="whitespace-nowrap">
            Created by <a href="https://tarasaka.com" target="_blank" rel="noopener noreferrer" className="text-spice-gold hover:underline">TARASAKA DIGITAL</a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
