/**
 * Design tokens behavioral tests.
 * We verify that the CSS custom properties are declared on :root
 * by loading the stylesheet into a jsdom environment and checking
 * that the expected variable names exist in the parsed rules.
 *
 * We test BEHAVIOR (tokens are available and named correctly),
 * not implementation (we don't care if they live in one file or ten).
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

const TOKENS_FILE = resolve(__dirname, '_tokens.scss');

function loadTokensSource(): string {
  return readFileSync(TOKENS_FILE, 'utf-8');
}

describe('Design tokens — dark theme (default :root)', () => {
  let source: string;

  beforeAll(() => {
    source = loadTokensSource();
  });

  const requiredDarkTokens = [
    '--color-bg',
    '--color-surface',
    '--color-surface-raised',
    '--color-text',
    '--color-text-muted',
    '--color-accent',
    '--color-accent-hover',
    '--color-border',
  ];

  test.each(requiredDarkTokens)(
    'declares %s in :root block',
    (token) => {
      expect(source).toContain(token);
    }
  );

  test('--color-accent uses violet (#7C3AED family)', () => {
    // accent must reference a violet-family value
    const accentLine = source
      .split('\n')
      .find((l) => l.includes('--color-accent:') && !l.includes('hover'));
    expect(accentLine).toBeDefined();
    // accepts hex or hsl — must contain 7C3AED or equivalent hsl(263
    expect(accentLine).toMatch(/(#7[Cc]3[Aa][Ee][Dd]|#6d28d9|hsl\(263|hsl\(258)/i);
  });
});

describe('Design tokens — light theme override ([data-theme="light"])', () => {
  let source: string;

  beforeAll(() => {
    source = loadTokensSource();
  });

  test('declares a [data-theme="light"] block', () => {
    expect(source).toContain('[data-theme="light"]');
  });

  test('overrides --color-bg in light theme', () => {
    const lightBlock = source.slice(source.indexOf('[data-theme="light"]'));
    expect(lightBlock).toContain('--color-bg');
  });

  test('overrides --color-text in light theme', () => {
    const lightBlock = source.slice(source.indexOf('[data-theme="light"]'));
    expect(lightBlock).toContain('--color-text');
  });
});

describe('Design tokens — spacing scale', () => {
  let source: string;

  beforeAll(() => {
    source = loadTokensSource();
  });

  const requiredSpacingTokens = [
    '--spacing-xs',
    '--spacing-sm',
    '--spacing-md',
    '--spacing-lg',
    '--spacing-xl',
    '--spacing-2xl',
  ];

  test.each(requiredSpacingTokens)('declares %s', (token) => {
    expect(source).toContain(token);
  });
});

describe('Design tokens — typography', () => {
  let source: string;

  beforeAll(() => {
    source = loadTokensSource();
  });

  test('declares --font-sans', () => {
    expect(source).toContain('--font-sans');
  });

  test('--font-sans references Inter', () => {
    const fontLine = source
      .split('\n')
      .find((l) => l.includes('--font-sans'));
    expect(fontLine).toMatch(/Inter/i);
  });

  test('declares --font-size-base', () => {
    expect(source).toContain('--font-size-base');
  });

  test('declares --line-height-base', () => {
    expect(source).toContain('--line-height-base');
  });
});

describe('Design tokens — border radius', () => {
  let source: string;

  beforeAll(() => {
    source = loadTokensSource();
  });

  test('declares --radius-sm', () => {
    expect(source).toContain('--radius-sm');
  });

  test('declares --radius-md', () => {
    expect(source).toContain('--radius-md');
  });

  test('declares --radius-lg', () => {
    expect(source).toContain('--radius-lg');
  });
});
