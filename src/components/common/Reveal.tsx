import { forwardRef, useMemo } from 'react';
import { useInView } from '@/hooks/useInView';

type RevealVariant = 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right' | 'scale';

interface RevealProps {
  children: React.ReactNode;
  variant?: RevealVariant;
  delay?: number;          // ms delay before animation starts
  duration?: number;       // ms animation duration
  threshold?: number;      // intersection threshold
  rootMargin?: string;     // intersection root margin
  triggerOnce?: boolean;   // whether to animate only once
  className?: string;
}

const VARIANT_INITIAL: Record<RevealVariant, React.CSSProperties> = {
  'fade-up': { opacity: 0, transform: 'translateY(28px)' },
  'fade-in': { opacity: 0 },
  'fade-left': { opacity: 0, transform: 'translateX(24px)' },
  'fade-right': { opacity: 0, transform: 'translateX(-24px)' },
  scale: { opacity: 0, transform: 'scale(0.92)' },
};

const VARIANT_ACTIVE: Record<RevealVariant, React.CSSProperties> = {
  'fade-up': { opacity: 1, transform: 'translateY(0)' },
  'fade-in': { opacity: 1 },
  'fade-left': { opacity: 1, transform: 'translateX(0)' },
  'fade-right': { opacity: 1, transform: 'translateX(0)' },
  scale: { opacity: 1, transform: 'scale(1)' },
};

export const Reveal = forwardRef<HTMLDivElement, RevealProps>(
  ({ children, variant = 'fade-up', delay = 0, duration = 700, threshold = 0.12,
     rootMargin = '60px 0px -40px 0px', triggerOnce = true, className, ...rest }, ref) => {
    const [inViewRef, isInView] = useInView<HTMLDivElement>({
      threshold,
      rootMargin,
      triggerOnce,
    });

    const style: React.CSSProperties = useMemo(() => {
      const state = isInView ? VARIANT_ACTIVE[variant] : VARIANT_INITIAL[variant];
      return {
        ...state,
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1), transform ${duration}ms cubic-bezier(0.22,1,0.36,1)`,
        transitionDelay: `${delay}ms`,
      };
    }, [isInView, variant, delay, duration]);

    return (
      <div ref={inViewRef as React.Ref<HTMLDivElement>} className={className} style={style} {...rest}>
        {children}
      </div>
    );
  }
);

Reveal.displayName = 'Reveal';
