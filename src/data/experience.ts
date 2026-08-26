export interface Experience {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  achievements: string[];
  accent: 'cyan' | 'violet' | 'neutral';
}

export const experiences: Experience[] = [
  {
    title: 'Python Developer',
    company: 'Infosys Springboard',
    type: 'Internship',
    period: 'Oct 2025 — Dec 2025',
    location: 'Remote',
    accent: 'cyan',
    achievements: [
      'Built Python automation scripts as part of the Springboard developer program',
      'Completed certifications in Python, OOP, Agile Scrum, NoSQL, and Software Engineering',
      'Applied software engineering best practices in a structured corporate training environment',
    ],
  },
  {
    title: 'Technical Team Member — WebOps',
    company: 'IIT Madras BS in Data Science',
    type: 'Full-time',
    period: 'Aug 2025 — Jan 2026',
    location: 'Remote · Chennai, Tamil Nadu',
    accent: 'violet',
    achievements: [
      'Maintained and improved web infrastructure serving 10,000+ students in the IIT Madras BS program',
      'Collaborated with a technical team to ensure platform reliability and performance',
      'Contributed to web operations and technical tooling for one of India\'s largest online degree programs',
    ],
  },
  {
    title: 'Diploma Trainee Engineer',
    company: 'Bajaj Auto Ltd',
    type: 'Internship',
    period: 'Aug 2023 — Jul 2024',
    location: 'Pune / Pimpri-Chinchwad',
    accent: 'neutral',
    achievements: [
      'Completed a year-long engineering diploma training program in automotive manufacturing',
      'Gained hands-on exposure to industrial processes, quality systems, and production workflows',
      'Worked within cross-functional teams on engineering tasks in a large-scale manufacturing environment',
    ],
  },
];
