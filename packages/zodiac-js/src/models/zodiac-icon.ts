/**
 * Zodiac icon model.
 *
 * Represents an icon reference that can be a built-in SVG,
 * a custom path, or absent (no-icon mode).
 */
export interface ZodiacIcon {
  /** The sign/animal ID this icon belongs to */
  readonly id: string;

  /** Whether this is a built-in icon or custom */
  readonly type: 'builtin' | 'custom' | 'none';

  /** SVG string content (for built-in icons) */
  readonly svg?: string;

  /** Custom path or URL (for custom icons) */
  readonly path?: string;
}
