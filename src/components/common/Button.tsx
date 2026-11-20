type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'text' | 'icon';
  fullWidth?: boolean;
  className?: string;
};

export function PrimaryButton({
  children,
  onClick,
  disabled,
  type = 'button',
  fullWidth = false,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-navy-deep text-white rounded-button font-sans text-sm font-semibold btn-lively transition-all duration-300 hover:shadow-soft hover:bg-navy-dark disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep focus-visible:ring-offset-2 ${fullWidth ? 'w-full' : ''} ${className || ''}`}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  disabled,
  type = 'button',
  fullWidth = false,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-navy-deep text-navy-deep rounded-button font-sans text-sm font-semibold btn-lively transition-all duration-300 hover:bg-off-white hover:border-navy-dark disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep focus-visible:ring-offset-2 ${fullWidth ? 'w-full' : ''} ${className || ''}`}
    >
      {children}
    </button>
  );
}

export function TextButton({
  children,
  onClick,
  disabled,
  type = 'button',
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`inline-flex items-center gap-1 text-navy-deep font-sans text-sm font-semibold underline-offset-4 hover:underline disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep focus-visible:ring-offset-2 ${className || ''}`}
    >
      {children}
    </button>
  );
}

export function IconButton({
  children,
  onClick,
  disabled,
  type = 'button',
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`inline-flex items-center justify-center w-10 h-10 rounded-button bg-pale-blue-gray text-slate-gray transition-all duration-200 hover:bg-navy-deep hover:text-white hover:scale-110 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-deep focus-visible:ring-offset-2 ${className || ''}`}
    >
      {children}
    </button>
  );
}

export default IconButton;
