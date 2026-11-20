import { useState } from 'react';
import type { ProductVariant } from '@/data/contentBlocks';

type VariantSelectorProps = {
  variants: ProductVariant[];
  selectedVariant: ProductVariant | undefined;
  onSelect: (variant: ProductVariant) => void;
};

export default function VariantSelector({ variants, selectedVariant, onSelect }: VariantSelectorProps) {
  const [open, setOpen] = useState(false);

  if (!variants || variants.length === 0) return null;

  return (
    <div className="mb-4">
      <label className="block text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider mb-1.5">
        Select Variant
      </label>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-2.5 border border-border-blue rounded-button text-sm text-navy-deep bg-white hover:border-navy-deep transition-colors"
        >
          <span>{selectedVariant ? selectedVariant.name : 'Choose a variant'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {open && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-border-blue rounded-panel shadow-lg z-50 max-h-60 overflow-y-auto">
            {variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => { onSelect(variant); setOpen(false); }}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-sm text-left hover:bg-navy-light transition-colors ${
                  selectedVariant?.id === variant.id ? 'bg-navy-light/50 text-navy-deep font-semibold' : 'text-slate-gray'
                }`}
              >
                <span>{variant.name}</span>
                {variant.sku && <span className="text-[10px] text-navy-sub">{variant.sku}</span>}
              </button>
            ))}
          </div>
        )}
      </div>
      {selectedVariant && selectedVariant.attributes && Object.keys(selectedVariant.attributes).length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {Object.entries(selectedVariant.attributes).map(([key, value]) => (
            <span key={key} className="px-2 py-0.5 bg-navy-light/30 text-navy-deep text-[10px] rounded">
              {key}: {value}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}