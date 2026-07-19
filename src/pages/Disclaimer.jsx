import React from 'react';
import { ShieldAlert, ExternalLink, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export const Disclaimer = () => {
  return (
    <>
      <SEOHead 
        title="Website Disclaimer notice" 
        description="Official disclaimer notice for SaffronLeaf Spices & Exports. Fictional B2B spice exporter portfolio concept by Tarasaka Digital."
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20 max-w-3xl mx-auto">
        <div className="px-4 sm:px-6 space-y-6 text-sm text-spice-cocoa/80 leading-relaxed">
          
          <div className="text-center space-y-3">
            <ShieldAlert className="w-12 h-12 text-spice-saffron mx-auto" />
            <h1 className="font-serif text-3xl font-bold text-spice-forest">Website Disclaimer</h1>
            <div className="w-12 h-0.5 bg-spice-saffron mx-auto"></div>
          </div>

          <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-5 rounded-lg space-y-2">
            <h4 className="font-bold text-spice-forest text-xs uppercase tracking-wider">Fictional Demonstration Concept</h4>
            <p className="text-xs text-spice-cocoa/70">
              SaffronLeaf Spices & Exports is a fictional corporate entity created for portfolio demonstration and web strategy showcase purposes by <strong>TARASAKA DIGITAL Solutions</strong>. This site does not represent a real operating spice processing, farming, packing, or export business.
            </p>
          </div>

          <h3 className="font-serif text-lg font-bold text-spice-forest pt-2">1. No Real Commodity Sales</h3>
          <p>
            This website is entirely a frontend demonstration. It does not perform actual commercial sales, cargo bookings, logistics dispatches, or trade operations. Any buttons labeled "Request Quote", "Download Catalogue", or "Request Sample" initiate simulated frontend states and record details inside local variables. They do not trigger real financial transactions or email automation paths.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">2. Analytical & Quality Data Disclaimer</h3>
          <p>
            All spice specification limits (such as moisture index caps, purity double-sort parameters, ASTA color value levels, and Scoville heat units) and references to regulatory certifications (like ISO, HACCP, FDA, Halal, or Organic tags) are mockup indicators. They serve only to illustrate B2B user interfaces. Real export transactions must compile verified laboratory documentation cleared by local biosecurity departments before container shipment.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">3. Contact Coordinate Details</h3>
          <p>
            Any addresses, phone listings, or email contacts presented on this website as belonging to SaffronLeaf are fictional indicators. To contact the designers, web developers, and architects responsible for this application, use the official agency coordinates below:
          </p>

          <div className="border border-spice-cocoa/10 p-5 rounded-lg space-y-2 text-xs bg-white">
            <p><strong>Agency Name:</strong> TARASAKA DIGITAL Solutions</p>
            <p><strong>Mobile Trade Desk:</strong> +91 7600 583 156 / +91 90162 89684</p>
            <p><strong>Support Email:</strong> <a href="mailto:info@tarasaka.com" className="text-spice-saffron hover:underline font-semibold">info@tarasaka.com</a></p>
            <p>
              <strong>Official Site:</strong> <a href="https://tarasaka.com" target="_blank" rel="noopener noreferrer" className="text-spice-saffron hover:underline font-semibold flex items-center inline-flex space-x-1"><span>tarasaka.com</span> <ExternalLink className="w-3 h-3 ml-0.5" /></a>
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Disclaimer;
