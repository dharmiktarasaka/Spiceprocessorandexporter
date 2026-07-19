import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, Shield, FileText, ChevronRight, CheckCircle2, 
  HelpCircle, Compass, Info, FileSearch 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { exportMarketsData } from '../data/exportData';
import { ExportMapIllustration } from '../illustrations/CustomSVGIllustrations';

export const ExportMarkets = () => {
  const [activeRegion, setActiveRegion] = useState(exportMarketsData[0].id);
  const currentRegion = exportMarketsData.find(r => r.id === activeRegion) || exportMarketsData[0];

  const tradeChecklist = [
    { title: "Review Local Import Rules", desc: "Consult your regional customs agency regarding maximum pesticide residue limits, required sterilisation, and labeling panels." },
    { title: "Select Specification Grades", desc: "Determine appropriate ASTA color indices, volatile oil levels, and mesh sizing matching your target production recipe." },
    { title: "Request Laboratory Samples", desc: "Request physical pre-shipment samples from SaffronLeaf to run sensory evaluations and heavy metal testing." },
    { title: "Confirm Packaging Formats", desc: "Select custom print files for private labelling, or generic double-lined PP sacks for bulk warehouses." },
    { title: "Draft Shipping manifest", desc: "Specify destination port discharge coordinates, freight incoterms (FOB/CFR/CIF), and document checklists." }
  ];

  return (
    <>
      <SEOHead 
        title="Indian Spice Export Solutions for Global Buyers" 
        description="Learn about bulk spice shipping to the Middle East, UAE, UK, EU, US, and Australia. Export documents, phytosanitary clearance guidance."
        keywords={[
          "Indian spice supplier for UAE",
          "spice exporter to UK",
          "spice supplier for food manufacturers",
          "spice exporter for international buyers",
          "bulk spice supplier for importers"
        ]}
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block font-sans">Global Trade Routes</span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-spice-cocoa">
              Global Export Markets & Compliance
            </h1>
            <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
            <p className="text-sm md:text-base text-spice-cocoa/70">
              SaffronLeaf serves spice importers and ingredient procurement teams worldwide. Review destination document requirements below.
            </p>
          </div>

          {/* Section 1: Animated Route Map */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-7 bg-spice-forest p-6 rounded-2xl border border-spice-gold/10 shadow-xl">
              <ExportMapIllustration />
            </div>

            <div className="lg:col-span-5 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-spice-forest">
                Compliant Shipping to Major Cargo Hubs
              </h2>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                Exporting agricultural food products requires strict adherence to international sanitary rules. Different import zones command specific testing certifications and packaging standards to clear custom checkpoints.
              </p>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                Our logistics coordinators are familiar with targeted paperwork layouts for the GCC, Europe, UK, US, and Southeast Asia. We ensure container loadings occur within sanitary dry terminals to prevent moisture ingress.
              </p>
              <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-4 rounded-lg flex items-center space-x-2 text-xs text-spice-forest font-semibold">
                <Compass className="w-5 h-5 text-spice-saffron flex-shrink-0" />
                <span>Cargo Dispatch Point: Mundra/Kandla Port, Gujarat, India.</span>
              </div>
            </div>
          </div>

          {/* Section 2: Regional Logistics Matrix Selector */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-serif text-2xl font-bold text-spice-forest">
                Regional Documentation Matrix
              </h2>
              <p className="text-xs text-spice-cocoa/50 mt-1 uppercase tracking-wider">
                Select your target market region to inspect standard checklists
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Region Select list (4 cols) */}
              <div className="lg:col-span-4 flex flex-col space-y-2 bg-white p-4 rounded-xl border border-spice-cocoa/10 shadow-sm">
                {exportMarketsData.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setActiveRegion(reg.id)}
                    className={`text-left p-3 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${
                      activeRegion === reg.id 
                        ? 'bg-spice-forest text-white shadow' 
                        : 'bg-spice-cream/20 hover:bg-spice-cream/50 text-spice-cocoa/80'
                    }`}
                  >
                    <span>{reg.name}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {/* Region detail display (8 cols) */}
              <div className="lg:col-span-8 bg-white border border-spice-cocoa/10 p-6 md:p-8 rounded-xl shadow-md space-y-6">
                
                <div>
                  <h3 className="font-serif text-xl font-bold text-spice-forest">{currentRegion.name}</h3>
                  <p className="text-xs text-spice-gold uppercase font-bold mt-1">Cargo Hubs: {currentRegion.hubs}</p>
                </div>

                <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                  {currentRegion.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  
                  {/* Documentation Checklist */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-xs uppercase text-spice-forest flex items-center space-x-1.5 border-b border-spice-cocoa/5 pb-1">
                      <FileText className="w-4 h-4 text-spice-saffron" />
                      <span>Required Documents Checklist</span>
                    </h4>
                    <ul className="text-xs text-spice-cocoa/80 space-y-1.5 pl-1">
                      {currentRegion.requiredDocuments.map((doc, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-spice-cardamom flex-shrink-0" />
                          <span>{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging & Popular spices */}
                  <div className="space-y-4">
                    
                    {/* Packaging */}
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-xs uppercase text-spice-forest">Preferred Packing Style</h4>
                      <p className="text-xs text-spice-cocoa/70 leading-relaxed">{currentRegion.packagingPreference}</p>
                    </div>

                    {/* Popular items */}
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-xs uppercase text-spice-forest">Popular Commodities</h4>
                      <div className="flex flex-wrap gap-1">
                        {currentRegion.popularProducts.map((p, i) => (
                          <span key={i} className="bg-spice-cream text-spice-forest font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>
          </div>

          {/* Section 3: Buyer Import Checklist */}
          <div className="mb-20">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-serif text-2xl font-bold text-spice-forest">
                International Buyer Sourcing Checklist
              </h2>
              <p className="text-xs text-spice-cocoa/50 mt-1 uppercase tracking-wider">
                Key commercial steps to establish compliant spice contracts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {tradeChecklist.map((c, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-spice-cocoa/5 shadow-sm space-y-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-spice-cream text-spice-saffron flex items-center justify-center font-bold text-sm mx-auto">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-sm font-semibold text-spice-forest">{c.title}</h3>
                  <p className="text-[10px] text-spice-cocoa/70 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Documentation Warning Notice */}
          <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-5 rounded-lg flex items-start space-x-3 text-xs leading-relaxed text-spice-cocoa/70">
            <Info className="w-5 h-5 text-spice-saffron flex-shrink-0 mt-0.5" />
            <div>
              <strong>Trade Warning Disclaimer:</strong> SaffronLeaf does not provide legal, customs broker, or official tariff advisory clearance services. Import laws, pesticide caps (MRLs), and laboratory standards change frequently according to regional harvest regulations. Importers must confirm active customs restrictions with target port brokers prior to contract booking.
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ExportMarkets;
