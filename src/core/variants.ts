/**
 * Component Variants
 *
 * Pre-built component configurations that combine colors, spacing, and other design tokens
 * into ready-to-use component styles.
 */

import { getActiveTheme, getClassOverride } from '../themes/configure';
import type { ThemeClassOverrides } from '../themes/types';

/**
 * Returns semantic classes when a theme is configured, legacy hardcoded classes otherwise.
 * Appends any class overrides from the active theme.
 */
function themed(
  component: keyof ThemeClassOverrides | null,
  semantic: string,
  legacy: string
): string {
  if (!getActiveTheme()) return legacy;
  if (!component) return semantic;
  const override = getClassOverride(component, 'base');
  return override ? `${semantic} ${override}` : semantic;
}

/**
 * {@link themed} for a variant written only in legacy palette classes: the
 * semantic form is derived with {@link toSemantic}.
 */
function themedFrom(component: keyof ThemeClassOverrides | null, legacy: string): string {
  return getActiveTheme() ? themed(component, toSemantic(legacy), legacy) : legacy;
}

/**
 * Palette-class → semantic-token map used by {@link toSemantic}. Converts the
 * legacy hardcoded Tailwind palette classes of the advanced component variants
 * (modal, navigation, table, notifications, …) into theme-aware tokens that
 * resolve to the active design system's CSS variables.
 */
const SEMANTIC_TOKEN_MAP: Record<string, string> = {
  // Surfaces
  'bg-white': 'bg-card',
  'bg-gray-50': 'bg-muted',
  'bg-gray-100': 'bg-muted',
  'bg-gray-200': 'bg-muted',
  'bg-gray-800': 'bg-card',
  'bg-gray-900': 'bg-background',
  'bg-blue-50': 'bg-primary/10',
  'bg-blue-100': 'bg-primary/15',
  'bg-blue-500': 'bg-primary',
  'bg-blue-600': 'bg-primary',
  'bg-blue-700': 'bg-primary',
  'bg-red-50': 'bg-destructive/10',
  'bg-red-100': 'bg-destructive/15',
  'bg-red-500': 'bg-destructive',
  'bg-red-600': 'bg-destructive',
  'bg-green-50': 'bg-success/10',
  'bg-green-100': 'bg-success/15',
  'bg-green-500': 'bg-success',
  'bg-green-600': 'bg-success',
  'bg-amber-50': 'bg-warning/10',
  'bg-amber-100': 'bg-warning/15',
  'bg-amber-500': 'bg-warning',
  'bg-amber-600': 'bg-warning',
  'bg-orange-50': 'bg-warning/10',
  'bg-yellow-50': 'bg-warning/10',
  // Text
  'text-gray-900': 'text-foreground',
  'text-gray-800': 'text-foreground',
  'text-gray-700': 'text-foreground',
  'text-gray-600': 'text-muted-foreground',
  'text-gray-500': 'text-muted-foreground',
  'text-gray-400': 'text-muted-foreground',
  'text-gray-300': 'text-muted-foreground',
  'text-gray-200': 'text-foreground',
  'text-gray-100': 'text-foreground',
  'text-gray-50': 'text-foreground',
  'text-blue-700': 'text-primary',
  'text-blue-600': 'text-primary',
  'text-blue-500': 'text-primary',
  'text-blue-400': 'text-primary',
  'text-red-600': 'text-destructive',
  'text-red-500': 'text-destructive',
  'text-red-400': 'text-destructive',
  'text-green-600': 'text-success',
  'text-green-500': 'text-success',
  'text-green-400': 'text-success',
  'text-amber-600': 'text-warning',
  'text-amber-500': 'text-warning',
  'text-orange-600': 'text-warning',
  'text-yellow-600': 'text-warning',
  // Borders
  'border-gray-100': 'border-border',
  'border-gray-200': 'border-border',
  'border-gray-300': 'border-input',
  'border-gray-600': 'border-border',
  'border-gray-700': 'border-border',
  'border-blue-500': 'border-ring',
  'border-blue-400': 'border-ring',
  'border-red-300': 'border-destructive',
  'border-red-500': 'border-destructive',
  'border-green-500': 'border-success',
  'border-green-200': 'border-success/40',
  'border-amber-200': 'border-warning/40',
  'border-red-200': 'border-destructive/40',
  // Directional spinner borders
  'border-t-blue-600': 'border-t-primary',
  'border-t-blue-400': 'border-t-primary',
  'border-t-green-600': 'border-t-success',
  'border-t-amber-600': 'border-t-warning',
  'border-t-red-600': 'border-t-destructive',
  // Dividers & rings
  'divide-gray-200': 'divide-border',
  'divide-gray-700': 'divide-border',
  'ring-blue-500': 'ring-ring',
  'ring-blue-400': 'ring-ring',
};

/**
 * Tailwind hue family → the semantic token that plays its role. Brand-like
 * hues become `primary`; the status hues become their status token.
 */
const HUE_TOKEN: Record<string, string> = {
  blue: 'primary',
  indigo: 'primary',
  violet: 'primary',
  purple: 'primary',
  fuchsia: 'primary',
  sky: 'info',
  cyan: 'info',
  teal: 'success',
  emerald: 'success',
  green: 'success',
  lime: 'success',
  yellow: 'warning',
  amber: 'warning',
  orange: 'warning',
  red: 'destructive',
  rose: 'destructive',
  pink: 'destructive',
};
const NEUTRAL_HUES = new Set(['slate', 'gray', 'zinc', 'neutral', 'stone']);

const PALETTE_UTILITY =
  /^(bg|text|border(?:-[trblxyse])?|divide|ring|ring-offset|outline|from|via|to|fill|stroke|placeholder|shadow|decoration|accent|caret)-([a-z]+)-(\d{2,3})$/;

/** Semantic token for a neutral (gray-family) utility at a given shade. */
function neutralToken(prop: string, shade: number): string {
  if (prop === 'bg') {
    if (shade <= 200) return 'bg-muted';
    if (shade <= 300) return 'bg-border';
    if (shade <= 600) return 'bg-muted-foreground';
    if (shade <= 800) return 'bg-card';
    return 'bg-background';
  }
  if (prop === 'text' || prop === 'decoration' || prop === 'caret') {
    return `${prop}-${shade >= 300 && shade <= 600 ? 'muted-foreground' : 'foreground'}`;
  }
  if (prop === 'placeholder') return 'placeholder-muted-foreground';
  if (prop.startsWith('border') || prop === 'divide' || prop === 'outline') {
    return `${prop}-${shade === 300 || shade === 400 ? 'input' : 'border'}`;
  }
  if (prop === 'ring') return 'ring-ring';
  if (prop === 'ring-offset') return 'ring-offset-background';
  if (prop === 'shadow') return 'shadow-foreground';
  // from / via / to / fill / stroke / accent
  if (shade <= 300) return `${prop}-muted`;
  if (shade <= 600) return `${prop}-muted-foreground`;
  return `${prop}-foreground`;
}

/** Semantic token for a coloured utility: the hue's token, tinted by shade. */
function hueToken(prop: string, token: string, shade: number, hasOpacity: boolean): string {
  if (prop === 'ring' && token === 'primary') return 'ring-ring';
  const surface = prop === 'bg' || prop === 'from' || prop === 'via' || prop === 'to';
  const edge = prop.startsWith('border') || prop === 'divide' || prop === 'outline';
  if (hasOpacity || (!surface && !edge)) return `${prop}-${token}`;
  // A gradient that ran between two hues keeps some depth on one token.
  if ((prop === 'via' || prop === 'to') && shade > 300)
    return `${prop}-${token}/${prop === 'via' ? 90 : 80}`;
  // Light tints (50–300) were washes behind content; keep them washes.
  if (shade <= 50) return `${prop}-${token}/10`;
  if (shade <= 100) return `${prop}-${token}/15`;
  if (shade <= 200) return `${prop}-${token}/${edge ? 40 : 20}`;
  if (shade <= 300) return `${prop}-${token}/${edge ? 60 : 30}`;
  return `${prop}-${token}`;
}

/**
 * Semantic replacement for any palette utility the explicit map does not
 * list, or undefined when the utility is not a palette colour.
 */
function paletteToSemantic(bare: string, hasOpacity: boolean): string | undefined {
  // White and black: a white surface is the theme's card, any other white the
  // page background; black is the foreground. `text-white` (decided by its
  // surface, below) and `bg-black` (a scrim) are left alone.
  const mono = /^(.+)-(white|black)$/.exec(bare);
  if (mono) {
    const [, prop, shade] = mono;
    if (!PALETTE_UTILITY.test(`${prop}-gray-500`)) return undefined;
    if (shade === 'white') {
      if (prop === 'text') return undefined;
      return prop === 'bg' ? 'bg-card' : `${prop}-background`;
    }
    return prop === 'bg' ? undefined : `${prop}-foreground`;
  }
  const m = PALETTE_UTILITY.exec(bare);
  if (!m) return undefined;
  const [, prop, hue, shadeStr] = m;
  const shade = Number(shadeStr);
  if (NEUTRAL_HUES.has(hue)) return neutralToken(prop, shade);
  // A gradient's pink stop is decoration (blue → purple → pink), not an error.
  const decorative = (prop === 'from' || prop === 'via' || prop === 'to') && hue !== 'red';
  const token = decorative && HUE_TOKEN[hue] === 'destructive' ? 'primary' : HUE_TOKEN[hue];
  return token ? hueToken(prop, token, shade, hasOpacity) : undefined;
}

/**
 * Convert a legacy palette class string into theme-aware tokens. Splits on
 * whitespace, drops `dark:` variants (tokens are already light/dark aware), and
 * maps each palette utility — preserving variant prefixes (`hover:`, `focus:`,
 * `before:`, …) and opacity suffixes (`/50`) — to its semantic token: the
 * explicit map first, then a rule by hue family and shade for everything
 * else. Non-colour utilities (layout, spacing, `bg-black` scrims,
 * `text-white`) pass through.
 */
export function toSemantic(classes: string): string {
  const tokens = classes.split(/\s+/).filter((t) => t.length > 0 && !t.startsWith('dark:'));

  // White text on a dark neutral surface (tooltips, inverted panels) is an
  // inverted surface, not a dark card: mapping the surface to `bg-background`
  // would leave white text on a light page. Invert the theme's pair instead.
  const invertedBg = /^bg-(?:(?:slate|gray|zinc|neutral|stone)-(?:700|800|900|950)|black)$/;
  if (tokens.includes('text-white') && tokens.some((t) => invertedBg.test(t))) {
    return toSemantic(
      tokens
        .map((t) =>
          invertedBg.test(t) ? 'bg-foreground' : t === 'text-white' ? 'text-background' : t
        )
        .join(' ')
    );
  }

  let out = tokens
    .map((token) => {
      const colonIdx = token.lastIndexOf(':');
      const prefix = colonIdx >= 0 ? token.slice(0, colonIdx + 1) : '';
      const util = colonIdx >= 0 ? token.slice(colonIdx + 1) : token;
      const slashIdx = util.indexOf('/');
      const bare = slashIdx >= 0 ? util.slice(0, slashIdx) : util;
      const opacity = slashIdx >= 0 ? util.slice(slashIdx) : '';
      const mapped = SEMANTIC_TOKEN_MAP[bare] ?? paletteToSemantic(bare, opacity !== '');
      if (!mapped) return token;
      if (!opacity) {
        // Legacy hover/active states stepped a shade darker; one token has no
        // darker shade, so step its opacity down instead (as `button` does).
        const solidFill = /^(?:bg|from)-(?:primary|secondary|destructive|success|warning|info)$/;
        if (solidFill.test(mapped) && /(?:^|:)(hover|active):$/.test(prefix)) {
          return prefix + mapped + (prefix.endsWith('active:') ? '/80' : '/90');
        }
        return prefix + mapped;
      }
      // An explicit opacity wins over the tint the mapping chose.
      const base = mapped.includes('/') ? mapped.slice(0, mapped.indexOf('/')) : mapped;
      return prefix + base + opacity;
    })
    .join(' ');

  // On a solid brand surface, map `text-white` to that surface's foreground
  // token so text stays legible under themes with light primaries (e.g. Game
  // Boy). Only applies to solid (non-opacity) brand backgrounds, including a
  // gradient's starting stop.
  const solid = out.match(/\b(?:bg|from)-(primary|destructive|success|warning|info)\b(?!\/)/);
  if (solid && /\btext-white\b/.test(out)) {
    out = out.replace(/\btext-white\b/g, `text-${solid[1]}-foreground`);
  }
  return out;
}

/**
 * Theme-aware wrapper for the advanced component variants: emits semantic
 * tokens (via {@link toSemantic}) when a theme is active, and the original
 * legacy palette classes otherwise (backward compatible with un-themed
 * consumers). Mirrors {@link themed} but requires no per-component override key.
 */
export function themedAuto(legacy: string): string {
  return getActiveTheme() ? toSemantic(legacy) : legacy;
}

// TypeScript type definitions for variants
export type VariantFunction = () => string;
export type VariantWithArgs<T = string> = (variant?: T) => string;

export interface ButtonVariants {
  primary: {
    default: VariantFunction;
    small: VariantFunction;
    large: VariantFunction;
    withIcon: VariantFunction;
    fullWidth: VariantFunction;
  };
  secondary: {
    default: VariantFunction;
    small: VariantFunction;
    large: VariantFunction;
    withIcon: VariantFunction;
  };
  outline: {
    default: VariantFunction;
    [key: string]: VariantFunction;
  };
  destructive: {
    default: VariantFunction;
    outline: VariantFunction;
    [key: string]: VariantFunction;
  };
  ghost: {
    default: VariantFunction;
    icon: VariantFunction;
    [key: string]: VariantFunction;
  };
  link: {
    default: VariantFunction;
    muted: VariantFunction;
    [key: string]: VariantFunction;
  };
  gradient: {
    primary: VariantFunction;
    success: VariantFunction;
    [key: string]: VariantFunction;
  };
  web3: {
    wallet: VariantFunction;
    connect: VariantFunction;
    disconnect: VariantFunction;
    [key: string]: VariantFunction;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface VariantsType {
  button: ButtonVariants;
  card: {
    [key: string]: {
      [key: string]: VariantFunction;
    };
  };
  badge: {
    [key: string]: VariantFunction | VariantWithArgs;
  };
  input: {
    [key: string]: VariantFunction | VariantWithArgs;
  };
  alert: {
    [key: string]:
      | VariantFunction
      | {
          [key: string]: VariantFunction;
        };
  };
  loading: {
    [key: string]: {
      [key: string]: VariantFunction | VariantWithArgs;
    };
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // Allow additional properties for extensibility
}

const variants: VariantsType = {
  // Button variants with complete styling
  button: {
    primary: {
      default: () =>
        themed(
          'button',
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:text-white dark:focus-visible:ring-blue-400 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      small: () =>
        themed(
          'button',
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 border border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8',
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:text-white dark:focus-visible:ring-blue-400 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8'
        ),
      large: () =>
        themed(
          'button',
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 h-12',
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:text-white dark:focus-visible:ring-blue-400 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 h-12'
        ),
      withIcon: () =>
        themed(
          'button',
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:text-white dark:focus-visible:ring-blue-400 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      fullWidth: () =>
        themed(
          'button',
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 dark:text-white dark:focus-visible:ring-blue-400 flex items-center justify-center w-full rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
    },

    secondary: {
      default: () =>
        themed(
          'button',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-600 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      small: () =>
        themed(
          'button',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8',
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-600 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8'
        ),
      large: () =>
        themed(
          'button',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 h-12',
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-600 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 h-12'
        ),
      withIcon: () =>
        themed(
          'button',
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700 dark:active:bg-gray-600 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
    },

    outline: {
      default: () =>
        themed(
          'button',
          'bg-transparent hover:bg-accent text-foreground border border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-900 border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-50 dark:border-gray-600 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      small: () =>
        themed(
          'button',
          'bg-transparent hover:bg-accent text-foreground border border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8',
          'bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-900 border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-50 dark:border-gray-600 inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8'
        ),
      large: () =>
        themed(
          'button',
          'bg-transparent hover:bg-accent text-foreground border border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 h-12',
          'bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-900 border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-50 dark:border-gray-600 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium transition-colors duration-200 h-12'
        ),
      withIcon: () =>
        themed(
          'button',
          'bg-transparent hover:bg-accent text-foreground border border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-transparent hover:bg-gray-50 active:bg-gray-100 text-gray-900 border border-gray-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-50 dark:border-gray-600 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
    },

    destructive: {
      default: () =>
        themed(
          'button',
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border-transparent focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800 dark:text-white inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      outline: () =>
        themed(
          'button',
          'bg-transparent hover:bg-destructive/10 text-destructive border border-destructive/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-transparent hover:bg-red-50 active:bg-red-100 text-red-600 border border-red-300 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-red-900/20 dark:text-red-400 dark:border-red-800 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      small: () =>
        themed(
          'button',
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8',
          'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 border-transparent focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-red-600 dark:hover:bg-red-700 dark:active:bg-red-800 dark:text-white inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium transition-colors duration-200 h-8'
        ),
    },

    ghost: {
      default: () =>
        themed(
          'button',
          'bg-transparent hover:bg-muted text-muted-foreground border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      small: () =>
        themed(
          'button',
          'bg-transparent hover:bg-muted text-muted-foreground border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200 h-8',
          'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300 inline-flex items-center justify-center rounded-md px-2 py-1 text-xs font-medium transition-colors duration-200 h-8'
        ),
      icon: () =>
        themed(
          'button',
          'bg-transparent hover:bg-muted text-muted-foreground border-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200 h-10 w-10',
          'bg-transparent hover:bg-gray-100 active:bg-gray-200 text-gray-700 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-transparent dark:hover:bg-gray-800 dark:active:bg-gray-700 dark:text-gray-300 inline-flex items-center justify-center rounded-md p-2 transition-colors duration-200 h-10 w-10'
        ),
    },

    link: {
      default: () =>
        themed(
          'button',
          'bg-transparent text-primary underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline inline-flex items-center justify-center rounded-md px-0 py-0 text-sm font-medium transition-colors duration-200',
          'bg-transparent hover:bg-transparent active:bg-transparent text-blue-600 border-transparent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline dark:text-blue-400 inline-flex items-center justify-center rounded-md px-0 py-0 text-sm font-medium transition-colors duration-200'
        ),
      muted: () =>
        themed(
          'button',
          'bg-transparent text-muted-foreground hover:text-foreground underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline inline-flex items-center justify-center rounded-md px-0 py-0 text-sm font-medium transition-colors duration-200',
          'bg-transparent hover:bg-transparent active:bg-transparent text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border-transparent underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:no-underline inline-flex items-center justify-center rounded-md px-0 py-0 text-sm font-medium transition-colors duration-200'
        ),
    },

    gradient: {
      primary: () =>
        themedFrom(
          'button',
          'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200'
        ),
      secondary: () =>
        themedFrom(
          'button',
          'bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-900 border-transparent focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200'
        ),
      success: () =>
        themedFrom(
          'button',
          'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-transparent shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200'
        ),
    },

    // Web3 specific button variants
    web3: {
      wallet: () =>
        themed(
          'button',
          'bg-card border border-input text-foreground hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
      connect: () =>
        themedFrom(
          'button',
          'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-transparent shadow-lg hover:shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all duration-200'
        ),
      disconnect: () =>
        themed(
          'button',
          'bg-transparent hover:bg-destructive/10 text-destructive border border-destructive/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10',
          'bg-transparent hover:bg-red-50 active:bg-red-100 text-red-600 border border-red-300 focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed dark:hover:bg-red-900/20 dark:text-red-400 dark:border-red-800 inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 h-10'
        ),
    },
  },

  // Card variants
  card: {
    default: {
      base: () =>
        themed(
          'card',
          'bg-card text-card-foreground border border-border rounded-lg',
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg'
        ),
      padded: () =>
        themed(
          'card',
          'bg-card text-card-foreground border border-border rounded-lg p-6',
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6'
        ),
      interactive: () =>
        themed(
          'card',
          'bg-card text-card-foreground border border-border rounded-lg p-6 transition-all duration-200 hover:shadow-md cursor-pointer',
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-200 hover:shadow-md cursor-pointer'
        ),
    },

    elevated: {
      base: () =>
        themed(
          'card',
          'bg-card text-card-foreground border border-border rounded-lg shadow-sm',
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm'
        ),
      padded: () =>
        themed(
          'card',
          'bg-card text-card-foreground border border-border rounded-lg shadow-sm p-6',
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6'
        ),
      interactive: () =>
        themed(
          'card',
          'bg-card text-card-foreground border border-border rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-lg cursor-pointer',
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-lg cursor-pointer'
        ),
    },

    state: {
      success: () =>
        themed(
          'card',
          'bg-success/10 border-success/20 text-success rounded-lg border p-4',
          'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg border p-4'
        ),
      warning: () =>
        themed(
          'card',
          'bg-warning/10 border-warning/20 text-warning rounded-lg border p-4',
          'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded-lg border p-4'
        ),
      error: () =>
        themed(
          'card',
          'bg-destructive/10 border-destructive/20 text-destructive rounded-lg border p-4',
          'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg border p-4'
        ),
      info: () =>
        themed(
          'card',
          'bg-info/10 border-info/20 text-info rounded-lg border p-4',
          'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 text-blue-800 dark:text-blue-200 rounded-lg border p-4'
        ),
    },
  },

  // Badge variants
  badge: {
    default: () =>
      themed(
        'badge',
        'bg-muted text-muted-foreground inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      ),
    primary: () =>
      themed(
        'badge',
        'bg-primary/10 text-primary inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      ),
    success: () =>
      themed(
        'badge',
        'bg-success/10 text-success inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      ),
    warning: () =>
      themed(
        'badge',
        'bg-warning/10 text-warning inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      ),
    error: () =>
      themed(
        'badge',
        'bg-destructive/10 text-destructive inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'
      ),

    // Web3 specific — chain brand colours, intentionally NOT theme-aware (brand identity)
    ethereum: () =>
      'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
    solana: () =>
      'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',

    // Sizes
    small: (variant: string = 'default') => {
      const semanticColors: Record<string, string> = {
        default: 'bg-muted text-muted-foreground',
        primary: 'bg-primary/10 text-primary',
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        error: 'bg-destructive/10 text-destructive',
      };
      const legacyColors: Record<string, string> = {
        default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
        primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
        error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      };
      if (!getActiveTheme()) {
        return `${legacyColors[variant] || legacyColors.default} inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium`;
      }
      const override = getClassOverride('badge', 'base');
      const base = `${semanticColors[variant] || semanticColors.default} inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium`;
      return override ? `${base} ${override}` : base;
    },
    large: (variant: string = 'default') => {
      const semanticColors: Record<string, string> = {
        default: 'bg-muted text-muted-foreground',
        primary: 'bg-primary/10 text-primary',
        success: 'bg-success/10 text-success',
        warning: 'bg-warning/10 text-warning',
        error: 'bg-destructive/10 text-destructive',
      };
      const legacyColors: Record<string, string> = {
        default: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
        primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300',
        error: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      };
      if (!getActiveTheme()) {
        return `${legacyColors[variant] || legacyColors.default} inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`;
      }
      const override = getClassOverride('badge', 'base');
      const base = `${semanticColors[variant] || semanticColors.default} inline-flex items-center px-3 py-1 rounded-full text-sm font-medium`;
      return override ? `${base} ${override}` : base;
    },
  },

  // Input variants
  //
  // Every one states `border`, the width, and not only a border *colour*.
  // A colour with no width draws nothing: the legacy strings named
  // `border-gray-300` and relied on something else to supply the line, and
  // the semantic ones named no border at all and leaned on `bg-muted` to
  // part the field from the page. Where the two fills are close — Swiss has
  // them at 96% and 96.5% — and nothing else supplies a line, which is every
  // React Native app, a field had no edge and no fill to tell it from the
  // text around it: nothing on the screen said "type here". A theme that
  // wants a different edge still says so in its `input` override, which is
  // appended after these and wins.
  input: {
    default: () =>
      themed(
        'input',
        'border border-input bg-muted text-foreground block w-full rounded-lg px-3 py-2 text-sm h-10 placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 block w-full rounded-md px-3 py-2 text-sm h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      ),
    search: () =>
      themed(
        'input',
        'border border-input bg-muted text-foreground block w-full rounded-lg px-3 py-2 text-sm h-10 placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 block w-full rounded-md px-3 py-2 text-sm h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      ),
    error: () =>
      themed(
        'input',
        'border border-destructive bg-muted text-foreground block w-full rounded-lg px-3 py-2 text-sm h-10 placeholder:text-muted-foreground transition-colors duration-200 focus:border-destructive focus:bg-background focus:outline-none focus:ring-2 focus:ring-destructive focus:ring-offset-2',
        'border bg-gray-50 dark:bg-gray-800 border-red-300 dark:border-red-700 text-gray-900 dark:text-gray-100 focus:border-red-500 focus:ring-red-500 block w-full rounded-md px-3 py-2 text-sm h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      ),

    // Sizes
    small: () =>
      themed(
        'input',
        'border border-input bg-muted text-foreground block w-full rounded-lg px-2 py-1.5 text-xs placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 block w-full rounded-md px-2 py-1.5 text-xs placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      ),
    large: () =>
      themed(
        'input',
        'border border-input bg-muted text-foreground block w-full rounded-lg px-4 py-3 text-base placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 block w-full rounded-md px-4 py-3 text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      ),

    // Special variants
    withIcon: () =>
      themed(
        'input',
        'border border-input bg-muted text-foreground block w-full rounded-lg pl-10 pr-3 py-2 text-sm h-10 placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        'border bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 block w-full rounded-md pl-10 pr-3 py-2 text-sm h-10 placeholder:text-gray-500 dark:placeholder:text-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
      ),
  },

  // Alert variants
  alert: {
    info: () =>
      themed(
        'alert',
        'bg-info/10 border-info/20 text-info rounded-md border p-4 flex items-start gap-3',
        'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 text-blue-800 dark:text-blue-200 rounded-md border p-4 flex items-start gap-3'
      ),
    success: () =>
      themed(
        'alert',
        'bg-success/10 border-success/20 text-success rounded-md border p-4 flex items-start gap-3',
        'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-green-800 dark:text-green-200 rounded-md border p-4 flex items-start gap-3'
      ),
    warning: () =>
      themed(
        'alert',
        'bg-warning/10 border-warning/20 text-warning rounded-md border p-4 flex items-start gap-3',
        'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded-md border p-4 flex items-start gap-3'
      ),
    attention: () =>
      themed(
        'alert',
        'bg-warning/10 border-warning/20 text-warning rounded-md border p-4 flex items-start gap-3',
        'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded-md border p-4 flex items-start gap-3'
      ),
    error: () =>
      themed(
        'alert',
        'bg-destructive/10 border-destructive/20 text-destructive rounded-md border p-4 flex items-start gap-3',
        'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 text-red-800 dark:text-red-200 rounded-md border p-4 flex items-start gap-3'
      ),

    // Compact variants
    compact: {
      info: () =>
        themed(
          'alert',
          'bg-info/10 border-info/20 text-info rounded border px-3 py-2 text-sm',
          'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800 text-blue-800 dark:text-blue-200 rounded border px-3 py-2 text-sm'
        ),
      success: () =>
        themed(
          'alert',
          'bg-success/10 border-success/20 text-success rounded border px-3 py-2 text-sm',
          'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800 text-green-800 dark:text-green-200 rounded border px-3 py-2 text-sm'
        ),
      warning: () =>
        themed(
          'alert',
          'bg-warning/10 border-warning/20 text-warning rounded border px-3 py-2 text-sm',
          'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded border px-3 py-2 text-sm'
        ),
      attention: () =>
        themed(
          'alert',
          'bg-warning/10 border-warning/20 text-warning rounded border px-3 py-2 text-sm',
          'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800 text-amber-800 dark:text-amber-200 rounded border px-3 py-2 text-sm'
        ),
      error: () =>
        themed(
          'alert',
          'bg-destructive/10 border-destructive/20 text-destructive rounded border px-3 py-2 text-sm',
          'bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800 text-red-800 dark:text-red-200 rounded border px-3 py-2 text-sm'
        ),
    },
  },

  // Loading/Spinner variants
  loading: {
    // Spinner variants
    spinner: {
      default: () =>
        themedAuto(
          'animate-spin rounded-full border-2 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400 w-5 h-5'
        ),
      small: () =>
        themedAuto(
          'animate-spin rounded-full border-2 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400 w-4 h-4'
        ),
      large: () =>
        themedAuto(
          'animate-spin rounded-full border-2 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400 w-8 h-8'
        ),
      extraLarge: () =>
        themedAuto(
          'animate-spin rounded-full border-4 border-gray-200 border-t-blue-600 dark:border-gray-700 dark:border-t-blue-400 w-16 h-16'
        ),

      // Color variants
      white: () =>
        themedAuto('animate-spin rounded-full border-2 border-white/30 border-t-white w-5 h-5'),
      success: () =>
        themedAuto(
          'animate-spin rounded-full border-2 border-green-200 border-t-green-600 dark:border-green-700 dark:border-t-green-400 w-5 h-5'
        ),
      warning: () =>
        themedAuto(
          'animate-spin rounded-full border-2 border-amber-200 border-t-amber-600 dark:border-amber-700 dark:border-t-amber-400 w-5 h-5'
        ),
      error: () =>
        themedAuto(
          'animate-spin rounded-full border-2 border-red-200 border-t-red-600 dark:border-red-700 dark:border-t-red-400 w-5 h-5'
        ),
    },

    // Loading state containers
    state: {
      default: () => 'flex flex-col items-center justify-center py-8 px-4',
      fullScreen: () =>
        themedAuto(
          'flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900'
        ),
      inline: () => 'inline-flex items-center gap-2',
      center: () => 'flex items-center justify-center',
    },

    // Loading buttons
    button: {
      default: () => 'inline-flex items-center gap-2 opacity-70 cursor-wait pointer-events-none',
      primary: () =>
        themedAuto(
          'bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2 opacity-70 cursor-wait pointer-events-none px-4 py-2 rounded-md text-sm font-medium'
        ),
      secondary: () =>
        themedAuto(
          'bg-gray-100 text-gray-900 hover:bg-gray-200 inline-flex items-center gap-2 opacity-70 cursor-wait pointer-events-none px-4 py-2 rounded-md text-sm font-medium dark:bg-gray-800 dark:text-gray-50'
        ),
    },

    // Skeleton loading
    skeleton: {
      base: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded'),
      default: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded'),
      text: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-4'),
      title: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded h-6'),
      avatar: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full w-10 h-10'),
      card: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-32'),
    },

    // Progress indicators
    progress: {
      bar: () => themedAuto('w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700'),
      fill: () => themedAuto('bg-blue-600 h-2 rounded-full transition-all duration-300'),
      indeterminate: () =>
        themedAuto(
          'w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700 overflow-hidden relative before:absolute before:inset-0 before:bg-blue-600 before:rounded-full before:animate-pulse'
        ),
    },

    // Dots indicator
    dots: {
      default: () => 'flex space-x-1 justify-center items-center',
      dot: () => themedAuto('w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse'),
      dotStaggered: (delay: number = 0) =>
        themedAuto(
          `w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse animation-delay-${delay}`
        ),
    },
  },

  // Modal/Dialog variants
  modal: {
    // Overlay variants
    // A scrim: black under every theme, since it only dims what is behind it.
    overlay: {
      default: () =>
        'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4',
      dark: () =>
        'fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4',
      light: () =>
        'fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4',
    },

    // Container variants
    container: {
      default: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden'
        ),
      small: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-sm'
        ),
      medium: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-md'
        ),
      large: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-2xl'
        ),
      extraLarge: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-4xl'
        ),
      fullScreen: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 w-full h-full overflow-hidden'
        ),
    },

    // Header variants
    header: {
      default: () =>
        themedAuto(
          'px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between'
        ),
      centered: () =>
        themedAuto('px-6 py-4 border-b border-gray-200 dark:border-gray-700 text-center'),
      minimal: () => 'px-6 py-4 flex items-center justify-between',
    },

    // Content variants
    content: {
      default: () => 'px-6 py-4 overflow-y-auto flex-1',
      padded: () => 'px-6 py-6 overflow-y-auto flex-1',
      compact: () => 'px-4 py-3 overflow-y-auto flex-1',
      scrollable: () => 'px-6 py-4 overflow-y-auto flex-1 max-h-96',
    },

    // Footer variants
    footer: {
      default: () =>
        themedAuto(
          'px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-end gap-3'
        ),
      centered: () =>
        themedAuto(
          'px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-center gap-3'
        ),
      spaceBetween: () =>
        themedAuto(
          'px-6 py-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between'
        ),
      minimal: () => 'px-6 py-4 flex items-center justify-end gap-3',
    },

    // Close button variants
    close: {
      default: () =>
        themedAuto(
          'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700'
        ),
      subtle: () =>
        themedAuto(
          'text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200'
        ),
      prominent: () =>
        themedAuto(
          'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600'
        ),
    },

    // Web3 specific modal variants
    web3: {
      wallet: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-md'
        ),
      transaction: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-lg'
        ),
      confirmation: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[90vh] overflow-hidden w-full max-w-sm'
        ),
    },

    // Animation variants
    animation: {
      fadeIn: () => 'animate-in fade-in-0 duration-200',
      slideIn: () => 'animate-in fade-in-0 zoom-in-95 duration-200',
      slideUp: () => 'animate-in fade-in-0 slide-in-from-bottom-4 duration-200',
      fadeOut: () => 'animate-out fade-out-0 duration-150',
      slideOut: () => 'animate-out fade-out-0 zoom-out-95 duration-150',
    },
  },

  // Navigation variants
  navigation: {
    // Breadcrumb variants
    breadcrumb: {
      container: () => 'flex items-center justify-between text-sm',
      list: () => 'flex items-center space-x-1',
      item: () => 'flex items-center',
      separator: () => themedAuto('h-4 w-4 text-gray-400 dark:text-gray-500 mx-2 flex-shrink-0'),
      link: () =>
        themedAuto(
          'flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:rounded-sm'
        ),
      current: () => themedAuto('flex items-center text-gray-900 dark:text-white font-medium'),
      home: () => 'h-4 w-4 mr-1 flex-shrink-0',
    },

    // Tab variants
    tabs: {
      root: () => '',
      list: () =>
        themedAuto(
          'inline-flex h-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 p-1 text-gray-500 dark:text-gray-400'
        ),
      listUnderlined: () => themedAuto('flex border-b border-gray-200 dark:border-gray-700'),
      listPills: () => themedAuto('flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1'),

      trigger: () =>
        themedAuto(
          'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-gray-950 data-[state=active]:shadow-sm dark:ring-offset-gray-950 dark:focus-visible:ring-blue-400 dark:data-[state=active]:bg-gray-950 dark:data-[state=active]:text-gray-50'
        ),
      triggerUnderlined: () =>
        themedAuto(
          'inline-flex items-center justify-center whitespace-nowrap px-4 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 border-b-2 border-transparent hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-blue-600 focus:border-blue-600 dark:focus:text-blue-400 dark:focus:border-blue-400 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 dark:data-[state=active]:text-blue-400 dark:data-[state=active]:border-blue-400 transition-colors'
        ),
      triggerPills: () =>
        themedAuto(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-white dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 data-[state=active]:bg-white data-[state=active]:text-gray-900 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-700 dark:data-[state=active]:text-gray-100 transition-all'
        ),

      content: () =>
        themedAuto(
          'mt-2 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:ring-offset-gray-950 dark:focus-visible:ring-blue-400'
        ),
    },

    // Menu/Dropdown variants
    menu: {
      trigger: () =>
        themedAuto(
          'inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors'
        ),
      content: () =>
        themedAuto(
          'z-50 min-w-[12rem] overflow-hidden rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-1 text-gray-900 dark:text-gray-100 shadow-lg'
        ),
      item: () =>
        themedAuto(
          'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm font-medium outline-none focus:bg-gray-100 focus:text-gray-900 dark:focus:bg-gray-700 dark:focus:text-gray-100 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors'
        ),
      separator: () => themedAuto('-mx-1 my-1 h-px bg-gray-200 dark:bg-gray-700'),
      label: () => themedAuto('px-2 py-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100'),
      shortcut: () =>
        themedAuto('ml-auto text-xs tracking-widest text-gray-500 dark:text-gray-400'),
    },

    // Pagination variants
    pagination: {
      container: () =>
        themedAuto(
          'flex items-center justify-between border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-3 sm:px-6'
        ),
      info: () => 'flex flex-1 justify-between sm:hidden',
      nav: () => 'hidden sm:flex sm:flex-1 sm:items-center sm:justify-between',
      results: () => themedAuto('text-sm text-gray-700 dark:text-gray-300'),
      buttons: () => 'relative z-0 inline-flex rounded-md shadow-sm -space-x-px',

      button: () =>
        themedAuto(
          'relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-colors'
        ),
      buttonActive: () =>
        themedAuto(
          'relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700 z-10'
        ),
      buttonFirst: () => 'rounded-l-md',
      buttonLast: () => 'rounded-r-md',

      // Mobile variants
      mobileButton: () =>
        themedAuto(
          'relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-md transition-colors'
        ),
    },

    // Sidebar/Menu navigation
    sidebar: {
      container: () =>
        themedAuto(
          'flex flex-col h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700'
        ),
      nav: () => 'flex-1 px-4 py-6 space-y-1',
      item: () =>
        themedAuto(
          'group flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
        ),
      itemActive: () =>
        themedAuto(
          'group flex items-center px-3 py-2 text-sm font-medium rounded-md bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-r-2 border-blue-500'
        ),
      icon: () =>
        themedAuto(
          'mr-3 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-400'
        ),
      iconActive: () => themedAuto('mr-3 h-5 w-5 flex-shrink-0 text-blue-500 dark:text-blue-400'),
    },

    // Step navigation
    steps: {
      container: () => 'flex items-center justify-center',
      list: () => 'flex items-center space-x-4',
      step: () => 'flex items-center space-x-2',

      circle: () =>
        themedAuto(
          'flex items-center justify-center w-8 h-8 rounded-full border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-sm font-medium'
        ),
      circleActive: () =>
        themedAuto(
          'flex items-center justify-center w-8 h-8 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-blue-600 dark:bg-blue-400 text-white text-sm font-medium'
        ),
      circleCompleted: () =>
        themedAuto(
          'flex items-center justify-center w-8 h-8 rounded-full border-2 border-green-600 dark:border-green-400 bg-green-600 dark:bg-green-400 text-white text-sm font-medium'
        ),

      label: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      labelInactive: () => themedAuto('text-sm font-medium text-gray-500 dark:text-gray-400'),

      connector: () => themedAuto('w-12 h-px bg-gray-300 dark:bg-gray-600'),
      connectorActive: () => themedAuto('w-12 h-px bg-blue-600 dark:bg-blue-400'),
    },
  },

  // Data Display variants
  dataDisplay: {
    // Table variants
    table: {
      container: () =>
        themedAuto('w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700'),
      wrapper: () => 'overflow-x-auto',
      table: () => themedAuto('min-w-full divide-y divide-gray-200 dark:divide-gray-700'),

      thead: () => themedAuto('bg-gray-50 dark:bg-gray-800'),
      tbody: () =>
        themedAuto('bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700'),
      tfoot: () => themedAuto('bg-gray-50 dark:bg-gray-800'),

      tr: () => themedAuto('hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'),
      trSelected: () =>
        themedAuto('bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30'),

      th: () =>
        themedAuto(
          'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'
        ),
      thSortable: () =>
        themedAuto(
          'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:text-gray-700 dark:hover:text-gray-200 transition-colors'
        ),

      td: () => themedAuto('px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'),
      tdCompact: () =>
        themedAuto('px-3 py-2 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'),
    },

    // List variants
    list: {
      container: () => themedAuto('bg-white dark:bg-gray-900 shadow overflow-hidden rounded-lg'),
      ul: () => themedAuto('divide-y divide-gray-200 dark:divide-gray-700'),
      li: () =>
        themedAuto('px-4 py-4 sm:px-6 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors'),
      liActive: () =>
        themedAuto('px-4 py-4 sm:px-6 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500'),

      // Email list specific
      emailItem: () =>
        themedAuto(
          'flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors'
        ),
      emailItemRead: () =>
        themedAuto(
          'flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors opacity-60'
        ),
      emailItemSelected: () =>
        themedAuto(
          'flex items-center px-4 py-3 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 cursor-pointer'
        ),
    },

    // Grid variants
    grid: {
      container: () => 'grid gap-4',
      twoColumn: () => 'grid grid-cols-1 md:grid-cols-2 gap-4',
      threeColumn: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
      fourColumn: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4',
      autoFit: () => 'grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4',
    },

    // Key-Value pairs
    keyValue: {
      container: () => themedAuto('bg-white dark:bg-gray-900 shadow overflow-hidden rounded-lg'),
      list: () => themedAuto('divide-y divide-gray-200 dark:divide-gray-700'),
      row: () => 'px-4 py-4 sm:px-6 sm:grid sm:grid-cols-3 sm:gap-4',
      key: () => themedAuto('text-sm font-medium text-gray-500 dark:text-gray-400'),
      value: () =>
        themedAuto('mt-1 text-sm text-gray-900 dark:text-gray-100 sm:mt-0 sm:col-span-2'),

      // Inline variant
      inline: () => 'flex items-center space-x-2',
      inlineKey: () => themedAuto('text-sm font-medium text-gray-500 dark:text-gray-400'),
      inlineValue: () => themedAuto('text-sm text-gray-900 dark:text-gray-100'),
    },

    // Code display
    code: {
      inline: () =>
        themedAuto(
          'font-mono text-sm text-pink-600 dark:text-pink-400 bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded'
        ),
      block: () =>
        themedAuto(
          'font-mono text-sm text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto'
        ),

      // Web3 specific
      address: () =>
        themedAuto(
          'font-mono text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded select-all'
        ),
      hash: () =>
        themedAuto(
          'font-mono text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20 px-2 py-1 rounded select-all'
        ),

      // Syntax highlighting
      keyword: () => themedAuto('text-purple-600 dark:text-purple-400'),
      string: () => themedAuto('text-green-600 dark:text-green-400'),
      number: () => themedAuto('text-blue-600 dark:text-blue-400'),
      comment: () => themedAuto('text-gray-500 dark:text-gray-500 italic'),
    },

    // Stats/Metrics
    stats: {
      container: () => themedAuto('bg-white dark:bg-gray-900 overflow-hidden shadow rounded-lg'),
      grid: () =>
        themedAuto(
          'grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700'
        ),
      item: () => 'px-4 py-5 sm:p-6',
      label: () => themedAuto('text-sm font-medium text-gray-500 dark:text-gray-400 truncate'),
      value: () => themedAuto('mt-1 text-3xl font-semibold text-gray-900 dark:text-gray-100'),
      change: () => 'mt-2 flex items-center text-sm',
      changePositive: () => themedAuto('text-green-600 dark:text-green-400'),
      changeNegative: () => themedAuto('text-red-600 dark:text-red-400'),
    },

    // Empty states
    empty: {
      container: () => 'text-center py-12',
      icon: () => themedAuto('mx-auto h-12 w-12 text-gray-400'),
      title: () => themedAuto('mt-2 text-sm font-medium text-gray-900 dark:text-gray-100'),
      description: () => themedAuto('mt-1 text-sm text-gray-500 dark:text-gray-400'),
      action: () => 'mt-6',
    },

    // Timeline
    timeline: {
      container: () => 'flow-root',
      list: () => '-mb-8',
      item: () => 'relative pb-8',
      itemLast: () => 'relative',
      connector: () =>
        themedAuto('absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700'),

      dot: () =>
        themedAuto(
          'relative flex h-8 w-8 items-center justify-center rounded-full bg-white dark:bg-gray-800 ring-8 ring-white dark:ring-gray-900'
        ),
      dotActive: () => themedAuto('bg-blue-600 dark:bg-blue-400'),
      dotComplete: () => themedAuto('bg-green-600 dark:bg-green-400'),

      content: () => 'ml-12 flex flex-col',
      time: () => themedAuto('text-xs text-gray-500 dark:text-gray-400'),
      title: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      description: () => themedAuto('mt-1 text-sm text-gray-500 dark:text-gray-400'),
    },
  },

  // Forms Advanced variants
  formsAdvanced: {
    // Multi-step wizard
    wizard: {
      container: () => 'w-full',
      steps: () => 'flex items-center justify-between mb-8',
      step: () => 'flex flex-col items-center',

      stepCircle: () =>
        'w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-all',
      stepCompleted: () =>
        themedAuto(
          'bg-green-100 border-green-500 text-green-700 dark:bg-green-900/30 dark:border-green-400 dark:text-green-300'
        ),
      stepCurrent: () =>
        themedAuto(
          'bg-blue-100 border-blue-500 text-blue-700 dark:bg-blue-900/30 dark:border-blue-400 dark:text-blue-300'
        ),
      stepInactive: () =>
        themedAuto(
          'bg-gray-100 border-gray-300 text-gray-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400'
        ),

      stepContent: () => 'mt-2 text-center',
      stepTitle: () => 'text-sm font-medium',
      stepDescription: () => themedAuto('text-xs text-gray-500 dark:text-gray-400 mt-1'),

      connector: () => themedAuto('flex-1 h-px bg-gray-200 dark:bg-gray-700 mt-5'),
      connectorCompleted: () => themedAuto('flex-1 h-px bg-green-300 dark:bg-green-600 mt-5'),
    },

    // File upload components
    fileUpload: {
      dropzone: () =>
        themedAuto(
          'border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center transition-colors hover:border-gray-400 dark:hover:border-gray-500 cursor-pointer'
        ),
      dropzoneActive: () =>
        themedAuto('border-blue-400 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-500'),
      dropzoneError: () =>
        themedAuto('border-red-400 bg-red-50 dark:bg-red-900/20 dark:border-red-500'),

      icon: () => themedAuto('h-12 w-12 text-gray-400 mx-auto mb-4'),
      text: () => themedAuto('text-lg font-medium text-gray-900 dark:text-gray-100 mb-2'),
      subtext: () => themedAuto('text-sm text-gray-500 dark:text-gray-400 mb-4'),
      button: () =>
        themedAuto(
          'inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors'
        ),
      input: () => 'sr-only',

      fileList: () => 'mt-6 space-y-2',
      fileItem: () =>
        themedAuto('flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'),
      fileIcon: () =>
        themedAuto(
          'w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded flex items-center justify-center mr-3'
        ),
      fileName: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      fileSize: () => themedAuto('text-xs text-gray-500 dark:text-gray-400'),
      removeButton: () => themedAuto('p-1 text-gray-400 hover:text-red-500 transition-colors'),
    },

    // Web3 specific inputs
    web3: {
      container: () => 'space-y-2',
      label: () =>
        themedAuto('text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center'),
      labelIcon: () => 'h-4 w-4 inline mr-1',

      inputGroup: () => 'flex rounded-md shadow-sm',
      tokenInput: () => 'rounded-r-none font-mono',
      tokenSymbol: () =>
        themedAuto(
          'inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm font-medium'
        ),

      balance: () => themedAuto('text-sm text-gray-500 dark:text-gray-400'),
      balanceActions: () => 'flex space-x-2',
      maxButton: () => 'text-xs',

      addressInput: () => 'font-mono text-sm',
      addressValid: () => themedAuto('border-green-300 dark:border-green-600 pr-10'),
      addressInvalid: () => themedAuto('border-red-300 dark:border-red-600 pr-10'),

      gasSettings: () => 'grid grid-cols-3 gap-2',
      gasOption: () => 'p-2 text-center border rounded-md transition-colors cursor-pointer',
      gasOptionActive: () =>
        themedAuto('border-blue-300 bg-blue-50 dark:border-blue-600 dark:bg-blue-900/20'),
      gasOptionInactive: () =>
        themedAuto(
          'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        ),
    },

    // Advanced validation
    validation: {
      container: () => 'space-y-1',
      label: () => themedAuto('text-sm font-medium text-gray-700 dark:text-gray-300'),

      input: () =>
        themedAuto(
          'block w-full rounded-md border-gray-300 dark:border-gray-600 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-100'
        ),
      inputSuccess: () =>
        themedAuto(
          'border-green-300 dark:border-green-600 focus:border-green-500 focus:ring-green-500 pr-10'
        ),
      inputError: () =>
        themedAuto(
          'border-red-300 dark:border-red-600 focus:border-red-500 focus:ring-red-500 pr-10'
        ),
      inputWarning: () =>
        themedAuto(
          'border-yellow-300 dark:border-yellow-600 focus:border-yellow-500 focus:ring-yellow-500 pr-10'
        ),

      successIcon: () =>
        themedAuto('absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500'),
      errorIcon: () =>
        themedAuto('absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500'),
      warningIcon: () =>
        themedAuto('absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-yellow-500'),
      loadingIcon: () =>
        themedAuto(
          'absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 animate-spin text-blue-600'
        ),

      successMessage: () => themedAuto('text-xs text-green-600 dark:text-green-400'),
      errorMessage: () => themedAuto('text-xs text-red-600 dark:text-red-400'),
      warningMessage: () => themedAuto('text-xs text-yellow-600 dark:text-yellow-400'),
      helpMessage: () => themedAuto('text-xs text-gray-500 dark:text-gray-400'),

      requirements: () => 'space-y-1 mt-2',
      requirement: () => 'flex items-center text-xs',
      requirementMet: () => themedAuto('text-green-600 dark:text-green-400'),
      requirementUnmet: () => themedAuto('text-gray-500 dark:text-gray-400'),
      requirementIcon: () => 'h-3 w-3 mr-1',
    },

    // Form sections and layouts
    layout: {
      section: () => 'space-y-6',
      sectionTitle: () => themedAuto('text-lg font-medium text-gray-900 dark:text-gray-100'),
      sectionDescription: () => themedAuto('text-sm text-gray-500 dark:text-gray-400'),

      fieldGroup: () => 'space-y-4',
      fieldRow: () => 'grid grid-cols-1 md:grid-cols-2 gap-4',
      fieldColumn: () => 'space-y-4',

      actions: () =>
        themedAuto('flex justify-between pt-6 border-t border-gray-200 dark:border-gray-700'),
      actionsRight: () =>
        themedAuto('flex justify-end space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700'),
      actionsCenter: () =>
        themedAuto(
          'flex justify-center space-x-4 pt-6 border-t border-gray-200 dark:border-gray-700'
        ),
    },

    // Security and sensitive inputs
    security: {
      container: () => 'relative',
      input: () => 'font-mono',
      toggleButton: () =>
        themedAuto(
          'absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200'
        ),
      strengthMeter: () =>
        themedAuto('mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden'),
      strengthBar: () => 'h-full transition-all duration-300',
      strengthWeak: () => themedAuto('bg-red-500 w-1/4'),
      strengthMedium: () => themedAuto('bg-yellow-500 w-1/2'),
      strengthStrong: () => themedAuto('bg-green-500 w-3/4'),
      strengthVeryStrong: () => themedAuto('bg-green-600 w-full'),
    },

    // Conditional fields and dynamic forms
    conditional: {
      container: () => 'space-y-4',
      trigger: () => 'flex items-center space-x-2',
      content: () =>
        themedAuto('ml-6 mt-4 pl-4 border-l-2 border-gray-200 dark:border-gray-700 space-y-4'),
      contentVisible: () => 'opacity-100 max-h-none',
      contentHidden: () => 'opacity-0 max-h-0 overflow-hidden',
    },
  },

  // Notifications & Feedback variants
  notifications: {
    // Toast notifications
    toast: {
      container: () =>
        'fixed top-4 right-4 z-50 max-w-sm w-full transform transition-all duration-300 ease-out',
      content: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4'
        ),

      // Toast with icon and content
      wrapper: () => 'flex items-start space-x-3',
      icon: () => 'flex-shrink-0 mt-0.5',
      successIcon: () => themedAuto('h-5 w-5 text-green-500'),
      errorIcon: () => themedAuto('h-5 w-5 text-red-500'),
      warningIcon: () => themedAuto('h-5 w-5 text-yellow-500'),
      infoIcon: () => themedAuto('h-5 w-5 text-blue-500'),

      text: () => 'flex-1 min-w-0',
      title: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      message: () => themedAuto('mt-1 text-sm text-gray-500 dark:text-gray-400'),
      action: () =>
        themedAuto(
          'mt-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 cursor-pointer'
        ),

      closeButton: () =>
        themedAuto(
          'ml-4 flex-shrink-0 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 cursor-pointer'
        ),

      // Toast variants by type
      success: () =>
        themedAuto('border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20'),
      error: () => themedAuto('border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'),
      warning: () =>
        themedAuto('border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20'),
      info: () => themedAuto('border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20'),
    },

    // Progress indicators
    progress: {
      container: () => 'w-full',
      content: () => 'flex items-center justify-between mb-2',
      text: () => 'flex-1 min-w-0 mr-4',
      title: () => themedAuto('text-sm font-medium text-gray-700 dark:text-gray-300'),
      message: () => themedAuto('text-xs text-gray-500 dark:text-gray-400 mt-1'),

      // Progress bar
      bar: () => themedAuto('w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden'),
      fill: () => themedAuto('h-full bg-blue-600 rounded-full transition-all duration-300'),
      fillSuccess: () => themedAuto('h-full bg-green-600 rounded-full transition-all duration-300'),
      fillError: () => themedAuto('h-full bg-red-600 rounded-full transition-all duration-300'),
      fillWarning: () =>
        themedAuto('h-full bg-yellow-600 rounded-full transition-all duration-300'),

      percentage: () => themedAuto('text-sm text-gray-500 dark:text-gray-400 ml-2 flex-shrink-0'),

      // Circular progress
      circle: () => 'relative w-8 h-8',
      circleTrack: () =>
        themedAuto('absolute inset-0 rounded-full border-2 border-gray-200 dark:border-gray-700'),
      circleFill: () =>
        'absolute inset-0 rounded-full border-2 border-transparent transition-all duration-300',

      // Loading spinners
      spinner: () => 'animate-spin rounded-full border-2 border-transparent',
      spinnerPrimary: () => themedAuto('border-t-blue-600 border-r-blue-600'),
      spinnerSuccess: () => themedAuto('border-t-green-600 border-r-green-600'),
      spinnerError: () => themedAuto('border-t-red-600 border-r-red-600'),
      spinnerWarning: () => themedAuto('border-t-yellow-600 border-r-yellow-600'),
    },

    // Transaction status
    transaction: {
      container: () =>
        themedAuto(
          'border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800'
        ),
      wrapper: () => 'flex items-start space-x-3',

      icon: () => 'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0',
      iconPending: () =>
        themedAuto('bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'),
      iconConfirming: () =>
        themedAuto('bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'),
      iconConfirmed: () =>
        themedAuto('bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'),
      iconFailed: () => themedAuto('bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400'),

      content: () => 'flex-1 min-w-0',
      header: () => 'flex items-center justify-between mb-1',
      type: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),

      status: () => 'px-2 py-1 text-xs rounded-full font-medium',
      statusPending: () =>
        themedAuto('bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'),
      statusConfirming: () =>
        themedAuto('bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'),
      statusConfirmed: () =>
        themedAuto('bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'),
      statusFailed: () =>
        themedAuto('bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'),

      details: () => themedAuto('text-xs text-gray-500 dark:text-gray-400 mt-1'),
      hash: () => themedAuto('font-mono text-xs text-gray-500 dark:text-gray-400'),
      amount: () => themedAuto('text-sm text-gray-600 dark:text-gray-400 ml-2'),

      confirmations: () => themedAuto('mt-2 text-xs text-gray-500 dark:text-gray-400'),
      confirmationBar: () =>
        themedAuto('w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1'),
      confirmationProgress: () =>
        themedAuto('h-1.5 bg-blue-600 rounded-full transition-all duration-300'),
    },

    // System status indicators
    status: {
      indicator: () => 'flex items-center space-x-2',
      dot: () => 'w-3 h-3 rounded-full flex-shrink-0',
      text: () => 'text-sm font-medium',

      // Status variants
      online: () => themedAuto('text-green-700 dark:text-green-300'),
      onlineDot: () => themedAuto('bg-green-500'),
      degraded: () => themedAuto('text-yellow-700 dark:text-yellow-300'),
      degradedDot: () => themedAuto('bg-yellow-500'),
      offline: () => themedAuto('text-red-700 dark:text-red-300'),
      offlineDot: () => themedAuto('bg-red-500'),

      // Animated indicators
      pulse: () => 'animate-pulse',

      // Connection status
      connection: () =>
        themedAuto('flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg'),
      connectionLabel: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      connectionDescription: () => themedAuto('text-xs text-gray-500 dark:text-gray-400'),
      connectionStatus: () => 'px-2 py-1 text-xs rounded-full font-medium',
    },

    // Notification badges
    badge: {
      container: () => 'relative inline-block',
      // Under a theme the text colour comes with the fill below (each fill's
      // own foreground), since white is not legible on every theme's fills.
      badge: () =>
        themed(
          null,
          'absolute -top-1 -right-1 text-xs rounded-full flex items-center justify-center font-medium',
          'absolute -top-1 -right-1 text-white text-xs rounded-full flex items-center justify-center font-medium'
        ),

      // Size variants
      small: () => 'h-3 w-3 text-xs',
      medium: () => 'h-4 w-4 text-xs',
      large: () => 'h-5 w-5 text-xs',

      // Color variants
      primary: () => themed(null, 'bg-primary text-primary-foreground', 'bg-blue-500'),
      success: () => themed(null, 'bg-success text-success-foreground', 'bg-green-500'),
      error: () => themed(null, 'bg-destructive text-destructive-foreground', 'bg-red-500'),
      warning: () => themed(null, 'bg-warning text-warning-foreground', 'bg-yellow-500'),

      // Special states
      dot: () => 'w-2 h-2 rounded-full animate-pulse',
      count: () => 'min-w-[1rem] px-1',
      countOverflow: () => 'min-w-[1.25rem] px-1', // for 99+
    },

    // Contextual feedback
    feedback: {
      container: () => 'p-3 rounded-lg border',
      content: () => 'flex items-start',
      icon: () => 'flex-shrink-0 mr-2 mt-0.5',
      text: () => 'flex-1 min-w-0',
      title: () => 'text-sm font-medium',
      message: () => 'text-sm mt-1',
      action: () => 'ml-auto flex-shrink-0',

      // Feedback variants
      success: () =>
        themedAuto('bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'),
      successIcon: () => themedAuto('h-4 w-4 text-green-600 dark:text-green-400'),
      successTitle: () => themedAuto('text-green-800 dark:text-green-200'),
      successMessage: () => themedAuto('text-green-700 dark:text-green-300'),

      error: () => themedAuto('bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'),
      errorIcon: () => themedAuto('h-4 w-4 text-red-600 dark:text-red-400'),
      errorTitle: () => themedAuto('text-red-800 dark:text-red-200'),
      errorMessage: () => themedAuto('text-red-700 dark:text-red-300'),

      warning: () =>
        themedAuto('bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800'),
      warningIcon: () => themedAuto('h-4 w-4 text-yellow-600 dark:text-yellow-400'),
      warningTitle: () => themedAuto('text-yellow-800 dark:text-yellow-200'),
      warningMessage: () => themedAuto('text-yellow-700 dark:text-yellow-300'),

      info: () => themedAuto('bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800'),
      infoIcon: () => themedAuto('h-4 w-4 text-blue-600 dark:text-blue-400'),
      infoTitle: () => themedAuto('text-blue-800 dark:text-blue-200'),
      infoMessage: () => themedAuto('text-blue-700 dark:text-blue-300'),

      neutral: () => themedAuto('bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'),
      neutralIcon: () => themedAuto('h-4 w-4 text-gray-600 dark:text-gray-400'),
      neutralTitle: () => themedAuto('text-gray-900 dark:text-gray-100'),
      neutralMessage: () => themedAuto('text-gray-600 dark:text-gray-400'),
    },

    // Alert banners (different from alerts component)
    banner: {
      container: () => 'border-l-4 p-4',
      content: () => 'flex items-center justify-between',
      text: () => 'flex items-center',
      icon: () => 'flex-shrink-0 mr-3',
      message: () => 'text-sm font-medium',
      action: () => 'flex-shrink-0 ml-4',
      closeButton: () => themedAuto('text-gray-400 hover:text-gray-500 dark:hover:text-gray-300'),

      // Banner variants
      success: () => themedAuto('bg-green-50 dark:bg-green-900/20 border-green-400'),
      error: () => themedAuto('bg-red-50 dark:bg-red-900/20 border-red-400'),
      warning: () => themedAuto('bg-yellow-50 dark:bg-yellow-900/20 border-yellow-400'),
      info: () => themedAuto('bg-blue-50 dark:bg-blue-900/20 border-blue-400'),
    },

    // Loading states
    loading: {
      // A scrim: black under every theme, since it only dims what is behind it.
      overlay: () => 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
      container: () => themedAuto('bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4'),
      content: () => 'text-center',
      spinner: () => 'mx-auto mb-4',
      title: () => themedAuto('text-lg font-medium text-gray-900 dark:text-gray-100 mb-2'),
      message: () => themedAuto('text-sm text-gray-500 dark:text-gray-400'),

      // Inline loading
      inline: () => 'flex items-center space-x-2',
      inlineSpinner: () => 'flex-shrink-0',
      inlineText: () => themedAuto('text-sm text-gray-600 dark:text-gray-400'),
    },
  },

  // Layout & Spacing variants
  layout: {
    // Container variants
    container: {
      narrow: () => 'max-w-2xl mx-auto px-4 sm:px-6',
      default: () => 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      wide: () => 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      full: () => 'w-full px-4 sm:px-6 lg:px-8',
      fluid: () => 'w-full',
    },

    // Grid layouts
    grid: {
      // Responsive columns
      responsive: {
        oneToTwo: () => 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6',
        oneToThree: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6',
        oneToFour: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6',
        twoToFour: () => 'grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6',
        threeToSix: () => 'grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6',
      },

      // Fixed columns with responsive gaps
      fixed: {
        one: () => 'grid grid-cols-1 gap-4 md:gap-6',
        two: () => 'grid grid-cols-2 gap-4 md:gap-6',
        three: () => 'grid grid-cols-3 gap-4 md:gap-6',
        four: () => 'grid grid-cols-4 gap-4 md:gap-6',
        five: () => 'grid grid-cols-5 gap-4 md:gap-6',
        six: () => 'grid grid-cols-6 gap-4 md:gap-6',
      },

      // Auto-fit patterns
      autoFit: {
        small: () => 'grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4 md:gap-6',
        medium: () => 'grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 md:gap-6',
        large: () => 'grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-4 md:gap-6',
      },

      // Dashboard layouts
      dashboard: {
        sidebar: () => 'grid grid-cols-1 lg:grid-cols-4 gap-6',
        sidebarContent: () => 'lg:col-span-3',
        sidebarAside: () => 'lg:col-span-1',

        twoColumn: () => 'grid grid-cols-1 lg:grid-cols-2 gap-6',
        threeColumn: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',

        // Masonry-style layouts
        masonry: () => 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6',
        masonryItem: () => 'break-inside-avoid mb-6',
      },
    },

    // Flexbox patterns
    flex: {
      // Basic layouts
      row: () => 'flex flex-row',
      column: () => 'flex flex-col',
      rowReverse: () => 'flex flex-row-reverse',
      columnReverse: () => 'flex flex-col-reverse',

      // Common patterns
      center: () => 'flex items-center justify-center',
      centerVertical: () => 'flex items-center',
      centerHorizontal: () => 'flex justify-center',
      spaceBetween: () => 'flex items-center justify-between',
      spaceAround: () => 'flex items-center justify-around',
      spaceEvenly: () => 'flex items-center justify-evenly',

      // Responsive flex direction
      responsiveColumn: () => 'flex flex-col md:flex-row',
      responsiveRow: () => 'flex flex-row md:flex-col',

      // Common component layouts
      header: () => 'flex items-center justify-between w-full',
      toolbar: () => 'flex items-center space-x-2',
      buttonGroup: () => 'flex items-center space-x-2',
      iconText: () => 'flex items-center space-x-2',

      // List layouts
      listItem: () => 'flex items-start space-x-3',
      listItemCenter: () => 'flex items-center space-x-3',
      listItemEnd: () => 'flex items-end space-x-3',

      // Card content layouts
      cardContent: () => 'flex flex-col space-y-4',
      cardActions: () => 'flex items-center justify-end space-x-2 pt-4',
      cardHeader: () => 'flex items-start justify-between',

      // Form layouts
      formRow: () =>
        'flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0',
      formActions: () =>
        'flex flex-col sm:flex-row-reverse sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 sm:space-x-reverse',

      // Wrap variants
      wrap: () => 'flex flex-wrap',
      nowrap: () => 'flex flex-nowrap',
      wrapReverse: () => 'flex flex-wrap-reverse',

      // Gap utilities (for flex layouts)
      gapSm: () => 'gap-2',
      gapMd: () => 'gap-4',
      gapLg: () => 'gap-6',
      gapXl: () => 'gap-8',
    },

    // Spacing utilities
    spacing: {
      // Margin utilities
      margin: {
        none: () => 'm-0',
        xs: () => 'm-1',
        sm: () => 'm-2',
        md: () => 'm-4',
        lg: () => 'm-6',
        xl: () => 'm-8',
        xxl: () => 'm-12',

        // Directional margins
        top: {
          none: () => 'mt-0',
          xs: () => 'mt-1',
          sm: () => 'mt-2',
          md: () => 'mt-4',
          lg: () => 'mt-6',
          xl: () => 'mt-8',
          xxl: () => 'mt-12',
        },
        bottom: {
          none: () => 'mb-0',
          xs: () => 'mb-1',
          sm: () => 'mb-2',
          md: () => 'mb-4',
          lg: () => 'mb-6',
          xl: () => 'mb-8',
          xxl: () => 'mb-12',
        },
        left: {
          none: () => 'ml-0',
          xs: () => 'ml-1',
          sm: () => 'ml-2',
          md: () => 'ml-4',
          lg: () => 'ml-6',
          xl: () => 'ml-8',
          xxl: () => 'ml-12',
        },
        right: {
          none: () => 'mr-0',
          xs: () => 'mr-1',
          sm: () => 'mr-2',
          md: () => 'mr-4',
          lg: () => 'mr-6',
          xl: () => 'mr-8',
          xxl: () => 'mr-12',
        },
        horizontal: {
          none: () => 'mx-0',
          xs: () => 'mx-1',
          sm: () => 'mx-2',
          md: () => 'mx-4',
          lg: () => 'mx-6',
          xl: () => 'mx-8',
          xxl: () => 'mx-12',
          auto: () => 'mx-auto',
        },
        vertical: {
          none: () => 'my-0',
          xs: () => 'my-1',
          sm: () => 'my-2',
          md: () => 'my-4',
          lg: () => 'my-6',
          xl: () => 'my-8',
          xxl: () => 'my-12',
        },
      },

      // Padding utilities
      padding: {
        none: () => 'p-0',
        xs: () => 'p-1',
        sm: () => 'p-2',
        md: () => 'p-4',
        lg: () => 'p-6',
        xl: () => 'p-8',
        xxl: () => 'p-12',

        // Directional padding
        top: {
          none: () => 'pt-0',
          xs: () => 'pt-1',
          sm: () => 'pt-2',
          md: () => 'pt-4',
          lg: () => 'pt-6',
          xl: () => 'pt-8',
          xxl: () => 'pt-12',
        },
        bottom: {
          none: () => 'pb-0',
          xs: () => 'pb-1',
          sm: () => 'pb-2',
          md: () => 'pb-4',
          lg: () => 'pb-6',
          xl: () => 'pb-8',
          xxl: () => 'pb-12',
        },
        left: {
          none: () => 'pl-0',
          xs: () => 'pl-1',
          sm: () => 'pl-2',
          md: () => 'pl-4',
          lg: () => 'pl-6',
          xl: () => 'pl-8',
          xxl: () => 'pl-12',
        },
        right: {
          none: () => 'pr-0',
          xs: () => 'pr-1',
          sm: () => 'pr-2',
          md: () => 'pr-4',
          lg: () => 'pr-6',
          xl: () => 'pr-8',
          xxl: () => 'pr-12',
        },
        horizontal: {
          none: () => 'px-0',
          xs: () => 'px-1',
          sm: () => 'px-2',
          md: () => 'px-4',
          lg: () => 'px-6',
          xl: () => 'px-8',
          xxl: () => 'px-12',
        },
        vertical: {
          none: () => 'py-0',
          xs: () => 'py-1',
          sm: () => 'py-2',
          md: () => 'py-4',
          lg: () => 'py-6',
          xl: () => 'py-8',
          xxl: () => 'py-12',
        },
      },

      // Common spacing combinations
      section: () => 'py-12 md:py-16 lg:py-20',
      subsection: () => 'py-8 md:py-12',
      cardSpacing: () => 'p-6 md:p-8',
      listSpacing: () => 'space-y-4',
      buttonSpacing: () => 'space-x-2',
    },

    // Web3-specific layouts
    web3: {
      // Wallet interface layouts
      wallet: {
        connect: () => 'flex flex-col items-center space-y-4 p-6',
        connected: () =>
          themedAuto(
            'flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg'
          ),
        balance: () => 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4',
        portfolio: () => 'grid grid-cols-1 lg:grid-cols-3 gap-6',
      },

      // Transaction layouts
      transaction: {
        form: () => 'space-y-6',
        preview: () => themedAuto('bg-gray-50 dark:bg-gray-800 rounded-lg p-4 space-y-3'),
        history: () => 'space-y-2',
        historyItem: () =>
          themedAuto(
            'flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700'
          ),
        details: () => 'grid grid-cols-1 md:grid-cols-2 gap-4',
      },

      // NFT layouts
      nft: {
        gallery: () =>
          'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6',
        card: () =>
          themedAuto(
            'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden'
          ),
        cardContent: () => 'p-4 space-y-3',
        cardActions: () =>
          themedAuto(
            'flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700'
          ),

        // Collection view
        collection: () => 'grid grid-cols-1 lg:grid-cols-4 gap-6',
        collectionSidebar: () => 'lg:col-span-1 space-y-6',
        collectionGrid: () => 'lg:col-span-3',
      },

      // DeFi layouts
      defi: {
        dashboard: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
        pool: () =>
          themedAuto(
            'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6'
          ),
        poolStats: () => 'grid grid-cols-2 md:grid-cols-4 gap-4',
        liquidity: () => 'space-y-4',
        farming: () => 'grid grid-cols-1 lg:grid-cols-2 gap-6',
      },

      // DAO layouts
      dao: {
        governance: () => 'grid grid-cols-1 lg:grid-cols-3 gap-6',
        proposal: () =>
          themedAuto(
            'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6'
          ),
        proposalHeader: () => 'flex items-start justify-between mb-6',
        proposalContent: () => 'space-y-6',
        voting: () => 'grid grid-cols-1 md:grid-cols-2 gap-4',
      },
    },

    // Positioning utilities
    position: {
      relative: () => 'relative',
      absolute: () => 'absolute',
      fixed: () => 'fixed',
      sticky: () => 'sticky',

      // Common absolute positions
      topLeft: () => 'absolute top-0 left-0',
      topRight: () => 'absolute top-0 right-0',
      bottomLeft: () => 'absolute bottom-0 left-0',
      bottomRight: () => 'absolute bottom-0 right-0',
      center: () => 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',

      // Overlay positions
      overlay: () => 'fixed inset-0 z-50',
      // A scrim: black under every theme, since it only dims what is behind it.
      backdrop: () => 'fixed inset-0 bg-black bg-opacity-50 z-40',
    },

    // Overflow utilities
    overflow: {
      hidden: () => 'overflow-hidden',
      auto: () => 'overflow-auto',
      scroll: () => 'overflow-scroll',
      xHidden: () => 'overflow-x-hidden',
      yHidden: () => 'overflow-y-hidden',
      xAuto: () => 'overflow-x-auto',
      yAuto: () => 'overflow-y-auto',
      xScroll: () => 'overflow-x-scroll',
      yScroll: () => 'overflow-y-scroll',
    },

    // Z-index utilities
    zIndex: {
      base: () => 'z-0',
      dropdown: () => 'z-10',
      sticky: () => 'z-20',
      modal: () => 'z-50',
      popover: () => 'z-60',
      tooltip: () => 'z-70',
    },

    // Display utilities
    display: {
      block: () => 'block',
      inline: () => 'inline',
      inlineBlock: () => 'inline-block',
      flex: () => 'flex',
      inlineFlex: () => 'inline-flex',
      grid: () => 'grid',
      inlineGrid: () => 'inline-grid',
      hidden: () => 'hidden',

      // Responsive display
      hiddenMobile: () => 'hidden sm:block',
      hiddenTablet: () => 'hidden md:block',
      hiddenDesktop: () => 'block md:hidden',
      mobileOnly: () => 'block sm:hidden',
      tabletOnly: () => 'hidden sm:block md:hidden',
      desktopOnly: () => 'hidden md:block',
    },

    // Common layout patterns
    patterns: {
      // Page layouts
      fullHeight: () => 'min-h-screen flex flex-col',
      centeredPage: () => 'min-h-screen flex items-center justify-center',

      // Header patterns
      header: () =>
        themedAuto(
          'sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700'
        ),
      headerContent: () =>
        'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between',

      // Sidebar patterns
      sidebarLayout: () => themedAuto('flex h-screen bg-gray-100 dark:bg-gray-900'),
      sidebar: () =>
        themedAuto('w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700'),
      mainContent: () => 'flex-1 flex flex-col overflow-hidden',

      // Modal patterns
      // A scrim: black under every theme, since it only dims what is behind it.
      modalOverlay: () =>
        'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50',
      modalContent: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden'
        ),

      // Card patterns
      cardGrid: () => 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      cardStack: () => 'space-y-6',

      // List patterns
      dividedList: () => themedAuto('divide-y divide-gray-200 dark:divide-gray-700'),
      spacedList: () => 'space-y-4',

      // Form patterns
      formStack: () => 'space-y-6',
      formGrid: () => 'grid grid-cols-1 md:grid-cols-2 gap-6',
      fieldset: () => 'space-y-4',

      // Loading patterns
      loadingOverlay: () =>
        themedAuto(
          'absolute inset-0 bg-white bg-opacity-75 dark:bg-gray-900 dark:bg-opacity-75 flex items-center justify-center'
        ),
      loadingInline: () => 'flex items-center space-x-2',

      // Empty state patterns
      emptyState: () => 'text-center py-12',
      emptyStateIcon: () => themedAuto('mx-auto h-12 w-12 text-gray-400 mb-4'),
    },
  },

  // Table variants
  table: {
    container: () =>
      themedAuto(
        'overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
      ),

    table: () => themedAuto('min-w-full divide-y divide-gray-200 dark:divide-gray-700'),

    header: {
      row: () => themedAuto('bg-gray-50 dark:bg-gray-900/50'),
      cell: () =>
        themedAuto(
          'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'
        ),
      sortable: () =>
        themedAuto(
          'px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 select-none group'
        ),
    },

    body: {
      row: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200'
        ),
      rowSelected: () =>
        themedAuto(
          'bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200'
        ),
      rowClickable: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 cursor-pointer'
        ),
      cell: () =>
        themedAuto('px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'),
      cellMuted: () =>
        themedAuto('px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400'),
      cellAction: () => 'px-6 py-4 whitespace-nowrap text-right text-sm font-medium',
    },

    // Compact table variants
    compact: {
      header: {
        cell: () =>
          themedAuto(
            'px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider'
          ),
        sortable: () =>
          themedAuto(
            'px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 select-none group'
          ),
      },
      body: {
        cell: () =>
          themedAuto('px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100'),
        cellMuted: () =>
          themedAuto('px-4 py-3 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400'),
        cellAction: () => 'px-4 py-3 whitespace-nowrap text-right text-sm font-medium',
      },
    },

    // Table states
    states: {
      loading: () => 'opacity-50 pointer-events-none',
      empty: () => themedAuto('text-center py-12 text-gray-500 dark:text-gray-400'),
      error: () => themedAuto('text-center py-12 text-red-500 dark:text-red-400'),
    },

    // Pagination styles
    pagination: {
      container: () =>
        themedAuto(
          'bg-white dark:bg-gray-800 px-4 py-3 flex items-center justify-between border-t border-gray-200 dark:border-gray-700 sm:px-6'
        ),
      info: () =>
        themedAuto(
          'flex-1 flex justify-between sm:hidden text-sm text-gray-700 dark:text-gray-300'
        ),
      nav: () => 'hidden sm:flex-1 sm:flex sm:items-center sm:justify-between',
      button: () =>
        themedAuto(
          'relative inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200'
        ),
      buttonCurrent: () =>
        themedAuto(
          'relative inline-flex items-center px-4 py-2 border border-blue-500 dark:border-blue-400 text-sm font-medium rounded-md text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-200'
        ),
    },

    // Data grid specific variants
    grid: {
      container: () =>
        themedAuto('overflow-auto rounded-lg border border-gray-200 dark:border-gray-700'),
      table: () => 'min-w-full table-fixed',
      resizeHandle: () =>
        themedAuto(
          'absolute right-0 top-0 bottom-0 w-1 cursor-col-resize hover:bg-blue-500 dark:hover:bg-blue-400 transition-colors duration-200'
        ),
      filterContainer: () =>
        themedAuto(
          'border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 p-3'
        ),
      filterInput: () =>
        themedAuto(
          'block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-400 dark:focus:ring-blue-400 focus:outline-none focus:ring-2'
        ),
    },

    // Sorting indicators
    sort: {
      indicator: () =>
        themedAuto(
          'ml-2 h-4 w-4 flex-none rounded text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300'
        ),
      ascending: () =>
        themedAuto(
          'ml-2 h-4 w-4 flex-none rounded text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transform rotate-0'
        ),
      descending: () =>
        themedAuto(
          'ml-2 h-4 w-4 flex-none rounded text-gray-400 group-hover:text-gray-500 dark:group-hover:text-gray-300 transform rotate-180'
        ),
    },
  },

  // Icon variants
  icon: {
    // Size variants
    size: {
      xs: () => 'h-3 w-3',
      sm: () => 'h-4 w-4',
      md: () => 'h-5 w-5',
      lg: () => 'h-6 w-6',
      xl: () => 'h-8 w-8',
      xxl: () => 'h-10 w-10',
      xxxl: () => 'h-12 w-12',
    },

    // Color variants
    color: {
      // Neutral colors
      default: () => themedAuto('text-gray-500 dark:text-gray-400'),
      muted: () => themedAuto('text-gray-400 dark:text-gray-500'),
      subtle: () => themedAuto('text-gray-300 dark:text-gray-600'),
      primary: () => themedAuto('text-gray-900 dark:text-gray-100'),

      // Brand colors
      brand: () => themedAuto('text-blue-600 dark:text-blue-400'),
      brandMuted: () => themedAuto('text-blue-500 dark:text-blue-500'),

      // Semantic colors
      success: () => themedAuto('text-green-600 dark:text-green-400'),
      warning: () => themedAuto('text-amber-600 dark:text-amber-400'),
      error: () => themedAuto('text-red-600 dark:text-red-400'),
      info: () => themedAuto('text-blue-600 dark:text-blue-400'),

      // Interactive colors
      interactive: () =>
        themedAuto(
          'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200'
        ),
      interactiveSubtle: () =>
        themedAuto(
          'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200'
        ),

      // Web3 specific colors
      ethereum: () => themedAuto('text-blue-600 dark:text-blue-400'),
      solana: () => themedAuto('text-purple-600 dark:text-purple-400'),
      bitcoin: () => themedAuto('text-orange-600 dark:text-orange-400'),
    },

    // Combined size and color variants
    variant: {
      // Default variants (most common combinations)
      default: {
        xs: () => themedAuto('h-3 w-3 text-gray-500 dark:text-gray-400'),
        sm: () => themedAuto('h-4 w-4 text-gray-500 dark:text-gray-400'),
        md: () => themedAuto('h-5 w-5 text-gray-500 dark:text-gray-400'),
        lg: () => themedAuto('h-6 w-6 text-gray-500 dark:text-gray-400'),
        xl: () => themedAuto('h-8 w-8 text-gray-500 dark:text-gray-400'),
      },

      // Interactive variants
      interactive: {
        xs: () =>
          themedAuto(
            'h-3 w-3 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'
          ),
        sm: () =>
          themedAuto(
            'h-4 w-4 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'
          ),
        md: () =>
          themedAuto(
            'h-5 w-5 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'
          ),
        lg: () =>
          themedAuto(
            'h-6 w-6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'
          ),
        xl: () =>
          themedAuto(
            'h-8 w-8 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 cursor-pointer'
          ),
      },

      // Success variants
      success: {
        xs: () => themedAuto('h-3 w-3 text-green-600 dark:text-green-400'),
        sm: () => themedAuto('h-4 w-4 text-green-600 dark:text-green-400'),
        md: () => themedAuto('h-5 w-5 text-green-600 dark:text-green-400'),
        lg: () => themedAuto('h-6 w-6 text-green-600 dark:text-green-400'),
        xl: () => themedAuto('h-8 w-8 text-green-600 dark:text-green-400'),
      },

      // Warning variants
      warning: {
        xs: () => themedAuto('h-3 w-3 text-amber-600 dark:text-amber-400'),
        sm: () => themedAuto('h-4 w-4 text-amber-600 dark:text-amber-400'),
        md: () => themedAuto('h-5 w-5 text-amber-600 dark:text-amber-400'),
        lg: () => themedAuto('h-6 w-6 text-amber-600 dark:text-amber-400'),
        xl: () => themedAuto('h-8 w-8 text-amber-600 dark:text-amber-400'),
      },

      // Error variants
      error: {
        xs: () => themedAuto('h-3 w-3 text-red-600 dark:text-red-400'),
        sm: () => themedAuto('h-4 w-4 text-red-600 dark:text-red-400'),
        md: () => themedAuto('h-5 w-5 text-red-600 dark:text-red-400'),
        lg: () => themedAuto('h-6 w-6 text-red-600 dark:text-red-400'),
        xl: () => themedAuto('h-8 w-8 text-red-600 dark:text-red-400'),
      },

      // Muted variants
      muted: {
        xs: () => themedAuto('h-3 w-3 text-gray-400 dark:text-gray-500'),
        sm: () => themedAuto('h-4 w-4 text-gray-400 dark:text-gray-500'),
        md: () => themedAuto('h-5 w-5 text-gray-400 dark:text-gray-500'),
        lg: () => themedAuto('h-6 w-6 text-gray-400 dark:text-gray-500'),
        xl: () => themedAuto('h-8 w-8 text-gray-400 dark:text-gray-500'),
      },
    },

    // Context-specific icon patterns
    context: {
      // Button icons
      button: {
        leading: () => 'h-4 w-4 mr-2 flex-shrink-0',
        trailing: () => 'h-4 w-4 ml-2 flex-shrink-0',
        only: () => 'h-4 w-4',
        small: () => 'h-3 w-3',
        large: () => 'h-5 w-5',
      },

      // Input icons
      input: {
        leading: () =>
          themedAuto(
            'absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none'
          ),
        trailing: () =>
          themedAuto('absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400'),
        interactive: () =>
          themedAuto(
            'absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200'
          ),
      },

      // Navigation icons
      navigation: {
        menu: () => themedAuto('h-5 w-5 text-gray-600 dark:text-gray-400'),
        menuActive: () => themedAuto('h-5 w-5 text-blue-600 dark:text-blue-400'),
        breadcrumb: () => themedAuto('h-4 w-4 text-gray-400 mx-2'),
        tab: () => 'h-4 w-4 mr-2',
      },

      // Status icons
      status: {
        success: () => themedAuto('h-5 w-5 text-green-500 flex-shrink-0'),
        warning: () => themedAuto('h-5 w-5 text-amber-500 flex-shrink-0'),
        error: () => themedAuto('h-5 w-5 text-red-500 flex-shrink-0'),
        info: () => themedAuto('h-5 w-5 text-blue-500 flex-shrink-0'),
        loading: () => themedAuto('h-5 w-5 text-gray-400 animate-spin flex-shrink-0'),
      },

      // Avatar/Profile icons
      avatar: {
        small: () => themedAuto('h-6 w-6 text-gray-400'),
        medium: () => themedAuto('h-8 w-8 text-gray-400'),
        large: () => themedAuto('h-10 w-10 text-gray-400'),
        fallback: () => themedAuto('h-full w-full text-gray-300'),
      },

      // Web3 context icons
      web3: {
        wallet: () => themedAuto('h-5 w-5 text-gray-600 dark:text-gray-400'),
        walletConnected: () => themedAuto('h-5 w-5 text-green-600 dark:text-green-400'),
        walletDisconnected: () => themedAuto('h-5 w-5 text-gray-400 dark:text-gray-500'),
        transaction: () => themedAuto('h-4 w-4 text-blue-600 dark:text-blue-400'),
        blockchain: {
          ethereum: () => themedAuto('h-5 w-5 text-blue-600 dark:text-blue-400'),
          solana: () => themedAuto('h-5 w-5 text-purple-600 dark:text-purple-400'),
          bitcoin: () => themedAuto('h-5 w-5 text-orange-600 dark:text-orange-400'),
        },
      },

      // Card and content icons
      card: {
        header: () => themedAuto('h-5 w-5 text-gray-600 dark:text-gray-400 mr-2'),
        action: () =>
          themedAuto(
            'h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-200'
          ),
        feature: () => themedAuto('h-6 w-6 text-blue-600 dark:text-blue-400'),
        featureLarge: () => themedAuto('h-8 w-8 text-blue-600 dark:text-blue-400'),
      },

      // List and table icons
      list: {
        item: () => themedAuto('h-4 w-4 text-gray-500 dark:text-gray-400 mr-3 flex-shrink-0'),
        action: () =>
          themedAuto(
            'h-4 w-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors duration-200'
          ),
        bullet: () => themedAuto('h-1.5 w-1.5 text-gray-400 mt-2 mr-3 flex-shrink-0'),
      },
    },

    // Decorative icon patterns
    decorative: {
      hero: {
        small: () => themedAuto('h-12 w-12 text-blue-600 dark:text-blue-400'),
        medium: () => themedAuto('h-16 w-16 text-blue-600 dark:text-blue-400'),
        large: () => themedAuto('h-20 w-20 text-blue-600 dark:text-blue-400'),
        xlarge: () => themedAuto('h-24 w-24 text-blue-600 dark:text-blue-400'),
      },

      feature: {
        small: () => themedAuto('h-8 w-8 text-gray-600 dark:text-gray-400'),
        medium: () => themedAuto('h-10 w-10 text-gray-600 dark:text-gray-400'),
        large: () => themedAuto('h-12 w-12 text-gray-600 dark:text-gray-400'),
      },

      background: {
        subtle: () => themedAuto('h-32 w-32 text-gray-100 dark:text-gray-800 opacity-50'),
        muted: () => themedAuto('h-24 w-24 text-gray-200 dark:text-gray-700 opacity-30'),
      },

      empty: {
        small: () => themedAuto('h-8 w-8 text-gray-400 dark:text-gray-500 mb-2'),
        medium: () => themedAuto('h-12 w-12 text-gray-400 dark:text-gray-500 mb-4'),
        large: () => themedAuto('h-16 w-16 text-gray-400 dark:text-gray-500 mb-6'),
      },
    },
  },

  // Overlays & Portals variants
  overlays: {
    // Modal/Dialog overlays
    modal: {
      // A scrim: black under every theme, since it only dims what is behind it.
      backdrop: () =>
        'fixed inset-0 z-40 bg-black/50 dark:bg-black/70 backdrop-blur-sm transition-all duration-300 ease-out',
      backdropEntering: () => 'opacity-0',
      backdropEntered: () => 'opacity-100',
      backdropExiting: () => 'opacity-0',

      container: () =>
        'fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ease-out',
      containerEntering: () => 'opacity-0 scale-95',
      containerEntered: () => 'opacity-100 scale-100',
      containerExiting: () => 'opacity-0 scale-95',

      content: () =>
        themedAuto(
          'relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 max-h-[80vh] overflow-hidden'
        ),

      // Size variants
      small: () => 'max-w-sm',
      medium: () => 'max-w-lg',
      large: () => 'max-w-2xl',
      extraLarge: () => 'max-w-4xl',
      fullWidth: () => 'max-w-[95vw]',

      // Header and content areas
      header: () =>
        themedAuto(
          'flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-700'
        ),
      title: () => themedAuto('text-lg font-semibold text-gray-900 dark:text-gray-100'),
      closeButton: () =>
        themedAuto('p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors'),

      body: () => 'p-4 sm:p-6 overflow-y-auto',
      footer: () =>
        themedAuto(
          'flex items-center justify-end space-x-3 p-4 sm:p-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
        ),
    },

    // Tooltip overlays
    tooltip: {
      container: () =>
        themedAuto(
          'absolute z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 dark:bg-gray-800 rounded shadow-lg transition-all duration-200 pointer-events-none'
        ),
      arrow: () => themedAuto('absolute w-2 h-2 bg-gray-900 dark:bg-gray-800 transform rotate-45'),

      // Position variants
      top: () => '-translate-x-1/2 -translate-y-full left-1/2 bottom-full mb-2',
      topArrow: () => 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2',

      bottom: () => '-translate-x-1/2 translate-y-full left-1/2 top-full mt-2',
      bottomArrow: () => 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2',

      left: () => '-translate-y-1/2 -translate-x-full top-1/2 right-full mr-2',
      leftArrow: () => 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2',

      right: () => '-translate-y-1/2 translate-x-full top-1/2 left-full ml-2',
      rightArrow: () => 'right-full top-1/2 -translate-y-1/2 translate-x-1/2',

      // Content variants
      light: () => themedAuto('text-gray-900 bg-white border border-gray-200 shadow-md'),
      dark: () => themedAuto('text-white bg-gray-900 dark:bg-gray-800'),
      info: () => themedAuto('text-blue-50 bg-blue-600'),
      success: () => themedAuto('text-green-50 bg-green-600'),
      warning: () => themedAuto('text-amber-50 bg-amber-600'),
      error: () => themedAuto('text-red-50 bg-red-600'),
    },

    // Popover overlays (more complex than tooltips)
    popover: {
      backdrop: () => 'fixed inset-0 z-30',
      container: () =>
        themedAuto(
          'absolute z-40 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200'
        ),
      arrow: () =>
        themedAuto(
          'absolute w-3 h-3 bg-white dark:bg-gray-800 border-l border-t border-gray-200 dark:border-gray-700 transform rotate-45'
        ),

      // Size variants
      small: () => 'w-48',
      medium: () => 'w-64',
      large: () => 'w-80',
      auto: () => 'w-auto min-w-48 max-w-xs',

      // Position variants (similar to tooltip but adjusted for larger content)
      top: () => '-translate-x-1/2 -translate-y-full left-1/2 bottom-full mb-3',
      topArrow: () => 'top-full left-1/2 -translate-x-1/2 -translate-y-1/2',

      bottom: () => '-translate-x-1/2 translate-y-full left-1/2 top-full mt-3',
      bottomArrow: () => 'bottom-full left-1/2 -translate-x-1/2 translate-y-1/2',

      left: () => '-translate-y-1/2 -translate-x-full top-1/2 right-full mr-3',
      leftArrow: () => 'left-full top-1/2 -translate-y-1/2 -translate-x-1/2',

      right: () => '-translate-y-1/2 translate-x-full top-1/2 left-full ml-3',
      rightArrow: () => 'right-full top-1/2 -translate-y-1/2 translate-x-1/2',

      // Content areas
      header: () => themedAuto('px-4 py-3 border-b border-gray-200 dark:border-gray-700'),
      title: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      body: () => 'px-4 py-3',
      footer: () =>
        themedAuto(
          'px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50'
        ),

      // Animation states
      entering: () => 'opacity-0 scale-95 transform',
      entered: () => 'opacity-100 scale-100 transform',
      exiting: () => 'opacity-0 scale-95 transform',
    },

    // Dropdown menus
    dropdown: {
      container: () => 'relative inline-block',
      trigger: () =>
        themedAuto(
          'inline-flex justify-center items-center bg-transparent border-0 text-gray-900 dark:text-gray-100 focus:outline-none transition-colors'
        ),
      triggerBordered: () =>
        themedAuto(
          'inline-flex justify-center items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:ring-offset-gray-950 transition-colors'
        ),

      menu: () =>
        themedAuto(
          'absolute z-50 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg focus:outline-none transition-all duration-200'
        ),
      menuSmall: () => 'w-40',
      menuLarge: () => 'w-72',
      menuAuto: () => 'w-auto min-w-40',

      // Position variants
      menuTop: () => 'bottom-full mb-1',
      menuBottom: () => 'top-full mt-1',
      menuLeft: () => 'right-0',
      menuRight: () => 'left-0',

      // Animation states
      menuEntering: () => 'opacity-0 scale-95 transform origin-top',
      menuEntered: () => 'opacity-100 scale-100 transform origin-top',
      menuExiting: () => 'opacity-0 scale-95 transform origin-top',

      // Menu items
      itemContainer: () => 'py-1 px-1',
      item: () =>
        themedAuto(
          'flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-200 cursor-pointer hover:shadow-sm rounded-sm'
        ),
      itemActive: () =>
        themedAuto('bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 shadow-sm'),
      itemDisabled: () =>
        themedAuto(
          'text-gray-400 dark:text-gray-600 cursor-not-allowed hover:bg-transparent hover:text-gray-400 dark:hover:text-gray-600'
        ),

      // Special item types
      divider: () => themedAuto('my-1 border-t border-gray-200 dark:border-gray-700'),
      header: () =>
        themedAuto(
          'px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide'
        ),

      // Icons in menu items
      itemIcon: () => 'mr-3 h-4 w-4 flex-shrink-0',
      itemIconRight: () => 'ml-auto h-4 w-4 flex-shrink-0',
    },

    // Drawer/Sidebar overlays
    drawer: {
      // A scrim: black under every theme, since it only dims what is behind it.
      backdrop: () =>
        'fixed inset-0 z-40 bg-black/50 dark:bg-black/70 transition-opacity duration-300',
      container: () =>
        'fixed inset-y-0 z-50 flex w-full justify-end transition-transform duration-300 ease-in-out',

      // Position variants
      right: () => 'right-0',
      left: () => 'left-0 justify-start',

      // Size variants
      narrow: () => 'max-w-xs',
      default: () => 'max-w-md',
      wide: () => 'max-w-lg',
      extraWide: () => 'max-w-2xl',

      // Content
      content: () =>
        themedAuto(
          'relative flex w-full flex-col bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-xl'
        ),
      contentLeft: () => themedAuto('border-r border-l-0 border-gray-200 dark:border-gray-700'),

      header: () =>
        themedAuto(
          'flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700'
        ),
      title: () => themedAuto('text-lg font-semibold text-gray-900 dark:text-gray-100'),
      closeButton: () =>
        themedAuto('p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors'),

      body: () => 'flex-1 px-4 sm:px-6 py-4 overflow-y-auto',
      footer: () =>
        themedAuto(
          'flex items-center justify-end space-x-3 px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
        ),

      // Animation states
      entering: () => 'translate-x-full',
      enteringLeft: () => '-translate-x-full',
      entered: () => 'translate-x-0',
      exiting: () => 'translate-x-full',
      exitingLeft: () => '-translate-x-full',
    },

    // Sheet overlays (bottom sheets, action sheets)
    sheet: {
      // A scrim: black under every theme, since it only dims what is behind it.
      backdrop: () =>
        'fixed inset-0 z-40 bg-black/50 dark:bg-black/70 transition-opacity duration-300',
      container: () => 'fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out',

      content: () =>
        themedAuto(
          'relative bg-white dark:bg-gray-900 rounded-t-lg shadow-xl border-t border-gray-200 dark:border-gray-700 max-h-[85vh] overflow-hidden'
        ),
      handle: () => 'flex justify-center py-2',
      handleBar: () => themedAuto('w-10 h-1 bg-gray-300 dark:bg-gray-600 rounded-full'),

      header: () =>
        themedAuto(
          'flex items-center justify-between px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700'
        ),
      title: () => themedAuto('text-lg font-semibold text-gray-900 dark:text-gray-100'),
      closeButton: () =>
        themedAuto('p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors'),

      body: () => 'px-4 sm:px-6 py-4 overflow-y-auto',
      footer: () =>
        themedAuto(
          'flex items-center justify-center space-x-3 px-4 sm:px-6 py-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50'
        ),

      // Animation states
      entering: () => 'translate-y-full',
      entered: () => 'translate-y-0',
      exiting: () => 'translate-y-full',
    },

    // Context menus (right-click menus)
    contextMenu: {
      backdrop: () => 'fixed inset-0 z-30',
      container: () =>
        themedAuto(
          'absolute z-50 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 py-1 focus:outline-none transition-all duration-150'
        ),

      item: () =>
        themedAuto(
          'flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors cursor-pointer'
        ),
      itemDisabled: () =>
        themedAuto('text-gray-400 dark:text-gray-600 cursor-not-allowed hover:bg-transparent'),
      itemDanger: () =>
        themedAuto(
          'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-300'
        ),

      divider: () => themedAuto('my-1 border-t border-gray-200 dark:border-gray-700'),
      icon: () => 'mr-2 h-4 w-4 flex-shrink-0',
      shortcut: () => themedAuto('ml-auto text-xs text-gray-400 dark:text-gray-500'),

      // Nested menu indicators
      submenuIndicator: () => themedAuto('ml-auto h-4 w-4 text-gray-400 dark:text-gray-500'),
      submenu: () => 'absolute left-full top-0 ml-1',
    },

    // Loading overlays
    loading: {
      backdrop: () =>
        themedAuto(
          'fixed inset-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300'
        ),
      container: () =>
        themedAuto(
          'flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700'
        ),

      spinner: () =>
        themedAuto(
          'w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin'
        ),
      spinnerLarge: () =>
        themedAuto(
          'w-12 h-12 border-3 border-blue-600 border-t-transparent rounded-full animate-spin'
        ),

      text: () => themedAuto('text-sm font-medium text-gray-900 dark:text-gray-100'),
      subtext: () => themedAuto('text-xs text-gray-500 dark:text-gray-400 text-center max-w-xs'),
    },

    // Portal utilities for managing overlay z-index and positioning
    portal: {
      // Z-index layers (ensure proper stacking)
      backdrop: () => 'z-40',
      dropdown: () => 'z-50',
      tooltip: () => 'z-50',
      popover: () => 'z-40',
      modal: () => 'z-50',
      drawer: () => 'z-50',
      sheet: () => 'z-50',
      contextMenu: () => 'z-50',
      loading: () => 'z-60',
      notification: () => 'z-70',

      // Focus trap utilities
      focusTrap: () => 'focus:outline-none',
      focusVisible: () =>
        themedAuto('focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'),

      // Screen reader utilities
      srOnly: () => 'sr-only',
      ariaLabel: () => 'aria-label',
    },
  },

  // Micro-Interactions & Animations variants
  animations: {
    // Hover effects
    hover: {
      // Card hover effects
      card: {
        subtle: () => 'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5',
        lift: () => 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1',
        glow: () =>
          themedAuto(
            'transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 dark:hover:shadow-blue-400/25'
          ),
        scale: () => 'transition-transform duration-200 hover:scale-105',
        border: () =>
          themedAuto(
            'transition-all duration-200 hover:border-blue-300 dark:hover:border-blue-600'
          ),

        // Web3 specific card hovers
        nft: () =>
          themedAuto(
            'transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-[1.02]'
          ),
        wallet: () =>
          themedAuto(
            'transition-all duration-200 hover:shadow-md hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/20 dark:hover:to-indigo-900/20'
          ),
        transaction: () =>
          themedAuto(
            'transition-all duration-200 hover:shadow-md hover:border-green-300 dark:hover:border-green-600'
          ),
      },

      // Button hover effects
      button: {
        lift: () => 'transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md',
        glow: () => 'transition-all duration-200 hover:shadow-lg hover:shadow-current/25',
        scale: () => 'transition-transform duration-150 hover:scale-105',
        shimmer: () =>
          themedAuto(
            'relative overflow-hidden transition-all duration-200 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent hover:before:translate-x-full'
          ),

        // Web3 button hovers
        connect: () =>
          themedAuto(
            'transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02]'
          ),
        transaction: () =>
          themedAuto('transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30'),
        disconnect: () =>
          themedAuto('transition-all duration-200 hover:shadow-lg hover:shadow-red-500/30'),
      },

      // Icon hover effects
      icon: {
        bounce: () => 'transition-transform duration-200 hover:scale-110 hover:-translate-y-0.5',
        rotate: () => 'transition-transform duration-200 hover:rotate-12',
        pulse: () =>
          themedAuto(
            'transition-all duration-200 hover:scale-110 hover:text-blue-600 dark:hover:text-blue-400'
          ),
        glow: () =>
          themedAuto(
            'transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:drop-shadow-sm'
          ),
      },
    },

    // Loading animations
    loading: {
      // Spinner variants
      spinner: {
        default: () => 'animate-spin',
        slow: () => 'animate-spin-slow',
        fast: () => 'animate-spin-fast',
        bounce: () => 'animate-bounce',
        pulse: () => 'animate-pulse',
        ping: () => 'animate-ping',
      },

      // Skeleton loaders
      skeleton: {
        base: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded'),
        line: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 h-4 rounded'),
        circle: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded-full'),
        card: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg h-32'),

        // Shimmer effect
        shimmer: () =>
          themedAuto(
            'relative overflow-hidden bg-gray-200 dark:bg-gray-700 before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-gray-200 before:via-white before:to-gray-200 dark:before:from-gray-700 dark:before:via-gray-600 dark:before:to-gray-700'
          ),

        // Progressive loading
        progressive: () =>
          themedAuto(
            'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] animate-shimmer-bg'
          ),
      },

      // Progress indicators
      progress: {
        bar: () => 'transition-all duration-300 ease-out',
        indeterminate: () =>
          themedAuto(
            'animate-progress-indeterminate bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%]'
          ),

        // Web3 progress indicators
        transaction: () =>
          themedAuto('animate-progress-glow bg-gradient-to-r from-green-400 to-blue-500'),
        minting: () =>
          themedAuto(
            'animate-progress-rainbow bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500'
          ),
      },
    },

    // Transition animations
    transitions: {
      // Slide transitions
      slide: {
        up: () => 'transition-transform duration-300 ease-out',
        upEnter: () => 'translate-y-full',
        upEntered: () => 'translate-y-0',
        upExit: () => 'translate-y-full',

        down: () => 'transition-transform duration-300 ease-out',
        downEnter: () => '-translate-y-full',
        downEntered: () => 'translate-y-0',
        downExit: () => '-translate-y-full',

        left: () => 'transition-transform duration-300 ease-out',
        leftEnter: () => 'translate-x-full',
        leftEntered: () => 'translate-x-0',
        leftExit: () => 'translate-x-full',

        right: () => 'transition-transform duration-300 ease-out',
        rightEnter: () => '-translate-x-full',
        rightEntered: () => 'translate-x-0',
        rightExit: () => '-translate-x-full',
      },

      // Fade transitions
      fade: {
        default: () => 'transition-opacity duration-300 ease-out',
        enter: () => 'opacity-0',
        entered: () => 'opacity-100',
        exit: () => 'opacity-0',

        fast: () => 'transition-opacity duration-150 ease-out',
        slow: () => 'transition-opacity duration-500 ease-out',

        // Fade with scale
        scale: () => 'transition-all duration-300 ease-out',
        scaleEnter: () => 'opacity-0 scale-95',
        scaleEntered: () => 'opacity-100 scale-100',
        scaleExit: () => 'opacity-0 scale-95',
      },

      // Page transitions
      page: {
        slideLeft: () => 'transition-transform duration-300 ease-in-out',
        slideRight: () => 'transition-transform duration-300 ease-in-out',
        fadeScale: () => 'transition-all duration-300 ease-in-out',
      },
    },

    // Gesture feedback
    feedback: {
      // Click/tap feedback
      tap: {
        ripple: () => 'relative overflow-hidden transition-all duration-150 active:scale-95',
        scale: () => 'transition-transform duration-100 active:scale-95',
        glow: () => 'transition-all duration-150 active:shadow-lg active:shadow-current/30',

        // Material Design ripple effect
        materialRipple: () =>
          themedAuto(
            'relative overflow-hidden after:absolute after:inset-0 after:rounded-[inherit] after:pointer-events-none after:transition-opacity after:duration-300 after:opacity-0 active:after:opacity-100 active:after:bg-white/20'
          ),
      },

      // Focus feedback
      focus: {
        ring: () =>
          themedAuto(
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
          ),
        glow: () =>
          themedAuto(
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:shadow-lg focus-visible:shadow-blue-500/25'
          ),
        scale: () =>
          themedAuto(
            'focus-visible:outline-none focus-visible:scale-105 focus-visible:ring-2 focus-visible:ring-blue-500'
          ),

        // Web3 focus styles
        wallet: () =>
          themedAuto(
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:bg-blue-50 dark:focus-visible:bg-blue-900/20'
          ),
      },

      // Drag feedback
      drag: {
        dragging: () => 'opacity-50 scale-95 rotate-3 shadow-xl z-50',
        dropzone: () => 'transition-all duration-200 border-2 border-dashed',
        dropzoneActive: () =>
          themedAuto('border-blue-400 bg-blue-50 dark:bg-blue-900/20 scale-105'),
        dropzoneInactive: () => themedAuto('border-gray-300 dark:border-gray-600'),
      },
    },

    // Scroll animations
    scroll: {
      // Reveal animations
      reveal: {
        fadeUp: () => 'opacity-0 translate-y-8 transition-all duration-700 ease-out',
        fadeUpVisible: () => 'opacity-100 translate-y-0',

        fadeDown: () => 'opacity-0 -translate-y-8 transition-all duration-700 ease-out',
        fadeDownVisible: () => 'opacity-100 translate-y-0',

        fadeLeft: () => 'opacity-0 translate-x-8 transition-all duration-700 ease-out',
        fadeLeftVisible: () => 'opacity-100 translate-x-0',

        fadeRight: () => 'opacity-0 -translate-x-8 transition-all duration-700 ease-out',
        fadeRightVisible: () => 'opacity-100 translate-x-0',

        scale: () => 'opacity-0 scale-90 transition-all duration-700 ease-out',
        scaleVisible: () => 'opacity-100 scale-100',
      },

      // Parallax effects
      parallax: {
        slow: () => 'transform transition-transform duration-75',
        medium: () => 'transform transition-transform duration-100',
        fast: () => 'transform transition-transform duration-150',
      },

      // Sticky animations
      sticky: {
        shrink: () => 'transition-all duration-300 ease-out',
        shrinkActive: () => 'py-2 shadow-lg backdrop-blur-md',
        shrinkInactive: () => 'py-4',
      },
    },

    // Web3-specific animations
    web3: {
      // Wallet connection animations
      wallet: {
        connecting: () =>
          themedAuto(
            'animate-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_100%] animate-shimmer-bg'
          ),
        connected: () =>
          themedAuto('animate-bounce-gentle bg-gradient-to-r from-green-400 to-blue-500'),
        disconnected: () => 'animate-fade-out opacity-50',
        error: () => themedAuto('animate-shake bg-red-100 dark:bg-red-900/20'),
      },

      // Transaction animations
      transaction: {
        pending: () =>
          themedAuto(
            'animate-pulse border border-yellow-300 bg-yellow-50 dark:border-yellow-700 dark:bg-yellow-900/20'
          ),
        confirming: () =>
          themedAuto('animate-progress-dots bg-gradient-to-r from-blue-500 to-purple-500'),
        confirmed: () =>
          themedAuto(
            'animate-success-pulse border border-green-300 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
          ),
        failed: () =>
          themedAuto(
            'animate-error-flash border border-red-300 bg-red-50 dark:border-red-700 dark:bg-red-900/20'
          ),
      },

      // Blockchain activity
      blockchain: {
        mining: () =>
          themedAuto(
            'animate-mining-pulse bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-[length:200%_100%]'
          ),
        minting: () =>
          themedAuto(
            'animate-rainbow bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-pink-500 bg-[length:300%_100%]'
          ),
        staking: () =>
          themedAuto('animate-glow-pulse bg-gradient-to-r from-green-400 to-emerald-500'),
        burning: () =>
          themedAuto(
            'animate-fire bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-[length:200%_100%]'
          ),
      },
    },

    // Utility animations
    utility: {
      // Attention grabbing
      attention: {
        bounce: () => 'animate-bounce',
        pulse: () => 'animate-pulse',
        ping: () => 'animate-ping',
        shake: () => 'animate-shake',
        wiggle: () => 'animate-wiggle',
        heartbeat: () => 'animate-heartbeat',
      },

      // State indicators
      state: {
        success: () => 'animate-success-checkmark',
        error: () => 'animate-error-x',
        warning: () => 'animate-warning-triangle',
        info: () => 'animate-info-circle',
      },

      // Performance considerations
      reduced: {
        // Reduced motion variants for accessibility
        fadeOnly: () => 'transition-opacity duration-300 ease-out',
        scaleOnly: () => 'transition-transform duration-200 ease-out',
        instant: () => 'transition-none',
        respectPrefers: () =>
          themedAuto(
            'motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none'
          ),
      },
    },
  },

  // Accessibility & A11Y variants
  accessibility: {
    // Screen reader and assistive technology support
    screenReader: {
      // Visually hidden but accessible to screen readers
      only: () => 'sr-only',
      focusable: () =>
        themedAuto(
          'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-2 focus:bg-white focus:text-black focus:border focus:rounded'
        ),

      // Skip links for navigation
      skipLink: () =>
        themedAuto(
          'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:m-2 focus:no-underline'
        ),
    },

    // Focus management
    focus: {
      // Focus indicators
      ring: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
        ),
      ringInset: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500'
        ),
      ringDark: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900'
        ),

      // High contrast focus for better visibility
      highContrast: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:bg-yellow-50 dark:focus-visible:bg-yellow-900/20'
        ),

      // Web3 specific focus styles
      wallet: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:bg-blue-50 dark:focus-visible:bg-blue-900/20'
        ),
      transaction: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
        ),
      error: () =>
        themedAuto(
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
        ),
    },

    // Color contrast and visibility
    contrast: {
      // High contrast text
      text: {
        high: () => themedAuto('text-gray-900 dark:text-gray-100'),
        medium: () => themedAuto('text-gray-700 dark:text-gray-300'),
        low: () => themedAuto('text-gray-600 dark:text-gray-400'),
        inverse: () => themed(null, 'text-background', 'text-white dark:text-gray-900'),
      },

      // High contrast backgrounds
      background: {
        primary: () => themedAuto('bg-blue-700 text-white dark:bg-blue-300 dark:text-gray-900'),
        secondary: () => themedAuto('bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-900'),
        success: () => themedAuto('bg-green-700 text-white dark:bg-green-300 dark:text-gray-900'),
        warning: () => themedAuto('bg-yellow-700 text-white dark:bg-yellow-300 dark:text-gray-900'),
        error: () => themedAuto('bg-red-700 text-white dark:bg-red-300 dark:text-gray-900'),
      },

      // Link contrast
      link: {
        default: () =>
          themedAuto(
            'text-blue-700 dark:text-blue-300 underline hover:text-blue-900 dark:hover:text-blue-100'
          ),
        visited: () =>
          themedAuto(
            'text-purple-700 dark:text-purple-300 underline hover:text-purple-900 dark:hover:text-purple-100'
          ),
      },
    },

    // Motion and animation preferences
    motion: {
      // Respect user's motion preferences
      respectPrefers: () =>
        themedAuto(
          'motion-safe:transition-all motion-safe:duration-300 motion-reduce:transition-none'
        ),
      reduceMotion: () => themedAuto('motion-reduce:transition-none motion-reduce:animate-none'),

      // Safe animations that work with reduced motion
      safe: {
        fade: () =>
          themedAuto(
            'motion-safe:transition-opacity motion-safe:duration-300 motion-reduce:transition-none'
          ),
        scale: () =>
          themedAuto(
            'motion-safe:transition-transform motion-safe:duration-200 motion-reduce:transition-none'
          ),
        slide: () =>
          themedAuto(
            'motion-safe:transition-transform motion-safe:duration-300 motion-reduce:transition-none'
          ),
      },

      // Loading animations that respect motion preferences
      loading: {
        spin: () => themedAuto('motion-safe:animate-spin motion-reduce:animate-none'),
        pulse: () => themedAuto('motion-safe:animate-pulse motion-reduce:animate-none'),
        bounce: () => themedAuto('motion-safe:animate-bounce motion-reduce:animate-none'),
      },
    },

    // Semantic HTML and roles
    semantic: {
      // Interactive roles
      interactive: {
        button: () => 'role="button" tabindex="0"',
        link: () => 'role="link"',
        menuitem: () => 'role="menuitem"',
        tab: () => 'role="tab"',
        tabpanel: () => 'role="tabpanel"',
        dialog: () => 'role="dialog"',
      },

      // State roles
      states: {
        selected: (selected: boolean) => `aria-selected="${selected}"`,
        checked: (checked: boolean) => `aria-checked="${checked}"`,
        pressed: (pressed: boolean) => `aria-pressed="${pressed}"`,
        expanded: (expanded: boolean) => `aria-expanded="${expanded}"`,
        disabled: (disabled: boolean) => (disabled ? 'aria-disabled="true" tabindex="-1"' : ''),
      },

      // Web3 specific semantic patterns
      web3: {
        wallet: () => 'role="button" aria-label="Connect Wallet"',
        transaction: () => 'role="status" aria-live="polite"',
        balance: () => 'role="text" aria-label="Account Balance"',
        address: () => 'role="text" aria-label="Wallet Address"',
      },
    },

    // Form accessibility
    form: {
      // Required field indicators
      required: {
        indicator: () => themedAuto('text-red-500 dark:text-red-400'),
        text: () => 'aria-required="true" required',
        visual: () =>
          themedAuto('after:content-["*"] after:ml-1 after:text-red-500 dark:after:text-red-400'),
      },

      // Validation states
      validation: {
        valid: () => themedAuto('border-green-500 dark:border-green-400 focus:ring-green-500'),
        invalid: () =>
          themedAuto('border-red-500 dark:border-red-400 focus:ring-red-500 aria-invalid="true"'),
        pending: () => themedAuto('border-yellow-500 dark:border-yellow-400 focus:ring-yellow-500'),
      },
    },

    // Interactive patterns
    interactive: {
      // Button patterns
      button: {
        primary: () =>
          themedAuto(
            'inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
          ),
        secondary: () =>
          themedAuto(
            'inline-flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
          ),

        // Icon buttons with proper labels
        icon: () =>
          themedAuto(
            'inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
          ),
      },

      // Link patterns
      link: {
        default: () =>
          themedAuto(
            'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
          ),
        external: () =>
          themedAuto(
            'text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 after:content-["↗"] after:ml-1 after:text-xs'
          ),
      },
    },

    // Text and content accessibility
    content: {
      // Text sizing and scaling
      text: {
        minimum: () => 'text-sm min-h-[44px] min-w-[44px]', // WCAG minimum touch target
        touch: () => 'min-h-[44px] min-w-[44px] touch-manipulation',
      },
    },

    // Error handling and feedback
    feedback: {
      // Error messages
      error: {
        container: () =>
          themedAuto(
            'border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 rounded-md p-4'
          ),
        title: () => themedAuto('text-sm font-medium text-red-800 dark:text-red-200'),
        message: () => themedAuto('text-sm text-red-700 dark:text-red-300 mt-2'),
      },

      // Success messages
      success: {
        container: () =>
          themedAuto(
            'border border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20 rounded-md p-4'
          ),
        title: () => themedAuto('text-sm font-medium text-green-800 dark:text-green-200'),
        message: () => themedAuto('text-sm text-green-700 dark:text-green-300 mt-2'),
      },

      // Live regions for dynamic content
      liveRegion: {
        polite: () => 'sr-only aria-live="polite"',
        assertive: () => 'sr-only aria-live="assertive"',
        status: () => 'sr-only role="status" aria-live="polite"',
        alert: () => 'sr-only role="alert" aria-live="assertive"',
      },
    },
  },

  // Performance & Optimization variants
  performance: {
    // Bundle optimization patterns
    bundle: {
      // Lazy loading utilities
      lazy: {
        component: () => 'opacity-0 transition-opacity duration-300',
        componentLoaded: () => 'opacity-100',
        image: () => 'blur-sm transition-all duration-300',
        imageLoaded: () => 'blur-none',
        skeleton: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700 rounded'),
      },

      // Code splitting indicators
      splitting: {
        loading: () => 'flex items-center justify-center py-8',
        error: () => themedAuto('text-red-600 dark:text-red-400 text-center py-8'),
        fallback: () => themedAuto('bg-gray-100 dark:bg-gray-800 animate-pulse rounded'),
      },
    },

    // Rendering optimization
    rendering: {
      // GPU acceleration utilities
      gpu: {
        transform: () => 'transform-gpu',
        layer: () => 'will-change-transform transform translate3d-0',
        composite: () => 'backface-hidden',
      },

      // Layout optimization
      layout: {
        // Prevent layout shifts
        stable: () => 'aspect-square',
        containLayout: () => 'contain-layout',
        containStyle: () => 'contain-style',

        // Efficient positioning
        sticky: () => 'sticky top-0 z-40',
        fixed: () => 'fixed inset-0 z-50',
      },

      // Memory optimization
      memory: {
        // Efficient list rendering
        virtualList: () => 'overflow-hidden',
        virtualItem: () => 'absolute left-0 right-0',

        // Image optimization
        responsiveImage: () => 'max-w-full h-auto object-cover',
        lazyImage: () => 'object-cover transition-opacity duration-300 opacity-0',
        loadedImage: () => 'opacity-100',
      },
    },

    // Network optimization
    network: {
      // Caching patterns
      cache: {
        // Service worker states
        cached: () => themedAuto('border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20'),
        updating: () => themedAuto('border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20'),
        offline: () => themedAuto('border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-900/20'),
        error: () => themedAuto('border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20'),

        // Cache status indicators
        fresh: () => themedAuto('text-green-600 dark:text-green-400'),
        stale: () => themedAuto('text-yellow-600 dark:text-yellow-400'),
        expired: () => themedAuto('text-red-600 dark:text-red-400'),
      },

      // Connection quality
      connection: {
        fast: () => themedAuto('border-green-500 bg-green-50 dark:bg-green-900/20'),
        slow: () => themedAuto('border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'),
        offline: () => themedAuto('border-red-500 bg-red-50 dark:bg-red-900/20'),
      },
    },

    // Core Web Vitals optimization
    webVitals: {
      // Largest Contentful Paint (LCP)
      lcp: {
        optimize: () => 'will-change-contents',
        hero: () => 'contain-layout will-change-contents',
        image: () => 'object-cover will-change-auto',
      },

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      interactivity: {
        optimize: () => 'touch-manipulation select-none',
        debounced: () => 'transition-none',
        throttled: () => 'pointer-events-none transition-opacity duration-100',
        ready: () => 'pointer-events-auto opacity-100',
      },

      // Cumulative Layout Shift (CLS)
      layoutStability: {
        // Prevent layout shifts
        stable: () => 'aspect-square contain-layout',
        placeholder: () => themedAuto('min-h-[200px] bg-gray-100 dark:bg-gray-800'),
        skeleton: () => themedAuto('animate-pulse bg-gray-200 dark:bg-gray-700'),

        // Image container stability
        imageContainer: () => 'overflow-hidden relative',
        imageStable: () => 'absolute inset-0 object-cover',
      },
    },

    // Web3 Performance optimization
    web3: {
      // Wallet connection optimization
      wallet: {
        cached: () => 'opacity-100 transition-opacity duration-200',
        connecting: () => 'opacity-75 cursor-wait',
        staleData: () => 'opacity-75',
        freshData: () => 'opacity-100',
      },

      // Transaction optimization
      transaction: {
        // Batching indicators
        batched: () => themedAuto('border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20'),
        individual: () => themedAuto('border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-900/20'),

        // Gas optimization
        gasOptimal: () => themedAuto('text-green-600 dark:text-green-400'),
        gasHigh: () => themedAuto('text-yellow-600 dark:text-yellow-400'),
        gasVeryHigh: () => themedAuto('text-red-600 dark:text-red-400'),
      },

      // Blockchain data optimization
      blockchain: {
        // Data freshness
        realtime: () => themedAuto('border-green-500 bg-green-50 dark:bg-green-900/20'),
        cached: () => themedAuto('border-blue-500 bg-blue-50 dark:bg-blue-900/20'),
        stale: () => themedAuto('border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'),

        // Query optimization
        optimistic: () => 'opacity-75 transition-opacity duration-200',
        confirmed: () => 'opacity-100',
        refetching: () => 'animate-pulse',
      },
    },

    // Monitoring and debugging
    monitoring: {
      // Performance metrics
      metrics: {
        good: () =>
          themedAuto('text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/20'),
        needsImprovement: () =>
          themedAuto('text-yellow-600 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/20'),
        poor: () => themedAuto('text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/20'),
      },

      // Error boundaries
      errorBoundary: {
        container: () =>
          themedAuto(
            'border border-red-300 dark:border-red-700 bg-red-50 dark:bg-red-900/20 rounded-lg p-4'
          ),
        title: () => themedAuto('text-lg font-semibold text-red-800 dark:text-red-200'),
        message: () => themedAuto('text-red-700 dark:text-red-300 mt-2'),
        retry: () =>
          themedAuto(
            'mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500'
          ),
        fallback: () => themedAuto('text-center text-gray-500 dark:text-gray-400 py-8'),
      },
    },

    // Resource optimization
    resource: {
      // Image optimization
      image: {
        // Responsive images
        responsive: () => 'w-full h-auto object-cover',
        hero: () => 'w-full h-[50vh] object-cover',
        thumbnail: () => 'w-16 h-16 object-cover rounded',
        avatar: () => 'w-10 h-10 object-cover rounded-full',

        // Loading states
        placeholder: () => themedAuto('bg-gray-200 dark:bg-gray-700 animate-pulse'),
        blurred: () => 'filter blur-sm',
        sharp: () => 'filter blur-none transition-all duration-300',
      },

      // Critical resources
      critical: {
        // Above the fold
        aboveFold: () => 'will-change-contents',
        belowFold: () => 'will-change-auto',
      },
    },

    // Database and API optimization
    data: {
      // Query optimization
      query: {
        cached: () => 'opacity-100',
        loading: () => 'opacity-75 animate-pulse',
        error: () => themedAuto('opacity-50 text-red-600 dark:text-red-400'),

        // REST optimization
        fresh: () => themedAuto('border-l-2 border-green-500'),
        stale: () => themedAuto('border-l-2 border-yellow-500'),
        invalid: () => themedAuto('border-l-2 border-red-500'),

        // Optimistic updates
        optimistic: () => 'opacity-75',
        confirmed: () => 'opacity-100',
        reverted: () => 'opacity-50 line-through',
      },

      // Real-time optimization
      realtime: {
        // WebSocket states
        connected: () => themedAuto('border-green-500 bg-green-50 dark:bg-green-900/20'),
        connecting: () => themedAuto('border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20'),
        disconnected: () => themedAuto('border-red-500 bg-red-50 dark:bg-red-900/20'),

        // Update indicators
        live: () => themedAuto('animate-pulse text-green-600 dark:text-green-400'),
        delayed: () => themedAuto('text-yellow-600 dark:text-yellow-400'),
        offline: () => themedAuto('text-gray-500 dark:text-gray-400'),
      },
    },
  },
} as const;

export { variants };
