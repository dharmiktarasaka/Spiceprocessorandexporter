import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Filter, RefreshCw, ClipboardCheck, ArrowRight, ShieldAlert } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { productsData } from '../data/productsData';

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';

  // State Management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedForm, setSelectedForm] = useState('All');
  const [selectedProcess, setSelectedProcess] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  // Sync category state with search query parameter changes
  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  // Combined Filtering and Search logic
  useEffect(() => {
    let tempProducts = productsData;

    // Search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      tempProducts = tempProducts.filter(
        p => 
          p.name.toLowerCase().includes(query) || 
          p.botanicalName.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      );
    }

    // Category Filter
    if (selectedCategory !== 'All') {
      tempProducts = tempProducts.filter(p => p.category === selectedCategory);
    }

    // Form Filter
    if (selectedForm !== 'All') {
      tempProducts = tempProducts.filter(p => p.forms.some(f => f.includes(selectedForm)));
    }

    // Processing Filter
    if (selectedProcess !== 'All') {
      tempProducts = tempProducts.filter(p => p.processingOptions.some(o => o.includes(selectedProcess)));
    }

    setFilteredProducts(tempProducts);
  }, [searchQuery, selectedCategory, selectedForm, selectedProcess]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedForm('All');
    setSelectedProcess('All');
    setSearchParams({});
  };

  return (
    <>
      <SEOHead 
        title="Indian Whole and Ground Spice Products" 
        description="Search our premium spice catalogue. Sorting cumin, coriander, fennel seeds, steam-sterilised turmeric and red chilli powders."
        keywords={[
          "Indian spice product catalogue",
          "whole spice supplier",
          "ground spice manufacturer",
          "bulk spice products",
          "wholesale spice exporter"
        ]}
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-spice-saffron block">B2B Commodity Catalogue</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spice-cocoa">
              Indian Whole and Ground Spices
            </h1>
            <div className="w-16 h-1 bg-spice-saffron mx-auto mt-4"></div>
            <p className="text-sm text-spice-cocoa/70">
              Browse our complete product range, complete with typical commercial specifications. Pre-shipment samples are available for quality lab evaluation.
            </p>
          </div>

          {/* Filtering Widgets Sidebar + Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Controls Sidebar (3 Columns) */}
            <div className="lg:col-span-3 space-y-6">
              
              <div className="bg-white p-5 rounded-xl border border-spice-cocoa/10 shadow-sm space-y-5">
                <div className="flex items-center justify-between border-b border-spice-cocoa/5 pb-3">
                  <h3 className="font-serif text-base font-bold text-spice-forest flex items-center space-x-1.5">
                    <Filter className="w-4.5 h-4.5 text-spice-saffron" />
                    <span>Catalog Filters</span>
                  </h3>
                  <button 
                    onClick={handleResetFilters}
                    className="text-[10px] uppercase font-extrabold text-spice-saffron hover:underline flex items-center space-x-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>

                {/* Search Bar */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70">Search Product</label>
                  <div className="relative">
                    <input 
                      type="text" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full p-2 pl-8 border border-spice-cocoa/20 rounded text-xs" 
                      placeholder="Search cumin, turmeric..."
                    />
                    <Search className="w-4 h-4 text-spice-cocoa/40 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Category Filters */}
                <div className="space-y-2">
                  <span className="block text-[10px] uppercase font-bold text-spice-cocoa/70">Category</span>
                  <div className="flex flex-col space-y-1 text-xs">
                    {['All', 'Whole Spices', 'Ground Spices', 'Spice Blends'].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          setSelectedCategory(cat);
                          setSearchParams(cat === 'All' ? {} : { category: cat });
                        }}
                        className={`text-left p-2 rounded transition-colors ${
                          selectedCategory === cat 
                            ? 'bg-spice-forest font-bold text-white shadow-sm' 
                            : 'bg-spice-cream/20 hover:bg-spice-cream/50 text-spice-cocoa'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Filters */}
                <div className="space-y-2">
                  <span className="block text-[10px] uppercase font-bold text-spice-cocoa/70">Product Form</span>
                  <select 
                    value={selectedForm} 
                    onChange={(e) => setSelectedForm(e.target.value)}
                    className="w-full p-2 border border-spice-cocoa/20 rounded text-xs bg-white"
                  >
                    <option value="All">All Forms</option>
                    <option value="Whole">Whole</option>
                    <option value="Ground">Ground Powder</option>
                    <option value="Crushed">Crushed / Splits</option>
                    <option value="Blended">Blended Seasoning</option>
                  </select>
                </div>

                {/* Processing Filters */}
                <div className="space-y-2">
                  <span className="block text-[10px] uppercase font-bold text-spice-cocoa/70">Processing Grade</span>
                  <select 
                    value={selectedProcess} 
                    onChange={(e) => setSelectedProcess(e.target.value)}
                    className="w-full p-2 border border-spice-cocoa/20 rounded text-xs bg-white"
                  >
                    <option value="All">All Processing</option>
                    <option value="Standard">Standard Cleaned</option>
                    <option value="Sortex">Sortex Cleaned</option>
                    <option value="Steam">Steam Sterilised</option>
                    <option value="Organic">Organic Option</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Right Cards Catalog Grid (9 Columns) */}
            <div className="lg:col-span-9 space-y-6">
              
              <div className="flex justify-between items-center bg-white py-3 px-4 border border-spice-cocoa/10 rounded-lg text-xs">
                <span className="text-spice-cocoa/60 font-semibold">
                  Showing <strong className="text-spice-forest">{filteredProducts.length}</strong> items in Spice Catalog
                </span>
                <span className="text-spice-gold uppercase font-bold tracking-widest hidden sm:inline">Ahmedabad Cargo Terminal Ready</span>
              </div>

              {/* Grid of cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((p) => (
                  <div 
                    key={p.id}
                    className="bg-white border border-spice-cocoa/10 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                  >
                    {p.image && (
                      <div className="h-44 overflow-hidden bg-spice-cream border-b border-spice-cocoa/5">
                        <img 
                          src={p.image} 
                          alt={p.name} 
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-5 space-y-3">
                      <span className="text-[9px] uppercase font-bold text-spice-gold tracking-widest bg-spice-cream px-2 py-0.5 rounded">
                        {p.category}
                      </span>
                      <h2 className="font-serif text-base font-bold text-spice-cocoa">
                        {p.name}
                      </h2>
                      <p className="text-[10px] text-spice-cocoa/50 italic font-sans">{p.botanicalName}</p>
                      
                      <p className="text-xs text-spice-cocoa/70 line-clamp-3 leading-relaxed">
                        {p.description}
                      </p>

                      <div className="space-y-1.5 pt-2 text-[11px]">
                        <p className="font-semibold text-spice-forest">Forms Available:</p>
                        <div className="flex flex-wrap gap-1">
                          {p.forms.map((f, i) => (
                            <span key={i} className="bg-spice-cream/70 text-spice-cocoa/80 px-2 py-0.5 rounded text-[9px] font-medium">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-spice-cream/35 border-t border-spice-cocoa/5 flex items-center justify-between">
                      <Link 
                        to={`/products/${p.id}`} 
                        className="text-xs font-bold text-spice-forest hover:text-spice-saffron flex items-center"
                      >
                        <span>Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                      <Link 
                        to={`/contact?prefilled=${p.id}`}
                        className="bg-spice-saffron text-white p-2 rounded hover:bg-spice-saffron/90 transition-colors"
                        title="Request Specification Quote"
                      >
                        <ClipboardCheck className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}

                {filteredProducts.length === 0 && (
                  <div className="col-span-full bg-spice-cream/20 p-8 rounded text-center text-spice-cocoa/60 text-sm">
                    No spices matching the active filter criteria. Try resetting filters.
                  </div>
                )}
              </div>

              {/* Disclaimer inside page */}
              <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-4 rounded-lg flex items-start space-x-2 text-[10px] text-spice-cocoa/70 leading-relaxed italic mt-8">
                <ShieldAlert className="w-4 h-4 text-spice-saffron flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Information Notice:</strong> All product names, botanical specifications, moisture limits, and available configurations shown here are simulated placeholder values. They serve to illustrate B2B web catalog structures and should be updated with actual client metrics before deployment.
                </span>
              </div>

            </div>

          </div>

          {/* Structured B2B AEO content section for indexing */}
          <div className="mt-20 border-t border-spice-cocoa/10 pt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-spice-forest">
                What should buyers check before selecting a spice exporter?
              </h3>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                When sourcing bulk ingredients for food processing or retail packaging, procurement managers should verify elements beyond unit cost. Key metrics include moisture limits (typically under 9% for seed spices), pesticide residue levels compliant with target destination custom regulations, aflatoxin testing protocols (HPLC method), and the availability of validated microbiological pasteurisation (such as HTST steam sterilisation).
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-xl font-bold text-spice-forest">
                What is the difference between whole and ground spices?
              </h3>
              <p className="text-sm text-spice-cocoa/70 leading-relaxed">
                Whole spices represent cleaned, sorted agricultural commodities in their raw seed, pod, or finger format. They retain their volatile oil content for long periods and are preferred by grinders, extractors, and retail repackagers. Ground spices represent milled powders which offer immediate flavoring utility, but require high-barrier laminate packaging to prevent volatile oil degradation over time.
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Products;
