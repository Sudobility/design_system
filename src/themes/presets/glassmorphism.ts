/**
 * Glassmorphism Theme
 *
 * Frosted glass aesthetic with translucent surfaces, soft blurs,
 * and subtle borders. Uses violet/blue primary with diffused shadows.
 * Native overrides omit backdrop-blur (unsupported in React Native).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '1rem',
  borderWidth: '1px',
  shadowSm: '0 2px 8px rgb(0 0 0 / 0.04)',
  shadowMd: '0 8px 32px rgb(0 0 0 / 0.1)',
  shadowLg: '0 16px 48px rgb(0 0 0 / 0.12)',
  fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const glassmorphismTheme: ThemeDefinition = {
  name: 'glassmorphism',
  displayName: 'Glassmorphism',
  description: 'Frosted glass aesthetic with translucent surfaces and soft blurs',
  light: {
    background: '220 20% 97%',
    foreground: '224 71% 4%',
    card: '0 0% 100%',
    cardForeground: '224 71% 4%',
    popover: '0 0% 100%',
    popoverForeground: '224 71% 4%',
    primary: '263 70% 50%',
    primaryForeground: '0 0% 100%',
    secondary: '220 14% 96%',
    secondaryForeground: '220 9% 30%',
    muted: '220 14% 96%',
    mutedForeground: '220 9% 44%',
    accent: '252 56% 61.5%',
    accentForeground: '0 0% 2.8%',
    destructive: '0 84% 45.8%',
    destructiveForeground: '0 0% 100%',
    success: '142 76% 27.7%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.5%',
    warningForeground: '220 20% 97%',
    info: '263 70% 50%',
    infoForeground: '0 0% 100%',
    border: '220 13% 91%',
    input: '220 13% 91%',
    ring: '263 70% 50%',
    well: '220 20% 94%',
    wellForeground: '224 71% 4%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '224 71% 4%',
    foreground: '210 20% 98%',
    card: '224 50% 8%',
    cardForeground: '210 20% 98%',
    popover: '224 50% 8%',
    popoverForeground: '210 20% 98%',
    primary: '263 70% 69.4%',
    primaryForeground: '224 71% 4%',
    secondary: '215 28% 17%',
    secondaryForeground: '210 20% 98%',
    muted: '215 28% 17%',
    mutedForeground: '218 11% 65%',
    accent: '252 56% 60.3%',
    accentForeground: '0 0% 100%',
    destructive: '0 63% 65%',
    destructiveForeground: '224 71% 4%',
    success: '142 76% 36.9%',
    successForeground: '224 71% 4%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '263 70% 69.4%',
    infoForeground: '224 71% 4%',
    border: '215 28% 17%',
    input: '215 28% 17%',
    ring: '263 70% 58%',
    well: '224 71% 1%',
    wellForeground: '210 20% 98%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    card: {
      base: 'backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-white/10',
    },
    button: {
      base: 'backdrop-blur-sm',
    },
    input: {
      base: 'backdrop-blur-sm bg-white/40 dark:bg-gray-900/40',
    },
  },
  nativeClassOverrides: {
    card: {
      base: 'bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-white/10',
    },
    button: {
      base: '',
    },
    input: {
      base: 'bg-white/40 dark:bg-gray-900/40',
    },
  },
};
