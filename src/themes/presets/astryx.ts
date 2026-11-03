/**
 * Meta Astryx Theme
 *
 * Meta Astryx — Meta blue #0866FF, system font (approximated from Meta brand tokens)
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.10)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.15)',
  shadowLg: '0 8px 24px rgb(0 0 0 / 0.20)',
  fontSans:
    "'Optimistic Display', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  fontMono: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
};

export const astryxTheme: ThemeDefinition = {
  name: 'astryx',
  displayName: 'Meta Astryx',
  description: 'Meta Astryx — Meta blue #0866FF, system font (approximated from Meta brand tokens)',
  light: {
    background: '220 20% 96.5%',
    foreground: '216 8.2% 12%',
    card: '0 0% 100%',
    cardForeground: '216 8.2% 12%',
    popover: '0 0% 100%',
    popoverForeground: '216 8.2% 12%',
    primary: '217.2 100% 46.6%',
    primaryForeground: '0 0% 100%',
    secondary: '222.9 14.9% 90.8%',
    secondaryForeground: '0 0% 2%',
    muted: '216 20% 95.1%',
    mutedForeground: '220 2.9% 40.8%',
    accent: '219 100% 96.1%',
    accentForeground: '217.2 100% 50%',
    destructive: '358.1 95.1% 43.4%',
    destructiveForeground: '0 0% 100%',
    success: '134.3 53.6% 31.2%',
    successForeground: '0 0% 100%',
    warning: '43.3 100% 27.3%',
    warningForeground: '220 20% 96.5%',
    info: '217.2 100% 46.6%',
    infoForeground: '0 0% 100%',
    border: '220 6.5% 82%',
    input: '220 6.5% 82%',
    ring: '217.2 100% 51.6%',
    well: '220 20% 93.5%',
    wellForeground: '216 8.2% 12%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '210 4% 9.8%',
    foreground: '222.9 14.9% 90.8%',
    card: '210 2.7% 14.5%',
    cardForeground: '222.9 14.9% 90.8%',
    popover: '210 2.7% 14.5%',
    popoverForeground: '222.9 14.9% 90.8%',
    primary: '214.4 76% 63.8%',
    primaryForeground: '210 4% 9.8%',
    secondary: '210 1.7% 23.1%',
    secondaryForeground: '222.9 14.9% 90.8%',
    muted: '210 2.7% 14.5%',
    mutedForeground: '217.5 5.3% 70.6%',
    accent: '214.1 69% 16.5%',
    accentForeground: '216.6 100% 67.8%',
    destructive: '0 100% 68%',
    destructiveForeground: '0 75% 9.4%',
    success: '134.5 47.6% 50.6%',
    successForeground: '137.8 69.2% 7.6%',
    warning: '43.3 100% 50%',
    warningForeground: '216 8.2% 12%',
    info: '216.6 100% 67.8%',
    infoForeground: '213.7 77.4% 10.4%',
    border: '210 3.1% 25.1%',
    input: '210 3.1% 25.1%',
    ring: '214.4 76% 51%',
    well: '210 4% 6.8%',
    wellForeground: '222.9 14.9% 90.8%',
    ...SHARED_STRUCTURAL,
  },
};
