// ============================================================
// Portfolio Data Models
// ============================================================
// All data contracts for the portfolio. Edit portfolio.data.ts
// to update content — never touch component files.
// ============================================================

export type ThemeMode = 'light' | 'dark';
export type SkillLevel = 'expert' | 'advanced' | 'intermediate';
export type ProjectStatus = 'live' | 'archived' | 'wip';
export type SkillCategory = 'frontend' | 'backend' | 'tooling' | 'design' | 'devops';
export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'email';

// ── Primitives ────────────────────────────────────────────

export interface NavLink {
  label: string;    // "À propos"
  anchor: string;   // "#about"
  order: number;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  ariaLabel: string;  // "Voir mon GitHub"
}

export interface TechTag {
  label: string;
}

export interface Skill {
  name: string;
  icon: string;           // icon key or SVG path
  level: SkillLevel;
  category: SkillCategory;
  yearsOfExperience?: number;
}

// ── Sections ─────────────────────────────────────────────

export interface HeroSection {
  greeting: string;       // "Bonjour, je suis"
  name: string;           // "Jean Dupont"
  title: string;          // "Développeur Full-Stack"
  tagline: string;        // one punchy sentence
  ctaLabel: string;       // "Voir mes projets"
  ctaAnchor: string;      // "#projects"
  resumeUrl?: string;
  socialLinks: SocialLink[];
  avatarUrl?: string;
}

export interface AboutSection {
  headline: string;
  body: string;           // paragraph(s), supports line breaks
  highlights: Array<{
    icon: string;
    value: string;        // "5+"
    label: string;        // "ans d'expérience"
  }>;
  photoUrl?: string;
  photoAlt?: string;
}

export interface StackSection {
  headline: string;
  subheadline?: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string | 'present' };
  location: string;
  description: string;
  achievements: string[];
  tags: TechTag[];
  logoUrl?: string;
  current?: boolean;
}

export interface ExperienceSection {
  headline: string;
  entries: ExperienceEntry[];
}

export interface ProjectCard {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  thumbnail?: string;
  tags: TechTag[];
  status: ProjectStatus;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface ProjectsSection {
  headline: string;
  subheadline?: string;
  projects: ProjectCard[];
  filterEnabled: boolean;
}

export interface ContactConfig {
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;
  recipientLabel: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactSection {
  headline: string;
  intro: string;
  config: ContactConfig;
  socialLinks: SocialLink[];
}

// ── Root aggregate ────────────────────────────────────────

export interface PortfolioMeta {
  siteName: string;
  siteUrl: string;
  seoDescription: string;
  ogImageUrl: string;
  lang: 'fr';
}

export interface PortfolioData {
  meta: PortfolioMeta;
  nav: NavLink[];
  hero: HeroSection;
  about: AboutSection;
  stack: StackSection;
  experience: ExperienceSection;
  projects: ProjectsSection;
  contact: ContactSection;
}