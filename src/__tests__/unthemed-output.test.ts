/**
 * With no theme configured, output is the legacy palette, unchanged: hosts
 * that never call `configureTheme()` must render exactly as they did before
 * the exports became theme-aware.
 *
 * Every string reachable from the web entry is hashed (see `collectStrings`).
 * The stored hash is the output of the release before the theme-coverage
 * work; if it changes, an un-themed host's rendering changed with it.
 * Vitest isolates modules per test file, so no theme is active here.
 */
import { createHash } from 'node:crypto';
import { describe, it, expect } from 'vitest';
import * as design from '../index';
import { getActiveTheme } from '../themes/configure';
import { collectStrings } from './_walk';

/**
 * Every string, and their hash, as the current release emits them. Rebaselined
 * when the dropdown `trigger`/`triggerBordered` variants gained `cursor-pointer`
 * so the dropdown control shows a pointer cursor like other clickable controls.
 * (Previously rebaselined when the default medium `button`/`input` variants
 * gained an explicit `h-10` for a shared control height.)
 */
const BASELINE_SIZE = 60179;
const BASELINE_HASH = '13d75d1e1965099ee5976d03d334233f0d71a720252640fd658681b01f5a8a3b';

/** Changes the theme, or added with the theme-coverage work (not in the baseline). */
const SKIP = new Set(['configureTheme', 'getThemeColor', 'hslTokenToCss']);

describe('with no theme configured', () => {
  it('emits exactly the legacy output', () => {
    expect(getActiveTheme()).toBeNull();
    const strings = collectStrings(design as Record<string, unknown>, SKIP);
    const digest = createHash('sha256');
    for (const [path, value] of strings) digest.update(`${path}\u0000${value}\u0001`);
    expect(strings.size).toBe(BASELINE_SIZE);
    expect(digest.digest('hex')).toBe(BASELINE_HASH);
  });

  it('keeps the legacy palette in the helpers that became theme-aware', () => {
    expect(design.buttonVariant('primary')).toContain('bg-blue-600');
    expect(design.focusRing).toContain('focus:ring-blue-500');
    expect(design.textVariant()).toContain('text-gray-900');
    expect(design.GRADIENTS.buttons.primary).toContain('from-blue-600');
    expect(design.statusIndicatorColors.success).toBe('bg-green-500');
    expect(design.getThemeColor('primary')).toBeUndefined();
  });
});
