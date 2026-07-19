import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Global Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';


// Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import ProcessingQuality from './pages/ProcessingQuality';
import PrivateLabel from './pages/PrivateLabel';
import ExportMarkets from './pages/ExportMarkets';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Disclaimer from './pages/Disclaimer';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-spice-ivory text-spice-cocoa font-sans relative">
          
          {/* Custom B2B grain background texture overlay */}
          <div className="grain-overlay" />
          
          {/* Sticky navigation header */}
          <Header />

          {/* Page Routing container */}
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/processing" element={<ProcessingQuality />} />
              <Route path="/private-label" element={<PrivateLabel />} />
              <Route path="/exports" element={<ExportMarkets />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              
              {/* Fallback route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Universal Footer */}
          <Footer />

          {/* Floating Actions */}
          <WhatsAppButton />
          <ScrollToTop />

        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
