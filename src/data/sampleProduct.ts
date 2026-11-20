import type { ProductDetail } from '@/data/contentBlocks';

export const sampleProduct: ProductDetail = {
  id: 'copper-wire-8mm',
  slug: 'copper-wire-8mm',
  name: 'Copper Wire 8mm',
  nameFa: 'سیم مس ۸ میلی‌متر',
  shortDescription: 'High-conductivity copper wire for electrical and industrial applications.',
  description: 'High-conductivity copper wire for electrical and industrial applications. Manufactured to BS EN 13601 standards with minimum 99.99% purity.',
  materialFamily: 'copper',
  categoryPath: ['Metals', 'Copper', 'Wires'],
  categoryIds: ['metals', 'copper', 'copper-wires'],
  productType: 'Wire',
  brandOrOrigin: 'European Origin',
  manufacturer: 'Aurubis',
  countryOfOrigin: 'Germany',
  productCode: 'CW-8MM-001',
  heroImage: `${import.meta.env.BASE_URL}images/products/a.png`,
  gallery: [`${import.meta.env.BASE_URL}images/products/a.png`, `${import.meta.env.BASE_URL}images/products/b.png`, `${import.meta.env.BASE_URL}images/products/c.png`],
  inStock: true,
  ctaText: 'Inquire About This Product',
  ctaInquiryType: 'specifications',
  industryLabels: ['Electrical Infrastructure', 'Automotive Standard'],
  variants: [
    { id: 'cw-8mm', name: '8mm Diameter', sku: 'CW-8MM', grade: 'Cu-OF', attributes: { Diameter: '8 mm', Weight: '0.45 kg/m', Purity: '99.99%' } },
    { id: 'cw-14mm', name: '14mm Diameter', sku: 'CW-14MM', grade: 'Cu-OF', attributes: { Diameter: '14 mm', Weight: '1.37 kg/m', Purity: '99.99%' } },
    { id: 'cw-16mm', name: '16mm Diameter', sku: 'CW-16MM', grade: 'Cu-OF', attributes: { Diameter: '16 mm', Weight: '1.78 kg/m', Purity: '99.99%' } },
  ],
  contentBlocks: [
    {
      id: 'overview',
      type: 'richText',
      title: 'Product Overview',
      order: 1,
      content: {
        paragraphs: [
          'Copper wire is a versatile electrical conductor used in power transmission, electrical equipment, and industrial applications. Our copper wire is manufactured to the highest standards with excellent conductivity and thermal properties.',
          'Available in various diameters from 8mm to 16mm, suitable for a wide range of industrial and commercial applications.'
        ]
      }
    },
    {
      id: 'highlights',
      type: 'highlights',
      title: 'Product Highlights',
      order: 2,
      content: {
        items: [
          { title: 'High Conductivity', description: 'Excellent electrical conductivity for power applications' },
          { title: 'High Purity', description: 'Minimum 99.99% copper purity' },
          { title: 'Corrosion Resistant', description: 'Naturally resistant to corrosion' },
          { title: 'Durable', description: 'Long service life with minimal maintenance' }
        ]
      }
    },
    {
      id: 'general-specs',
      type: 'technicalSpecifications',
      title: 'General Specifications',
      order: 3,
      content: {
        items: [
          { label: 'Material', value: 'Cu-OF', unit: '' },
          { label: 'Purity', value: 'Min. 99.99%', unit: '' },
          { label: 'Standard', value: 'BS EN 13601', unit: '' },
          { label: 'Oxygen Content', value: '< 10', unit: 'ppm' },
          { label: 'Electrical Conductivity', value: '58', unit: 'MS/m' },
        ]
      }
    },
    {
      id: 'chemical-analysis',
      type: 'chemicalAnalysis',
      title: 'Chemical Analysis',
      order: 4,
      content: {
        availability: 'available',
        basis: 'heat-analysis',
        analysisId: 'Analysis ID #715',
        columns: [
          { key: 'element', label: 'Element' },
          { key: 'symbol', label: 'Symbol' },
          { key: 'value', label: 'Composition', unit: '%' }
        ],
        rows: [
          { element: 'Copper', symbol: 'Cu', value: '99.99' },
          { element: 'Silver', symbol: 'Ag', value: '0.001' },
          { element: 'Lead', symbol: 'Pb', value: '< 0.001' },
          { element: 'Iron', symbol: 'Fe', value: '< 0.001' },
        ]
      }
    },
    {
      id: 'dimensions-table',
      type: 'dimensionsTable',
      title: 'Available Dimensions and Weight',
      order: 5,
      content: {
        columns: [
          { key: 'diameter', label: 'Diameter', unit: 'mm' },
          { key: 'weight', label: 'Weight', unit: 'kg/m' },
          { key: 'length', label: 'Standard Length', unit: 'm' }
        ],
        rows: [
          { diameter: '8', weight: '0.45', length: 'Custom' },
          { diameter: '14', weight: '1.37', length: 'Custom' },
          { diameter: '16', weight: '1.78', length: 'Custom' },
        ]
      }
    },
    {
      id: 'applications',
      type: 'applications',
      title: 'Applications',
      order: 6,
      content: {
        items: [
          { title: 'Electrical Infrastructure', description: 'Power transmission and distribution' },
          { title: 'Automotive', description: 'Wiring harnesses and components' },
          { title: 'Construction', description: 'Building electrical systems' }
        ]
      }
    },
    {
      id: 'manufacturing',
      type: 'manufacturingProcess',
      title: 'Manufacturing Process',
      order: 7,
      content: {
        steps: [
          { title: 'Melting', description: 'High-purity copper is melted in induction furnaces' },
          { title: 'Casting', description: 'Copper is cast into billets for further processing' },
          { title: 'Drawing', description: 'Billets are drawn through dies to achieve desired diameter' },
          { title: 'Annealing', description: 'Wire is annealed to improve ductility and conductivity' },
          { title: 'Quality Control', description: 'Final inspection and testing before packaging' }
        ]
      }
    },
    {
      id: 'origin',
      type: 'originAndManufacturer',
      title: 'Origin & Manufacturer',
      order: 8,
      content: {
        items: [
          { label: 'Manufacturer', value: 'Aurubis', unit: '' },
          { label: 'Country', value: 'Germany', unit: '' },
          { label: 'Origin', value: 'European Union', unit: '' },
        ]
      }
    },
    {
      id: 'packaging',
      type: 'packagingAndDelivery',
      title: 'Packaging & Delivery',
      order: 9,
      content: {
        paragraphs: [
          'Copper wire is supplied in coils or spools depending on diameter and length requirements.',
          'Standard packaging includes wooden pallets with plastic wrapping for protection during transport.',
          'Delivery terms: FOB, CIF, or EXW based on customer requirements.'
        ]
      }
    },
    {
      id: 'gallery',
      type: 'imageGallery',
      title: 'Product Gallery',
      order: 10,
      content: {
        images: [
          { src: `${import.meta.env.BASE_URL}images/products/a.png`, caption: 'Copper Wire - Main View' },
          { src: `${import.meta.env.BASE_URL}images/products/b.png`, caption: 'Copper Wire - Detail' },
          { src: `${import.meta.env.BASE_URL}images/products/c.png`, caption: 'Copper Wire - Cross Section' }
        ]
      }
    },
  ],
  relatedProductIds: ['copper-strip', 'copper-busbar'],
};