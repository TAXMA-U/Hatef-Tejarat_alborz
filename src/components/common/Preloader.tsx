import { useEffect, useState } from 'react';

export default function Preloader({ minimum = 650, maximum = 3500 }: { minimum?: number; maximum?: number }) {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = Date.now();

    const beginExit = () => {
      if (gone) return;
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

    const cap = window.setTimeout(beginExit, maximum);

    return () => {
      window.removeEventListener('load', maybeExit);
      window.clearTimeout(cap);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="preloader-overlay preloader-overlay-exit"
      style={{
        opacity: exiting ? 0 : 1,
        transition: 'opacity 900ms cubic-bezier(0.22,1,0.36,1)',
        pointerEvents: exiting ? 'none' : 'auto',
      }}
      role="status"
      aria-label="Loading Hatef Tejarat Alborz"
    >
      <div className="preloader-content">
        <span className="preloader-wordmark">HATEF TEJARAT ALBORZ</span>
      </div>
    </div>
  );
}
