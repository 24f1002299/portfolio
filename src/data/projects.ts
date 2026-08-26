export interface Project {
  title: string;
  slug: string;
  category: string[];
  year: number;
  problem: string;
  stack: string[];
  result: string;
  github: string;
  demo: string;
  tier: 1 | 2;
  isCourseProject?: boolean;
}

export const projects: Project[] = [
  // ── Tier 1: Featured ──────────────────────────────────────────────
  {
    title: 'ModelCardAudit-Env',
    slug: 'model-card-audit',
    category: ['ai-agents'],
    year: 2026,
    problem: 'An RL agent that audits ML model cards for completeness, technical consistency & regulatory compliance.',
    stack: ['GRPO / RL', 'OpenEnv', 'FastAPI', 'HuggingFace', 'Docker'],
    result: 'RL Scores: 0.72 · 0.55 · 0.31',
    github: 'https://github.com/24f1002299/ModelCardAudit-Env',
    demo: '#',
    tier: 1,
  },
  {
    title: 'Multi-Agent Data Analyst',
    slug: 'multi-agent-data-analyst',
    category: ['ai-agents'],
    year: 2025,
    problem: 'Multi-agent system that analyzes datasets through collaborative planning, code generation & execution.',
    stack: ['AutoGen', 'Python', 'Docker', 'Streamlit', 'OpenRouter'],
    result: 'Secure Docker sandbox + collaborative agent pipeline',
    github: 'https://github.com/24f1002299/Multi-Agent-Data-Analyst-AI',
    demo: '#',
    tier: 1,
  },
  {
    title: 'Plant Leaf Super-Resolution cGAN',
    slug: 'plant-leaf-super-resolution',
    category: ['computer-vision'],
    year: 2026,
    problem: '4× single-image super-resolution of plant leaf imagery using a two-phase conditional GAN pipeline.',
    stack: ['PyTorch', 'cGAN / ESRGAN', 'RRDB-Net', 'VGG-19 Perceptual Loss'],
    result: 'MAE 16.67 — 9.4% better than bicubic baseline',
    github: 'https://github.com/24f1002299/Plant-Leaf-Super-Resolution-cGAN',
    demo: '#',
    tier: 1,
  },

  // ── Tier 2: Selected ──────────────────────────────────────────────
  {
    title: 'Comment Category Prediction',
    slug: 'comment-category-prediction',
    category: ['ml'],
    year: 2026,
    problem: 'Multi-class comment moderation across 198K samples with 21K TF-IDF features and ensemble ML.',
    stack: ['LightGBM', 'XGBoost', 'TF-IDF', 'Optuna'],
    result: 'Macro-F1: 0.8216',
    github: 'https://github.com/24f1002299/Comment-Category-Prediction-ML',
    demo: '#',
    tier: 2,
    isCourseProject: true,
  },
  {
    title: 'Messy Mashup: Music Genre',
    slug: 'music-genre-classification',
    category: ['ml'],
    year: 2026,
    problem: '10-class music genre classification from audio mashups using 3-channel mel spectrograms.',
    stack: ['PyTorch', 'AST Transformer', 'EfficientNet-B3', 'SE-ResNet'],
    result: '3-model ensemble + 7-step TTA + pseudo-labeling',
    github: 'https://github.com/24f1002299/Messy-Mashup-Music-Genre-Classification',
    demo: '#',
    tier: 2,
    isCourseProject: true,
  },
  {
    title: 'Asymmetric Cost Medical AI',
    slug: 'medical-ai',
    category: ['ml', 'computer-vision'],
    year: 2026,
    problem: 'Chest X-ray classifier across 20 pathologies optimized for asymmetric costs — false negatives penalized 5×.',
    stack: ['PyTorch', 'DenseNet-121', 'NIH ChestX-ray14', 'TTA'],
    result: 'Leaderboard score: −4.34',
    github: 'https://github.com/24f1002299/Asymmetric-Cost-Optimization-in-Medical-AI',
    demo: '#',
    tier: 2,
  },
  {
    title: 'Multi-Agent Customer Support',
    slug: 'customer-support',
    category: ['ai-agents', 'genai'],
    year: 2026,
    problem: '5-agent RAG pipeline — triage, order analysis, policy retrieval, drafting, compliance — for e-commerce support.',
    stack: ['CrewAI', 'ChromaDB', 'GPT-4o', 'Gradio'],
    result: '5 specialized agents · HuggingFace Spaces deployment',
    github: 'https://github.com/24f1002299/Crew-AI-Multi-Agent-Customer-Support-Ticket-Resolver',
    demo: '#',
    tier: 2,
  },
  {
    title: 'Audio Classifier CNN',
    slug: 'audio-classifier',
    category: ['ml'],
    year: 2025,
    problem: 'Deep learning audio classifier with ResNet architecture and a real-time visualization dashboard.',
    stack: ['PyTorch', 'ResNet', 'Next.js', 'FastAPI'],
    result: 'Real-time classification via serverless GPU endpoint',
    github: 'https://github.com/24f1002299/Audio-Classifier--CNN',
    demo: '#',
    tier: 2,
  },
  {
    title: 'Describe2Deploy',
    slug: 'describe2deploy',
    category: ['genai'],
    year: 2025,
    problem: 'Transforms natural language descriptions into fully deployed web applications on GitHub Pages.',
    stack: ['GPT-4o', 'FastAPI', 'GitHub Actions'],
    result: 'Natural language → deployed app in seconds',
    github: 'https://github.com/24f1002299/Describe2Deploy-Automated-Tool',
    demo: '#',
    tier: 2,
  },
  {
    title: 'F1 RAG Chatbot',
    slug: 'f1-rag-chatbot',
    category: ['genai'],
    year: 2025,
    problem: 'Formula 1 knowledge chatbot using RAG with vector search for accurate, grounded retrieval.',
    stack: ['RAG', 'Gemini AI', 'Astra DB', 'Next.js'],
    result: 'Full F1 knowledge base with vector-grounded answers',
    github: 'https://github.com/24f1002299/F1_RAG_Chatbot',
    demo: '#',
    tier: 2,
  },
  {
    title: 'Flight Booking Application',
    slug: 'flight-booking',
    category: ['full-stack'],
    year: 2024,
    problem: 'Full-stack flight booking system with live Amadeus API, interactive seat selection & secure payments.',
    stack: ['Django', 'PostgreSQL', 'Amadeus API', 'REST API'],
    result: 'Production-ready booking system with live flight data',
    github: 'https://github.com/24f1002299/Flight-Booking-Application',
    demo: '#',
    tier: 2,
  },
  {
    title: 'LLM Semantic Book Recommender',
    slug: 'book-recommender',
    category: ['genai'],
    year: 2025,
    problem: 'AI-powered book recommendation using semantic search & LLMs with emotion-based filtering.',
    stack: ['LangChain', 'ChromaDB', 'HuggingFace', 'Gradio'],
    result: 'Semantic search + emotion-filtered recommendations',
    github: 'https://github.com/24f1002299/LLM-Semantic-Book-Recommender',
    demo: '#',
    tier: 2,
  },
];

export const featuredProjects = projects.filter((p) => p.tier === 1);
export const selectedProjects = projects.filter((p) => p.tier === 2);

export const categoryLabels: Record<string, string> = {
  all: 'All',
  'ai-agents': 'AI Agents',
  genai: 'GenAI',
  ml: 'ML',
  'computer-vision': 'Computer Vision',
  'full-stack': 'Full Stack',
};
