/**
 * Gaming / Esports Theme
 *
 * Inspired by Steam, Discord, Twitch, Epic Games.
 * Dark, immersive, bold colors, sharp corners, glow effects.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.2)',
  shadowMd: '0 4px 12px rgb(0 0 0 / 0.3)',
  shadowLg: '0 0 20px hsl(var(--primary) / 0.3)',
  fontSans: 'Poppins, ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
};

export const gamingTheme: ThemeDefinition = {
  name: 'gaming',
  displayName: 'Gaming',
  description: 'Bold, immersive dark design with glow effects and sharp corners',
  light: {
    background: '0 0% 96%',
    foreground: '210 10% 7.5%',
    card: '0 0% 100%',
    cardForeground: '210 10% 7.5%',
    popover: '0 0% 100%',
    popoverForeground: '210 10% 7.5%',
    primary: '276 100% 48.2%',
    primaryForeground: '0 0% 100%',
    secondary: '220 13% 91%',
    secondaryForeground: '210 10% 7.5%',
    muted: '220 13% 91%',
    mutedForeground: '220 9% 42.1%',
    accent: '231 84% 65%',
    accentForeground: '0 0% 7.4%',
    destructive: '0 84% 43.9%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 27.3%',
    successForeground: '0 0% 100%',
    warning: '38 92% 29.2%',
    warningForeground: '0 0% 96%',
    info: '231 84% 58.1%',
    infoForeground: '0 0% 100%',
    border: '220 13% 87%',
    input: '220 13% 87%',
    ring: '276 100% 64%',
    well: '0 0% 93%',
    wellForeground: '210 10% 7.5%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '210 10% 15%',
    foreground: '0 0% 95%',
    card: '220 13% 18%',
    cardForeground: '0 0% 95%',
    popover: '220 13% 18%',
    popoverForeground: '0 0% 95%',
    primary: '276 100% 74.5%',
    primaryForeground: '210 10% 15%',
    secondary: '220 13% 22%',
    secondaryForeground: '0 0% 95%',
    muted: '220 13% 22%',
    mutedForeground: '220 9% 62.9%',
    accent: '231 84% 60.6%',
    accentForeground: '0 0% 100%',
    destructive: '0 62.8% 70.2%',
    destructiveForeground: '210 10% 15%',
    success: '142 71% 45%',
    successForeground: '210 10% 15%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '231 84% 74.6%',
    infoForeground: '210 10% 15%',
    border: '220 13% 24%',
    input: '220 13% 24%',
    ring: '276 100% 64%',
    well: '210 10% 12%',
    wellForeground: '0 0% 95%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-bold uppercase tracking-wide shadow-[0_0_15px_hsl(var(--primary)/0.4)] hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] hover:scale-105 transition-all',
    },
    card: {
      base: 'border-primary/10 bg-card/95 hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-shadow',
    },
    input: {
      base: 'border-primary/20 bg-card/90 focus:border-primary',
    },
    badge: {
      base: 'font-bold uppercase text-[0.7rem] tracking-wide',
    },
    alert: {
      base: 'border-l-4 border-l-primary bg-card/90',
    },
  },
};
