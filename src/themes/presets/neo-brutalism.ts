/**
 * Neo-Brutalism Theme
 *
 * Bold, raw, unpolished aesthetic with thick black borders,
 * hard-offset shadows, sharp corners, and bright yellow primary.
 * Inspired by the anti-design movement and brutalist web design.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '3px',
  shadowSm: '2px 2px 0 0 hsl(var(--foreground))',
  shadowMd: '4px 4px 0 0 hsl(var(--foreground))',
  shadowLg: '6px 6px 0 0 hsl(var(--foreground))',
  fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const neoBrutalismTheme: ThemeDefinition = {
  name: 'neo-brutalism',
  displayName: 'Neo-Brutalism',
  description: 'Bold, raw aesthetic with thick borders, hard shadows, and sharp corners',
  light: {
    background: '0 0% 96%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 0%',
    primary: '48 96% 24.8%',
    primaryForeground: '0 0% 96%',
    secondary: '0 0% 90%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 90%',
    mutedForeground: '0 0% 40%',
    accent: '330 81% 60%',
    accentForeground: '0 0% 0%',
    destructive: '0 84% 43.6%',
    destructiveForeground: '0 0% 100%',
    success: '142 76% 26.3%',
    successForeground: '0 0% 100%',
    warning: '38 92% 28.9%',
    warningForeground: '0 0% 96%',
    info: '221 83% 50.3%',
    infoForeground: '0 0% 100%',
    border: '0 0% 0%',
    input: '0 0% 0%',
    ring: '48 96% 53%',
    well: '0 0% 93%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 7%',
    foreground: '0 0% 100%',
    card: '0 0% 10%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 10%',
    popoverForeground: '0 0% 100%',
    primary: '48 96% 53%',
    primaryForeground: '0 0% 0%',
    secondary: '0 0% 15%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 15%',
    mutedForeground: '0 0% 64%',
    accent: '330 81% 49%',
    accentForeground: '0 0% 100%',
    destructive: '0 84% 64.9%',
    destructiveForeground: '0 0% 7%',
    success: '142 76% 36%',
    successForeground: '0 0% 7%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '217 91% 62.7%',
    infoForeground: '0 0% 7%',
    border: '0 0% 100%',
    input: '0 0% 100%',
    ring: '48 96% 53%',
    well: '0 0% 4%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'border-[3px] border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))] active:shadow-none active:translate-x-1 active:translate-y-1 font-black uppercase',
    },
    card: {
      base: 'border-[3px] border-foreground shadow-[4px_4px_0_0_hsl(var(--foreground))]',
    },
    input: {
      base: 'border-[3px] border-foreground',
    },
  },
};
