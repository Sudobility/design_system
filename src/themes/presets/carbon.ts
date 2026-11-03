/**
 * IBM Carbon Theme
 *
 * IBM Carbon — Blue 60 (#0F62FE), IBM Plex Sans, sharp corners (radius 0)
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.10)',
  shadowMd: '0 2px 6px rgb(0 0 0 / 0.20)',
  shadowLg: '0 4px 12px rgb(0 0 0 / 0.30)',
  fontSans: "'IBM Plex Sans', ui-sans-serif, system-ui, -apple-system, sans-serif",
  fontMono: "'IBM Plex Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

export const carbonTheme: ThemeDefinition = {
  name: 'carbon',
  displayName: 'IBM Carbon',
  description: 'IBM Carbon — Blue 60 (#0F62FE), IBM Plex Sans, sharp corners (radius 0)',
  light: {
    background: '0 0% 95.7%',
    foreground: '0 0% 8.6%',
    card: '0 0% 100%',
    cardForeground: '0 0% 8.6%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 8.6%',
    primary: '219.2 99.2% 48.4%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 49.7%',
    secondaryForeground: '0 0% 8.6%',
    muted: '0 0% 91%',
    mutedForeground: '0 0% 32.2%',
    accent: '0 0% 87.8%',
    accentForeground: '0 0% 8.6%',
    destructive: '356.8 75.8% 45.5%',
    destructiveForeground: '0 0% 100%',
    success: '137.3 63.5% 28.7%',
    successForeground: '0 0% 100%',
    warning: '46.8 88.4% 26.4%',
    warningForeground: '0 0% 95.7%',
    info: '220.5 100% 40.4%',
    infoForeground: '0 0% 100%',
    border: '0 0% 87.8%',
    input: '0 0% 55.3%',
    ring: '219.2 99.2% 52.7%',
    well: '0 0% 92.7%',
    wellForeground: '0 0% 8.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 8.6%',
    foreground: '0 0% 95.7%',
    card: '0 0% 14.9%',
    cardForeground: '0 0% 95.7%',
    popover: '0 0% 14.9%',
    popoverForeground: '0 0% 95.7%',
    primary: '219.2 99.2% 68.4%',
    primaryForeground: '0 0% 8.6%',
    secondary: '0 0% 43.5%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 14.9%',
    mutedForeground: '0 0% 77.6%',
    accent: '0 0% 22.4%',
    accentForeground: '0 0% 95.7%',
    destructive: '356.9 94.5% 64.1%',
    destructiveForeground: '0 0% 8.6%',
    success: '136.9 48.8% 50.2%',
    successForeground: '0 0% 8.6%',
    warning: '46.8 88.4% 52.5%',
    warningForeground: '0 0% 8.6%',
    info: '218.1 100% 63.5%',
    infoForeground: '0 0% 8.6%',
    border: '0 0% 22.4%',
    input: '0 0% 43.5%',
    ring: '0 0% 100%',
    well: '0 0% 5.6%',
    wellForeground: '0 0% 95.7%',
    ...SHARED_STRUCTURAL,
  },
};
