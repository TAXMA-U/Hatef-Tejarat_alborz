import { useState, useEffect, useRef } from 'react';
import { useParams, useSearchParams, Link } from 'react-router-dom';
import { useProductFilters } from '@/hooks/useProductFilters';
import { products } from '@/data/products';
import { categories } from '@/data/categories';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import SectionBadge from '@/components/common/SectionBadge';
import ProductCardSkeleton from '@/components/common/ProductCardSkeleton';

type CatalogContext = {
  title: string;
  description: string;
  badge: string;
};

const catalogConfigs: Record<string, CatalogContext> = {
  '': { title: 'Product Catalog', description: 'Explore our complete range of steel and alloy products in an organized catalog format.', badge: 'PRODUCT CATALOG' },
  aluminum: { title: 'Aluminum Products', description: 'Lightweight, corrosion-resistant aluminum alloys for aerospace, automotive, and construction applications.', badge: 'ALUMINUM' },
  copper: { title: 'Copper Products', description: 'High-conductivity copper alloys for electrical and thermal applications.', badge: 'COPPER' },
  steel: { title: 'Steel Products', description: 'High-strength steel and stainless steel alloys for structural and industrial use.', badge: 'STEEL' },
  nickel: { title: 'Nickel Products', description: 'Corrosion-resistant nickel alloys for chemical and marine environments.', badge: 'NICKEL' },
  titanium: { title: 'Titanium Products', description: 'High-strength, lightweight titanium alloys for aerospace and medical applications.', badge: 'TITANIUM' },
  brass: { title: 'Brass Products', description: 'Durable brass alloys for plumbing, electrical, and decorative applications.', badge: 'BRASS' },
};

type AccordionProps = {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

function FilterAccordion({ title, icon, children, defaultOpen = true }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-border-blue last:border-b-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-3 text-left">
        <div className="flex items-center gap-2">
          {icon && <span className="text-navy-deep">{icon}</span>}
          <span className="text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">{title}</span>
        </div>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`text-navy-sub transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[500px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>{children}</div>
    </div>
  );
}

function ExploreProductCard({ product }: { product: typeof products[number] }) {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const badge = product.materialFamily || product.productType || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setLoaded(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.disconnect(); };
  }, []);

  const sizeClass = 'aspect-[4/5]';

  return (
    <div ref={ref} className={`transition-all duration-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${sizeClass}`}>
      <Link to={`/products/${product.slug}`} className="group relative block w-full h-full rounded-card overflow-hidden bg-white">
        <div className="md:hidden">
          <div className="aspect-[4/3] relative overflow-hidden">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-border-blue animate-pulse" />
            )}
            <img
              src={product.heroImage}
              alt={product.name}
              className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute top-2 left-2 z-10">
              <span className="inline-block px-2 py-0.5 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full text-[8px] font-semibold text-navy-deep uppercase tracking-wider">{badge}</span>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-serif text-base font-medium text-navy-deep mb-1.5 line-clamp-1">{product.name}</h3>
            <p className="text-slate-gray text-xs line-clamp-2 mb-3">{product.shortDescription}</p>
            <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-border-blue rounded-button text-xs font-semibold text-navy-deep hover:bg-navy-light hover:border-navy-deep transition-colors">
              View Details
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

        <div className="hidden md:block relative aspect-[4/5]">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-border-blue animate-pulse" />
          )}
          <img
            src={product.heroImage}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04] transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-navy-darkest via-navy-darkest/60 to-transparent" />
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block px-2.5 py-0.5 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-[9px] font-semibold text-white uppercase tracking-wider">{badge}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end text-white">
            <h3 className="font-serif text-white text-base md:text-lg font-medium leading-tight mb-2">{product.name}</h3>
            <p className="text-white/80 text-xs md:text-sm line-clamp-2 mb-4">{product.shortDescription}</p>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-navy-deep transition-all duration-300">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-navy-deep group-hover:translate-x-0.5 transition-all duration-300">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

function ProductListCard({ product }: { product: typeof products[number] }) {
  const badge = product.materialFamily || product.productType || '';
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Link to={`/products/${product.slug}`} className="group flex items-center gap-4 p-3 md:p-4 rounded-card border border-border-blue bg-white hover:border-navy-deep hover:shadow-md transition-all duration-300">
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-border-blue animate-pulse rounded-lg" />
        )}
        <img src={product.heroImage} alt={product.name} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} loading="lazy" onLoad={() => setImageLoaded(true)} />
      </div>
      <div className="flex-1 min-w-0">
        <span className="inline-block px-2 py-0.5 bg-navy-light text-navy-deep text-[9px] font-semibold uppercase tracking-wider rounded-full mb-1.5">{badge}</span>
        <h3 className="font-serif text-base md:text-lg text-navy-deep font-medium group-hover:text-navy-mid transition-colors">{product.name}</h3>
        <p className="text-slate-gray text-xs md:text-sm line-clamp-1 mt-0.5">{product.shortDescription}</p>
        <div className="flex items-center gap-3 mt-1.5">
          <span className="text-[10px] text-navy-sub uppercase tracking-wider">{product.categoryPath.join(' > ')}</span>
        </div>
      </div>
      <div className="w-8 h-8 rounded-full bg-navy-light flex items-center justify-center shrink-0 group-hover:bg-navy-deep group-hover:text-white transition-all duration-300">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </Link>
  );
}

export default function ProductCatalogPage() {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const filterCategory = searchParams.get('category') || '';
  const filterSub = searchParams.get('sub') || '';
  const filterSubSub = searchParams.get('subsub') || '';
  const config = catalogConfigs[slug || ''] ?? catalogConfigs[''];
  const [filterOpen, setFilterOpen] = useState(false);

  const {
    search, setSearch,
    selectedMaterials, selectedWorkCategories, selectedCertifications,
    toggleMaterial, toggleWorkCategory, toggleCertification,
    sortBy, setSortBy,
    visibleProducts,
    filteredProducts,
    hasMore,
    isLoadingMore,
    hasActiveFilters,
    clearAllFilters,
    resultCount,
    loadMoreRef,
  } = useProductFilters(products, { category: filterCategory, sub: filterSub, subsub: filterSubSub, industry: '' });

  return (
    <div className="relative min-h-screen">
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] md:h-[220px] lg:h-[240px]">
          <img src={`${import.meta.env.BASE_URL}images/hero-factory.jpg`} alt="Steel factory with rolls" className="absolute inset-0 w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/85 to-navy-darkest/30" />
          <div className="relative container h-full flex items-center">
            <div className="max-w-lg">
              <Breadcrumbs variant="dark" items={[{ label: 'Home', to: '/' }, { label: 'Products', to: undefined }]} />
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium mt-2.5">{config.title}</h1>
              <p className="text-white/60 text-sm mt-1.5 max-w-md">{config.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-7">
            <aside className="hidden lg:block w-[260px] shrink-0">
              <div className="sticky top-[88px]">
                <FilterPanel
                  selectedMaterials={selectedMaterials}
                  selectedWorkCategories={selectedWorkCategories}
                  selectedCertifications={selectedCertifications}
                  toggleMaterial={toggleMaterial}
                  toggleWorkCategory={toggleWorkCategory}
                  toggleCertification={toggleCertification}
                  clearAllFilters={clearAllFilters}
                  hasActiveFilters={hasActiveFilters}
                  search={search}
                  setSearch={setSearch}
                />
              </div>
            </aside>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <p className="text-sm text-slate-gray">Showing <span className="font-semibold text-navy-deep">{resultCount}</span> Products</p>
                <div className="flex items-center gap-2">
                  <button onClick={() => setFilterOpen(true)} className="lg:hidden flex items-center gap-2 px-3 py-2 border border-border-blue rounded-button text-sm text-navy-deep hover:bg-navy-light transition-colors">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                      <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                      <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                      <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
                    </svg>
                    Filters
                  </button>
                  <div className="relative">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value as 'relevance' | 'name' | 'newest')} className="appearance-none pl-9 pr-8 py-2 border border-border-blue rounded-button text-sm text-navy-deep bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent">
                      <option value="relevance">Sort By: Relevance</option>
                      <option value="name">Sort By: Name</option>
                      <option value="newest">Sort By: Newest</option>
                    </select>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-sub pointer-events-none">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-navy-sub pointer-events-none">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="lg:hidden mb-5">
                <div className="relative">
                  <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full px-4 py-2.5 pr-10 bg-white border border-border-blue rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent" />
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-sub">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>

{visibleProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy-light flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy-sub">
                        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                      </svg>
                    </div>
                    <h3 className="font-serif text-xl text-navy-deep mb-2">No products found</h3>
                    <p className="text-slate-gray text-sm mb-4">Try adjusting your filters or search terms.</p>
                    <button onClick={clearAllFilters} className="btn-primary">Clear Filters</button>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {visibleProducts.map((product) => (
                        <ExploreProductCard key={product.id} product={product} />
                      ))}
                    </div>
                    {hasMore && !isLoadingMore && (
                      <div ref={loadMoreRef} className="my-8 flex justify-center">
                        <div className="flex items-center gap-2 animate-pulse">
                          <div className="w-3 h-3 rounded-full bg-border-blue"></div>
                          <div className="w-3 h-3 rounded-full bg-border-blue"></div>
                          <div className="w-3 h-3 rounded-full bg-border-blue"></div>
                          <span className="text-xs text-slate-gray">Loading more products...</span>
                        </div>
                      </div>
                    )}
                  </>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== MOBILE FILTER DRAWER ===== */}
      {filterOpen && (
        <>
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 lg:hidden" onClick={() => setFilterOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-[85%] max-w-[320px] bg-white shadow-xl z-50 lg:hidden overflow-y-auto">
            <div className="flex items-center justify-between px-5 py-4 border-b border-border-blue sticky top-0 bg-white z-10">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                  <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
                  <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
                  <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
                </svg>
                <span className="text-sm font-sans font-semibold text-navy-deep uppercase tracking-wider">Filter Products</span>
              </div>
              <button onClick={() => setFilterOpen(false)} className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center hover:bg-border-blue text-navy-deep transition-colors" aria-label="Close filters">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="p-5">
              <FilterPanel
                selectedMaterials={selectedMaterials}
                selectedWorkCategories={selectedWorkCategories}
                selectedCertifications={selectedCertifications}
                toggleMaterial={toggleMaterial}
                toggleWorkCategory={toggleWorkCategory}
                toggleCertification={toggleCertification}
                clearAllFilters={clearAllFilters}
                hasActiveFilters={hasActiveFilters}
                search={search}
                setSearch={setSearch}
              />
              <button onClick={() => setFilterOpen(false)} className="btn-primary w-full mt-4">Apply Filters</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function FilterPanel({
  selectedMaterials, selectedWorkCategories, selectedCertifications,
  toggleMaterial, toggleWorkCategory, toggleCertification,
  clearAllFilters, hasActiveFilters, search, setSearch,
}: {
  selectedMaterials: string[];
  selectedWorkCategories: string[];
  selectedCertifications: string[];
  toggleMaterial: (m: string) => void;
  toggleWorkCategory: (w: string) => void;
  toggleCertification: (c: string) => void;
  clearAllFilters: () => void;
  hasActiveFilters: boolean;
  search: string;
  setSearch: (s: string) => void;
}) {
  const workCategories = [
    { id: 'Aerospace Components', label: 'Aerospace Components', image: `${import.meta.env.BASE_URL}images/industries/a.png` },
    { id: 'Construction Materials', label: 'Construction Materials', image: `${import.meta.env.BASE_URL}images/industries/b.png` },
    { id: 'Electrical Infrastructure', label: 'Electrical Infrastructure', image: `${import.meta.env.BASE_URL}images/industries/c.png` },
    { id: 'Marine Equipment', label: 'Marine Equipment', image: `${import.meta.env.BASE_URL}images/industries/d.png` },
  ];
  const certifications = [
    { id: 'ISO 9001', label: 'ISO 9001' },
    { id: 'ASTM', label: 'ASTM' },
    { id: 'EN', label: 'EN' },
    { id: 'DIN', label: 'DIN' },
  ];

  return (
    <div className="card p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="flex items-center gap-2 text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
            <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
            <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
            <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
            <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
          </svg>
          Filter Products
        </h3>
        {hasActiveFilters && <button onClick={clearAllFilters} className="text-[10px] text-navy-mid hover:text-navy-deep hover:underline">Clear All</button>}
      </div>

      <div className="relative mb-3">
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products..." className="w-full px-3 py-2 pr-9 bg-white border border-border-blue rounded-button text-sm focus:outline-none focus:ring-2 focus:ring-navy-deep focus:border-transparent" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-sub">
          <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      <FilterAccordion title="Material Base" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>}>
        <div className="space-y-0.5">
          {categories.map((cat) => {
            const hasChildren = cat.children && cat.children.length > 0;
            const catCount = products.filter((p) => p.materialFamily.toLowerCase().includes(cat.name.toLowerCase()) || p.categoryPath.join(' ').toLowerCase().includes(cat.name.toLowerCase())).length;
            const isChecked = selectedMaterials.includes(cat.name);
            return (
              <div key={cat.id}>
                <div className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-navy-light/50 cursor-pointer group">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" checked={isChecked} onChange={() => toggleMaterial(cat.name)} className="w-3.5 h-3.5 rounded border-border-blue text-navy-deep focus:ring-2 focus:ring-navy-deep" />
                    <span className={`text-xs ${isChecked ? 'font-semibold text-navy-deep' : 'text-slate-gray group-hover:text-navy-deep'}`}>{cat.name}</span>
                  </div>
                  <span className="text-[9px] text-navy-sub bg-navy-light/50 px-1 py-0.5 rounded">{catCount}</span>
                </div>
                {hasChildren && (
                  <div className="ml-6 border-l border-border-blue">
                    {cat.children!.map((child) => {
                      const childCount = products.filter((p) => p.categoryPath.join(' ').toLowerCase().includes(child.name.toLowerCase())).length;
                      const isChildChecked = selectedMaterials.includes(child.name);
                      return (
                        <div key={child.id}>
                          <label className="flex items-center justify-between px-2 py-1 rounded hover:bg-navy-light/30 cursor-pointer group ml-1">
                            <div className="flex items-center gap-2">
                              <input type="checkbox" checked={isChildChecked} onChange={() => toggleMaterial(child.name)} className="w-3 h-3 rounded border-border-blue text-navy-deep focus:ring-2 focus:ring-navy-deep" />
                              <span className={`text-[11px] ${isChildChecked ? 'font-semibold text-navy-deep' : 'text-slate-gray group-hover:text-navy-deep'}`}>{child.name}</span>
                            </div>
                            <span className="text-[8px] text-navy-sub bg-navy-light/50 px-1 py-0.5 rounded">{childCount}</span>
                          </label>
                          {child.children && child.children.length > 0 && (
                            <div className="ml-4 border-l border-border-blue">
                              {child.children.map((subChild) => {
                                const subChildCount = products.filter((p) => p.categoryPath.join(' ').toLowerCase().includes(subChild.name.toLowerCase())).length;
                                const isSubChildChecked = selectedMaterials.includes(subChild.name);
                                return (
                                  <label key={subChild.id} className="flex items-center justify-between px-2 py-0.5 rounded hover:bg-navy-light/20 cursor-pointer ml-1">
                                    <div className="flex items-center gap-1.5">
                                      <input
                                        type="checkbox"
                                        checked={isSubChildChecked}
                                        onChange={() => toggleMaterial(subChild.name)}
                                        className="w-2.5 h-2.5 rounded border-border-blue text-navy-deep focus:ring-1 focus:ring-navy-deep"
                                      />
                                      <span className={`text-[10px] ${isSubChildChecked ? 'font-semibold text-navy-deep' : 'text-slate-gray'}`}>{subChild.name}</span>
                                    </div>
                                    <span className="text-[8px] text-navy-sub bg-navy-light/50 px-1 py-0.5 rounded">{subChildCount}</span>
                                  </label>
                                );
                              })}
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
      </FilterAccordion>

      <FilterAccordion title="Work Categories" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>} defaultOpen={false}>
        <div className="space-y-1.5">
          {workCategories.map((cat) => {
            const isChecked = selectedWorkCategories.includes(cat.id);
            return (
              <label key={cat.id} className={`flex items-center gap-2 p-1.5 rounded-lg border cursor-pointer ${isChecked ? 'border-navy-deep bg-navy-light/30' : 'border-border-blue hover:border-navy-sub'}`}>
                <input type="checkbox" checked={isChecked} onChange={() => toggleWorkCategory(cat.id)} className="w-3.5 h-3.5 rounded border-border-blue text-navy-deep focus:ring-2 focus:ring-navy-deep" />
                <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                  <img src={cat.image} alt={cat.label} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <span className={`text-[10px] ${isChecked ? 'font-semibold text-navy-deep' : 'text-slate-gray'}`}>{cat.label}</span>
              </label>
            );
          })}
        </div>
      </FilterAccordion>

      <FilterAccordion title="Chemical Certifications" icon={<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6l2 4H7l2-4z" /><path d="M7 7h10l1 14H6L7 7z" /><line x1="10" y1="11" x2="14" y2="11" /><line x1="10" y1="15" x2="14" y2="15" /></svg>} defaultOpen={false}>
        <div className="space-y-0.5">
          {certifications.map((cert) => {
            const isChecked = selectedCertifications.includes(cert.id);
            return (
              <label key={cert.id} className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-navy-light/50 cursor-pointer group">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={isChecked} onChange={() => toggleCertification(cert.id)} className="w-3.5 h-3.5 rounded border-border-blue text-navy-deep focus:ring-2 focus:ring-navy-deep" />
                  <span className={`text-xs ${isChecked ? 'font-semibold text-navy-deep' : 'text-slate-gray group-hover:text-navy-deep'}`}>{cert.label}</span>
                </div>
              </label>
            );
          })}
        </div>
      </FilterAccordion>

      <button className="btn-primary w-full mt-3 text-xs py-2">Apply Filters</button>
    </div>
  );
}