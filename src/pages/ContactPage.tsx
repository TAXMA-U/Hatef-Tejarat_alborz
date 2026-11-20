import { useState, useCallback, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import SectionBadge from '@/components/common/SectionBadge';
import { Reveal } from '@/components/common/Reveal';
import { siteContent } from '@/data/siteContent';

type FormState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  materialCategory: string;
  productGrade: string;
  requestType: string;
  quantity: string;
  quantityUnit: string;
  destination: string;
  incoterms: string;
  message: string;
  consent: boolean;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const MATERIAL_CATEGORIES = [
  'Copper',
  'Aluminum',
  'Iron & Steel',
] as const;

const PRODUCT_GRADES = [
  'Busbar',
  'Strip',
  'Wire',
  'Rod',
  'Bar',
  'Clamp',
  'Section',
  'Ingot',
  'Mesh',
  'Fencing',
  'Cable',
  'Sheet & Coil',
  'Pipe & Tube',
  'Rebar',
  'Other',
] as const;

const REQUEST_TYPES = [
  'Price Quotation',
  'Technical Specification',
  'Sample Request',
  'Bulk Order',
  'Custom Order',
  'Certification & Documentation',
  'General Inquiry',
] as const;

const QUANTITY_UNITS = ['Tons', 'Kilograms', 'Pieces', 'Meters', 'Rolls', 'Bundles'] as const;

const INCOTERMS = ['EXW', 'FCA', 'FOB', 'CFR', 'CIF', 'DAP', 'DDP'] as const;

const COUNTRIES = ['Iran', 'United Arab Emirates', 'Other'] as const;

const OFFICES = [
  {
    country: 'Iran',
    title: 'Head Office — Tehran',
    company: 'Hatef Tejarat Alborz',
    address: [
      'No 7, 5th Floor, Northern Unit',
      'Dr. Ali Shariati Street',
      'Shahid Mohammad Taghi Rafat Street',
      'Hekmat, Tajrish City',
      'Shemiranat County, Tehran Province, Iran',
    ],
    postalCode: '1917643133',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Tehran,+Shemiranat,+Tajrish,+Hekmat,+Dr.+Ali+Shariati+Street,+Iran',
    phones: ['+98 912 323 8106'],
    emails: ['trading@hateftejaratalborz.info', 'hatef.tejarat.alborz@gmail.com'],
  },
  {
    country: 'United Arab Emirates',
    title: 'UAE Office — Dubai',
    company: 'Hatef Tejarat Alborz',
    address: [
      'Dubai Silicon Oasis',
      'Dubai Digital Park',
      'Dubai, United Arab Emirates',
    ],
    postalCode: '',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=Dubai+Silicon+Oasis,+Dubai+Digital+Park,+Dubai,+UAE',
    phones: [],
    emails: [],
  },
] as const;

export default function ContactPage() {
  const location = useLocation();
  const formRef = useRef<HTMLFormElement>(null);
  const preselectedProduct = (location.state as { product?: string })?.product || '';

  const [form, setForm] = useState<FormState>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: 'Iran',
    materialCategory: '',
    productGrade: '',
    requestType: '',
    quantity: '',
    quantityUnit: '',
    destination: '',
    incoterms: '',
    message: preselectedProduct ? `Inquiry for: ${preselectedProduct}` : '',
    consent: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (field: keyof FormState, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    const required: (keyof FormState)[] = [
      'fullName', 'email', 'phone', 'country', 'materialCategory',
      'productGrade', 'requestType', 'quantity', 'quantityUnit',
      'destination', 'incoterms', 'message', 'consent',
    ];
    for (const field of required) {
      const value = form[field];
      const isEmpty =
        typeof value === 'string' ? !value.trim() : !value;
      if (isEmpty) {
        newErrors[field] = `${fieldToLabel(field)} is required`;
      }
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Invalid email format';
    }
    if (form.phone.trim() && !/^\+?[\d\s\-()]{7,}$/.test(form.phone.trim())) {
      newErrors.phone = 'Invalid phone number';
    }
    if (form.quantity.trim() && !/^\d+(\.\d+)?$/.test(form.quantity.trim())) {
      newErrors.quantity = 'Quantity must be a number';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const fieldToLabel = (field: keyof FormState): string => {
    const labels: Record<keyof FormState, string> = {
      fullName: 'Full Name',
      companyName: 'Company Name',
      email: 'Email Address',
      phone: 'Phone / WhatsApp',
      country: 'Country',
      materialCategory: 'Material Category',
      productGrade: 'Product / Grade',
      requestType: 'Request Type',
      quantity: 'Quantity',
      quantityUnit: 'Quantity Unit',
      destination: 'Destination / Delivery Location',
      incoterms: 'Trade Terms (Incoterms)',
      message: 'Message / Additional Specifications',
      consent: 'Consent',
    };
    return labels[field];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setStatusMessage('');

    const payload = {
      ...form,
      quantity: Number(form.quantity) || 0,
    };

    try {
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 1200));
        setStatus('success');
        setStatusMessage('Your inquiry has been submitted successfully. Our team will contact you shortly.');
        setForm({
          ...form,
          fullName: '', companyName: '', email: '', phone: '', country: 'Iran',
          materialCategory: '', productGrade: '', requestType: '', quantity: '',
          quantityUnit: '', destination: '', incoterms: '', message: '', consent: false,
        });
      } else {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error('Failed to send inquiry');
        setStatus('success');
        setStatusMessage('Your inquiry has been submitted successfully. Our team will contact you shortly.');
        setForm({
          ...form,
          fullName: '', companyName: '', email: '', phone: '', country: 'Iran',
          materialCategory: '', productGrade: '', requestType: '', quantity: '',
          quantityUnit: '', destination: '', incoterms: '', message: '', consent: false,
        });
      }
    } catch {
      setStatus('error');
      setStatusMessage('Failed to send inquiry. Please try again later.');
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] md:h-[220px] lg:h-[240px]">
          <img
            src={`${import.meta.env.BASE_URL}images/hero-factory.jpg`}
            alt="Contact Hatef Tejarat Alborz"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/85 to-navy-darkest/30" />
          <div className="relative container h-full flex items-center">
            <div className="max-w-lg">
              <Breadcrumbs
                items={[
                  { label: 'Home', to: '/' },
                  { label: 'Contact Us', to: undefined },
                ]}
              />
              <Reveal variant="fade-up" delay={100} duration={700}>
                <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium mt-2.5">
                  Contact Us
                </h1>
                <p className="text-white/60 text-sm mt-1.5 max-w-md">
                  Reach out to our team for inquiries, quotations, and technical support.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry" className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal variant="fade-up" delay={100} duration={700}>
                <div className="mb-8">
                  <SectionBadge className="mb-3">INQUIRY REQUEST</SectionBadge>
                  <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-3">
                    Submit an Inquiry
                  </h2>
                  <p className="text-slate-gray text-sm leading-relaxed">
                    Provide your material and commercial requirements so we can prepare an accurate quotation for you.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} noValidate className="card p-4 md:p-6 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        name: 'fullName',
                        label: 'Full Name',
                        type: 'text',
                        placeholder: 'John Doe',
                        required: true,
                      },
                      {
                        name: 'companyName',
                        label: 'Company Name',
                        type: 'text',
                        placeholder: 'ABC Trading LLC',
                        required: false,
                      },
                      {
                        name: 'email',
                        label: 'Email Address',
                        type: 'email',
                        placeholder: 'john@example.com',
                        required: true,
                      },
                      {
                        name: 'phone',
                        label: 'Phone / WhatsApp',
                        type: 'tel',
                        placeholder: '+98 21 1234 5678',
                        required: true,
                      },
                      {
                        name: 'country',
                        label: 'Country',
                        type: 'select',
                        options: COUNTRIES,
                        required: true,
                      },
                      {
                        name: 'materialCategory',
                        label: 'Material Category',
                        type: 'select',
                        options: MATERIAL_CATEGORIES,
                        required: true,
                      },
                      {
                        name: 'productGrade',
                        label: 'Product / Grade',
                        type: 'select',
                        options: PRODUCT_GRADES,
                        required: true,
                      },
                      {
                        name: 'requestType',
                        label: 'Request Type',
                        type: 'select',
                        options: REQUEST_TYPES,
                        required: true,
                      },
                      {
                        name: 'quantity',
                        label: 'Quantity',
                        type: 'text',
                        placeholder: 'e.g. 25',
                        required: true,
                      },
                      {
                        name: 'quantityUnit',
                        label: 'Quantity Unit',
                        type: 'select',
                        options: QUANTITY_UNITS,
                        required: true,
                      },
                      {
                        name: 'destination',
                        label: 'Destination / Delivery Location',
                        type: 'text',
                        placeholder: 'Jebel Ali Port, Dubai',
                        required: true,
                      },
                      {
                        name: 'incoterms',
                        label: 'Trade Terms (Incoterms)',
                        type: 'select',
                        options: INCOTERMS,
                        required: true,
                      },
                    ].map((field) => (
                      <div key={field.name} className="flex flex-col gap-1.5">
                        <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">
                          {field.label}
                          {field.required && <span className="text-red-500 ml-0.5">*</span>}
                        </label>
                        {field.type === 'select' ? (
                          <select
                            name={field.name}
                            value={String(form[field.name as keyof FormState] ?? '')}
                            onChange={(e) => handleChange(field.name as keyof FormState, e.target.value)}
                            className={`input-field ${errors[field.name as keyof FormErrors] ? 'border-red-400 focus:ring-red-400' : ''}`}
                          >
                            <option value="">Select {field.label}</option>
                            {(field.options || []).map((opt) => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))}
                          </select>
                        ) : (
                          <input
                            name={field.name}
                            type={field.type}
                            value={String(form[field.name as keyof FormState] ?? '')}
                            onChange={(e) => handleChange(field.name as keyof FormState, e.target.value)}
                            placeholder={field.placeholder}
                            className={`input-field ${errors[field.name as keyof FormErrors] ? 'border-red-400 focus:ring-red-400' : ''}`}
                          />
                        )}
                        {errors[field.name as keyof FormErrors] && (
                          <p className="text-red-500 text-[10px] mt-0.5">{errors[field.name as keyof FormErrors]}</p>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">
                      Message / Additional Specifications
                      <span className="text-red-500 ml-0.5">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your material requirements, specifications, quantity, and delivery timeline..."
                      className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                    />
                    {errors.message && <p className="text-red-500 text-[10px] mt-0.5">{errors.message}</p>}
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => handleChange('consent', e.target.checked)}
                      className="w-3.5 h-3.5 rounded border-border-blue text-navy-deep focus:ring-2 focus:ring-navy-deep mt-0.5"
                    />
                    <label className="text-xs text-slate-gray leading-relaxed">
                      I agree to be contacted regarding this inquiry and allow Hatef Tejarat Alborz to process my personal data for this purpose.
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  {errors.consent && <p className="text-red-500 text-[10px] mt-0.5">{errors.consent}</p>}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full"
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" />
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                            <line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Submit Inquiry
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </>
                      )}
                    </button>
                  </div>

                  {status !== 'idle' && (
                    <div
                      className={`p-3 rounded-lg text-sm mt-4 ${
                        status === 'success'
                          ? 'bg-green-50 text-green-700 border border-green-200'
                          : status === 'error'
                            ? 'bg-red-50 text-red-700 border border-red-200'
                            : 'bg-navy-light text-navy-deep border border-border-blue'
                      }`}
                    >
                      {status === 'loading' && (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" />
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                            <line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" />
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                          </svg>
                          Submitting inquiry...
                        </div>
                      )}
                      {status === 'success' && statusMessage}
                      {status === 'error' && statusMessage}
                    </div>
                  )}
                </form>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal variant="fade-up" delay={220} duration={700}>
                <div className="sticky top-[92px]">
                  <div className="card p-5 md:p-6 h-full">
                    <h3 className="font-serif text-xl md:text-2xl text-navy-deep mb-4">Quick Contact</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-navy-deep">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <div>
                          <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider block mb-0.5">Phone / WhatsApp</span>
                          <a href="tel:+989123238106" className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors">
                            +98 912 323 8106
                          </a>
                          <a href="https://wa.me/989123238106" target="_blank" rel="noopener noreferrer" className="text-[10px] text-green-status hover:underline mt-0.5 block">
                            Chat on WhatsApp
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 text-navy-deep">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                        </svg>
                        <div>
                          <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider block mb-0.5">Email</span>
                          <a href="mailto:trading@hateftejaratalborz.info" className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors">
                            trading@hateftejaratalborz.info
                          </a>
                          <a href="mailto:hatef.tejarat.alborz@gmail.com" className="text-[10px] text-navy-sub hover:text-navy-deep transition-colors mt-0.5 block">
                            hatef.tejarat.alborz@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 pt-4 border-t border-border-blue">
                      <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider block mb-2">Office</span>
                      <p className="text-sm text-slate-gray leading-relaxed">
                        Tehran Province, Shemiranat County, Tajrish City, Hekmat, Dr. Ali Shariati Street, Shahid Mohammad Taghi Rafat Street, No. 7, 5th Floor, Northern Unit
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What happens after submission */}
      <section className="py-10 md:py-16 bg-bg-main">
        <div className="container">
          <div className="text-center mb-12">
            <Reveal variant="fade-up" delay={100} duration={700}>
              <SectionBadge className="mb-3">PROCESS</SectionBadge>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-3">
                What Happens After You Submit Your Inquiry?
              </h2>
              <p className="text-slate-gray text-sm max-w-2xl mx-auto">
                From the moment you send your request, here is how our team handles your inquiry step by step.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                step: '01',
                title: 'Submit Your Requirements',
                description:
                  'You share the required material type, quantity, and commercial details through the inquiry form.',
              },
              {
                step: '02',
                title: 'Inquiry Review',
                description:
                  'Our team reviews the material specifications, availability, and requested commercial conditions.',
              },
              {
                step: '03',
                title: 'Commercial Coordination',
                description:
                  'We discuss the appropriate supply method, sourcing, delivery, inspection, transportation, and payment conditions with you.',
              },
              {
                step: '04',
                title: 'Next Steps',
                description:
                  'Once the requirements and commercial conditions are agreed upon, the transaction and supply process can begin.',
              },
            ].map((step, i) => (
              <Reveal key={step.step} variant="fade-up" delay={150 + i * 90} duration={700}>
                <div className="card p-5 md:p-6 flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-deep text-white flex items-center justify-center font-serif text-xl font-bold">
                      {step.step}
                    </span>
                    <span className="text-xs font-sans font-semibold text-navy-sub uppercase tracking-wider">STEP</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-navy-deep mb-2">{step.title}</h3>
                  <p className="text-slate-gray text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offices */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="text-center mb-10">
            <Reveal variant="fade-up" delay={100} duration={700}>
              <SectionBadge className="mb-3">LOCATIONS</SectionBadge>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-3">Our Offices</h2>
              <p className="text-slate-gray text-sm max-w-2xl mx-auto">
                Visit or contact us at our offices in Iran and the United Arab Emirates.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {OFFICES.map((office) => (
              <Reveal key={office.country} variant="fade-up" delay={180} duration={700}>
                <div className="card p-5 md:p-6 h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-[10px] font-sans font-semibold text-green-status uppercase tracking-wider block mb-0.5">
                        {office.country}
                      </span>
                      <h3 className="font-serif text-lg text-navy-deep mb-0.5">{office.title}</h3>
                      {office.company && (
                        <span className="text-[10px] text-navy-sub uppercase tracking-wider block mb-1">{office.company}</span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2 mb-5 flex-grow">
                    {office.address.map((line, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-slate-gray leading-relaxed">
                        <span className="shrink-0 mt-0.5 text-navy-sub">·</span>
                        {line}
                      </div>
                    ))}
                    {office.postalCode && (
                      <div className="flex items-start gap-2 text-sm text-slate-gray leading-relaxed">
                        <span className="shrink-0 mt-0.5 text-navy-sub">·</span>
                        <span className="font-medium text-navy-deep">Postal Code:</span> {office.postalCode}
                      </div>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-border-blue">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 border border-navy-deep rounded-button text-sm font-medium text-navy-deep hover:bg-navy-deep hover:text-white transition-colors"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                      </svg>
                      View on Map
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-10 md:py-16 bg-bg-main">
        <div className="container">
          <div className="text-center mb-10">
            <Reveal variant="fade-up" delay={100} duration={700}>
              <SectionBadge className="mb-3">CONTACT</SectionBadge>
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-3">Contact Information</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                country: 'United Arab Emirates',
                title: 'UAE Office — Dubai',
                phones: [],
                emails: [],
              },
              {
                country: 'Iran',
                title: 'Iran Office — Tehran',
                phones: ['+98-21-88660856', '+98-21-88660857'],
                mobiles: ['+98 9127956301', '+98 9126206415'],
                emails: ['trading@hateftejaratalborz.info', 'hatef.tejarat.alborz@gmail.com'],
              },
            ].map((office) => (
              <Reveal key={office.country} variant="fade-up" delay={180} duration={700}>
                <div className="card p-5 md:p-6 h-full">
                  <h3 className="font-serif text-xl md:text-2xl text-navy-deep mb-4">{office.title}</h3>
                  <div className="space-y-4">
                    {office.phones && office.phones.length > 0 && (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider block mb-0.5">Phone / WhatsApp</span>
                          {office.phones.map((p) => (
                            <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors">
                              {p}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                    {office.mobiles && office.mobiles.length > 0 && (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider block mb-0.5">Mobile</span>
                          {office.mobiles.map((m) => (
                            <a key={m} href={`tel:${m.replace(/\s/g, '')}`} className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors">
                              {m}
                            </a>
                          ))}
                          {office.country === 'United Arab Emirates' && (
                            <>
                              {office.mobiles.map((m) => (
                                <a
                                  key={`wa-${m}`}
                                  href={`https://wa.me/${m.replace(/\s|-/g, '')}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[10px] text-green-status hover:underline mt-0.5 block"
                                >
                                  Chat on WhatsApp
                                </a>
                              ))}
                            </>
                          )}
                        </div>
                      </div>
                    )}
                    {office.emails && office.emails.length > 0 && (
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-navy-light flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider block mb-0.5">Email</span>
                          {office.emails.map((em) => (
                            <a key={em} href={`mailto:${em}`} className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors">
                              {em}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-20">
        <div className="container">
          <Reveal variant="fade-up" delay={150} duration={800}>
            <div className="navy-gradient rounded-[20px] p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" aria-hidden="true">
                  <defs>
                    <pattern id="contact-cta-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="0.5" fill="white" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#contact-cta-dots)" />
                </svg>
              </div>
              <div className="relative z-10">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white mb-3">
                  Ready to Source Your Materials?
                </h2>
                <p className="text-white/60 text-sm md:text-base mb-6 max-w-lg mx-auto">
                  Submit your inquiry and our trade specialists will prepare a tailored quotation for your project.
                </p>
                <button onClick={scrollToForm} className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy-deep rounded-button text-sm font-semibold hover:bg-navy-light transition-colors">
                  Go to Inquiry Form
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
