import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Compass, ClipboardCheck, Info, Clock } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import MultiStepRFQForm from '../components/MultiStepRFQForm';

export const Contact = () => {
  const [searchParams] = useSearchParams();

  const spice = searchParams.get('spice');
  const container = searchParams.get('container');
  const size = searchParams.get('size');
  const style = searchParams.get('style');
  const prefilled = searchParams.get('prefilled');

  // Build prefill configuration object if any parameter is present
  const hasPrefill = spice || container || size || style || prefilled;
  const prefilledConfig = hasPrefill ? {
    spice: prefilled || spice,
    container: container,
    size: size,
    labelStyle: style
  } : null;

  return (
    <>
      <SEOHead 
        title="Request a Bulk Spice Export Quote" 
        description="Share your spice, form, metric tonnage volume, and destination port to receive a formal B2B contract quote. Quick pre-shipment sample dispatch."
        keywords={[
          "request spice quotation",
          "bulk spice RFQ",
          "spice export enquiry",
          "private-label spice quote",
          "request spice samples"
        ]}
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block">Quotation Desk</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spice-cocoa">
              Consult Sourcing Desk & Request RFQ
            </h1>
            <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
            <p className="text-sm text-spice-cocoa/70">
              Submit your detailed spice volume requirements. Our trade representatives respond within 24 business hours with custom pricing calculations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left RFQ Form (8 Columns) */}
            <div className="lg:col-span-8">
              <MultiStepRFQForm prefilledConfig={prefilledConfig} />
            </div>

            {/* Right Contact details (4 Columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Box 1: Fictional SaffronLeaf Coordinates */}
              <div className="bg-white border border-spice-cocoa/10 p-6 rounded-xl shadow-sm space-y-4">
                <h3 className="font-serif text-base font-bold text-spice-forest border-b border-spice-cocoa/5 pb-2">
                  Ahmedabad SaffronLeaf Office
                </h3>

                <div className="space-y-3.5 text-xs text-spice-cocoa/80">
                  <div className="flex items-start space-x-2.5">
                    <MapPin className="w-4 h-4 text-spice-saffron mt-0.5 flex-shrink-0" />
                    <span>Plot 112-D, GIDC Industrial Estate, Odhav, Ahmedabad, Gujarat, 382415, India (Fictional site coordinates)</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Mail className="w-4 h-4 text-spice-saffron flex-shrink-0" />
                    <span>export@saffronleafspices.com (Simulated)</span>
                  </div>

                  <div className="flex items-center space-x-2.5">
                    <Clock className="w-4 h-4 text-spice-saffron flex-shrink-0" />
                    <span>Mon - Sat: 9:00 AM to 6:00 PM (IST)</span>
                  </div>
                </div>

                <div className="bg-spice-cream/35 p-3 rounded text-[10px] text-spice-cocoa/60 leading-relaxed italic border border-spice-cocoa/5">
                  <strong>Notice:</strong> This is a fictional corporate website mockup. Inquiries submitted here are recorded inside simulated local states and do not send real email dispatches.
                </div>
              </div>

              {/* Box 2: Developer/Agency Coordinates (TARASAKA DIGITAL) */}
              <div className="bg-spice-forest text-spice-ivory p-6 rounded-xl border border-spice-gold/10 shadow-md space-y-4">
                <div className="border-b border-spice-ivory/10 pb-2">
                  <span className="text-[10px] uppercase font-bold text-spice-gold tracking-widest block">Agency Sourcing</span>
                  <h3 className="font-serif text-base font-bold text-white mt-0.5">
                    Tarasaka Digital Support
                  </h3>
                </div>

                <p className="text-xs text-spice-sand leading-relaxed">
                  Need an automated RFQ platform, custom spice filter matrix, or HubSpot CRM webhooks configured for your spice export business? Work directly with TARASAKA.
                </p>

                <div className="space-y-2 text-xs text-spice-sand">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-spice-gold" />
                    <span>+91 7600 583 156 / +91 90162 89684</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-spice-gold" />
                    <span>info@tarasaka.com</span>
                  </div>
                </div>

                <a 
                  href="https://tarasaka.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold text-xs py-2.5 px-4 rounded text-center block transition-colors"
                >
                  Visit Agency Website
                </a>
              </div>

              {/* Box 3: Fictional Map Placeholder */}
              <div className="bg-white border border-spice-cocoa/10 rounded-xl overflow-hidden shadow-sm h-48 relative flex items-center justify-center text-center p-4">
                <div className="absolute inset-0 bg-spice-cream/20 opacity-30 z-0"></div>
                <div className="relative z-10 space-y-2">
                  <Compass className="w-8 h-8 text-spice-saffron mx-auto animate-spin-slow" />
                  <span className="block text-xs font-bold text-spice-forest">Odhav GIDC, Ahmedabad Area Map</span>
                  <span className="text-[10px] text-spice-cocoa/50 block italic">Interactive Map Placeholder</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
