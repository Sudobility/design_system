/**
 * Nord Theme
 *
 * Nord — arctic palette (Polar Night / Snow Storm / Frost / Aurora)
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.20)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.25)',
  shadowLg: '0 8px 24px rgb(0 0 0 / 0.30)',
  fontSans:
    "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace",
};

export const nordTheme: ThemeDefinition = {
  name: 'nord',
  displayName: 'Nord',
  description: 'Nord — arctic palette (Polar Night / Snow Storm / Frost / Aurora)',
  light: {
    background: '217.5 26.7% 94.1%',
    foreground: '220 16.4% 21.6%',
    card: '218.2 26.8% 92%',
    cardForeground: '220 16.4% 21.6%',
    popover: '218.2 26.8% 92%',
    popoverForeground: '220 16.4% 21.6%',
    primary: '213.1 32% 39.9%',
    primaryForeground: '217.5 26.7% 94.1%',
    secondary: '218.8 27.9% 88%',
    secondaryForeground: '220 16.4% 21.6%',
    muted: '218.2 26.8% 92%',
    mutedForeground: '220 16.5% 35.7%',
    accent: '193.3 43.4% 67.5%',
    accentForeground: '220 16.4% 21.6%',
    destructive: '353.7 35.2% 46.6%',
    destructiveForeground: '217.5 26.7% 94.1%',
    success: '88 27.8% 33.7%',
    successForeground: '217.5 26.7% 94.1%',
    warning: '42.1 47.9% 32.8%',
    warningForeground: '217.5 26.7% 94.1%',
    info: '213.1 32% 39.9%',
    infoForeground: '217.5 26.7% 94.1%',
    border: '218.8 27.9% 88%',
    input: '218.8 27.9% 88%',
    ring: '213.1 32% 52.2%',
    well: '217.5 26.7% 91.1%',
    wellForeground: '220 16.4% 21.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '220 16.4% 21.6%',
    foreground: '218.8 27.9% 88%',
    card: '221.7 16.3% 27.6%',
    cardForeground: '218.8 27.9% 88%',
    popover: '221.7 16.3% 27.6%',
    popoverForeground: '218.8 27.9% 88%',
    primary: '193.3 43.4% 71.1%',
    primaryForeground: '220 16.4% 21.6%',
    secondary: '220 16.8% 31.6%',
    secondaryForeground: '217.5 26.7% 94.1%',
    muted: '221.7 16.3% 27.6%',
    mutedForeground: '216.4 18.7% 70.6%',
    accent: '213.1 32% 40.6%',
    accentForeground: '217.5 26.7% 94.1%',
    destructive: '354.3 42.3% 73.5%',
    destructiveForeground: '220 16.4% 21.6%',
    success: '92.4 27.8% 64.7%',
    successForeground: '75.7 43.4% 10.4%',
    warning: '40 70.6% 73.3%',
    warningForeground: '47.6 100% 11.4%',
    info: '210 34% 69.2%',
    infoForeground: '212.7 47.8% 9%',
    border: '220 16.5% 35.7%',
    input: '220 16.8% 31.6%',
    ring: '193.3 43.4% 67.5%',
    well: '220 16.4% 18.6%',
    wellForeground: '218.8 27.9% 88%',
    ...SHARED_STRUCTURAL,
  },
};
