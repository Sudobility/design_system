/**
 * Commodore Amiga Workbench Theme
 *
 * Amiga Workbench — "Old Blue" 4-color (blue/white/black/orange), Topaz
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '2px',
  shadowSm: '1px 1px 0 0 rgb(0 0 34 / 0.5)',
  shadowMd: '2px 2px 0 0 rgb(0 0 34 / 0.5)',
  shadowLg: '4px 4px 0 0 rgb(0 0 34 / 0.5)',
  fontSans: "'Topaz', 'TopazPlus a600a1200a4000', ui-monospace, 'Courier New', monospace",
  fontMono: "'Topaz', ui-monospace, monospace",
};

export const amigaTheme: ThemeDefinition = {
  name: 'amiga',
  displayName: 'Commodore Amiga Workbench',
  description: 'Amiga Workbench — "Old Blue" 4-color (blue/white/black/orange), Topaz',
  light: {
    background: '0 0% 62.7%',
    foreground: '0 0% 0%',
    card: '0 0% 75.3%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 75.3%',
    popoverForeground: '0 0% 0%',
    primary: '210 100% 17.8%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 69%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 78.4%',
    mutedForeground: '0 0% 19.3%',
    accent: '32 100% 50%',
    accentForeground: '240 100% 6.7%',
    destructive: '0 100% 20.6%',
    destructiveForeground: '0 0% 100%',
    success: '137.1 100% 11.2%',
    successForeground: '0 0% 100%',
    warning: '30 100% 15.1%',
    warningForeground: '0 0% 100%',
    info: '210 100% 17.8%',
    infoForeground: '0 0% 100%',
    border: '0 0% 0%',
    input: '0 0% 0%',
    ring: '210 100% 33.3%',
    well: '0 0% 59.7%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '240 100% 33.3%',
    foreground: '0 0% 100%',
    card: '210 100% 33.3%',
    cardForeground: '0 0% 100%',
    popover: '210 100% 33.3%',
    popoverForeground: '0 0% 100%',
    primary: '32 100% 81.4%',
    primaryForeground: '240 100% 6.7%',
    secondary: '210 100% 33.3%',
    secondaryForeground: '0 0% 100%',
    muted: '214.3 100% 23.3%',
    mutedForeground: '0 0% 86.7%',
    accent: '32 100% 35.5%',
    accentForeground: '240 100% 6.7%',
    destructive: '10 85.7% 83.6%',
    destructiveForeground: '240 100% 33.3%',
    success: '142.5 66.7% 65.5%',
    successForeground: '143.1 100% 5.1%',
    warning: '32 100% 81.4%',
    warningForeground: '240 100% 6.7%',
    info: '210 100% 81.5%',
    infoForeground: '240 100% 6.7%',
    border: '0 0% 100%',
    input: '0 0% 100%',
    ring: '32 100% 50%',
    well: '240 100% 30.3%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
