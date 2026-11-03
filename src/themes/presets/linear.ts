/**
 * Linear Theme
 *
 * Linear app aesthetic — dark-mode-first, subtle, professional.
 * Indigo/violet primary with very subtle shadows and minimal chrome.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.05)',
  shadowMd: '0 2px 4px rgb(0 0 0 / 0.08)',
  shadowLg: '0 4px 8px rgb(0 0 0 / 0.12)',
  fontSans: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, monospace',
};

export const linearTheme: ThemeDefinition = {
  name: 'linear',
  displayName: 'Linear',
  description: 'Dark-mode-first professional aesthetic inspired by Linear',
  light: {
    background: '220 14% 96%',
    foreground: '224 71% 4%',
    card: '0 0% 100%',
    cardForeground: '224 71% 4%',
    popover: '0 0% 100%',
    popoverForeground: '224 71% 4%',
    primary: '239 84% 62%',
    primaryForeground: '0 0% 100%',
    secondary: '220 14% 92%',
    secondaryForeground: '224 71% 4%',
    muted: '220 14% 92%',
    mutedForeground: '220 9% 42.8%',
    accent: '250 60% 94%',
    accentForeground: '239 84% 62.7%',
    destructive: '0 84% 44.6%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 27.7%',
    successForeground: '0 0% 100%',
    warning: '38 92% 29.6%',
    warningForeground: '220 14% 96%',
    info: '239 84% 62%',
    infoForeground: '0 0% 100%',
    border: '220 13% 91%',
    input: '220 13% 91%',
    ring: '239 84% 67%',
    well: '220 14% 93%',
    wellForeground: '224 71% 4%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '240 33% 5%',
    foreground: '226 64% 96%',
    card: '240 20% 8%',
    cardForeground: '226 64% 96%',
    popover: '240 20% 8%',
    popoverForeground: '226 64% 96%',
    primary: '239 84% 74%',
    primaryForeground: '240 33% 5%',
    secondary: '240 15% 14%',
    secondaryForeground: '226 64% 88%',
    muted: '240 15% 14%',
    mutedForeground: '228 14% 55.9%',
    accent: '250 30% 18%',
    accentForeground: '239 84% 74%',
    destructive: '0 63% 61.6%',
    destructiveForeground: '240 33% 5%',
    success: '142 71% 45%',
    successForeground: '240 33% 5%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '239 84% 74%',
    infoForeground: '240 33% 5%',
    border: '240 15% 14%',
    input: '240 15% 14%',
    ring: '239 84% 74%',
    well: '240 33% 2%',
    wellForeground: '226 64% 96%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-medium tracking-[-0.01em] shadow-none hover:brightness-110',
    },
    card: {
      base: 'bg-card/95 border-white/5 shadow-sm',
    },
    input: {
      base: 'bg-card/80 border-border/80 shadow-none',
    },
    badge: {
      base: 'rounded-md uppercase tracking-[0.12em] text-[0.7rem]',
    },
    alert: {
      base: 'rounded-lg border-l-2 border-l-primary bg-card/85',
    },
  },
};
