/**
 * Terminal Theme
 *
 * Old-school terminal aesthetic with monochrome phosphor tones,
 * monospaced typography, underlined actions, and square panels.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '1px',
  shadowSm: 'none',
  shadowMd: 'none',
  shadowLg: 'none',
  fontSans: '"Courier New", "Lucida Console", Monaco, monospace',
  fontMono: '"Courier New", "Lucida Console", Monaco, monospace',
};

export const terminalTheme: ThemeDefinition = {
  name: 'terminal',
  displayName: 'Terminal',
  description: 'Monochrome, old-terminal interface with underlined actions and square panels',
  light: {
    background: '120 20% 8%',
    foreground: '120 60% 75%',
    card: '120 18% 10%',
    cardForeground: '120 60% 75%',
    popover: '120 18% 10%',
    popoverForeground: '120 60% 75%',
    primary: '120 65% 72%',
    primaryForeground: '120 20% 8%',
    secondary: '120 16% 14%',
    secondaryForeground: '120 50% 70%',
    muted: '120 14% 12%',
    mutedForeground: '120 22% 52%',
    accent: '95 55% 25.9%',
    accentForeground: '120 20% 81.2%',
    destructive: '0 65% 62%',
    destructiveForeground: '120 20% 8%',
    success: '120 65% 72%',
    successForeground: '120 20% 8%',
    warning: '55 80% 60%',
    warningForeground: '120 20% 8%',
    info: '185 60% 64%',
    infoForeground: '120 20% 8%',
    border: '120 22% 28%',
    input: '120 22% 28%',
    ring: '120 65% 72%',
    well: '120 20% 5%',
    wellForeground: '120 60% 75%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '120 24% 4%',
    foreground: '120 60% 72%',
    card: '120 18% 7%',
    cardForeground: '120 60% 72%',
    popover: '120 18% 7%',
    popoverForeground: '120 60% 72%',
    primary: '120 65% 72%',
    primaryForeground: '120 24% 4%',
    secondary: '120 14% 10%',
    secondaryForeground: '120 42% 68%',
    muted: '120 12% 9%',
    mutedForeground: '120 18% 48%',
    accent: '95 55% 25%',
    accentForeground: '120 24% 78.6%',
    destructive: '0 62% 59.3%',
    destructiveForeground: '120 24% 4%',
    success: '120 65% 72%',
    successForeground: '120 24% 4%',
    warning: '55 80% 60%',
    warningForeground: '120 24% 4%',
    info: '185 60% 64%',
    infoForeground: '120 24% 4%',
    border: '120 18% 22%',
    input: '120 18% 22%',
    ring: '120 65% 72%',
    well: '120 24% 1%',
    wellForeground: '120 60% 72%',
    ...SHARED_STRUCTURAL,
  },
  classOverrides: {
    button: {
      base: 'rounded-none border-x-0 border-t-0 border-b border-current bg-transparent px-0 py-0 font-mono font-normal uppercase tracking-[0.08em] shadow-none hover:bg-transparent hover:text-accent hover:underline focus-visible:ring-0 focus-visible:ring-offset-0',
    },
    card: {
      base: 'rounded-none border border-border bg-card shadow-none',
    },
    input: {
      base: 'rounded-none border-x-0 border-t-0 border-b border-input bg-transparent px-0 font-mono shadow-none focus:ring-0 focus:ring-offset-0',
    },
    badge: {
      base: 'rounded-none border border-current bg-transparent px-2 font-mono uppercase tracking-[0.08em]',
    },
    alert: {
      base: 'rounded-none border-l-2 border-l-primary bg-transparent font-mono shadow-none',
    },
  },
};
