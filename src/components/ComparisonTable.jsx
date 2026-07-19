import React, { useState } from 'react';
import { Leaf, PackageOpen, HelpCircle, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';

export const ComparisonTable = () => {
  const [activeTab, setActiveTab] = useState('forms');

  const comparisons = {
    forms: {
      title: "Whole Spices vs. Ground Spices",
      headers: ["Comparison Parameter", "Whole Spices", "Ground Spices"],
      rows: [
        { param: "Product Form", val1: "Raw sorted seeds, fingers, pods, or berries.", val2: "Fine or coarse ground powders (cryogenic/mill)." },
        { param: "Shelf-Life Stability", val1: "Extremely stable (up to 24 months in cool dry storage).", val2: "Aroma degrades faster (12-18 months in barrier packs)." },
        { param: "Common Buyers", val1: "Grinding mills, packers, extractions plants, retail distributors.", val2: "Food manufacturers, bakeries, seasonings blending houses, restaurants." },
        { param: "Typical Processing", val1: "Aspirating, cleaning, destoning, size grading, optical sorting.", val2: "Low-temperature milling, sieving, magnetic metal traps." },
        { param: "Packaging Standard", val1: "25kg / 50kg woven PP bags or jute sacks.", val2: "Multi-wall kraft paper bags with inner liners, retail jars." },
        { param: "Primary Applications", val1: "Raw material for grinding, pickles, tea blends, bakery toppings.", val2: "Direct flavoring, curry gravies, snack seasoning coatings." }
      ]
    },
    supply: {
      title: "Bulk Supply vs. Private Label Packaging",
      headers: ["Commercial Aspect", "Bulk Export Supply", "Private Label Customization"],
      rows: [
        { param: "Target Buyer Role", val1: "Spice importers, ingredient brokers, large food processing plants.", val2: "Retail supermarkets, e-commerce brands, food service suppliers." },
        { param: "Packaging Type", val1: "20kg to 50kg heavy-duty bags, or 1000kg jumbo tote sacks.", val2: "50g to 1kg stand-up pouches, glass jars, shaker tins, PET pots." },
        { param: "Branding Details", val1: "SaffronLeaf logo standard, generic export labels with batch specs.", val2: "100% custom buyer-branded artwork, barcoding, local addresses." },
        { param: "Min Order Qty (MOQ)", val1: "Higher threshold (5 to 10 Metric Tons per spice).", val2: "Lower per-sku threshold, but higher setup costs for label printing." },
        { param: "Blend Customization", val1: "Pure single spices conforming to export grades (e.g. FAQ / ASTA).", val2: "Custom formulated recipes, multi-ingredient mixes (e.g., taco mix)." },
        { param: "Production Lead Time", val1: "Fast dispatch (usually 15-20 days from contract confirmation).", val2: "Longer timeline (30-45 days) to allow artwork proofing & packing." }
      ]
    },
    quality: {
      title: "Standard Processing vs. Steam Sterilisation",
      headers: ["Specification Area", "Standard Processing", "Steam Sterilisation (Valued-Added)"],
      rows: [
        { param: "Primary Goal", val1: "Removal of dust, stones, fibers, insect damage, and grading.", val2: "Elimination of pathogenic load (Salmonella, E. coli, molds, yeasts)." },
        { param: "Buyer Requirement", val1: "Suitable for buyers who will sterilize or cook before serving.", val2: "Mandatory for ready-to-eat foods, infant food, EU/US/AUS imports." },
        { param: "Organoleptic Impact", val1: "Zero moisture change, color remains raw and typical.", val2: "Negligible essential oil reduction, preserves raw spice scent and color." },
        { param: "Pesticide & Chemical Risk", val1: "Standard compliance reports.", val2: "Totally clean (Zero ethylene oxide or irradiation residues)." },
        { param: "Documentation Pack", val1: "Standard Phytosanitary, CoO, Analysis certificate.", val2: "HTST validation logs, microbiological test clearance certificates." },
        { param: "Pricing Premium", val1: "Standard market export rates.", val2: "Added sterilisation fees per metric ton based on pathogen targets." }
      ]
    }
  };

  const currentData = comparisons[activeTab];

  return (
    <div className="w-full max-w-4xl mx-auto font-sans bg-white border border-spice-cocoa/10 rounded-xl overflow-hidden shadow-lg">
      
      {/* Table Selection Tabs */}
      <div className="flex border-b border-spice-cocoa/10 bg-spice-cream/30 text-sm">
        <button
          onClick={() => setActiveTab('forms')}
          className={`flex-1 py-4 px-3 font-semibold text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === 'forms' 
              ? 'border-spice-saffron text-spice-forest bg-white' 
              : 'border-transparent text-spice-cocoa/60 hover:text-spice-forest'
          }`}
        >
          <Leaf className="w-4 h-4" />
          <span>Whole vs. Ground</span>
        </button>
        <button
          onClick={() => setActiveTab('supply')}
          className={`flex-1 py-4 px-3 font-semibold text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === 'supply' 
              ? 'border-spice-saffron text-spice-forest bg-white' 
              : 'border-transparent text-spice-cocoa/60 hover:text-spice-forest'
          }`}
        >
          <PackageOpen className="w-4 h-4" />
          <span>Bulk vs. Private Label</span>
        </button>
        <button
          onClick={() => setActiveTab('quality')}
          className={`flex-1 py-4 px-3 font-semibold text-center transition-colors border-b-2 flex items-center justify-center space-x-1.5 ${
            activeTab === 'quality' 
              ? 'border-spice-saffron text-spice-forest bg-white' 
              : 'border-transparent text-spice-cocoa/60 hover:text-spice-forest'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Standard vs. Steam Sterilised</span>
        </button>
      </div>

      {/* Main Grid View */}
      <div className="p-6">
        <h3 className="font-serif text-lg md:text-xl font-bold text-spice-forest mb-4 text-center">
          {currentData.title}
        </h3>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs md:text-sm">
            <thead>
              <tr className="bg-spice-forest text-spice-ivory">
                <th className="p-3 font-semibold border border-spice-forest">{currentData.headers[0]}</th>
                <th className="p-3 font-semibold border border-spice-forest">{currentData.headers[1]}</th>
                <th className="p-3 font-semibold border border-spice-forest">{currentData.headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {currentData.rows.map((row, idx) => (
                <tr 
                  key={idx} 
                  className={idx % 2 === 0 ? 'bg-spice-cream/10 hover:bg-spice-cream/20' : 'bg-white hover:bg-spice-cream/20'}
                >
                  <td className="p-3 font-bold border border-spice-cocoa/10 text-spice-forest text-left whitespace-nowrap">
                    {row.param}
                  </td>
                  <td className="p-3 border border-spice-cocoa/10 text-spice-cocoa/80">
                    <div className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-spice-cardamom mt-0.5 flex-shrink-0" />
                      <span>{row.val1}</span>
                    </div>
                  </td>
                  <td className="p-3 border border-spice-cocoa/10 text-spice-cocoa/80">
                    <div className="flex items-start space-x-1.5">
                      <CheckCircle2 className="w-4 h-4 text-spice-saffron mt-0.5 flex-shrink-0" />
                      <span>{row.val2}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  );
};

export default ComparisonTable;
