import { Link } from 'react-router-dom';

type BrandLogoProps = {
  small?: boolean;
};

export default function BrandLogo({ small = false }: BrandLogoProps) {
  return (
    <Link to="/" className="flex items-center gap-2 text-decoration-none">
      <div className={`w-9 h-9 rounded-lg bg-pale-blue-gray flex items-center justify-center ${small ? 'w-7 h-7' : ''}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>
      <div>
        <div className={`text-navy-deep font-serif font-medium text-lg ${small ? 'text-sm' : ''}`}>HATEF</div>
        {!small && <div className="text-slate-gray text-xs tracking-widest uppercase">TEJARAT ALBORZ</div>}
      </div>
    </Link>
  );
}
