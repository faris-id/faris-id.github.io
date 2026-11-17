export interface ExperienceDetail {
  title: string;
  period: string;
  points: string[];
}

export interface Experience {
  company: string;
  companyUrl?: string;
  role: string;
  period: string;
  location?: string;
  summary?: string;
  highlights: string[];
  details?: ExperienceDetail[];
  detailsLabel?: string;
  tech: string[];
  current?: boolean;
}

export const experience: Experience[] = [
  {
    company: 'NinjaOne',
    companyUrl: 'https://www.ninjaone.com',
    role: 'Senior Software Engineer',
    period: 'Apr 2026 — Present',
    location: 'Indonesia',
    summary:
      "Part of NinjaOne's SaaS backup team, previously known as Dropsuite. Specifically responsible for maintaining and scaling our partner portal where users can manage their customers' subscriptions, organizations, insights, integrations, notification settings, and more.",
    highlights: [
      'Built a new insights service from scratch that gives users visibility into their organization\'s usage and activity across our backup system.',
      'Developed and maintained the partner portal and its features, deployed across many regions worldwide.',
      'Reduced API latency by more than 90% by implementing partition pruning.',
      'Strengthened overall system security.',
    ],
    tech: [
      'Ruby',
      'Kotlin',
      'Java',
      'Spring Boot',
      'Typescript',
      'React',
      'AWS ECS',
      'AWS EC2',
      'AWS S3',
      'AWS SQS',
      'PostgreSQL',
      'Valkey',
      'OpenSearch',
      'Datadog',
      'Claude',
    ],
    current: true,
  },
  {
    company: 'Bukalapak',
    companyUrl: 'https://www.bukalapak.com',
    role: 'Engineering Manager',
    period: 'Mar 2022 — Mar 2026',
    location: 'Indonesia',
    summary:
      'Led multiple engineering teams across Supply Chain, Mitra Experience, Virtual Product, and Mitra Bukalapak Platform, with distributed teams across Indonesia, Singapore, and Australia.',
    highlights: [
      'Led a cost optimisation initiative that reduced tribe cloud costs by ~50% — more than IDR 500 million per month.',
      'Built and operated 20+ microservices, staying hands-on (~50–60%) in Go backend development, system design, and critical production issues.',
      'Improved system stability through monitoring, tracking, and data-driven incident prioritisation; reduced on-call issues by ~40% in Supply Chain.',
      'Managed up to 15 engineers across 4 teams, and partnered with senior leadership on hiring, org scaling, and long-term technical direction.',
    ],
    details: [
      {
        title: 'Supply Chain',
        period: 'Mar 2022 — Dec 2022',
        points: [
          'Managed the Warehouse Management System and Mitra Seller Center teams — 7 engineers.',
          'Reduced on-call issues by ~40% through monitoring and root-cause tracking.',
        ],
      },
      {
        title: 'Mitra Experience',
        period: 'Oct 2022 — Aug 2023',
        points: [
          'Owned acquisition and retention systems: auth, KYC, referral, and loyalty.',
          'Managed 6 engineers.',
        ],
      },
      {
        title: 'Virtual Product',
        period: 'Aug 2023 — Dec 2024',
        points: [
          'Led 8 engineers across Indonesia, Singapore, and Australia.',
          'Built and maintained the most profitable products on the platform.',
        ],
      },
      {
        title: 'Mitra Bukalapak Platform',
        period: 'Jan 2025 — Mar 2026',
        points: [
          'Oversaw platform-level engineering for the Mitra Bukalapak ecosystem.',
          'Managed 15 engineers spread across 4 teams.',
        ],
      },
    ],
    detailsLabel: 'Scope evolution',
    tech: [
      'Go',
      'Ruby',
      'GCP',
      'Azure',
      'Kubernetes',
      'Kafka',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Cassandra',
      'Redis',
      'Elasticsearch',
      'Datadog',
    ],
  },
  {
    company: 'Bukalapak',
    companyUrl: 'https://www.bukalapak.com',
    role: 'Senior Software Engineer (Tech Lead)',
    period: 'Jan 2022 — Mar 2022',
    location: 'Bandung, West Java, Indonesia',
    summary:
      'Led a team of 5 engineers delivering backend systems for Mitra Bukalapak Grocery.',
    highlights: [
      'Owned system design and architecture for team-owned microservices, ensuring scalability, reliability, and maintainability.',
      'Acted as the main point of contact between engineering, product, and cross-functional stakeholders.',
      'Consistently rated as a high performer (Exceptional or Exceeds Expectations) for two consecutive years, across four performance cycles.',
    ],
    tech: ['Go', 'Ruby on Rails'],
  },
  {
    company: 'Bukalapak',
    companyUrl: 'https://www.bukalapak.com',
    role: 'Software Engineer II',
    period: 'Aug 2018 — Dec 2021',
    location: 'Bandung, West Java, Indonesia',
    summary:
      'Worked across multiple product domains and platform initiatives, contributing to backend systems at scale across marketplace, logistics, marketing, and infrastructure.',
    highlights: [
      'Developed and maintained backend services for the Mitra Bukalapak Grocery feature, focusing on pricing systems.',
      'Built and maintained high-throughput microservices (~1,000 RPS) supporting marketing operations.',
      'Led a proof of concept for migrating microservices from GCP to Azure, and produced internal guidelines to help teams adapt their services.',
      'Built BukaMobil and BukaMotor microservices from scratch in Go, delivering end-to-end backend systems for the automotive marketplace vertical.',
    ],
    details: [
      {
        title: 'Marketing Technology',
        period: 'Dec 2019 — Sep 2021',
        points: [
          'Product Feed: synchronised hundreds of millions of products daily to Facebook, Google, iPrice, and other external platforms.',
          'External Visit Tracker: tracked acquisition performance and enabled personalised engagement via MoEngage and Braze.',
          'URL shortener (bl.id): maintained the redirection service powering campaign links.',
        ],
      },
      {
        title: 'Logistics Innovation — BukaSend',
        period: 'Jul 2019 — Dec 2019',
        points: [
          'Developed and maintained BukaSend, a logistics aggregator that gave users access to multiple shipping providers in one interface.',
        ],
      },
    ],
    detailsLabel: 'Selected projects',
    tech: [
      'Go',
      'Ruby on Rails',
      'GCP',
      'Azure',
      'Kafka',
      'MySQL',
      'MongoDB',
      'Redis',
      'Elasticsearch',
    ],
  },
  {
    company: 'Xtremax',
    companyUrl: 'https://www.xtremax.com',
    role: 'Java Developer',
    period: 'Sep 2017 — Jul 2018',
    location: 'Bandung Area, West Java, Indonesia',
    summary:
      'Full-stack developer on web-based applications for internal and client-facing products.',
    highlights: [
      'Built backend services with the Spring ecosystem, ensuring structured and maintainable application architecture.',
      'Contributed to frontend development across internal and client-facing applications.',
    ],
    tech: [
      'Java',
      'Spring',
      'Hibernate',
      'Oracle',
      'PostgreSQL',
      'jQuery',
      'Bootstrap',
      'ExtJS',
      'Maven',
      'Gradle',
      'TeamCity',
    ],
  },
  {
    company: 'UrsaByte',
    companyUrl: 'https://www.ursabyte.com',
    role: 'Software Engineer Intern',
    period: 'Aug 2016 — Dec 2016',
    location: 'Bandung, West Java, Indonesia',
    summary:
      'Contributed to web applications across both frontend and backend during a five-month internship.',
    highlights: [
      'Implemented UI features and improved user interfaces using modern web technologies.',
      'Built a backend service for a back-office application with Java and Spring Framework.',
    ],
    tech: [
      'Java',
      'Spring',
      'Hibernate',
      'Oracle',
      'PostgreSQL',
      'JasperReports',
      'WebLogic',
      'Tomcat',
    ],
  },
];
