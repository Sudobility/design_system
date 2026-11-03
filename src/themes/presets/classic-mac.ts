/**
 * Apple Classic Macintosh Theme
 *
 * Classic Mac OS (System / Platinum) — 1-bit black & white, Chicago, square windows
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '2px',
  shadowSm: '1px 1px 0 0 rgb(0 0 0 / 1)',
  shadowMd: '2px 2px 0 0 rgb(0 0 0 / 1)',
  shadowLg: '4px 4px 0 0 rgb(0 0 0 / 1)',
  fontSans: "'ChicagoFLF', 'Charcoal', 'Geneva', Tahoma, -apple-system, sans-serif",
  fontMono: "'Monaco', ui-monospace, 'Courier New', monospace",
};

export const classicMacTheme: ThemeDefinition = {
  name: 'classic-mac',
  displayName: 'Apple Classic Macintosh',
  description: 'Classic Mac OS (System / Platinum) — 1-bit black & white, Chicago, square windows',
  light: {
    background: '0 0% 96%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 0%',
    primary: '0 0% 0%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 86.7%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 93.3%',
    mutedForeground: '0 0% 33.3%',
    accent: '0 0% 80%',
    accentForeground: '0 0% 0%',
    destructive: '0 100% 40%',
    destructiveForeground: '0 0% 100%',
    success: '120 100% 23.3%',
    successForeground: '0 0% 100%',
    warning: '35.9 100% 30.3%',
    warningForeground: '0 0% 100%',
    info: '240 100% 40%',
    infoForeground: '0 0% 100%',
    border: '0 0% 0%',
    input: '0 0% 0%',
    ring: '0 0% 0%',
    well: '0 0% 93%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 10.2%',
    foreground: '0 0% 100%',
    card: '0 0% 16.5%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 16.5%',
    popoverForeground: '0 0% 100%',
    primary: '0 0% 100%',
    primaryForeground: '0 0% 0%',
    secondary: '0 0% 26.7%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 20%',
    mutedForeground: '0 0% 66.7%',
    accent: '0 0% 33.3%',
    accentForeground: '0 0% 100%',
    destructive: '0 100% 71%',
    destructiveForeground: '0 0% 10.2%',
    success: '120 53.8% 56.7%',
    successForeground: '120 44.4% 7.1%',
    warning: '35 100% 60%',
    warningForeground: '0 0% 10.2%',
    info: '220 100% 70%',
    infoForeground: '223.6 52.4% 8.2%',
    border: '0 0% 53.3%',
    input: '0 0% 53.3%',
    ring: '0 0% 100%',
    well: '0 0% 7.2%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
