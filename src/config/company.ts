type PortfolioItem = {
  title: string;
  category: string;
  imageUrl: string;
  imageAlt: string;
  description: string;
  scope: string[];
};

export const company = {
  name: 'Nexus Studio Utama',
  legalName: 'PT Nexus Studio Utama',
  tagline: 'Professional Software, Web, and Digital Solution Studio',
  shortTagline: 'Software • Website • Digital Solution',
  description:
    'PT Nexus Studio Utama is a technology studio focused on building professional websites, business software, and digital solutions that help companies improve their digital presence and operational efficiency.',
  email: 'nexusstudioutama@proton.me',
  phone: '',
  whatsapp: '',
  address: 'Indonesia',
  founded: '2026',
  websiteUrl: 'https://nexustudio.my.id',
  social: {
    instagram: '',
    linkedin: '',
    facebook: ''
  }
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Portfolio', href: '/portfolio/' },
  { label: 'Contact', href: '/contact/' }
];

export const legalNavigation = [
  { label: 'Privacy Policy', href: '/privacy-policy/' },
  { label: 'Privacy Policy Center', href: '/privacy-center/' },
  { label: 'Terms of Service', href: '/terms-of-service/' }
];

export const services = [
  {
    title: 'Company Profile Website',
    description:
      'Professional static websites for businesses that need a credible online profile, clear service information, and fast deployment.'
  },
  {
    title: 'Business Web Application',
    description:
      'Custom web-based systems designed to support business workflows, data management, internal operations, and digital services.'
  },
  {
    title: 'Mobile App Development',
    description:
      'Mobile application development for business, productivity, service platforms, and digital product initiatives.'
  },
  {
    title: 'Landing Page Development',
    description:
      'Focused landing pages for campaigns, product introductions, service promotions, and lead generation.'
  },
  {
    title: 'UI/UX & Interface Design',
    description:
      'Clean and user-friendly interface design to help products feel professional, structured, and easy to use.'
  },
  {
    title: 'Digital Product Support',
    description:
      'Technical support for improving, maintaining, and preparing digital products for public release or business use.'
  }
];

export const portfolio: PortfolioItem[] = [
  {
    title: 'Corporate Website',
    category: 'Company Profile',
    imageUrl:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Modern professional office workspace representing a corporate website project',
    description:
      'A professional company profile website structure for presenting business identity, services, portfolio, and contact information clearly.',
    scope: ['Company Profile', 'Responsive Website', 'SEO Foundation']
  },
  {
    title: 'Service Landing Page',
    category: 'Marketing Website',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Laptop displaying business analytics representing a service landing page project',
    description:
      'A focused landing page designed to communicate service value, highlight business offerings, and guide visitors to make inquiries.',
    scope: ['Landing Page', 'Conversion Flow', 'Business Inquiry']
  },
  {
    title: 'Business Software Interface',
    category: 'Web Application',
    imageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Software team collaborating on a web application interface',
    description:
      'A clean interface concept for internal tools, admin dashboards, business management systems, and operational web applications.',
    scope: ['Web Application', 'Admin Dashboard', 'Workflow System']
  },
  {
    title: 'Mobile App Product',
    category: 'Mobile Application',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Mobile device and digital workspace representing mobile app development',
    description:
      'A mobile application project direction for productivity tools, service platforms, business apps, and digital product initiatives.',
    scope: ['Mobile App', 'Product Design', 'Release Support']
  },
  {
    title: 'UI/UX Design System',
    category: 'Product Design',
    imageUrl:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Creative design workspace representing UI and UX design system work',
    description:
      'A structured interface design approach for creating consistent, professional, and user-friendly digital product experiences.',
    scope: ['UI Design', 'UX Structure', 'Design System']
  },
  {
    title: 'Digital Product Support',
    category: 'Technical Support',
    imageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80',
    imageAlt: 'Business team discussion representing digital product support and consultation',
    description:
      'Technical support for improving, maintaining, reviewing, and preparing digital products for public release or business use.',
    scope: ['Maintenance', 'Optimization', 'Launch Support']
  }
];

export const values = [
  {
    title: 'Professional',
    description:
      'We build digital products with a structured process, clear communication, and attention to detail.'
  },
  {
    title: 'Reliable',
    description:
      'Our solutions are designed to be maintainable, practical, and suitable for long-term business use.'
  },
  {
    title: 'Scalable',
    description:
      'We prepare digital foundations that can grow with future business needs and product development.'
  }
];

export const process = [
  {
    title: 'Discovery',
    description:
      'Understanding the company profile, business goals, target audience, service details, and required pages.'
  },
  {
    title: 'Design & Structure',
    description:
      'Preparing the visual direction, content structure, navigation flow, and page layout.'
  },
  {
    title: 'Development',
    description:
      'Building a fast, responsive, and maintainable website or digital product implementation.'
  },
  {
    title: 'Review & Launch',
    description:
      'Final checking, content adjustment, performance review, and deployment preparation.'
  }
];

export const appPrivacyPolicies = [
  {
    name: 'Coming Soon',
    slug: '',
    platform: 'Google Play',
    status: 'Preparation',
    description:
      'Application privacy policies published by PT Nexus Studio Utama will be listed here once available.'
  }
];
