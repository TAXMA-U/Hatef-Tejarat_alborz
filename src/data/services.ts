export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: 'import-export',
    title: 'Import & Export',
    description: 'Direct procurement of steel and alloys from top European and Asian mills with minimal intermediaries and competitive pricing.',
  },
  {
    id: 'specialized-warehousing',
    title: 'Specialized Warehousing',
    description: 'Secure storage solutions for industrial steel products with professional inventory management.',
  },
  {
    id: 'certification-standards',
    title: 'Certification & Standards',
    description: 'Mill test certificates, chemical analysis reports, and national/international standard compliance documents provided.',
  },
];

export const getServiceById = (id: string): Service | undefined =>
  services.find((s) => s.id === id);
