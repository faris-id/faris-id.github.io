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
  location: 'Indonesia',
  timezone: 'GMT+7',
  email: 'faris.arifiansyah@gmail.com',
  lede: 'Engineering leader with 9+ years building and scaling backend systems used by tens of millions of people. Currently at NinjaOne.',
  about: [
    "I'm a software engineering leader with 9+ years of experience, combining hands-on technical work with engineering leadership. Five of those years were spent as an individual contributor; four were spent leading teams as a Tech Lead and Engineering Manager, building and scaling backend systems used by tens of millions of users.",
    "I design and operate high-throughput distributed systems, primarily in Go, with Ruby and Java along the way. My work spans microservices, event-driven architecture with Kafka, relational and NoSQL databases, and cloud platforms (Google Cloud, AWS, and Azure). I've owned systems end to end, from architecture and delivery to production reliability and cost.",
    "I’m experienced with modern cloud and DevOps practices, including Kubernetes, Docker, and CI/CD pipelines, primarily on Google Cloud and AWS, with a strong focus on observability and system reliability. I also have a solid foundation in frontend development (including React), allowing me to operate effectively with full-stack awareness.",
    "I graduated as Valedictorian (Top 1 in Engineering) from Bandung State Polytechnic and earned a Master’s degree (Summa Cum Laude) from Institut Teknologi Bandung (ITB), where I focused on incident prevention and management in fintech systems.",
    "Beyond work: football, investing (stocks & crypto), music (make a song cover), watching Netflix, and spending time with family",
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
    href: 'https://www.youtube.com/channel/UC3o2BOksN0Bu3QUiOQKeJ6w',
    icon: 'youtube',
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
      'Led a tribe-wide optimisation that saved more than IDR 500 million per month.',
  },
  {
    value: '20+',
    label: 'Microservices owned',
    description:
      'Built and operated services across supply chain, marketplace, and o2o platform domains for tens of millions of users.',
  },
  {
    value: '~1,000 RPS',
    label: 'Marketing systems',
    description:
      'Designed high-throughput pipelines syncing hundreds of millions of products to Facebook, Google, iPrice, and other marketing platforms.',
  },
  {
    value: '3',
    label: 'Countries led across',
    description:
      'Led distributed teams across Indonesia, Singapore, and Australia — up to 15 engineers across 4 teams.',
  },
];
