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
    note: 'GPA 3.94 / 4.00. Summa Cum Laude. Focused on incident prevention and management in fintech systems.',
  },
  {
    school: 'Politeknik Negeri Bandung',
    schoolUrl: 'https://www.polban.ac.id',
    degree: 'Bachelor of Applied Science (B.ASc), Informatics',
    period: 'Sep 2013 — Aug 2017',
    location: 'Bandung, Indonesia',
    note: 'GPA 3.84 / 4.00. Graduated as valedictorian, the best student in engineering.',
  },
  {
    school: 'SMK Negeri 1 Cimahi',
    schoolUrl: 'https://www.smkn1-cmi.sch.id',
    degree: 'Computer and Network Engineering',
    period: '2009 — 2013',
    location: 'Cimahi, Indonesia',
    note: 'Learnt about computer networking, Linux sysadmin, and network installation and administration.',
  },
];

export const certifications: Certification[] = [
  {
    name: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    date: 'October 29, 2021',
    href: 'https://www.credly.com/badges/de324781-b74d-4622-b4cd-d162b615eb86',
  },
  {
    name: 'Microsoft Certified: Azure Developer Associate',
    issuer: 'Microsoft',
    date: 'November 26, 2021',
    href: 'https://www.credly.com/badges/6dcad343-b02d-4a9a-8579-bba95e2e9c4f',
  },
  {
    name: 'Neo4j Certified Professional',
    issuer: 'Neo4j, Inc.',
    date: 'Apr 2018',
    credential: 'License 16695748',
    href: 'https://graphacademy.neo4j.com/certificates/48b11c5f1bbe53b5ad2f771219ad8ec44aa0fc5a9e65f3aacd223f7e350c5c00.pdf',
  },
];

export const honors = [
  {
    name: 'The Best Graduate of Bandung State Polytechnic in Engineering',
    issuer: 'Politeknik Negeri Bandung',
    date: '2017',
  },
];
