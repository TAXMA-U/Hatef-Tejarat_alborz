import { Link } from 'react-router-dom';

/**
 * Floating contact / chat button.
 *
 * Bright green circular button fixed near the bottom-right corner with a
 * white communication icon. Subtle entrance via scale + opacity (handled by
 * the parent page mount), slight hover scale, and an optional soft pulse.
 */
export default function FloatingContactButton() {
  return (
    <div className="float-contact">
      <Link
        to="/contact"
        className="w-12 h-12 rounded-full bg-green-status text-white flex items-center justify-center shadow-lg hover:bg-green-status/90 scale-100 transition-transform duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-green-status/40 focus:ring-offset-2"
        aria-label="Contact us"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </Link>
    </div>
  );
}
