/**
 * The pieces that make the remaining exports theme-aware: the rule-based
 * palette mapping in `toSemantic`, `themedClasses` tables, the re-assigned
 * focus constants, built-in SimpleVariants fallbacks and `getThemeColor`.
 *
 * Vitest isolates modules per file; the no-theme cases run first.
 */
import { describe, it, expect } from 'vitest';
import { toSemantic } from '../core/variants';
import { themedClasses } from '../core/themed-classes';
import { SimpleVariants } from '../core/simple-variants';
import * as helpers from '../utilities/component-helpers';
import { configureTheme } from '../themes/configure';
import { getThemeColor, hslTokenToCss } from '../themes/theme-color';
import { defaultTheme, swissTheme } from '../themes';

describe('toSemantic — rule-based mapping beyond the explicit table', () => {
  it('maps any hue family to its token, tinting light shades', () => {
    expect(toSemantic('bg-indigo-50 text-violet-700 border-sky-200')).toBe(
      'bg-primary/10 text-primary border-info/40'
    );
    expect(toSemantic('bg-emerald-100 text-teal-800 border-rose-500')).toBe(
      'bg-success/15 text-success border-destructive'
    );
    expect(toSemantic('bg-lime-200 bg-orange-300 border-amber-300')).toBe(
      'bg-success/20 bg-warning/30 border-warning/60'
    );
  });

  it('maps every neutral shade by role', () => {
    expect(toSemantic('bg-slate-100 bg-zinc-300 bg-gray-500 bg-stone-700 bg-neutral-950')).toBe(
      'bg-muted bg-border bg-muted-foreground bg-card bg-background'
    );
    expect(toSemantic('text-zinc-950 caret-gray-500 placeholder-gray-400')).toBe(
      'text-foreground caret-muted-foreground placeholder-muted-foreground'
    );
    expect(toSemantic('border-r-gray-400 divide-slate-100 outline-gray-800')).toBe(
      'border-r-input divide-border outline-border'
    );
    expect(toSemantic('ring-gray-300 ring-offset-gray-100 shadow-gray-900/20')).toBe(
      'ring-ring ring-offset-background shadow-foreground/20'
    );
    expect(toSemantic('from-gray-100 via-gray-500 to-gray-900 fill-gray-200')).toBe(
      'from-muted via-muted-foreground to-foreground fill-muted'
    );
  });

  it('maps white and black, leaving text-white and the bg-black scrim alone', () => {
    expect(toSemantic('ring-offset-white border-white/20 to-white fill-black')).toBe(
      'ring-offset-background border-background/20 to-background fill-foreground'
    );
    expect(toSemantic('text-black bg-black/50 text-white')).toBe(
      'text-foreground bg-black/50 text-white'
    );
    expect(toSemantic('size-white grid-black')).toBe('size-white grid-black');
  });

  it('keeps an explicit opacity over the tint the mapping chose', () => {
    expect(toSemantic('bg-purple-50/40 text-blue-600/80')).toBe('bg-primary/40 text-primary/80');
  });

  it('maps colour utilities for unknown hues to nothing', () => {
    expect(toSemantic('bg-brand-500 text-mauve-300')).toBe('bg-brand-500 text-mauve-300');
  });

  it('steps hover and active down in opacity instead of to a darker shade', () => {
    expect(toSemantic('bg-green-600 hover:bg-green-700 active:bg-green-800')).toBe(
      'bg-success hover:bg-success/90 active:bg-success/80'
    );
    expect(toSemantic('hover:bg-gray-200')).toBe('hover:bg-muted');
  });

  it('keeps depth in a gradient and reads its pink stop as decoration', () => {
    expect(toSemantic('from-blue-600 via-purple-600 to-pink-600')).toBe(
      'from-primary via-primary/90 to-primary/80'
    );
    expect(toSemantic('from-red-500 to-red-700')).toBe('from-destructive to-destructive/80');
    expect(toSemantic('from-blue-600 to-purple-600 text-white')).toBe(
      'from-primary to-primary/80 text-primary-foreground'
    );
  });

  it('inverts white text on a dark neutral surface instead of darkening the page', () => {
    expect(toSemantic('bg-gray-900 text-white px-2')).toBe('bg-foreground text-background px-2');
    expect(toSemantic('bg-black text-white')).toBe('bg-foreground text-background');
  });
});

const LEGACY_TABLE = { a: 'bg-blue-600', nested: { b: 'text-gray-500' }, n: 3 } as const;
const table = themedClasses(LEGACY_TABLE, { nested: { b: 'text-custom' } });
const legacyFocusRing = helpers.focusRing;

describe('with no theme configured', () => {
  it('themedClasses tables answer with the legacy strings', () => {
    expect(table.a).toBe('bg-blue-600');
    expect(table.nested.b).toBe('text-gray-500');
    expect((table as unknown as { n: number }).n).toBe(3);
    expect(Object.keys(table)).toEqual(['a', 'nested', 'n']);
  });

  it('getThemeColor has nothing to answer with', () => {
    expect(getThemeColor('primary')).toBeUndefined();
  });
});

describe('once a theme is configured (after these modules loaded)', () => {
  it('themedClasses tables answer for it, with overrides where given', () => {
    configureTheme(defaultTheme);
    expect(table.a).toBe('bg-primary');
    expect(table.nested.b).toBe('text-custom');
  });

  it('focusRing and focusVisible are re-assigned for it', () => {
    configureTheme(defaultTheme);
    expect(legacyFocusRing).toContain('ring-blue-500');
    expect(helpers.focusRing).toBe(
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
    );
    expect(helpers.focusVisible).toContain('focus-visible:ring-ring');
  });

  it('helpers emit the theme’s tokens', () => {
    configureTheme(defaultTheme);
    expect(helpers.buttonVariant('destructive')).toContain(
      'bg-destructive text-destructive-foreground'
    );
    expect(helpers.buttonVariant('ghost')).toContain('hover:bg-accent');
    expect(helpers.inputVariant('error')).toContain('border-destructive');
    expect(helpers.cardVariant('elevated')).toBe('rounded-lg bg-card shadow-md');
    expect(helpers.textVariant('lg', 'bold', 'primary')).toBe('text-lg font-bold text-primary');
  });

  it('SimpleVariants themes its built-in fallbacks but not a caller’s own', () => {
    configureTheme(defaultTheme);
    const resolver = new SimpleVariants({});
    expect(resolver.get('button', 'primary')).toBe(
      'bg-primary text-primary-foreground px-4 py-2 rounded'
    );
    resolver.addFallback('button.primary', 'bg-blue-600 text-white');
    expect(resolver.get('button', 'primary')).toBe('bg-blue-600 text-white');
    expect(resolver.get('nothing', 'here')).toBe('');
  });

  it('getThemeColor converts the theme’s channels to a colour string', () => {
    configureTheme(swissTheme);
    expect(getThemeColor('primary')).toBe('hsl(0, 84%, 43.3%)');
    expect(getThemeColor('primary', 'dark', 0.4)).toBe('hsla(0, 84%, 61.6%, 0.4)');
    expect(hslTokenToCss(' 210  40% 96% ')).toBe('hsl(210, 40%, 96%)');
    expect(getThemeColor('well', 'light')).toBe(
      swissTheme.light.well ? hslTokenToCss(swissTheme.light.well) : undefined
    );
  });

  it('getThemeColor answers undefined for a token the theme leaves out', () => {
    configureTheme({ ...swissTheme, light: { ...swissTheme.light, well: undefined } });
    expect(getThemeColor('well')).toBeUndefined();
  });
});
