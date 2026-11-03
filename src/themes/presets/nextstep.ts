/**
 * NeXTSTEP Theme
 *
 * NeXTSTEP / OPENSTEP — grayscale "chiseled steel" UI (2/3-gray #AAAAAA), beveled controls, black frames, Helvetica
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '2px',
  shadowSm: '0 1px 3px rgb(0 0 0 / 0.30)',
  shadowMd: '0 3px 8px rgb(0 0 0 / 0.35)',
  shadowLg: '0 8px 20px rgb(0 0 0 / 0.40)',
  fontSans: "'Helvetica Neue', Helvetica, Arial, sans-serif",
  fontMono: "'Courier', 'Courier New', ui-monospace, monospace",
};

export const nextstepTheme: ThemeDefinition = {
  name: 'nextstep',
  displayName: 'NeXTSTEP',
  description:
    'NeXTSTEP / OPENSTEP — grayscale "chiseled steel" UI (2/3-gray #AAAAAA), beveled controls, black frames, Helvetica',
  light: {
    background: '0 0% 66.7%',
    foreground: '0 0% 0%',
    card: '0 0% 100%',
    cardForeground: '0 0% 0%',
    popover: '0 0% 66.7%',
    popoverForeground: '0 0% 0%',
    primary: '0 0% 21.4%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 80%',
    secondaryForeground: '0 0% 0%',
    muted: '0 0% 75.3%',
    mutedForeground: '0 0% 22.6%',
    accent: '0 0% 86.7%',
    accentForeground: '0 0% 0%',
    destructive: '0 66.8% 26.3%',
    destructiveForeground: '0 0% 100%',
    success: '120 39.9% 18.1%',
    successForeground: '0 0% 100%',
    warning: '46.1 100% 14%',
    warningForeground: '0 0% 100%',
    info: '213 49.2% 23.9%',
    infoForeground: '0 0% 100%',
    border: '0 0% 0%',
    input: '0 0% 33.3%',
    ring: '0 0% 0%',
    well: '0 0% 63.7%',
    wellForeground: '0 0% 0%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 22.7%',
    foreground: '0 0% 91.8%',
    card: '0 0% 14.9%',
    cardForeground: '0 0% 91.8%',
    popover: '0 0% 22.7%',
    popoverForeground: '0 0% 91.8%',
    primary: '0 0% 80%',
    primaryForeground: '0 0% 10.2%',
    secondary: '0 0% 33.3%',
    secondaryForeground: '0 0% 91.8%',
    muted: '0 0% 18%',
    mutedForeground: '0 0% 66.7%',
    accent: '0 0% 33.3%',
    accentForeground: '0 0% 100%',
    destructive: '0 54.5% 71.2%',
    destructiveForeground: '0 67.7% 6.1%',
    success: '120 27.5% 57.7%',
    successForeground: '120 61% 8%',
    warning: '45.3 57% 50.8%',
    warningForeground: '46.2 100% 5.1%',
    info: '213.1 51% 66.8%',
    infoForeground: '211.2 67.6% 7.3%',
    border: '0 0% 0%',
    input: '0 0% 41.6%',
    ring: '0 0% 100%',
    well: '0 0% 19.7%',
    wellForeground: '0 0% 91.8%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'rounded-none border-2 border-t-white/70 border-l-white/70 border-b-black/50 border-r-black/50 active:border-t-black/50 active:border-l-black/50 active:border-b-white/70 active:border-r-white/70',
    },
    card: {
      base: 'rounded-none border-2 border-t-white/70 border-l-white/70 border-b-black/50 border-r-black/50',
    },
    input: {
      base: 'rounded-none border-2 border-t-black/50 border-l-black/50 border-b-white/70 border-r-white/70',
    },
    badge: {
      base: 'rounded-none border border-t-white/60 border-l-white/60 border-b-black/40 border-r-black/40',
    },
    alert: {
      base: 'rounded-none border-2 border-t-white/70 border-l-white/70 border-b-black/50 border-r-black/50',
    },
  },
  nativeClassOverrides: {
    button: {
      base: 'rounded-none border-2 border-t-white/70 border-l-white/70 border-b-black/50 border-r-black/50',
    },
    card: {
      base: 'rounded-none border-2 border-t-white/70 border-l-white/70 border-b-black/50 border-r-black/50',
    },
    input: {
      base: 'rounded-none border-2 border-t-black/50 border-l-black/50 border-b-white/70 border-r-white/70',
    },
    badge: {
      base: 'rounded-none border border-t-white/60 border-l-white/60 border-b-black/40 border-r-black/40',
    },
    alert: {
      base: 'rounded-none border-2 border-t-white/70 border-l-white/70 border-b-black/50 border-r-black/50',
    },
  },
};
