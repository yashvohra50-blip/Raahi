/**
 * RAAHI // Google Places API (New) Dynamic Photo Resolution Engine
 * Dynamically resolves official landmark photography for destination cards,
 * photographic spectrum, and backdrop layers using Google Places API (New).
 */

const _placesEncodedKey = "QVEuQWI4Uk42S0xad3FuZC1yRmtRMjJMUklVcERfTGpZRkhJeUI0MC1ZVHFDVWk2bmp4WXc=";
export const GOOGLE_PLACES_API_KEY = window.GOOGLE_PLACES_API_KEY || (typeof atob !== 'undefined' ? atob(_placesEncodedKey) : "");
export const placePhotoCache = new Map();

/**
 * Searches for a place by name and returns its official cover photo URL using Google Places API (New).
 */
export async function fetchGooglePlacePhoto(placeName, lat, lon) {
  if (!placeName || !GOOGLE_PLACES_API_KEY) {
    return null;
  }

  const cacheKey = placeName.trim().toLowerCase();
  if (placePhotoCache.has(cacheKey)) {
    return placePhotoCache.get(cacheKey);
  }

  try {
    // 1. Text Search (New) to locate place ID and photo reference
    const searchBody = {
      textQuery: placeName,
      maxResultCount: 1
    };
    if (lat && lon && Number.isFinite(parseFloat(lat)) && Number.isFinite(parseFloat(lon))) {
      searchBody.locationBias = {
        circle: {
          center: { latitude: parseFloat(lat), longitude: parseFloat(lon) },
          radius: 15000.0
        }
      };
    }

    const searchRes = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": GOOGLE_PLACES_API_KEY,
        "X-Goog-FieldMask": "places.id,places.displayName,places.photos"
      },
      body: JSON.stringify(searchBody)
    });

    if (!searchRes.ok) return null;
    const searchData = await searchRes.json();
    const photoRef = searchData.places?.[0]?.photos?.[0]?.name;

    if (!photoRef) return null;

    // 2. Build direct Google photo URI
    const photoUrl = `https://places.googleapis.com/v1/${photoRef}/media?maxHeightPx=800&maxWidthPx=1000&key=${GOOGLE_PLACES_API_KEY}`;
    placePhotoCache.set(cacheKey, photoUrl);
    return photoUrl;
  } catch (err) {
    console.warn(`[Google Places] Photo fetch failed for "${placeName}":`, err);
    return null;
  }
}

/**
 * Asynchronously enhances all images on the active page with data-google-photo-query attribute.
 */
export function enhanceImagesWithGooglePlaces() {
  const elements = document.querySelectorAll('[data-google-photo-query]');
  elements.forEach(async (el) => {
    const query = el.getAttribute('data-google-photo-query');
    const lat = el.getAttribute('data-lat');
    const lon = el.getAttribute('data-lon');
    if (!query) return;

    const photoUrl = await fetchGooglePlacePhoto(query, lat, lon);
    if (photoUrl) {
      if (el.tagName === 'IMG') {
        el.src = photoUrl;
      } else {
        el.style.backgroundImage = `url('${photoUrl}')`;
      }
    }
  });
}

// Expose globally for inline script access
if (typeof window !== 'undefined') {
  window.fetchGooglePlacePhoto = fetchGooglePlacePhoto;
  window.enhanceImagesWithGooglePlaces = enhanceImagesWithGooglePlaces;
  window.GOOGLE_PLACES_API_KEY = GOOGLE_PLACES_API_KEY;
}
