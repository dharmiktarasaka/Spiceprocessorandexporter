import React from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

export const TermsConditions = () => {
  return (
    <>
      <SEOHead 
        title="Terms and Conditions of Trade | SaffronLeaf" 
        description="Fictional commercial trade terms for the SaffronLeaf bulk spice export portal concept."
      />

      <Breadcrumbs />

      <div className="relative overflow-x-hidden font-sans pt-12 pb-20 max-w-3xl mx-auto">
        <div className="px-4 sm:px-6 space-y-6 text-sm text-spice-cocoa/80 leading-relaxed">
          
          <h1 className="font-serif text-3xl font-bold text-spice-forest text-center">Terms of Trade & Use</h1>
          <div className="w-12 h-0.5 bg-spice-saffron mx-auto"></div>
          
          <p className="italic text-xs text-center text-spice-cocoa/50">Last Updated: July 17, 2026</p>

          <p>
            Welcome to the commercial terms of trade demonstration. This document maps how international spice exporters structure contracts, payment terms, and delivery obligations. SaffronLeaf is a showcase concept designed by <strong>TARASAKA DIGITAL Solutions</strong>.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">1. Contract Pricing & Quotes</h3>
          <p>
            Any quotation metrics generated on this website are simulated approximations. They do not constitute a legal offer to sell spices or lock in container prices. Commodity values fluctuate daily based on APMC market updates, crop harvest yields, and maritime shipping fuel indexes.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">2. Payment & Financing Framework</h3>
          <p>
            In production B2B trading setups, standard payment terms require an Irrevocable Letter of Credit (L/C) at sight or a percentage advance via Telegraphic Transfer (T/T), with the balance cleared against shipping document copies.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">3. Quality Verification & Disputes</h3>
          <p>
            All container loads are inspected by pre-shipment surveyor desks (e.g. SGS/Geo-Chem) at Candla/Mundra ports. Any quality claims must be backed by laboratory tests conducted at target ports within 10 days of arrival.
          </p>

          <h3 className="font-serif text-lg font-bold text-spice-forest">4. Platform Copyright Notice</h3>
          <p>
            The custom illustrations, interactive CSS configurators, and B2B forms present on this showcase are copyrighted assets of TARASAKA. Re-use of these design modules requires commercial license agreements.
          </p>

        </div>
      </div>
    </>
  );
};

export default TermsConditions;
