/**
 * Every theme must keep its text readable.
 *
 * Each pair in `TEXT_PAIRS` — neutral text on every surface, each surface's own
 * `*Foreground`, text on the colored fills, and the colored tokens used as text —
 * has to clear WCAG AA (4.5:1) in every preset, light and dark. So does `primary`
 * on its own 10% tint, the `bg-primary/10 text-primary` pattern behind selected
 * rows and pills.
 *
 * The fleet uses the status colors as text far more than as fills
 * (`text-success`, `text-destructive`, ...), which is why they are checked on
 * `background` and `card` as well as under their own foregrounds.
 */
import { describe, it, expect } from 'vitest';
import { themes } from '../themes/registry';
import { defaultTheme } from '../themes/presets/default';
import {
  MIN_TEXT_CONTRAST,
  TEXT_PAIRS,
  TINT_PAIRS,
  blendOver,
  contrastRatio,
  contrastRatioRgb,
  pairContrast,
  resolveToken,
  tintContrast,
} from '../themes/contrast';

const entries = Object.entries(themes);
const MODES = ['light', 'dark'] as const;

/**
 * Pairs a preset is allowed to miss because the colors involved are pinned to
 * an external source palette ("keeps the source palette intact" in
 * themes.test.ts): navy reproduces sanity-web and radiograph reproduces
 * raidr_web, so moving those values would repaint those sites. Both presets are
 * dark-only, so the same list applies to light and dark.
 *
 * The exemption is checked in reverse: an exempted pair that starts passing
 * fails the test, so the list can only shrink.
 */
const PINNED_PALETTE_EXEMPTIONS: Record<string, readonly string[]> = {
  navy: [
    'foreground on accent',
    'primaryForeground on primary',
    'primary on background',
    'primary on card',
    'primary on popover',
    'primary on muted',
    'primary on well',
    'primary on primary/10 over background',
    'primary on primary/10 over card',
  ],
  radiograph: ['foreground on accent', 'destructive on muted'],
};

function expectReadable(name: string, label: string, ratio: number, context: string) {
  if (PINNED_PALETTE_EXEMPTIONS[name]?.includes(label)) {
    expect(ratio, `${context} now passes; remove it from PINNED_PALETTE_EXEMPTIONS`).toBeLessThan(
      MIN_TEXT_CONTRAST
    );
    return;
  }
  expect(ratio, context).toBeGreaterThanOrEqual(MIN_TEXT_CONTRAST);
}

describe('contrast math', () => {
  it('measures black on white as 21:1', () => {
    expect(contrastRatio('0 0% 0%', '0 0% 100%')).toBeCloseTo(21, 5);
    expect(contrastRatio('0 0% 100%', '0 0% 0%')).toBeCloseTo(21, 5);
  });

  it('measures a color against itself as 1:1', () => {
    expect(contrastRatio('221.2 83.2% 53.3%', '221.2 83.2% 53.3%')).toBeCloseTo(1, 10);
  });

  it('matches a known mid-grey value', () => {
    // #767676 on white is the classic 4.54:1 AA boundary grey.
    expect(contrastRatio('0 0% 46.3%', '0 0% 100%')).toBeCloseTo(4.54, 1);
  });

  it('blends in sRGB space', () => {
    expect(blendOver('0 0% 0%', 0.5, '0 0% 100%')).toEqual([0.5, 0.5, 0.5]);
    expect(blendOver('0 0% 0%', 0, '0 0% 100%')).toEqual([1, 1, 1]);
    expect(contrastRatioRgb('0 0% 0%', [1, 1, 1])).toBeCloseTo(21, 5);
  });

  it('falls back to background/foreground when a theme omits well', () => {
    const rest = { ...defaultTheme.light, well: undefined, wellForeground: undefined };
    expect(resolveToken(rest, 'well')).toBe(rest.background);
    expect(resolveToken(rest, 'wellForeground')).toBe(rest.foreground);
    expect(resolveToken(defaultTheme.light, 'well')).toBe(defaultTheme.light.well);
  });
});

describe('theme text contrast', () => {
  it('has themes to check', () => {
    expect(entries.length).toBeGreaterThan(10);
  });

  for (const [name, theme] of entries) {
    for (const mode of MODES) {
      const tokens = theme[mode];

      describe(`${name}/${mode}`, () => {
        for (const pair of TEXT_PAIRS) {
          const [fg, bg] = pair;
          const label = `${fg} on ${bg}`;
          it(label, () => {
            const ratio = pairContrast(tokens, pair);
            expectReadable(name, label, ratio, `${name}/${mode}: ${label} = ${ratio.toFixed(2)}`);
          });
        }

        for (const pair of TINT_PAIRS) {
          const [text, under] = pair;
          const label = `${text} on ${text}/10 over ${under}`;
          it(label, () => {
            const ratio = tintContrast(tokens, pair);
            expectReadable(name, label, ratio, `${name}/${mode}: ${label} = ${ratio.toFixed(2)}`);
          });
        }

        // "Muted" has to read as secondary, not as a second foreground.
        it('mutedForeground has less contrast than foreground on background', () => {
          const muted = pairContrast(tokens, ['mutedForeground', 'background']);
          const full = pairContrast(tokens, ['foreground', 'background']);
          expect(
            muted,
            `${name}/${mode}: mutedForeground ${muted.toFixed(2)} vs foreground ${full.toFixed(2)}`
          ).toBeLessThan(full);
        });
      });
    }
  }
});
