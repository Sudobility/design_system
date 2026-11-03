/**
 * GitHub Primer Theme
 *
 * GitHub Primer — green primary, blue accent, iconic #0D1117 dark canvas
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm: '0 1px 0 rgb(31 35 40 / 0.04)',
  shadowMd: '0 3px 6px rgb(140 149 159 / 0.15)',
  shadowLg: '0 8px 24px rgb(140 149 159 / 0.2)',
  fontSans:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', Helvetica, Arial, sans-serif",
  fontMono:
    "ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Consolas, 'Liberation Mono', monospace",
};

export const primerTheme: ThemeDefinition = {
  name: 'primer',
  displayName: 'GitHub Primer',
  description: 'GitHub Primer — green primary, blue accent, iconic #0D1117 dark canvas',
  light: {
    background: '210 29% 97%',
    foreground: '213.3 12.7% 13.9%',
    card: '0 0% 100%',
    cardForeground: '213.3 12.7% 13.9%',
    popover: '0 0% 100%',
    popoverForeground: '213.3 12.7% 13.9%',
    primary: '137.1 62.9% 28.9%',
    primaryForeground: '0 0% 100%',
    secondary: '210 28.6% 97.3%',
    secondaryForeground: '212.7 13.3% 16.3%',
    muted: '210 28.6% 97.3%',
    mutedForeground: '211.8 7.8% 42.9%',
    accent: '199.4 100% 93.3%',
    accentForeground: '212.4 92.1% 44.5%',
    destructive: '355.8 71.8% 47.3%',
    destructiveForeground: '0 0% 100%',
    success: '137.2 66% 29.4%',
    successForeground: '0 0% 100%',
    warning: '40.1 100% 28.9%',
    warningForeground: '0 0% 100%',
    info: '212.4 92.1% 44.5%',
    infoForeground: '0 0% 100%',
    border: '210 17.5% 84.3%',
    input: '210 17.5% 84.3%',
    ring: '212.4 92.1% 44.5%',
    well: '210 29% 94%',
    wellForeground: '213.3 12.7% 13.9%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '216 27.8% 7.1%',
    foreground: '207.7 35.1% 92.7%',
    card: '215 21.4% 11%',
    cardForeground: '207.7 35.1% 92.7%',
    popover: '215 21.4% 11%',
    popoverForeground: '207.7 35.1% 92.7%',
    primary: '131.5 58.6% 39.5%',
    primaryForeground: '216 27.8% 7.1%',
    secondary: '215 15.4% 15.3%',
    secondaryForeground: '210 17.4% 82%',
    muted: '215 21.4% 11%',
    mutedForeground: '211.6 8.9% 58.2%',
    accent: '215.4 50.6% 15.1%',
    accentForeground: '212 100% 67.3%',
    destructive: '1.1 69.3% 59.4%',
    destructiveForeground: '216 27.8% 7.1%',
    success: '128.4 49.2% 48.6%',
    successForeground: '216 27.8% 7.1%',
    warning: '40.6 72.1% 47.8%',
    warningForeground: '216 27.8% 7.1%',
    info: '212 100% 67.3%',
    infoForeground: '216 27.8% 7.1%',
    border: '212.3 11.9% 21.4%',
    input: '212.3 11.9% 21.4%',
    ring: '216.5 83.6% 52.2%',
    well: '222.9 77.8% 2.0%',
    wellForeground: '207.7 35.1% 92.7%',
    ...SHARED_STRUCTURAL,
  },
};
