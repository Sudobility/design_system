/**
 * DeFi (Decentralized Finance) Theme
 *
 * Inspired by Aave, Compound, dYdX, GMX.
 * Professional, data-dense, monospace numbers, minimal decoration.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.06)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  fontSans: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
};

export const defiTheme: ThemeDefinition = {
  name: 'defi',
  displayName: 'DeFi',
  description: 'Professional crypto-finance with monospace numbers and clean data presentation',
  light: {
    background: '210 40% 97%',
    foreground: '230 25% 10%',
    card: '0 0% 100%',
    cardForeground: '230 25% 10%',
    popover: '0 0% 100%',
    popoverForeground: '230 25% 10%',
    primary: '168 62% 28.4%',
    primaryForeground: '0 0% 100%',
    secondary: '230 15% 95%',
    secondaryForeground: '230 25% 10%',
    muted: '230 15% 95%',
    mutedForeground: '230 10% 45%',
    accent: '270 60% 61.8%',
    accentForeground: '0 0% 8.6%',
    destructive: '0 84% 45.9%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 28.5%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.5%',
    warningForeground: '210 40% 97%',
    info: '226 100% 57.8%',
    infoForeground: '0 0% 100%',
    border: '230 15% 90%',
    input: '230 15% 90%',
    ring: '168 62% 50%',
    well: '210 40% 94%',
    wellForeground: '230 25% 10%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '230 30% 10%',
    foreground: '0 0% 95%',
    card: '230 25% 14%',
    cardForeground: '0 0% 95%',
    popover: '230 25% 14%',
    popoverForeground: '0 0% 95%',
    primary: '168 62% 50%',
    primaryForeground: '230 30% 10%',
    secondary: '230 25% 18%',
    secondaryForeground: '0 0% 95%',
    muted: '230 25% 18%',
    mutedForeground: '230 10% 58%',
    accent: '270 60% 56.3%',
    accentForeground: '0 0% 100%',
    destructive: '0 62.8% 64.5%',
    destructiveForeground: '230 30% 10%',
    success: '142 71% 45%',
    successForeground: '230 30% 10%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '226 100% 69.3%',
    infoForeground: '230 30% 10%',
    border: '230 20% 20%',
    input: '230 20% 20%',
    ring: '168 62% 50%',
    well: '230 30% 7%',
    wellForeground: '0 0% 95%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-semibold tracking-[-0.01em] [font-variant-numeric:tabular-nums]',
    },
    card: {
      base: 'border-border/80 bg-card shadow-sm',
    },
    input: {
      base: '[font-variant-numeric:tabular-nums] font-mono bg-card/90',
    },
    badge: {
      base: '[font-variant-numeric:tabular-nums] font-mono text-[0.75rem] rounded-md',
    },
    alert: {
      base: 'border-l-4 border-l-info [font-variant-numeric:tabular-nums]',
    },
  },
};
