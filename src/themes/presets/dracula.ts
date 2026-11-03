/**
 * Dracula Theme
 *
 * Dracula — the dark theme (#282A36) with its Alucard light counterpart
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
  fontMono: "'Fira Code', ui-monospace, SFMono-Regular, monospace",
};

export const draculaTheme: ThemeDefinition = {
  name: 'dracula',
  displayName: 'Dracula',
  description: 'Dracula — the dark theme (#282A36) with its Alucard light counterpart',
  light: {
    background: '48 100% 96.1%',
    foreground: '0 0% 12.2%',
    card: '0 0% 100%',
    cardForeground: '0 0% 12.2%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 12.2%',
    primary: '252.3 54% 53.9%',
    primaryForeground: '0 0% 100%',
    secondary: '51.8 40.7% 89.4%',
    secondaryForeground: '0 0% 12.2%',
    muted: '49.6 48.9% 90.8%',
    mutedForeground: '49.1 18% 35.9%',
    accent: '336.1 78.1% 59.8%',
    accentForeground: '0 0% 12.2%',
    destructive: '6 65.7% 46.7%',
    destructiveForeground: '0 0% 100%',
    success: '114.2 83.7% 24.1%',
    successForeground: '0 0% 100%',
    warning: '48.1 72.5% 29%',
    warningForeground: '0 0% 100%',
    info: '198 96.1% 30%',
    infoForeground: '0 0% 100%',
    border: '49.3 31.1% 82.4%',
    input: '49.3 31.1% 82.4%',
    ring: '252.3 54% 53.9%',
    well: '48 100% 93.1%',
    wellForeground: '0 0% 12.2%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '231.4 14.9% 18.4%',
    foreground: '60 30% 96.1%',
    card: '230 14.8% 23.9%',
    cardForeground: '60 30% 96.1%',
    popover: '230 14.8% 23.9%',
    popoverForeground: '60 30% 96.1%',
    primary: '264.7 89.5% 80%',
    primaryForeground: '231.4 14.9% 18.4%',
    secondary: '231.8 13.9% 31%',
    secondaryForeground: '60 30% 96.1%',
    muted: '230 14.8% 23.9%',
    mutedForeground: '229.4 9.8% 66.1%',
    accent: '325.5 100% 43.3%',
    accentForeground: '231.4 14.9% 97.4%',
    destructive: '0 100% 72.8%',
    destructiveForeground: '0 86% 8.4%',
    success: '135.2 94.4% 64.7%',
    successForeground: '137.6 73.9% 9%',
    warning: '64.9 91.7% 76.5%',
    warningForeground: '60 100% 9%',
    info: '190.5 96.6% 76.9%',
    infoForeground: '192.6 82.6% 9%',
    border: '231.8 13.9% 31%',
    input: '231.8 13.9% 31%',
    ring: '264.7 89.5% 77.6%',
    well: '231.8 15.1% 15.1%',
    wellForeground: '60 30% 96.1%',
    ...SHARED_STRUCTURAL,
  },
};
