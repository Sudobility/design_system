/**
 * Microsoft Xbox Theme
 *
 * Microsoft Xbox — signature green #107C10 on near-black dashboard
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
    "'Bahnschrift', 'Segoe UI', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'Cascadia Code', ui-monospace, Consolas, monospace",
};

export const xboxTheme: ThemeDefinition = {
  name: 'xbox',
  displayName: 'Microsoft Xbox',
  description: 'Microsoft Xbox — signature green #107C10 on near-black dashboard',
  light: {
    background: '0 0% 96%',
    foreground: '0 0% 5.5%',
    card: '0 0% 100%',
    cardForeground: '0 0% 5.5%',
    popover: '0 0% 94.9%',
    popoverForeground: '0 0% 5.5%',
    primary: '120 77.1% 26.5%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 90.2%',
    secondaryForeground: '0 0% 5.5%',
    muted: '0 0% 94.9%',
    mutedForeground: '0 0% 35.3%',
    accent: '80 70.9% 89.2%',
    accentForeground: '94.2 100% 21%',
    destructive: '354.7 85.8% 41.6%',
    destructiveForeground: '0 0% 100%',
    success: '120 77.1% 26.5%',
    successForeground: '0 0% 100%',
    warning: '36.6 100% 30%',
    warningForeground: '0 0% 100%',
    info: '207 86.4% 39.4%',
    infoForeground: '0 0% 100%',
    border: '0 0% 83.9%',
    input: '0 0% 83.9%',
    ring: '120 77.1% 27.5%',
    well: '0 0% 93%',
    wellForeground: '0 0% 5.5%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 5.5%',
    foreground: '0 0% 100%',
    card: '0 0% 10.2%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 10.2%',
    popoverForeground: '0 0% 100%',
    primary: '120 77.1% 35.5%',
    primaryForeground: '0 0% 5.5%',
    secondary: '0 0% 16.5%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 10.2%',
    mutedForeground: '0 0% 69%',
    accent: '82.3 91.2% 26.9%',
    accentForeground: '100 100% 1.2%',
    destructive: '355.7 79.1% 59.2%',
    destructiveForeground: '0 0% 5.5%',
    success: '120 44.5% 44.5%',
    successForeground: '142.5 66.7% 4.7%',
    warning: '40.1 100% 48.4%',
    warningForeground: '41.5 100% 5.1%',
    info: '206.1 70.6% 54.7%',
    infoForeground: '208.9 77.1% 6.9%',
    border: '0 0% 20%',
    input: '0 0% 20%',
    ring: '120 77.1% 27.5%',
    well: '0 0% 2.5%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
