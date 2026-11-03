/**
 * Shopify Polaris Theme
 *
 * Shopify Polaris — commerce green (#008060), Inter, 8px corners
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 0 rgb(0 0 0 / 0.05)',
  shadowMd: '0 2px 4px rgb(0 0 0 / 0.10)',
  shadowLg: '0 4px 12px rgb(0 0 0 / 0.15)',
  fontSans: "'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
  fontMono: "ui-monospace, 'SF Mono', Monaco, Consolas, monospace",
};

export const polarisTheme: ThemeDefinition = {
  name: 'polaris',
  displayName: 'Shopify Polaris',
  description: 'Shopify Polaris — commerce green (#008060), Inter, 8px corners',
  light: {
    background: '240 5.9% 96.7%',
    foreground: '200 4.5% 13.1%',
    card: '0 0% 100%',
    cardForeground: '200 4.5% 13.1%',
    popover: '0 0% 100%',
    popoverForeground: '200 4.5% 13.1%',
    primary: '165 100% 23.2%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 94.5%',
    secondaryForeground: '200 4.5% 13.1%',
    muted: '240 5.9% 92%',
    mutedForeground: '210 3.5% 41.6%',
    accent: '162.9 53.8% 94.9%',
    accentForeground: '165 100% 25.1%',
    destructive: '9.2 88.6% 41.8%',
    destructiveForeground: '0 0% 100%',
    success: '165 100% 23.2%',
    successForeground: '0 0% 100%',
    warning: '39.4 100% 28.3%',
    warningForeground: '240 5.9% 96.7%',
    info: '215.1 64.4% 45.6%',
    infoForeground: '0 0% 100%',
    border: '210 7.1% 89%',
    input: '210 4.5% 56.9%',
    ring: '214.1 100% 41.4%',
    well: '240 5.9% 93.7%',
    wellForeground: '200 4.5% 13.1%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 10.2%',
    foreground: '0 0% 89%',
    card: '0 0% 18.8%',
    cardForeground: '0 0% 89%',
    popover: '0 0% 18.8%',
    popoverForeground: '0 0% 89%',
    primary: '165.4 100% 36.3%',
    primaryForeground: '162.6 79.5% 7.6%',
    secondary: '0 0% 22.7%',
    secondaryForeground: '0 0% 89%',
    muted: '0 0% 16.9%',
    mutedForeground: '0 0% 62.7%',
    accent: '164.1 67.1% 14.3%',
    accentForeground: '163.8 58.6% 56.5%',
    destructive: '9.8 98.9% 65.9%',
    destructiveForeground: '10.5 83.3% 9.4%',
    success: '165.4 100% 36.3%',
    successForeground: '162.6 79.5% 7.6%',
    warning: '39.4 100% 66.3%',
    warningForeground: '53.9 100% 15.5%',
    info: '213.8 100% 67.6%',
    infoForeground: '209.5 88.1% 13.1%',
    border: '0 0% 26.7%',
    input: '0 0% 38%',
    ring: '213.8 100% 67.6%',
    well: '0 0% 7.2%',
    wellForeground: '0 0% 89%',
    ...SHARED_STRUCTURAL,
  },
};
