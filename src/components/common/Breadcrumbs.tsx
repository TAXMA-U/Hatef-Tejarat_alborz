import { Link } from 'react-router-dom';

type BreadcrumbsProps = {
  items: { label: string; to?: string }[];
  variant?: 'default' | 'dark';
};

export default function Breadcrumbs({ items, variant = 'default' }: BreadcrumbsProps) {
  const isDark = variant === 'dark';

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