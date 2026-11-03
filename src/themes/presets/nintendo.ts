/**
 * Nintendo Switch Theme
 *
 * Nintendo — brand red #E60012, rounded, Switch light & dark themes
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
    "'Nunito', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "ui-monospace, 'SF Mono', Menlo, monospace",
};

export const nintendoTheme: ThemeDefinition = {
  name: 'nintendo',
  displayName: 'Nintendo Switch',
  description: 'Nintendo — brand red #E60012, rounded, Switch light & dark themes',
  light: {
    background: '0 0% 92.2%',
    foreground: '0 0% 17.6%',
    card: '0 0% 100%',
    cardForeground: '0 0% 17.6%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 17.6%',
    primary: '355.3 100% 37.8%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 100%',
    secondaryForeground: '0 0% 17.6%',
    muted: '0 0% 94.1%',
    mutedForeground: '0 0% 39.9%',
    accent: '356 100% 94.1%',
    accentForeground: '355.3 100% 35.1%',
    destructive: '355.3 100% 37.8%',
    destructiveForeground: '0 0% 100%',
    success: '149.3 100% 22.9%',
    successForeground: '0 0% 100%',
    warning: '35.9 100% 28.7%',
    warningForeground: '0 0% 100%',
    info: '193.6 100% 27.8%',
    infoForeground: '0 0% 100%',
    border: '0 0% 85.5%',
    input: '0 0% 85.5%',
    ring: '355.3 100% 45.1%',
    well: '0 0% 89.2%',
    wellForeground: '0 0% 17.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 17.6%',
    foreground: '0 0% 100%',
    card: '0 0% 22%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 22%',
    popoverForeground: '0 0% 100%',
    primary: '355.3 100% 78%',
    primaryForeground: '0 0% 17.6%',
    secondary: '0 0% 27.1%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 22%',
    mutedForeground: '0 0% 69%',
    accent: '356.3 27.6% 22.7%',
    accentForeground: '356.7 100% 70.4%',
    destructive: '357 100% 72.9%',
    destructiveForeground: '358.6 91.5% 9.2%',
    success: '145.4 55% 48.8%',
    successForeground: '144 83.3% 7.1%',
    warning: '42.1 100% 50%',
    warningForeground: '41.5 100% 5.1%',
    info: '198.6 91.3% 63.9%',
    infoForeground: '208.9 77.1% 6.9%',
    border: '0 0% 29%',
    input: '0 0% 29%',
    ring: '355.3 100% 45.1%',
    well: '0 0% 14.6%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
