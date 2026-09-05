export interface NavSection {
  id: string;
  label: string;
  major: boolean;
  mark?: number;
}

export interface Project {
  id: string;
  name: string;
  period: string;
  role: string;
  description: string;
  stack: string[];
  status: "En producción" | "En desarrollo" | "Completado";
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  period: string;
  details: string[];
}

export interface Hobby {
  id: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}