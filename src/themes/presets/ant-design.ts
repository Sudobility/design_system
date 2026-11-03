/**
 * Ant Design Theme
 *
 * Ant Design v5 — daybreak blue #1677FF, 6px corners, system font
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0.375rem',
  borderWidth: '1px',
  shadowSm:
    '0 1px 2px -2px rgb(0 0 0 / 0.16), 0 3px 6px 0 rgb(0 0 0 / 0.12), 0 5px 12px 4px rgb(0 0 0 / 0.09)',
  shadowMd:
    '0 3px 6px -4px rgb(0 0 0 / 0.12), 0 6px 16px 0 rgb(0 0 0 / 0.08), 0 9px 28px 8px rgb(0 0 0 / 0.05)',
  shadowLg:
    '0 6px 16px -8px rgb(0 0 0 / 0.08), 0 9px 28px 0 rgb(0 0 0 / 0.05), 0 12px 48px 16px rgb(0 0 0 / 0.03)',
  fontSans:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
  fontMono: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace",
};

export const antDesignTheme: ThemeDefinition = {
  name: 'ant-design',
  displayName: 'Ant Design',
  description: 'Ant Design v5 — daybreak blue #1677FF, 6px corners, system font',
  light: {
    background: '0 0% 96.1%',
    foreground: '0 0% 12.2%',
    card: '0 0% 100%',
    cardForeground: '0 0% 12.2%',
    popover: '0 0% 100%',
    popoverForeground: '0 0% 12.2%',
    primary: '215 100% 44.3%',
    primaryForeground: '0 0% 100%',
    secondary: '0 0% 94.1%',
    secondaryForeground: '0 0% 12.2%',
    muted: '0 0% 98%',
    mutedForeground: '0 0% 42.3%',
    accent: '206.4 100% 95.1%',
    accentForeground: '215 100% 47.6%',
    destructive: '359.3 100% 42.5%',
    destructiveForeground: '0 0% 100%',
    success: '100.2 76.6% 27.1%',
    successForeground: '0 0% 100%',
    warning: '39.9 95.8% 29.1%',
    warningForeground: '0 0% 96.1%',
    info: '215 100% 44.3%',
    infoForeground: '0 0% 100%',
    border: '0 0% 85.1%',
    input: '0 0% 85.1%',
    ring: '215 100% 54.3%',
    well: '0 0% 93.1%',
    wellForeground: '0 0% 12.2%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '0 0% 7.8%',
    foreground: '0 0% 87.8%',
    card: '0 0% 12.2%',
    cardForeground: '0 0% 87.8%',
    popover: '0 0% 12.2%',
    popoverForeground: '0 0% 87.8%',
    primary: '215.2 81.8% 62.1%',
    primaryForeground: '0 0% 7.8%',
    secondary: '0 0% 16.5%',
    secondaryForeground: '0 0% 87.8%',
    muted: '0 0% 11.4%',
    mutedForeground: '0 0% 62%',
    accent: '220 44.3% 12%',
    accentForeground: '213.1 78.9% 57.3%',
    destructive: '359.2 68.5% 61.4%',
    destructiveForeground: '0 0% 7.8%',
    success: '100.1 74.4% 38.2%',
    successForeground: '0 0% 7.8%',
    warning: '39.8 83.1% 46.3%',
    warningForeground: '0 0% 7.8%',
    info: '215.2 81.8% 62.1%',
    infoForeground: '0 0% 7.8%',
    border: '0 0% 25.9%',
    input: '0 0% 25.9%',
    ring: '215.2 81.8% 47.5%',
    well: '0 0% 4.8%',
    wellForeground: '0 0% 87.8%',
    ...SHARED_STRUCTURAL,
  },
};
