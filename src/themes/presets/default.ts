/**
 * Default Theme
 *
 * The standard design — clean, modern, blue primary.
 * Matches the current look of all Sudobility apps.
 * Based on shadcn/ui default color scheme.
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.5rem',
  borderWidth: '1px',
  shadowSm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  shadowMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  shadowLg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  fontSans: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontMono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
};

export const defaultTheme: ThemeDefinition = {
  name: 'default',
  displayName: 'Sudobility',
  description: 'Clean, modern design with blue primary colors',
  light: {
    // The light neutrals sit close to white on purpose. `muted` is what
    // AppPageLayout paints for its `default` background (via
    // `ui.background.subtle` -> `bg-muted`), so it is the colour of a whole
    // page: at the old 92.5% every app read as grey rather than white. The
    // ramp still steps card (100%) > background (98%) > muted (96.5%) >
    // well (93.1%), which keeps raised, base, subtle and recessed surfaces
    // distinguishable — see theme-surfaces.test.ts.
    background: '210 40% 98%',
    foreground: '222.2 84% 4.9%',
    card: '0 0% 100%',
    cardForeground: '222.2 84% 4.9%',
    popover: '0 0% 100%',
    popoverForeground: '222.2 84% 4.9%',
    primary: '221.2 83.2% 50.7%',
    primaryForeground: '210 40% 98%',
    secondary: '210 40% 92.5%',
    secondaryForeground: '222.2 47.4% 11.2%',
    muted: '210 40% 96.5%',
    mutedForeground: '215.4 16.3% 43.4%',
    accent: '210 40% 92.5%',
    accentForeground: '222.2 47.4% 11.2%',
    destructive: '0 84.2% 45.3%',
    destructiveForeground: '210 40% 98%',
    success: '142 76% 27.4%',
    successForeground: '0 0% 100%',
    warning: '38 92% 30.1%',
    warningForeground: '210 40% 96.1%',
    info: '221.2 83.2% 50.7%',
    infoForeground: '210 40% 98%',
    border: '214.3 31.8% 91.4%',
    input: '214.3 31.8% 91.4%',
    ring: '221.2 83.2% 53.3%',
    well: '210 40% 93.1%',
    wellForeground: '222.2 84% 4.9%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '222.2 84% 4.9%',
    foreground: '210 40% 98%',
    card: '222.2 84% 9.9%',
    cardForeground: '210 40% 98%',
    popover: '222.2 84% 4.9%',
    popoverForeground: '210 40% 98%',
    primary: '217.2 91.2% 63.7%',
    primaryForeground: '222.2 47.4% 11.2%',
    secondary: '217.2 32.6% 17.5%',
    secondaryForeground: '210 40% 98%',
    muted: '217.2 32.6% 17.5%',
    mutedForeground: '215 20.2% 65.1%',
    accent: '217.2 32.6% 17.5%',
    accentForeground: '210 40% 98%',
    destructive: '0 62.8% 65.1%',
    destructiveForeground: '222.2 84% 4.9%',
    success: '142 76% 36.9%',
    successForeground: '222.2 84% 4.9%',
    warning: '38 92% 50%',
    warningForeground: '0 0% 0%',
    info: '217.2 91.2% 63.7%',
    infoForeground: '222.2 47.4% 11.2%',
    border: '217.2 32.6% 17.5%',
    input: '217.2 32.6% 17.5%',
    ring: '224.3 76.3% 48%',
    well: '222.2 84% 1.9%',
    wellForeground: '210 40% 98%',
    ...SHARED_STRUCTURAL,
  },
};
