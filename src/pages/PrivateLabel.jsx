import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, HelpCircle, Check, Info, Box } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import PrivateLabelConfigurator from '../components/PrivateLabelConfigurator';

export const PrivateLabel = () => {
  const navigate = useNavigate();

  const handleSelectConfig = (config) => {
    // Navigate to contact with prefilled queries
    const queryStr = `spice=${config.spice}&container=${config.container}&size=${config.size}&style=${config.labelStyle}`;
    navigate(`/contact?${queryStr}`);
  };

  const steps = [
    { title: "Select Spice Product", desc: "Choose from our catalog of premium cumin, turmeric, chilli, or custom blended seasonings." },
    { title: "Choose Product Form", desc: "Select whole seeds, fine powders, crushed flakes, or customized granulated shapes." },
    { title: "Choose Packaging Style", desc: "Pick retail pouches (ziplock/stand-up), glass jars, carton boxes, or bulk wholesale sacks." },
    { title: "Define Size & Weight", desc: "Choose weights from 50g retail formats up to 1kg foodservice jars or 25kg bulk containers." },
    { title: "Artwork & Label Approvals", desc: "Submit your branding vectors or work with our design division to finalize barcode & regulatory panels." },
    { title: "Simulated Contract Clearance", desc: "Approve lab analysis specs and schedule cargo shipping container bookings." }
  ];

  return (
    <>
      <SEOHead 
        title="Private-Label Spice Manufacturing and Packaging" 
        description="Design custom printed retail pouches, spice shaker jars, and bulk boxes. SaffronLeaf private label masalas and custom blending service."
        keywords={[
          "private-label spice manufacturer",
          "custom spice packaging",
          "private-label masala manufacturer",
          "spice packaging company",
          "custom spice blend manufacturer"
        ]}
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block">Retail & Wholesale Customisation</span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-spice-cocoa">
              Private-Label Custom Spice Solutions
            </h1>
            <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
            <p className="text-sm md:text-base text-spice-cocoa/70">
              Create bespoke spice lines for your retail or foodservice brand. Customize spice selection, package containers, net weights, and design templates.
            </p>
          </div>

          {/* Interactive Packaging Configurator Showcase */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-serif text-xl md:text-2xl font-bold text-spice-forest">
                Design Your Brand's Spice Package
              </h2>
              <p className="text-xs text-spice-cocoa/50 mt-1 uppercase tracking-wider">
                Select your parameters below to see a visual preview
              </p>
            </div>
            
            <PrivateLabelConfigurator onSelectConfig={handleSelectConfig} />
          </div>

          {/* Step process grid */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-serif text-2xl font-bold text-spice-forest">
                Our Private-Label Workflow
              </h2>
              <p className="text-xs text-spice-cocoa/50 mt-1 uppercase tracking-wider">
                A structured process from design approval to delivery dispatch
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {steps.map((st, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-spice-cocoa/10 shadow-sm relative space-y-3">
                  <span className="absolute top-4 right-4 text-3xl font-extrabold text-spice-saffron/10 font-sans">
                    0{idx + 1}
                  </span>
                  <div className="w-8 h-8 rounded bg-spice-cream text-spice-forest flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-base font-bold text-spice-forest">{st.title}</h3>
                  <p className="text-xs text-spice-cocoa/70 leading-relaxed">{st.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sizing compliance warning */}
          <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-5 rounded-lg flex items-start space-x-3 text-xs leading-relaxed text-spice-cocoa/70">
            <Info className="w-5 h-5 text-spice-saffron flex-shrink-0 mt-0.5" />
            <div>
              <strong>Compliance Notice:</strong> Private-label packaging configurations (net weights, language panels, nutrition tags, barcode numbers) must align with consumer protection laws in your target import region (e.g. FDA in the United States, EU labeling rules in Europe, GCC guidelines in the Middle East). Pre-production proofs are verified by legal advisors prior to printing plates engraving.
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default PrivateLabel;
