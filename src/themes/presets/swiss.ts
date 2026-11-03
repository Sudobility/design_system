/**
 * Swiss Theme
 *
 * Swiss/International typography style — precise, grid-based, Helvetica.
 * Pure black and white with red primary. No decorative elements.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: 'none',
  shadowMd: 'none',
  shadowLg: 'none',
  fontSans: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  fontMono: 'SF Mono, Menlo, Monaco, monospace',
};

export const swissTheme: ThemeDefinition = {
  name: 'swiss',
  displayName: 'Swiss',
  description: 'Swiss/International typography style with precise, minimal design',
  light: {
    background: '0 0% 96.5%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 0%',
    primary: '0 84% 43.3%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 96%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 96%',
    mutedForeground: '0 0% 42.6%',
    accent: '0 0% 96%',
    accentForeground: '0 0% 0%',
    destructive: '0 84% 43.3%',
    destructiveForeground: '0 0% 100%',
    success: '142 76% 27.7%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.5%',
    warningForeground: '0 0% 96.5%',
    info: '0 0% 0%',
    infoForeground: '0 0% 100%',
    border: '0 0% 80%',
    input: '0 0% 80%',
    ring: '0 84% 50%',
    well: '0 0% 93.5%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 0%',
    foreground: '0 0% 100%',
    card: '0 0% 6%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 6%',
    popoverForeground: '0 0% 100%',
    primary: '0 84% 61.6%',
    primaryForeground: '0 0% 0%',
    secondary: '0 0% 12%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 12%',
    mutedForeground: '0 0% 60%',
    accent: '0 0% 12%',
    accentForeground: '0 0% 100%',
    destructive: '0 84% 61.6%',
    destructiveForeground: '0 0% 0%',
    success: '142 76% 36%',
    successForeground: '0 0% 0%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '0 0% 100%',
    infoForeground: '0 0% 0%',
    border: '0 0% 20%',
    input: '0 0% 20%',
    ring: '0 84% 50%',
    well: '0 0% 5%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'font-medium uppercase tracking-[0.2em]',
    },
    card: {
      base: 'border shadow-none',
    },
    input: {
      // `border border-input` because the base semantic classes carry no border
      // at all — they lean on `bg-muted` to separate the field from the page.
      // On a light surface that fill is nearly the page colour, so the control
      // had no edge and did not read as somewhere you could type. The palette
      // already defines an `input` colour (80% light, 20% dark) for exactly
      // this and nothing was using it; `card` above takes its border the same way.
      base: 'border border-input rounded-none shadow-none uppercase tracking-[0.08em]',
    },
    badge: {
      base: 'rounded-none uppercase tracking-[0.16em] text-[0.68rem]',
    },
    alert: {
      base: 'rounded-none border-l-4 border-l-primary shadow-none',
    },
  },
};
