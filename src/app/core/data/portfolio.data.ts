// ============================================================
// Portfolio Content — THE ONLY FILE YOU NEED TO EDIT
// ============================================================
// Update your personal info, projects, experience, and stack
// here. TypeScript will catch any missing required fields.
// ============================================================

import type { PortfolioData } from '../models/portfolio.models';

export const PORTFOLIO_DATA: PortfolioData = {
  meta: {
    siteName: 'Portfolio — Développeur Full-Stack',
    siteUrl: 'https://portfolio.vercel.app',
    seoDescription: 'Portfolio de développeur Full-Stack — Angular, Node.js, et plus.',
    ogImageUrl: '/assets/og-image.jpg',
    lang: 'fr',
  },

  nav: [
    { label: 'À propos',   anchor: '#about',      order: 1 },
    { label: 'Stack',      anchor: '#stack',       order: 2 },
    { label: 'Expérience', anchor: '#experience',  order: 3 },
    { label: 'Projets',    anchor: '#projects',    order: 4 },
    { label: 'Contact',    anchor: '#contact',     order: 5 },
  ],

  hero: {
    greeting: 'Bonjour, je suis',
    name: 'Votre Nom',
    title: 'Développeur Full-Stack',
    tagline: 'Je conçois des expériences du backend à l\'interface.',
    ctaLabel: 'Voir mes projets',
    ctaAnchor: '#projects',
    resumeUrl: '/assets/cv.pdf',
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/username',
        ariaLabel: 'Voir mon GitHub',
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/username',
        ariaLabel: 'Voir mon LinkedIn',
      },
    ],
  },

  about: {
    headline: 'À propos',
    body: 'Développeur Full-Stack passionné par la création d\'interfaces élégantes et de systèmes robustes.',
    highlights: [
      { icon: 'code',     value: '3+', label: 'ans d\'expérience' },
      { icon: 'layers',   value: '10+', label: 'projets livrés' },
      { icon: 'zap',      value: '5+', label: 'technologies maîtrisées' },
    ],
  },

  stack: {
    headline: 'Stack technique',
    skills: [
      { name: 'Angular',    icon: 'angular',     level: 'expert',       category: 'frontend' },
      { name: 'TypeScript', icon: 'typescript',  level: 'expert',       category: 'frontend' },
      { name: 'Node.js',    icon: 'nodejs',      level: 'advanced',     category: 'backend'  },
      { name: 'Docker',     icon: 'docker',      level: 'intermediate', category: 'devops'   },
    ],
  },

  experience: {
    headline: 'Expérience',
    entries: [
      {
        id: 'exp-1',
        company: 'Entreprise',
        role: 'Développeur Full-Stack',
        period: { start: '2022', end: 'present' },
        location: 'Paris, France',
        description: 'Description de votre poste et de vos responsabilités.',
        achievements: ['Réalisation notable 1', 'Réalisation notable 2'],
        tags: [{ label: 'Angular' }, { label: 'Node.js' }],
        current: true,
      },
    ],
  },

  projects: {
    headline: 'Projets',
    filterEnabled: true,
    projects: [
      {
        id: 'project-featured',
        title: 'Projet Featured',
        shortDescription: 'Description courte du projet.',
        longDescription: 'Description longue et détaillée du projet.',
        tags: [{ label: 'Angular' }, { label: 'TypeScript' }],
        status: 'live',
        featured: true,
        repoUrl: 'https://github.com/username/project',
      },
      {
        id: 'project-normal',
        title: 'Projet Normal',
        shortDescription: 'Un autre projet.',
        longDescription: 'Description longue du second projet.',
        tags: [{ label: 'Node.js' }],
        status: 'live',
        featured: false,
      },
    ],
  },

  contact: {
    headline: 'Contact',
    intro: 'Une idée, une mission, un café virtuel ?',
    config: {
      emailjsServiceId:  'YOUR_SERVICE_ID',
      emailjsTemplateId: 'YOUR_TEMPLATE_ID',
      emailjsPublicKey:  'YOUR_PUBLIC_KEY',
      recipientLabel:    'Envoyez-moi un message',
      successMessage:    'Message envoyé avec succès !',
      errorMessage:      'Une erreur est survenue. Réessayez.',
    },
    socialLinks: [
      {
        platform: 'github',
        url: 'https://github.com/username',
        ariaLabel: 'Voir mon GitHub',
      },
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/username',
        ariaLabel: 'Voir mon LinkedIn',
      },
    ],
  },
};
