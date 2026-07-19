import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, CheckCircle2, Search, Filter, 
  Layers, Package, Check, ClipboardCheck, Award, Factory, HelpCircle 
} from 'lucide-react';

import SEOHead from '../components/SEOHead';
import SpiceParticleBackground from '../components/SpiceParticleBackground';
import FAQAccordion from '../components/FAQAccordion';
import ComparisonTable from '../components/ComparisonTable';
import { 
  FarmIllustration, 
  ProcessingLineIllustration, 
  ExportMapIllustration,
  RFQWorkflowIllustration
} from '../illustrations/CustomSVGIllustrations';
import { productsData } from '../data/productsData';

export const Home = () => {
  // Product Finder State
  const [finderSpice, setFinderSpice] = useState('All');
  const [finderForm, setFinderForm] = useState('All');
  const [finderProcess, setFinderProcess] = useState('All');
  const [filteredFinderProducts, setFilteredFinderProducts] = useState(productsData.slice(0, 3));

  // Product Categories Carousel Index state
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleFinderSearch = (e) => {
    e.preventDefault();
    let result = productsData;
    if (finderSpice !== 'All') {
      result = result.filter(p => p.id.includes(finderSpice.toLowerCase()));
    }
    if (finderForm !== 'All') {
      result = result.filter(p => p.forms.some(f => f.includes(finderForm)));
    }
    if (finderProcess !== 'All') {
      result = result.filter(p => p.processingOptions.some(o => o.includes(finderProcess)));
    }
    setFilteredFinderProducts(result.slice(0, 3));
  };

  // Structured Data (JSON-LD Organization)
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "SaffronLeaf Spices & Exports",
    "description": "Fictional premium spice processor and exporter supplying bulk steam-sterilised whole and ground spices to global food companies.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "India"
    },
    "url": window.location.origin,
    "logo": "https://saffronleaf.tarasaka.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Trade Desk Support",
      "telephone": "+91-7600583156",
      "email": "info@tarasaka.com"
    }
  };

  return (
    <>
      <SEOHead 
        title="Spice Exporter From India | SaffronLeaf Spices & Exports" 
        description="Source steam-sterilised whole spices, ground powders, and private-label seasonings in bulk. Ahmedabad-based exporter serving international markets."
        keywords={[
          "spice exporter from India",
          "spice processor and exporter",
          "bulk spice supplier",
          "Indian spice exporter",
          "spice manufacturer in India",
          "steam-sterilised spice supplier",
          "private-label spice manufacturer"
        ]}
        structuredData={homeSchema}
      />

      <div className="relative overflow-x-hidden font-sans">
        
        {/* ==================================================
            HERO SECTION
           ================================================== */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-spice-cream/60 via-spice-ivory to-white pt-24 pb-16">
          <SpiceParticleBackground />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Texts */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="bg-spice-forest/10 text-spice-forest text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-spice-forest/20 inline-block">
                Ahmedabad Processing Zone &bull; Bulk Export
              </span>
              
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-spice-cocoa leading-tight">
                Premium Indian Spices, <br />
                <span className="text-spice-forest">Processed for Global Markets</span>
              </h1>
              
              <p className="text-base sm:text-lg text-spice-cocoa/80 leading-relaxed max-w-2xl">
                From whole seeds and ground powders to steam-sterilised ingredients and custom private-label packaging, SaffronLeaf supports importers, food manufacturers, wholesalers, and retail brands with export-ready spice solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link 
                  to="/contact" 
                  className="bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold px-8 py-3.5 rounded shadow-lg transition-all hover:shadow-xl text-center flex items-center justify-center space-x-1.5"
                >
                  <span>Request a Spice Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  to="/products" 
                  className="border border-spice-cocoa/20 hover:border-spice-forest text-spice-cocoa py-3.5 px-8 rounded font-semibold text-center transition-colors hover:bg-spice-cream/30"
                >
                  Explore Our Products
                </Link>
              </div>

              <div className="pt-2 text-xs">
                <Link to="/private-label" className="text-spice-saffron hover:text-spice-saffron/80 font-bold underline">
                  Discuss Custom Private-Label Packaging options &rarr;
                </Link>
              </div>
            </div>

            {/* Right Hero Custom B2B Photo Section */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/40 p-4 rounded-2xl border border-spice-cocoa/5 shadow-2xl relative overflow-hidden group">
                <div className="relative h-[320px] rounded-xl overflow-hidden shadow-inner bg-spice-cream">
                  <img 
                    src="/assets/farm_hero.png" 
                    alt="SaffronLeaf Spice Farm Landscape" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Glassmorphism label */}
                  <div className="absolute bottom-3 left-3 right-3 glass-panel p-3 rounded-lg text-left border border-spice-cocoa/10">
                    <span className="text-[10px] uppercase font-extrabold text-spice-forest block tracking-wider">Ahmedabad Cultivation Hub</span>
                    <span className="text-xs font-serif text-spice-cocoa block mt-0.5 font-bold">100% Traceable Cumin & Seed Crops</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* B2B Trust Strip */}
        <section className="bg-spice-forest text-spice-ivory py-6 border-y border-spice-gold/20 relative z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-xs md:text-sm font-semibold tracking-wide">
              <div className="flex items-center justify-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-spice-gold" />
                <span>Whole & Ground Spices</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-5 h-5 text-spice-gold" />
                <span>Bulk Export Supply</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Package className="w-5 h-5 text-spice-gold" />
                <span>Private-Label Support</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Layers className="w-5 h-5 text-spice-gold" />
                <span>Flexible Packaging</span>
              </div>
              <div className="flex items-center justify-center space-x-2 col-span-2 md:col-span-1">
                <ClipboardCheck className="w-5 h-5 text-spice-gold" />
                <span>Buyer-Specific Specs</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================
            PRODUCT CATEGORIES CAROUSEL / GRID
           ================================================== */}
        <section className="py-20 bg-spice-ivory/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block mb-2">Our Offerings</span>
              <h2 className="text-3xl md:text-4xl font-bold text-spice-cocoa">
                Export-Grade Spice Categories
              </h2>
              <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
              <p className="text-sm text-spice-cocoa/70 mt-4">
                Sourced from premium agricultural zones across India, processed and packaged under strict sanitary controls inside our Ahmedabad facility.
              </p>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productsData.slice(0, 4).map((product) => (
                <div 
                  key={product.id}
                  className="bg-white border border-spice-cocoa/10 rounded-xl overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {product.image && (
                    <div className="h-44 overflow-hidden bg-spice-cream border-b border-spice-cocoa/5">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-5 space-y-3">
                    <span className="text-[10px] uppercase font-bold text-spice-gold tracking-widest bg-spice-cream px-2 py-0.5 rounded">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-spice-cocoa hover:text-spice-forest">
                      {product.name}
                    </h3>
                    <p className="text-xs text-spice-cocoa/50 italic font-sans">{product.botanicalName}</p>
                    <p className="text-xs text-spice-cocoa/70 line-clamp-3 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="space-y-1.5 pt-2 text-xs">
                      <p className="font-semibold text-spice-forest">Forms Available:</p>
                      <div className="flex flex-wrap gap-1">
                        {product.forms.map((f, i) => (
                          <span key={i} className="bg-spice-cream/65 text-spice-cocoa/80 px-2 py-0.5 rounded text-[10px]">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-spice-cream/30 border-t border-spice-cocoa/5 flex items-center justify-between">
                    <Link to={`/products/${product.id}`} className="text-xs font-bold text-spice-forest hover:text-spice-saffron flex items-center">
                      <span>Specifications</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                    <Link 
                      to={`/contact?prefilled=${product.id}`} 
                      className="bg-spice-saffron text-white p-2 rounded hover:bg-spice-saffron/90 transition-colors"
                      title="Request Quote"
                    >
                      <ClipboardCheck className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link 
                to="/products" 
                className="bg-spice-forest hover:bg-spice-forest/90 text-white font-bold px-8 py-3 rounded text-sm shadow transition-all inline-block"
              >
                Browse Full Spice Catalogue ({productsData.length} Items)
              </Link>
            </div>

          </div>
        </section>

        {/* ==================================================
            INTERACTIVE PRODUCT FINDER
           ================================================== */}
        <section className="py-16 bg-white border-y border-spice-cocoa/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-6 md:p-8 rounded-xl shadow-md">
              <div className="text-center mb-6">
                <h3 className="font-serif text-xl md:text-2xl font-bold text-spice-forest">
                  Spice Specification Finder
                </h3>
                <p className="text-xs text-spice-cocoa/60 mt-1">
                  Filter by spice type, product format, and processing method to instantly retrieve B2B grading options.
                </p>
              </div>

              <form onSubmit={handleFinderSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div>
                  <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">Spice Type</label>
                  <select 
                    value={finderSpice}
                    onChange={(e) => setFinderSpice(e.target.value)}
                    className="w-full p-2 bg-white border border-spice-cocoa/20 rounded text-xs"
                  >
                    <option value="All">All Spices</option>
                    <option value="Cumin">Cumin Seeds</option>
                    <option value="Turmeric">Turmeric</option>
                    <option value="Chilli">Red Chilli</option>
                    <option value="Coriander">Coriander</option>
                    <option value="Fennel">Fennel</option>
                    <option value="Pepper">Black Pepper</option>
                    <option value="Cardamom">Cardamom</option>
                    <option value="Sesame">Sesame</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">Form</label>
                  <select 
                    value={finderForm}
                    onChange={(e) => setFinderForm(e.target.value)}
                    className="w-full p-2 bg-white border border-spice-cocoa/20 rounded text-xs"
                  >
                    <option value="All">All Forms</option>
                    <option value="Whole">Whole</option>
                    <option value="Ground">Ground Powder</option>
                    <option value="Crushed">Crushed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">Processing</label>
                  <select 
                    value={finderProcess}
                    onChange={(e) => setFinderProcess(e.target.value)}
                    className="w-full p-2 bg-white border border-spice-cocoa/20 rounded text-xs"
                  >
                    <option value="All">All Processing</option>
                    <option value="Standard">Standard Cleaned</option>
                    <option value="Sortex">Sortex Sorted</option>
                    <option value="Steam">Steam Sterilised</option>
                    <option value="Organic">Organic Option</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-spice-forest hover:bg-spice-forest/90 text-white font-bold p-2.5 rounded text-xs flex items-center justify-center space-x-1 transition-all"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Filter Catalogue</span>
                </button>
              </form>

              {/* Filter Results Panel */}
              <div className="mt-6 border-t border-spice-cocoa/10 pt-6 space-y-3">
                <span className="block text-[10px] uppercase font-extrabold text-spice-forest/60 tracking-wider">
                  matching grade specifications
                </span>
                
                <div className="space-y-2">
                  {filteredFinderProducts.map((p) => (
                    <div 
                      key={p.id}
                      className="bg-white p-3 rounded border border-spice-cocoa/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-spice-saffron transition-all"
                    >
                      <div>
                        <span className="text-[9px] uppercase font-bold text-spice-saffron">{p.category}</span>
                        <h4 className="font-serif text-sm font-bold text-spice-cocoa">{p.name}</h4>
                        <p className="text-xs text-spice-cocoa/60 font-sans mt-0.5">Specifications: Purity {p.specifications.purity} &bull; Moisture {p.specifications.moisture}</p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Link 
                          to={`/products/${p.id}`} 
                          className="border border-spice-forest/30 text-spice-forest hover:bg-spice-forest hover:text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors"
                        >
                          View Analytical Sheet
                        </Link>
                        <Link 
                          to={`/contact?prefilled=${p.id}`}
                          className="bg-spice-saffron hover:bg-spice-saffron/90 text-white px-3 py-1.5 rounded text-xs font-semibold transition-colors"
                        >
                          Get FOB Quote
                        </Link>
                      </div>
                    </div>
                  ))}

                  {filteredFinderProducts.length === 0 && (
                    <p className="text-center text-xs text-spice-cocoa/50 py-4">No matching specifications found. Submit a custom requirement to our laboratory desk.</p>
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            FROM ORIGIN TO EXPORT: TIMELINE JOURNEY
           ================================================== */}
        <section className="py-20 bg-spice-cream/15">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block mb-2">Traceability Pathway</span>
              <h2 className="text-3xl md:text-4xl font-bold text-spice-cocoa">
                A Structured Journey From Origin to Global Delivery
              </h2>
              <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
              <p className="text-sm text-spice-cocoa/70 mt-4">
                We manage the entire supply chain, ensuring batch-level traceability records, physical hygiene monitoring, and logistical safety checks at every phase.
              </p>
            </div>

            {/* Desktop Horizontal Process Timeline / Mobile Vertical Timeline */}
            <div className="hidden lg:grid grid-cols-7 gap-4 relative">
              {/* Connecting line */}
              <div className="absolute top-8 left-[7%] right-[7%] h-0.5 bg-spice-saffron/30 z-0"></div>
              
              {[
                { step: "01", name: "Farm & Sourcing", desc: "Inspecting soils and choosing harvest belts." },
                { step: "02", name: "Raw Selection", desc: "Verifying moisture and crop purity levels." },
                { step: "03", name: "Clean & Sort", desc: "Aspirators and Sortex optical filters." },
                { step: "04", name: "Milling", desc: "Low-heat grinding of whole spices." },
                { step: "05", name: "Quality Check", desc: "Aflatoxin & heavy metal tests." },
                { step: "06", name: "Packaging", desc: "Vacuum bags & private pouches." },
                { step: "07", name: "Global Dispatch", desc: "Customs declaration & FCL loading." }
              ].map((item, idx) => (
                <div key={idx} className="relative z-10 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-white border-2 border-spice-forest text-spice-forest font-bold text-lg flex items-center justify-center mx-auto shadow-md">
                    {item.step}
                  </div>
                  <h4 className="font-serif text-sm font-semibold text-spice-forest">{item.name}</h4>
                  <p className="text-xs text-spice-cocoa/60 max-w-[120px] mx-auto leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile Vertical Timeline */}
            <div className="lg:hidden space-y-6 max-w-md mx-auto relative pl-6 border-l border-spice-saffron/30">
              {[
                { step: "01", name: "Farm Sourcing", desc: "Inspecting soils and choosing harvest belts in Gujarat/Rajasthan." },
                { step: "02", name: "Raw Selection", desc: "Verifying moisture and crop purity levels before milling." },
                { step: "03", name: "Clean & Sort", desc: "Advanced optical sorting to remove foreign matter." },
                { step: "04", name: "Processing", desc: "Cryogenic low-heat grinding to preserve volatile oils." },
                { step: "05", name: "Quality Desk", desc: "HPLC testing for pesticide limits and microbiological counts." },
                { step: "06", name: "Custom Packing", desc: "Sealing packages inside cleanrooms with protective gas." },
                { step: "07", name: "Logistics", desc: "Loading ocean containers and managing export paperwork." }
              ].map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Dot */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-spice-forest border-2 border-spice-ivory"></div>
                  <h4 className="font-serif text-sm font-bold text-spice-forest">{item.step}. {item.name}</h4>
                  <p className="text-xs text-spice-cocoa/70 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            OUR SPICE SOLUTIONS (SIX CARD GRID)
           ================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block mb-2">Our Competencies</span>
              <h2 className="text-3xl md:text-4xl font-bold text-spice-cocoa">
                Professional B2B Export Solutions
              </h2>
              <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
              <p className="text-sm text-spice-cocoa/70 mt-4">
                We support procurement officers and food scientists with high-performance ingredients that fulfill national food import regulations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Whole Spice Supply", desc: "Optical-sorted whole seeds, fingers, and pods ready for packaging or secondary processing.", path: "/products?category=Whole%20Spices" },
                { title: "Ground Spice Milling", desc: "Temperature-controlled grinding which safeguards natural aroma and organic volatile compound counts.", path: "/products?category=Ground%20Spices" },
                { title: "Steam-Sterilised Spices", desc: "Microbiologically validated pasteurisation process with zero chemical or gas residues.", path: "/processing" },
                { title: "Organic Spice Options", desc: "Source-inspected crops farmed using traditional methods, supported by organic test reports.", path: "/products" },
                { title: "Custom Blends & Grinds", desc: "Tailor-made mixtures adjusted for color ASTA, pungency Scoville, and grain sieve mesh sizing.", path: "/private-label" },
                { title: "Private-Label Packaging", desc: "Fully branded stand-up retail pouches, shakers, jars, and foodservice bags styled to client designs.", path: "/private-label" }
              ].map((sol, idx) => (
                <div 
                  key={idx}
                  className="bg-spice-cream/20 p-6 rounded-xl border border-spice-cocoa/5 hover:border-spice-forest/30 transition-all hover:bg-white hover:shadow-lg group"
                >
                  <div className="w-10 h-10 rounded bg-spice-forest text-spice-gold flex items-center justify-center mb-4 group-hover:bg-spice-saffron group-hover:text-white transition-colors">
                    <Factory className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-spice-cocoa mb-2">{sol.title}</h3>
                  <p className="text-xs text-spice-cocoa/70 leading-relaxed mb-4">{sol.desc}</p>
                  <Link to={sol.path} className="text-xs font-bold text-spice-forest hover:text-spice-saffron inline-flex items-center">
                    <span>Learn More Spec Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ==================================================
            PROCESSING & QUALITY DARK forest GREEN SECTION
           ================================================== */}
        <section className="py-20 bg-spice-forest text-spice-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-spice-forest/60 via-spice-forest to-spice-cocoa/80 opacity-50 z-0"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Illustration Left */}
              <div className="lg:col-span-5">
                <ProcessingLineIllustration />
              </div>

              {/* Content Right */}
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-spice-gold/15 text-spice-gold text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded border border-spice-gold/25 inline-block">
                  Microbiological Control Desk
                </span>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                  Processed with Attention to Purity, Consistency, and Buyer Requirements
                </h2>
                
                <p className="text-sm text-spice-sand leading-relaxed">
                  We process raw commodities through continuous cleaning aspirators, gravity destoners, high-strength magnetic rods, and digital optical Sortex sorting machines. Our low-temperature milling processes ensure that delicate volatile oils do not vaporise during grinding. For sensitive food manufacturers, we offer steam-sterilisation protocols that reduce bacterial parameters without using chemicals.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs pt-2">
                  {[
                    "Raw Inspection", "Aspirator Sieves", "Gravity Destoning",
                    "Cryogenic Grinding", "Steam Pasteurisation", "X-Ray Metal Traps",
                    "Analytical Lab", "Cleanroom Packing", "Batch Samples"
                  ].map((p, idx) => (
                    <div key={idx} className="flex items-center space-x-2 bg-white/5 p-2 rounded border border-white/5">
                      <div className="w-2 h-2 rounded-full bg-spice-saffron"></div>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/5 p-4 rounded border border-white/10 text-[10px] text-spice-sand leading-relaxed italic">
                  <strong>Verification Disclaimer:</strong> All facility capacities, laboratory certifications, and validation reports shown are conceptual mockups for portfolio demonstration and must be configured with client credentials prior to production.
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ==================================================
            COMPARISON MATRIX TABS
           ================================================== */}
        <section className="py-20 bg-spice-cream/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block mb-2">Specifications Analysis</span>
              <h2 className="text-3xl md:text-4xl font-bold text-spice-cocoa">
                Spice Sourcing Comparison Matrices
              </h2>
              <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
              <p className="text-sm text-spice-cocoa/70 mt-4">
                Use these comparison grids to evaluate which spice specifications fit your import target country regulations and production constraints.
              </p>
            </div>

            <ComparisonTable />

          </div>
        </section>

        {/* ==================================================
            EXPORT MARKETS MAP SECTION
           ================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="bg-spice-forest/10 text-spice-forest text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-spice-forest/20 inline-block">
                  International Trade Logistics
                </span>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-spice-cocoa">
                  Serving Importers Across the Middle East, UK, EU, and Americas
                </h2>

                <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                  Exporting agricultural commodities requires absolute adherence to target-country import documentation. We support trade procurement desks with compliant packaging setups, pesticide residue analysis reports, Phytosanitary certificates, Halal seals, and Certificates of Origin.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-spice-saffron text-white flex items-center justify-center mt-0.5 text-xs font-bold">1</div>
                    <div>
                      <h4 className="text-sm font-bold text-spice-forest">Custom Packaging Adaptation</h4>
                      <p className="text-xs text-spice-cocoa/60">Multi-language labeling panel overlays (English-Arabic, English-French) and country-specific barcoding.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-spice-saffron text-white flex items-center justify-center mt-0.5 text-xs font-bold">2</div>
                    <div>
                      <h4 className="text-sm font-bold text-spice-forest">Rigorous Pre-Shipment Testing</h4>
                      <p className="text-xs text-spice-cocoa/60">We submit samples to accredited testing bodies for aflatoxin, ochratoxin, and pesticide residue verification before loading containers.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <Link 
                    to="/exports" 
                    className="bg-spice-forest hover:bg-spice-forest/90 text-white font-bold px-6 py-3 rounded text-xs md:text-sm shadow transition-all"
                  >
                    Explore Target Market Requirements
                  </Link>
                  <Link 
                    to="/contact" 
                    className="border border-spice-cocoa/20 hover:border-spice-forest text-spice-cocoa py-3 px-6 rounded font-semibold text-xs md:text-sm transition-colors"
                  >
                    Consult Logistics Desk
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5">
                <ExportMapIllustration />
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            RFQ WORKFLOW PIPELINE
           ================================================== */}
        <section className="py-20 bg-spice-cream/10 border-t border-spice-cocoa/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5">
                <RFQWorkflowIllustration />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="bg-spice-forest/10 text-spice-forest text-xs font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-spice-forest/20 inline-block">
                  Sales Sync Architecture
                </span>
                
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-spice-cocoa">
                  CRM-Ready Enquiry Pipelines
                </h2>

                <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                  Our multi-step quotation forms capture detailed buyer information, target ports, metric tonnage volumes, and required pesticide clearances. This structured B2B flow can sync instantly with CRM suites like Zoho, HubSpot, or custom email managers to automate sales follow-ups and client pre-qualification.
                </p>

                <div className="bg-white p-5 rounded-lg border border-spice-cocoa/10 space-y-3">
                  <span className="block text-xs uppercase font-extrabold text-spice-forest">
                    Simulated Pipeline Stages:
                  </span>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center text-[10px] font-bold">
                    <div className="bg-spice-cream p-2.5 rounded border border-spice-cocoa/5 text-spice-cocoa">1. Web Enquiry</div>
                    <div className="bg-spice-cream p-2.5 rounded border border-spice-cocoa/5 text-spice-cocoa">2. CRM Routing</div>
                    <div className="bg-spice-cream p-2.5 rounded border border-spice-cocoa/5 text-spice-cocoa">3. Lab Approval</div>
                    <div className="bg-spice-cream p-2.5 rounded border border-spice-cocoa/5 text-spice-cocoa">4. Contract Draft</div>
                  </div>
                </div>

                <div className="text-xs text-spice-cocoa/50 leading-normal flex items-start space-x-2">
                  <Award className="w-4 h-4 text-spice-saffron mt-0.5 flex-shrink-0" />
                  <span>The RFQ form automatically logs structured logs in the dev console and prints confirmation tickets upon submission.</span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ==================================================
            FAQ SECTION
           ================================================== */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block mb-2">Got Questions?</span>
              <h2 className="text-3xl md:text-4xl font-bold text-spice-cocoa">
                Frequently Asked Trade Queries
              </h2>
              <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
              <p className="text-sm text-spice-cocoa/70 mt-4">
                Review the answers below to understand our supply capacity limits, steam validation tests, private label workflows, and dispatch documentation.
              </p>
            </div>

            <FAQAccordion />

          </div>
        </section>

        {/* ==================================================
            FINAL CTA SECTION
           ================================================== */}
        <section className="py-20 bg-spice-forest text-spice-ivory text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-spice-cocoa opacity-20 z-0"></div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
              Looking for a Reliable Spice Processing and Export Partner?
            </h2>
            
            <p className="text-sm text-spice-sand max-w-2xl mx-auto leading-relaxed">
              Share your required spice type, form, quantity parameters, packaging styles, destination ports, and compliance documentation list to begin a structured contract conversation.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link 
                to="/contact" 
                className="bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold px-8 py-3.5 rounded shadow-md transition-colors"
              >
                Request a Bulk Quote Now
              </Link>
              <Link 
                to="/products"
                className="border border-spice-ivory/20 hover:border-spice-gold hover:text-spice-gold text-spice-ivory px-8 py-3.5 rounded font-semibold transition-colors"
              >
                Browse Spice Catalogue
              </Link>
            </div>
            
            <p className="text-[10px] text-spice-sand/50">
              * Fictional showcase project created for demonstration by TARASAKA DIGITAL Solutions.
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

export default Home;
