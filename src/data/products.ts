import type { ProductDetail } from '@/data/contentBlocks';

export type Product = ProductDetail;

const defaultImage = `${import.meta.env.BASE_URL}images/products/a.png`;

const IMAGE_MAP: Record<string, string> = {
  'copper-busbar': 'Copper_Busbar.jpg',
  'copper-strip': 'Copper_Strip.jpg',
  'copper-wire': 'Copper_Wire.jpg',
  'copper-rod': 'Copper_Rod.jpg',
  'copper-bars': 'CopperـBars.jpg',
  'aluminum-ingot-iralco': 'Aluminum_Ingot.jpg',
  'pvc-coated-galvanized-wire': 'Galvanized_Wire_With_PVC_Coation.jpg',
  'hexagonal-wire-mesh': 'Hexagonal_Wire_Mesh.jpg',
  'chicken-wire-mesh': 'Chicken_Wire_Mesh.jpg',
  'barbed-wire-family': 'Barbed_Wire.jpg',
};

const resolveProductImage = (slug: string): string => {
  const file = IMAGE_MAP[slug];
  if (!file) return defaultImage;
  return `${import.meta.env.BASE_URL}images/products/${file}`;
};

export const products: ProductDetail[] = [
  {
    id: 'hta-copper-busbar',
    slug: 'copper-busbar',
    name: 'Copper Busbar',
    shortDescription: 'Copper busbar for electrical and industrial applications.',
    description: 'High-conductivity copper busbar manufactured to BS EN 13601 standards.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Electrical Conductors', 'Busbars'],
    categoryIds: ['copper-busbars'],
    productType: 'Busbar',
    productCode: 'HTA-CB-001',
    heroImage: resolveProductImage('copper-busbar'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Copper busbar for electrical and industrial applications. Manufactured to BS EN 13601 standards with minimum 99.99% purity.'] }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Thickness', value: '3–24', unit: 'mm' },
            { label: 'Width', value: '20–230', unit: 'mm' },
            { label: 'Length', value: '4000', unit: 'mm' },
            { label: 'Material', value: 'Cu-OF', unit: '' },
            { label: 'Purity', value: 'Min. 99.99%', unit: '' },
            { label: 'Standard', value: 'BS EN 13601', unit: '' },
            { label: 'Oxygen Content', value: '< 10', unit: 'ppm' },
            { label: 'Conductivity', value: '58', unit: 'MS/m' },
          ]
        }
      },
      {
        id: 'dimensions', type: 'dimensionsTable', title: 'Available Dimensions', order: 3,
        content: {
          columns: [
            { key: 'size', label: 'Size', unit: 'mm' },
            { key: 'thickness', label: 'Thickness', unit: 'mm' },
          ],
          rows: [
            { size: '15 × 3', thickness: '3' },
            { size: '20 × 3', thickness: '3' },
            { size: '20 × 5', thickness: '5' },
            { size: '20 × 10', thickness: '10' },
            { size: '25 × 3', thickness: '3' },
            { size: '30 × 5', thickness: '5' },
            { size: '40 × 10', thickness: '10' },
            { size: '50 × 10', thickness: '10' },
            { size: '60 × 10', thickness: '10' },
            { size: '80 × 10', thickness: '10' },
            { size: '100 × 10', thickness: '10' },
            { size: '120 × 10', thickness: '10' },
          ]
        }
      },
      {
        id: 'note', type: 'notice', title: '', order: 4,
        content: { message: 'Standard length is 4 meters. Other lengths available upon agreement.', variant: 'info' }
      },
    ],
    relatedProductIds: ['hta-copper-strip', 'hta-copper-wire'],
  },
  {
    id: 'hta-copper-strip',
    slug: 'copper-strip',
    name: 'Copper Strip',
    shortDescription: 'Copper strip for electrical and industrial applications.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Electrical Conductors', 'Strips'],
    categoryIds: ['copper-strips'],
    productType: 'Strip',
    productCode: 'HTA-CS-002',
    heroImage: resolveProductImage('copper-strip'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Copper strip for electrical and industrial applications. Manufactured to BS EN 13601 standards.'] }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Thickness', value: '3–24', unit: 'mm' },
            { label: 'Width', value: '20–230', unit: 'mm' },
            { label: 'Material', value: 'Cu-OF', unit: '' },
            { label: 'Standard', value: 'BS EN 13601', unit: '' },
          ]
        }
      },
      {
        id: 'note', type: 'notice', title: '', order: 3,
        content: { message: 'Standard strip length: 50 to 100 meters as per catalog note.', variant: 'info' }
      },
    ],
    relatedProductIds: ['hta-copper-busbar', 'hta-copper-wire'],
  },
  {
    id: 'hta-copper-wire',
    slug: 'copper-wire',
    name: 'Copper Wire',
    shortDescription: 'High-conductivity copper wire for electrical and industrial applications.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Electrical Conductors', 'Wires'],
    categoryIds: ['copper-wires'],
    productType: 'Wire',
    productCode: 'HTA-CW-003',
    heroImage: resolveProductImage('copper-wire'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    variants: [
      { id: 'cw-8', name: 'Ø 8 mm', sku: 'CW-8', attributes: { Diameter: '8 mm', Weight: '0.45 kg/m' } },
      { id: 'cw-14', name: 'Ø 14 mm', sku: 'CW-14', attributes: { Diameter: '14 mm', Weight: '1.37 kg/m' } },
      { id: 'cw-16', name: 'Ø 16 mm', sku: 'CW-16', attributes: { Diameter: '16 mm', Weight: '1.79 kg/m' } },
      { id: 'cw-20', name: 'Ø 20 mm', sku: 'CW-20', attributes: { Diameter: '20 mm', Weight: '2.80 kg/m' } },
      { id: 'cw-22', name: 'Ø 22 mm', sku: 'CW-22', attributes: { Diameter: '22 mm', Weight: '3.38 kg/m' } },
      { id: 'cw-25', name: 'Ø 25 mm', sku: 'CW-25', attributes: { Diameter: '25 mm', Weight: '4.37 kg/m' } },
    ],
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Copper wire is packed in coils. Net coil weight approximately 2.5 tons as per catalog.'] }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Material', value: 'Cu-OF', unit: '' },
            { label: 'Purity', value: 'Min. 99.99%', unit: '' },
            { label: 'Standard', value: 'BS EN 13601', unit: '' },
            { label: 'Oxygen Content', value: '< 10', unit: 'ppm' },
            { label: 'Conductivity', value: '58', unit: 'MS/m' },
          ]
        }
      },
      {
        id: 'weight-table', type: 'weightTable', title: 'Diameter and Weight', order: 3,
        content: {
          columns: [
            { key: 'diameter', label: 'Diameter', unit: 'mm' },
            { key: 'weight', label: 'Weight', unit: 'kg/m' },
          ],
          rows: [
            { diameter: '8', weight: '0.45' },
            { diameter: '14', weight: '1.37' },
            { diameter: '16', weight: '1.79' },
            { diameter: '20', weight: '2.80' },
            { diameter: '22', weight: '3.38' },
            { diameter: '25', weight: '4.37' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 4,
        content: { paragraphs: ['Copper wire is supplied in coils with approximate net weight of 2.5 tons.'] }
      },
    ],
    relatedProductIds: ['hta-copper-busbar', 'hta-copper-strip'],
  },
  {
    id: 'hta-copper-bars',
    slug: 'copper-bars',
    name: 'Copper Bars',
    shortDescription: 'Copper bars in various cross-sections for industrial applications.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Electrical Conductors', 'Bars'],
    categoryIds: ['copper-bars'],
    productType: 'Bar',
    productCode: 'HTA-CB-004',
    heroImage: resolveProductImage('copper-bars'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Copper bars in square and hexagonal cross-sections. Standard length: 3-5 meters.'] }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Material', value: 'Cu-OF', unit: '' },
            { label: 'Standard', value: 'BS EN 13601', unit: '' },
            { label: 'Length', value: '3–5', unit: 'm' },
          ]
        }
      },
      {
        id: 'cross-sections', type: 'dimensionsTable', title: 'Available Cross Sections', order: 3,
        content: {
          columns: [
            { key: 'size', label: 'Size', unit: 'mm' },
            { key: 'type', label: 'Type' },
          ],
          rows: [
            { size: '10', type: 'Square' },
            { size: '14', type: 'Square' },
            { size: '20', type: 'Square' },
            { size: '30', type: 'Hexagonal' },
            { size: '40', type: 'Hexagonal' },
          ]
        }
      },
    ],
    relatedProductIds: ['hta-copper-busbar', 'hta-copper-rod'],
  },
  {
    id: 'hta-copper-rod',
    slug: 'copper-rod',
    name: 'Copper Rod',
    shortDescription: 'Copper rod for electrical and industrial applications.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Electrical Conductors', 'Rods'],
    categoryIds: ['copper-rods'],
    productType: 'Rod',
    productCode: 'HTA-CR-005',
    heroImage: resolveProductImage('copper-rod'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Copper rod for electrical and industrial applications. Standard length: 1.5 meters.'] }
      },
      {
        id: 'weight', type: 'weightTable', title: 'Diameter and Weight', order: 2,
        content: {
          columns: [
            { key: 'diameter', label: 'Diameter', unit: 'mm' },
            { key: 'weight', label: 'Weight', unit: 'kg/m' },
          ],
          rows: [
            { diameter: '12', weight: '1.00' },
            { diameter: '14', weight: '1.37' },
            { diameter: '16', weight: '1.79' },
            { diameter: '20', weight: '2.80' },
          ]
        }
      },
    ],
    relatedProductIds: ['hta-copper-bars'],
  },
  {
    id: 'hta-copper-clamps',
    slug: 'copper-clamps',
    name: 'Copper C & H Clamps',
    shortDescription: 'Copper clamps for electrical connections and earthing.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Connection & Earthing Components', 'Clamps', 'C & H Clamps'],
    categoryIds: ['copper-c-h-clamps'],
    productType: 'Clamp',
    productCode: 'HTA-CC-006',
    heroImage: resolveProductImage('copper-clamps'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Copper C & H clamps for electrical connections and earthing applications.'] }
      },
      {
        id: 'c-clamps', type: 'dimensionsTable', title: 'C Clamps (mm)', order: 2,
        content: {
          columns: [{ key: 'size', label: 'Size', unit: 'mm' }],
          rows: [
            { size: '35/35' },
            { size: '50/35' },
            { size: '50/50' },
            { size: '70/70' },
            { size: '95/70' },
            { size: '120/50' },
            { size: '120/70' },
          ]
        }
      },
      {
        id: 'h-clamps', type: 'dimensionsTable', title: 'H Clamps (mm)', order: 3,
        content: {
          columns: [{ key: 'size', label: 'Size', unit: 'mm' }],
          rows: [
            { size: '50/50' },
            { size: '95/50' },
            { size: '95/70' },
            { size: '120/50' },
            { size: '120/95' },
            { size: '120/120' },
            { size: '150/150' },
          ]
        }
      },
    ],
    relatedProductIds: ['hta-copper-special-sections'],
  },
  {
    id: 'hta-copper-special-sections',
    slug: 'copper-special-sections',
    name: 'Copper Special Sections',
    shortDescription: 'Custom copper sections for specialized applications.',
    materialFamily: 'Copper',
    categoryPath: ['Metals', 'Copper', 'Custom / Special Products', 'Special Sections'],
    categoryIds: ['copper-special-sections'],
    productType: 'Section',
    productCode: 'HTA-CSS-007',
    heroImage: resolveProductImage('copper-special-sections'),
    hasImage: false,
    inStock: false,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Custom copper special sections for specialized applications. Standard length: 3-5 meters. Other lengths available by agreement.'] }
      },
      {
        id: 'gallery', type: 'imageGallery', title: 'Cross Sections', order: 2,
        content: { images: [
          { src: defaultImage, caption: 'Special Section Type A' },
          { src: defaultImage, caption: 'Special Section Type B' },
        ] }
      },
    ],
    relatedProductIds: ['hta-copper-clamps'],
  },
  {
    id: 'hta-aluminum-ingot',
    slug: 'aluminum-ingot-iralco',
    name: 'Aluminium Ingot – IRALCO Origin',
    shortDescription: 'Primary aluminum ingot from IRALCO for industrial applications.',
    materialFamily: 'Aluminum',
    categoryPath: ['Metals', 'Aluminum', 'Primary Aluminum', 'Ingots'],
    categoryIds: ['aluminum-ingots'],
    productType: 'Ingot',
    brandOrOrigin: 'IRALCO',
    manufacturer: 'Iran Aluminium Company',
    countryOfOrigin: 'Iran',
    heroImage: resolveProductImage('aluminum-ingot-iralco'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Primary aluminum ingot from IRALCO (Iran Aluminium Company) for industrial applications including casting, extrusion, rolling, and alloy production.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'High Purity', description: 'High purity primary aluminium' },
            { title: 'Consistent Quality', description: 'Consistent chemical composition' },
            { title: 'Industrial Grade', description: 'Industrial-grade quality control' },
            { title: 'Export Ready', description: 'Suitable for domestic and export markets' },
            { title: 'Safe Packaging', description: 'Standard packaging and safe loading procedures' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Casting', description: 'Used in casting applications' },
            { title: 'Extrusion', description: 'Used in extrusion processes' },
            { title: 'Rolling', description: 'Used in rolling applications' },
            { title: 'Alloy Production', description: 'Used in alloy production' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 4,
        content: {
          availability: 'upon_request',
          columns: [],
          rows: []
        }
      },
      {
        id: 'sales', type: 'salesProcedure', title: 'Sales & Delivery Procedure', order: 5,
        content: {
          steps: [
            { title: 'Contract', description: 'Contract is finalized.' },
            { title: 'Proforma Invoice', description: 'A PI is issued.' },
            { title: 'Supplier Introduction', description: 'Before payment, official email is sent to supplier factory introducing the buyer.' },
            { title: 'Confirmation', description: 'The same email is forwarded to buyer for transparency.' },
            { title: 'Delivery', description: 'After payment, goods are delivered according to agreed terms.' },
            { title: 'Quotation Period', description: 'Average QP is calculated as the average of five days after loading.' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 6,
        content: { paragraphs: ['Standard packaging and safe loading procedures.'] }
      },
    ],
    relatedProductIds: [],
  },
  {
    id: 'hta-iron-wire',
    slug: 'iron-wire',
    name: 'Iron Wire',
    shortDescription: 'Iron wire produced through drawing process for various industrial applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Steel Wire Products', 'General Wire', 'Iron Wire'],
    categoryIds: ['iron-wire'],
    productType: 'Wire',
    productCode: 'HTA-IW-009',
    heroImage: resolveProductImage('iron-wire'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    variants: [
      { id: 'iw-250', name: '250 kg Coil', sku: 'IW-250', attributes: { 'Coil Weight': '250 kg' } },
      { id: 'iw-350', name: '350 kg Coil', sku: 'IW-350', attributes: { 'Coil Weight': '350 kg' } },
      { id: 'iw-450', name: '450 kg Coil', sku: 'IW-450', attributes: { 'Coil Weight': '450 kg' } },
    ],
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Primary wire is drawn to the desired diameter and packed in coils with requested weight. Chemical analysis is identical to the primary billet; mechanical properties change with drawing reduction.'] }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Grades', value: 'SAE1006, SAE1008, SAE1010, 3SP', unit: '' },
            { label: 'Coil Weights', value: '250, 350, 450', unit: 'kg' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 3,
        content: {
          availability: 'available',
          basis: 'heat-analysis',
          analysisId: 'Analysis ID #IW-001',
          columns: [
            { key: 'element', label: 'Element' },
            { key: 'symbol', label: 'Symbol' },
            { key: 'value', label: 'Composition', unit: '%' }
          ],
          rows: [
            { element: 'Carbon', symbol: 'C', value: 'Pending Review' },
            { element: 'Iron', symbol: 'Fe', value: 'Balance' },
            { element: 'Manganese', symbol: 'Mn', value: 'Pending Review' },
            { element: 'Phosphorus', symbol: 'P', value: 'Pending Review' },
            { element: 'Sulfur', symbol: 'S', value: 'Pending Review' },
            { element: 'Silicon', symbol: 'Si', value: 'Pending Review' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 4,
        content: { message: 'Chemical analysis values require manual verification from catalog images.', variant: 'warning' }
      },
    ],
    relatedProductIds: ['hta-annealed-wire', 'hta-galvanized-wire'],
  },
  {
    id: 'hta-annealed-wire',
    slug: 'annealed-wire',
    name: 'Annealed Wire',
    shortDescription: 'Annealed wire (Black Wire) with improved flexibility and strength for construction and industrial use.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Steel Wire Products', 'Heat-Treated Wire', 'Annealed Wire'],
    categoryIds: ['annealed-wire'],
    productType: 'Wire',
    heroImage: resolveProductImage('annealed-wire'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    variants: [
      { id: 'aw-coil', name: 'Annealed Wire Coil', sku: 'AW-COIL', attributes: { 'Tensile Strength': '410–440 MPa' } },
      { id: 'aw-super', name: 'Annealed Wire Coil – Super Soft', sku: 'AW-SOFT', attributes: { 'Tensile Strength': '420–450 MPa' } },
    ],
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Produced from steel wire after drawing and passing through annealing furnace.',
            'Dark surface color gives the name Black Wire.',
            'Annealing heat treatment creates metallurgical changes and refines grain structure.',
            'Improved flexibility and strength for various applications.',
            'Applications: Construction/Foundation Reinforcement, Packaging, Spring Manufacturing, Crafts & Arts.'
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Grades', order: 2,
        content: {
          items: [
            { label: 'Grades', value: 'SAE1006, SAE1008, SAE1010, Rst34', unit: '' },
          ]
        }
      },
      {
        id: 'mechanical', type: 'mechanicalProperties', title: 'Mechanical Properties', order: 3,
        content: {
          items: [
            { label: 'Ultimate Tensile Strength (Coil)', value: '410–440', unit: 'MPa' },
            { label: 'Ultimate Tensile Strength (Super Soft)', value: '420–450', unit: 'MPa' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 4,
        content: { message: 'Wire diameters and coil weights require manual verification from catalog images.', variant: 'warning' }
      },
    ],
    relatedProductIds: ['hta-iron-wire', 'hta-ribbed-wire'],
  },
  {
    id: 'hta-galvanized-wire',
    slug: 'galvanized-wire',
    name: 'Galvanized Wire',
    shortDescription: 'Steel wire with zinc coating for corrosion resistance in construction and industrial applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Steel Wire Products', 'Coated Wire', 'Galvanized Wire'],
    categoryIds: ['galvanized-wire'],
    productType: 'Wire',
    heroImage: resolveProductImage('galvanized-wire'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    variants: [
      { id: 'gw-hotdip', name: 'Hot-Dip Galvanized', sku: 'GW-HD', attributes: { 'Coating Method': 'Hot-Dip' } },
      { id: 'gw-electro', name: 'Electro-Galvanized', sku: 'GW-EG', attributes: { 'Coating Method': 'Electro' } },
    ],
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Steel wire with zinc coating for corrosion resistance.',
            'Two production methods: Hot-Dip Galvanized and Electro-Galvanized.',
            'Hot-Dip: Cleaned wire immersed in molten zinc with small aluminum percentage.',
            'Electro-Galvanized: Electrolytic coating with thinner zinc layer.',
            'Applications: Construction, Agriculture, Horticulture, Poultry Farming, Meshes, Barbed Wire, Scaffolding, Plastering.',
            'Available as coil or straightened length.'
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Grades', value: 'SAE1006, SAE1008, SAE1010, 3SP, Rst34', unit: '' },
            { label: 'Coating Types', value: 'Hot-Dip, Electro', unit: '' },
          ]
        }
      },
      {
        id: 'coating-weight', type: 'weightTable', title: 'Coating Weight', order: 3,
        content: {
          columns: [
            { key: 'diameter', label: 'Wire Diameter', unit: 'mm' },
            { key: 'coating', label: 'Coating Weight', unit: 'g/m²' },
            { key: 'class', label: 'Class' },
          ],
          rows: [
            { diameter: 'Pending', coating: 'Pending Review', class: 'A' },
            { diameter: 'Pending', coating: 'Pending Review', class: 'B' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 4,
        content: { message: 'Coating weight values require manual verification from catalog images.', variant: 'warning' }
      },
    ],
    relatedProductIds: ['hta-pvc-galvanized', 'hta-iron-wire'],
  },
  {
    id: 'hta-pvc-galvanized',
    slug: 'pvc-coated-galvanized-wire',
    name: 'Galvanized Wire with PVC Coating',
    shortDescription: 'Galvanized wire with PVC coating for enhanced corrosion resistance.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Steel Wire Products', 'Coated Wire', 'Galvanized Wire', 'PVC-Coated Galvanized Wire'],
    categoryIds: ['pvc-galvanized'],
    productType: 'Wire',
    heroImage: resolveProductImage('pvc-coated-galvanized-wire'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    variants: [
      { id: 'pvc-green', name: 'Green PVC', sku: 'PVC-GN', attributes: { 'Color': 'Green' } },
      { id: 'pvc-black', name: 'Black PVC', sku: 'PVC-BK', attributes: { 'Color': 'Black' } },
      { id: 'pvc-blue', name: 'Blue PVC', sku: 'PVC-BL', attributes: { 'Color': 'Blue' } },
    ],
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Base structure with zinc coating and outer Polyvinyl Chloride (PVC) layer.',
            'PVC increases resistance to acidic and alkaline materials.',
            'In humid or corrosive environments, PVC layer on galvanized wire increases corrosion resistance.',
            'Usable in Mesh, Fence and Barbed Wire production.',
            'Various colors, flexibility and color retention under sunlight.',
            'HTA can produce with various wire thicknesses and coating options.'
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Base Specifications', order: 2,
        content: {
          items: [
            { label: 'Base Wire', value: 'Galvanized Steel', unit: '' },
            { label: 'Coating', value: 'PVC (Polyvinyl Chloride)', unit: '' },
            { label: 'Colors', value: 'Green, Black, Blue, etc.', unit: '' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 3,
        content: { message: 'Wire diameter and coating thickness values are not specified in catalog. Demo variants are synthetic.', variant: 'warning' }
      },
    ],
    relatedProductIds: ['hta-galvanized-wire'],
  },
  {
    id: 'hta-ribbed-wire',
    slug: 'ribbed-wire',
    name: 'Ribbed Wire',
    shortDescription: 'Ribbed steel wire for concrete reinforcement with improved bonding and seismic resistance.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Steel Wire Products', 'Reinforcement Wire', 'Ribbed Wire'],
    categoryIds: ['ribbed-wire'],
    productType: 'Wire',
    heroImage: resolveProductImage('ribbed-wire'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'New product of this production unit.',
            'Low weight with sufficient strength for structures.',
            'Weldable with various methods.',
            'Thinner than Steel Rebar.',
            'Ribbed texture creates better bond with concrete.',
            'Benefits: Increased durability, reduced construction cost and time, reduced risk of shear damage, increased load capacity and seismic resistance.'
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 2,
        content: {
          items: [
            { title: 'Buildings', description: 'General building construction' },
            { title: 'High-Rise', description: 'High-rise buildings' },
            { title: 'Stadiums', description: 'Stadium structures' },
            { title: 'Precast', description: 'Precast concrete structures' },
            { title: 'Dams', description: 'Dam construction' },
            { title: 'Wire Mesh', description: 'Wire mesh production' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 3,
        content: { message: 'Available in various thicknesses based on order. No chemical/mechanical analysis table provided in catalog.', variant: 'info' }
      },
    ],
    relatedProductIds: ['hta-annealed-wire', 'hta-iron-wire'],
  },
  {
    id: 'hta-hexagonal-mesh',
    slug: 'hexagonal-wire-mesh',
    name: 'Hexagonal Wire Mesh',
    shortDescription: 'Hexagonal woven wire mesh for agriculture, gardening, and fencing applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Woven Mesh', 'Hexagonal Wire Mesh'],
    categoryIds: ['hexagonal-mesh'],
    productType: 'Mesh',
    heroImage: resolveProductImage('hexagonal-wire-mesh'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Metal mesh with hexagonal openings, woven from galvanized wire.',
            'Twist connections at 6 points for strength.',
            'Strong structure, flexibility, and corrosion resistance.',
            'Applications: Agriculture, gardening, farm fencing, pastures, gardens, greenhouses, animal cages, workshop fencing, material protection.',
            'Suitable for humid environments and harsh weather conditions.'
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'General Specifications', order: 2,
        content: {
          items: [
            { label: 'Grades', value: 'SAE1006, SAE1008, SAE1010, Rst34', unit: '' },
          ]
        }
      },
      {
        id: 'mesh-specs', type: 'customTable', title: 'Mesh Specifications', order: 3,
        content: {
          columns: [
            { key: 'diameter', label: 'Wire Diameter', unit: 'mm' },
            { key: 'opening', label: 'Opening', unit: 'in/cm' },
            { key: 'width', label: 'Width', unit: 'm' },
            { key: 'length', label: 'Length', unit: 'm' },
          ],
          rows: [
            { diameter: 'Pending', opening: 'Pending', width: 'Pending', length: 'Pending' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 4,
        content: { message: 'Mesh specifications require manual verification from catalog images.', variant: 'warning' }
      },
    ],
    relatedProductIds: ['hta-chicken-mesh', 'hta-gabion'],
  },
  {
    id: 'hta-gabion',
    slug: 'gabion',
    name: 'Gabion',
    shortDescription: 'Wire mesh gabion for retaining structures, erosion control, and landscaping.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Woven Mesh', 'Gabion Mesh / Gabion'],
    categoryIds: ['gabion'],
    productType: 'Mesh',
    heroImage: resolveProductImage('gabion'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Wire mesh structure filled with stones, gravel, or other materials.',
            'Applications: Retaining structures, retaining walls, erosion control, decorative applications.',
            'Made from galvanized steel wire.',
            'Thicker wire than Hexagonal Wire Mesh with 3-twist connections.',
            'High flexibility and durability; withstands water flow and stone pressure.',
            'Applications: Road construction, dam construction, environmental projects.',
            'Rust and corrosion resistant; mesh structure absorbs and distributes forces.'
          ]
        }
      },
      {
        id: 'weight', type: 'weightTable', title: 'Weight by Width', order: 2,
        content: {
          columns: [
            { key: 'width', label: 'Width', unit: 'm' },
            { key: 'weight', label: 'Weight', unit: 'kg' },
          ],
          rows: [
            { width: '3', weight: '208' },
            { width: '2', weight: '153' },
            { width: '1.5', weight: '108' },
            { width: '1', weight: '76' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 3,
        content: { message: 'Weight based on wire diameter 3mm and length 40m. Also available in 20m length.', variant: 'info' }
      },
    ],
    relatedProductIds: ['hta-hexagonal-mesh', 'hta-chicken-mesh'],
  },
  {
    id: 'hta-chicken-mesh',
    slug: 'chicken-wire-mesh',
    name: 'Chicken Wire Mesh',
    shortDescription: 'Lightweight hexagonal wire mesh for poultry, gardening, and construction applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Woven Mesh', 'Chicken Wire Mesh'],
    categoryIds: ['chicken-mesh'],
    productType: 'Mesh',
    heroImage: resolveProductImage('chicken-wire-mesh'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Steel fencing with hexagonal openings from thin galvanized wire.',
            'Lightweight, rust and corrosion resistant.',
            'Applications: Agriculture, construction, animal husbandry.',
            'Used for fencing, plant protection, chicken/rabbit cages, small animals.',
            'Can be cut and shaped to required dimensions.',
            'Construction use: Wall plaster reinforcement, ceiling reinforcement, protective barrier against falling materials.'
          ]
        }
      },
      {
        id: 'specs', type: 'customTable', title: 'Specifications', order: 2,
        content: {
          columns: [
            { key: 'diameter', label: 'Wire Diameter', unit: 'mm' },
            { key: 'opening', label: 'Opening', unit: 'in/cm' },
            { key: 'width', label: 'Width', unit: 'm' },
            { key: 'length', label: 'Length', unit: 'm' },
          ],
          rows: [
            { diameter: 'Pending', opening: 'Pending', width: 'Pending', length: 'Pending' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 3,
        content: { message: 'Specifications require manual verification from catalog images.', variant: 'warning' }
      },
    ],
    relatedProductIds: ['hta-hexagonal-mesh', 'hta-gabion'],
  },
  {
    id: 'hta-wire-mesh',
    slug: 'wire-mesh',
    name: 'Wire Mesh',
    shortDescription: 'Welded wire mesh for concrete reinforcement and construction applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Welded / Fabricated Mesh', 'Wire Mesh'],
    categoryIds: ['wire-mesh-product'],
    productType: 'Mesh',
    heroImage: resolveProductImage('wire-mesh'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Raw materials include rebar or various wires.',
            'Wires arranged horizontally and vertically and welded together to form square mesh.',
            'Applications: Building foundations, concrete reinforcement, mesh flooring, 3D panels, shelving.'
          ]
        }
      },
      {
        id: 'production-range', type: 'technicalSpecifications', title: 'Production Range', order: 2,
        content: {
          items: [
            { label: 'Wire Thickness', value: '2–12', unit: 'mm' },
            { label: 'Mesh Hole Options', value: '5, 10, 15, 20, 25', unit: 'cm' },
          ]
        }
      },
      {
        id: 'notice', type: 'notice', title: '', order: 3,
        content: { message: 'Production according to customer specifications.', variant: 'info' }
      },
    ],
    relatedProductIds: ['hta-hexagonal-mesh', 'hta-chicken-mesh'],
  },
  {
    id: 'hta-barbed-wire',
    slug: 'barbed-wire-family',
    name: 'Barbed Wire Family',
    shortDescription: 'Barbed and razor wire family for security fencing and perimeter protection.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Barbed & Razor Wire'],
    categoryIds: ['barbed-wire'],
    productType: 'Fencing',
    heroImage: resolveProductImage('barbed-wire-family'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    variants: [
      { id: 'linear-barbed', name: 'Linear Barbed Wire', sku: 'BW-LB', attributes: { 'Type': 'Linear Barbed' } },
      { id: 'rolled-barbed', name: 'Rolled Barbed Wire', sku: 'BW-RB', attributes: { 'Type': 'Rolled Barbed', 'Diameter': '60/90 cm' } },
      { id: 'linear-razor', name: 'Linear Razor Wire', sku: 'RW-LR', attributes: { 'Type': 'Linear Razor' } },
      { id: 'rolled-razor', name: 'Rolled Razor Wire', sku: 'RW-RR', attributes: { 'Type': 'Rolled Razor' } },
    ],
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Barbed Wire Family Overview', order: 1,
        content: {
          paragraphs: [
            'Four models available: Linear Barbed Wire, Rolled Barbed Wire, Linear Razor Wire, Rolled Razor Wire.',
            'Linear Barbed Wire: Made from four galvanized wire strands. Two strands twisted together with two barbed strands placed at regular intervals.',
            'Rolled Barbed Wire: Barbs from galvanized wire, central wire from high-carbon steel. Roll diameters typically 60cm and 90cm. Rolled shape covers more surface area.',
            'Linear Razor Wire: Central wire from high-carbon steel. Blades cut from galvanized steel sheet and mounted on central wire. Higher barb density and sharper edges.',
            'Rolled Razor Wire: Similar to Linear Razor Wire but in coiled arrangement. Rings held together with clips. Installed on walls and security areas.'
          ]
        }
      },
    ],
    relatedProductIds: ['hta-galvanized-wire'],
  },
  {
    id: 'hta-armor-wire',
    slug: 'armor-wire',
    name: 'ARMOR Wire',
    shortDescription: 'Armored power cable for industrial environments and harsh conditions.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Cable Protection', 'ARMOR Wire'],
    categoryIds: ['armor-wire'],
    productType: 'Cable',
    heroImage: resolveProductImage('armor-wire'),
    hasImage: false,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: {
          paragraphs: [
            'Type of power cable with reinforcing metal sheath for industrial environments and harsh conditions.',
            'Protective layer made from galvanized steel or stainless steel.',
            'Mechanical resistance against impact, pressure, and environmental damage.',
            'Metal armor protects conductor from physical damage.',
            'Increases safety, reduces fire risk, helps maintain electrical flow.',
            'Applications: Underground installations, industrial surfaces, environments exposed to physical or chemical hazards.'
          ]
        }
      },
      {
        id: 'advantages', type: 'highlights', title: 'Advantages', order: 2,
        content: {
          items: [
            { title: 'Mechanical Protection', description: 'Strong protection against impact, pressure, and corrosion' },
            { title: 'Underground Ready', description: 'Suitable for underground installations and humid environments' },
            { title: 'Chemical Resistant', description: 'Resistant to chemicals and extreme weather' },
            { title: 'High Safety', description: 'High safety and reduced risk of cable damage over time' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Armor Material Options', order: 3,
        content: {
          items: [
            { label: 'Armor Material', value: 'Galvanized Steel / Stainless Steel', unit: '' },
          ]
        }
      },
    ],
    relatedProductIds: ['hta-galvanized-wire'],
  },
];

export const getProductBySlug = (slug: string): ProductDetail | undefined =>
  products.find((p) => p.slug === slug);

export const getProductById = (id: string): ProductDetail | undefined =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (categoryId: string): ProductDetail[] =>
  products.filter((p) =>
    p.categoryIds.includes(categoryId) ||
    p.categoryPath.some((cat) => cat.toLowerCase().includes(categoryId.toLowerCase())) ||
    p.materialFamily.toLowerCase().includes(categoryId.toLowerCase())
  );

export const getRelatedProducts = (ids: string[]): ProductDetail[] =>
  products.filter((p) => ids.includes(p.id));

export const featuredProducts = products.filter((p) => p.inStock).slice(0, 6);