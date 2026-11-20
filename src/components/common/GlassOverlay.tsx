type GlassOverlayProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassOverlay({ children, className }: GlassOverlayProps) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-md border border-border-gray/50 rounded-panel ${className}`}
    >
      {children}
    </div>
  );
}
