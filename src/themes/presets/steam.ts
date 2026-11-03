/**
 * Valve Steam Theme
 *
 * Valve Steam — dark blue-slate (#1b2838) with #66c0f4 accent, green action buttons
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.20)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.25)',
  shadowLg: '0 8px 24px rgb(0 0 0 / 0.30)',
  fontSans:
    "'Motiva Sans', Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: 'Consolas, ui-monospace, monospace',
};

export const steamTheme: ThemeDefinition = {
  name: 'steam',
  displayName: 'Valve Steam',
  description: 'Valve Steam — dark blue-slate (#1b2838) with #66c0f4 accent, green action buttons',
  light: {
    background: '216 33.3% 97.1%',
    foreground: '213.1 34.9% 16.3%',
    card: '0 0% 100%',
    cardForeground: '213.1 34.9% 16.3%',
    popover: '0 0% 100%',
    popoverForeground: '213.1 34.9% 16.3%',
    primary: '203.3 72.8% 37%',
    primaryForeground: '0 0% 100%',
    secondary: '212 36.6% 92%',
    secondaryForeground: '213.1 34.9% 16.3%',
    muted: '213.3 33.3% 94.7%',
    mutedForeground: '213.3 16.7% 42.4%',
    accent: '206.5 38.2% 55.4%',
    accentForeground: '0 0% 15.3%',
    destructive: '5.6 63.4% 46.1%',
    destructiveForeground: '0 0% 100%',
    success: '78.5 77.5% 26%',
    successForeground: '0 0% 100%',
    warning: '42.7 88.7% 28.9%',
    warningForeground: '0 0% 100%',
    info: '203.3 72.8% 37%',
    infoForeground: '0 0% 100%',
    border: '211.6 27.5% 86.5%',
    input: '211.6 27.5% 86.5%',
    ring: '203.3 72.8% 37.5%',
    well: '216 33.3% 94.1%',
    wellForeground: '213.1 34.9% 16.3%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '213.1 34.9% 16.3%',
    foreground: '206.4 28.7% 82.9%',
    card: '213.9 34.3% 13.1%',
    cardForeground: '206.4 28.7% 82.9%',
    popover: '222 17.9% 11%',
    popoverForeground: '206.4 28.7% 82.9%',
    primary: '202 86.6% 67.8%',
    primaryForeground: '210 50% 7.8%',
    secondary: '206.5 38.2% 26.7%',
    secondaryForeground: '206.4 28.7% 82.9%',
    muted: '213.8 36.4% 25.9%',
    mutedForeground: '208.2 8.2% 66.1%',
    accent: '205.2 100% 31.7%',
    accentForeground: '208.9 77.1% 83.8%',
    destructive: '0 72.4% 74.5%',
    destructiveForeground: '0 73.3% 5.9%',
    success: '84.9 67.6% 43.6%',
    successForeground: '100 85.7% 5.5%',
    warning: '44.5 77.5% 47.1%',
    warningForeground: '46.2 100% 5.1%',
    info: '202 86.6% 67.8%',
    infoForeground: '210 50% 7.8%',
    border: '213.8 36.4% 25.9%',
    input: '203.7 45.3% 35.1%',
    ring: '202 86.6% 67.8%',
    well: '213.1 34.9% 13.3%',
    wellForeground: '206.4 28.7% 82.9%',
    ...SHARED_STRUCTURAL,
  },
};
