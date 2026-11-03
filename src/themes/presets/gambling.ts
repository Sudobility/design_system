/**
 * Gambling / Casino Theme
 *
 * Inspired by DraftKings, FanDuel, Stake.com, Rollbit.
 * Dark, luxurious, gold/amber accents, bold CTAs, high energy.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 3px rgb(0 0 0 / 0.3)',
  shadowMd: '0 4px 12px rgb(0 0 0 / 0.4)',
  shadowLg: '0 4px 15px hsl(var(--accent) / 0.4)',
  fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const gamblingTheme: ThemeDefinition = {
  name: 'gambling',
  displayName: 'Gambling',
  description: 'Dark, luxurious design with gold accents and bold call-to-action buttons',
  light: {
    background: '0 0% 97%',
    foreground: '0 0% 5%',
    card: '0 0% 100%',
    cardForeground: '0 0% 5%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 5%',
    primary: '150 60% 29.3%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 93%',
    secondaryForeground: '0 0% 9%',
    muted: '0 0% 93%',
    mutedForeground: '0 0% 40%',
    accent: '36 90% 55%',
    accentForeground: '0 0% 0%',
    destructive: '0 84% 45.5%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 28.3%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.2%',
    warningForeground: '0 0% 97%',
    info: '226 100% 57.4%',
    infoForeground: '0 0% 100%',
    border: '0 0% 85%',
    input: '0 0% 85%',
    ring: '36 90% 55%',
    well: '0 0% 94%',
    wellForeground: '0 0% 5%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 5%',
    foreground: '0 0% 95%',
    card: '0 0% 10%',
    cardForeground: '0 0% 95%',
    popover: '0 0% 10%',
    popoverForeground: '0 0% 95%',
    primary: '150 60% 38.5%',
    primaryForeground: '0 0% 5%',
    secondary: '0 0% 14%',
    secondaryForeground: '0 0% 95%',
    muted: '0 0% 14%',
    mutedForeground: '0 0% 54.1%',
    accent: '36 90% 32.4%',
    accentForeground: '0 0% 94.9%',
    destructive: '0 62.8% 63.2%',
    destructiveForeground: '0 0% 5%',
    success: '142 71% 45%',
    successForeground: '0 0% 5%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '226 100% 68.2%',
    infoForeground: '0 0% 5%',
    border: '0 0% 16%',
    input: '0 0% 16%',
    ring: '36 90% 55%',
    well: '0 0% 2%',
    wellForeground: '0 0% 95%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-extrabold uppercase tracking-wide bg-gradient-to-r from-[hsl(45,100%,50%)] to-[hsl(36,90%,48%)] text-black shadow-[0_4px_15px_hsl(var(--accent)/0.4)] hover:shadow-[0_6px_20px_hsl(var(--accent)/0.5)]',
    },
    card: {
      base: 'bg-card border-accent/20 shadow-[0_8px_24px_hsl(var(--accent)/0.12)]',
    },
    input: {
      base: 'bg-background border-accent/20 focus:border-accent',
    },
    badge: {
      base: 'font-bold uppercase text-[0.75rem] border border-accent/20 bg-accent/10 text-accent',
    },
    alert: {
      base: 'border-l-4 border-l-accent bg-card/95',
    },
  },
};
