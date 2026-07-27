/* All homepage content as typed data — single source of truth. */

export type Service = { title: string; description: string; icon: string };

export const services: Service[] = [
  {
    title: 'Website Design & Development',
    description:
      'Custom websites designed to reflect your brand, establish credibility, and guide visitors toward taking action.',
    icon: 'monitor',
  },
  {
    title: 'Ongoing Support & Maintenance',
    description:
      'Ongoing care to keep your website secure, fast, and up to date — without the hassle.',
    icon: 'shield',
  },
  {
    title: 'SEO-Ready Foundations',
    description:
      'Every site is built with clean structure and best practices that support long-term visibility.',
    icon: 'search',
  },
];

export type Step = { title: string; description: string; icon: string };

export const steps: Step[] = [
  {
    title: 'Discovery & Strategy',
    description:
      'We learn about your business, goals, and customers to plan a site that supports growth.',
    icon: 'message',
  },
  {
    title: 'Custom Design & Build',
    description:
      'We design and develop a high-performance website tailored to your brand.',
    icon: 'wand',
  },
  {
    title: 'Launch & Support',
    description:
      'We handle launch, analytics setup, and ongoing support so your site runs smoothly.',
    icon: 'rocket',
  },
];

export type Project = {
  title: string;
  url: string;
  image: string;
  alt: string;
  tag: string;
  summary: string;
  services: string[];
};

export const portfolio: Project[] = [
  {
    title: 'Thorn Fine Finishes',
    url: 'https://www.thornfinefinishes.com/',
    image: '/assets/thornfinefinishes.png',
    alt: 'Thorn Fine Finishes Website',
    tag: 'Finish Carpentry',
    summary:
      'A craftsmanship-forward site for a Southwest Florida trim & finish carpentry studio — built to showcase detailed work and turn browsers into booked projects.',
    services: ['Web Design', 'Development', 'SEO Foundations'],
  },
  {
    title: 'Adullam Mission House',
    url: 'https://www.amissionhouse.com/',
    image: '/assets/amissionhouse.png',
    alt: 'Adullam Mission House Website',
    tag: 'Nonprofit',
    summary:
      'A warm, welcoming site for a faith-based nonprofit in South Carolina — designed to share their mission and connect people seeking healing and support.',
    services: ['Web Design', 'Development', 'Ongoing Support'],
  },
  {
    title: 'Panhandle Key & Safe',
    url: 'https://www.panhandlekeyandsafe.com/',
    image: '/assets/panhandlekeyandsafe.png',
    alt: 'Panhandle Key & Safe Website',
    tag: 'Locksmith & Security',
    summary:
      'A clear, action-oriented site for a Panama City locksmith — making it effortless for customers to get help fast with lockouts, keys, and security.',
    services: ['Web Design', 'Development', 'SEO Foundations'],
  },
  {
    title: 'BuilderBase',
    url: 'https://www.builderbase.co/',
    image: '/assets/builderbase.png',
    alt: 'BuilderBase Website',
    tag: 'SaaS Product',
    summary:
      'A modern marketing site for a construction project-management platform — built to communicate the product clearly and drive sign-ups.',
    services: ['Web Design', 'Development', 'Product Marketing'],
  },
  {
    title: 'Golden Grove FL',
    url: 'https://www.goldengrovefl.com/',
    image: '/assets/gg.png',
    alt: 'Golden Grove FL Website',
    tag: 'Service Business',
    summary:
      'A polished, conversion-focused website built to establish credibility and turn local visitors into real inquiries.',
    services: ['Web Design', 'Development', 'SEO Foundations'],
  },
  {
    title: '32 Dental',
    url: 'https://www.32dentalsc.com/',
    image: '/assets/www.32dentalsc.com_.png',
    alt: '32 Dental SC Website',
    tag: 'Healthcare',
    summary:
      'A clean, trustworthy online presence designed to help a dental practice attract and convert new patients.',
    services: ['Web Design', 'Development', 'Ongoing Support'],
  },
  {
    title: 'Exterior Detailing',
    url: 'https://www.exteriordetailing.com/',
    image: '/assets/exterior-detailing.vercel.app_.png',
    alt: 'Exterior Detailing Website',
    tag: 'Home Services',
    summary:
      'A fast, mobile-first site that showcases services and makes it effortless for customers to get in touch.',
    services: ['Web Design', 'Development', 'SEO Foundations'],
  },
];

export type Tier = {
  label: string;
  name: string;
  price: string;
  amount: number;
  description: string;
  features: string[];
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    label: 'Starting at',
    name: '"Launch" Website',
    price: '2,000',
    amount: 2000,
    description: 'Everything an established business needs to look credible online.',
    featured: true,
    features: [
      '3–4 pages (Home, About, Services, Contact)',
      'Mobile responsive',
      'Contact form + click to call',
      'Basic on-page SEO',
      '1 week turnaround',
      '1 round of revisions',
    ],
  },
];

export const customPricing = {
  text: 'Need more? Larger multi-page sites, dedicated service pages, and custom functionality are quoted to fit the scope of your project.',
  ctaLabel: 'Get a custom quote',
};

export const maintenance = {
  price: '125',
  period: '/ month',
  features: [
    'Website updates & content changes',
    'Security and performance monitoring',
    'Software updates and backups',
    'Dedicated priority support',
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Professional, responsive, and incredibly easy to work with. Chris delivered our site in under a week and the ongoing support has been fantastic. Highly recommend!',
    name: 'Alex Sardina',
    role: 'Founder, Exterior Detailing',
  },
  {
    quote:
      'Chris completely transformed our online presence. The website exceeded our expectations and we’ve seen a significant increase in customer inquiries since launching.',
    name: 'Shivani Patel',
    role: 'Owner, 32 Dental',
  },
  {
    quote:
      'Communication was clear, turnaround was fast, and the sites function exactly how we needed them to. He’s knowledgeable, professional, and easy to work with. Highly recommend for anyone needing solid, reliable web development.',
    name: 'John Sardina',
    role: 'Owner, Golden Grove FL',
  },
];

export type Stat = { value: number; suffix: string; label: string };

export const stats: Stat[] = [
  { value: 10, suffix: '+', label: 'Years engineering experience' },
  { value: 100, suffix: '%', label: 'Custom-built, no templates' },
  { value: 1, suffix: 'wk', label: 'Typical launch turnaround' },
  { value: 5, suffix: '.0', label: 'Average client rating' },
];

export const aboutBio = [
  'Welcome to Thorn Web Solutions. We partner with service-based businesses nationwide. For over ten years, I’ve worked as a software engineer, and throughout that time, building websites has always been one of my biggest passions.',
  'My goal has never been to deliver one-off projects, but to partner with business owners in a way that feels personal, supportive, and genuinely helpful. I focus on making the process simple and removing the technical stress that so many entrepreneurs face.',
  'Every organization deserves a website that reflects who they are and the positive impact they make. I’m here to help you bring that vision to life.',
];
