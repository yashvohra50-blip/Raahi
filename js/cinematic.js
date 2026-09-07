/**
 * RAAHI // Cinematic Mode Orchestrator
 * Immersive stage-based visual tour with interactive hotspots and ESC support.
 */

import { RAAHI_DATA } from './data.js';

let currentDestination = null;
let currentStageIndex = 0;

export function initCinematicEngine() {
  const overlay = document.getElementById('cinematic-overlay');
  const closeBtn = document.getElementById('cinematic-close-btn');
  const nextBtn = document.getElementById('stage-next-btn');
  const prevBtn = document.getElementById('stage-prev-btn');
  const hotspotCloseBtn = document.getElementById('hotspot-drawer-close');

  closeBtn?.addEventListener('click', closeCinematicMode);
  hotspotCloseBtn?.addEventListener('click', closeHotspotDrawer);

  nextBtn?.addEventListener('click', () => {
    if (!currentDestination) return;
    const stages = currentDestination.cinematicStages;
    if (currentStageIndex < stages.length - 1) {
      setStage(currentStageIndex + 1);
    }
  });

  prevBtn?.addEventListener('click', () => {
    if (currentStageIndex > 0) {
      setStage(currentStageIndex - 1);
    }
  });

  // ESC Keyboard Handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const drawer = document.getElementById('hotspot-modal-drawer');
      if (drawer && drawer.classList.contains('active')) {
        closeHotspotDrawer();
      } else if (overlay && overlay.classList.contains('active')) {
        closeCinematicMode();
      }
    }
  });
}

export function launchCinematicMode(destId) {
  const dest = RAAHI_DATA.destinations[destId];
  if (!dest || !dest.cinematicStages) {
    alert('Cinematic mode is currently available for Amber Fort (Rajasthan). More destinations coming online soon!');
    return;
  }

  currentDestination = dest;
  currentStageIndex = 0;

  const overlay = document.getElementById('cinematic-overlay');
  const destLabel = document.getElementById('cinematic-dest-name');

  if (destLabel) destLabel.textContent = `${dest.name} // ${dest.city.toUpperCase()}`;

  setStage(0);

  overlay.classList.add('active');
  document.body.classList.add('lock-scroll');
}

export function closeCinematicMode() {
  const overlay = document.getElementById('cinematic-overlay');
  closeHotspotDrawer();
  if (overlay) {
    overlay.classList.remove('active');
  }
  document.body.classList.remove('lock-scroll');
}

function setStage(index) {
  if (!currentDestination) return;
  const stages = currentDestination.cinematicStages;
  currentStageIndex = index;

  const stage = stages[index];
  const bgImage = document.getElementById('cinematic-bg-img');
  const stageNumTag = document.getElementById('cinematic-stage-num');
  const stageTitle = document.getElementById('cinematic-stage-title');
  const stageCaption = document.getElementById('cinematic-stage-caption');
  const hotspotsLayer = document.getElementById('cinematic-hotspots-layer');

  if (bgImage) {
    bgImage.style.backgroundImage = `url("${stage.image}")`;
  }
  if (stageNumTag) stageNumTag.textContent = `STAGE ${stage.stageNum} // ${stages.length.toString().padStart(2, '0')}`;
  if (stageTitle) stageTitle.textContent = stage.title;
  if (stageCaption) stageCaption.textContent = stage.caption;

  // Render Hotspots if on the Interactive Matrix Stage
  if (stage.id === 'fort-matrix' && currentDestination.hotspots) {
    renderHotspots(currentDestination.hotspots);
  } else {
    if (hotspotsLayer) hotspotsLayer.innerHTML = '';
  }
}

function renderHotspots(hotspots) {
  const layer = document.getElementById('cinematic-hotspots-layer');
  if (!layer) return;

  layer.innerHTML = hotspots.map((spot) => `
    <div class="cinematic-beacon" style="left: ${spot.x}%; top: ${spot.y}%;" data-id="${spot.id}">
      <div class="beacon-pulse-wrapper">
        <div class="beacon-wave"></div>
        <div class="beacon-dot"></div>
      </div>
      <div class="beacon-label">${spot.name}</div>
    </div>
  `).join('');

  layer.querySelectorAll('.cinematic-beacon').forEach((beacon) => {
    beacon.addEventListener('click', () => {
      const spotId = beacon.dataset.id;
      const spot = hotspots.find((h) => h.id === spotId);
      if (spot) openHotspotDrawer(spot);
    });
  });
}

function openHotspotDrawer(spot) {
  const drawer = document.getElementById('hotspot-modal-drawer');
  const title = document.getElementById('hotspot-drawer-title');
  const subtext = document.getElementById('hotspot-drawer-sub');
  const img = document.getElementById('hotspot-drawer-img');
  const details = document.getElementById('hotspot-drawer-details');

  if (!drawer) return;

  if (title) title.textContent = spot.name;
  if (subtext) subtext.textContent = spot.short;
  if (img) img.src = spot.image;
  if (details) details.textContent = spot.details;

  drawer.classList.add('active');
}

export function closeHotspotDrawer() {
  const drawer = document.getElementById('hotspot-modal-drawer');
  if (drawer) drawer.classList.remove('active');
}

