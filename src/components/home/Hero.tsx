import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '@/data/siteContent';

const HERO_IMAGES = [
  `${import.meta.env.BASE_URL}images/hero-factory.jpg`,
  `${import.meta.env.BASE_URL}images/catalog-banner.jpg`,
  `${import.meta.env.BASE_URL}images/Steel%20Mill%20Panorama_%20Coils%20and%20Crimson%20Heat.png`,
];

const INTERVAL_MS = 5000;

export default function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [contentRevealed, setContentRevealed] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setSlideIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, INTERVAL_MS);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    const t = window.setTimeout(() => setContentRevealed(true), 100);
    return () => window.clearTimeout(t);
  }, []);

  const stats = siteContent.stats;

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[640px] md:h-[520px] lg:h-[560px]">
        {/* Crossfade background slides with subtle Ken Burns scale */}
        <div className="absolute inset-0">
          {HERO_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt="Industrial steel materials"
              className={`absolute inset-0 w-full h-full object-cover hero-slide transition-opacity duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${i === slideIndex ? 'opacity-100' : 'opacity-0'}`}
              loading={i === slideIndex ? 'eager' : 'lazy'}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/85 to-navy-darkest/20" />

        <div className="relative container h-full flex items-center pb-48 md:pb-24">
          <div className="max-w-xl lg:max-w-lg">
            <div className={`mb-5 reveal fade-up ${contentRevealed ? 'reveal-visible' : ''} delay-100`}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-status" />
                <span className="text-[10px] md:text-xs font-semibold text-white tracking-wider uppercase">
                  {siteContent.hero.badge}
                </span>
              </div>
            </div>

            <h1
              className={`font-serif text-4xl md:text-5xl lg:text-[56px] font-medium leading-[1.1] text-white mb-4 reveal fade-up ${contentRevealed ? 'reveal-visible' : ''} delay-200`}
            >
              {siteContent.hero.titleLine1}<br />
              <em className="font-medium italic">{siteContent.hero.titleLine2}</em>
            </h1>

            <p
              className={`text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-md reveal fade-up ${contentRevealed ? 'reveal-visible' : ''} delay-300`}
            >
              {siteContent.hero.description}
            </p>

            <Link
              to="/products"
              className={`inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-button text-white text-sm font-medium hover:bg-white/10 hover:border-white/50 reveal fade-up ${contentRevealed ? 'reveal-visible' : ''} delay-450 group`}
            >
              {siteContent.hero.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
            </Link>
          </div>
        </div>

        {/* Stats cards at bottom of hero, staggered entrance */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="container">
            <div className="bg-white/95 backdrop-blur-sm rounded-t-[20px] px-4 md:px-8 py-3 md:py-4">
              <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-0">
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-center">
                    <div className={`reveal fade-up ${contentRevealed ? 'reveal-visible' : ''} delay-[250ms] flex items-center`}>
                      <StatItem value={stat.value} label={stat.label} />
                      {i < stats.length - 1 && <StatDivider />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2 z-10">
          <span className="text-[10px] text-white/40 uppercase tracking-widest [writing-mode:vertical-lr]">Scroll</span>
          <div className="w-px h-10 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-white/50" style={{ animation: 'scroll-indicator 2s ease-in-out infinite' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center text-center text-navy-deep">
      <span className="font-serif text-xl md:text-2xl lg:text-3xl font-semibold text-navy-deep">{value}</span>
      <span className="text-[9px] md:text-[10px] mt-0.5 uppercase tracking-wider text-navy-sub">{label}</span>
    </div>
  );
}

function StatDivider() {
  return <div className="hidden md:block w-px h-8 bg-border-blue/60 mx-1" />;
}
