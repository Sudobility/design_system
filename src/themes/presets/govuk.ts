/**
 * GOV.UK Design System Theme
 *
 * GOV.UK Design System — green buttons, GDS Transport, square corners, yellow focus
 * Color tokens are HSL channels (no hsl() wrapper); consumed as hsl(var(--token)).
 */

import type { ThemeDefinition } from '../types';

const SHARED_STRUCTURAL = {
  radius: '0',
  borderWidth: '2px',
  shadowSm: '0 0 0 rgb(0 0 0 / 0)',
  shadowMd: '0 2px 4px rgb(0 0 0 / 0.1)',
  shadowLg: '0 4px 8px rgb(0 0 0 / 0.1)',
  fontSans: "'GDS Transport', arial, sans-serif",
  fontMono: "ui-monospace, 'Courier New', monospace",
};

export const govukTheme: ThemeDefinition = {
  name: 'govuk',
  displayName: 'GOV.UK Design System',
  description: 'GOV.UK Design System — green buttons, GDS Transport, square corners, yellow focus',
  light: {
    background: '0 0% 96.5%',
    foreground: '180 4.3% 4.5%',
    card: '0 0% 100%',
    cardForeground: '180 4.3% 4.5%',
    popover: '0 0% 100%',
    popoverForeground: '180 4.3% 4.5%',
    primary: '152.1 100% 22%',
    primaryForeground: '0 0% 100%',
    secondary: '30 7.7% 94.9%',
    secondaryForeground: '180 4.3% 4.5%',
    muted: '30 7.7% 94.9%',
    mutedForeground: '200 8.6% 34.3%',
    accent: '207.9 72.8% 46.4%',
    accentForeground: '0 0% 4.8%',
    destructive: '8.2 76.7% 44.8%',
    destructiveForeground: '0 0% 100%',
    success: '152.1 100% 22%',
    successForeground: '0 0% 100%',
    warning: '20.1 89.5% 38.7%',
    warningForeground: '0 0% 96.5%',
    info: '207.9 72.8% 41.3%',
    infoForeground: '0 0% 100%',
    border: '204 3.3% 70.4%',
    input: '180 4.3% 4.5%',
    ring: '52 100% 50%',
    well: '0 0% 93.5%',
    wellForeground: '180 4.3% 4.5%',
    ...SHARED_STRUCTURAL,
  },
  dark: {
    background: '180 4.3% 4.5%',
    foreground: '0 0% 100%',
    card: '0 0% 11.4%',
    cardForeground: '0 0% 100%',
    popover: '0 0% 11.4%',
    popoverForeground: '0 0% 100%',
    primary: '141.7 100% 33.9%',
    primaryForeground: '180 4.3% 4.5%',
    secondary: '0 0% 18%',
    secondaryForeground: '0 0% 100%',
    muted: '0 0% 18%',
    mutedForeground: '204 3.3% 70.4%',
    accent: '207.8 100% 43.3%',
    accentForeground: '180 4.3% 2.2%',
    destructive: '8.5 100% 63.8%',
    destructiveForeground: '180 4.3% 4.5%',
    success: '141.7 100% 33.9%',
    successForeground: '180 4.3% 4.5%',
    warning: '20.1 89.5% 58.8%',
    warningForeground: '180 4.3% 4.5%',
    info: '207.8 100% 57.3%',
    infoForeground: '180 4.3% 4.5%',
    border: '200 5.1% 45.9%',
    input: '0 0% 100%',
    ring: '52 100% 50%',
    well: '180 4.3% 1.5%',
    wellForeground: '0 0% 100%',
    ...SHARED_STRUCTURAL,
  },
};
