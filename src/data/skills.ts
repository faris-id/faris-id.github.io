export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Go', 'Ruby', 'Java', 'JavaScript', 'SQL'],
  },
  {
    title: 'Backend & architecture',
    items: [
      'Microservices',
      'Distributed systems',
      'Event-driven architecture',
      'REST APIs',
      'System design',
    ],
  },
  {
    title: 'Data & messaging',
    items: [
      'MySQL',
      'PostgreSQL',
      'MongoDB',
      'Cassandra',
      'Redis',
      'Elasticsearch',
      'Kafka',
      'BigQuery',
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Google Cloud (GKE, Cloud SQL, Pub/Sub)',
      'Azure (AKS)',
      'Kubernetes',
      'Docker',
      'GitLab CI/CD',
    ],
  },
  {
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'Datadog', 'ELK Stack'],
  },
  {
    title: 'Leadership',
    items: [
      'Team management',
      'Mentoring',
      'Engineering standards',
      'Incident management',
      'Hiring & org scaling',
    ],
  },
];

export const legacySkills = [
  'Spring',
  'Hibernate',
  'JHipster',
  'jQuery',
  'Bootstrap',
  'ExtJS',
  'Maven',
  'Gradle',
  'TeamCity',
  'Oracle DB',
  'JasperReports',
  'PL/SQL',
  'WebLogic',
  'Tomcat',
];
