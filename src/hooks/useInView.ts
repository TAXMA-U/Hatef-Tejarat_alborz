import { useState, useEffect, useRef, type RefObject } from 'react';

export interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Lightweight IntersectionObserver hook.
 * Returns [ref, isInView]. Re-renders when the element enters the viewport.
 * Respects prefers-reduced-motion by immediately reporting as visible.
 */
export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.12, rootMargin = '60px 0px -40px 0px', triggerOnce = true } = options;

  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T | null>(null);

  useEffect(() => {
    // Honor prefers-reduced-motion: skip observing, mark visible immediately.
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (triggerOnce && ref.current) {
              observer.unobserve(ref.current);
            }
          } else if (!triggerOnce) {
            setIsInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isInView];
}