import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';

type RegisterForm = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  accountType: 'individual' | 'company';
  acceptTerms: boolean;
};

type FormErrors = Partial<Record<keyof RegisterForm, string>>;

const passwordRequirements = [
  { label: 'At least 8 characters', test: (p: string) => p.length >= 8 },
  { label: 'One uppercase letter', test: (p: string) => /[A-Z]/.test(p) },
  { label: 'One lowercase letter', test: (p: string) => /[a-z]/.test(p) },
  { label: 'One number', test: (p: string) => /[0-9]/.test(p) },
];

export default function RegisterPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState<RegisterForm>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    accountType: 'company',
    acceptTerms: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (field: keyof RegisterForm, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
    if (submitError) setSubmitError('');
  };

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (form.companyName && form.accountType === 'company' && !form.companyName.trim()) {
      newErrors.companyName = 'Company Name is required for company accounts';
    }
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }
    if (!form.password) {
      newErrors.password = 'Password is required';
    } else {
      const unmet = passwordRequirements.filter((r) => !r.test(form.password));
      if (unmet.length > 0) {
        newErrors.password = `Password must contain: ${unmet.map((r) => r.label.toLowerCase()).join(', ')}`;
      }
    }
    if (!form.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!form.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the Terms of Service and Privacy Policy';
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

    setLoading(true);
    setSubmitError('');

    try {
      if (import.meta.env.DEV) {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        navigate('/login', { state: { message: 'Account created successfully! Please sign in.' } });
      } else {
        const response = await fetch('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fullName: form.fullName,
            companyName: form.accountType === 'company' ? form.companyName : undefined,
            email: form.email,
            phone: form.phone,
            password: form.password,
            accountType: form.accountType,
          }),
        });
        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          setSubmitError(data.message || 'Registration failed. Please try again.');
          setLoading(false);
          return;
        }
        const data = await response.json();
        if (data.requiresEmailVerification) {
          navigate('/login', { state: { message: 'Please check your email to verify your account.' } });
        } else if (data.token) {
          sessionStorage.setItem('auth_token', data.token);
          navigate('/products');
        } else {
          navigate('/login', { state: { message: 'Account created successfully! Please sign in.' } });
        }
      }
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <BrandLogo />
        </div>

        <div className="card p-6 md:p-8">
          <div className="text-center mb-6">
            <h1 className="font-serif text-2xl md:text-3xl text-navy-deep mb-1.5">
              Create Your Account
            </h1>
            <p className="text-slate-gray text-sm">
              Join our B2B platform today
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                Account Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => handleChange('accountType', 'individual')}
                  className={`py-2 px-3 rounded-button border text-sm font-medium transition-all ${
                    form.accountType === 'individual'
                      ? 'bg-navy-deep text-white border-navy-deep'
                      : 'bg-white text-navy-sub border-border-blue hover:border-navy-sub'
                  }`}
                >
                  Individual
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('accountType', 'company')}
                  className={`py-2 px-3 rounded-button border text-sm font-medium transition-all ${
                    form.accountType === 'company'
                      ? 'bg-navy-deep text-white border-navy-deep'
                      : 'bg-white text-navy-sub border-border-blue hover:border-navy-sub'
                  }`}
                >
                  Company
                </button>
              </div>
            </div>

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
                autoComplete="name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>
              )}
            </div>

            {form.accountType === 'company' && (
              <div>
                <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.companyName}
                  onChange={(e) => handleChange('companyName', e.target.value)}
                  className={`input-field ${errors.companyName ? 'border-red-400 focus:ring-red-400' : ''}`}
                  placeholder="Acme Industries"
                  autoComplete="organization"
                />
                {errors.companyName && (
                  <p className="text-red-500 text-[10px] mt-1">{errors.companyName}</p>
                )}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className={`input-field ${errors.email ? 'border-red-400 focus:ring-red-400' : ''}`}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  className={`input-field ${errors.phone ? 'border-red-400 focus:ring-red-400' : ''}`}
                  placeholder="+98 21 1234 5678"
                  autoComplete="tel"
                />
                {errors.phone && (
                  <p className="text-red-500 text-[10px] mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className={`input-field pr-10 ${errors.password ? 'border-red-400 focus:ring-red-400' : ''}`}
                  placeholder="Create a password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-navy-sub hover:text-navy-deep transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-[10px] mt-1">{errors.password}</p>
              )}
              <div className="mt-2 space-y-1">
                {passwordRequirements.map((req) => {
                  const met = form.password.length > 0 && req.test(form.password);
                  return (
                    <div key={req.label} className="flex items-center gap-1.5 text-[10px]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={met ? 'text-green-status' : 'text-navy-sub'}>
                        {met ? <polyline points="20 6 9 17 4 12" /> : <circle cx="12" cy="12" r="10" />}
                      </svg>
                      <span className={met ? 'text-green-status' : 'text-navy-sub'}>
                        {req.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={form.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className={`input-field pr-10 ${errors.confirmPassword ? 'border-red-400 focus:ring-red-400' : ''}`}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center text-navy-sub hover:text-navy-deep transition-colors"
                  aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                >
                  {showConfirmPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-500 text-[10px] mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <div>
              <label className="flex items-start gap-2 text-xs text-slate-gray cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.acceptTerms}
                  onChange={(e) => handleChange('acceptTerms', e.target.checked)}
                  className="w-4 h-4 rounded border-border-blue text-navy-deep focus:ring-2 focus:ring-navy-deep mt-0.5 shrink-0"
                />
                <span>
                  I agree to the{' '}
                  <a href="#" className="text-navy-mid hover:text-navy-deep hover:underline">
                    Terms of Service
                  </a>
                  {' '}and{' '}
                  <a href="#" className="text-navy-mid hover:text-navy-deep hover:underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
              {errors.acceptTerms && (
                <p className="text-red-500 text-[10px] mt-1">{errors.acceptTerms}</p>
              )}
            </div>

            {submitError && (
              <div className="p-3 rounded-lg bg-red-50 text-red-700 border border-red-200 text-sm">
                {submitError}
              </div>
            )}
          </form>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="btn-primary w-full mt-5"
          >
            {loading ? (
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
                Creating Account...
              </>
            ) : (
              <>
                Create Account
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </>
            )}
          </button>

          <p className="mt-5 text-center text-xs text-slate-gray">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-navy-mid font-semibold hover:text-navy-deep hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>

        <div className="text-center mt-5">
          <Link
            to="/"
            className="text-xs text-navy-sub hover:text-navy-deep transition-colors"
          >
            ← Back to Website
          </Link>
        </div>
      </div>
    </div>
  );
}