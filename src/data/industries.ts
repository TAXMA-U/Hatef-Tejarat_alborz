export type Industry = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
};

export const industries: Industry[] = [
  {
    id: 'aerospace-components',
    name: 'Aerospace Components',
    slug: 'aerospace-components',
    description: 'Precision metal parts for aerospace applications',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
  {
    id: 'construction-materials',
    name: 'Construction Materials',
    slug: 'construction-materials',
    description: 'Structural steel and alloys for construction projects',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
  {
    id: 'electrical-infrastructure',
    name: 'Electrical Infrastructure',
    slug: 'electrical-infrastructure',
    description: 'Conductive and durable metals for electrical systems',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
  {
    id: 'marine-equipment',
    name: 'Marine Equipment',
    slug: 'marine-equipment',
    description: 'Corrosion-resistant metals for marine and offshore use',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
  {
    id: 'automotive-standard',
    name: 'Automotive Standard',
    slug: 'automotive-standard',
    description: 'High-strength steel for automotive manufacturing',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
  {
    id: 'petrochemical',
    name: 'Petrochemical',
    slug: 'petrochemical',
    description: 'Alloys for petrochemical processing equipment',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
  {
    id: 'pharmaceutical',
    name: 'Pharmaceutical',
    slug: 'pharmaceutical',
    description: 'Hygienic stainless steel for pharmaceutical equipment',
    image: `${import.meta.env.BASE_URL}images/industries/a.png`,
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined =>
  industries.find((i) => i.slug === slug);
