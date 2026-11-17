export interface SkillGroup {
  title: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Go', 'Ruby', 'Kotlin', 'Java', 'JavaScript', 'SQL'],
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
      'GCP Pub/Sub',
      'AWS SQS + SNS'
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      'Google Cloud (GKE, Cloud SQL, Pub/Sub)',
      'AWS (ECS, EC2, Elasticache, RDS, SQS, SNS, S3, Secret Manager)',
      'Azure (AKS)',
      'Kubernetes',
      'Docker',
      'GitLab CI/CD',
    ],
  },
  {
    title: 'Observability',
    items: ['Prometheus', 'Grafana', 'Datadog', 'OpenSearch'],
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
