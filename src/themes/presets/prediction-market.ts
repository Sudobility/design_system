/**
 * Prediction Market Theme
 *
 * Inspired by Polymarket, Kalshi, Manifold.
 * Light-first, data-heavy, green/red outcome colors, clean informational design.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.05)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.08)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.08)',
  fontSans: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
};

export const predictionMarketTheme: ThemeDefinition = {
  name: 'prediction-market',
  displayName: 'Prediction Market',
  description: 'Data-heavy, light-first design with green/red outcome indicators',
  light: {
    background: '220 20% 96.5%',
    foreground: '0 0% 9%',
    card: '0 0% 100%',
    cardForeground: '0 0% 9%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 9%',
    primary: '234 89% 60%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 96%',
    secondaryForeground: '0 0% 9%',
    muted: '0 0% 96%',
    mutedForeground: '0 0% 42.3%',
    accent: '0 0% 96%',
    accentForeground: '0 0% 9%',
    destructive: '0 84% 45.5%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 28.3%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.2%',
    warningForeground: '220 20% 96.5%',
    info: '234 89% 60%',
    infoForeground: '0 0% 100%',
    border: '0 0% 90%',
    input: '0 0% 90%',
    ring: '234 89% 60%',
    well: '220 20% 93.5%',
    wellForeground: '0 0% 9%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 7%',
    foreground: '0 0% 95%',
    card: '0 0% 10%',
    cardForeground: '0 0% 95%',
    popover: '0 0% 10%',
    popoverForeground: '0 0% 95%',
    primary: '234 89% 70.8%',
    primaryForeground: '0 0% 7%',
    secondary: '0 0% 14%',
    secondaryForeground: '0 0% 95%',
    muted: '0 0% 14%',
    mutedForeground: '0 0% 55%',
    accent: '0 0% 14%',
    accentForeground: '0 0% 95%',
    destructive: '0 62.8% 63.2%',
    destructiveForeground: '0 0% 7%',
    success: '142 71% 45%',
    successForeground: '0 0% 7%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '234 89% 70.8%',
    infoForeground: '0 0% 7%',
    border: '0 0% 16%',
    input: '0 0% 16%',
    ring: '234 89% 66%',
    well: '0 0% 4%',
    wellForeground: '0 0% 95%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-semibold [font-variant-numeric:tabular-nums]',
    },
    card: {
      base: 'border-border/80 hover:border-primary/30 transition-colors',
    },
    input: {
      base: '[font-variant-numeric:tabular-nums] bg-background',
    },
    badge: {
      base: 'font-semibold [font-variant-numeric:tabular-nums] rounded-md',
    },
    alert: {
      base: 'border-l-4 [font-variant-numeric:tabular-nums]',
    },
  },
};
