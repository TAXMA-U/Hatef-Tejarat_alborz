import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbItem = { label: string; to?: string };

type MobileBreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const ELLIPSIS = { label: '\u2026' };

export default function MobileBreadcrumbs({ items }: MobileBreadcrumbsProps) {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const update = () => setViewportWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  if (items.length === 0) return null;

  // Estimate the rendered width of the full path at 11px type, then collapse
  // intermediate levels when the path cannot fit the current screen width.
  const estimatedContentWidth =
    items.reduce((sum, item) => sum + item.label.length * 6.4, 0) +
    Math.max(0, items.length - 1) * 18 +
    34; // home icon + pill padding

  const availableWidth = Math.max(0, viewportWidth - 40 - 34); // page gutters + pill padding
  const collapsed = items.length > 3 && estimatedContentWidth > availableWidth;

  const visibleItems: BreadcrumbItem[] = collapsed
    ? [items[0], ELLIPSIS, items[items.length - 1]]
    : items;

  return (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex max-w-full items-center rounded-full border border-white/15 bg-white/[0.07] py-2 pl-3.5 pr-3.5 backdrop-blur-md"
    >
      {visibleItems.map((item, index) => {
        const isLast = index === visibleItems.length - 1;
        const isEllipsis = item === ELLIPSIS;

        return (
          <Fragment key={`${item.label}-${index}`}>
            {index > 0 && (
              <svg
                aria-hidden="true"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-0.5 h-2.5 w-2.5 shrink-0 text-white/35"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}

            {isEllipsis ? (
              <span className="shrink-0 text-[11px] leading-none text-white/45">&hellip;</span>
            ) : isLast ? (
              <span
                className="min-w-0 truncate text-[11px] font-semibold leading-none text-white"
                title={item.label}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to ?? '#'}
                className={`flex min-w-0 items-center gap-1 truncate text-[11px] leading-none transition-colors ${
                  index === 0
                    ? 'shrink-0 text-[#D3DCEB]/85 hover:text-white'
                    : 'text-[#D3DCEB]/70 hover:text-white'
                }`}
              >
                {index === 0 && (
                  <svg
                    aria-hidden="true"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3 w-3 shrink-0"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                )}
                <span className="truncate">{item.label}</span>
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}