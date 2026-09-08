/**
 * RAAHI // Image URL Sanitizer & Canonical Wikimedia State Photo Fallback System
 * Prevents recursive onerror loops and sanitizes raw Unsplash photo IDs.
 */

export const CANONICAL_STATE_PHOTOS = {
  "delhi": "https://commons.wikimedia.org/wiki/Special:FilePath/Humayun's_Tomb_Delhi.jpg?width=1200",
  "karnataka": "https://commons.wikimedia.org/wiki/Special:FilePath/Stone_Chariot_at_Vittala_Temple_Hampi.jpg?width=1200",
  "maharashtra": "https://commons.wikimedia.org/wiki/Special:FilePath/Shaniwarwada_Fort_Pune.jpg?width=1200",
  "uttar pradesh": "https://commons.wikimedia.org/wiki/Special:FilePath/Dashashwamedh_Ghat_in_Varanasi.jpg?width=1200",
  "uttarakhand": "https://commons.wikimedia.org/wiki/Special:FilePath/Forest_Research_Institute,_Dehradun,_Uttarakhand,_India.jpg?width=1200",
  "kerala": "https://commons.wikimedia.org/wiki/Special:FilePath/Alappuzha_Boat_Beauty_W.jpg?width=1200",
  "rajasthan": "https://commons.wikimedia.org/wiki/Special:FilePath/Mehrangarh_Fort_Jodhpur_India.jpg?width=1200",
  "punjab": "https://commons.wikimedia.org/wiki/Special:FilePath/Golden_Temple_India.jpg?width=1200",
  "goa": "https://commons.wikimedia.org/wiki/Special:FilePath/Basilica_of_Bom_Jesus,_Goa.jpg?width=1200",
  "jammu & kashmir": "https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Lake,_Srinagar.jpg?width=1200",
  "jammu and kashmir": "https://commons.wikimedia.org/wiki/Special:FilePath/Dal_Lake,_Srinagar.jpg?width=1200",
  "ladakh": "https://commons.wikimedia.org/wiki/Special:FilePath/Thiksey_Monastery_Ladakh_India.jpg?width=1200",
  "gujarat": "https://commons.wikimedia.org/wiki/Special:FilePath/Rani_ki_vav_07.jpg?width=1200",
  "tamil nadu": "https://commons.wikimedia.org/wiki/Special:FilePath/Brihadisvara_Temple,_Thanjavur.jpg?width=1200",
  "west bengal": "https://commons.wikimedia.org/wiki/Special:FilePath/Victoria_Memorial_Kolkata_02.jpg?width=1200",
  "himachal pradesh": "https://commons.wikimedia.org/wiki/Special:FilePath/Key_Monastery_Spiti.jpg?width=1200"
};

export function getCanonicalPhotoFallback(key) {
  const clean = (key || '').toLowerCase().trim();
  for (const [k, url] of Object.entries(CANONICAL_STATE_PHOTOS)) {
    if (clean.includes(k) || k.includes(clean)) return url;
  }
  return "https://commons.wikimedia.org/wiki/Special:FilePath/Qutub_Minar,_Delhi.jpg?width=1200";
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
  window.CANONICAL_STATE_PHOTOS = CANONICAL_STATE_PHOTOS;
  window.sanitizeImageUrl = sanitizeImageUrl;
  window.getCanonicalPhotoFallback = getCanonicalPhotoFallback;
  window.handleImageError = handleImageError;
}
