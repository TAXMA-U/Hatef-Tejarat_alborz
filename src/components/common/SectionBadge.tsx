type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full bg-pale-blue-gray text-navy-deep text-xs font-semibold tracking-wider uppercase ${className || ''}`}>
      {children}
    </span>
  );
}
