import { useEffect, useState } from 'react';

/**
 * Fullscreen brand preloader.
 *
 * - Renders a black overlay with a centered circular metallic monogram.
 * - Does not artificially delay: it fades out as soon as the window `load`
 *   event has fired (with a small minimum dwell so it does not flash).
 * - Safe fallback exits after a hard cap so the site is never blocked.
 */
export default function Preloader({ minimum = 650, maximum = 3500 }: { minimum?: number; maximum?: number }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const beginExit = () => {
      if (exiting || gone) return;
      setExiting(true);
      window.setTimeout(() => setGone(true), 1000);
    };

    const maybeExit = () => {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, minimum - elapsed);
      window.setTimeout(beginExit, remaining);
    };

    if (document.readyState === 'complete') {
      maybeExit();
    } else {
      window.addEventListener('load', maybeExit, { once: true });
    }

    // Hard safety cap so a stalled resource never traps the visitor.
    const cap = window.setTimeout(beginExit, maximum);

    return () => {
      window.removeEventListener('load', maybeExit);
      window.clearTimeout(cap);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (gone) return null;

  return (
    <div
      className="preloader-overlay preloader-overlay-exit"
      style={{
        opacity: exiting ? 0 : 1,
        transition: 'opacity 900ms cubic-bezier(0.22,1,0.36,1)',
        pointerEvents: exiting ? 'none' : 'auto',
        visibility: visible ? 'visible' : 'hidden',
      }}
      role="status"
      aria-label="Loading Hatef Tejarat Alborz"
    >
      <div className="preloader-mark" aria-hidden="true">
        <div className="preloader-ring-outer" />
        <div className="preloader-ring-inner" />
        <div className="preloader-monogram">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>
      <span className="preloader-wordmark">HATEF TEJARAT ALBORZ</span>
      <button
        type="button"
        onClick={() => { setVisible(false); setExiting(true); setGone(true); }}
        className="preloader-skip"
      >
        Skip
      </button>
    </div>
  );
}
