/**
 * U.S. Web Design System Theme
 *
 * U.S. Web Design System — primary blue #005EA2, Public Sans
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 4px rgb(0 0 0 / 0.1)',
  shadowMd: '0 4px 8px rgb(0 0 0 / 0.1)',
  shadowLg: '0 8px 16px rgb(0 0 0 / 0.1)',
  fontSans:
    "'Public Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Roboto, sans-serif",
  fontMono: "'Roboto Mono', ui-monospace, 'Bitstream Vera Sans Mono', Consolas, monospace",
};

export const uswdsTheme: ThemeDefinition = {
  name: 'uswds',
  displayName: 'U.S. Web Design System',
  description: 'U.S. Web Design System — primary blue #005EA2, Public Sans',
  light: {
    background: '210 17% 97.6%',
    foreground: '0 0% 10.6%',
    card: '0 0% 100%',
    cardForeground: '0 0% 10.6%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 10.6%',
    primary: '205.2 100% 31.8%',
    primaryForeground: '0 0% 100%',
    secondary: '200 4.9% 88%',
    secondaryForeground: '0 0% 10.6%',
    muted: '0 0% 94.1%',
    mutedForeground: '216 8% 36.7%',
    accent: '193 62.2% 92.7%',
    accentForeground: '205.2 100% 31.8%',
    destructive: '17.1 91.9% 40.1%',
    destructiveForeground: '0 0% 100%',
    success: '129.9 100% 24.9%',
    successForeground: '0 0% 100%',
    warning: '41.3 100% 28.5%',
    warningForeground: '210 17% 97.6%',
    info: '190 100% 28%',
    infoForeground: '210 17% 97.6%',
    border: '200 4.9% 88%',
    input: '216 8% 36.7%',
    ring: '210.1 100% 57.1%',
    well: '210 17% 94.6%',
    wellForeground: '0 0% 10.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 10.6%',
    foreground: '0 0% 100%',
    card: '0 0% 17.6%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 17.6%',
    popoverForeground: '0 0% 100%',
    primary: '206.9 70.7% 67.8%',
    primaryForeground: '210 59.3% 10.6%',
    secondary: '216 14.1% 27.8%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 17.6%',
    mutedForeground: '202.5 4.9% 67.8%',
    accent: '198.7 67.2% 13.1%',
    accentForeground: '206.9 70.7% 67.8%',
    destructive: '8.6 95% 68.4%',
    destructiveForeground: '13.6 68.8% 6.3%',
    success: '126.8 71.7% 45.7%',
    successForeground: '128.8 80.4% 10%',
    warning: '41.3 100% 59%',
    warningForeground: '0 0% 10.6%',
    info: '188.6 86.5% 65.1%',
    infoForeground: '189.8 78.2% 10.8%',
    border: '216 8% 36.7%',
    input: '202.5 4.9% 67.8%',
    ring: '206.9 70.7% 67.8%',
    well: '0 0% 7.6%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
