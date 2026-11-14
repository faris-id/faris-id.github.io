export interface EducationEntry {
  school: string;
  schoolUrl?: string;
  degree: string;
  period: string;
  location?: string;
  note?: string;
  highlights?: string[];
}

export interface Certification {
  name: string;
  issuer?: string;
  date?: string;
  credential?: string;
  href?: string;
}

export const education: EducationEntry[] = [
  {
    school: 'Institut Teknologi Bandung',
    schoolUrl: 'https://www.itb.ac.id',
    degree: 'Master of Business Administration (MBA), Business Administration and Management',
    period: 'Aug 2023 — May 2025',
    location: 'Bandung, Indonesia',
    // TODO(content): add thesis/focus details for the MBA.
    note: 'Summa Cum Laude. Focused on incident prevention and management in fintech systems.',
  },
  {
    school: 'Politeknik Negeri Bandung',
    schoolUrl: 'https://www.polban.ac.id',
    degree: 'Bachelor of Applied Science (B.ASc), Informatics',
    period: 'Sep 2013 — Aug 2017',
    location: 'Bandung, Indonesia',
    note: 'GPA 3.84 / 4.00. Graduated as the best student in engineering.',
  },
  {
    school: 'SMK Negeri 1 Cimahi',
    degree: 'Computer and Network Engineering',
    period: '2009 — 2013',
    location: 'Cimahi, Indonesia',
  },
];

export const certifications: Certification[] = [
  // TODO(content): add credential links/dates when available.
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
  },
  {
    name: 'Neo4j Certified Professional',
    issuer: 'Neo4j, Inc.',
    date: 'Apr 2018',
    credential: 'License 16695748',
    href: 'https://neo4j.com/',
  },
  {
    name: 'DCMF 2022 Engineering Super Mentor',
    issuer: 'Bukalapak',
    date: '2022',
  },
];

export const honors = [
  {
    name: 'The Best Graduate of Bandung State Polytechnic in Engineering',
    issuer: 'Politeknik Negeri Bandung',
    date: '2017',
  },
];
