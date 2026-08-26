export interface SkillCluster {
  name: string;
  accent: 'cyan' | 'violet' | 'neutral';
  skills: { name: string; evidence?: string }[];
}

export const skillClusters: SkillCluster[] = [
  {
    name: 'AI / ML',
    accent: 'cyan',
    skills: [
      { name: 'Python', evidence: '10+ projects' },
      { name: 'PyTorch', evidence: '6 projects' },
      { name: 'scikit-learn', evidence: '4 projects' },
      { name: 'Computer Vision' },
      { name: 'NLP' },
      { name: 'Audio ML' },
      { name: 'Cost-Sensitive ML' },
    ],
  },
  {
    name: 'GenAI',
    accent: 'violet',
    skills: [
      { name: 'LLMs', evidence: '5+ projects' },
      { name: 'RAG', evidence: '4 projects' },
      { name: 'Embeddings' },
      { name: 'Vector DBs' },
      { name: 'AI Agents', evidence: '4 projects' },
      { name: 'Prompt Engineering' },
    ],
  },
  {
    name: 'Deep Learning',
    accent: 'cyan',
    skills: [
      { name: 'cGAN / ESRGAN' },
      { name: 'RRDB-Net' },
      { name: 'DenseNet-121' },
      { name: 'EfficientNet-B3' },
      { name: 'AST Transformer' },
      { name: 'Mixed Precision (AMP)' },
      { name: 'TTA / EMA' },
    ],
  },
  {
    name: 'Agent Frameworks',
    accent: 'violet',
    skills: [
      { name: 'AutoGen', evidence: 'Multi-Agent Data Analyst' },
      { name: 'CrewAI', evidence: 'Customer Support' },
      { name: 'LangChain' },
      { name: 'LangGraph' },
      { name: 'GRPO / RL', evidence: 'ModelCardAudit' },
      { name: 'OpenEnv' },
    ],
  },
  {
    name: 'Backend',
    accent: 'neutral',
    skills: [
      { name: 'FastAPI' },
      { name: 'Django' },
      { name: 'PostgreSQL' },
      { name: 'Docker' },
      { name: 'GitHub Actions' },
      { name: 'REST APIs' },
    ],
  },
  {
    name: 'Data & Cloud',
    accent: 'neutral',
    skills: [
      { name: 'ChromaDB' },
      { name: 'Astra DB' },
      { name: 'HuggingFace' },
      { name: 'Kaggle' },
      { name: 'Wandb' },
      { name: 'Streamlit' },
    ],
  },
];
