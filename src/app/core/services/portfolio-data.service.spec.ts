import { TestBed } from '@angular/core/testing';
import { PortfolioDataService } from './portfolio-data.service';

describe('PortfolioDataService', () => {
  let service: PortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDataService);
  });

  // ── Cycle 1 ──────────────────────────────────────────────
  it('theme starts as dark by default', () => {
    expect(service.theme()).toBe('dark');
  });

  // ── Cycle 2 ──────────────────────────────────────────────
  it('toggleTheme switches dark to light', () => {
    service.toggleTheme();
    expect(service.theme()).toBe('light');
  });

  // ── Cycle 3 ──────────────────────────────────────────────
  it('toggleTheme switches light back to dark', () => {
    service.toggleTheme();
    service.toggleTheme();
    expect(service.theme()).toBe('dark');
  });

  // ── Cycle 4 ──────────────────────────────────────────────
  it('data exposes all required sections', () => {
    expect(service.data.nav).toBeDefined();
    expect(service.data.hero).toBeDefined();
    expect(service.data.about).toBeDefined();
    expect(service.data.stack).toBeDefined();
    expect(service.data.experience).toBeDefined();
    expect(service.data.projects).toBeDefined();
    expect(service.data.contact).toBeDefined();
  });

  it('nav links are ordered and have anchors', () => {
    const nav = service.data.nav;
    expect(nav.length).toBeGreaterThan(0);
    nav.forEach((link) => {
      expect(link.anchor).toMatch(/^#/);
      expect(link.label.length).toBeGreaterThan(0);
    });
  });

  // ── Cycle 5 ──────────────────────────────────────────────
  it('featuredProjects returns only featured projects', () => {
    const featured = service.featuredProjects();
    expect(featured.length).toBeGreaterThan(0);
    featured.forEach((p) => expect(p.featured).toBe(true));
  });

  it('featuredProjects excludes non-featured projects', () => {
    const featured = service.featuredProjects();
    const allProjects = service.data.projects.projects;
    const nonFeatured = allProjects.filter((p) => !p.featured);
    nonFeatured.forEach((p) => {
      expect(featured.find((f) => f.id === p.id)).toBeUndefined();
    });
  });
});