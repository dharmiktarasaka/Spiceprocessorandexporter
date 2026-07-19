import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Compass, HelpCircle, Check, Users, Users2, Award } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { FarmIllustration } from '../illustrations/CustomSVGIllustrations';


export const About = () => {
  const values = [
    { title: "Transparency", desc: "Providing complete batch histories, analytical reports, and realistic crop availability forecasts." },
    { title: "Traceability", desc: "Mapping target spices back to initial collection clusters and regional agricultural cooperatives." },
    { title: "Consistency", desc: "Maintaining steady moisture limits, volatile oil volumes, and sizing sieves across multiple container shipments." },
    { title: "Buyer Responsiveness", desc: "Understanding the urgency of food production lines and delivering rapid analytical document sets." },
    { title: "Long-Term Partnerships", desc: "Focusing on contract pricing stability, predictable supply windows, and cooperative dispute review." },
    { title: "Responsible Sourcing", desc: "Encouraging farmers to utilize safe crop dryers to minimize natural molds and chemical contamination." }
  ];

  return (
    <>
      <SEOHead 
        title="Spice Sourcing and Exporter Roots | SaffronLeaf" 
        description="Learn about SaffronLeaf's fictional B2B spice sourcing philosophy, values, and processing capabilities. Ahmedabad-based B2B export demonstration."
        keywords={[
          "spice exporter in Gujarat",
          "spice supplier in Ahmedabad",
          "bulk spice sourcing",
          "traceable spice supplier"
        ]}
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header intro */}
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block">Our Story</span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-spice-cocoa">
              Bridging Indian Farms & Global Food Manufacturers
            </h1>
            <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
            <p className="text-sm md:text-base text-spice-cocoa/80 leading-relaxed pt-2">
              SaffronLeaf Spices & Exports represents a state-of-the-art fictional spice processor and exporter situated in the trading corridor of Gujarat. This concept demonstration details how B2B food businesses source top-grade agricultural commodities.
            </p>
          </div>

          {/* Section 1: Sourcing philosophy & approach */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
            
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-spice-forest">
                Our Sourcing Philosophy & Procurement Network
              </h2>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                Gujarat and Rajasthan account for a significant share of global seed spices like cumin, coriander, fennel, and mustard. SaffronLeaf utilizes an extensive sourcing model, drawing materials directly from verified farm cooperatives and local agricultural markets (APMCs) in Unjha, Mehsana, and Rajkot.
              </p>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                By maintaining local purchase offices, our quality assessors inspect raw crops at the stack level during harvest seasons. This direct interaction helps eliminate excess intermediaries, stabilizes purchase costs, and guarantees that only high-density, low-moisture materials are selected for cleanroom refinement.
              </p>
              
              <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-5 rounded-lg space-y-2">
                <span className="block text-xs uppercase font-extrabold text-spice-forest">Sourcing Standards Checklist</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-spice-cocoa/80">
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-4 h-4 text-spice-saffron" />
                    <span>APMC Unjha Seed Grading</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-4 h-4 text-spice-saffron" />
                    <span>Harvest-level moisture validation</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-4 h-4 text-spice-saffron" />
                    <span>Aflatoxin-focused pre-selection</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <Check className="w-4 h-4 text-spice-saffron" />
                    <span>Organic farming cluster support</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-4 rounded-xl border border-spice-cocoa/10 shadow-lg text-center space-y-4">
              <FarmIllustration />
              <div className="px-2 pb-2">
                <span className="text-[10px] uppercase font-bold text-spice-gold tracking-widest block">Agricultural Origin Mapping</span>
                <span className="text-xs text-spice-cocoa/60 mt-1 block">Vector visualization of Gujarat crop collection clusters</span>
              </div>
            </div>

          </div>

          {/* Section 2: Core Values Grid */}
          <div className="mb-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-spice-forest">
                Our Core Sourcing Values
              </h2>
              <p className="text-xs text-spice-cocoa/50 mt-1 uppercase tracking-wider">
                The principles that drive procurement compliance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((v, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-spice-cocoa/5 shadow-sm hover:border-spice-saffron transition-all">
                  <div className="w-8 h-8 rounded bg-spice-cream text-spice-saffron flex items-center justify-center font-bold text-sm mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-spice-forest mb-2">{v.title}</h3>
                  <p className="text-xs text-spice-cocoa/70 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Illustrated B2B Support Team (Instead of fake photos) */}
          <div className="bg-spice-forest text-spice-ivory p-8 md:p-12 rounded-2xl border border-spice-gold/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-spice-cocoa opacity-20 z-0"></div>
            
            <div className="relative z-10 space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="text-xs uppercase font-extrabold text-spice-gold tracking-widest block">Team Showcase</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-white">
                  Meet Our Trade Consultation Desk
                </h2>
                <p className="text-xs text-spice-sand leading-relaxed">
                  We use custom illustrated characters to represent client-support roles. In production projects, we recommend using high-quality staff photography to establish commercial E-E-A-T credentials.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Team 1 */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center space-y-4 hover:bg-white/10 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-spice-gold/25 mx-auto flex items-center justify-center border-2 border-spice-gold">
                    {/* SVG Icon representing a Procurement Director */}
                    <Users className="w-8 h-8 text-spice-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">Director of Global Sourcing</h4>
                    <span className="text-[10px] text-spice-gold uppercase font-bold tracking-widest">Ahmedabad Trade Desk</span>
                  </div>
                  <p className="text-xs text-spice-sand leading-relaxed">
                    Manages procurement contracts with farmers, agricultural markets, and oversees pricing index hedging.
                  </p>
                </div>

                {/* Team 2 */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center space-y-4 hover:bg-white/10 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-spice-gold/25 mx-auto flex items-center justify-center border-2 border-spice-gold">
                    <Users2 className="w-8 h-8 text-spice-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">Chief Food Safety Officer</h4>
                    <span className="text-[10px] text-spice-gold uppercase font-bold tracking-widest">QC & Laboratory Desk</span>
                  </div>
                  <p className="text-xs text-spice-sand leading-relaxed">
                    Maintains compliance audits for HACCP, steam-sterilisation validation, and coordinates chemical analysis.
                  </p>
                </div>

                {/* Team 3 */}
                <div className="bg-white/5 p-6 rounded-xl border border-white/5 text-center space-y-4 hover:bg-white/10 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-spice-gold/25 mx-auto flex items-center justify-center border-2 border-spice-gold">
                    <Compass className="w-8 h-8 text-spice-gold" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">Head of Logistics & Customs</h4>
                    <span className="text-[10px] text-spice-gold uppercase font-bold tracking-widest">Freight & Documentation Desk</span>
                  </div>
                  <p className="text-xs text-spice-sand leading-relaxed">
                    Prepares shipping manifests, Phytosanitary approvals, and coordinates customs clearance paperwork for target ports.
                  </p>
                </div>

              </div>
            </div>
          </div>

          {/* Section 4: Final CTA */}
          <div className="mt-20 text-center space-y-4">
            <h3 className="font-serif text-xl md:text-2xl font-bold text-spice-cocoa">
              Need Verification of Our Sourcing Capabilities?
            </h3>
            <p className="text-sm text-spice-cocoa/60 max-w-xl mx-auto leading-relaxed">
              Consult our trade managers to arrange a digital meeting, request pre-shipment certificates of analysis, or review current harvest forecasts.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact" 
                className="bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold py-3 px-8 rounded shadow transition-all inline-block text-sm"
              >
                Initiate Procurement Discussion
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default About;
