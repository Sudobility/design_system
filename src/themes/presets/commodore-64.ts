/**
 * Commodore 64 Theme
 *
 * Commodore 64 (Pepto VIC-II palette) — blue-on-blue, PETSCII, boot screen
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '2px',
  shadowSm: '1px 1px 0 0 rgb(53 40 121 / 0.6)',
  shadowMd: '2px 2px 0 0 rgb(53 40 121 / 0.6)',
  shadowLg: '4px 4px 0 0 rgb(53 40 121 / 0.6)',
  fontSans: "'C64 Pro', 'Commodore 64 Pixelized', ui-monospace, 'Courier New', monospace",
  fontMono: "'C64 Pro Mono', ui-monospace, 'Courier New', monospace",
};

export const commodore64Theme: ThemeDefinition = {
  name: 'commodore-64',
  displayName: 'Commodore 64',
  description: 'Commodore 64 (Pepto VIC-II palette) — blue-on-blue, PETSCII, boot screen',
  light: {
    background: '249.1 60.5% 85.1%',
    foreground: '249.6 50.3% 31.6%',
    card: '250.3 63.6% 89.2%',
    cardForeground: '249.6 50.3% 31.6%',
    popover: '250.3 63.6% 89.2%',
    popoverForeground: '249.6 50.3% 31.6%',
    primary: '249.6 50.3% 31.6%',
    primaryForeground: '0 0% 100%',
    secondary: '248.6 47.5% 76.9%',
    secondaryForeground: '249.6 50.3% 31.6%',
    muted: '249.4 61.5% 89.8%',
    mutedForeground: '281.1 37.4% 35.6%',
    accent: '249.7 37% 70.2%',
    accentForeground: '0 0% 21.1%',
    destructive: '11.8 41.5% 28.8%',
    destructiveForeground: '0 0% 100%',
    success: '103 35.6% 24.2%',
    successForeground: '0 0% 100%',
    warning: '50.2 67.1% 20.4%',
    warningForeground: '0 0% 100%',
    info: '249.6 50.3% 31.6%',
    infoForeground: '0 0% 100%',
    border: '248.3 51.5% 66.9%',
    input: '249.7 37% 53.9%',
    ring: '281.1 37.4% 38.2%',
    well: '249.1 60.5% 82.1%',
    wellForeground: '249.6 50.3% 31.6%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '249.6 50.3% 31.6%',
    foreground: '246.9 53% 94.5%',
    card: '246 40.8% 38.4%',
    cardForeground: '246.9 53% 94.5%',
    popover: '246 40.8% 38.4%',
    popoverForeground: '246.9 53% 94.5%',
    primary: '249.7 37% 81.9%',
    primaryForeground: '249.6 50.3% 31.6%',
    secondary: '247.8 40.3% 41.4%',
    secondaryForeground: '249.1 60.5% 85.1%',
    muted: '246 40.8% 38.4%',
    mutedForeground: '103.1 46.4% 67.1%',
    accent: '249.7 37% 53.9%',
    accentForeground: '0 0% 100%',
    destructive: '12.9 26.7% 71.7%',
    destructiveForeground: '249.6 50.3% 31.6%',
    success: '103.1 46.4% 67.1%',
    successForeground: '107.4 65.5% 11.4%',
    warning: '70.2 44% 60.8%',
    warningForeground: '60 100% 5.9%',
    info: '248.3 51.5% 78.4%',
    infoForeground: '249.2 68.4% 7.5%',
    border: '249.7 37% 53.9%',
    input: '249.7 37% 53.9%',
    ring: '103.1 46.4% 67.1%',
    well: '249.6 50.3% 28.6%',
    wellForeground: '246.9 53% 94.5%',
    ...SHARED_STRUCTURAL,
  },
};
