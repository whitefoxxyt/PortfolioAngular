import { Injectable, signal, computed } from '@angular/core';
import { PORTFOLIO_DATA } from '../data/portfolio.data';
import type { PortfolioData, ProjectCard, ThemeMode } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class PortfolioDataService {
  readonly data: PortfolioData = PORTFOLIO_DATA;

  readonly theme = signal<ThemeMode>('dark');

  readonly featuredProjects = computed<ProjectCard[]>(() =>
    this.data.projects.projects.filter((p) => p.featured)
  );

  toggleTheme(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }
}
