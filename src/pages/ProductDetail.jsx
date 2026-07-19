import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ClipboardCheck, FileSpreadsheet, Package, 
  MapPin, CheckCircle, Info, Send, AlertTriangle, ShieldCheck 
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { productsData } from '../data/productsData';

export const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  
  // Sample Form State
  const [sampleForm, setSampleForm] = useState({
    name: '',
    company: '',
    email: '',
    sampleSize: '100g',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setError('');
    } else {
      setError('Product not found in our grading database.');
    }
  }, [id]);

  const handleSampleChange = (e) => {
    const { name, value } = e.target;
    setSampleForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSampleSubmit = (e) => {
    e.preventDefault();
    if (!sampleForm.name.trim() || !sampleForm.company.trim() || !sampleForm.email.trim()) {
      alert("Please fill all required profile fields.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (error) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center space-y-4">
        <AlertTriangle className="w-12 h-12 text-spice-saffron" />
        <h2 className="font-serif text-2xl font-bold">{error}</h2>
        <Link to="/products" className="text-spice-forest font-bold hover:underline">&larr; Back to Spice Catalog</Link>
      </div>
    );
  }

  if (!product) return null;

  const detailSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "image": "https://saffronleaf.tarasaka.com/assets/spices.jpg",
    "description": product.description,
    "category": product.category,
    "brand": {
      "@type": "Brand",
      "name": "SaffronLeaf Spices"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "price": "Contact for bulk quotes"
    }
  };

  return (
    <>
      <SEOHead 
        title={`${product.name} Technical Specifications`} 
        description={`Read analytical details, moisture indices, purity parameters, available packagings, and applications for SaffronLeaf ${product.name}.`}
        keywords={product.seoKeywords}
        structuredData={detailSchema}
      />

      <Breadcrumbs customPaths={[
        { name: "Products", link: "/products" },
        { name: product.name, link: `/products/${product.id}` }
      ]} />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back control */}
          <div className="mb-6">
            <Link to="/products" className="inline-flex items-center space-x-1 text-xs font-bold text-spice-forest hover:text-spice-saffron transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Spice Catalog</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Main Details (7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Product header info */}
              <div className="space-y-3">
                <span className="bg-spice-forest/10 text-spice-forest text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded inline-block">
                  {product.category}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-spice-cocoa">
                  {product.name}
                </h1>
                <p className="text-xs text-spice-cocoa/50 italic font-sans">{product.botanicalName}</p>
                <div className="w-16 h-0.5 bg-spice-saffron pt-0.5"></div>
              </div>

              {/* Product Image */}
              {product.image && (
                <div className="w-full h-80 overflow-hidden rounded-xl border border-spice-cocoa/10 shadow-md bg-spice-cream">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              )}

              {/* Analytical Specification Table */}
              <div className="space-y-4">
                <h3 className="font-serif text-lg font-bold text-spice-forest flex items-center space-x-1.5 border-b border-spice-cocoa/5 pb-2">
                  <FileSpreadsheet className="w-5 h-5 text-spice-saffron" />
                  <span>Technical Specifications Matrix</span>
                </h3>
                
                <div className="bg-white border border-spice-cocoa/10 rounded-lg overflow-hidden shadow-sm">
                  <table className="w-full text-left border-collapse text-xs md:text-sm">
                    <thead>
                      <tr className="bg-spice-cream/40 text-spice-cocoa border-b border-spice-cocoa/10 font-bold">
                        <th className="p-3">Specification Parameter</th>
                        <th className="p-3">Export Standard Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(product.specifications).map(([key, val]) => (
                        <tr key={key} className="border-b border-spice-cocoa/10 hover:bg-spice-cream/10">
                          <td className="p-3 font-semibold capitalize text-spice-forest">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </td>
                          <td className="p-3 text-spice-cocoa/80 font-bold">
                            {val}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-spice-cream/5 text-[10px] text-spice-cocoa/50">
                        <td className="p-3" colSpan="2">
                          * Tests conducted under ISO-compliant methods. Certified batch reports are dispatched inside shipping containers.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Descriptions & application details */}
              <div className="space-y-4 font-sans text-sm text-spice-cocoa/80 leading-relaxed">
                <h3 className="font-serif text-lg font-bold text-spice-forest border-b border-spice-cocoa/5 pb-2">
                  Product Overview & Botanical Quality
                </h3>
                <p>{product.longDescription}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  
                  {/* Sourcing & origin */}
                  <div className="bg-spice-cream/20 p-4 rounded border border-spice-cocoa/5 space-y-2">
                    <h4 className="font-bold text-xs uppercase text-spice-forest flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-spice-saffron" />
                      <span>Sourcing & Origin</span>
                    </h4>
                    <p className="text-xs text-spice-cocoa/70">{product.origin}</p>
                  </div>

                  {/* Applications */}
                  <div className="bg-spice-cream/20 p-4 rounded border border-spice-cocoa/5 space-y-2">
                    <h4 className="font-bold text-xs uppercase text-spice-forest flex items-center space-x-1">
                      <CheckCircle className="w-3.5 h-3.5 text-spice-saffron" />
                      <span>Commercial Applications</span>
                    </h4>
                    <p className="text-xs text-spice-cocoa/70">{product.applications}</p>
                  </div>

                </div>

                {/* Sizing & Packaging options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Processing options details */}
                  <div className="space-y-2.5">
                    <h4 className="font-bold text-xs uppercase text-spice-forest">Processing Capability</h4>
                    <ul className="text-xs space-y-1">
                      {product.processingOptions.map((o, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5 text-spice-cocoa/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-spice-saffron"></span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging Options */}
                  <div className="space-y-2.5">
                    <h4 className="font-bold text-xs uppercase text-spice-forest flex items-center space-x-1">
                      <Package className="w-4 h-4 text-spice-gold" />
                      <span>Standard Packaging Formats</span>
                    </h4>
                    <ul className="text-xs space-y-1">
                      {product.packagingOptions.map((o, idx) => (
                        <li key={idx} className="flex items-center space-x-1.5 text-spice-cocoa/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-spice-saffron"></span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>

            </div>

            {/* Right B2B Sample Request Desk (5 Columns) */}
            <div className="lg:col-span-5">
              
              <div className="bg-white border border-spice-cocoa/10 rounded-xl shadow-lg p-6 space-y-5 sticky top-24">
                <div className="border-b border-spice-cocoa/5 pb-4">
                  <h3 className="font-serif text-lg font-bold text-spice-forest">
                    Request Pre-Shipment Sample
                  </h3>
                  <p className="text-xs text-spice-cocoa/50 mt-1">
                    Pre-shipment spice samples are dispatched internationally via DHL or FedEx for laboratory inspection.
                  </p>
                </div>

                {!isSuccess ? (
                  <form onSubmit={handleSampleSubmit} className="space-y-3">
                    <div>
                      <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">
                        Procurement Contact Name *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        value={sampleForm.name}
                        onChange={handleSampleChange}
                        className="w-full p-2 border border-spice-cocoa/20 rounded text-xs" 
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">
                        Registered Company *
                      </label>
                      <input 
                        type="text" 
                        name="company"
                        required
                        value={sampleForm.company}
                        onChange={handleSampleChange}
                        className="w-full p-2 border border-spice-cocoa/20 rounded text-xs" 
                        placeholder="e.g. London Spice Ltd"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">
                        Corporate Email *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={sampleForm.email}
                        onChange={handleSampleChange}
                        className="w-full p-2 border border-spice-cocoa/20 rounded text-xs" 
                        placeholder="procurement@londonspice.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">
                        Target Sample Quantity
                      </label>
                      <select 
                        name="sampleSize"
                        value={sampleForm.sampleSize}
                        onChange={handleSampleChange}
                        className="w-full p-2 border border-spice-cocoa/20 rounded text-xs bg-white"
                      >
                        <option value="50g">50g Sealed foil</option>
                        <option value="100g">100g Sealed foil</option>
                        <option value="250g">250g Glass Jar sample</option>
                        <option value="Custom">Custom request (State in notes)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold text-spice-cocoa/70 mb-1">
                        Shipment Address & Target Specs Notes
                      </label>
                      <textarea 
                        name="notes"
                        rows="3"
                        value={sampleForm.notes}
                        onChange={handleSampleChange}
                        className="w-full p-2 border border-spice-cocoa/20 rounded text-xs" 
                        placeholder="Include target shipping address, target courier account numbers (if available), or special grading requirements."
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold p-3 rounded-lg text-xs flex items-center justify-center space-x-1.5 transition-colors disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Preparing Dispatch Log...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Sample Request</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <div className="p-4 bg-spice-cream/30 border border-spice-cocoa/10 rounded-lg text-center space-y-4">
                    <div className="w-10 h-10 bg-spice-forest text-spice-gold rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-spice-forest">Sample Request Simulated!</h4>
                      <p className="text-xs text-spice-cocoa/70 leading-relaxed">
                        Enquiry logged under reference <strong className="text-spice-forest">#SMPL{Math.floor(1000 + Math.random() * 9000)}</strong>. Our trade desk will evaluate company credentials and initiate courier dispatch validation.
                      </p>
                    </div>
                    <button 
                      onClick={() => setIsSuccess(false)}
                      className="text-xs font-bold text-spice-saffron hover:underline"
                    >
                      Submit another sample request
                    </button>
                  </div>
                )}

                <div className="pt-2 border-t border-spice-cocoa/5 text-center">
                  <Link 
                    to={`/contact?prefilled=${product.id}`}
                    className="text-xs font-bold text-spice-forest hover:text-spice-saffron flex items-center justify-center space-x-1"
                  >
                    <span>Need Bulk Metric Tonnage Quote? &rarr;</span>
                  </Link>
                </div>
              </div>

            </div>

          </div>

          {/* Fictional notice banner */}
          <div className="mt-12 bg-spice-cream/35 border border-spice-cocoa/10 p-5 rounded-lg text-xs text-spice-cocoa/70 flex items-start space-x-2 leading-relaxed">
            <Info className="w-4 h-4 text-spice-saffron flex-shrink-0 mt-0.5" />
            <div>
              <strong>Technical Spec Notice:</strong> Analytical thresholds (moisture index, purity, curcumin levels, ASTA values) shown on SaffronLeaf are intended strictly for showcase demo purposes. Real export documentation must carry accredited laboratory clearances before ship dispatch.
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ProductDetail;
