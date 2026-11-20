import { useState } from 'react';
import type { ContentBlock, BlockContent, TableColumn, TableRow } from '@/data/contentBlocks';
import Lightbox from '@/components/common/Lightbox';

type BlockRendererProps = {
  block: ContentBlock;
};

export default function BlockRenderer({ block }: BlockRendererProps) {
  if (block.visibility === false) return null;

  switch (block.type) {
    case 'richText':
      return <RichTextBlock block={block} />;
    case 'highlights':
      return <HighlightsBlock block={block} />;
    case 'technicalSpecifications':
      return <SpecsBlock block={block} />;
    case 'chemicalAnalysis':
      return <ChemicalAnalysisBlock block={block} />;
    case 'physicalProperties':
    case 'mechanicalProperties':
    case 'coatingSpecifications':
    case 'standards':
      return <SpecsBlock block={block} />;
    case 'dimensionsTable':
    case 'weightTable':
    case 'customTable':
    case 'variantsTable':
      return <DataTableBlock block={block} />;
    case 'applications':
      return <ApplicationsBlock block={block} />;
    case 'manufacturingProcess':
    case 'salesProcedure':
      return <StepsBlock block={block} />;
    case 'originAndManufacturer':
      return <SpecsBlock block={block} />;
    case 'packagingAndDelivery':
      return <RichTextBlock block={block} />;
    case 'imageGallery':
      return <ImageGalleryBlock block={block} />;
    case 'technicalDrawing':
      return <ImageGalleryBlock block={block} />;
    case 'downloadableDocuments':
      return <DocumentsBlock block={block} />;
    case 'notice':
      return <NoticeBlock block={block} />;
    default:
      return null;
  }
}

function RichTextBlock({ block }: BlockRendererProps) {
  const content = block.content as { paragraphs: string[] };
  if (!content.paragraphs || content.paragraphs.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="space-y-3">
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-slate-gray text-sm leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function HighlightsBlock({ block }: BlockRendererProps) {
  const content = block.content as { items: { title: string; description: string }[] };
  if (!content.items || content.items.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {content.items.map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-navy-light/30">
              <div className="w-7 h-7 rounded-full bg-navy-deep flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">{item.title}</h4>
                <p className="text-[11px] text-slate-gray mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpecsBlock({ block }: BlockRendererProps) {
  const content = block.content as { items: { label: string; value: string; unit?: string }[] };
  if (!content.items || content.items.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0">
          {content.items.map((item, i) => (
            <div key={i} className="flex justify-between items-center py-2.5 border-b border-border-blue/60">
              <span className="text-xs text-navy-sub">{item.label}</span>
              <span className="text-sm font-medium text-navy-deep">
                {item.value} {item.unit && <span className="text-[10px] text-navy-sub">({item.unit})</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function formatChemicalValue(value: string | number): string {
  const str = String(value).trim();
  const cleaned = str.replace(/^<\s*=?\s*/, '');
  const num = parseFloat(cleaned);
  if (!isNaN(num)) {
    return String(num);
  }
  return str;
}

function ChemicalAnalysisBlock({ block }: BlockRendererProps) {
  const content = block.content as {
    availability: 'available' | 'upon_request' | 'not_provided' | 'not_applicable';
    basis?: string;
    analysisId?: string;
    columns: TableColumn[];
    rows: TableRow[];
    reportUrl?: string;
  };
  if (!content.availability || content.availability === 'not_provided' || content.availability === 'not_applicable') return null;

  if (content.availability === 'upon_request') {
    return (
      <section className="mb-6">
        <BlockTitle title={block.title} />
        <div className="card p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                <path d="M9 3h6l2 4H7l2-4z" /><path d="M7 7h10l1 14H6L7 7z" /><line x1="10" y1="11" x2="14" y2="11" /><line x1="10" y1="15" x2="14" y2="15" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-serif text-lg text-navy-deep mb-1">Chemical Analysis Available Upon Request</h3>
              <p className="text-xs text-slate-gray">Detailed chemical analysis will be provided upon request.</p>
            </div>
            <button className="btn-primary text-xs px-4 py-2 shrink-0">
              Request Analysis
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!content.columns || !content.rows || content.rows.length === 0) return null;

  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="flex items-center justify-between mb-3">
          {content.basis && <span className="text-[10px] font-sans font-semibold text-navy-deep uppercase tracking-wider">{content.basis}</span>}
          {content.analysisId && <span className="text-[10px] text-navy-sub uppercase tracking-wider">{content.analysisId}</span>}
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-blue">
                {content.columns.map((col) => (
                  <th key={col.key} className="px-4 py-2.5 text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider bg-navy-light/30">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-blue/60">
              {content.rows.map((row, i) => (
                <tr key={i} className="hover:bg-navy-light/20 transition-colors">
                  {content.columns.map((col) => (
                    <td key={col.key} className="px-4 py-2.5 text-sm text-navy-deep font-medium">
                      {col.key === 'value' ? formatChemicalValue(row[col.key]) : row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {content.reportUrl && (
          <div className="mt-3 pt-3 border-t border-border-blue">
            <a href={content.reportUrl} className="inline-flex items-center gap-1.5 text-xs font-sans font-semibold text-navy-deep hover:text-navy-mid transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              DOWNLOAD FULL REPORT
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

function DataTableBlock({ block }: BlockRendererProps) {
  const content = block.content as { columns: TableColumn[]; rows: TableRow[] };
  if (!content.columns || !content.rows || content.rows.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border-blue">
                {content.columns.map((col) => (
                  <th key={col.key} className="px-4 py-2.5 text-[10px] font-sans font-semibold text-navy-sub uppercase tracking-wider bg-navy-light/30">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border-blue/60">
              {content.rows.map((row, i) => (
                <tr key={i} className="hover:bg-navy-light/20 transition-colors">
                  {content.columns.map((col) => (
                    <td key={col.key} className="px-4 py-2.5 text-sm text-navy-deep font-medium">{row[col.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ApplicationsBlock({ block }: BlockRendererProps) {
  const content = block.content as { items: { title: string; description: string }[] };
  if (!content.items || content.items.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {content.items.map((item, i) => (
            <div key={i} className={`p-3 ${i < content.items.length - 1 ? 'md:border-r md:border-border-blue md:pr-3' : ''}`}>
              <span className="text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">{item.title}</span>
              <p className="text-xs text-slate-gray mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepsBlock({ block }: BlockRendererProps) {
  const content = block.content as { steps: { title: string; description: string }[] };
  if (!content.steps || content.steps.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="space-y-4">
          {content.steps.map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-navy-deep flex items-center justify-center shrink-0 text-white text-xs font-semibold">
                {i + 1}
              </div>
              <div>
                <h4 className="text-xs font-sans font-semibold text-navy-deep uppercase tracking-wider">{step.title}</h4>
                <p className="text-[11px] text-slate-gray mt-0.5">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImageGalleryBlock({ block }: BlockRendererProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');
  const content = block.content as { images: { src: string; caption?: string }[] };
  if (!content.images || content.images.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {content.images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setLightboxImage(img.src); setLightboxAlt(img.caption || `Image ${i + 1}`); setLightboxOpen(true); }}
            className="group relative aspect-[4/3] rounded-card overflow-hidden border border-border-blue"
          >
            <img src={img.src} alt={img.caption || `Image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-navy-darkest/70 backdrop-blur-sm p-2">
                <span className="text-[10px] text-white">{img.caption}</span>
              </div>
            )}
          </button>
        ))}
      </div>
      <Lightbox isOpen={lightboxOpen} image={lightboxImage} alt={lightboxAlt} onClose={() => setLightboxOpen(false)} />
    </section>
  );
}

function DocumentsBlock({ block }: BlockRendererProps) {
  const content = block.content as unknown as { url: string; label: string; fileType?: string; fileSize?: string }[];
  if (!content || !Array.isArray(content) || content.length === 0) return null;
  return (
    <section className="mb-6">
      <BlockTitle title={block.title} />
      <div className="card p-4 md:p-6">
        <div className="space-y-2">
          {content.map((doc, i) => (
            <a
              key={i}
              href={doc.url}
              className="flex items-center justify-between p-3 rounded-lg border border-border-blue hover:border-navy-deep hover:bg-navy-light/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-navy-light flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-medium text-navy-deep group-hover:text-navy-mid transition-colors">{doc.label}</span>
                  {doc.fileSize && <span className="text-[10px] text-navy-sub ml-2">{doc.fileSize}</span>}
                </div>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-sub group-hover:text-navy-deep transition-colors">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function NoticeBlock({ block }: BlockRendererProps) {
  const content = block.content as { message: string; variant?: 'info' | 'warning' | 'success' };
  if (!content.message) return null;
  const variant = content.variant || 'info';
  const bgColor = variant === 'warning' ? 'bg-amber-50 border-amber-200' : variant === 'success' ? 'bg-green-50 border-green-200' : 'bg-navy-light/30 border-border-blue';
  return (
    <section className="mb-6">
      <div className={`p-4 rounded-lg border ${bgColor} flex items-start gap-3`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy-deep shrink-0 mt-0.5">
          <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <p className="text-sm text-navy-deep">{content.message}</p>
      </div>
    </section>
  );
}

function BlockTitle({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <div className="w-1.5 h-5 bg-navy-deep rounded-full" />
      <h2 className="font-serif text-lg md:text-xl text-navy-deep">{title}</h2>
    </div>
  );
}