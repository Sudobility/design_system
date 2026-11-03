/**
 * Apple Human Interface Guidelines Theme
 *
 * Apple Human Interface Guidelines — iOS system colors, SF font, rounded corners
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.625rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.08)',
  shadowMd: '0 4px 12px rgb(0 0 0 / 0.12)',
  shadowLg: '0 12px 32px rgb(0 0 0 / 0.16)',
  fontSans:
    "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'SF Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontMono: "ui-monospace, 'SF Mono', Menlo, Monaco, Consolas, monospace",
};

export const appleTheme: ThemeDefinition = {
  name: 'apple',
  displayName: 'Apple Human Interface Guidelines',
  description: 'Apple Human Interface Guidelines — iOS system colors, SF font, rounded corners',
  light: {
    background: '240 24% 96.5%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 0%',
    primary: '211.3 100% 40.5%',
    primaryForeground: '0 0% 100%',
    secondary: '240 10.6% 90.8%',
    secondaryForeground: '0 0% 0%',
    muted: '240 23.8% 95.9%',
    mutedForeground: '240 2.3% 42.6%',
    accent: '215.5 100% 95.7%',
    accentForeground: '211.3 100% 43.6%',
    destructive: '3.2 100% 41.7%',
    destructiveForeground: '0 0% 100%',
    success: '135.1 58.6% 30%',
    successForeground: '0 0% 100%',
    warning: '35.1 100% 30.3%',
    warningForeground: '240 24% 96.5%',
    info: '211.3 100% 40.5%',
    infoForeground: '0 0% 100%',
    border: '240 1.8% 78%',
    input: '240 1.8% 78%',
    ring: '211.3 100% 50%',
    well: '240 24% 93.5%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 0%',
    foreground: '0 0% 100%',
    card: '240 3.4% 11.4%',
    cardForeground: '0 0% 100%',
    popover: '240 3.4% 11.4%',
    popoverForeground: '0 0% 100%',
    primary: '210.1 100% 55.3%',
    primaryForeground: '0 0% 0%',
    secondary: '240 2.2% 17.6%',
    secondaryForeground: '0 0% 100%',
    muted: '240 3.4% 11.4%',
    mutedForeground: '240 2.3% 56.7%',
    accent: '212.5 75.3% 15.9%',
    accentForeground: '210.1 100% 55%',
    destructive: '3.4 100% 61.4%',
    destructiveForeground: '0 0% 0%',
    success: '134.9 63.6% 50.4%',
    successForeground: '138.8 100% 9.4%',
    warning: '36.5 100% 52%',
    warningForeground: '0 0% 0%',
    info: '210.1 100% 55.3%',
    infoForeground: '0 0% 0%',
    border: '240 1.8% 22.4%',
    input: '240 1.8% 22.4%',
    ring: '210.1 100% 52%',
    well: '0 0% 5%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
