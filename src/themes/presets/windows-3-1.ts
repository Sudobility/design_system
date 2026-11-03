/**
 * Windows 3.1 Theme
 *
 * Classic early Windows UI with flat gray surfaces, hard black outlines,
 * blue accenting, and chunky bitmap-era controls.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: '1px 1px 0 0 hsl(0 0% 100%), 2px 2px 0 0 hsl(0 0% 0%)',
  shadowMd: '1px 1px 0 0 hsl(0 0% 100%), 2px 2px 0 0 hsl(0 0% 0%)',
  shadowLg: '1px 1px 0 0 hsl(0 0% 100%), 2px 2px 0 0 hsl(0 0% 0%)',
  fontSans: '"MS Sans Serif", "Chicago", "Geneva", "Arial", sans-serif',
  fontMono: '"Perfect DOS VGA 437", "Courier New", monospace',
};

export const windows31Theme: ThemeDefinition = {
  name: 'windows-3.1',
  displayName: 'Windows 3.1',
  description: 'Classic Windows 3.1 styling with gray chrome and hard-edged controls',
  light: {
    background: '0 0% 71%',
    foreground: '0 0% 0%',
    card: '0 0% 75%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 75%',
    popoverForeground: '0 0% 0%',
    primary: '226 100% 34.5%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 82%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 70%',
    mutedForeground: '0 0% 25.8%',
    accent: '226 100% 60.9%',
    accentForeground: '0 0% 100%',
    destructive: '0 85% 28.4%',
    destructiveForeground: '0 0% 100%',
    success: '132 55% 19%',
    successForeground: '0 0% 100%',
    warning: '45 100% 16.3%',
    warningForeground: '0 0% 71%',
    info: '226 100% 34.5%',
    infoForeground: '0 0% 100%',
    border: '0 0% 0%',
    input: '0 0% 0%',
    ring: '226 100% 45%',
    well: '0 0% 68%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 35%',
    foreground: '0 0% 100%',
    card: '0 0% 38%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 38%',
    popoverForeground: '0 0% 100%',
    primary: '220 100% 96.7%',
    primaryForeground: '0 0% 35%',
    secondary: '0 0% 45%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 32%',
    mutedForeground: '0 0% 86.1%',
    accent: '220 100% 55%',
    accentForeground: '0 0% 100%',
    destructive: '0 75% 90.1%',
    destructiveForeground: '0 0% 35%',
    success: '132 55% 80.5%',
    successForeground: '0 0% 35%',
    warning: '45 100% 69.3%',
    warningForeground: '0 0% 0%',
    info: '220 100% 96.7%',
    infoForeground: '0 0% 35%',
    border: '0 0% 100%',
    input: '0 0% 100%',
    ring: '220 100% 55%',
    well: '0 0% 32%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'rounded-none border border-black bg-secondary text-foreground font-medium shadow-[inset_1px_1px_0_hsl(0_0%_100%),inset_-1px_-1px_0_hsl(0_0%_35%)] active:shadow-[inset_1px_1px_0_hsl(0_0%_35%),inset_-1px_-1px_0_hsl(0_0%_100%)] active:translate-x-[1px] active:translate-y-[1px]',
    },
    card: {
      base: 'rounded-none border border-black bg-card shadow-[inset_1px_1px_0_hsl(0_0%_100%),inset_-1px_-1px_0_hsl(0_0%_35%)]',
    },
    input: {
      base: 'rounded-none border border-black bg-white text-black shadow-[inset_1px_1px_0_hsl(0_0%_35%),inset_-1px_-1px_0_hsl(0_0%_100%)] focus:ring-0',
    },
    badge: {
      base: 'rounded-none border border-black bg-secondary px-2 font-medium shadow-[inset_1px_1px_0_hsl(0_0%_100%),inset_-1px_-1px_0_hsl(0_0%_35%)]',
    },
    alert: {
      base: 'rounded-none border border-black bg-card shadow-[inset_1px_1px_0_hsl(0_0%_100%),inset_-1px_-1px_0_hsl(0_0%_35%)]',
    },
  },
};
