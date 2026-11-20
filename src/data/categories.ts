export type Category = {
  id: string;
  name: string;
  slug: string;
  parentId?: string;
  level: number;
  sortOrder: number;
  status: 'active' | 'planned_empty';
  children?: Category[];
};

export const categories: Category[] = [
  // ===== METALS =====
  {
    id: 'metals', name: 'Metals', slug: 'metals', level: 1, sortOrder: 1, status: 'active',
    children: [
      // ===== COPPER =====
      {
        id: 'copper', name: 'Copper', slug: 'copper', parentId: 'metals', level: 2, sortOrder: 1, status: 'active',
        children: [
          {
            id: 'copper-electrical-conductors', name: 'Electrical Conductors', slug: 'electrical-conductors', parentId: 'copper', level: 3, sortOrder: 1, status: 'active',
            children: [
              { id: 'copper-busbars', name: 'Busbars', slug: 'busbars', parentId: 'copper-electrical-conductors', level: 4, sortOrder: 1, status: 'active' },
              { id: 'copper-strips', name: 'Strips', slug: 'strips', parentId: 'copper-electrical-conductors', level: 4, sortOrder: 2, status: 'active' },
              { id: 'copper-wires', name: 'Wires', slug: 'wires', parentId: 'copper-electrical-conductors', level: 4, sortOrder: 3, status: 'active' },
              { id: 'copper-rods', name: 'Rods', slug: 'rods', parentId: 'copper-electrical-conductors', level: 4, sortOrder: 4, status: 'active' },
              { id: 'copper-bars', name: 'Bars', slug: 'bars', parentId: 'copper-electrical-conductors', level: 4, sortOrder: 5, status: 'active' },
            ],
          },
          {
            id: 'copper-connection', name: 'Connection & Earthing Components', slug: 'connection-earthing', parentId: 'copper', level: 3, sortOrder: 2, status: 'active',
            children: [
              {
                id: 'copper-clamps', name: 'Clamps', slug: 'clamps', parentId: 'copper-connection', level: 4, sortOrder: 1, status: 'active',
                children: [
                  { id: 'copper-c-h-clamps', name: 'C & H Clamps', slug: 'c-h-clamps', parentId: 'copper-clamps', level: 5, sortOrder: 1, status: 'active' },
                ],
              },
            ],
          },
          {
            id: 'copper-custom', name: 'Custom / Special Products', slug: 'custom-special', parentId: 'copper', level: 3, sortOrder: 3, status: 'active',
            children: [
              { id: 'copper-special-sections', name: 'Special Sections', slug: 'special-sections', parentId: 'copper-custom', level: 4, sortOrder: 1, status: 'active' },
            ],
          },
        ],
      },
      // ===== ALUMINUM =====
      {
        id: 'aluminum', name: 'Aluminum', slug: 'aluminum', parentId: 'metals', level: 2, sortOrder: 2, status: 'active',
        children: [
          {
            id: 'aluminum-primary', name: 'Primary Aluminum', slug: 'primary-aluminum', parentId: 'aluminum', level: 3, sortOrder: 1, status: 'active',
            children: [
              { id: 'aluminum-ingots', name: 'Ingots', slug: 'ingots', parentId: 'aluminum-primary', level: 4, sortOrder: 1, status: 'active' },
            ],
          },
          {
            id: 'aluminum-semi', name: 'Aluminum Semi-Finished Products', slug: 'semi-finished', parentId: 'aluminum', level: 3, sortOrder: 2, status: 'planned_empty',
            children: [
              { id: 'aluminum-sheets', name: 'Sheets & Plates', slug: 'sheets-plates', parentId: 'aluminum-semi', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'aluminum-coils', name: 'Coils', slug: 'coils', parentId: 'aluminum-semi', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'aluminum-extrusions', name: 'Extrusions', slug: 'extrusions', parentId: 'aluminum-semi', level: 4, sortOrder: 3, status: 'planned_empty' },
              { id: 'aluminum-bars-rods', name: 'Bars & Rods', slug: 'bars-rods', parentId: 'aluminum-semi', level: 4, sortOrder: 4, status: 'planned_empty' },
              { id: 'aluminum-tubes', name: 'Tubes & Pipes', slug: 'tubes-pipes', parentId: 'aluminum-semi', level: 4, sortOrder: 5, status: 'planned_empty' },
            ],
          },
          {
            id: 'aluminum-alloys', name: 'Aluminum Alloys', slug: 'alloys', parentId: 'aluminum', level: 3, sortOrder: 3, status: 'planned_empty',
            children: [
              { id: 'aluminum-casting', name: 'Casting Alloys', slug: 'casting-alloys', parentId: 'aluminum-alloys', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'aluminum-wrought', name: 'Wrought Alloys', slug: 'wrought-alloys', parentId: 'aluminum-alloys', level: 4, sortOrder: 2, status: 'planned_empty' },
            ],
          },
        ],
      },
      // ===== IRON & STEEL =====
      {
        id: 'iron-steel', name: 'Iron & Steel', slug: 'iron-steel', parentId: 'metals', level: 2, sortOrder: 3, status: 'active',
        children: [
          {
            id: 'steel-raw', name: 'Iron Ore & Raw Materials', slug: 'raw-materials', parentId: 'iron-steel', level: 3, sortOrder: 1, status: 'planned_empty',
            children: [
              { id: 'iron-ore', name: 'Iron Ore', slug: 'iron-ore', parentId: 'steel-raw', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'iron-concentrate', name: 'Iron Concentrate', slug: 'iron-concentrate', parentId: 'steel-raw', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'pellet-sponge', name: 'Pellet & Sponge Iron', slug: 'pellet-sponge', parentId: 'steel-raw', level: 4, sortOrder: 3, status: 'planned_empty' },
            ],
          },
          {
            id: 'steel-wire', name: 'Steel Wire Products', slug: 'steel-wire', parentId: 'iron-steel', level: 3, sortOrder: 2, status: 'active',
            children: [
              {
                id: 'steel-general-wire', name: 'General Wire', slug: 'general-wire', parentId: 'steel-wire', level: 4, sortOrder: 1, status: 'active',
                children: [
                  { id: 'iron-wire', name: 'Iron Wire', slug: 'iron-wire', parentId: 'steel-general-wire', level: 5, sortOrder: 1, status: 'active' },
                ],
              },
              {
                id: 'steel-heat-treated', name: 'Heat-Treated Wire', slug: 'heat-treated', parentId: 'steel-wire', level: 4, sortOrder: 2, status: 'active',
                children: [
                  { id: 'annealed-wire', name: 'Annealed Wire', slug: 'annealed-wire', parentId: 'steel-heat-treated', level: 5, sortOrder: 1, status: 'active' },
                ],
              },
              {
                id: 'steel-coated', name: 'Coated Wire', slug: 'coated-wire', parentId: 'steel-wire', level: 4, sortOrder: 3, status: 'active',
                children: [
                  {
                    id: 'galvanized-wire', name: 'Galvanized Wire', slug: 'galvanized-wire', parentId: 'steel-coated', level: 5, sortOrder: 1, status: 'active',
                    children: [
                      { id: 'pvc-galvanized', name: 'PVC-Coated Galvanized Wire', slug: 'pvc-coated', parentId: 'galvanized-wire', level: 6, sortOrder: 1, status: 'active' },
                    ],
                  },
                ],
              },
              {
                id: 'steel-reinforcement', name: 'Reinforcement Wire', slug: 'reinforcement', parentId: 'steel-wire', level: 4, sortOrder: 4, status: 'active',
                children: [
                  { id: 'ribbed-wire', name: 'Ribbed Wire', slug: 'ribbed-wire', parentId: 'steel-reinforcement', level: 5, sortOrder: 1, status: 'active' },
                ],
              },
            ],
          },
          {
            id: 'steel-mesh', name: 'Wire Mesh & Fencing', slug: 'wire-mesh', parentId: 'iron-steel', level: 3, sortOrder: 3, status: 'active',
            children: [
              {
                id: 'mesh-woven', name: 'Woven Mesh', slug: 'woven-mesh', parentId: 'steel-mesh', level: 4, sortOrder: 1, status: 'active',
                children: [
                  { id: 'hexagonal-mesh', name: 'Hexagonal Wire Mesh', slug: 'hexagonal-mesh', parentId: 'mesh-woven', level: 5, sortOrder: 1, status: 'active' },
                  { id: 'chicken-mesh', name: 'Chicken Wire Mesh', slug: 'chicken-mesh', parentId: 'mesh-woven', level: 5, sortOrder: 2, status: 'active' },
                  { id: 'gabion', name: 'Gabion Mesh / Gabion', slug: 'gabion', parentId: 'mesh-woven', level: 5, sortOrder: 3, status: 'active' },
                ],
              },
              {
                id: 'mesh-welded', name: 'Welded / Fabricated Mesh', slug: 'welded-mesh', parentId: 'steel-mesh', level: 4, sortOrder: 2, status: 'active',
                children: [
                  { id: 'wire-mesh', name: 'Wire Mesh', slug: 'wire-mesh-product', parentId: 'mesh-welded', level: 5, sortOrder: 1, status: 'active' },
                ],
              },
              {
                id: 'mesh-barbed', name: 'Barbed & Razor Wire', slug: 'barbed-razor', parentId: 'steel-mesh', level: 4, sortOrder: 3, status: 'active',
                children: [
                  {
                    id: 'barbed-wire', name: 'Barbed Wire', slug: 'barbed-wire', parentId: 'mesh-barbed', level: 5, sortOrder: 1, status: 'active',
                    children: [
                      { id: 'linear-barbed', name: 'Linear Barbed Wire', slug: 'linear-barbed', parentId: 'barbed-wire', level: 6, sortOrder: 1, status: 'active' },
                      { id: 'rolled-barbed', name: 'Rolled Barbed Wire', slug: 'rolled-barbed', parentId: 'barbed-wire', level: 6, sortOrder: 2, status: 'active' },
                    ],
                  },
                  {
                    id: 'razor-wire', name: 'Razor Wire', slug: 'razor-wire', parentId: 'mesh-barbed', level: 5, sortOrder: 2, status: 'active',
                    children: [
                      { id: 'linear-razor', name: 'Linear Razor Wire', slug: 'linear-razor', parentId: 'razor-wire', level: 6, sortOrder: 1, status: 'active' },
                      { id: 'rolled-razor', name: 'Rolled Razor Wire', slug: 'rolled-razor', parentId: 'razor-wire', level: 6, sortOrder: 2, status: 'active' },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: 'steel-cable', name: 'Cable Protection', slug: 'cable-protection', parentId: 'iron-steel', level: 3, sortOrder: 4, status: 'active',
            children: [
              { id: 'armor-wire', name: 'ARMOR Wire', slug: 'armor-wire', parentId: 'steel-cable', level: 4, sortOrder: 1, status: 'active' },
            ],
          },
          // Planned empty categories
          {
            id: 'steel-semi', name: 'Semi-Finished Steel Products', slug: 'semi-finished-steel', parentId: 'iron-steel', level: 3, sortOrder: 5, status: 'planned_empty',
            children: [
              { id: 'billets', name: 'Billets & Blooms', slug: 'billets', parentId: 'steel-semi', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'slabs', name: 'Slabs', slug: 'slabs', parentId: 'steel-semi', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'steel-ingots', name: 'Ingots', slug: 'ingots-steel', parentId: 'steel-semi', level: 4, sortOrder: 3, status: 'planned_empty' },
            ],
          },
          {
            id: 'steel-long', name: 'Long Steel Products', slug: 'long-steel', parentId: 'iron-steel', level: 3, sortOrder: 6, status: 'planned_empty',
            children: [
              { id: 'rebar', name: 'Rebar', slug: 'rebar', parentId: 'steel-long', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'wire-rod', name: 'Wire Rod', slug: 'wire-rod', parentId: 'steel-long', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'beams', name: 'Beams & Sections', slug: 'beams', parentId: 'steel-long', level: 4, sortOrder: 3, status: 'planned_empty' },
              { id: 'angles', name: 'Angles & Channels', slug: 'angles', parentId: 'steel-long', level: 4, sortOrder: 4, status: 'planned_empty' },
              { id: 'steel-bars', name: 'Bars', slug: 'steel-bars', parentId: 'steel-long', level: 4, sortOrder: 5, status: 'planned_empty' },
            ],
          },
          {
            id: 'steel-flat', name: 'Flat Steel Products', slug: 'flat-steel', parentId: 'iron-steel', level: 3, sortOrder: 7, status: 'planned_empty',
            children: [
              { id: 'hot-rolled', name: 'Hot-Rolled Sheets & Coils', slug: 'hot-rolled', parentId: 'steel-flat', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'cold-rolled', name: 'Cold-Rolled Sheets & Coils', slug: 'cold-rolled', parentId: 'steel-flat', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'galvanized-sheets', name: 'Galvanized Sheets & Coils', slug: 'galvanized-sheets', parentId: 'steel-flat', level: 4, sortOrder: 3, status: 'planned_empty' },
              { id: 'checkered-plates', name: 'Checkered Plates', slug: 'checkered-plates', parentId: 'steel-flat', level: 4, sortOrder: 4, status: 'planned_empty' },
            ],
          },
          {
            id: 'steel-pipes', name: 'Pipes & Tubes', slug: 'pipes-tubes', parentId: 'iron-steel', level: 3, sortOrder: 8, status: 'planned_empty',
            children: [
              { id: 'seamless-pipes', name: 'Seamless Pipes', slug: 'seamless-pipes', parentId: 'steel-pipes', level: 4, sortOrder: 1, status: 'planned_empty' },
              { id: 'welded-pipes', name: 'Welded Pipes', slug: 'welded-pipes', parentId: 'steel-pipes', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'structural-tubes', name: 'Structural Tubes', slug: 'structural-tubes', parentId: 'steel-pipes', level: 4, sortOrder: 3, status: 'planned_empty' },
            ],
          },
          {
            id: 'steel-alloy', name: 'Alloy & Specialty Steels', slug: 'alloy-steels', parentId: 'iron-steel', level: 3, sortOrder: 9, status: 'planned_empty',
            children: [
              {
                id: 'stainless-steel', name: 'Stainless Steel', slug: 'stainless-steel', parentId: 'steel-alloy', level: 4, sortOrder: 1, status: 'planned_empty',
                children: [
                  { id: 'ss-sheets', name: 'Stainless Sheets & Plates', slug: 'ss-sheets', parentId: 'stainless-steel', level: 5, sortOrder: 1, status: 'planned_empty' },
                  { id: 'ss-coils', name: 'Stainless Coils', slug: 'ss-coils', parentId: 'stainless-steel', level: 5, sortOrder: 2, status: 'planned_empty' },
                  { id: 'ss-pipes', name: 'Stainless Pipes & Tubes', slug: 'ss-pipes', parentId: 'stainless-steel', level: 5, sortOrder: 3, status: 'planned_empty' },
                  { id: 'ss-bars', name: 'Stainless Bars', slug: 'ss-bars', parentId: 'stainless-steel', level: 5, sortOrder: 4, status: 'planned_empty' },
                ],
              },
              { id: 'tool-steel', name: 'Tool Steel', slug: 'tool-steel', parentId: 'steel-alloy', level: 4, sortOrder: 2, status: 'planned_empty' },
              { id: 'other-alloy', name: 'Other Alloy Steels', slug: 'other-alloy', parentId: 'steel-alloy', level: 4, sortOrder: 3, status: 'planned_empty' },
            ],
          },
        ],
      },
    ],
  },
];

export const categoryMap = new Map<string, Category>();

function buildMap(cats: Category[]) {
  cats.forEach(cat => {
    categoryMap.set(cat.id, cat);
    if (cat.children) buildMap(cat.children);
  });
}
buildMap(categories);

export const findCategoryBySlug = (slug: string): Category | undefined => {
  for (const cat of categoryMap.values()) {
    if (cat.slug === slug) return cat;
  }
  return undefined;
};

export const getCategoryPath = (categoryId: string): string[] => {
  const path: string[] = [];
  const cat = categoryMap.get(categoryId);
  if (cat) {
    path.unshift(cat.name);
    if (cat.parentId) {
      const parentPath = getCategoryPath(cat.parentId);
      path.unshift(...parentPath);
    }
  }
  return path;
};

export const getCategoryChildren = (categoryId: string): Category[] => {
  const cat = categoryMap.get(categoryId);
  return cat?.children || [];
};

export const getActiveCategories = (): Category[] => {
  const active: Category[] = [];
  const collect = (cats: Category[]) => {
    cats.forEach(cat => {
      if (cat.status === 'active') active.push(cat);
      if (cat.children) collect(cat.children);
    });
  };
  collect(categories);
  return active;
};