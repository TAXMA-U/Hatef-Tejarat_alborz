export type Stat = {
  readonly value: string;
  readonly label: string;
};

export const siteContent = {
  brand: {
    name: 'HATEF TEJARAT ALBORZ',
    shortName: 'HATEF',
    subtitle: 'TEJARAT ALBORZ',
    description:
      'Established on September 11, 2023, and actively operating under registration number 618179. As a reputable and leading trading company in the field of metals, we are constantly striving to meet the needs of our customers by providing high-quality services and products.',
  },
  hero: {
    badge: 'ISO 9001 CERTIFIED SUPPLIER',
    titleLine1: 'Precision Steel',
    titleLine2: 'Global Quality.',
    description:
      'Hatef Tejarat Alborz is a leading importer, exporter, and distributor of alloy steel, industrial sheets, and standard pipes. A trusted supplier for construction, oil & gas, and automotive industries.',
    cta: 'View All Products',
  },
  stats: [
    { value: '2,500', label: 'TONS SHIPPED' },
    { value: '150+', label: 'ACTIVE CLIENTS' },
    { value: '15', label: 'COUNTRIES SERVED' },
    { value: '99%', label: 'ON-TIME DELIVERY' },
  ],
  steelVault: {
    badge: 'PRODUCT COLLECTIONS',
    title: 'The Steel Vault',
    description:
      'A curated archive of our finest steel and alloy products, from industrial sheets to standard pipes and construction rebars.',
    cta: 'View All Products',
  },
  catalogPreview: {
    badge: 'CATALOG VIEW',
    title: 'Product Catalog',
    description:
      'Explore our complete range of steel and alloy products in an organized catalog format.',
  },
  carousel: {
    hint: 'Swipe through our premium selection of industrial materials',
  },
  industrialProjects: {
    badge: 'OUR PROJECTS',
    title: 'Industrial Projects',
    description:
      'Explore our completed projects and industrial applications across various sectors. Our steel and alloy products are used in construction, oil & gas, and automotive industries worldwide.',
  },
  services: {
    intro:
      'Hatef Tejarat Alborz is your trusted partner in the steel industry.',
  },
  excellence: {
    badge: 'EXCELLENCE',
    cards: [
      {
        title: 'Chemical Precision Analysis',
        description:
          'Trace element analysis at 99.999% purity. Each shipment is verified via spectrometer and mass spectrometry to ensure absolute compositional integrity.',
        badge: 'ISO-9001 CERTIFIED',
      },
    ],
  },
  footer: {
    description:
      'A reputable trading company in the field of metals, providing high-quality services and products to meet the needs of our valued customers.',
    quickLinks: ['Products', 'About Us', 'Contact'],
    servicesLinks: ['Import & Export', 'Specialized Warehousing', 'Certification & Standards'],
  },
  auth: {
    login: {
      title: 'Welcome Back',
      description: 'Please sign in to your account to continue.',
      emailLabel: 'Email Address',
      passwordLabel: 'Password',
      rememberMe: 'Remember me',
      forgotPassword: 'Forgot password',
      signIn: 'Sign In',
      createAccount: 'Create an account',
    },
    register: {
      title: 'Create Account',
      description: 'Join our B2B platform today.',
      fullNameLabel: 'Full Name',
      companyNameLabel: 'Company Name',
      businessEmailLabel: 'Business Email',
      phoneLabel: 'Phone Number',
      passwordLabel: 'Password',
      confirmPasswordLabel: 'Confirm Password',
      createAccount: 'Create Account',
      backToLogin: 'Back to Login',
    },
  },
} as const;

export const stats: ReadonlyArray<Stat> = siteContent.stats;
