/**
 * RAAHI // Image URL Sanitizer & Canonical Fallback System
 * Prevents recursive onerror loops and sanitizes raw Unsplash photo IDs.
 */

const CANONICAL_FALLBACKS = {
  heritage: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80',
  nature: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  stay: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  city: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80',
  default: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80'
};

export function getCanonicalPhotoFallback(fallbackCategory = 'default') {
  return CANONICAL_FALLBACKS[fallbackCategory] || CANONICAL_FALLBACKS.default;
}

export function sanitizeImageUrl(url, fallbackCategory = 'nature') {
  if (!url || typeof url !== 'string') return getCanonicalPhotoFallback(fallbackCategory);
  let trimmed = url.trim();

  // Fix raw Unsplash IDs missing the domain
  if (trimmed.startsWith('photo-')) {
    trimmed = `https://images.unsplash.com/${trimmed}?auto=format&fit=crop&w=800&q=80`;
  }

  // Ensure protocol
  if (trimmed.startsWith('//')) {
    trimmed = `https:${trimmed}`;
  }

  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://') && !trimmed.startsWith('data:image') && !trimmed.startsWith('assets/')) {
    return getCanonicalPhotoFallback(fallbackCategory);
  }

  return trimmed;
}

/**
 * Non-recursive onerror handler generator.
 * Prevents infinite loop by unsetting onerror before applying fallback.
 */
export function handleImageError(imgEl, fallbackCategory = 'default') {
  if (!imgEl) return;
  imgEl.onerror = null; // Kill infinite fallback loop
  imgEl.src = getCanonicalPhotoFallback(fallbackCategory);
}

// Expose globally for HTML templates and inline handlers
if (typeof window !== 'undefined') {
  window.sanitizeImageUrl = sanitizeImageUrl;
  window.getCanonicalPhotoFallback = getCanonicalPhotoFallback;
  window.handleImageError = handleImageError;
}
