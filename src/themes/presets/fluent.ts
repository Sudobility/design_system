/**
 * Microsoft Fluent 2 Theme
 *
 * Microsoft Fluent 2 — communication blue, Segoe UI, 4px corners
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.14)',
  shadowMd: '0 2px 4px rgb(0 0 0 / 0.14), 0 0 2px rgb(0 0 0 / 0.12)',
  shadowLg: '0 8px 16px rgb(0 0 0 / 0.14), 0 0 2px rgb(0 0 0 / 0.12)',
  fontSans: "'Segoe UI', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "'Cascadia Code', ui-monospace, Consolas, monospace",
};

export const fluentTheme: ThemeDefinition = {
  name: 'fluent',
  displayName: 'Microsoft Fluent 2',
  description: 'Microsoft Fluent 2 — communication blue, Segoe UI, 4px corners',
  light: {
    background: '0 0% 97.6%',
    foreground: '0 0% 14.1%',
    card: '0 0% 100%',
    cardForeground: '0 0% 14.1%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 14.1%',
    primary: '207.9 85.3% 39.7%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 96.1%',
    secondaryForeground: '0 0% 14.1%',
    muted: '0 0% 94.1%',
    mutedForeground: '0 0% 38%',
    accent: '211.8 73.9% 95.5%',
    accentForeground: '207.9 85.3% 40%',
    destructive: '354.7 85.8% 41.6%',
    destructiveForeground: '0 0% 100%',
    success: '120 77.8% 24.7%',
    successForeground: '0 0% 100%',
    warning: '22.2 93.6% 37.7%',
    warningForeground: '0 0% 100%',
    info: '207.9 85.3% 39.7%',
    infoForeground: '0 0% 100%',
    border: '0 0% 82%',
    input: '0 0% 82%',
    ring: '207.9 85.3% 40%',
    well: '0 0% 94.6%',
    wellForeground: '0 0% 14.1%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 12.2%',
    foreground: '0 0% 100%',
    card: '0 0% 16.1%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 16.1%',
    popoverForeground: '0 0% 100%',
    primary: '210 89.7% 62.5%',
    primaryForeground: '0 0% 0%',
    secondary: '0 0% 20%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 18%',
    mutedForeground: '0 0% 67.8%',
    accent: '208.3 62.5% 22%',
    accentForeground: '210 89.7% 64.6%',
    destructive: '354.6 63.5% 67%',
    destructiveForeground: '0 0% 0%',
    success: '120 36.8% 51%',
    successForeground: '0 0% 0%',
    warning: '24.9 95% 60.8%',
    warningForeground: '0 0% 0%',
    info: '210 89.7% 62.5%',
    infoForeground: '0 0% 0%',
    border: '0 0% 25.5%',
    input: '0 0% 25.5%',
    ring: '210 89.7% 62%',
    well: '0 0% 9.2%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
