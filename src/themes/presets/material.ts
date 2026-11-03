/**
 * Google Material Design 3 Theme
 *
 * Google Material 3 — purple primary, Roboto, pill buttons (M3 baseline tokens)
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.75rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.30), 0 1px 3px 1px rgb(0 0 0 / 0.15)',
  shadowMd: '0 1px 2px 0 rgb(0 0 0 / 0.30), 0 2px 6px 2px rgb(0 0 0 / 0.15)',
  shadowLg: '0 2px 3px 0 rgb(0 0 0 / 0.30), 0 6px 10px 4px rgb(0 0 0 / 0.15)',
  fontSans: "'Roboto', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "'Roboto Mono', ui-monospace, SFMono-Regular, monospace",
};

export const materialTheme: ThemeDefinition = {
  name: 'material',
  displayName: 'Google Material Design 3',
  description: 'Google Material 3 — purple primary, Roboto, pill buttons (M3 baseline tokens)',
  light: {
    background: '292.5 100% 98.4%',
    foreground: '264 8.5% 11.6%',
    card: '277.5 44.4% 96.5%',
    cardForeground: '264 8.5% 11.6%',
    popover: '276 38.5% 94.9%',
    popoverForeground: '264 8.5% 11.6%',
    primary: '256.4 34.4% 47.8%',
    primaryForeground: '0 0% 100%',
    secondary: '263.1 65% 92.2%',
    secondaryForeground: '253.3 26.5% 13.3%',
    muted: '275 24% 90.2%',
    mutedForeground: '264 6.8% 29%',
    accent: '262.9 100% 93.3%',
    accentForeground: '261.3 100% 18.2%',
    destructive: '3.2 71.3% 41%',
    destructiveForeground: '0 0% 100%',
    success: '123 46.2% 30.7%',
    successForeground: '0 0% 100%',
    warning: '37.1 94.6% 28.5%',
    warningForeground: '292.5 100% 98.4%',
    info: '216.9 90% 42.9%',
    infoForeground: '0 0% 100%',
    border: '270 11.3% 79.2%',
    input: '270 11.3% 79.2%',
    ring: '256.4 34.4% 47.8%',
    well: '292.5 100% 95.4%',
    wellForeground: '264 8.5% 11.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '260 14.3% 8.2%',
    foreground: '280 17% 89.6%',
    card: '257.1 10.1% 13.5%',
    cardForeground: '280 17% 89.6%',
    popover: '257.1 10.1% 13.5%',
    popoverForeground: '280 17% 89.6%',
    primary: '257.9 100% 86.9%',
    primaryForeground: '258.6 58.3% 28.2%',
    secondary: '258 12.8% 30.6%',
    secondaryForeground: '263.1 65% 92.2%',
    muted: '264 6.8% 29%',
    mutedForeground: '270 11.3% 79.2%',
    accent: '257.1 43.3% 38%',
    accentForeground: '262.9 100% 93.3%',
    destructive: '3 70.1% 82.9%',
    destructiveForeground: '3 71.4% 22%',
    success: '137.9 55.3% 63.1%',
    successForeground: '138.3 69.7% 12.9%',
    warning: '42.1 100% 50%',
    warningForeground: '0 0% 0%',
    info: '217.3 89.1% 82%',
    infoForeground: '217.1 89.7% 22.9%',
    border: '264 6.8% 29%',
    input: '264 6.8% 29%',
    ring: '257.9 100% 86.9%',
    well: '260 14.3% 5.2%',
    wellForeground: '280 17% 89.6%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: { base: 'rounded-full' },
  },
};
