import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  items: { label: string; to?: string }[];
  variant?: 'default' | 'dark' | 'glass';
};

function GlassHomeIcon() {
  return (
    <svg
      aria-hidden="true"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function GlassChevron() {
  return (
    <svg
      aria-hidden="true"
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function Breadcrumbs({ items, variant = 'default' }: BreadcrumbsProps) {
  const isDark = variant === 'dark';
  const isGlass = variant === 'glass';

  // Liquid-glass pill variant (desktop Product Details only).
  // Full path is always rendered — no truncation, collapsing, or removal.
  if (isGlass) {
    return (
      <nav className="breadcrumb-glass" aria-label="Breadcrumb">
        {items.map((item, index) => (
          <span key={index} className="breadcrumb-glass__item">
            {index > 0 && (
              <span className="breadcrumb-glass__sep">
                <GlassChevron />
              </span>
            )}
            {index === 0 && (
              <span className="breadcrumb-glass__home">
                <GlassHomeIcon />
              </span>
            )}
            {item.to ? (
              <Link to={item.to} className="breadcrumb-glass__link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumb-glass__current">{item.label}</span>
            )}
          </span>
        ))}
      </nav>
    );
  }

  return (
    <nav className="flex items-center gap-1 text-xs" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          {index > 0 && <span className={`mx-1 ${isDark ? 'text-white/40' : 'text-border-gray'}`}>/</span>}
          {item.to ? (
            <Link
              to={item.to}
              className={`${isDark ? 'text-white/80 hover:text-white' : 'text-navy-deep hover:underline'} focus-visible:outline-none focus-visible:ring-1 ${isDark ? 'focus-visible:ring-white' : 'focus-visible:ring-navy-deep'} rounded`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={isDark ? 'text-white' : 'text-slate-gray'}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}