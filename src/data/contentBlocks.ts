export type ContentBlockType =
  | 'richText'
  | 'highlights'
  | 'technicalSpecifications'
  | 'chemicalAnalysis'
  | 'physicalProperties'
  | 'mechanicalProperties'
  | 'dimensionsTable'
  | 'weightTable'
  | 'coatingSpecifications'
  | 'standards'
  | 'applications'
  | 'manufacturingProcess'
  | 'originAndManufacturer'
  | 'packagingAndDelivery'
  | 'salesProcedure'
  | 'imageGallery'
  | 'technicalDrawing'
  | 'downloadableDocuments'
  | 'variantsTable'
  | 'notice'
  | 'customTable';

export type TableColumn = {
  key: string;
  label: string;
  unit?: string;
};

export type TableRow = {
  [key: string]: string | number;
};

export type ContentBlock = {
  id: string;
  type: ContentBlockType;
  title: string;
  order: number;
  visibility?: boolean;
  content: BlockContent;
};

export type BlockContent =
  | { paragraphs: string[] }
  | { items: { title: string; description: string }[] }
  | { items: { label: string; value: string; unit?: string }[] }
  | { availability: 'available' | 'upon_request' | 'not_provided' | 'not_applicable'; basis?: string; analysisId?: string; columns: TableColumn[]; rows: TableRow[]; reportUrl?: string }
  | { columns: TableColumn[]; rows: TableRow[] }
  | { steps: { title: string; description: string }[] }
  | { images: { src: string; caption?: string }[] }
  | { message: string; variant?: 'info' | 'warning' | 'success' }
  | { url: string; label: string; fileType?: string; fileSize?: string }
  | { items: { name: string; sku?: string; grade?: string; attributes?: Record<string, string> }[] };

export type ProductVariant = {
  id: string;
  name: string;
  sku?: string;
  grade?: string;
  attributes?: Record<string, string | number>;
  images?: string[];
};

export type ProductDetail = {
  id: string;
  slug: string;
  name: string;
  nameFa?: string;
  shortDescription: string;
  description?: string;
  materialFamily: string;
  categoryPath: string[];
  categoryIds: string[];
  productType: string;
  brandOrOrigin?: string;
  manufacturer?: string;
  countryOfOrigin?: string;
  productCode?: string;
  heroImage: string;
  gallery?: string[];
  variants?: ProductVariant[];
  contentBlocks: ContentBlock[];
  relatedProductIds?: string[];
  industryLabels?: string[];
  inStock?: boolean;
  ctaText?: string;
  ctaInquiryType?: 'specifications' | 'analysis' | 'datasheet' | 'price' | 'availability';
};