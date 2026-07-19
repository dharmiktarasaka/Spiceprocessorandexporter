import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export const PrivacyPolicy = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | SaffronLeaf" 
        description="Privacy policy terms for the SaffronLeaf B2B spice export portfolio demo."
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20 max-w-3xl mx-auto">
        <div className="px-4 sm:px-6 space-y-6 text-sm text-spice-cocoa/80 leading-relaxed">
          
          <h1 className="font-serif text-3xl font-bold text-spice-forest text-center">Privacy Policy</h1>
          <div className="w-12 h-0.5 bg-spice-saffron mx-auto"></div>
          
          <p className="italic text-xs text-center text-spice-cocoa/50">Last Updated: July 17, 2026</p>

          <p>
            Welcome to the SaffronLeaf Spices & Exports privacy charter. Because this website is a fictional web portfolio concept built by <strong>TARASAKA DIGITAL Solutions</strong>, any data entered into the contact/RFQ forms is stored solely in local state variables and simulated console outputs.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">1. Information We Collect</h3>
          <p>
            When you complete our simulated multi-step RFQ form or pre-shipment sample request panel, the interface gathers coordinates such as your contact name, business email, company name, destination port, and spice grading preferences. This data does not route to an active database storage tier and is not sold or shared with spice trading firms.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">2. Cookies & Local Analytics</h3>
          <p>
            We may use minor browser storage tools (such as localStorage) to preserve your configured private-label packaging designs or pre-populated form fields across route transition switches. This improves B2B demo visual performance. No tracking beacons are used.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">3. Client Project Deployment Note</h3>
          <p>
            When utilizing this layout for production client systems, our engineers configure database safety measures, secure HTTPS SSL certificate headers, custom SMTP email authentication gateways, and integrate direct GDPR/CCPA consumer consent options.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">4. Contact Admin Desk</h3>
          <p>
            For privacy compliance inquiries or code optimization review questions, connect with TARASAKA at <a href="mailto:info@tarasaka.com" className="text-spice-saffron hover:underline font-semibold">info@tarasaka.com</a>.
          </p>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
