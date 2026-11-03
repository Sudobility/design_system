/**
 * Uber Base Web Theme
 *
 * Uber Base — black primary, #276EF1 accent, Uber Move, minimal geometric
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 4px rgb(0 0 0 / 0.16)',
  shadowMd: '0 2px 8px rgb(0 0 0 / 0.16)',
  shadowLg: '0 4px 16px rgb(0 0 0 / 0.16)',
  fontSans:
    "'Uber Move Text', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif",
  fontMono: "'Uber Move Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
};

export const baseWebTheme: ThemeDefinition = {
  name: 'base-web',
  displayName: 'Uber Base Web',
  description: 'Uber Base — black primary, #276EF1 accent, Uber Move, minimal geometric',
  light: {
    background: '0 0% 96.5%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 0%',
    primary: '0 0% 0%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 93.3%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 93.3%',
    mutedForeground: '0 0% 32.9%',
    accent: '221.1 90.5% 95.9%',
    accentForeground: '218.9 87.8% 51.7%',
    destructive: '6.7 100% 41.8%',
    destructiveForeground: '0 0% 100%',
    success: '151 93.5% 25.1%',
    successForeground: '0 0% 100%',
    warning: '39.9 100% 28.8%',
    warningForeground: '0 0% 96.5%',
    info: '218.9 87.8% 50.7%',
    infoForeground: '0 0% 100%',
    border: '0 0% 79.6%',
    input: '0 0% 79.6%',
    ring: '218.9 87.8% 54.9%',
    well: '0 0% 93.5%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 7.8%',
    foreground: '0 0% 100%',
    card: '0 0% 16.1%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 16.1%',
    popoverForeground: '0 0% 100%',
    primary: '0 0% 100%',
    primaryForeground: '0 0% 0%',
    secondary: '0 0% 20%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 16.1%',
    mutedForeground: '0 0% 69%',
    accent: '215.4 65.6% 18.2%',
    accentForeground: '219 88.5% 65.9%',
    destructive: '10 89.8% 60.3%',
    destructiveForeground: '0 0% 7.8%',
    success: '151 93.5% 33.4%',
    successForeground: '0 0% 7.8%',
    warning: '39.9 100% 63.1%',
    warningForeground: '0 0% 0%',
    info: '219 88.5% 65.9%',
    infoForeground: '0 0% 0%',
    border: '0 0% 20%',
    input: '0 0% 27.8%',
    ring: '219 88.5% 65.9%',
    well: '0 0% 4.8%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
