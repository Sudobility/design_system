/**
 * Sony PlayStation Theme
 *
 * Sony PlayStation — deep blue #003791 with the △○✕□ shape colors
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
    "'SST', 'Segoe UI', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "ui-monospace, 'SF Mono', Menlo, monospace",
};

export const playstationTheme: ThemeDefinition = {
  name: 'playstation',
  displayName: 'Sony PlayStation',
  description: 'Sony PlayStation — deep blue #003791 with the △○✕□ shape colors',
  light: {
    background: '220 30% 96.7%',
    foreground: '217.2 100% 11.8%',
    card: '0 0% 100%',
    cardForeground: '217.2 100% 11.8%',
    popover: '220 52.9% 96.7%',
    popoverForeground: '217.2 100% 11.8%',
    primary: '217.2 100% 28.4%',
    primaryForeground: '0 0% 100%',
    secondary: '216.9 44.8% 94.3%',
    secondaryForeground: '217.2 100% 11.8%',
    muted: '220 52.9% 96.7%',
    mutedForeground: '222 19% 41.2%',
    accent: '272.5 60.8% 62%',
    accentForeground: '0 0% 9.6%',
    destructive: '332 79.8% 44.7%',
    destructiveForeground: '0 0% 100%',
    success: '167.1 69.2% 28%',
    successForeground: '0 0% 100%',
    warning: '36.6 100% 30%',
    warningForeground: '0 0% 100%',
    info: '207.8 100% 39.1%',
    infoForeground: '0 0% 100%',
    border: '220 33.3% 87.6%',
    input: '220 33.3% 87.6%',
    ring: '217.2 100% 28.4%',
    well: '220 30% 93.7%',
    wellForeground: '217.2 100% 11.8%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '225 44.4% 7.1%',
    foreground: '0 0% 100%',
    card: '223.3 45% 15.7%',
    cardForeground: '0 0% 100%',
    popover: '223.3 45% 15.7%',
    popoverForeground: '0 0% 100%',
    primary: '207.8 100% 55%',
    primaryForeground: '225 44.4% 7.1%',
    secondary: '220.9 46.5% 19.8%',
    secondaryForeground: '0 0% 100%',
    muted: '223.3 45% 15.7%',
    mutedForeground: '221.1 25.5% 73.1%',
    accent: '272.5 60.8% 58.6%',
    accentForeground: '0 0% 100%',
    destructive: '332 79.8% 60.1%',
    destructiveForeground: '225 44.4% 7.1%',
    success: '167.1 69.2% 39.4%',
    successForeground: '166.5 79.5% 7.6%',
    warning: '37.4 91.3% 54.9%',
    warningForeground: '41.5 100% 5.1%',
    info: '209.4 77.3% 60.2%',
    infoForeground: '208.9 77.1% 6.9%',
    border: '221.5 38.2% 26.7%',
    input: '221.5 38.2% 26.7%',
    ring: '207.8 100% 41%',
    well: '225 44.4% 4.1%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
