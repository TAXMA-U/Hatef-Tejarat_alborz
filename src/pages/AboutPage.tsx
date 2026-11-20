import { Link } from 'react-router-dom';
import SectionBadge from '@/components/common/SectionBadge';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { siteContent } from '@/data/siteContent';

const aboutStats = [
    { value: '2,500', unit: 'Tons', label: 'Shipped' },
    { value: '150+', unit: '', label: 'Active Clients' },
    { value: '15', unit: '', label: 'Countries Served' },
    { value: '99%', unit: '', label: 'On-Time Delivery' },
  ];

const values = [
  {
    icon: '🎯',
    title: 'Precision Quality',
    description: 'Every product is verified with chemical analysis and mill test certificates to ensure absolute compositional integrity.',
  },
  {
    icon: '🤝',
    title: 'Trusted Partnerships',
    description: 'We maintain long-term relationships with European and Asian mills, ensuring competitive pricing and reliable supply.',
  },
  {
    icon: '🌐',
    title: 'Global Reach',
    description: 'Serving 15+ countries with on-time delivery and professional logistics support across all continents.',
  },
  {
    icon: '📋',
    title: 'Certified Standards',
    description: 'ISO 9001, ASTM, EN, and DIN certified products with full documentation and traceability.',
  },
  {
    icon: '🚛',
    title: 'Reliable Logistics',
    description: 'Specialized warehousing and efficient supply chain management for industrial steel products.',
  },
  {
    icon: '🔬',
    title: 'Technical Expertise',
    description: 'Deep metallurgical knowledge and technical support for complex engineering applications.',
  },
];

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] md:h-[240px]">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-factory.jpg`}
            alt="Steel factory"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/85 to-navy-darkest/30" />
          <div className="relative container h-full flex items-center">
            <div>
              <Breadcrumbs
                items={[
                  { label: 'Home', to: '/' },
                  { label: 'About Us', to: undefined },
                ]}
              />
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium mt-2.5">
                About Hatef Tejarat Alborz
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] rounded-card overflow-hidden border border-border-blue">
                <img
                  src={`${import.meta.env.BASE_URL}images/hero-factory.jpg`}
                  alt="Steel factory operations"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <SectionBadge className="mb-3">ABOUT US</SectionBadge>
              <h2 className="font-serif text-3xl md:text-4xl text-navy-deep mb-4">
                Leading Steel & Alloy Supplier
              </h2>
              <p className="text-slate-gray text-sm md:text-base leading-relaxed mb-4">
                {siteContent.brand.description}
              </p>
              <p className="text-slate-gray text-sm leading-relaxed mb-6">
                We are located in Tehran Province, Shemiranat County, Central District, Tajrish City, Hekmat, Dr. Ali Shariati Street, Shahid Mohammad Taghi Rafat Street, No. 7, 5th Floor, Northern Unit. Our goal is to offer the best trading services and products to our valued customers. Relying on the experience and expertise of our team, we have achieved a special position in the metals market and are always striving to innovate and continuously improve to satisfy our customers.
              </p>
              <p className="text-slate-gray text-sm leading-relaxed mb-6">
                Our team consists of specialists and experienced individuals in various fields of commerce who are dedicated to providing the best services to our customers. Each member of our team possesses unique knowledge and skills in the field of metals, and through collaboration and coordination, we aim to achieve the common goals of the company. We believe in team values and cooperation, and we are always striving to create a dynamic and friendly environment to achieve the best results.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Import & Export', 'Distribution', 'Quality Assurance', 'Global Supply'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-navy-light text-navy-deep text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            {aboutStats.map((stat, i) => (
              <div
                key={i}
                className={`flex flex-col items-center text-center py-4 ${i > 0 ? 'md:border-l md:border-border-blue' : ''}`}
              >
                <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                    {i === 0 && <><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></>}
                    {i === 1 && <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                    {i === 2 && <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>}
                    {i === 3 && <><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></>}
                  </svg>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-2xl md:text-3xl font-semibold text-navy-deep">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-xs text-navy-sub">{stat.unit}</span>
                  )}
                </div>
                <span className="text-[10px] text-navy-sub uppercase tracking-wider mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            <div className="card p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-3">
                Our Mission
              </h2>
              <p className="text-slate-gray text-sm leading-relaxed">
                To provide high-quality steel and alloy products with precision engineering, competitive pricing, and reliable global supply chain solutions for industrial clients worldwide.
              </p>
            </div>
            <div className="card p-6 md:p-8">
              <div className="w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-3">
                Our Vision
              </h2>
              <p className="text-slate-gray text-sm leading-relaxed">
                To become the most trusted and preferred steel and alloy supplier in the Middle East and beyond, recognized for quality, reliability, and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="container">
          <div className="text-center mb-10">
            <SectionBadge className="mb-3">OUR VALUES</SectionBadge>
            <h2 className="font-serif text-3xl md:text-4xl text-navy-deep mb-3">
              Why Choose Us
            </h2>
            <p className="text-slate-gray text-sm md:text-base max-w-2xl mx-auto">
              We combine technical expertise with reliable supply chain management to deliver exceptional value to our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="card p-5 md:p-6 card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-navy-light flex items-center justify-center text-xl mb-3">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg md:text-xl text-navy-deep mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-gray text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container">
          <div className="navy-gradient rounded-[20px] p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <svg className="w-full h-full" aria-hidden="true">
                <defs>
                  <pattern id="cta-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="0.5" fill="white" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dots)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-3">
                Ready to Partner With Us?
              </h2>
              <p className="text-white/60 text-sm md:text-base mb-6 max-w-lg mx-auto">
                Contact our team to discuss your steel and alloy requirements. We provide customized solutions for industrial applications.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-deep rounded-button text-sm font-semibold hover:bg-navy-light transition-colors"
              >
                Contact Our Team
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}