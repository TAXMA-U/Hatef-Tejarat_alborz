import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumbs from '@/components/common/Breadcrumbs';

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  productService: string;
  message: string;
};

type FormErrors = {
  fullName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
};

export default function ContactPage() {
  const location = useLocation();
  const preselectedProduct = (location.state as { product?: string })?.product || '';

  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    subject: preselectedProduct ? `Inquiry: ${preselectedProduct}` : '',
    productService: preselectedProduct,
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setStatusMessage('');
    }
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (form.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      // In development, simulate API call
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus('success');
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        setForm({ fullName: '', email: '', phone: '', subject: '', productService: '', message: '' });
      } else {
        // Production: call real API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        if (!response.ok) throw new Error('Failed to send message');
        setStatus('success');
        setStatusMessage('Message sent successfully! We will get back to you soon.');
        setForm({ fullName: '', email: '', phone: '', subject: '', productService: '', message: '' });
      }
    } catch {
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* ===== HERO ===== */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[200px] md:h-[220px]">
          <img
            src="/images/hero-factory.jpg"
            alt="Contact Hatef Tejarat Alborz"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-darkest via-navy-darkest/85 to-navy-darkest/30" />
          <div className="relative container h-full flex items-center">
            <div>
              <Breadcrumbs
                items={[
                  { label: 'Home', to: '/' },
                  { label: 'Contact Us', to: undefined },
                ]}
              />
              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-medium mt-2.5">
                Contact Us
              </h1>
              <p className="text-white/60 text-sm mt-1.5 max-w-md">
                Reach out to our team for inquiries, quotations, and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section className="py-10 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Contact Info - Left */}
            <div className="lg:col-span-5">
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-6">
                Contact Information
              </h2>
              <div className="space-y-3">
                {/* Phone */}
                <div className="card p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider">Phone</span>
                    <a
                      href="tel:+989123238106"
                      className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors mt-0.5"
                    >
                      +98 912 323 8106
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="card p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider">Email</span>
                    <a
                      href="mailto:trading@hateftejaratalborz.info"
                      className="block text-sm font-medium text-navy-deep hover:text-navy-mid transition-colors mt-0.5"
                    >
                      trading@hateftejaratalborz.info
                    </a>
                    <a
                      href="mailto:hatef.tejarat.alborz@gmail.com"
                      className="block text-[10px] text-navy-sub hover:text-navy-deep transition-colors mt-0.5"
                    >
                      hatef.tejarat.alborz@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="card p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider">Address</span>
                    <p className="text-sm font-medium text-navy-deep mt-0.5">
                      Tehran Province, Shemiranat County, Central District, Tajrish City, Hekmat, Dr. Ali Shariati Street, Shahid Mohammad Taghi Rafat Street, No. 7, 5th Floor, Northern Unit
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="card p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider">Business Hours</span>
                    <p className="text-sm font-medium text-navy-deep mt-0.5">
                      Saturday - Thursday: 8:00 AM - 5:00 PM
                    </p>
                    <p className="text-[10px] text-navy-sub mt-0.5">
                      * Subject to change
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form - Right */}
            <div className="lg:col-span-7">
              <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-6">
                Send Us a Message
              </h2>
              <div className="card p-4 md:p-6">
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {/* Full Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        className={`input-field ${errors.fullName ? 'border-red-400 focus:ring-red-400' : ''}`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Subject Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={`input-field ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
                        placeholder="+98 21 1234 5678"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        className={`input-field ${errors.subject ? 'border-red-400 focus:ring-red-400' : ''}`}
                        placeholder="Product inquiry"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-[10px] mt-1">{errors.subject}</p>
                      )}
                    </div>
                  </div>

                  {/* Product/Service */}
                  <div>
                    <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                      Product / Service
                    </label>
                    <select
                      value={form.productService}
                      onChange={(e) => handleChange('productService', e.target.value)}
                      className="input-field cursor-pointer"
                    >
                      <option value="">Select a product or service</option>
                      <option value="Carbon Steel">Carbon Steel</option>
                      <option value="Stainless Steel">Stainless Steel</option>
                      <option value="Aluminum">Aluminum</option>
                      <option value="Copper">Copper</option>
                      <option value="Steel Pipes">Steel Pipes</option>
                      <option value="Steel Sheets">Steel Sheets</option>
                      <option value="Rebar">Rebar</option>
                      <option value="Import & Export">Import & Export</option>
                      <option value="Warehousing">Warehousing</option>
                      <option value="Certification">Certification</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      className={`input-field resize-none ${errors.message ? 'border-red-400 focus:ring-red-400' : ''}`}
                      placeholder="Tell us about your requirements..."
                    />
                    {errors.message && (
                      <p className="text-red-500 text-[10px] mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Status Message */}
                  {status !== 'idle' && (
                    <div
                      className={`p-3 rounded-lg text-sm ${
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
                            <line x1="12" y1="2" x2="12" y2="6" />
                            <line x1="12" y1="18" x2="12" y2="22" />
                            <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                            <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                            <line x1="2" y1="12" x2="6" y2="12" />
                            <line x1="18" y1="12" x2="22" y2="12" />
                            <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                            <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                          </svg>
                          Sending message...
                        </div>
                      )}
                      {status === 'success' && statusMessage}
                      {status === 'error' && statusMessage}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="12" y1="2" x2="12" y2="6" />
                          <line x1="12" y1="18" x2="12" y2="22" />
                          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                          <line x1="2" y1="12" x2="6" y2="12" />
                          <line x1="18" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}