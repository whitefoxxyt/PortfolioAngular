# Portfolio Angular — Context for Claude

## Projet

Portfolio SPA one-page d'un développeur fullstack. Design minimaliste premium inspiré d'Apple.
Repo GitHub : https://github.com/whitefoxxyt/PortfolioAngular
Issues GitHub : https://github.com/whitefoxxyt/PortfolioAngular/issues

---

## Décisions techniques (non négociables)

| Décision | Choix | Raison |
|---|---|---|
| Framework | Angular 21, Standalone Components | Dernière version stable au moment du scaffold |
| Tests | Vitest (via `@angular/build:unit-test`) | Angular 21 natif, API identique à Jest |
| Styles | SCSS + CSS custom properties (design tokens) | Cohérent avec Atomic Design |
| Animations | GSAP + ScrollTrigger | Scroll-driven premium, `ScrollRevealDirective` = point unique |
| Typographie | Inter (Google Fonts) | Sobre, premium, lisible |
| Couleur accent | #7C3AED (violet) | Tendance tech premium 2025 |
| Thème | Dark par défaut, toggle Light (RGAA) | RGAA = ratio contraste ≥ 4.5:1 en light |
| Contact | EmailJS (front-only) | Pas de backend à gérer |
| Déploiement | Vercel + SSG | Auto-deploy sur push main |
| Langue | Français | Cible recruteurs/tech leads FR |

---

## Architecture — Atomic Design

```
src/
├── app/
│   ├── core/
│   │   ├── models/portfolio.models.ts      ← Interfaces TypeScript (PortfolioData, etc.)
│   │   ├── data/portfolio.data.ts          ← LE SEUL FICHIER À ÉDITER pour le contenu
│   │   ├── services/
│   │   │   └── portfolio-data.service.ts   ← Source de vérité (signals Angular)
│   │   └── directives/
│   │       └── scroll-reveal.directive.ts  ← Point unique GSAP ScrollTrigger (à créer)
│   ├── shared/
│   │   ├── atoms/                          ← Button, Badge, Icon, ThemeToggle, SectionHeading
│   │   ├── molecules/                      ← NavBar, TechBadge, ProjectCard, ExperienceEntry
│   │   ├── organisms/                      ← Hero, About, Stack, Experience, Projects, Contact
│   │   └── layout/                         ← GridShell
│   ├── templates/                          ← NavShellLayout
│   └── pages/
│       └── home/                           ← HomePage (10 lignes, assemble les organisms)
├── styles/
│   ├── tokens/_tokens.scss                 ← CSS custom properties dark + light
│   ├── base/_reset.scss                    ← Modern CSS reset
│   └── utils/_mixins.scss                  ← respond-to, container, sr-only, flex-center
└── styles.scss                             ← Entry point global (importe tokens, reset, mixins)
```

---

## Commandes

```bash
npm start                    # Dev server → http://localhost:4200
npm run build                # Build SSG production
npx ng test --watch=false    # Tests Angular (Vitest)
npx vitest run               # Tests SCSS/Node (tokens, etc.)
```

---

## État d'avancement des issues

| Issue | Titre | Status |
|---|---|---|
| [#1](https://github.com/whitefoxxyt/PortfolioAngular/issues/1) | PRD | ✅ Terminée |
| [#2](https://github.com/whitefoxxyt/PortfolioAngular/issues/2) | Scaffolding Angular 21 + design system | ✅ Terminée |
| [#3](https://github.com/whitefoxxyt/PortfolioAngular/issues/3) | Data models + PortfolioDataService | ✅ Terminée |
| [#4](https://github.com/whitefoxxyt/PortfolioAngular/issues/4) | Theme system dark/light (RGAA) | ⏳ À faire |
| [#5](https://github.com/whitefoxxyt/PortfolioAngular/issues/5) | ScrollRevealDirective (GSAP) | ⏳ À faire |
| [#6](https://github.com/whitefoxxyt/PortfolioAngular/issues/6) | Atoms library | ⏳ À faire (bloqué par #4) |
| [#7](https://github.com/whitefoxxyt/PortfolioAngular/issues/7) | NavBar | ⏳ À faire (bloqué par #4, #5, #6) |
| [#8](https://github.com/whitefoxxyt/PortfolioAngular/issues/8) | Section Hero | ⏳ À faire (bloqué par #4, #5, #6) |
| [#9](https://github.com/whitefoxxyt/PortfolioAngular/issues/9) | Section À propos | ⏳ À faire (bloqué par #4, #5, #6) |
| [#10](https://github.com/whitefoxxyt/PortfolioAngular/issues/10) | Section Stack + GridShell | ⏳ À faire (bloqué par #4, #5, #6) |
| [#11](https://github.com/whitefoxxyt/PortfolioAngular/issues/11) | Section Expérience (timeline) | ⏳ À faire (bloqué par #4, #5, #6) |
| [#12](https://github.com/whitefoxxyt/PortfolioAngular/issues/12) | Section Projets | ⏳ À faire (bloqué par #4, #5, #6, #10) |
| [#13](https://github.com/whitefoxxyt/PortfolioAngular/issues/13) | Section Contact (EmailJS) | ⏳ À faire (bloqué par #4, #6) |
| [#14](https://github.com/whitefoxxyt/PortfolioAngular/issues/14) | HomePage assembly + SSG + SEO | ⏳ À faire (bloqué par #7→#13) |
| [#15](https://github.com/whitefoxxyt/PortfolioAngular/issues/15) | Déploiement Vercel + CI/CD | ⏳ À faire (bloqué par #14) |
| [#16](https://github.com/whitefoxxyt/PortfolioAngular/issues/16) | Tests unitaires + E2E Playwright | ⏳ À faire (bloqué par #14) |

**Prochaines issues débloquées : #4 et #5 (parallèles)**

---

## Conventions de code

- Tous les composants Angular sont **standalone**
- Chaque organism reçoit **un seul input typé** : `section = input.required<XxxSection>()`
- GSAP est initialisé **uniquement dans `afterNextRender()`** (SSG-safe)
- Les design tokens CSS sont **toujours utilisés via `var(--token)`**, jamais de valeurs hardcodées
- Les tests vérifient le **comportement observable**, jamais les détails d'implémentation

## Conventions de commits (Conventional Commits + emojis)

```
<emoji> <type>(<scope>): <description courte>

<body optionnel>

Closes #<numéro d'issue>
```

| Emoji | Type | Usage |
|---|---|---|
| 🏗️ | build | scaffolding, config, dépendances |
| ✨ | feat | nouvelle fonctionnalité |
| ✅ | test | ajout/modif de tests |
| ♻️ | refactor | refacto sans nouveau comportement |
| 🐛 | fix | correction de bug |
| 🎨 | style | CSS, tokens, styles |
| 📝 | docs | documentation |
| 🔧 | chore | config ESLint, Prettier, etc. |