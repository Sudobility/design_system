/**
 * Adobe Spectrum Theme
 *
 * Adobe Spectrum — blue accent (#2680EB), Adobe Clean, neutral grays
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 4px rgb(0 0 0 / 0.09)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.12)',
  shadowLg: '0 4px 16px rgb(0 0 0 / 0.15)',
  fontSans:
    "'adobe-clean', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "'adobe-clean-mono', ui-monospace, 'Source Code Pro', Menlo, monospace",
};

export const spectrumTheme: ThemeDefinition = {
  name: 'spectrum',
  displayName: 'Adobe Spectrum',
  description: 'Adobe Spectrum — blue accent (#2680EB), Adobe Clean, neutral grays',
  light: {
    background: '0 0% 96.5%',
    foreground: '0 0% 13.3%',
    card: '0 0% 100%',
    cardForeground: '0 0% 13.3%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 13.3%',
    primary: '212.6 83.1% 43%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 90.2%',
    secondaryForeground: '0 0% 13.3%',
    muted: '0 0% 97.3%',
    mutedForeground: '0 0% 42.6%',
    accent: '205.2 100% 93.9%',
    accentForeground: '212.6 88.2% 43.3%',
    destructive: '357 66.7% 48.4%',
    destructiveForeground: '0 0% 100%',
    success: '160.2 55.4% 30.6%',
    successForeground: '0 0% 100%',
    warning: '31.9 80.4% 34.3%',
    warningForeground: '0 0% 100%',
    info: '212.6 83.1% 43%',
    infoForeground: '0 0% 100%',
    border: '0 0% 83.5%',
    input: '0 0% 69.4%',
    ring: '212.6 83.1% 53.5%',
    well: '0 0% 93.5%',
    wellForeground: '0 0% 13.3%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 11.4%',
    foreground: '0 0% 89%',
    card: '0 0% 19.6%',
    cardForeground: '0 0% 89%',
    popover: '0 0% 19.6%',
    popoverForeground: '0 0% 89%',
    primary: '211.8 86% 68.7%',
    primaryForeground: '0 0% 11.4%',
    secondary: '0 0% 24.3%',
    secondaryForeground: '0 0% 89%',
    muted: '0 0% 14.9%',
    mutedForeground: '0 0% 72.5%',
    accent: '209.6 68.1% 22.2%',
    accentForeground: '210.4 94.1% 66.7%',
    destructive: '356.9 73.5% 69%',
    destructiveForeground: '0 0% 11.4%',
    success: '160.5 54.1% 43.8%',
    successForeground: '0 0% 11.4%',
    warning: '31.9 80.4% 50%',
    warningForeground: '0 0% 11.4%',
    info: '211.8 86% 68.7%',
    infoForeground: '0 0% 11.4%',
    border: '0 0% 29%',
    input: '0 0% 35.3%',
    ring: '211.8 86% 57.8%',
    well: '0 0% 8.4%',
    wellForeground: '0 0% 89%',
    ...SHARED_STRUCTURAL,
  },
};
