import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export const Breadcrumbs = ({ customPaths = [] }) => {
  const location = useLocation();
  
  // Split path location names
  const pathnames = location.pathname.split('/').filter((x) => x);

  // If pathnames is empty and no customPaths provided, don't show
  if (pathnames.length === 0 && customPaths.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 md:px-8 bg-spice-sand/20 border-b border-spice-cocoa/5 font-sans">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-xs text-spice-cocoa/60">
        
        {/* Home Item */}
        <Link to="/" className="hover:text-spice-saffron flex items-center space-x-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Home</span>
        </Link>

        {/* Dynamic paths */}
        {customPaths.length > 0 ? (
          customPaths.map((path, idx) => {
            const isLast = idx === customPaths.length - 1;
            return (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3 h-3 text-spice-cocoa/40" />
                {isLast ? (
                  <span className="font-semibold text-spice-forest uppercase tracking-wider">{path.name}</span>
                ) : (
                  <Link to={path.link} className="hover:text-spice-saffron transition-colors uppercase tracking-wider">
                    {path.name}
                  </Link>
                )}
              </React.Fragment>
            );
          })
        ) : (
          pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = value.replace(/-/g, ' ');

            return (
              <React.Fragment key={to}>
                <ChevronRight className="w-3 h-3 text-spice-cocoa/40" />
                {isLast ? (
                  <span className="font-semibold text-spice-forest capitalize">{displayName}</span>
                ) : (
                  <Link to={to} className="hover:text-spice-saffron transition-colors capitalize">
                    {displayName}
                  </Link>
                )}
              </React.Fragment>
            );
          })
        )}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
