/**
 * Cyberpunk Theme
 *
 * Neon-on-dark, futuristic aesthetic with cyan and magenta accents,
 * glowing shadows, and monospace typography throughout.
 * Both light and dark modes use dark backgrounds — cyberpunk is inherently dark.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 0 5px hsl(var(--primary) / 0.3)',
  shadowMd: '0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3)',
  shadowLg:
    '0 0 20px hsl(var(--primary) / 0.5), 0 0 40px hsl(var(--primary) / 0.3), 0 0 60px hsl(var(--primary) / 0.15)',
  fontSans: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const cyberpunkTheme: ThemeDefinition = {
  name: 'cyberpunk',
  displayName: 'Cyberpunk',
  description: 'Neon-on-dark futuristic aesthetic with cyan and magenta accents',
  light: {
    // "Light" mode is still dark — a lighter shade of dark for cyberpunk
    background: '220 17% 14%',
    foreground: '180 7% 88%',
    card: '220 17% 17%',
    cardForeground: '180 7% 88%',
    popover: '220 17% 17%',
    popoverForeground: '180 7% 88%',
    primary: '188 95% 43%',
    primaryForeground: '220 17% 10%',
    secondary: '220 17% 20%',
    secondaryForeground: '180 7% 88%',
    muted: '220 17% 20%',
    mutedForeground: '218 11% 60.5%',
    accent: '292 84% 41.4%',
    accentForeground: '0 0% 100%',
    destructive: '0 90% 69.3%',
    destructiveForeground: '220 17% 14%',
    success: '150 100% 45%',
    successForeground: '220 17% 10%',
    warning: '48 96% 53%',
    warningForeground: '220 17% 10%',
    info: '188 95% 43%',
    infoForeground: '220 17% 10%',
    border: '220 17% 25%',
    input: '220 17% 25%',
    ring: '188 95% 43%',
    well: '220 17% 11%',
    wellForeground: '180 7% 88%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '220 17% 7%',
    foreground: '180 7% 88%',
    card: '220 17% 10%',
    cardForeground: '180 7% 88%',
    popover: '220 17% 10%',
    popoverForeground: '180 7% 88%',
    primary: '188 95% 43%',
    primaryForeground: '220 17% 7%',
    secondary: '220 17% 14%',
    secondaryForeground: '180 7% 88%',
    muted: '220 17% 14%',
    mutedForeground: '218 11% 54.9%',
    accent: '292 84% 41.4%',
    accentForeground: '0 0% 100%',
    destructive: '0 90% 62.6%',
    destructiveForeground: '220 17% 7%',
    success: '150 100% 45%',
    successForeground: '220 17% 7%',
    warning: '48 96% 53%',
    warningForeground: '220 17% 7%',
    info: '188 95% 43%',
    infoForeground: '220 17% 7%',
    border: '220 17% 18%',
    input: '220 17% 18%',
    ring: '188 95% 43%',
    well: '220 17% 4%',
    wellForeground: '180 7% 88%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-mono uppercase tracking-widest shadow-[0_0_10px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_20px_hsl(var(--primary)/0.7)]',
    },
    card: {
      base: 'shadow-[0_0_15px_hsl(var(--primary)/0.2)]',
    },
  },
};
