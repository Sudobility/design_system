/**
 * Theme contrast math (internal).
 *
 * WCAG 2.x contrast ratios for the HSL-channel strings the theme presets store
 * (`'221.2 83.2% 53.3%'`), plus the list of token pairs every preset has to keep
 * readable. `theme-contrast.test.ts` holds each theme to those pairs; this module
 * is deliberately not exported from the package entry.
 */

import type { ThemeTokens } from './types';

/** An sRGB color with channels in 0..1. */
export type Rgb = [number, number, number];

/** WCAG AA minimum for body text. */
export const MIN_TEXT_CONTRAST = 4.5;

/** Opacity of the `bg-primary/10 text-primary` tint (selected rows, pills). */
export const TINT_ALPHA = 0.1;

/** Parse `'H S% L%'` into sRGB channels in 0..1. */
export function hslToRgb(hsl: string): Rgb {
  const [h, s, l] = hsl
    .trim()
    .split(/\s+/)
    .map((part) => parseFloat(part));
  const sat = s / 100;
  const light = l / 100;
  const a = sat * Math.min(light, 1 - light);
  const channel = (n: number): number => {
    const k = (n + h / 30) % 12;
    return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [channel(0), channel(8), channel(4)];
}

/** WCAG 2.x relative luminance of an sRGB color. */
export function relativeLuminance([r, g, b]: Rgb): number {
  const linear = (v: number): number => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
}

function ratioOfLuminances(x: number, y: number): number {
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
}

/** Contrast ratio (1..21) between an HSL string and an sRGB color. */
export function contrastRatioRgb(a: string, rgb: Rgb): number {
  return ratioOfLuminances(relativeLuminance(hslToRgb(a)), relativeLuminance(rgb));
}

/** Contrast ratio (1..21) between two HSL strings. Order does not matter. */
export function contrastRatio(a: string, b: string): number {
  return contrastRatioRgb(a, hslToRgb(b));
}

/** Composite `top` at `alpha` over the opaque `under`, in sRGB space like a browser. */
export function blendOver(top: string, alpha: number, under: string): Rgb {
  const t = hslToRgb(top);
  const u = hslToRgb(under);
  return [0, 1, 2].map((i) => t[i] * alpha + u[i] * (1 - alpha)) as Rgb;
}

/** Color roles that take part in a contrast pair. */
export type ContrastToken =
  | 'background'
  | 'foreground'
  | 'card'
  | 'cardForeground'
  | 'popover'
  | 'popoverForeground'
  | 'primary'
  | 'primaryForeground'
  | 'secondary'
  | 'secondaryForeground'
  | 'muted'
  | 'mutedForeground'
  | 'accent'
  | 'accentForeground'
  | 'destructive'
  | 'destructiveForeground'
  | 'success'
  | 'successForeground'
  | 'warning'
  | 'warningForeground'
  | 'info'
  | 'infoForeground'
  | 'well'
  | 'wellForeground';

/**
 * Read a color role, applying the same fallbacks as `generateThemeCSS`:
 * `well` renders as `background` and `wellForeground` as `foreground` when a
 * theme omits them.
 */
export function resolveToken(tokens: ThemeTokens, token: ContrastToken): string {
  if (token === 'well') return tokens.well ?? tokens.background;
  if (token === 'wellForeground') return tokens.wellForeground ?? tokens.foreground;
  return tokens[token];
}

/** Text-on-surface pairs, each `[foreground, background]`. */
export const TEXT_PAIRS: ReadonlyArray<readonly [ContrastToken, ContrastToken]> = [
  // Neutral text on every surface
  ['foreground', 'background'],
  ['foreground', 'card'],
  ['foreground', 'popover'],
  ['foreground', 'muted'],
  ['foreground', 'secondary'],
  ['foreground', 'accent'],
  ['foreground', 'well'],
  ['mutedForeground', 'background'],
  ['mutedForeground', 'card'],
  ['mutedForeground', 'popover'],
  ['mutedForeground', 'muted'],
  ['mutedForeground', 'well'],
  // Each surface's own text
  ['cardForeground', 'card'],
  ['popoverForeground', 'popover'],
  ['wellForeground', 'well'],
  ['secondaryForeground', 'secondary'],
  ['accentForeground', 'accent'],
  // Text on fills
  ['primaryForeground', 'primary'],
  ['destructiveForeground', 'destructive'],
  ['successForeground', 'success'],
  ['warningForeground', 'warning'],
  ['infoForeground', 'info'],
  // Colored text on every surface it can land on. The fleet uses the status
  // colors and `primary` as text far more than as fills (`text-success`,
  // `text-primary`, ...), and drops them onto recessed surfaces too — the
  // stat tiles on every design page are `text-success`/`text-warning` over
  // `bg-muted`. So each is held to AA on `background`, `card`, `popover`, and
  // the recessed `muted` and `well` planes, not just the raised surfaces.
  ['primary', 'background'],
  ['primary', 'card'],
  ['primary', 'popover'],
  ['primary', 'muted'],
  ['primary', 'well'],
  ['destructive', 'background'],
  ['destructive', 'card'],
  ['destructive', 'popover'],
  ['destructive', 'muted'],
  ['destructive', 'well'],
  ['success', 'background'],
  ['success', 'card'],
  ['success', 'popover'],
  ['success', 'muted'],
  ['success', 'well'],
  ['warning', 'background'],
  ['warning', 'card'],
  ['warning', 'popover'],
  ['warning', 'muted'],
  ['warning', 'well'],
  ['info', 'background'],
  ['info', 'card'],
  ['info', 'popover'],
  ['info', 'muted'],
  ['info', 'well'],
];

/**
 * Colored text on its own tint: `text` over `text` at {@link TINT_ALPHA} composited
 * onto `under` — the `bg-primary/10 text-primary` pattern.
 */
export const TINT_PAIRS: ReadonlyArray<readonly [text: ContrastToken, under: ContrastToken]> = [
  ['primary', 'background'],
  ['primary', 'card'],
];

/** Contrast of a {@link TEXT_PAIRS} entry within one token set. */
export function pairContrast(
  tokens: ThemeTokens,
  [fg, bg]: readonly [ContrastToken, ContrastToken]
): number {
  return contrastRatio(resolveToken(tokens, fg), resolveToken(tokens, bg));
}

/** Contrast of a {@link TINT_PAIRS} entry within one token set. */
export function tintContrast(
  tokens: ThemeTokens,
  [text, under]: readonly [ContrastToken, ContrastToken]
): number {
  const color = resolveToken(tokens, text);
  return contrastRatioRgb(color, blendOver(color, TINT_ALPHA, resolveToken(tokens, under)));
}
