import { useState, useRef, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';
import { categories } from '@/data/categories';

const mainNavLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
];

export default function DesktopNavigation() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);

      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (productsRef.current && !productsRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setProductsOpen(false);
    setSearchOpen(false);
    setMobileNavOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:block sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b transition-transform duration-300 ${
          hidden ? '-translate-y-full' : 'translate-y-0'
        } ${scrolled ? 'border-border-blue shadow-md' : 'border-transparent shadow-sm'}`}
      >
        <div className="container flex items-center justify-between h-[72px]">
          {/* Logo */}
          <BrandLogo />

          {/* Navigation */}
          <nav className="flex items-center gap-0.5">
            {/* Home - Always first */}
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-button transition-colors hover:text-navy-deep ${location.pathname === '/' ? 'text-navy-deep' : 'text-navy-sub'}`}
            >
              Home
            </Link>

            {/* Categories Dropdown - Right of Home */}
            <div className="relative" ref={productsRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-button transition-colors hover:text-navy-deep ${
                  productsOpen || location.pathname.startsWith('/products') || location.pathname.startsWith('/category')
                    ? 'text-navy-deep'
                    : 'text-navy-sub'
                }`}
              >
                Categories
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {productsOpen && (
                <div className="absolute left-0 mt-2 w-80 max-h-[70vh] overflow-y-auto bg-white border border-border-blue rounded-panel shadow-lg py-2 z-50 animate-fade-in-up">
                  <div className="px-4 py-2 border-b border-border-blue">
                    <span className="text-[10px] font-semibold text-navy-sub uppercase tracking-wider">Browse Categories</span>
                  </div>
                  <CategoryTreeDropdown />
                </div>
              )}
            </div>

            {/* Other nav links */}
            {mainNavLinks.filter(l => l.to !== '/').map((link) => (
              <Link key={link.label} to={link.to} className={`px-3 py-2 text-sm font-medium rounded-button transition-colors hover:text-navy-deep ${location.pathname === link.to ? 'text-navy-deep' : 'text-navy-sub'}`}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative" ref={searchRef}>
              <button onClick={() => setSearchOpen(!searchOpen)} className="w-9 h-9 rounded-button flex items-center justify-center text-navy-sub hover:bg-navy-light hover:text-navy-deep transition-colors" aria-label="Search">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              </button>
              {searchOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-border-blue rounded-panel shadow-lg p-4 z-50 animate-fade-in-up">
                  <form onSubmit={(e) => { e.preventDefault(); setSearchOpen(false); }}>
                    <div className="relative">
                      <input type="text" placeholder="Search products..." className="w-full px-4 py-2.5 pr-10 bg-white border border-border-blue rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent" autoFocus />
                      <button type="submit" className="absolute right-2 top-2 w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center hover:bg-border-blue text-navy-deep transition-colors">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            {/* User / Login */}
            <Link to="/login" className="w-9 h-9 rounded-button flex items-center justify-center text-navy-sub hover:bg-navy-light hover:text-navy-deep transition-colors" aria-label="User Account">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
            </Link>

            {/* Inquiry Button */}
            <Link to="/contact" className="btn-primary ml-2">
              Inquiry
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <header className={`md:hidden sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b transition-transform duration-300 ${hidden ? '-translate-y-full' : 'translate-y-0'} ${scrolled ? 'border-border-blue shadow-md' : 'border-transparent shadow-sm'}`}>
        <div className="container flex items-center justify-between h-[64px]">
          <BrandLogo small />
          <button onClick={() => setMobileNavOpen(!mobileNavOpen)} className="w-10 h-10 rounded-button flex items-center justify-center text-navy-deep hover:bg-navy-light transition-colors" aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileNavOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 md:hidden" onClick={() => setMobileNavOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl z-50 md:hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border-blue">
              <BrandLogo small />
              <button onClick={() => setMobileNavOpen(false)} className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center hover:bg-border-blue text-navy-deep transition-colors" aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-[calc(100%-72px)]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-5 bg-navy-deep rounded-full" />
                <span className="text-navy-deep font-sans text-xs font-semibold tracking-widest uppercase">MENU</span>
              </div>
              <nav className="space-y-1 mb-6">
                <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-navy-sub hover:bg-navy-light hover:text-navy-deep transition-colors" onClick={() => setMobileNavOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  Home
                </Link>
                <Link to="/products" className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-navy-sub hover:bg-navy-light hover:text-navy-deep transition-colors" onClick={() => setMobileNavOpen(false)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
                  Products
                </Link>
                {[
                  { label: 'About Us', to: '/about' },
                  { label: 'Contact Us', to: '/contact' },
                ].map((link) => (
                  <Link key={link.label} to={link.to} className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-navy-sub hover:bg-navy-light hover:text-navy-deep transition-colors" onClick={() => setMobileNavOpen(false)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="border-t border-border-blue pt-5 mb-5">
                <span className="text-navy-sub font-sans text-[10px] font-semibold tracking-widest uppercase block mb-3">Categories</span>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Link key={cat.id} to={`/category/${cat.slug}`} className="flex items-center justify-between px-3 py-2 text-sm text-navy-sub hover:bg-navy-light hover:text-navy-deep rounded-lg transition-colors" onClick={() => setMobileNavOpen(false)}>
                      {cat.name}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/contact" className="btn-primary w-full" onClick={() => setMobileNavOpen(false)}>
                Inquiry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

function CategoryTreeDropdown() {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="py-1">
      {categories.map((cat) => {
        const hasChildren = cat.children && cat.children.length > 0;
        const isExpanded = expanded.has(cat.id);
        return (
          <div key={cat.id}>
            <div className="flex items-center">
              <Link
                to={`/products?category=${cat.slug}`}
                className="flex-1 px-4 py-2.5 text-sm text-slate-gray hover:bg-navy-light hover:text-navy-deep transition-colors"
              >
                {cat.name}
              </Link>
              {hasChildren && (
                <button
                  onClick={() => toggle(cat.id)}
                  className="px-2 py-2 text-navy-sub hover:text-navy-deep transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}>
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
              )}
            </div>
            {hasChildren && isExpanded && (
              <div className="ml-4 border-l border-border-blue">
                {cat.children!.map((child) => {
                  const hasSubChildren = child.children && child.children.length > 0;
                  const isSubExpanded = expanded.has(child.id);
                  return (
                    <div key={child.id}>
                      <div className="flex items-center">
                        <Link
                          to={`/products?category=${cat.slug}&sub=${child.slug}`}
                          className="flex-1 px-4 py-2 text-xs text-slate-gray hover:bg-navy-light hover:text-navy-deep transition-colors"
                        >
                          {child.name}
                        </Link>
                        {hasSubChildren && (
                          <button
                            onClick={() => toggle(child.id)}
                            className="px-2 py-1.5 text-navy-sub hover:text-navy-deep transition-colors"
                          >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${isSubExpanded ? 'rotate-180' : ''}`}>
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </button>
                        )}
                      </div>
                      {hasSubChildren && isSubExpanded && (
                        <div className="ml-4 border-l border-border-blue">
                          {child.children!.map((subChild) => (
                            <Link
                              key={subChild.id}
                              to={`/products?category=${cat.slug}&sub=${child.slug}&subsub=${subChild.slug}`}
                              className="block px-4 py-1.5 text-[11px] text-slate-gray hover:bg-navy-light hover:text-navy-deep transition-colors"
                            >
                              {subChild.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}