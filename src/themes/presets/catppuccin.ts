/**
 * Catppuccin Theme
 *
 * Catppuccin — soft pastel design system (Latte light / Mocha dark)
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.20)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.25)',
  shadowLg: '0 8px 24px rgb(0 0 0 / 0.30)',
  fontSans:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
};

export const catppuccinTheme: ThemeDefinition = {
  name: 'catppuccin',
  displayName: 'Catppuccin',
  description: 'Catppuccin — soft pastel design system (Latte light / Mocha dark)',
  light: {
    background: '220 23.1% 94.9%',
    foreground: '233.8 16% 35.5%',
    card: '220 22% 92%',
    cardForeground: '233.8 16% 35.5%',
    popover: '220 22% 92%',
    popoverForeground: '233.8 16% 35.5%',
    primary: '219.9 91.5% 46.2%',
    primaryForeground: '220 23.1% 94.9%',
    secondary: '222.9 15.9% 82.7%',
    secondaryForeground: '233.8 16% 35.5%',
    muted: '220 22% 92%',
    mutedForeground: '232.8 10.4% 42%',
    accent: '266 85% 84.6%',
    accentForeground: '220 23.1% 34.4%',
    destructive: '347.1 86.7% 41.4%',
    destructiveForeground: '220 23.1% 94.9%',
    success: '109.2 57.6% 28.1%',
    successForeground: '220 23.1% 94.9%',
    warning: '34.9 77% 30.7%',
    warningForeground: '220 23.1% 94.9%',
    info: '188.9 70% 28.5%',
    infoForeground: '220 23.1% 94.9%',
    border: '222.9 15.9% 82.7%',
    input: '225 13.6% 76.9%',
    ring: '219.9 91.5% 53.9%',
    well: '220 21.7% 88.8%',
    wellForeground: '233.8 16% 35.5%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '240 21.1% 14.9%',
    foreground: '226.2 63.9% 88%',
    card: '240 21.3% 12%',
    cardForeground: '226.2 63.9% 88%',
    popover: '240 21.3% 12%',
    popoverForeground: '226.2 63.9% 88%',
    primary: '217.2 91.9% 75.9%',
    primaryForeground: '240 21.1% 14.9%',
    secondary: '236.8 16.2% 22.9%',
    secondaryForeground: '226.2 63.9% 88%',
    muted: '240 21.3% 12%',
    mutedForeground: '227.6 23.6% 71.8%',
    accent: '267.4 83.5% 51.8%',
    accentForeground: '240 21.1% 86.5%',
    destructive: '343.3 81.2% 74.9%',
    destructiveForeground: '339.4 71.4% 9.6%',
    success: '115.5 54.1% 76.1%',
    successForeground: '116.3 61.5% 10.2%',
    warning: '41.4 86% 83.1%',
    warningForeground: '49.6 100% 9%',
    info: '189.2 71% 72.9%',
    infoForeground: '192.6 82.6% 9%',
    border: '236.8 16.2% 22.9%',
    input: '234.3 13.2% 31.2%',
    ring: '217.2 91.9% 75.9%',
    well: '240 23.1% 8.6%',
    wellForeground: '226.2 63.9% 88%',
    ...SHARED_STRUCTURAL,
  },
};
