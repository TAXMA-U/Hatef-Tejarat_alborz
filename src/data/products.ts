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
  'aluminum-sheet-5052': 'Aluminum_5052.jpg',
  'aluminum-sheet-6061': 'Aluminum_6061.jpg',
  'aluminum-coil': 'Aluminum_Coll.jpg',
  'aluminum-sheet': 'Aluminum_Sheet.jpg',
  'carbon-steel-angle-bar': 'Carbon_Steel_Angel_Bar.jpg',
  'carbon-steel-checkered-plate': 'Carbon_Steel_Checkered_plate.jpg',
  'cold-rolled-carbon-steel-sheet': 'Cold_Rolled_Carbon_Steel_Sheet.jpg',
  'linear-barbed-wire': 'Linear_Barbed_Wire.jpg',
  'linear-razor-wire': 'Linear_Razor_Wire.jpg',
  'rolled-razor-wire': 'Rolled_Razor_Wire.jpg',
  'stainless-steel-seamless-pipe': 'Stain_Steel_Seamless_Pipe.jpg',
  'industrial-steel-product': 'photo_2026-11-21_00-04-59 (4).jpg',
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
    id: 'hta-pvc-galvanized',
    slug: 'pvc-coated-galvanized-wire',
    name: 'Galvanized Wire with PVC Coating',
    shortDescription: 'Galvanized wire with PVC coating for enhanced corrosion resistance.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Steel Wire Products', 'Coated Wire', 'PVC-Coated Galvanized Wire'],
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
    relatedProductIds: ['hta-chicken-mesh', ],
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
    relatedProductIds: ['hta-hexagonal-mesh'],
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
  {
    id: 'hta-aluminum-sheet-5052',
    slug: 'aluminum-sheet-5052',
    name: 'Aluminum Sheet 5052',
    shortDescription: 'Marine-grade aluminum sheet 5052 with excellent corrosion resistance and weldability.',
    materialFamily: 'Aluminum',
    categoryPath: ['Metals', 'Aluminum', 'Aluminum Semi-Finished Products', 'Sheets & Plates'],
    categoryIds: ['aluminum-sheets'],
    productType: 'Sheet',
    productCode: 'HTA-AL-5052-001',
    heroImage: resolveProductImage('aluminum-sheet-5052'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Aluminum sheet 5052 is a marine-grade aluminum-magnesium alloy known for excellent corrosion resistance, especially in saltwater environments. It offers good weldability, moderate strength, and excellent formability, making it ideal for marine, transportation, and architectural applications.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Corrosion Resistance', description: 'Superior resistance to saltwater and marine environments' },
            { title: 'Weldability', description: 'Excellent weldability using standard welding methods' },
            { title: 'Formability', description: 'Good formability for bending and shaping operations' },
            { title: 'Medium Strength', description: 'Moderate strength suitable for structural and non-structural uses' },
            { title: 'Non-Heat-Treatable', description: 'Strengthened through cold working rather than heat treatment' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Marine', description: 'Boat hulls, marine fittings, and seawater equipment' },
            { title: 'Transportation', description: 'Truck bodies, trailers, and fuel tanks' },
            { title: 'Architecture', description: 'Building facades, roofing, and decorative panels' },
            { title: 'Chemical Equipment', description: 'Tanks and containers for chemical processing' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Alloy', value: '5052 (Al-Mg)', unit: '' },
            { label: 'Temper', value: 'H32, H34, H36, H38', unit: '' },
            { label: 'Thickness', value: '0.5 – 20.0', unit: 'mm' },
            { label: 'Width', value: '1000 – 1500', unit: 'mm' },
            { label: 'Length', value: '2000 – 6000', unit: 'mm' },
            { label: 'Tensile Strength', value: '210 – 260', unit: 'MPa' },
            { label: 'Yield Strength', value: '130 – 180', unit: 'MPa' },
            { label: 'Elongation', value: '12 – 18', unit: '%' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 5,
        content: {
          availability: 'available',
          basis: 'heat-analysis',
          analysisId: 'Analysis ID #AL-5052-001',
          columns: [
            { key: 'element', label: 'Element' },
            { key: 'symbol', label: 'Symbol' },
            { key: 'value', label: 'Composition', unit: '%' }
          ],
          rows: [
            { element: 'Aluminum', symbol: 'Al', value: 'Balance' },
            { element: 'Magnesium', symbol: 'Mg', value: '2.2 – 2.8' },
            { element: 'Chromium', symbol: 'Cr', value: '0.15 – 0.35' },
            { element: 'Iron', symbol: 'Fe', value: '0.40 max' },
            { element: 'Silicon', symbol: 'Si', value: '0.25 max' },
            { element: 'Copper', symbol: 'Cu', value: '0.10 max' },
            { element: 'Manganese', symbol: 'Mn', value: '0.10 max' },
            { element: 'Zinc', symbol: 'Zn', value: '0.10 max' },
            { element: 'Titanium', symbol: 'Ti', value: '0.10 max' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 6,
        content: { paragraphs: ['Sheets packed in wooden crates with waterproof paper and plastic film interleaving. Secured with steel straps for safe transport.'] }
      },
    ],
    relatedProductIds: ['hta-aluminum-sheet-6061', 'hta-aluminum-sheet'],
  },
  {
    id: 'hta-aluminum-sheet-6061',
    slug: 'aluminum-sheet-6061',
    name: 'Aluminum Sheet 6061',
    shortDescription: 'Structural-grade aluminum sheet 6061 with high strength and good corrosion resistance.',
    materialFamily: 'Aluminum',
    categoryPath: ['Metals', 'Aluminum', 'Aluminum Semi-Finished Products', 'Sheets & Plates'],
    categoryIds: ['aluminum-sheets'],
    productType: 'Sheet',
    productCode: 'HTA-AL-6061-001',
    heroImage: resolveProductImage('aluminum-sheet-6061'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Aluminum sheet 6061 is a heat-treatable aluminum-magnesium-silicon alloy offering high strength, good corrosion resistance, and excellent machinability. It is one of the most versatile aluminum alloys for structural, automotive, and general engineering applications.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'High Strength', description: 'Heat-treatable alloy with good mechanical properties' },
            { title: 'Corrosion Resistance', description: 'Good resistance to atmospheric and chemical corrosion' },
            { title: 'Machinability', description: 'Excellent machinability in T6 temper' },
            { title: 'Weldability', description: 'Good weldability with standard techniques' },
            { title: 'Heat Treatable', description: 'Strength can be increased through heat treatment' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Structural', description: 'Frames, brackets, and structural components' },
            { title: 'Automotive', description: 'Vehicle parts and automotive components' },
            { title: 'Aerospace', description: 'Aircraft parts and aerospace structures' },
            { title: 'General Engineering', description: 'Machinery parts and engineering components' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Alloy', value: '6061 (Al-Mg-Si)', unit: '' },
            { label: 'Temper', value: 'T4, T6, T651', unit: '' },
            { label: 'Thickness', value: '0.5 – 25.0', unit: 'mm' },
            { label: 'Width', value: '1000 – 1524', unit: 'mm' },
            { label: 'Length', value: '2000 – 6000', unit: 'mm' },
            { label: 'Tensile Strength (T6)', value: '290 – 310', unit: 'MPa' },
            { label: 'Yield Strength (T6)', value: '240 – 275', unit: 'MPa' },
            { label: 'Elongation (T6)', value: '8 – 12', unit: '%' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 5,
        content: {
          availability: 'available',
          basis: 'heat-analysis',
          analysisId: 'Analysis ID #AL-6061-001',
          columns: [
            { key: 'element', label: 'Element' },
            { key: 'symbol', label: 'Symbol' },
            { key: 'value', label: 'Composition', unit: '%' }
          ],
          rows: [
            { element: 'Aluminum', symbol: 'Al', value: 'Balance' },
            { element: 'Magnesium', symbol: 'Mg', value: '0.8 – 1.2' },
            { element: 'Silicon', symbol: 'Si', value: '0.4 – 0.8' },
            { element: 'Copper', symbol: 'Cu', value: '0.15 – 0.40' },
            { element: 'Chromium', symbol: 'Cr', value: '0.04 – 0.35' },
            { element: 'Iron', symbol: 'Fe', value: '0.7 max' },
            { element: 'Manganese', symbol: 'Mn', value: '0.15 max' },
            { element: 'Zinc', symbol: 'Zn', value: '0.25 max' },
            { element: 'Titanium', symbol: 'Ti', value: '0.15 max' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 6,
        content: { paragraphs: ['Sheets packed in wooden cases with protective wrapping. Strap-secured for secure handling and shipping.'] }
      },
    ],
    relatedProductIds: ['hta-aluminum-sheet-5052', 'hta-aluminum-sheet'],
  },
  {
    id: 'hta-aluminum-coil',
    slug: 'aluminum-coil',
    name: 'Aluminum Coil',
    shortDescription: 'Rolled aluminum coil in various alloys for continuous processing and manufacturing.',
    materialFamily: 'Aluminum',
    categoryPath: ['Metals', 'Aluminum', 'Aluminum Semi-Finished Products', 'Coils'],
    categoryIds: ['aluminum-coils'],
    productType: 'Coil',
    productCode: 'HTA-AL-COIL-001',
    heroImage: resolveProductImage('aluminum-coil'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Aluminum coil is a continuous rolled sheet wound into a coil, available in various alloys including 1000, 3000, 5000, and 8000 series. Used in continuous manufacturing processes for building materials, packaging, and automotive components.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Continuous Supply', description: 'Long continuous lengths for uninterrupted production' },
            { title: 'Multiple Alloys', description: 'Available in 1000, 3000, 5000, and 8000 series alloys' },
            { title: 'Surface Finish', description: 'Mill finish, coated, or painted options available' },
            { title: 'Lightweight', description: 'Low weight with high strength-to-weight ratio' },
            { title: 'Recyclable', description: 'Fully recyclable with minimal environmental impact' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Building Materials', description: 'Roofing, cladding, and facade panels' },
            { title: 'Packaging', description: 'Food packaging, foil, and containers' },
            { title: 'Automotive', description: 'Heat exchangers and automotive trim' },
            { title: 'Electrical', description: 'Transformer windings and busbars' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Alloy Series', value: '1000, 3000, 5000, 8000', unit: '' },
            { label: 'Thickness', value: '0.2 – 4.0', unit: 'mm' },
            { label: 'Width', value: '500 – 1600', unit: 'mm' },
            { label: 'Coil ID', value: '300 – 600', unit: 'mm' },
            { label: 'Coil OD', value: 'Up to 2500', unit: 'mm' },
            { label: 'Coil Weight', value: 'Up to 5000', unit: 'kg' },
            { label: 'Temper', value: 'O, H12, H14, H16, H18, H22, H24', unit: '' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 5,
        content: {
          availability: 'upon_request',
          basis: 'heat-analysis',
          analysisId: 'Analysis ID #AL-COIL-001',
          columns: [
            { key: 'element', label: 'Element' },
            { key: 'symbol', label: 'Symbol' },
            { key: 'value', label: 'Composition', unit: '%' }
          ],
          rows: [
            { element: 'Aluminum', symbol: 'Al', value: 'Balance' },
            { element: 'Varies by alloy', symbol: 'Varies', value: 'See mill certificate' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 6,
        content: { paragraphs: ['Coils wrapped in waterproof paper and plastic film, secured with steel straps, palletized with wooden supports for safe handling.'] }
      },
    ],
    relatedProductIds: ['hta-aluminum-sheet-5052', 'hta-aluminum-sheet-6061'],
  },
  {
    id: 'hta-aluminum-sheet',
    slug: 'aluminum-sheet',
    name: 'Aluminum Sheet',
    shortDescription: 'General-purpose aluminum sheet in various alloys and tempers for fabrication and manufacturing.',
    materialFamily: 'Aluminum',
    categoryPath: ['Metals', 'Aluminum', 'Aluminum Semi-Finished Products', 'Sheets & Plates'],
    categoryIds: ['aluminum-sheets'],
    productType: 'Sheet',
    productCode: 'HTA-AL-SHEET-001',
    heroImage: resolveProductImage('aluminum-sheet'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['General-purpose aluminum sheet available in multiple alloys and tempers. Suitable for fabrication, stamping, forming, and general manufacturing where lightweight and corrosion-resistant material is required.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Versatile', description: 'Available in multiple alloys and tempers' },
            { title: 'Lightweight', description: 'Low density with good strength-to-weight ratio' },
            { title: 'Corrosion Resistant', description: 'Natural oxide layer provides atmospheric corrosion resistance' },
            { title: 'Formable', description: 'Good formability for stamping and bending' },
            { title: 'Conductive', description: 'Good thermal and electrical conductivity' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Fabrication', description: 'General sheet metal fabrication and forming' },
            { title: 'Signage', description: 'Signs, nameplates, and display panels' },
            { title: 'Appliances', description: 'Home appliance panels and enclosures' },
            { title: 'HVAC', description: 'Air conditioning and ventilation components' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Alloy', value: '1100, 3003, 5005, 5052, 6061', unit: '' },
            { label: 'Temper', value: 'O, H12, H14, H16, H18, H22, H24, T4, T6', unit: '' },
            { label: 'Thickness', value: '0.3 – 30.0', unit: 'mm' },
            { label: 'Width', value: '500 – 1524', unit: 'mm' },
            { label: 'Length', value: '1000 – 6000', unit: 'mm' },
            { label: 'Surface', value: 'Mill finish, brushed, or anodized', unit: '' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 5,
        content: {
          availability: 'upon_request',
          basis: 'heat-analysis',
          analysisId: 'Analysis ID #AL-SHEET-001',
          columns: [
            { key: 'element', label: 'Element' },
            { key: 'symbol', label: 'Symbol' },
            { key: 'value', label: 'Composition', unit: '%' }
          ],
          rows: [
            { element: 'Aluminum', symbol: 'Al', value: 'Balance' },
            { element: 'Varies by alloy', symbol: 'Varies', value: 'See mill certificate' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 6,
        content: { paragraphs: ['Sheets packed with paper interleaving in wooden crates, secured with steel bands for safe transport.'] }
      },
    ],
    relatedProductIds: ['hta-aluminum-sheet-5052', 'hta-aluminum-sheet-6061', 'hta-aluminum-coil'],
  },
  {
    id: 'hta-carbon-steel-angle-bar',
    slug: 'carbon-steel-angle-bar',
    name: 'Carbon Steel Angle Bar',
    shortDescription: 'L-shaped carbon steel angle bar for structural support, framing, and construction applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Long Steel Products', 'Angles & Channels'],
    categoryIds: ['angles'],
    productType: 'Angle',
    productCode: 'HTA-CS-ANGLE-001',
    heroImage: resolveProductImage('carbon-steel-angle-bar'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Carbon steel angle bar is an L-shaped structural steel section with two legs at 90 degrees to each other. Available in equal and unequal leg configurations, used for structural support, framing, brackets, and construction reinforcement.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Structural Strength', description: 'High strength-to-weight ratio for load-bearing applications' },
            { title: 'Equal & Unequal Legs', description: 'Available in equal-leg and unequal-leg configurations' },
            { title: 'Easy Fabrication', description: 'Can be cut, drilled, welded, and bolted easily' },
            { title: 'Cost Effective', description: 'Economical structural section for general construction' },
            { title: 'Standard Lengths', description: 'Available in standard lengths of 6, 9, 12 meters' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Construction', description: 'Building frames, supports, and brackets' },
            { title: 'Manufacturing', description: 'Machine frames and equipment supports' },
            { title: 'Infrastructure', description: 'Bridge components and infrastructure projects' },
            { title: 'Furniture', description: 'Metal furniture frames and shelving' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Standard', value: 'ASTM A36, GB/T 706, JIS G3192', unit: '' },
            { label: 'Grade', value: 'SS400, A36, S235JR', unit: '' },
            { label: 'Leg Size', value: '20×20 – 200×200', unit: 'mm' },
            { label: 'Thickness', value: '3 – 20', unit: 'mm' },
            { label: 'Length', value: '6000 – 12000', unit: 'mm' },
            { label: 'Surface', value: 'Hot rolled, black, or galvanized', unit: '' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Bundles secured with steel strips, packed with waterproof paper. Shipped by truck or container.'] }
      },
    ],
    relatedProductIds: ['hta-cold-rolled-carbon-steel-sheet', 'hta-stainless-steel-seamless-pipe'],
  },
  {
    id: 'hta-carbon-steel-checkered-plate',
    slug: 'carbon-steel-checkered-plate',
    name: 'Carbon Steel Checkered Plate',
    shortDescription: 'Diamond-pattern carbon steel checkered plate for anti-slip flooring and industrial platforms.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Flat Steel Products', 'Checkered Plates'],
    categoryIds: ['checkered-plates'],
    productType: 'Plate',
    productCode: 'HTA-CS-CHECKER-001',
    heroImage: resolveProductImage('carbon-steel-checkered-plate'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Carbon steel checkered plate features a raised diamond pattern on one side that provides anti-slip surface. Used for flooring, stair treads, platforms, ramps, and industrial walkways where slip resistance is required.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Anti-Slip Surface', description: 'Raised diamond pattern provides excellent slip resistance' },
            { title: 'High Strength', description: 'Durable carbon steel construction for heavy loads' },
            { title: 'Wear Resistant', description: 'Resists wear from foot traffic and equipment' },
            { title: 'Easy Installation', description: 'Can be bolted or welded to supporting structure' },
            { title: 'Versatile', description: 'Suitable for indoor and outdoor applications' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Flooring', description: 'Factory floors, workshop flooring, and walkways' },
            { title: 'Stair Treads', description: 'Anti-slip stair treads and steps' },
            { title: 'Platforms', description: 'Industrial platforms and mezzanine floors' },
            { title: 'Transportation', description: 'Truck beds, trailer floors, and ramps' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Standard', value: 'ASTM A786, GB/T 3271, JIS G3144', unit: '' },
            { label: 'Grade', value: 'SS400, A36, S235JR', unit: '' },
            { label: 'Thickness', value: '2.0 – 12.0', unit: 'mm' },
            { label: 'Width', value: '1000 – 2000', unit: 'mm' },
            { label: 'Length', value: '2000 – 8000', unit: 'mm' },
            { label: 'Pattern', value: 'Diamond (checkered)', unit: '' },
            { label: 'Surface', value: 'Hot rolled, black, or galvanized', unit: '' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Plates stacked and secured with steel bands, wrapped in waterproof paper. Wooden pallet packaging available on request.'] }
      },
    ],
    relatedProductIds: ['hta-cold-rolled-carbon-steel-sheet', 'hta-carbon-steel-angle-bar'],
  },
  {
    id: 'hta-cold-rolled-carbon-steel-sheet',
    slug: 'cold-rolled-carbon-steel-sheet',
    name: 'Cold Rolled Carbon Steel Sheet',
    shortDescription: 'Cold-rolled carbon steel sheet with smooth surface finish and precise dimensional accuracy.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Flat Steel Products', 'Cold-Rolled Sheets & Coils'],
    categoryIds: ['cold-rolled'],
    productType: 'Sheet',
    productCode: 'HTA-CS-CR-001',
    heroImage: resolveProductImage('cold-rolled-carbon-steel-sheet'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Cold rolled carbon steel sheet is produced by rolling hot-rolled steel at room temperature, resulting in a smooth surface finish, precise thickness tolerance, and improved mechanical properties. Ideal for applications requiring good surface quality and dimensional accuracy.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Smooth Surface', description: 'Smooth, clean surface suitable for painting and coating' },
            { title: 'Precise Dimensions', description: 'Tight thickness and width tolerances' },
            { title: 'Improved Strength', description: 'Higher strength and hardness than hot-rolled sheet' },
            { title: 'Formability', description: 'Good formability for stamping and drawing operations' },
            { title: 'Paint Ready', description: 'Surface ready for painting, powder coating, or plating' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Automotive', description: 'Automotive body panels and components' },
            { title: 'Appliances', description: 'Home appliance panels and enclosures' },
            { title: 'Furniture', description: 'Office furniture and metal furniture' },
            { title: 'Electrical', description: 'Electrical enclosures and cabinets' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Standard', value: 'ASTM A1008, GB/T 5213, JIS G3141', unit: '' },
            { label: 'Grade', value: 'SPCC, SPCD, SPCE, DC01', unit: '' },
            { label: 'Thickness', value: '0.2 – 4.0', unit: 'mm' },
            { label: 'Width', value: '600 – 1500', unit: 'mm' },
            { label: 'Length', value: '1000 – 6000', unit: 'mm' },
            { label: 'Surface', value: 'Cold rolled, matte or bright finish', unit: '' },
            { label: 'Temper', value: 'Hard, quarter-hard, half-hard, soft', unit: '' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Sheets packed with anti-rust paper and plastic film interleaving, secured with steel straps on wooden pallets.'] }
      },
    ],
    relatedProductIds: ['hta-carbon-steel-checkered-plate', 'hta-carbon-steel-angle-bar'],
  },
  {
    id: 'hta-linear-barbed-wire',
    slug: 'linear-barbed-wire',
    name: 'Linear Barbed Wire',
    shortDescription: 'Linear barbed wire with sharp barbs at regular intervals for security fencing and perimeter protection.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Barbed & Razor Wire', 'Barbed Wire', 'Linear Barbed Wire'],
    categoryIds: ['linear-barbed'],
    productType: 'Wire',
    productCode: 'HTA-BW-LINEAR-001',
    heroImage: resolveProductImage('linear-barbed-wire'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Linear barbed wire consists of a central steel wire with sharp barbs twisted at regular intervals along its length. Used for security fencing, perimeter protection, agricultural fencing, and livestock control where a visible deterrent is required.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Security Deterrent', description: 'Sharp barbs provide effective intrusion deterrent' },
            { title: 'Durable', description: 'Galvanized steel construction resists rust and weathering' },
            { title: 'Easy Installation', description: 'Can be strung on posts or attached to existing fencing' },
            { title: 'Cost Effective', description: 'Economical security solution for large perimeters' },
            { title: 'Low Maintenance', description: 'Minimal maintenance required after installation' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Agriculture', description: 'Livestock fencing and pasture boundaries' },
            { title: 'Security', description: 'Perimeter security for industrial and commercial properties' },
            { title: 'Prisons', description: 'Correctional facility perimeter fencing' },
            { title: 'Military', description: 'Military base boundary and training area fencing' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Core Wire', value: 'Galvanized steel Ø 2.5 – 3.5', unit: 'mm' },
            { label: 'Barb Wire', value: 'Galvanized steel Ø 1.5 – 2.0', unit: 'mm' },
            { label: 'Barb Spacing', value: '75 – 150', unit: 'mm' },
            { label: 'Barb Type', value: '2-point or 4-point', unit: '' },
            { label: 'Coating', value: 'Hot-dip galvanized or PVC coated', unit: '' },
            { label: 'Coil Length', value: '250 – 500', unit: 'm' },
            { label: 'Coil Weight', value: '15 – 35', unit: 'kg' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Coils wound tightly and secured with wire ties, wrapped in waterproof paper and plastic film.'] }
      },
    ],
    relatedProductIds: ['hta-linear-razor-wire', 'hta-rolled-razor-wire'],
  },
  {
    id: 'hta-linear-razor-wire',
    slug: 'linear-razor-wire',
    name: 'Linear Razor Wire',
    shortDescription: 'Linear razor wire with sharp razor blades for high-security fencing and perimeter protection.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Barbed & Razor Wire', 'Razor Wire', 'Linear Razor Wire'],
    categoryIds: ['linear-razor'],
    productType: 'Wire',
    productCode: 'HTA-RW-LINEAR-001',
    heroImage: resolveProductImage('linear-razor-wire'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Linear razor wire features sharp razor blades formed from steel strip, clipped or locked to a central core wire at regular intervals. Provides high-level security deterrent for prisons, military installations, industrial facilities, and high-security perimeters.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'High Security', description: 'Sharp razor blades provide maximum intrusion deterrent' },
            { title: 'Sharp Blades', description: 'Precision-formed razor blades with cutting edges' },
            { title: 'Galvanized', description: 'Hot-dip galvanized for weather resistance' },
            { title: 'High Tensile', description: 'High-tensile steel core resists cutting and bending' },
            { title: 'Visible Deterrent', description: 'Clear visual warning to deter unauthorized access' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Prisons', description: 'Correctional facility and detention center perimeters' },
            { title: 'Military', description: 'Military bases and secure installations' },
            { title: 'Industrial', description: 'Industrial plant and warehouse perimeters' },
            { title: 'Government', description: 'Government buildings and sensitive facilities' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Blade Type', value: 'BTO-10, BTO-22, BTO-30', unit: '' },
            { label: 'Core Wire', value: 'Galvanized steel Ø 2.5 – 3.5', unit: 'mm' },
            { label: 'Blade Width', value: '15 – 30', unit: 'mm' },
            { label: 'Blade Spacing', value: '100 – 150', unit: 'mm' },
            { label: 'Coating', value: 'Hot-dip galvanized', unit: '' },
            { label: 'Coil Length', value: '250 – 500', unit: 'm' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Coils wrapped in protective material, secured with straps, packed in wooden crates or on pallets. Handle with protective gloves.'] }
      },
    ],
    relatedProductIds: ['hta-linear-barbed-wire', 'hta-rolled-razor-wire'],
  },
  {
    id: 'hta-rolled-razor-wire',
    slug: 'rolled-razor-wire',
    name: 'Rolled Razor Wire',
    shortDescription: 'Rolled razor wire (concertina) in expandable coils for high-security fencing applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Wire Mesh & Fencing', 'Barbed & Razor Wire', 'Razor Wire', 'Rolled Razor Wire'],
    categoryIds: ['rolled-razor'],
    productType: 'Wire',
    productCode: 'HTA-RW-ROLLED-001',
    heroImage: resolveProductImage('rolled-razor-wire'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Rolled razor wire (concertina wire) consists of razor wire welded or clipped to vertical support wires in coiled form. Expands to form a concertina barrier that provides high-level security for perimeters, borders, and restricted areas.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Expandable', description: 'Concertina design expands to form continuous barrier' },
            { title: 'High Security', description: 'Maximum deterrent for high-security installations' },
            { title: 'Rapid Deployment', description: 'Quick installation and deployment in field conditions' },
            { title: 'Galvanized', description: 'Hot-dip galvanized for corrosion resistance' },
            { title: 'Compact Storage', description: 'Coils store and transport compactly when collapsed' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Border Security', description: 'Border and boundary security installations' },
            { title: 'Prisons', description: 'High-security prison perimeters and yards' },
            { title: 'Military', description: 'Military bases and combat zone perimeters' },
            { title: 'Critical Infrastructure', description: 'Power plants, refineries, and critical facilities' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Coil Diameter', value: '450 – 700', unit: 'mm' },
            { label: 'Expanded Length', value: '8 – 15', unit: 'm per coil' },
            { label: 'Blade Type', value: 'BTO-22, BTO-30, CBT-65', unit: '' },
            { label: 'Core Wire', value: 'Galvanized steel Ø 2.5 – 3.5', unit: 'mm' },
            { label: 'Coating', value: 'Hot-dip galvanized', unit: '' },
            { label: 'Weight per Coil', value: '18 – 35', unit: 'kg' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Coils collapsed and secured with wire ties, wrapped in protective material, packed in wooden crates for safe transport. Handle with protective gloves.'] }
      },
    ],
    relatedProductIds: ['hta-linear-barbed-wire', 'hta-linear-razor-wire'],
  },
  {
    id: 'hta-stainless-steel-seamless-pipe',
    slug: 'stainless-steel-seamless-pipe',
    name: 'Stainless Steel Seamless Pipe',
    shortDescription: 'Seamless stainless steel pipe for high-pressure, corrosive, and high-temperature applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Alloy & Specialty Steels', 'Stainless Steel', 'Stainless Pipes & Tubes'],
    categoryIds: ['ss-pipes'],
    productType: 'Pipe',
    productCode: 'HTA-SS-SEAMLESS-001',
    heroImage: resolveProductImage('stainless-steel-seamless-pipe'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Stainless steel seamless pipe is manufactured without a weld seam, providing uniform strength and excellent resistance to pressure, corrosion, and high temperatures. Used in oil & gas, chemical processing, food & beverage, and pharmaceutical industries.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Seamless Construction', description: 'No weld seam for uniform strength and reliability' },
            { title: 'Corrosion Resistant', description: 'Excellent resistance to chemicals, acids, and saltwater' },
            { title: 'High Pressure Rating', description: 'Suitable for high-pressure fluid and gas transport' },
            { title: 'Temperature Resistant', description: 'Maintains strength at elevated temperatures' },
            { title: 'Hygienic', description: 'Smooth interior suitable for food and pharmaceutical applications' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Oil & Gas', description: 'Oil and gas pipelines and processing equipment' },
            { title: 'Chemical', description: 'Chemical processing and petrochemical plants' },
            { title: 'Food & Beverage', description: 'Food processing and beverage production lines' },
            { title: 'Pharmaceutical', description: 'Pharmaceutical manufacturing equipment' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Standard', value: 'ASTM A312, ASTM A790, GB/T 14975', unit: '' },
            { label: 'Grade', value: '304, 304L, 316, 316L, 321', unit: '' },
            { label: 'Outer Diameter', value: '6 – 325', unit: 'mm' },
            { label: 'Wall Thickness', value: '1.0 – 20.0', unit: 'mm' },
            { label: 'Length', value: '6000 – 12000', unit: 'mm' },
            { label: 'Finish', value: 'Pickled, annealed, or polished', unit: '' },
            { label: 'End Type', value: 'Plain end, beveled, or threaded', unit: '' },
          ]
        }
      },
      {
        id: 'chemical', type: 'chemicalAnalysis', title: 'Chemical Analysis', order: 5,
        content: {
          availability: 'available',
          basis: 'heat-analysis',
          analysisId: 'Analysis ID #SS-SEAMLESS-001',
          columns: [
            { key: 'element', label: 'Element' },
            { key: 'symbol', label: 'Symbol' },
            { key: 'value', label: 'Composition', unit: '%' }
          ],
          rows: [
            { element: 'Grade 304 – Carbon', symbol: 'C', value: '0.07 max' },
            { element: 'Grade 304 – Chromium', symbol: 'Cr', value: '18.0 – 20.0' },
            { element: 'Grade 304 – Nickel', symbol: 'Ni', value: '8.0 – 10.5' },
            { element: 'Grade 304 – Manganese', symbol: 'Mn', value: '2.0 max' },
            { element: 'Grade 304 – Silicon', symbol: 'Si', value: '1.0 max' },
            { element: 'Grade 316 – Carbon', symbol: 'C', value: '0.08 max' },
            { element: 'Grade 316 – Chromium', symbol: 'Cr', value: '16.0 – 18.0' },
            { element: 'Grade 316 – Nickel', symbol: 'Ni', value: '10.0 – 14.0' },
            { element: 'Grade 316 – Molybdenum', symbol: 'Mo', value: '2.0 – 3.0' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 6,
        content: { paragraphs: ['Pipes bundled with steel straps, ends protected with plastic caps. Wooden crate or pallet packaging for safe ocean or land transport.'] }
      },
    ],
    relatedProductIds: ['hta-carbon-steel-angle-bar', 'hta-stainless-steel-seamless-pipe'],
  },
  {
    id: 'hta-industrial-steel-product',
    slug: 'industrial-steel-product',
    name: 'Industrial Steel Product',
    shortDescription: 'Industrial steel product for general manufacturing, fabrication, and construction applications.',
    materialFamily: 'Iron & Steel',
    categoryPath: ['Metals', 'Iron & Steel', 'Flat Steel Products', 'Hot-Rolled Sheets & Coils'],
    categoryIds: ['hot-rolled'],
    productType: 'Sheet',
    productCode: 'HTA-IND-STEEL-001',
    heroImage: resolveProductImage('industrial-steel-product'),
    hasImage: true,
    inStock: true,
    ctaText: 'Inquire About This Product',
    contentBlocks: [
      {
        id: 'overview', type: 'richText', title: 'Product Overview', order: 1,
        content: { paragraphs: ['Industrial steel product suitable for general manufacturing, fabrication, construction, and structural applications. Available in various grades and dimensions to meet project requirements.'] }
      },
      {
        id: 'highlights', type: 'highlights', title: 'Product Highlights', order: 2,
        content: {
          items: [
            { title: 'Versatile', description: 'Suitable for multiple industrial applications' },
            { title: 'Structural', description: 'Good structural properties for load-bearing uses' },
            { title: 'Fabrication Ready', description: 'Can be cut, welded, drilled, and formed' },
            { title: 'Cost Effective', description: 'Economical solution for industrial projects' },
            { title: 'Available', description: 'Readily available in various sizes and grades' },
          ]
        }
      },
      {
        id: 'applications', type: 'applications', title: 'Applications', order: 3,
        content: {
          items: [
            { title: 'Manufacturing', description: 'General manufacturing and fabrication projects' },
            { title: 'Construction', description: 'Building construction and structural frameworks' },
            { title: 'Infrastructure', description: 'Infrastructure and public works projects' },
            { title: 'Equipment', description: 'Industrial equipment and machinery frames' },
          ]
        }
      },
      {
        id: 'specs', type: 'technicalSpecifications', title: 'Technical Specifications', order: 4,
        content: {
          items: [
            { label: 'Standard', value: 'ASTM A36, GB/T 700, JIS G3101', unit: '' },
            { label: 'Grade', value: 'SS400, A36, Q235', unit: '' },
            { label: 'Thickness', value: '1.6 – 50.0', unit: 'mm' },
            { label: 'Width', value: '900 – 2000', unit: 'mm' },
            { label: 'Length', value: '2000 – 12000', unit: 'mm' },
            { label: 'Surface', value: 'Hot rolled, black, or pickled', unit: '' },
          ]
        }
      },
      {
        id: 'packaging', type: 'packagingAndDelivery', title: 'Packaging', order: 5,
        content: { paragraphs: ['Sheets or plates packed with waterproof paper, secured with steel bands, on wooden pallets for safe transport.'] }
      },
    ],
    relatedProductIds: ['hta-carbon-steel-angle-bar', 'hta-cold-rolled-carbon-steel-sheet'],
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