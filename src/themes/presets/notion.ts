/**
 * Notion Theme
 *
 * Notion-like — warm, content-focused, minimal chrome.
 * Warm tones, thin borders, system fonts, barely-visible shadows.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.04)',
  shadowMd: '0 2px 4px rgb(0 0 0 / 0.06)',
  shadowLg: '0 4px 8px rgb(0 0 0 / 0.08)',
  fontSans: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'SFMono-Regular, Menlo, Consolas, monospace',
};

export const notionTheme: ThemeDefinition = {
  name: 'notion',
  displayName: 'Notion',
  description: 'Warm, content-focused design with minimal chrome',
  light: {
    background: '48 12% 97.5%',
    foreground: '24 10% 10%',
    card: '0 0% 100%',
    cardForeground: '24 10% 10%',
    popover: '0 0% 100%',
    popoverForeground: '24 10% 10%',
    primary: '213 62% 44.5%',
    primaryForeground: '0 0% 100%',
    secondary: '40 20% 95%',
    secondaryForeground: '24 10% 20%',
    muted: '40 29% 96%',
    mutedForeground: '24 5% 43.4%',
    accent: '40 29% 96%',
    accentForeground: '24 10% 20%',
    destructive: '0 84% 46.7%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 29%',
    successForeground: '0 0% 100%',
    warning: '38 92% 31.1%',
    warningForeground: '48 12% 97.5%',
    info: '213 62% 44.5%',
    infoForeground: '0 0% 100%',
    border: '30 10% 90%',
    input: '30 10% 90%',
    ring: '213 62% 48%',
    well: '48 12% 94.5%',
    wellForeground: '24 10% 10%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '24 8% 12%',
    foreground: '30 15% 90%',
    card: '24 8% 15%',
    cardForeground: '30 15% 90%',
    popover: '24 8% 15%',
    popoverForeground: '30 15% 90%',
    primary: '213 58% 64.2%',
    primaryForeground: '24 8% 12%',
    secondary: '24 8% 20%',
    secondaryForeground: '30 15% 85%',
    muted: '24 8% 20%',
    mutedForeground: '30 10% 59.9%',
    accent: '24 10% 22%',
    accentForeground: '30 15% 85%',
    destructive: '0 63% 69.2%',
    destructiveForeground: '24 8% 12%',
    success: '142 71% 45%',
    successForeground: '24 8% 12%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '213 58% 64.2%',
    infoForeground: '24 8% 12%',
    border: '24 8% 22%',
    input: '24 8% 22%',
    ring: '213 58% 60%',
    well: '24 8% 9%',
    wellForeground: '30 15% 90%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-medium shadow-none hover:bg-accent/80',
    },
    card: {
      base: 'border border-border/50 shadow-none bg-card',
    },
    input: {
      base: 'bg-muted/35 border-border/70 shadow-none',
    },
    badge: {
      base: 'rounded-md text-[0.72rem]',
    },
    alert: {
      base: 'border-l-4 border-l-info bg-muted/40 text-foreground',
    },
  },
};
