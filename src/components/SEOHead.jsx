import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  canonicalUrl = "", 
  ogType = "website",
  structuredData = null
}) => {
  const defaultTitle = "Spice Exporter From India | SaffronLeaf Spices & Exports";
  const defaultDesc = "Explore premium whole spices, ground powders, steam-sterilised products, and custom private-label solutions from SaffronLeaf Spices & Exports.";
  const displayTitle = title ? `${title} | SaffronLeaf` : defaultTitle;
  
  const keywordString = keywords.length > 0 
    ? keywords.join(', ') 
    : "spice exporter from India, spice processor and exporter, bulk spice supplier, Indian spice exporter, spice manufacturer in India";

  // Build canonical URL placeholder
  const activeUrl = canonicalUrl || window.location.href;

  return (
    <Helmet>
      {/* Title */}
      <title>{displayTitle}</title>
      
      {/* Meta tags */}
      <meta name="description" content={description || defaultDesc} />
      <meta name="keywords" content={keywordString} />
      <link rel="canonical" href={activeUrl} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph */}
      <meta property="og:title" content={displayTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={activeUrl} />
      <meta property="og:site_name" content="SaffronLeaf Spices & Exports" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={displayTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />

      {/* Theme color */}
      <meta name="theme-color" content="#173F35" />
      
      {/* Dynamic JSON-LD Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
