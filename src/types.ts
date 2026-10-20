export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'Software & Backend' | 'Data & Business Intelligence' | 'Frontend & Productivity' | 'Full-Stack & Web Apps';
  description: string;
  longDescription?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  accentColor: string;
  interfaceType: 'agro' | 'chat' | 'calculator' | 'bi-dashboard' | 'zine';
  codeSnippet?: {
    lang: string;
    code: string;
  };
  liveUrl?: string;
  repoUrl?: string;
  features?: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  issuer?: string;
  certificateUrl?: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
  focus: string[];
  runeTag: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  status?: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  disciplineRule: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconName: string;
  skills: { name: string; level: number; note: string }[];
  runeSigil: string;
}
