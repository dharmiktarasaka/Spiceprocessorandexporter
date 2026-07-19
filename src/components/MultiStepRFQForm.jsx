import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Send, Sparkles, AlertCircle, FileText, CheckCircle2, ShieldAlert } from 'lucide-react';

export const MultiStepRFQForm = ({ prefilledConfig = null }) => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    // Step 1: Buyer Details
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    country: '',
    website: '',
    buyerType: 'Importer',

    // Step 2: Product Requirement
    spiceProduct: prefilledConfig?.spice || 'cumin',
    productForm: prefilledConfig?.container === 'bag' ? 'Whole' : 'Ground',
    processingType: 'Steam Sterilised',
    quantity: '',
    quantityUnit: 'MT', // Metric Tons or kg
    orderFrequency: 'One-time',
    targetApplication: '',

    // Step 3: Packaging & Delivery
    packagingType: prefilledConfig?.container || 'Bulk Sack',
    privateLabelRequired: prefilledConfig ? 'Yes' : 'No',
    destCountry: '',
    destPort: '',
    timeline: '1-3 Months',
    sampleRequired: false,
    specRequired: true,
    message: '',
  });

  // Prefill hook update if configurator sends details
  React.useEffect(() => {
    if (prefilledConfig) {
      setFormData(prev => ({
        ...prev,
        spiceProduct: prefilledConfig.spice || 'cumin',
        packagingType: prefilledConfig.container || 'Bulk Sack',
        privateLabelRequired: 'Yes'
      }));
      setStep(2); // Jump direct to specifications
    }
  }, [prefilledConfig]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validateStep = () => {
    const stepErrors = {};
    if (step === 1) {
      if (!formData.fullName.trim()) stepErrors.fullName = "Contact name is required.";
      if (!formData.companyName.trim()) stepErrors.companyName = "Company name is required.";
      if (!formData.businessEmail.trim()) {
        stepErrors.businessEmail = "Corporate email is required.";
      } else if (!/\S+@\S+\.\S+/.test(formData.businessEmail)) {
        stepErrors.businessEmail = "Please enter a valid email address.";
      }
      if (!formData.phone.trim()) stepErrors.phone = "Phone or WhatsApp is required.";
      if (!formData.country.trim()) stepErrors.country = "Target business country is required.";
    } else if (step === 2) {
      if (!formData.quantity || Number(formData.quantity) <= 0) {
        stepErrors.quantity = "Please specify a positive quantity amount.";
      }
    } else if (step === 3) {
      if (!formData.destCountry.trim()) stepErrors.destCountry = "Destination country is required.";
      if (!formData.destPort.trim()) stepErrors.destPort = "Destination discharge port is required.";
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);

    // Simulate API connection latency
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      /*
        INTEGRATION HUBS (DEVELOPER NOTE):
        ==================================================
        This frontend component can be integrated with Zoho CRM, HubSpot, 
        Google Sheets, or a custom NodeJS server.
        
        Example fetch payload logic:

        fetch('https://api.yourdomain.com/v1/rfq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => {
          // Trigger email automation or Zoho CRM lead routing rules
        });
      */
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-spice-cocoa/10 rounded-xl shadow-xl overflow-hidden font-sans">
      
      {/* Top Banner indicating B2B scope */}
      <div className="bg-spice-cream px-6 py-3 border-b border-spice-cocoa/10 flex items-center justify-between text-xs">
        <span className="text-spice-forest font-bold uppercase tracking-wider flex items-center space-x-1.5">
          <FileText className="w-4 h-4 text-spice-saffron" />
          <span>B2B Commercial RFQ Builder</span>
        </span>
        <span className="text-spice-cocoa/50"> Ahmedabad Trade Desk</span>
      </div>

      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
          
          {/* Progress Steps Indicators */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-spice-cream -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-spice-saffron -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
            
            <div className="relative z-10 flex justify-between items-center text-xs">
              {[
                { s: 1, label: "Buyer Profile" },
                { s: 2, label: "Spice Details" },
                { s: 3, label: "Logistics Pack" }
              ].map((item) => (
                <div key={item.s} className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border transition-colors ${
                    step >= item.s 
                      ? 'bg-spice-forest text-white border-spice-forest' 
                      : 'bg-white text-spice-cocoa/40 border-spice-cream'
                  }`}>
                    {step > item.s ? <Check className="w-4 h-4" /> : item.s}
                  </div>
                  <span className={`mt-1.5 font-semibold hidden sm:inline ${step >= item.s ? 'text-spice-forest' : 'text-spice-cocoa/40'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Step Contents */}
          <div className="min-h-[250px] pt-4">
            <AnimatePresence mode="wait">
              
              {/* STEP 1: BUYER PROFILE DETAILS */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-lg font-bold text-spice-forest border-b border-spice-cocoa/5 pb-2">
                    Step 1: Company Profile & Credentials
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="fullName">
                        Contact Person Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.fullName ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. John Doe"
                      />
                      {errors.fullName && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="companyName">
                        Registered Company Name *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.companyName ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. Spice Imports Ltd"
                      />
                      {errors.companyName && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.companyName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="businessEmail">
                        Business Email Address *
                      </label>
                      <input
                        type="email"
                        id="businessEmail"
                        name="businessEmail"
                        value={formData.businessEmail}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.businessEmail ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. procurement@company.com"
                      />
                      {errors.businessEmail && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.businessEmail}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="phone">
                        Phone / WhatsApp Number (with Country Code) *
                      </label>
                      <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.phone ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. +971 50 123 4567"
                      />
                      {errors.phone && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="country">
                        Target Business Country *
                      </label>
                      <input
                        type="text"
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.country ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. United Arab Emirates"
                      />
                      {errors.country && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.country}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="buyerType">
                        Buyer Business Sector
                      </label>
                      <select
                        id="buyerType"
                        name="buyerType"
                        value={formData.buyerType}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white"
                      >
                        <option>Importer</option>
                        <option>Distributor</option>
                        <option>Wholesaler</option>
                        <option>Food Manufacturer</option>
                        <option>Retail Brand</option>
                        <option>Hospitality Supplier</option>
                        <option>Private-Label Brand</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="website">
                      Company Website (Optional)
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20"
                      placeholder="e.g. https://www.yourcompany.com"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 2: SPICE SPECIFICATION DETAILS */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-lg font-bold text-spice-forest border-b border-spice-cocoa/5 pb-2">
                    Step 2: Spice Specifications & Volume
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="spiceProduct">
                        Select Spice Item
                      </label>
                      <select
                        id="spiceProduct"
                        name="spiceProduct"
                        value={formData.spiceProduct}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white capitalize"
                      >
                        <option value="cumin">Cumin Seeds</option>
                        <option value="turmeric">Turmeric fingers</option>
                        <option value="chilli">Red Chilli (Whole/Powder)</option>
                        <option value="coriander">Coriander Seeds</option>
                        <option value="fennel">Fennel Seeds</option>
                        <option value="pepper">Black Pepper</option>
                        <option value="cardamom">Green Cardamom</option>
                        <option value="sesame">Sesame Seeds</option>
                        <option value="blend">Custom Blend / Masalas</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="productForm">
                        Spice Product Form
                      </label>
                      <select
                        id="productForm"
                        name="productForm"
                        value={formData.productForm}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white"
                      >
                        <option>Whole</option>
                        <option>Ground Powder</option>
                        <option>Crushed / Flakes</option>
                        <option>Blended Seasoning</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="processingType">
                        Required Processing Method
                      </label>
                      <select
                        id="processingType"
                        name="processingType"
                        value={formData.processingType}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white"
                      >
                        <option>Standard Machine Cleaned</option>
                        <option>Sortex Cleaned (99.5%+ Purity)</option>
                        <option>Steam Sterilised (Low Micro-load)</option>
                        <option>Organic Option</option>
                        <option>Custom Specification</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="orderFrequency">
                        Estimated Purchase Frequency
                      </label>
                      <select
                        id="orderFrequency"
                        name="orderFrequency"
                        value={formData.orderFrequency}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white"
                      >
                        <option>One-time Spot Order</option>
                        <option>Monthly Contract</option>
                        <option>Quarterly Sourcing</option>
                        <option>Annual Supply Agreement</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="quantity">
                        Target Order Quantity *
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.quantity ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. 15"
                      />
                      {errors.quantity && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.quantity}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="quantityUnit">
                        Unit
                      </label>
                      <select
                        id="quantityUnit"
                        name="quantityUnit"
                        value={formData.quantityUnit}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white font-bold"
                      >
                        <option value="MT">Metric Tons (MT)</option>
                        <option value="KG">Kilograms (KG)</option>
                        <option value="Containers">20ft FCL Container</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="targetApplication">
                      Final Food Product Application (Optional)
                    </label>
                    <input
                      type="text"
                      id="targetApplication"
                      name="targetApplication"
                      value={formData.targetApplication}
                      onChange={handleChange}
                      className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20"
                      placeholder="e.g. retail packs, ready soup powder mixes, meat curing rubs"
                    />
                  </div>
                </motion.div>
              )}

              {/* STEP 3: PACKAGING & LOGISTICS DETAILS */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-lg font-bold text-spice-forest border-b border-spice-cocoa/5 pb-2">
                    Step 3: Packaging & Port Logistics
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="packagingType">
                        Required Packing Format
                      </label>
                      <select
                        id="packagingType"
                        name="packagingType"
                        value={formData.packagingType}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white"
                      >
                        <option value="Bulk Sack">Bulk PP Sack (25kg/50kg)</option>
                        <option value="Jute Bag">Traditional Jute Bag</option>
                        <option value="Food-Grade Bag">Kraft Paper Bags with liners</option>
                        <option value="Carton">Bulk Carton Box</option>
                        <option value="Jar">Glass / PET Shaker Jar</option>
                        <option value="Pouch">Stand-up Pouch (Private Label)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="privateLabelRequired">
                        Do you require Private Label Branding?
                      </label>
                      <select
                        id="privateLabelRequired"
                        name="privateLabelRequired"
                        value={formData.privateLabelRequired}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white font-bold"
                      >
                        <option value="No">No, plain bulk supply needed</option>
                        <option value="Yes">Yes, custom retail branding requested</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="destCountry">
                        Destination Discharge Country *
                      </label>
                      <input
                        type="text"
                        id="destCountry"
                        name="destCountry"
                        value={formData.destCountry}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.destCountry ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. United Kingdom"
                      />
                      {errors.destCountry && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.destCountry}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="destPort">
                        Target Port of Discharge *
                      </label>
                      <input
                        type="text"
                        id="destPort"
                        name="destPort"
                        value={formData.destPort}
                        onChange={handleChange}
                        className={`w-full p-2.5 rounded border text-sm ${errors.destPort ? 'border-spice-chilli bg-spice-chilli/5' : 'border-spice-cocoa/20'}`}
                        placeholder="e.g. Port of Felixstowe"
                      />
                      {errors.destPort && <p className="text-spice-chilli text-xs mt-1 flex items-center"><AlertCircle className="w-3 h-3 mr-1" />{errors.destPort}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="timeline">
                        Delivery Urgency
                      </label>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20 bg-white"
                      >
                        <option>Immediate Spot</option>
                        <option>1-3 Months</option>
                        <option>3-6 Months</option>
                        <option>Next Harvest season</option>
                      </select>
                    </div>

                    <div className="md:col-span-2 flex flex-col justify-center space-y-3 bg-spice-cream/30 p-3 rounded border border-spice-cocoa/5">
                      <span className="block text-xs font-bold text-spice-forest uppercase tracking-wider mb-1">Pre-shipment Requests</span>
                      <div className="flex items-center space-x-6">
                        <label className="flex items-center space-x-2 text-xs font-bold text-spice-cocoa cursor-pointer">
                          <input
                            type="checkbox"
                            name="sampleRequired"
                            checked={formData.sampleRequired}
                            onChange={handleChange}
                            className="rounded text-spice-saffron focus:ring-spice-saffron w-4 h-4 border-spice-cocoa/30"
                          />
                          <span>Request Physical Sample (pre-shipment)</span>
                        </label>
                        <label className="flex items-center space-x-2 text-xs font-bold text-spice-cocoa cursor-pointer">
                          <input
                            type="checkbox"
                            name="specRequired"
                            checked={formData.specRequired}
                            onChange={handleChange}
                            className="rounded text-spice-saffron focus:ring-spice-saffron w-4 h-4 border-spice-cocoa/30"
                          />
                          <span>Send COA & Technical Spec Sheets</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-spice-cocoa/80 mb-1" htmlFor="message">
                      Additional Documentation or Quality Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="3"
                      className="w-full p-2.5 rounded border text-sm border-spice-cocoa/20"
                      placeholder="Specify required pesticide/aflatoxin levels, mesh sizes, specific ASTA color counts, or target shipping terms (FOB/CIF)."
                    ></textarea>
                  </div>

                  {/* Attachment Placeholder */}
                  <div className="border-2 border-dashed border-spice-cocoa/20 p-4 rounded-lg text-center hover:bg-spice-cream/20 transition-all cursor-pointer">
                    <span className="block text-xs font-bold text-spice-forest">Attach Technical Spec / RFP Documents (Optional)</span>
                    <span className="text-[10px] text-spice-cocoa/50 mt-1 block">Drag and drop PDF or DOCX file (Mock loader)</span>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Form Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-spice-cocoa/10">
            {step > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="flex items-center space-x-1.5 text-xs md:text-sm font-bold text-spice-cocoa hover:text-spice-forest focus:outline-none"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="bg-spice-forest hover:bg-spice-forest/90 text-white font-bold py-2.5 px-6 rounded text-xs md:text-sm shadow-md transition-all flex items-center space-x-1.5"
              >
                <span>Continue Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-spice-saffron hover:bg-spice-saffron/90 text-white font-bold py-3 px-8 rounded-lg text-xs md:text-sm shadow-md transition-all flex items-center space-x-1.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Syncing CRM Leads...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Spice RFQ</span>
                  </>
                )}
              </button>
            )}
          </div>

        </form>
      ) : (
        /* SUCCESS ANIMATION STATE */
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-8 text-center space-y-6"
        >
          <div className="w-16 h-16 bg-spice-forest text-spice-gold rounded-full flex items-center justify-center mx-auto shadow-lg animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          
          <div className="space-y-2">
            <h3 className="font-serif text-2xl font-bold text-spice-forest">
              RFQ Successfully Simulated!
            </h3>
            <p className="text-sm text-spice-cocoa/80 max-w-lg mx-auto leading-relaxed">
              Thank you, <strong className="text-spice-forest">{formData.fullName}</strong>. Your pre-qualification enquiry for <strong className="text-spice-forest">{formData.quantity} {formData.quantityUnit}</strong> of <strong className="text-spice-forest">{formData.spiceProduct}</strong> has been processed successfully.
            </p>
          </div>

          {/* Simulated CRM Payload data block */}
          <div className="bg-spice-cream/35 border border-spice-cocoa/10 p-5 rounded-lg text-left max-w-xl mx-auto space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-spice-cocoa/5 pb-2 text-[10px] uppercase font-bold text-spice-forest">
              <span>Sync Status: Ready for CRM Pipeline</span>
              <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">TICKET #{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
            
            <div className="grid grid-cols-2 gap-2 text-spice-cocoa/70">
              <p><strong>Customer:</strong> {formData.companyName} ({formData.country})</p>
              <p><strong>Buyer Sector:</strong> {formData.buyerType}</p>
              <p><strong>Email:</strong> {formData.businessEmail}</p>
              <p><strong>Logistics Destination:</strong> {formData.destPort}, {formData.destCountry}</p>
              <p><strong>Product Form:</strong> {formData.productForm} ({formData.processingType})</p>
              <p><strong>Documentation:</strong> {formData.specRequired ? 'COA Request' : ''} {formData.sampleRequired ? '+ Sample Request' : ''}</p>
            </div>

            <div className="pt-2 border-t border-spice-cocoa/5 text-[10px] text-spice-cocoa/50 italic flex items-center space-x-1.5">
              <ShieldAlert className="w-3.5 h-3.5 text-spice-saffron" />
              <span>In production, this submission routes instantly to HubSpot/Zoho via Webhooks or REST endpoints.</span>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={() => {
                setStep(1);
                setIsSuccess(false);
              }}
              className="border border-spice-cocoa/20 hover:border-spice-forest text-spice-cocoa py-2.5 px-6 rounded text-xs font-bold transition-all"
            >
              Submit Another Inquiry
            </button>
            <a
              href="https://tarasaka.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-spice-forest hover:bg-spice-forest/90 text-white py-2.5 px-6 rounded text-xs font-bold transition-all inline-flex items-center space-x-1"
            >
              <span>Build CRM Flow with Tarasaka</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </motion.div>
      )}

    </div>
  );
};

export default MultiStepRFQForm;
