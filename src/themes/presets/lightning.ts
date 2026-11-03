/**
 * Salesforce Lightning Theme
 *
 * Salesforce Lightning (SLDS) — brand blue #0176D3, Salesforce Sans
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 1px rgb(0 0 0 / 0.05)',
  shadowMd: '0 2px 3px rgb(0 0 0 / 0.16)',
  shadowLg: '0 4px 8px rgb(0 0 0 / 0.16)',
  fontSans:
    "'Salesforce Sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontMono: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace",
};

export const lightningTheme: ThemeDefinition = {
  name: 'lightning',
  displayName: 'Salesforce Lightning',
  description: 'Salesforce Lightning (SLDS) — brand blue #0176D3, Salesforce Sans',
  light: {
    background: '0 0% 95.3%',
    foreground: '0 0% 9.4%',
    card: '0 0% 100%',
    cardForeground: '0 0% 9.4%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 9.4%',
    primary: '206.6 99.1% 36.4%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 91%',
    secondaryForeground: '206.6 99.1% 37.4%',
    muted: '0 0% 91%',
    mutedForeground: '0 0% 26.7%',
    accent: '218.8 100% 96.7%',
    accentForeground: '206.6 99.1% 39.9%',
    destructive: '354 94.8% 37.5%',
    destructiveForeground: '0 0% 100%',
    success: '139.5 48.3% 31.2%',
    successForeground: '0 0% 100%',
    warning: '27.4 99% 33.3%',
    warningForeground: '0 0% 95.3%',
    info: '206.6 99.1% 36.4%',
    infoForeground: '0 0% 100%',
    border: '0 0% 78.8%',
    input: '0 0% 78.8%',
    ring: '207.6 100% 55.3%',
    well: '0 0% 92.3%',
    wellForeground: '0 0% 9.4%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 8.6%',
    foreground: '0 0% 98.4%',
    card: '0 0% 10.6%',
    cardForeground: '0 0% 98.4%',
    popover: '0 0% 10.6%',
    popoverForeground: '0 0% 98.4%',
    primary: '207.6 100% 55.3%',
    primaryForeground: '216.8 100% 11.2%',
    secondary: '0 0% 18%',
    secondaryForeground: '0 0% 98.4%',
    muted: '0 0% 14.1%',
    mutedForeground: '0 0% 68.2%',
    accent: '214.1 92.5% 15.7%',
    accentForeground: '212.5 97.6% 66.7%',
    destructive: '5.4 98.9% 64.7%',
    destructiveForeground: '6.9 100% 5.1%',
    success: '129.8 53.1% 52.4%',
    successForeground: '132.9 87.5% 9.4%',
    warning: '27.4 99% 61%',
    warningForeground: '0 6.7% 2.9%',
    info: '207.6 100% 55.3%',
    infoForeground: '216.8 100% 11.2%',
    border: '0 0% 26.7%',
    input: '0 0% 36.1%',
    ring: '207.6 100% 55.3%',
    well: '0 0% 5.6%',
    wellForeground: '0 0% 98.4%',
    ...SHARED_STRUCTURAL,
  },
};
