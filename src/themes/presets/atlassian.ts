/**
 * Atlassian Design System Theme
 *
 * Atlassian Design System — Jira/Confluence blue, 3px corners
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.1875rem',
  borderWidth: '1px',
  shadowSm: '0 1px 1px rgb(9 30 66 / 0.25), 0 0 1px rgb(9 30 66 / 0.31)',
  shadowMd: '0 4px 8px -2px rgb(9 30 66 / 0.25), 0 0 1px rgb(9 30 66 / 0.31)',
  shadowLg: '0 8px 16px -4px rgb(9 30 66 / 0.25), 0 0 1px rgb(9 30 66 / 0.31)',
  fontSans:
    "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  fontMono: "ui-monospace, 'SFMono-Regular', 'SF Mono', Menlo, Consolas, monospace",
};

export const atlassianTheme: ThemeDefinition = {
  name: 'atlassian',
  displayName: 'Atlassian Design System',
  description: 'Atlassian Design System — Jira/Confluence blue, 3px corners',
  light: {
    background: '220 23% 96.5%',
    foreground: '217.8 54% 19.6%',
    card: '0 0% 100%',
    cardForeground: '217.8 54% 19.6%',
    popover: '0 0% 100%',
    popoverForeground: '217.8 54% 19.6%',
    primary: '215 90% 44.7%',
    primaryForeground: '0 0% 100%',
    secondary: '220 15.8% 96.3%',
    secondaryForeground: '218.2 25% 34.5%',
    muted: '220 15.8% 96.3%',
    mutedForeground: '218.3 15.5% 44.4%',
    accent: '215.5 100% 95.7%',
    accentForeground: '215 90% 47.1%',
    destructive: '7.1 71.9% 45.3%',
    destructiveForeground: '0 0% 100%',
    success: '154.8 64.9% 28.9%',
    successForeground: '0 0% 100%',
    warning: '40.2 100% 28.5%',
    warningForeground: '220 23% 96.5%',
    info: '215 90% 44.7%',
    infoForeground: '0 0% 100%',
    border: '222.9 12.3% 88.8%',
    input: '222.9 12.3% 88.8%',
    ring: '215 100% 61%',
    well: '220 23% 93.5%',
    wellForeground: '217.8 54% 19.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '210 12.1% 12.9%',
    foreground: '210 21.7% 82%',
    card: '206.7 11.7% 15.1%',
    cardForeground: '210 21.7% 82%',
    popover: '207.3 12.1% 17.8%',
    popoverForeground: '210 21.7% 82%',
    primary: '215 100% 67.1%',
    primaryForeground: '215.7 39.8% 18.2%',
    secondary: '210 13.7% 20%',
    secondaryForeground: '211 17.8% 68%',
    muted: '206.7 11.7% 15.1%',
    mutedForeground: '211 15.6% 61%',
    accent: '215.7 39.8% 18.2%',
    accentForeground: '215 100% 67.1%',
    destructive: '3.7 91.1% 69%',
    destructiveForeground: '2.9 91.1% 8.8%',
    success: '154.8 57.2% 55.1%',
    successForeground: '148.5 90.9% 8.6%',
    warning: '47.1 97.4% 44.9%',
    warningForeground: '210 12.1% 12.9%',
    info: '215 100% 67.1%',
    infoForeground: '215.7 39.8% 18.2%',
    border: '210 13.7% 20%',
    input: '210 13.8% 25.5%',
    ring: '215 100% 67.1%',
    well: '210 12.1% 9.9%',
    wellForeground: '210 21.7% 82%',
    ...SHARED_STRUCTURAL,
  },
};
