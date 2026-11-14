export type SocialIcon =
  | 'linkedin'
  | 'github'
  | 'x'
  | 'instagram'
  | 'youtube'
  | 'facebook'
  | 'blog'
  | 'mail';

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
  icon: SocialIcon;
}

export const profile = {
  name: 'Faris Arifiansyah',
  firstName: 'Faris',
  lastName: 'Arifiansyah',
  role: 'Senior Software Engineer',
  company: 'NinjaOne',
  companyUrl: 'https://www.ninjaone.com',
  location: 'Greater Bandung, Indonesia',
  timezone: 'GMT+7',
  email: 'faris.arifiansyah@gmail.com',
  lede: 'Engineering leader with 9+ years building and scaling backend systems used by tens of millions of people. Currently at NinjaOne.',
  about: [
    "I'm a software engineering leader with 9+ years of experience, combining hands-on technical work with engineering leadership. Five of those years were spent as an individual contributor; four were spent leading teams as a Tech Lead and Engineering Manager, building and scaling backend systems used by tens of millions of users.",
    "I design and operate high-throughput distributed systems, primarily in Go, with Ruby and Java along the way. My work spans microservices, event-driven architecture with Kafka, relational and NoSQL databases, and cloud platforms — mostly Google Cloud and Azure. I've owned systems end to end, from architecture and delivery to production reliability and cost.",
    "Beyond work: football, guitar, and a good mystery novel or manga. I still dream of watching a World Cup match live, and I'll take any excuse to be near the ocean.",
  ],
  facts: [
    { label: 'Based in', value: 'Greater Bandung, Indonesia' },
    { label: 'Experience', value: '9+ years in software engineering' },
    { label: 'Focus', value: 'Distributed systems & engineering leadership' },
    { label: 'Currently', value: 'Senior Software Engineer at NinjaOne' },
  ],
  languages: [
    { label: 'Indonesian', level: 'Native or bilingual' },
    { label: 'English', level: 'Professional working' },
  ],
};

export const socials: SocialLink[] = [
  {
    label: 'Email',
    handle: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    handle: '/in/farisarifiansyah',
    href: 'https://www.linkedin.com/in/farisarifiansyah/',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    handle: '@faris-id',
    href: 'https://github.com/faris-id',
    icon: 'github',
  },
  {
    label: 'X',
    handle: '@Faris17',
    href: 'https://x.com/Faris17',
    icon: 'x',
  },
  {
    label: 'Instagram',
    handle: '@faris_arifiansyah',
    href: 'https://www.instagram.com/faris_arifiansyah/',
    icon: 'instagram',
  },
  {
    label: 'YouTube',
    handle: 'Faris Arifiansyah',
    href: 'https://www.youtube.com/channel/UCo8pcpPchtjtprX0vmB_7EQ',
    icon: 'youtube',
  },
  {
    label: 'Facebook',
    handle: '/faris19',
    href: 'https://www.facebook.com/faris19',
    icon: 'facebook',
  },
  {
    label: 'Blog',
    handle: 'blog.faris.id',
    href: 'https://blog.faris.id',
    icon: 'blog',
  },
];

export const impact = [
  {
    value: '~50%',
    label: 'Cloud cost reduction',
    description:
      'Led a tribe-wide optimisation that saved more than IDR 500 million per month within eight months.',
  },
  {
    value: '20+',
    label: 'Microservices owned',
    description:
      'Built and operated services across supply chain, marketplace, and platform domains for tens of millions of users.',
  },
  {
    value: '~1,000 RPS',
    label: 'Marketing systems',
    description:
      'Designed high-throughput pipelines syncing hundreds of millions of products to Facebook, Google, and iPrice.',
  },
  {
    value: '3',
    label: 'Countries led across',
    description:
      'Led distributed teams across Indonesia, Singapore, and Australia — up to 15 engineers across 4 teams.',
  },
];
