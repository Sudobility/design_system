/**
 * Retro Theme
 *
 * Warm, vintage aesthetic with cream backgrounds, earthy tones,
 * and serif typography. Inspired by mid-century design, old book covers,
 * and classic print layouts. Features warm brown-tinted shadows
 * and a rust orange primary color.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.75rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(120 53 15 / 0.08)',
  shadowMd: '0 4px 8px rgb(120 53 15 / 0.12)',
  shadowLg: '0 10px 20px rgb(120 53 15 / 0.15)',
  fontSans: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  fontMono: '"Courier New", Courier, monospace',
};

export const retroTheme: ThemeDefinition = {
  name: 'retro',
  displayName: 'Retro',
  description: 'Warm, vintage aesthetic with earthy tones and serif typography',
  light: {
    background: '48 100% 96%',
    foreground: '20 14% 5.8%',
    card: '40 60% 97%',
    cardForeground: '20 14% 5.8%',
    popover: '40 60% 97%',
    popoverForeground: '20 14% 5.8%',
    primary: '38 92% 29.9%',
    primaryForeground: '48 100% 96%',
    secondary: '140 20% 90%',
    secondaryForeground: '140 15% 25%',
    muted: '40 30% 92%',
    mutedForeground: '20 10% 42.5%',
    accent: '140 25% 42%',
    accentForeground: '48 100% 3.6%',
    destructive: '0 72% 47.4%',
    destructiveForeground: '48 100% 96%',
    success: '140 25% 36.7%',
    successForeground: '48 100% 96%',
    warning: '38 92% 29.9%',
    warningForeground: '48 100% 96%',
    info: '210 50% 43.1%',
    infoForeground: '48 100% 96%',
    border: '30 25% 82%',
    input: '30 25% 82%',
    ring: '38 92% 44%',
    well: '48 100% 93%',
    wellForeground: '20 14% 5.8%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '20 14% 10%',
    foreground: '40 30% 90%',
    card: '20 14% 14%',
    cardForeground: '40 30% 90%',
    popover: '20 14% 14%',
    popoverForeground: '40 30% 90%',
    primary: '38 92% 50%',
    primaryForeground: '20 14% 10%',
    secondary: '140 15% 18%',
    secondaryForeground: '40 30% 90%',
    muted: '20 10% 18%',
    mutedForeground: '30 15% 57%',
    accent: '140 25% 36%',
    accentForeground: '20 14% 91.3%',
    destructive: '0 72% 67.5%',
    destructiveForeground: '20 14% 10%',
    success: '140 25% 51.5%',
    successForeground: '20 14% 10%',
    warning: '38 92% 50%',
    warningForeground: '20 14% 10%',
    info: '210 50% 60%',
    infoForeground: '20 14% 10%',
    border: '20 10% 22%',
    input: '20 10% 22%',
    ring: '38 92% 50%',
    well: '20 14% 7%',
    wellForeground: '40 30% 90%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-semibold tracking-[0.04em] shadow-[0_2px_0_hsl(var(--border))] hover:-translate-y-0.5 transition-all duration-200',
    },
    card: {
      base: 'border-[1.5px] border-border/80 bg-card/95',
    },
    input: {
      base: 'bg-card/70 border-border/90',
    },
    badge: {
      base: 'font-semibold tracking-[0.04em]',
    },
    alert: {
      base: 'border-l-[6px] border-l-primary bg-card/85',
    },
  },
};
