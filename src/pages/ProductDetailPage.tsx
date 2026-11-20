import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import type { ProductDetail, ProductVariant } from '@/data/contentBlocks';
import BlockRenderer from '@/components/product/BlockRenderer';
import VariantSelector from '@/components/product/VariantSelector';
import Lightbox from '@/components/common/Lightbox';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Reveal } from '@/components/common/Reveal';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | undefined>(undefined);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const productDetail = slug ? getProductBySlug(slug) : undefined;

  useEffect(() => {
    let lastScrollY = 0;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 200) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVariantSelect = (variant: ProductVariant) => {
    setSelectedVariant(variant);
  };

  if (!productDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-navy-deep mb-4">Product Not Found</h1>
          <Link to="/products" className="btn-primary">Back to Catalog</Link>
        </div>
      </div>
    );
  }

  const handleInquire = () => {
    navigate('/contact', { state: { product: productDetail.name, variant: selectedVariant?.name } });
  };

  const sortedBlocks = [...productDetail.contentBlocks]
    .filter((b) => b.visibility !== false)
    .sort((a, b) => a.order - b.order);

  const highlightsBlock = sortedBlocks.find((b) => b.type === 'highlights');
  const highlightItems = highlightsBlock
    ? (highlightsBlock.content as { items: { title: string; description: string }[] }).items
    : [];

  const mainBlocks = sortedBlocks.filter((b) => b.type !== 'highlights');

  const quickFacts = [
    { label: 'Availability', value: productDetail.inStock ? 'In Stock' : 'Made to Order' },
    { label: 'Material', value: productDetail.materialFamily },
    { label: 'Type', value: productDetail.productType },
    ...(productDetail.brandOrOrigin ? [{ label: 'Brand / Origin', value: productDetail.brandOrOrigin }] : []),
    ...(productDetail.manufacturer ? [{ label: 'Manufacturer', value: productDetail.manufacturer }] : []),
    ...(productDetail.countryOfOrigin ? [{ label: 'Country', value: productDetail.countryOfOrigin }] : []),
  ];

  const validQuickFacts = quickFacts.filter((f) => f.value);

  return (
    <div className="relative min-h-screen">
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[160px] md:h-[180px]">
          <img
            src={productDetail.heroImage}
            alt={productDetail.name}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-darkest via-transparent to-transparent" />
          <div className="relative container h-full flex items-end pb-20 md:pb-24 lg:pb-32">
            <Breadcrumbs
              variant="dark"
              items={[
                { label: 'Home', to: '/' },
                { label: 'Products', to: '/products' },
                ...productDetail.categoryPath.map((cat, i) => ({
                  label: cat,
                  to: i < productDetail.categoryPath.length - 1 ? `/category/${cat.toLowerCase().replace(/\s+/g, '-')}` : undefined,
                })),
              ]}
            />
            <Reveal variant="fade-up" delay={100} duration={800}>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-medium mt-2 mb-2">
                {productDetail.name}
              </h1>
              <p className="text-white/70 text-sm md:text-base max-w-lg">
                {productDetail.shortDescription}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-4 md:py-6">
        <div className="container">
          <div className="flex justify-center">
            <div className="w-full max-w-[600px] aspect-square rounded-card overflow-hidden border border-border-blue bg-white shadow-sm">
              <img
                src={productDetail.heroImage}
                alt={productDetail.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-navy-deep text-white flex items-center justify-center shadow-lg hover:bg-navy-mid transition-all duration-300 animate-fade-in-up"
          aria-label="Back to top"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
      )}

      <section className="py-8 md:py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal variant="fade-up" delay={100} duration={800}>
                <div className="space-y-8">
                  {productDetail.variants && productDetail.variants.length > 0 && (
                    <VariantSelector
                      variants={productDetail.variants}
                      selectedVariant={selectedVariant}
                      onSelect={handleVariantSelect}
                    />
                  )}

                  {mainBlocks.length > 0 && (
                    <>
                      {mainBlocks.map((block) => (
                        <BlockRenderer key={block.id} block={block} />
                      ))}
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Reveal variant="fade-up" delay={150} duration={800}>
                <div className="space-y-6">
                  {highlightItems.length > 0 && (
                    <div className="card p-5 md:p-6">
                      <h3 className="flex items-center gap-2 text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-4">
                        <div className="w-1 h-4 bg-navy-deep rounded-full" />
                        Key Highlights
                      </h3>
                      <div className="space-y-3">
                        {highlightItems.map((item) => (
                          <div key={item.title} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-full bg-navy-deep flex items-center justify-center shrink-0 mt-0.5">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            </div>
                            <div>
                              <h4 className="text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">{item.title}</h4>
                              <p className="text-[11px] text-slate-gray mt-0.5 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="card p-5 md:p-6">
                    <h3 className="flex items-center gap-2 text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-4">
                      <div className="w-1 h-4 bg-navy-deep rounded-full" />
                      Availability
                    </h3>
                    <div className="space-y-2.5">
                      {validQuickFacts.map((fact) => (
                        <div key={fact.label} className="flex justify-between items-start">
                          <span className="text-[10px] text-navy-sub uppercase tracking-wider">{fact.label}</span>
                          <span className="text-sm font-medium text-navy-deep leading-tight">{fact.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {productDetail.industryLabels && productDetail.industryLabels.length > 0 && (
                    <div className="card p-5 md:p-6">
                      <h3 className="flex items-center gap-2 text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                          <line x1="7" y1="7" x2="7.01" y2="7" />
                        </svg>
                        Industry Labels
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {productDetail.industryLabels.map((label) => (
                          <span key={label} className="px-2.5 py-1 bg-navy-light/30 text-navy-deep text-[10px] rounded font-medium">
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="navy-gradient rounded-[20px] p-6 md:p-8 text-center">
                    <h3 className="font-serif text-lg md:text-xl text-white mb-2">Need More Info?</h3>
                    <p className="text-white/60 text-xs md:text-sm mb-6">
                      Contact our team for technical specifications, quotes, and availability.
                    </p>
                    <button
                      onClick={handleInquire}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-navy-deep rounded-button text-sm font-semibold hover:bg-navy-light transition-colors"
                    >
                      Contact Us
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {getRelatedProducts(productDetail.relatedProductIds || []).length > 0 && (
        <section className="pb-12 md:pb-16">
          <div className="container">
            <Reveal variant="fade-up" delay={100} duration={700}>
              <div className="mb-8">
                <span className="text-[10px] font-sans font-semibold text-navy-deep uppercase tracking-wider mb-2 block">
                  R&D RECOMMENDATIONS
                </span>
                <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-2">Comparative Alloys</h2>
                <p className="text-slate-gray text-sm mb-4">
                  Explore similar grades and alloys within the same category for your engineering needs.
                </p>
              </div>
              <div className="relative">
                <div className="flex gap-3 md:gap-4 overflow-x-auto pb-4 snap-x touch-pan-x related-scroll">
                  {getRelatedProducts(productDetail.relatedProductIds || []).map((product) => (
                    <div key={product.id} className="snap-start shrink-0 w-[45vw] max-w-[200px] md:w-[240px] lg:w-[280px]">
                      <Link to={`/products/${product.slug}`} className="group block rounded-card border border-border-blue bg-white hover:border-navy-deep hover:shadow-md transition-all duration-300 overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img src={product.heroImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                        </div>
                        <div className="p-3">
                          <span className="inline-block px-2 py-0.5 bg-navy-light text-navy-deep text-[9px] font-semibold uppercase tracking-wider rounded-full mb-1.5">Related Grade</span>
                          <h3 className="font-serif text-sm md:text-base text-navy-deep group-hover:text-navy-mid transition-colors">{product.name}</h3>
                          <p className="text-slate-gray text-[10px] mt-0.5 line-clamp-1">{product.shortDescription}</p>
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-navy-deep mt-2">
                            VIEW SPECS
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                              <line x1="5" y1="12" x2="19" y2="12" />
                              <polyline points="12 5 19 12 12 19" />
                            </svg>
                          </span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Lightbox isOpen={lightboxOpen} image={productDetail.heroImage} alt={productDetail.name} onClose={() => setLightboxOpen(false)} />
    </div>
  );
}
