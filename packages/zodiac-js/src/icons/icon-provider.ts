/**
 * Icon provider.
 *
 * Resolves icons for Zodiac signs and Chinese animals.
 * Supports built-in SVG icons, custom icons, and no-icon mode.
 */

import type { ZodiacIcon } from '../models/zodiac-icon';

// In-memory store for custom icon mapping
const customIconMap = new Map<string, string>();

/**
 * Sets custom icon paths globally.
 * @param mapping A dictionary mapping sign/animal IDs to custom paths/URLs
 */
export function setCustomIcons(mapping: Record<string, string>): void {
  for (const [id, path] of Object.entries(mapping)) {
    customIconMap.set(id, path);
  }
}

/**
 * Clears any globally set custom icons.
 */
export function clearCustomIcons(): void {
  customIconMap.clear();
}

/**
 * Resolves the Western Zodiac icon based on the requested mode.
 */
export function getWesternIcon(id: string, mode: 'builtin' | 'custom' | 'none'): ZodiacIcon {
  if (mode === 'none') {
    return { id, type: 'none' };
  }
  
  if (mode === 'custom') {
    return { id, type: 'custom', path: customIconMap.get(id) ?? id };
  }
  
  // mode === 'builtin'
  // Note: Actual SVG strings will be injected here during Phase 5
  return { id, type: 'builtin', svg: `<svg data-icon="western-${id}"></svg>` };
}

/**
 * Resolves the Chinese Zodiac icon based on the requested mode.
 */
export function getChineseIcon(id: string, mode: 'builtin' | 'custom' | 'none'): ZodiacIcon {
  if (mode === 'none') {
    return { id, type: 'none' };
  }
  
  if (mode === 'custom') {
    return { id, type: 'custom', path: customIconMap.get(id) ?? id };
  }
  
  // mode === 'builtin'
  // Note: Actual SVG strings will be injected here during Phase 5
  return { id, type: 'builtin', svg: `<svg data-icon="chinese-${id}"></svg>` };
}

/**
 * Resolves the Indian Zodiac icon by using its Western equivalent.
 */
export function getIndianIcon(rashiId: string, westernEquivalent: string, mode: 'builtin' | 'custom' | 'none'): ZodiacIcon {
  if (mode === 'none') {
    return { id: rashiId, type: 'none' };
  }
  
  if (mode === 'custom') {
    return { id: rashiId, type: 'custom', path: customIconMap.get(westernEquivalent) ?? westernEquivalent };
  }

  // Builtin returns SVG string placeholder pointing to the western icon
  return { id: rashiId, type: 'builtin', svg: `<svg data-icon="western-${westernEquivalent}"></svg>` };
}
