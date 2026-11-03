/**
 * Windows 2000 Theme
 *
 * Late-classic Windows interface with soft gray chrome, navy selection tones,
 * Tahoma-era typography, and raised/sunken controls.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: 'none',
  shadowMd: 'none',
  shadowLg: 'none',
  fontSans: 'Tahoma, Verdana, "MS Sans Serif", Arial, sans-serif',
  fontMono: '"Lucida Console", "Courier New", monospace',
};

export const windows2000Theme: ThemeDefinition = {
  name: 'windows-2000',
  displayName: 'Windows 2000',
  description: 'Windows 2000 style with beveled 3D controls and business-gray chrome',
  light: {
    background: '210 17% 84%',
    foreground: '210 10% 12%',
    card: '210 14% 87%',
    cardForeground: '210 10% 12%',
    popover: '210 14% 87%',
    popoverForeground: '210 10% 12%',
    primary: '214 74% 36%',
    primaryForeground: '0 0% 100%',
    secondary: '210 12% 92%',
    secondaryForeground: '210 10% 12%',
    muted: '210 12% 80%',
    mutedForeground: '210 10% 34.3%',
    accent: '214 74% 56.6%',
    accentForeground: '0 0% 11.8%',
    destructive: '0 70% 38.6%',
    destructiveForeground: '0 0% 100%',
    success: '130 50% 25.6%',
    successForeground: '0 0% 100%',
    warning: '42 100% 22.3%',
    warningForeground: '210 17% 84%',
    info: '214 74% 36%',
    infoForeground: '0 0% 100%',
    border: '210 7% 47%',
    input: '210 7% 47%',
    ring: '214 74% 40%',
    well: '210 17% 81%',
    wellForeground: '210 10% 12%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '214 13% 24%',
    foreground: '210 18% 92%',
    card: '214 12% 28%',
    cardForeground: '210 18% 92%',
    popover: '214 12% 28%',
    popoverForeground: '210 18% 92%',
    primary: '214 68% 80%',
    primaryForeground: '214 13% 24%',
    secondary: '214 10% 36%',
    secondaryForeground: '210 18% 92%',
    muted: '214 10% 30%',
    mutedForeground: '210 10% 73.3%',
    accent: '214 68% 45.3%',
    accentForeground: '0 0% 100%',
    destructive: '0 62% 79.6%',
    destructiveForeground: '214 13% 24%',
    success: '130 45% 64.3%',
    successForeground: '214 13% 24%',
    warning: '42 100% 58%',
    warningForeground: '0 0% 0%',
    info: '214 68% 80%',
    infoForeground: '214 13% 24%',
    border: '214 10% 52%',
    input: '214 10% 52%',
    ring: '214 68% 52%',
    well: '214 13% 21%',
    wellForeground: '210 18% 92%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-secondary text-secondary-foreground font-medium shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.9),inset_-1px_-1px_0_hsl(210_10%_42%/_0.95)] active:shadow-[inset_1px_1px_0_hsl(210_10%_42%/_0.95),inset_-1px_-1px_0_hsl(0_0%_100%/_0.9)] active:bg-muted',
    },
    card: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-card shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.6),inset_-1px_-1px_0_hsl(210_10%_42%/_0.85)]',
    },
    input: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-white text-black shadow-[inset_1px_1px_0_hsl(210_10%_42%/_0.8),inset_-1px_-1px_0_hsl(0_0%_100%/_0.85)] focus:ring-0',
    },
    badge: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-secondary px-2 shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.6),inset_-1px_-1px_0_hsl(210_10%_42%/_0.85)]',
    },
    alert: {
      base: 'rounded-none border border-[hsl(var(--border))] bg-card shadow-[inset_1px_1px_0_hsl(0_0%_100%/_0.6),inset_-1px_-1px_0_hsl(210_10%_42%/_0.85)]',
    },
  },
};
