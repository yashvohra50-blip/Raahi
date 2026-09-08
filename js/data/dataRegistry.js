/**
 * RAAHI // Unified Data Registry & Backwards-Compatible Facade
 */

import { STATES_DATA } from './statesData.js';
import { DESTINATIONS_DATA } from './destinationsData.js';
import { EXPERIENCES_DATA } from './experiencesData.js';
import { STAYS_DATA } from './staysData.js';

export class DataRegistry {
  static getStates() {
    return Object.values(STATES_DATA).map(s => this._normalizeState(s));
  }

  static getAllStates() {
    return this.getStates();
  }

  static getState(slug) {
    if (!slug) return null;
    const clean = slug.toLowerCase().trim();
    const raw = STATES_DATA[clean] || Object.values(STATES_DATA).find(s => s.id === clean || s.slug === clean || s.name.toLowerCase() === clean || s.id.toLowerCase() === clean) || null;
    return raw ? this._normalizeState(raw) : null;
  }

  static getDestinations() {
    return Object.values(DESTINATIONS_DATA).map(d => this._normalizeDestination(d));
  }

  static getAllDestinations() {
    return this.getDestinations();
  }

  static getDestination(idOrSlug) {
    if (!idOrSlug) return null;
    const clean = idOrSlug.toLowerCase().trim();
    
    // Direct matches
    let raw = DESTINATIONS_DATA[clean] || Object.values(DESTINATIONS_DATA).find(d => d.slug === clean || d.id === clean);
    
    // Name match
    if (!raw) {
      raw = Object.values(DESTINATIONS_DATA).find(d => d.name.toLowerCase() === clean.replace(/-/g, ' '));
    }

    // Landmark / Attraction fallback aliases
    if (!raw) {
      if (clean === 'taj-mahal' || clean === 'agra-fort' || clean === 'fatehpur-sikri') raw = DESTINATIONS_DATA['agra'];
      else if (clean === 'key-monastery' || clean === 'spiti-key-monastery') raw = DESTINATIONS_DATA['spiti-valley'];
      else if (clean === 'fort-aguada' || clean === 'aguada-fort' || clean === 'basilica-bom-jesus') raw = DESTINATIONS_DATA['north-goa'] || DESTINATIONS_DATA['goa'];
      else if (clean === 'dashashwamedh-ghat' || clean === 'assi-ghat' || clean === 'kashi-vishwanath') raw = DESTINATIONS_DATA['varanasi'];
      else if (clean === 'munnar-tea' || clean === 'eravikulam-national-park') raw = DESTINATIONS_DATA['munnar'];
      else if (clean === 'hadimba-temple' || clean === 'solang-valley') raw = DESTINATIONS_DATA['manali'];
      else if (clean === 'hawa-mahal' || clean === 'city-palace-jaipur' || clean === 'jantar-mantar' || clean === 'jal-mahal' || clean === 'panna-meena') raw = DESTINATIONS_DATA['amber-fort'] || DESTINATIONS_DATA['jaipur'];
      else {
        // Deep attraction search
        raw = Object.values(DESTINATIONS_DATA).find(d => 
          d.attractions && d.attractions.some(a => a.name.toLowerCase().replace(/[^a-z0-9]/g, '-').includes(clean) || clean.includes(a.name.toLowerCase().replace(/[^a-z0-9]/g, '-')))
        );
      }
    }

    return raw ? this._normalizeDestination(raw) : null;
  }

  static getDestinationsByState(stateSlugOrId) {
    const state = this.getState(stateSlugOrId);
    if (!state) return [];
    return this.getDestinations().filter(d => d.stateSlug === state.slug || d.stateId === state.id || d.state.toLowerCase() === state.name.toLowerCase());
  }

  static getDestinationsByRegion(region) {
    if (!region || region === 'all') return this.getDestinations();
    return this.getDestinations().filter(d => d.region.toLowerCase() === region.toLowerCase());
  }

  static getExperiences() {
    return EXPERIENCES_DATA;
  }

  static getStays() {
    return STAYS_DATA;
  }

  static getCounts() {
    const states = Object.values(STATES_DATA).filter(s => s.type === 'state').length;
    const uts = Object.values(STATES_DATA).filter(s => s.type === 'ut').length;
    const destinations = Object.keys(DESTINATIONS_DATA).length;
    return { states, uts, totalAdmin: states + uts, destinations };
  }

  static _normalizeState(s) {
    const isUt = s.type === 'ut' || s.type === 'Union Territory';
    return {
      ...s,
      type: isUt ? 'Union Territory' : 'State',
      rawType: s.type,
      destinationsCount: s.destinationsCount || (DESTINATIONS_DATA ? Object.values(DESTINATIONS_DATA).filter(d => d.stateSlug === s.slug || d.stateId === s.id).length : 3)
    };
  }

  static _normalizeDestination(d) {
    const lat = typeof d.latitude === 'number' ? d.latitude : (d.coordinates ? d.coordinates.lat : 26.9855);
    const lng = typeof d.longitude === 'number' ? d.longitude : (d.coordinates ? d.coordinates.lng : 75.8513);
    return {
      ...d,
      latitude: lat,
      longitude: lng,
      coordinates: { lat, lng },
      heroImage: d.image || d.heroImage || (d.gallery && d.gallery[0]) || 'assets/images/destinations/amber-fort.jpg',
      overview: d.description || d.overview || d.shortDescription || 'An iconic historical landmark in India.',
      tagline: d.shortDescription || d.tagline || d.type,
      bestSeason: d.bestTimeToVisit || d.bestSeason || 'Oct to Mar'
    };
  }
}

// Backwards-compatible export mapping for existing components
export const RAAHI_DATA = {
  states: STATES_DATA,
  cities: DESTINATIONS_DATA,
  places: DESTINATIONS_DATA
};
