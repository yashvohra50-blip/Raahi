/**
 * RAAHI // Featured Cities Configuration
 * References existing destination IDs from centralized DESTINATIONS_DATA
 * and uses centralized authentic local assets from destinationImages.js.
 * All 10 iconic cities requested: Jaipur, Varanasi, Udaipur, Mumbai, Goa, Kochi, Srinagar, Leh, Shillong, Darjeeling.
 */

import { DataRegistry } from './dataRegistry.js';
import { DESTINATION_IMAGES, DEFAULT_FALLBACK_IMAGE, getDestinationImage } from './destinationImages.js';

export const FEATURED_CITIES_CONFIG = [
  {
    destinationId: "jaipur",
    displayName: "Jaipur",
    state: "Rajasthan",
    tagline: "The Pink City — a perfect blend of royal heritage, vibrant culture and timeless beauty.",
    category: "Heritage",
    experience: "Culture",
    rating: 4.8,
    reviews: "3.4k",
    image: DESTINATION_IMAGES["jaipur"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#d5b56f"
  },
  {
    destinationId: "varanasi",
    displayName: "Varanasi",
    state: "Uttar Pradesh",
    tagline: "The Spiritual Capital — ancient riverside ghats, celestial evening aartis and sacred mystic traditions.",
    category: "Spiritual",
    experience: "Ghats & Aarti",
    rating: 4.9,
    reviews: "4.1k",
    image: DESTINATION_IMAGES["varanasi"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#f59e0b"
  },
  {
    destinationId: "udaipur",
    displayName: "Udaipur",
    state: "Rajasthan",
    tagline: "The City of Lakes — floating white marble palaces, tranquil boat journeys and sunset panoramas.",
    category: "Heritage",
    experience: "Lakes & Palaces",
    rating: 4.9,
    reviews: "3.1k",
    image: DESTINATION_IMAGES["udaipur"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#93c5fd"
  },
  {
    destinationId: "mumbai",
    displayName: "Mumbai",
    state: "Maharashtra",
    tagline: "The Maximum City — iconic Gateway of India, colonial seafront promenades and boundless cinematic energy.",
    category: "Metropolis",
    experience: "Culture & Sea",
    rating: 4.7,
    reviews: "3.9k",
    image: DESTINATION_IMAGES["mumbai"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#38bdf8"
  },
  {
    destinationId: "north-goa",
    displayName: "Goa",
    state: "Goa",
    tagline: "The Coastal Haven — golden palm-fringed sands, Portuguese colonial fortresses and tropical breezes.",
    category: "Beaches",
    experience: "Coastal Heritage",
    rating: 4.8,
    reviews: "3.6k",
    image: DESTINATION_IMAGES["north-goa"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#10b981"
  },
  {
    destinationId: "kochi",
    displayName: "Kochi",
    state: "Kerala",
    tagline: "Queen of the Arabian Sea — cantilevered Chinese fishing nets, aromatic spice warehouses and colonial art.",
    category: "Coastal",
    experience: "Spice & Heritage",
    rating: 4.8,
    reviews: "2.6k",
    image: DESTINATION_IMAGES["kochi"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#10b981"
  },
  {
    destinationId: "srinagar",
    displayName: "Srinagar",
    state: "Jammu and Kashmir",
    tagline: "Paradise in the Valley — tranquil Shikaras drifting upon Dal Lake beneath snow-capped Himalayan peaks.",
    category: "Nature",
    experience: "Dal Lake & Valleys",
    rating: 4.9,
    reviews: "3.8k",
    image: DESTINATION_IMAGES["srinagar"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#2dd4bf"
  },
  {
    destinationId: "leh",
    displayName: "Leh",
    state: "Ladakh",
    tagline: "The High-Altitude Citadel — ancient Tibetan monasteries perched on moonscapes under deep cobalt skies.",
    category: "Adventure",
    experience: "High Passes & Monasteries",
    rating: 4.9,
    reviews: "3.5k",
    image: DESTINATION_IMAGES["leh"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#fbbf24"
  },
  {
    destinationId: "shillong",
    displayName: "Shillong",
    state: "Meghalaya",
    tagline: "Scotland of the East — rolling pine-covered hills, misty canyon waterfalls and living root bridges.",
    category: "Nature",
    experience: "Pine Hills & Waterfalls",
    rating: 4.7,
    reviews: "2.2k",
    image: DESTINATION_IMAGES["shillong"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#34d399"
  },
  {
    destinationId: "darjeeling",
    displayName: "Darjeeling",
    state: "West Bengal",
    tagline: "Queen of the Hills — emerald tea garden slopes facing the golden dawn light of Mt. Kanchenjunga.",
    category: "Mountains",
    experience: "Himalayan Sunrise",
    rating: 4.8,
    reviews: "2.9k",
    image: DESTINATION_IMAGES["darjeeling"],
    fallbackImage: DEFAULT_FALLBACK_IMAGE,
    accentColor: "#a3e635"
  }
];

/**
 * Resolves featured cities by linking each entry to the master destination database
 */
export function getFeaturedCities() {
  return FEATURED_CITIES_CONFIG.map(config => {
    const dest = DataRegistry.getDestination(config.destinationId);
    const verifiedImage = getDestinationImage(config.destinationId, config.image);
    return {
      id: config.destinationId,
      name: config.displayName || (dest ? dest.name : config.destinationId),
      state: config.state || (dest ? dest.state : "India"),
      stateId: dest ? dest.stateId : "",
      description: config.tagline || (dest ? dest.shortDescription : ""),
      category: config.category || (dest ? dest.type : "Heritage"),
      experience: config.experience || "Discovery",
      rating: config.rating || (dest ? dest.rating : 4.8),
      reviews: config.reviews || "2.8k",
      image: verifiedImage,
      fallbackImage: config.fallbackImage || DEFAULT_FALLBACK_IMAGE,
      accentColor: config.accentColor || "#d5b56f",
      route: dest ? `#/destinations/${dest.slug || dest.id}` : `#/destinations/${config.destinationId}`
    };
  });
}
