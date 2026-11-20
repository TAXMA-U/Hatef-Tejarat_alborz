import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';
import IconButton from '@/components/common/Button';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-border-gray/50 shadow-soft">
      <div className="flex items-center justify-between px-4 py-3">
        <BrandLogo small />
        <div className="flex items-center gap-2">
          <IconButton
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="bg-white/90 hover:bg-white text-navy-deep"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </IconButton>
        </div>
      </div>
    </header>
  );
}
