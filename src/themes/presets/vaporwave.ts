/**
 * Vaporwave Theme
 *
 * Retro-futuristic aesthetic with pastel pink, teal, and purple tones.
 * Inspired by 80s/90s nostalgia, early internet culture, and Japanese city pop.
 * Features soft gradients, gentle rounding, and purple-tinted shadows.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.75rem',
  borderWidth: '1px',
  shadowSm: '0 1px 3px rgb(139 92 246 / 0.1)',
  shadowMd: '0 4px 12px rgb(139 92 246 / 0.15)',
  shadowLg: '0 10px 30px rgb(139 92 246 / 0.2)',
  fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const vaporwaveTheme: ThemeDefinition = {
  name: 'vaporwave',
  displayName: 'Vaporwave',
  description: 'Retro-futuristic pastel aesthetic with pink, teal, and purple tones',
  light: {
    background: '320 30% 94%',
    foreground: '270 50% 15%',
    card: '300 25% 98%',
    cardForeground: '270 50% 15%',
    popover: '300 25% 98%',
    popoverForeground: '270 50% 15%',
    primary: '298 90% 36.3%',
    primaryForeground: '0 0% 100%',
    secondary: '320 20% 93%',
    secondaryForeground: '270 30% 30%',
    muted: '320 20% 93%',
    mutedForeground: '270 15% 44.3%',
    accent: '173 80% 40%',
    accentForeground: '0 0% 23%',
    destructive: '340 82% 43%',
    destructiveForeground: '0 0% 100%',
    success: '173 80% 25%',
    successForeground: '0 0% 100%',
    warning: '38 92% 28.8%',
    warningForeground: '320 30% 94%',
    info: '298 90% 36.3%',
    infoForeground: '0 0% 100%',
    border: '300 20% 88%',
    input: '300 20% 88%',
    ring: '298 90% 64%',
    well: '320 30% 91%',
    wellForeground: '270 50% 15%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '270 50% 8%',
    foreground: '300 20% 92%',
    card: '270 45% 12%',
    cardForeground: '300 20% 92%',
    popover: '270 45% 12%',
    popoverForeground: '300 20% 92%',
    primary: '298 90% 70%',
    primaryForeground: '270 50% 8%',
    secondary: '270 30% 18%',
    secondaryForeground: '300 20% 92%',
    muted: '270 30% 18%',
    mutedForeground: '270 15% 58.8%',
    accent: '173 80% 25.8%',
    accentForeground: '270 50% 93.4%',
    destructive: '340 82% 63.5%',
    destructiveForeground: '270 50% 8%',
    success: '173 80% 50%',
    successForeground: '270 50% 8%',
    warning: '38 92% 50%',
    warningForeground: '270 50% 8%',
    info: '298 90% 70%',
    infoForeground: '270 50% 8%',
    border: '270 30% 20%',
    input: '270 30% 20%',
    ring: '298 90% 70%',
    well: '270 50% 5%',
    wellForeground: '300 20% 92%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_8px_24px_hsl(var(--primary)/0.22)] hover:-translate-y-0.5 hover:opacity-95 transition-all duration-200',
    },
    card: {
      base: 'bg-gradient-to-br from-card via-card to-secondary/80 border-primary/20 shadow-[0_12px_30px_hsl(var(--primary)/0.16)]',
    },
    input: {
      base: 'bg-card/80 border-primary/20 focus:border-accent',
    },
    badge: {
      base: 'tracking-[0.08em] uppercase',
    },
    alert: {
      base: 'bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20',
    },
  },
};
