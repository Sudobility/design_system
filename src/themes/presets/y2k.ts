/**
 * Y2K Theme
 *
 * Early 2000s aesthetic — bubbly, bright, shiny surfaces.
 * Hot pink primary, baby blue accent, pill-shaped everything.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '9999px',
  borderWidth: '2px',
  shadowSm: '0 2px 8px hsl(330 81% 60% / 0.2)',
  shadowMd: '0 4px 14px hsl(330 81% 60% / 0.3)',
  shadowLg: '0 8px 24px hsl(330 81% 60% / 0.4)',
  fontSans: 'ui-sans-serif, system-ui, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const y2kTheme: ThemeDefinition = {
  name: 'y2k',
  displayName: 'Y2K',
  description: 'Early 2000s bubbly aesthetic with hot pink and baby blue',
  light: {
    background: '300 40% 95%',
    foreground: '270 50% 15%',
    card: '300 50% 99%',
    cardForeground: '270 50% 15%',
    popover: '0 0% 100%',
    popoverForeground: '270 50% 15%',
    primary: '330 81% 41.1%',
    primaryForeground: '0 0% 100%',
    secondary: '280 60% 92%',
    secondaryForeground: '280 60% 30%',
    muted: '300 30% 95%',
    mutedForeground: '270 20% 46.3%',
    accent: '198 93% 60%',
    accentForeground: '0 0% 27.3%',
    destructive: '0 84% 44%',
    destructiveForeground: '0 0% 100%',
    success: '150 80% 25.9%',
    successForeground: '0 0% 100%',
    warning: '45 93% 26.4%',
    warningForeground: '300 40% 95%',
    info: '198 93% 31.6%',
    infoForeground: '0 0% 100%',
    border: '300 40% 88%',
    input: '300 40% 88%',
    ring: '330 81% 60%',
    well: '300 40% 92%',
    wellForeground: '270 50% 15%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '260 60% 8%',
    foreground: '300 30% 95%',
    card: '260 55% 12%',
    cardForeground: '300 30% 95%',
    popover: '260 55% 12%',
    popoverForeground: '300 30% 95%',
    primary: '330 81% 60.9%',
    primaryForeground: '260 60% 8%',
    secondary: '280 40% 22%',
    secondaryForeground: '280 60% 85%',
    muted: '260 40% 18%',
    mutedForeground: '270 20% 60%',
    accent: '198 93% 33.5%',
    accentForeground: '0 0% 100%',
    destructive: '0 70% 63%',
    destructiveForeground: '260 60% 8%',
    success: '150 70% 40%',
    successForeground: '260 60% 8%',
    warning: '45 90% 50%',
    warningForeground: '0 0% 0%',
    info: '198 93% 60%',
    infoForeground: '260 60% 8%',
    border: '260 40% 22%',
    input: '260 40% 22%',
    ring: '330 81% 60%',
    well: '260 60% 5%',
    wellForeground: '300 30% 95%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-bold tracking-[0.02em] border-2 border-white/50 shadow-[0_4px_14px_hsl(var(--primary)/0.4)] hover:shadow-[0_6px_20px_hsl(var(--primary)/0.5)] hover:scale-[1.02]',
    },
    card: {
      base: 'border-2 border-white/60 bg-gradient-to-br from-card via-card to-secondary/70 shadow-[0_10px_30px_hsl(var(--primary)/0.18)]',
    },
    input: {
      base: 'border-2 border-primary/25 bg-card/90 shadow-[inset_0_1px_0_hsl(0_0%_100%_/_0.7)]',
    },
    badge: {
      base: 'font-bold uppercase tracking-[0.08em] border border-white/50',
    },
    alert: {
      base: 'border-2 border-primary/25 bg-gradient-to-r from-card to-secondary/60',
    },
  },
};
