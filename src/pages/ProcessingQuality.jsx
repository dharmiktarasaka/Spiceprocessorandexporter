import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, FileSpreadsheet, Eye, Clipboard, ArrowRight,
  Flame, Award, Search, CheckCircle, Info, Database 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { ProcessingLineIllustration } from '../illustrations/CustomSVGIllustrations';

export const ProcessingQuality = () => {
  const processes = [
    { title: "Raw Intake Inspection", desc: "Verifying load moisture, foreign matter percentage, and testing for pre-harvest pesticide indicators." },
    { title: "Aspirator & Sieves", desc: "Separating dust, agricultural leaves, straws, and lighter particles through fine mesh sieves." },
    { title: "Gravity Destoning", desc: "Removing high-density impurities such as stones, pebbles, sand grains, and soil lumps." },
    { title: "Cryogenic Milling", desc: "Cooling grinders to prevent thermal degradation of essential volatile oils and aroma profiles." },
    { title: "HTST Steam Sterilisation", desc: "Subjecting spices to short-duration high-temperature steam to reduce microbiological flora." },
    { title: "X-Ray Metal Detection", desc: "Using high-strength magnets and X-Ray scanners to block ferrous, non-ferrous, and stainless steel particles." },
    { title: "Analytical Laboratory Review", desc: "Testing moisture balance, ash content, and chemical parameters (curcumin, capsaicin ASTA) on each batch." },
    { title: "Batch Log Traceability", desc: "Assigning unique barcode labels linking finished bags back to initial procurement dates." }
  ];

  return (
    <>
      <SEOHead 
        title="Spice Processing and Quality Approach" 
        description="Learn about our spice cleaning, sorting, cryogenic grinding, and steam sterilisation facility capabilities. ISO/HACCP compliant demo."
        keywords={[
          "spice processing company",
          "steam-sterilised spice supplier",
          "spice cleaning and grinding facility",
          "spice quality-control process",
          "bulk spice processing"
        ]}
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block">Facility Capabilities</span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-spice-cocoa">
              Attention to Purity & Consistent Grading
            </h1>
            <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
            <p className="text-sm md:text-base text-spice-cocoa/70">
              Our fictional facility layout uses modern screening systems and microbiological treatments to satisfy international food safety codes.
            </p>
          </div>

          {/* Section 1: Processing line illustration & overview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            <div className="lg:col-span-5">
              <div className="bg-spice-forest p-6 rounded-xl border border-spice-gold/10 shadow-xl">
                <ProcessingLineIllustration />
              </div>
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl font-bold text-spice-forest">
                Steam Sterilisation vs. Chemical Treatment
              </h2>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                Many wholesale importers traditionally rely on Ethylene Oxide (EtO) gas or chemical irradiation to reduce microbial load. However, these methods are subject to strict regulatory bans in many jurisdictions (such as the European Union) due to residue hazards.
              </p>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                SaffronLeaf implements <strong>High Temperature Short Time (HTST) Steam Sterilisation</strong>. By exposing whole or ground spices to dry steam under pressurized vacuum for brief intervals, we neutralize pathogens like Salmonella, E. coli, yeasts, and molds. This physical method leaves zero chemical residues and safeguards the natural volatile oils, color ASTA values, and sensory profiles of seed and powder spices.
              </p>

              <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-4 rounded text-xs text-spice-forest italic font-semibold">
                Note: All processing units are placeholders for demonstration purposes and should be configured with verified client facility specs before production.
              </div>
            </div>
          </div>

          {/* Section 2: Capability Cards Grid */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-serif text-2xl font-bold text-spice-forest">
                Refinement & Sorting Capabilities
              </h2>
              <p className="text-xs text-spice-cocoa/50 mt-1 uppercase tracking-wider">
                Step-by-step processing workflow points
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processes.map((p, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-spice-cocoa/10 shadow-sm space-y-3 hover:border-spice-saffron transition-all">
                  <div className="w-8 h-8 rounded-full bg-spice-cream text-spice-saffron flex items-center justify-center font-bold text-xs">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-sm font-bold text-spice-forest">{p.title}</h3>
                  <p className="text-[11px] text-spice-cocoa/70 leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Quality Documentation */}
          <div className="bg-spice-cream/15 p-8 rounded-2xl border border-spice-cocoa/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl font-bold text-spice-forest">
                Pre-Shipment Quality Documentation Packs
              </h3>
              <p className="text-sm text-spice-cocoa/75 leading-relaxed">
                Before shipping containers, our laboratory exports a full quality dossier. This pack enables buyers to approve materials in advance, ensuring swift customs check clearance.
              </p>
              
              <ul className="text-xs text-spice-cocoa space-y-2.5">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-spice-saffron flex-shrink-0" />
                  <span><strong>Certificate of Analysis (CoA):</strong> Detailing moisture, ash, extraneous matter, and volatile oils.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-spice-saffron flex-shrink-0" />
                  <span><strong>Microbiological Cleared Certificate:</strong> Confirming zero Salmonella and E. coli presence.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-spice-saffron flex-shrink-0" />
                  <span><strong>Fumigation / Phytosanitary Approval:</strong> Dispatched by authorized government inspectors.</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-spice-cocoa/10 shadow-md space-y-4">
              <span className="block text-xs uppercase font-extrabold text-spice-forest">SaffronLeaf Laboratory</span>
              <p className="text-xs text-spice-cocoa/60 leading-relaxed">
                Request a blank sample spec pack to review physical parameter sheets. Our technicians are ready to align meshes or heat parameters as required.
              </p>
              <Link 
                to="/contact" 
                className="bg-spice-forest hover:bg-spice-forest/90 text-white text-xs font-bold py-3 px-6 rounded text-center block transition-all"
              >
                Request Blank Spec Sheets
              </Link>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default ProcessingQuality;
