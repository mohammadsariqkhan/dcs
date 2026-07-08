import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
  Brain, Database, BarChart3, TrendingUp, Cog, Cloud, Sparkles,
  LineChart, MessageSquare, Eye, Star, Activity, PieChart, Target,
  Zap, GitBranch, Server, HardDrive, Workflow, Radio, Gauge,
  CloudCog, Shield, Settings, ArrowRight, CheckCircle2
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import { Link, useNavigate } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const SectionHeader = ({ label, title, subtitle }) => (
  <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-10">
    <span className="section-label mb-4 inline-flex">{label}</span>
    <h2 className="text-2xl md:text-3xl font-800 text-[hsl(222_47%_11%)] mb-3"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
      {title}
    </h2>
    {subtitle && <p className="text-[hsl(215_20%_50%)] max-w-2xl text-base">{subtitle}</p>}
  </motion.div>
);

const ServicesPage = () => {
  const navigate = useNavigate();
  const aiMLServices = [
    { icon: Sparkles, title: 'Predictive Analytics', description: 'Build ML models that forecast trends, customer behavior, and business outcomes with high accuracy.', benefits: ['Revenue forecasting', 'Demand prediction', 'Churn prevention'], technologies: ['Scikit-learn', 'XGBoost', 'Prophet'], imageUrl: '/images/services/machine_learning.png' },
    { icon: Brain, title: 'Generative AI', description: 'Implement LLMs and generative models for content creation, code generation, and intelligent automation.', benefits: ['Content automation', 'Code assistance', 'Document generation'], technologies: ['GPT-4', 'Claude', 'LangChain'], imageUrl: '/images/services/artificial_intelligence.png' },
    { icon: MessageSquare, title: 'NLP Solutions', description: 'Extract insights from text with sentiment analysis, entity recognition, and document understanding.', benefits: ['Customer feedback analysis', 'Document processing', 'Chatbot intelligence'], technologies: ['spaCy', 'Transformers', 'BERT'], imageUrl: '/images/services/artificial_intelligence.png' },
    { icon: Eye, title: 'Computer Vision', description: 'Deploy image recognition, object detection, and visual quality inspection systems.', benefits: ['Quality control', 'Object detection', 'Image classification'], technologies: ['YOLO', 'ResNet', 'OpenCV'], imageUrl: '/images/services/artificial_intelligence.png' },
    { icon: Star, title: 'Recommendation Systems', description: 'Create personalized recommendation engines that drive engagement and revenue.', benefits: ['Product recommendations', 'Content personalization', 'User engagement'], technologies: ['Collaborative filtering', 'Matrix factorization', 'Deep learning'], imageUrl: '/images/services/machine_learning.png' },
    { icon: Activity, title: 'MLOps', description: 'Operationalize ML models with automated training, deployment, and monitoring pipelines.', benefits: ['Model versioning', 'Automated retraining', 'Performance monitoring'], technologies: ['MLflow', 'Kubeflow', 'SageMaker'], imageUrl: '/images/services/machine_learning.png' },
  ];

  const dataScienceServices = [
    { icon: LineChart, title: 'Statistical Modeling', description: 'Apply advanced statistical methods to understand relationships and test hypotheses in your data.', benefits: ['Hypothesis testing', 'Correlation analysis', 'Regression modeling'], technologies: ['R', 'Python', 'SAS'], imageUrl: '/images/services/data_science.png' },
    { icon: TrendingUp, title: 'Forecasting', description: 'Build time series models for accurate demand, sales, and resource planning.', benefits: ['Demand forecasting', 'Inventory optimization', 'Resource planning'], technologies: ['ARIMA', 'Prophet', 'LSTM'], imageUrl: '/images/services/data_science.png' },
    { icon: Target, title: 'Customer Analytics', description: 'Segment customers, predict lifetime value, and optimize marketing campaigns.', benefits: ['Customer segmentation', 'LTV prediction', 'Campaign optimization'], technologies: ['K-means', 'RFM analysis', 'Cohort analysis'], imageUrl: '/images/services/data_analytics.png' },
    { icon: Database, title: 'Data Mining', description: 'Discover hidden patterns and insights in large datasets using advanced algorithms.', benefits: ['Pattern discovery', 'Anomaly detection', 'Association rules'], technologies: ['Apriori', 'FP-Growth', 'DBSCAN'], imageUrl: '/images/services/data_science.png' },
  ];

  const analyticsServices = [
    { icon: PieChart, title: 'Dashboard Development', description: 'Create interactive dashboards that provide real-time visibility into business metrics.', benefits: ['Real-time monitoring', 'Interactive visualizations', 'Mobile access'], technologies: ['Power BI', 'Tableau', 'Looker'], imageUrl: '/images/services/business_intelligence.png' },
    { icon: Gauge, title: 'KPI Tracking', description: 'Define, track, and visualize key performance indicators across your organization.', benefits: ['Performance monitoring', 'Goal tracking', 'Automated alerts'], technologies: ['Power BI', 'Tableau', 'Google Data Studio'], imageUrl: '/images/services/business_intelligence.png' },
    { icon: BarChart3, title: 'Self-Service Analytics', description: 'Empower business users to explore data and create reports without IT dependency.', benefits: ['User empowerment', 'Faster insights', 'Reduced IT burden'], technologies: ['Power BI', 'Tableau', 'Qlik Sense'], imageUrl: '/images/services/data_analytics.png' },
  ];

  const advancedAnalyticsServices = [
    { icon: Zap, title: 'Prescriptive Analytics', description: 'Recommend optimal actions using optimization algorithms and decision science.', benefits: ['Decision optimization', 'Resource allocation', 'Risk mitigation'], technologies: ['Linear programming', 'Genetic algorithms', 'Simulation'], imageUrl: '/images/services/business_intelligence.png' },
    { icon: Shield, title: 'Risk Analytics', description: 'Identify, quantify, and mitigate business risks through advanced modeling.', benefits: ['Risk scoring', 'Fraud detection', 'Credit risk assessment'], technologies: ['Logistic regression', 'Random forests', 'Neural networks'], imageUrl: '/images/services/business_intelligence.png' },
    { icon: Star, title: 'Data & AI Consulting', description: 'Unlock the value of your enterprise data with specialized architectural advisory and design services.', benefits: ['Technology selection roadmap', 'ROI optimization', 'Data strategy audit'], technologies: ['Databricks', 'Snowflake', 'AWS', 'Azure'], imageUrl: '/images/consulting_meeting.png' }
  ];

  const dataEngineeringServices = [
    { icon: Workflow, title: 'ETL/ELT Pipelines', description: 'Build robust data pipelines that extract, transform, and load data at scale.', benefits: ['Automated data flows', 'Data quality', 'Scalability'], technologies: ['Apache Airflow', 'dbt', 'Fivetran'], imageUrl: '/images/services/data_engineering.png' },
    { icon: HardDrive, title: 'Data Warehousing', description: 'Design and implement modern data warehouses for analytics and reporting.', benefits: ['Centralized data', 'Fast queries', 'Historical analysis'], technologies: ['Snowflake', 'BigQuery', 'Redshift'], imageUrl: '/images/services/data_engineering.png' },
    { icon: Server, title: 'Data Lakes & Lakehouses', description: 'Build scalable data lakes and lakehouses for structured and unstructured data.', benefits: ['Unified storage', 'Cost efficiency', 'Flexibility'], technologies: ['Delta Lake', 'Apache Iceberg', 'S3'], imageUrl: '/images/services/data_engineering.png' },
    { icon: GitBranch, title: 'Apache Spark', description: 'Process large-scale data with distributed computing using Apache Spark.', benefits: ['Fast processing', 'Scalability', 'Real-time analytics'], technologies: ['PySpark', 'Spark SQL', 'Spark Streaming'], imageUrl: '/images/services/data_engineering.png' },
    { icon: Cog, title: 'Databricks', description: 'Leverage Databricks for unified analytics, ML, and data engineering workflows.', benefits: ['Collaborative notebooks', 'MLOps integration', 'Auto-scaling'], technologies: ['Databricks', 'Delta Lake', 'MLflow'], imageUrl: '/images/services/data_engineering.png' },
    { icon: Radio, title: 'Kafka Streaming', description: 'Build real-time data pipelines and streaming applications with Apache Kafka.', benefits: ['Real-time processing', 'Event-driven architecture', 'High throughput'], technologies: ['Kafka', 'Kafka Streams', 'Confluent'], imageUrl: '/images/services/data_engineering.png' },
  ];

  const cloudServices = [
    { icon: Cloud, title: 'AWS Solutions', description: 'Design, deploy, and optimize applications on Amazon Web Services.', benefits: ['Global infrastructure', 'Cost optimization', 'Managed services'], technologies: ['EC2', 'S3', 'Lambda', 'RDS'], imageUrl: '/images/services/cloud_solutions.png' },
    { icon: CloudCog, title: 'Microsoft Azure', description: 'Build enterprise applications on Azure with hybrid cloud capabilities.', benefits: ['Enterprise integration', 'Hybrid cloud', 'AI services'], technologies: ['Azure VMs', 'Azure SQL', 'Azure Functions'], imageUrl: '/images/services/cloud_solutions.png' },
    { icon: Cloud, title: 'Google Cloud Platform', description: 'Leverage GCP for data analytics, ML, and containerized applications.', benefits: ['BigQuery analytics', 'Kubernetes', 'AI/ML tools'], technologies: ['Compute Engine', 'BigQuery', 'Cloud Run'], imageUrl: '/images/services/cloud_solutions.png' },
    { icon: Settings, title: 'Cloud Migration', description: 'Migrate on-premise workloads to the cloud with minimal disruption.', benefits: ['Reduced costs', 'Improved scalability', 'Business continuity'], technologies: ['AWS Migration Hub', 'Azure Migrate', 'Terraform'], imageUrl: '/images/services/cloud_solutions.png' },
    { icon: Zap, title: 'DevOps & CI/CD', description: 'Automate deployment pipelines and infrastructure with DevOps best practices.', benefits: ['Faster deployments', 'Automated testing', 'Infrastructure as code'], technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible'], imageUrl: '/images/services/cloud_solutions.png' },
  ];

  const serviceGroups = [
    { id: 'ai-ml', label: 'AI & ML', title: 'Artificial Intelligence & Machine Learning', subtitle: 'Build intelligent systems that learn, adapt, and deliver measurable business value', services: aiMLServices, bg: false },
    { id: 'data-science', label: 'Data Science', title: 'Data Science', subtitle: 'Extract actionable insights through statistical rigor and advanced analytics', services: dataScienceServices, bg: true },
    { id: 'data-analytics', label: 'Analytics', title: 'Data Analytics', subtitle: 'Transform data into visual insights with interactive dashboards and reporting', services: analyticsServices, bg: false },
    { id: 'advanced-analytics', label: 'Advanced Analytics', title: 'Advanced Analytics', subtitle: 'Go beyond descriptive analytics with predictive and prescriptive insights', services: advancedAnalyticsServices, bg: true },
    { id: 'data-engineering', label: 'Engineering', title: 'Data Engineering', subtitle: 'Build scalable data infrastructure that powers analytics and ML at scale', services: dataEngineeringServices, bg: false },
    { id: 'cloud-solutions', label: 'Cloud', title: 'Cloud Solutions', subtitle: 'Migrate, modernize, and optimize your infrastructure on leading cloud platforms', services: cloudServices, bg: true },
  ];

  return (
    <>
      <Helmet>
        <title>Our Services – DataCloud Solutions</title>
        <meta name="description" content="Comprehensive data, AI, and cloud services including machine learning, data engineering, analytics, and cloud solutions." />
      </Helmet>
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />
          <div className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-blue-500/15 blur-[100px] pointer-events-none" />
          <div className="container-custom relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/25 text-blue-300 text-xs font-600 tracking-wider uppercase mb-6" style={{ fontWeight: 600 }}>
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-800 text-white mb-5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                Comprehensive Data Analytics, AI & Cloud Solutions
              </h1>
              <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
                End-to-end data analytics, AI & cloud solutions designed to transform your business — from strategy and architecture to implementation and ongoing optimization.
              </p>
              <Link to="/contact" className="btn-white">
                Schedule Consultation <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
              <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20Z" fill="white" />
            </svg>
          </div>
        </section>

        {/* Service Groups */}
        {serviceGroups.map((group, gi) => (
          <section key={gi} id={group.id} className={`py-16 ${group.bg ? 'bg-[hsl(214_32%_97%)]' : 'bg-white'}`}>
            <div className="container-custom">
              <SectionHeader label={group.label} title={group.title} subtitle={group.subtitle} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    {...service}
                    index={index}
                    showIllustration={true}
                    onCTAClick={() => navigate('/contact')}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="py-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl gradient-cta p-12 md:p-16 text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-white/10 blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-800 text-white mb-4" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800 }}>
                  Ready to Get Started?
                </h2>
                <p className="text-white/75 max-w-xl mx-auto mb-8 text-base">
                  Let's discuss how our services can help you achieve your data and AI goals.
                </p>
                <Link to="/contact" className="btn-white">
                  Schedule Consultation <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;