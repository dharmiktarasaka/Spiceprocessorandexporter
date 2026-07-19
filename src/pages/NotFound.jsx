import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export const NotFound = () => {
  return (
    <>
      <SEOHead 
        title="Page Not Found | SaffronLeaf" 
        description="404 Error Page. The requested spice catalog page does not exist."
      />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 font-sans bg-spice-ivory">
        <div className="space-y-6 max-w-md">
          <div className="w-20 h-20 bg-spice-cream rounded-full flex items-center justify-center mx-auto border-2 border-spice-saffron animate-bounce">
            <HelpCircle className="w-12 h-12 text-spice-saffron" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-4xl font-bold text-spice-cocoa">404 - Specification Lost</h1>
            <p className="text-sm text-spice-cocoa/75 leading-relaxed">
              The page you are looking for has been moved or is outside our B2B spice categorization schema.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/" 
              className="bg-spice-forest hover:bg-spice-forest/90 text-white font-bold py-2.5 px-6 rounded text-xs transition-colors inline-flex items-center justify-center space-x-1"
            >
              <span>Return to Home</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/products" 
              className="border border-spice-cocoa/20 hover:border-spice-forest text-spice-cocoa py-2.5 px-6 rounded font-semibold text-xs transition-colors"
            >
              Browse Spice Catalog
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
