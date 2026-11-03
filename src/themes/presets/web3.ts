/**
 * Web3 / Crypto Theme
 *
 * Inspired by Uniswap, MetaMask, Rainbow Wallet.
 * Dark-first, gradient buttons, glassmorphic cards, pill shapes.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '1.25rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px rgb(0 0 0 / 0.1)',
  shadowMd: '0 4px 12px rgb(0 0 0 / 0.15)',
  shadowLg: '0 8px 24px rgb(0 0 0 / 0.2)',
  fontSans: 'Inter, ui-sans-serif, system-ui, -apple-system, sans-serif',
  fontMono: 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace',
};

export const web3Theme: ThemeDefinition = {
  name: 'web3',
  displayName: 'Web3',
  description: 'Crypto-native with gradient buttons, glassmorphic cards, and pill shapes',
  light: {
    background: '210 40% 97%',
    foreground: '0 0% 7%',
    card: '0 0% 100%',
    cardForeground: '0 0% 7%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 7%',
    primary: '328 100% 39.1%',
    primaryForeground: '0 0% 100%',
    secondary: '240 5% 96%',
    secondaryForeground: '0 0% 13%',
    muted: '240 5% 96%',
    mutedForeground: '0 0% 42.7%',
    accent: '27 89% 54%',
    accentForeground: '0 0% 21.2%',
    destructive: '0 84% 45.9%',
    destructiveForeground: '0 0% 100%',
    success: '142 71% 28.5%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.5%',
    warningForeground: '210 40% 97%',
    info: '226 100% 57.8%',
    infoForeground: '0 0% 100%',
    border: '0 0% 90%',
    input: '0 0% 90%',
    ring: '328 100% 54%',
    well: '210 40% 94%',
    wellForeground: '0 0% 7%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 7%',
    foreground: '0 0% 95%',
    card: '0 0% 10%',
    cardForeground: '0 0% 95%',
    popover: '0 0% 10%',
    popoverForeground: '0 0% 95%',
    primary: '328 100% 59.1%',
    primaryForeground: '0 0% 7%',
    secondary: '0 0% 14%',
    secondaryForeground: '0 0% 95%',
    muted: '0 0% 14%',
    mutedForeground: '0 0% 55%',
    accent: '27 89% 36.6%',
    accentForeground: '0 0% 100%',
    destructive: '0 62.8% 63.2%',
    destructiveForeground: '0 0% 7%',
    success: '142 71% 45%',
    successForeground: '0 0% 7%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '226 100% 68.2%',
    infoForeground: '0 0% 7%',
    border: '0 0% 16%',
    input: '0 0% 16%',
    ring: '328 100% 54%',
    well: '0 0% 4%',
    wellForeground: '0 0% 95%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'rounded-full font-semibold bg-gradient-to-r from-[hsl(328,100%,54%)] to-[hsl(340,96%,60%)]',
    },
    card: {
      base: 'backdrop-blur-xl bg-white/5 border border-white/10 rounded-[20px]',
    },
    input: {
      base: 'rounded-2xl bg-white/5 border-white/10',
    },
    badge: {
      base: 'rounded-full uppercase tracking-[0.12em] text-[0.68rem] border border-white/10 bg-white/5',
    },
    alert: {
      base: 'rounded-2xl border-white/10 bg-white/5 backdrop-blur-sm',
    },
  },
  nativeClassOverrides: {
    button: {
      base: 'rounded-full font-semibold',
    },
    card: {
      base: 'rounded-[20px]',
    },
    input: {
      base: 'rounded-2xl',
    },
    badge: {
      base: 'rounded-full uppercase tracking-[0.12em] text-[0.68rem]',
    },
    alert: {
      base: 'rounded-2xl',
    },
  },
};
