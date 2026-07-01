import {
  Activity,
  ArrowLeftRight,
  BarChart3,
  Brain,
  Calculator,
  Database,
  Dna,
  GitBranch,
  Grid3x3,
  Layers,
  LineChart,
  Network,
  Play,
  ScanSearch,
  ScatterChart,
  Search,
  TrendingUp,
  Trees,
  Users,
  Workflow,
} from 'lucide-react';
import { getSimpleIcon } from './simpleIconRegistry';

const LUCIDE_FALLBACKS = {
  brain: Brain,
  network: Network,
  users: Users,
  grid: Grid3x3,
  layers: Layers,
  trending: TrendingUp,
  activity: Activity,
  scatter: ScatterChart,
  barchart: BarChart3,
  search: Search,
  gitbranch: GitBranch,
  scan: ScanSearch,
  calculator: Calculator,
  dna: Dna,
  play: Play,
  linechart: LineChart,
  trees: Trees,
  database: Database,
  workflow: Workflow,
  etl: ArrowLeftRight,
};

/** Maps normalized tech names to icon resolution keys. */
const TECH_ICON_KEYS = {
  tensorflow: { type: 'simple', slug: 'tensorflow' },
  pytorch: { type: 'simple', slug: 'pytorch' },
  'scikit-learn': { type: 'simple', slug: 'scikitlearn' },
  python: { type: 'simple', slug: 'python' },
  r: { type: 'simple', slug: 'r' },
  sql: { type: 'simple', slug: 'postgresql' },
  'power bi': { type: 'simple', slug: 'powerbi' },
  tableau: { type: 'simple', slug: 'tableau' },
  looker: { type: 'simple', slug: 'looker' },
  qlik: { type: 'simple', slug: 'qlik' },
  'qlik sense': { type: 'simple', slug: 'qlik' },
  cloudera: { type: 'simple', slug: 'cloudera' },
  confluent: { type: 'simple', slug: 'confluent' },
  'confluent kafka': { type: 'simple', slug: 'confluent' },
  'google data studio': { type: 'simple', slug: 'looker' },
  spark: { type: 'simple', slug: 'apachespark' },
  'apache spark': { type: 'simple', slug: 'apachespark' },
  pyspark: { type: 'simple', slug: 'apachespark' },
  'spark sql': { type: 'simple', slug: 'apachespark' },
  'spark streaming': { type: 'simple', slug: 'apachespark' },
  kafka: { type: 'simple', slug: 'apachekafka' },
  'apache kafka': { type: 'simple', slug: 'apachekafka' },
  'kafka streams': { type: 'simple', slug: 'apachekafka' },
  confluent: { type: 'simple', slug: 'apachekafka' },
  databricks: { type: 'simple', slug: 'databricks' },
  aws: { type: 'simple', slug: 'amazonaws' },
  azure: { type: 'simple', slug: 'microsoftazure' },
  gcp: { type: 'simple', slug: 'googlecloud' },
  'google cloud platform': { type: 'simple', slug: 'googlecloud' },
  xgboost: { type: 'lucide', key: 'trending' },
  prophet: { type: 'simple', slug: 'meta' },
  'gpt-4': { type: 'simple', slug: 'openai' },
  gpt: { type: 'simple', slug: 'openai' },
  openai: { type: 'simple', slug: 'openai' },
  claude: { type: 'simple', slug: 'claude' },
  langchain: { type: 'simple', slug: 'langchain' },
  spacy: { type: 'simple', slug: 'spacy' },
  transformers: { type: 'simple', slug: 'huggingface' },
  bert: { type: 'simple', slug: 'huggingface' },
  yolo: { type: 'simple', slug: 'yolo' },
  resnet: { type: 'lucide', key: 'layers' },
  opencv: { type: 'simple', slug: 'opencv' },
  'collaborative filtering': { type: 'lucide', key: 'users' },
  'matrix factorization': { type: 'lucide', key: 'grid' },
  'deep learning': { type: 'lucide', key: 'brain' },
  mlflow: { type: 'simple', slug: 'mlflow' },
  kubeflow: { type: 'lucide', key: 'workflow' },
  sagemaker: { type: 'simple', slug: 'amazonaws' },
  sas: { type: 'lucide', key: 'linechart' },
  arima: { type: 'lucide', key: 'trending' },
  lstm: { type: 'lucide', key: 'activity' },
  'k-means': { type: 'lucide', key: 'scatter' },
  'rfm analysis': { type: 'lucide', key: 'barchart' },
  'cohort analysis': { type: 'lucide', key: 'users' },
  apriori: { type: 'lucide', key: 'search' },
  'fp-growth': { type: 'lucide', key: 'gitbranch' },
  dbscan: { type: 'lucide', key: 'scan' },
  'linear programming': { type: 'lucide', key: 'calculator' },
  'genetic algorithms': { type: 'lucide', key: 'dna' },
  simulation: { type: 'lucide', key: 'play' },
  'logistic regression': { type: 'lucide', key: 'linechart' },
  'random forests': { type: 'lucide', key: 'trees' },
  'neural networks': { type: 'lucide', key: 'network' },
  'apache airflow': { type: 'simple', slug: 'apacheairflow' },
  airflow: { type: 'simple', slug: 'apacheairflow' },
  dbt: { type: 'simple', slug: 'dbt' },
  fivetran: { type: 'lucide', key: 'etl' },
  snowflake: { type: 'simple', slug: 'snowflake' },
  bigquery: { type: 'simple', slug: 'googlebigquery' },
  redshift: { type: 'simple', slug: 'amazonredshift' },
  'delta lake': { type: 'lucide', key: 'database' },
  'apache iceberg': { type: 'lucide', key: 'database' },
  s3: { type: 'simple', slug: 'amazons3' },
  ec2: { type: 'simple', slug: 'amazonaws' },
  lambda: { type: 'simple', slug: 'amazonaws' },
  rds: { type: 'simple', slug: 'amazonrds' },
  'azure vms': { type: 'simple', slug: 'microsoftazure' },
  'azure sql': { type: 'simple', slug: 'microsoftazure' },
  'azure functions': { type: 'simple', slug: 'microsoftazure' },
  'azure migrate': { type: 'simple', slug: 'microsoftazure' },
  'compute engine': { type: 'simple', slug: 'googlecloud' },
  'cloud run': { type: 'simple', slug: 'googlecloud' },
  'aws migration hub': { type: 'simple', slug: 'amazonaws' },
  jenkins: { type: 'simple', slug: 'jenkins' },
  'gitlab ci': { type: 'simple', slug: 'gitlab' },
  terraform: { type: 'simple', slug: 'terraform' },
  ansible: { type: 'simple', slug: 'ansible' },
  docker: { type: 'simple', slug: 'docker' },
  kubernetes: { type: 'simple', slug: 'kubernetes' },
};

export function normalizeTechName(name) {
  return name.trim().toLowerCase();
}

export function resolveTechIcon(name) {
  const key = normalizeTechName(name);
  const config = TECH_ICON_KEYS[key];
  if (!config) return null;

  if (config.type === 'lucide') {
    const Icon = LUCIDE_FALLBACKS[config.key];
    return Icon ? { type: 'lucide', Icon, title: name } : null;
  }

  const icon = getSimpleIcon(config.slug);
  if (!icon) return null;

  return {
    type: 'simple',
    title: icon.title,
    path: icon.path,
    hex: icon.hex,
    viewBox: icon.viewBox,
  };
}

export function hasTechIcon(name) {
  return resolveTechIcon(name) !== null;
}
