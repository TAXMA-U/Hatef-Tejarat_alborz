import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '@/components/common/BrandLogo';
import { categories } from '@/data/categories';

type MobileMenuDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type CategoryTreeNodeProps = {
  item: typeof categories[number];
  depth?: number;
  onClose: () => void;
};

function CategoryTreeNode({ item, depth = 0, onClose }: CategoryTreeNodeProps) {
  const hasChildren = item.children && item.children.length > 0;
  const [open, setOpen] = useState(false);

  return (
    <div key={item.id} className="mb-2">
      <button
        onClick={() => {
          if (hasChildren) setOpen(!open);
          else onClose();
        }}
        className={`flex items-center gap-2 w-full px-3 py-2 text-left text-sm text-slate-gray hover:bg-pale-blue-gray hover:text-navy-deep transition-colors rounded-lg ${
          depth === 0 ? 'font-medium text-navy-deep' : ''
        }`}
      >
        {item.name}
        {hasChildren && (
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`ml-auto transition-transform ${open ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
      </button>
      {hasChildren && open && (
        <div className={`ml-4 mt-1 border-l-2 border-border-gray pl-2 space-y-1`}>
          {item.children!.map((child) => (
            <CategoryTreeNode key={child.id} item={child} depth={depth + 1} onClose={onClose} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function MobileMenuDrawer({ isOpen, onClose }: MobileMenuDrawerProps) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          onClick={onClose}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[88%] bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-border-gray">
          <BrandLogo small />
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-pale-blue-gray flex items-center justify-center hover:bg-border-gray"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-2 h-8 bg-navy-deep rounded-full" />
            <span className="text-navy-deep font-sans text-xs font-semibold tracking-widest uppercase">MENU</span>
          </div>
          <nav className="space-y-3 mb-8">
            {[
              { label: 'Home', to: '/' },
              { label: 'Products', to: '/products' },
              { label: 'About Us', to: '/about' },
              { label: 'Contact Us', to: '/contact' },
            ].map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={onClose}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-gray hover:bg-pale-blue-gray hover:text-navy-deep transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border-gray pt-6 mb-6">
            <span className="text-navy-deep font-sans text-xs font-semibold tracking-widest uppercase block mb-4">
              Categories
            </span>
            <div className="space-y-1">
              {categories.map((cat) => (
                <CategoryTreeNode key={cat.id} item={cat} onClose={onClose} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto border-t border-border-gray">
          <button className="w-full py-4 bg-navy-deep text-white text-sm font-semibold hover:bg-navy-dark transition-colors">
            Login
          </button>
        </div>
      </div>
    </>
  );
}
