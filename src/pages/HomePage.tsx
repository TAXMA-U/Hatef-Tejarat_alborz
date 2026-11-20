import { Link } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback } from 'react';
import SectionBadge from '@/components/common/SectionBadge';
import Hero from '@/components/home/Hero';
import { Reveal } from '@/components/common/Reveal';
import { products, getProductsByCategory } from '@/data/products';
import type { Product } from '@/data/products';
import { siteContent } from '@/data/siteContent';

export default function HomePage() {
  const steelProducts = getProductsByCategory('steel').filter((p) => p.hasImage).slice(0, 6);
  const aluminumProducts = getProductsByCategory('aluminum').filter((p) => p.hasImage).slice(0, 4);
  const copperProducts = getProductsByCategory('copper').filter((p) => p.hasImage).slice(0, 3);

  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  return (
    <div className="relative min-h-screen">
      <Hero />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4 order-2 lg:order-1">
              <Reveal variant="fade-up" delay={100} duration={700}>
                <SectionBadge className="mb-3">{siteContent.steelVault.badge}</SectionBadge>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-[44px] text-navy-deep mb-4">{siteContent.steelVault.title}</h2>
                <p className="text-slate-gray text-sm md:text-base leading-relaxed mb-6">{siteContent.steelVault.description}</p>
                <Link to="/products" className="inline-flex items-center gap-2 text-navy-deep text-sm font-semibold hover:gap-3 transition-all duration-200">
                  {siteContent.steelVault.cta}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </Reveal>
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2">
              <Reveal variant="fade-up" delay={250} duration={700}>
                <div className="relative">
                  <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth" ref={scrollRef1}>
                    {steelProducts.map((product) => (
                      <div key={product.id} className="snap-start shrink-0 w-[280px] md:w-[360px]">
                        <ProductShowcaseCard product={product} />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end gap-2 mt-3">
                    <button
                      onClick={() => scrollRef1.current?.scrollBy({ left: -280, behavior: 'smooth' })}
                      className="w-8 h-8 rounded-full border border-border-blue flex items-center justify-center text-navy-deep hover:bg-navy-light transition-colors"
                      aria-label="Scroll left"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                      </svg>
                    </button>
                    <button
                      onClick={() => scrollRef1.current?.scrollBy({ left: 280, behavior: 'smooth' })}
                      className="w-8 h-8 rounded-full border border-border-blue flex items-center justify-center text-navy-deep hover:bg-navy-light transition-colors"
                      aria-label="Scroll right"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <Reveal variant="fade-up" delay={150} duration={700}>
            <div className="relative h-[220px] md:h-[240px] rounded-[20px] overflow-hidden">
              <img   src={`${import.meta.env.BASE_URL}images/catalog-banner.jpg`} alt="Steel rolls catalog banner" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/80 to-transparent" />
              <div className="relative h-full flex items-center px-6 md:px-10">
                <div>
                  <SectionBadge className="mb-3 bg-white/10 text-white border border-white/20">{siteContent.catalogPreview.badge}</SectionBadge>
                  <h2 className="font-serif text-2xl md:text-3xl text-white mb-2">{siteContent.catalogPreview.title}</h2>
                  <p className="text-white/60 text-sm max-w-md mb-4">{siteContent.catalogPreview.description}</p>
                  <Link to="/products" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-deep rounded-button text-sm font-semibold hover:bg-navy-light transition-colors">
                    View Catalog
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container">
          <Reveal variant="fade-up" delay={100} duration={700}>
            <div className="card px-4 md:px-8 py-6 md:py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
                {heroStats.map((stat, i) => (
                  <div key={i} className={`flex items-center justify-center gap-3 ${i > 0 ? 'md:border-l md:border-border-blue' : ''}`}>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                        {i === 0 && <><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>}
                        {i === 1 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                        {i === 2 && <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>}
                        {i === 3 && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                      </svg>
                    </div>
                    <StatItem {...stat} />
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <Reveal variant="fade-up" delay={100} duration={700}>
            <CategorySlider
              title="Steel Products"
              description="High-strength steel and stainless steel alloys for structural and industrial use."
              image={`${import.meta.env.BASE_URL}images/products/Steel_product.png`}
              badge="STEEL"
              productCount={steelProducts.length}
              viewAll="/category/steel"
            />
            <div className="relative mt-8">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth" ref={scrollRef2}>
                {steelProducts.map((product) => (
                  <div key={product.id} className="snap-start shrink-0 w-[280px] md:w-[360px]">
                    <ProductShowcaseCard product={product} />
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 mt-3">
                <button
                  onClick={() => scrollRef2.current?.scrollBy({ left: -280, behavior: 'smooth' })}
                  className="w-8 h-8 rounded-full border border-border-blue flex items-center justify-center text-navy-deep hover:bg-navy-light transition-colors"
                  aria-label="Scroll left"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={() => scrollRef2.current?.scrollBy({ left: 280, behavior: 'smooth' })}
                  className="w-8 h-8 rounded-full border border-border-blue flex items-center justify-center text-navy-deep hover:bg-navy-light transition-colors"
                  aria-label="Scroll right"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <Reveal variant="fade-up" delay={150} duration={700}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="lg:order-2">
                <div className="relative h-[300px] md:h-[400px] rounded-[20px] overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/catalog-banner.jpg`}
                    alt="About Hatef Tejarat Alborz"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/40 to-transparent" />
                </div>
              </div>
              <div className="lg:order-1">
                <SectionBadge className="mb-3">ABOUT US</SectionBadge>
                <h2 className="font-serif text-3xl md:text-4xl text-navy-deep mb-4">
                  Who We Are
                </h2>
                <p className="text-slate-gray text-sm md:text-base leading-relaxed mb-6">
                  {siteContent.brand.description}
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 mt-1 text-navy-deep">●</span>
                    <span className="text-slate-gray text-sm">Established September 11, 2023 — Registration No. 618179</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 mt-1 text-navy-deep">●</span>
                    <span className="text-slate-gray text-sm">Leading importer, exporter, and distributor of alloy steel, industrial sheets, and standard pipes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="shrink-0 mt-1 text-navy-deep">●</span>
                    <span className="text-slate-gray text-sm">Trusted supplier for construction, oil & gas, and automotive industries</span>
                  </div>
                </div>
                <Link to="/about" className="inline-flex items-center gap-2 text-navy-deep text-sm font-semibold hover:gap-3 transition-all duration-200 mt-4">
                  Learn More About Us
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <Reveal variant="fade-up" delay={200} duration={700}>
            <CategorySlider
              title="Aluminum Products"
              description="Lightweight, corrosion-resistant aluminum alloys for aerospace, automotive, and construction applications."
              image={`${import.meta.env.BASE_URL}images/products/Aluminumـproduct.png`}
              badge="ALUMINUM"
              productCount={aluminumProducts.length}
              viewAll="/category/aluminum"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-8">
              {aluminumProducts.map((product) => (
                <div key={product.id} className="snap-start shrink-0">
                  <ProductShowcaseCard key={product.id} product={product} />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

const heroStats = [
  { value: '2,500', unit: 'Tons', label: 'Shipped' },
  { value: '150', unit: '', label: 'Active Clients' },
  { value: '15', unit: '', label: 'Countries Served' },
  { value: '999+', unit: '', label: 'On-Time Delivery' },
];

function StatItem({ value, unit, label, dark = false }: { value: string; unit?: string; label: string; dark?: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center ${dark ? 'text-white' : 'text-navy-deep'}`}>
      <div className="flex items-baseline gap-1">
        <span className={`font-serif text-xl md:text-2xl lg:text-3xl font-semibold ${dark ? 'text-white' : 'text-navy-deep'}`}>{value}</span>
        {unit && <span className={`text-[10px] md:text-xs ${dark ? 'text-white/60' : 'text-navy-sub'}`}>{unit}</span>}
      </div>
      <span className={`text-[9px] md:text-[10px] mt-0.5 uppercase tracking-wider ${dark ? 'text-white/50' : 'text-navy-sub'}`}>{label}</span>
    </div>
  );
}

function StatDivider() {
  return <div className="hidden md:block w-px h-8 bg-border-blue/60 mx-1" />;
}

function CategorySlider({ title, description, image, badge, productCount, viewAll }: {
  title: string;
  description: string;
  image: string;
  badge: string;
  productCount: number;
  viewAll: string;
}) {
  return (
    <div className="relative rounded-[20px] overflow-hidden">
      <div className="h-[200px] md:h-[240px]">
        <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/80 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-center px-6 md:px-10">
        <div>
          <SectionBadge className="mb-2.5 bg-white/15 text-white border border-white/20">{badge}</SectionBadge>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-[36px] text-white mb-2">{title}</h2>
          <p className="text-white/70 text-xs md:text-sm max-w-md mb-3">{description}</p>
          <div className="flex items-center gap-4">
            <span className="text-[10px] text-white/50 uppercase tracking-wider">{productCount} Products</span>
            <Link to={viewAll} className="inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:gap-2.5 transition-all">
              View All
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductShowcaseCard({ product }: { product: Product }) {
  const badge = product.materialFamily || product.productType || '';
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <Link to={`/products/${product.slug}`} className="group relative block rounded-card overflow-hidden bg-white">
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
  );
}

function FadeInGrid({ products: items }: { products: Product[] }) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisibleItems((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    refs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    const timeout = setTimeout(() => {
      setVisibleItems(new Set(items.map((_, i) => i)));
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, [items.length]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 mt-8">
      {items.map((product, i) => (
        <div
          key={product.id}
          data-index={i}
          ref={(el) => { refs.current[i] = el; }}
          className={`transition-all duration-500 ${visibleItems.has(i) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <ProductShowcaseCard product={product} />
        </div>
      ))}
    </div>
  );
}