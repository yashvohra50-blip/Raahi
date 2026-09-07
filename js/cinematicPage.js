/**
 * RAAHI // Dedicated Cinematic Route Coordinator
 * Hooks #/cinematic/:placeId to CinematicEngine
 */

import { CinematicEngine } from './cinematicEngine.js';

let currentEngineInstance = null;

export function renderCinematicRoute(placeId) {
  const container = document.getElementById('view-cinematic');
  if (!container) return;

  // Cleanup old engine if any
  if (currentEngineInstance) {
    currentEngineInstance.destroy();
    currentEngineInstance = null;
  }

  document.title = `Amber Fort — Cinematic Exploration | RAAHI`;

  // Instantiate new interactive engine
  currentEngineInstance = new CinematicEngine(placeId || 'amber-fort', container);
  window.raahiCinematicEngineInstance = currentEngineInstance;
}
