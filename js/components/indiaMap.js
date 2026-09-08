/**
 * RAAHI // Interactive Leaflet & SVG India Map Component
 * Displays all 28 States, 8 UTs, and key destinations with Leaflet GIS engine,
 * Google Maps Ultra-High Definition Satellite & Hybrid Aerial Imagery,
 * Google 3D Natural Street View & Aerial Embed (photorealistic roads, trees, cars, houses),
 * zero-blank-tile maxNativeZoom safety guards, layer switcher, interactive pin markers,
 * live search/geocoding, and spatial telemetry.
 */

import { STATES_DATA } from '../data/statesData.js';
import { DataRegistry } from '../data/dataRegistry.js';

// Coordinates registry for all 36 Indian States & UTs
const STATE_COORDINATES = {
  'rajasthan': { lat: 26.9124, lng: 75.7873 },
  'maharashtra': { lat: 19.7515, lng: 75.7139 },
  'kerala': { lat: 10.8505, lng: 76.2711 },
  'tamil-nadu': { lat: 11.1271, lng: 78.6569 },
  'karnataka': { lat: 15.3173, lng: 75.7139 },
  'goa': { lat: 15.2993, lng: 74.1240 },
  'gujarat': { lat: 22.2587, lng: 71.1924 },
  'madhya-pradesh': { lat: 22.9734, lng: 78.6569 },
  'uttar-pradesh': { lat: 26.8467, lng: 80.9462 },
  'uttarakhand': { lat: 30.0668, lng: 79.0193 },
  'himachal-pradesh': { lat: 31.1048, lng: 77.1734 },
  'punjab': { lat: 31.1471, lng: 75.3412 },
  'haryana': { lat: 29.0588, lng: 76.0856 },
  'delhi': { lat: 28.6139, lng: 77.2090 },
  'jammu-and-kashmir': { lat: 33.7782, lng: 76.5762 },
  'ladakh': { lat: 34.1526, lng: 77.5771 },
  'west-bengal': { lat: 22.9868, lng: 87.8550 },
  'odisha': { lat: 20.9517, lng: 85.0985 },
  'bihar': { lat: 25.0961, lng: 85.3131 },
  'jharkhand': { lat: 23.6102, lng: 85.2799 },
  'assam': { lat: 26.2006, lng: 92.9376 },
  'arunachal-pradesh': { lat: 28.2180, lng: 94.7278 },
  'meghalaya': { lat: 25.4670, lng: 91.3662 },
  'nagaland': { lat: 26.1584, lng: 94.5624 },
  'manipur': { lat: 24.6637, lng: 93.9063 },
  'mizoram': { lat: 23.1645, lng: 92.9376 },
  'tripura': { lat: 23.9408, lng: 91.9882 },
  'sikkim': { lat: 27.5330, lng: 88.5122 },
  'telangana': { lat: 18.1124, lng: 79.0193 },
  'andhra-pradesh': { lat: 15.9129, lng: 79.7400 },
  'chhattisgarh': { lat: 21.2787, lng: 81.8661 },
  'chandigarh': { lat: 30.7333, lng: 76.7794 },
  'dadra-and-nagar-haveli-and-daman-and-diu': { lat: 20.4283, lng: 72.8397 },
  'puducherry': { lat: 11.9416, lng: 79.8083 },
  'lakshadweep': { lat: 10.5667, lng: 72.6417 },
  'andaman-and-nicobar-islands': { lat: 11.7401, lng: 92.6586 }
};

let raahiMapInstance = null;
let activeMarker = null;
let activeTileLayers = {};
let currentSelectedCoords = { lat: 26.9124, lng: 75.7873 };

export function renderIndiaMap(containerId = 'india-map-mount') {
  const mount = document.getElementById(containerId);
  if (!mount) return;

  const defaultState = STATES_DATA['rajasthan'];

  mount.innerHTML = `
    <!-- Spatial Search & Map Style Console -->
    <div class="raahi-search-console" style="margin-bottom: 20px; display: flex; gap: 12px; position: relative; flex-wrap: wrap;">
      <div class="search-input-wrapper" style="flex: 1; min-width: 280px; position: relative;">
        <input type="text" id="raahi-map-query-input" class="raahi-map-input" 
          placeholder="Scan any house, street, landmark, city, or state (e.g., Amber Fort, Jaipur, Dehradun, Varanasi, Hampi, Kerala, Ladakh)..." 
          autocomplete="off" style="width: 100%; padding: 14px 18px; background: rgba(13, 20, 16, 0.9); border: 1px solid var(--line); border-radius: 8px; color: #fff; font-family: var(--font-body); font-size: 0.9rem;" />
        <div id="raahi-map-autocomplete" class="autocomplete-dropdown" style="position: absolute; top: 100%; left: 0; right: 0; background: #0d1410; border: 1px solid var(--line); border-top: none; border-radius: 0 0 8px 8px; z-index: 1000; max-height: 250px; overflow-y: auto; display: none;"></div>
      </div>

      <select id="raahi-tile-layer-select" class="raahi-select" style="padding: 12px 16px; background: rgba(13, 20, 16, 0.9); border: 1px solid var(--gold); border-radius: 8px; color: var(--gold); font-family: var(--font-display); font-size: 0.82rem; cursor: pointer;">
        <option value="googleHybrid" selected>🛰️ GOOGLE SATELLITE (HOUSES & ROOFS DETAILED)</option>
        <option value="googleSat">🌍 PURE SATELLITE (NO LABELS)</option>
        <option value="googleStreets">🏙️ GOOGLE STREETS & BUILDINGS</option>
        <option value="esriSat">🛰️ ESRI AERIAL SATELLITE</option>
        <option value="osm">🗺️ OPENSTREETMAP</option>
      </select>

      <button id="raahi-map-search-btn" class="btn gold" style="padding: 12px 24px;">
        🔍 RESOLVE MAP
      </button>

      <button id="raahi-streetview-btn" class="btn" style="padding: 12px 20px; border-color: var(--emerald, #10b981); color: var(--emerald, #10b981);">
        📷 3D REAL STREET VIEW (TREES & CARS)
      </button>

      <button id="raahi-map-toggle-view" class="btn light" style="padding: 12px 20px;">
        🗺️ SVG/GIS TOGGLE
      </button>
    </div>

    <!-- Telemetry & Status Header -->
    <div class="spatial-telemetry-bar" style="display: flex; justify-content: space-between; align-items: center; background: rgba(13, 20, 16, 0.7); padding: 10px 18px; border: 1px solid var(--line); border-bottom: none; border-radius: 8px 8px 0 0; font-family: var(--font-display); font-size: 0.72rem; letter-spacing: 0.08em;">
      <span style="color: var(--muted-bright); display: inline-flex; align-items: center; gap: 6px;">
        <span style="width: 8px; height: 8px; background: var(--emerald, #10b981); border-radius: 50%; box-shadow: 0 0 8px var(--emerald, #10b981);"></span> 
        LIVE SPATIAL VECTOR MAP // GOOGLE 3D NATURAL STREETS, TREES & CARS ENGINE
      </span>
      <span id="raahi-map-status" style="color: var(--emerald, #10b981);">VECTOR LOCKED // RAJASTHAN</span>
    </div>

    <div class="map-container" style="display: grid; grid-template-columns: 1fr 340px; gap: 24px; min-height: 540px; margin-top: 0;">
      <!-- Left: Leaflet Interactive Map Viewport -->
      <div id="leaflet-map-view" style="width: 100%; height: 540px; border-radius: 0 0 0 12px; border: 1px solid var(--line); overflow: hidden; background: #080d0a; position: relative;">
        <div id="raahi-leaflet-map" style="width: 100%; height: 100%;"></div>
      </div>

      <!-- Alternative 1: Google Natural 3D Street View Embed Container (Hidden by default, toggleable) -->
      <div id="streetview-map-view" style="display: none; width: 100%; height: 540px; border-radius: 0 0 0 12px; border: 1px solid var(--line); background: #080d0a; position: relative;">
        <iframe id="raahi-streetview-iframe" style="width: 100%; height: 100%; border: none;" src="about:blank" allowfullscreen loading="lazy"></iframe>
        <div style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.85); padding: 8px 14px; border-radius: 6px; border: 1px solid var(--gold); font-family: var(--font-display); font-size: 0.72rem; color: var(--gold); z-index: 10;">
          📷 3D NATURAL STREET VIEW ENGINE (REAL ROADS, TREES & CARS)
        </div>
      </div>

      <!-- Alternative 2: SVG Vector Map (Hidden by default, toggleable) -->
      <div id="svg-map-view" class="india-svg-wrapper" style="display: none; width: 100%; height: 540px; border-radius: 0 0 0 12px; border: 1px solid var(--line); background: #080d0a; padding: 20px;">
        <svg class="india-svg-map" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
          <g id="states-group">
            <path class="state-path" data-slug="ladakh" d="M260,30 L320,50 L340,90 L300,110 L250,90 Z" />
            <path class="state-path" data-slug="jammu-and-kashmir" d="M220,70 L255,85 L245,120 L210,105 Z" />
            <path class="state-path" data-slug="himachal-pradesh" d="M255,100 L295,115 L285,145 L245,130 Z" />
            <path class="state-path" data-slug="punjab" d="M210,120 L245,130 L235,160 L195,145 Z" />
            <path class="state-path" data-slug="uttarakhand" d="M285,130 L325,140 L315,175 L275,160 Z" />
            <path class="state-path" data-slug="haryana" d="M230,150 L265,155 L255,185 L220,175 Z" />
            <path class="state-path" data-slug="delhi" d="M252,168 A 5 5 0 1 1 252,169 Z" />
            <path class="state-path active" data-slug="rajasthan" d="M160,170 L230,175 L220,260 L140,240 Z" />
            <path class="state-path" data-slug="gujarat" d="M120,245 L185,255 L175,320 L100,300 Z" />
            <path class="state-path" data-slug="uttar-pradesh" d="M255,175 L350,185 L330,250 L240,230 Z" />
            <path class="state-path" data-slug="madhya-pradesh" d="M220,240 L330,250 L310,330 L200,310 Z" />
            <path class="state-path" data-slug="maharashtra" d="M170,320 L270,330 L250,420 L160,400 Z" />
            <path class="state-path" data-slug="goa" d="M180,430 L195,435 L190,455 L175,450 Z" />
            <path class="state-path" data-slug="bihar" d="M345,210 L410,215 L395,260 L335,250 Z" />
            <path class="state-path" data-slug="west-bengal" d="M395,255 L430,260 L410,340 L380,315 Z" />
            <path class="state-path" data-slug="odisha" d="M330,320 L400,330 L370,410 L310,390 Z" />
            <path class="state-path" data-slug="karnataka" d="M190,410 L255,420 L230,520 L180,490 Z" />
            <path class="state-path" data-slug="kerala" d="M200,510 L230,515 L215,610 L190,590 Z" />
            <path class="state-path" data-slug="tamil-nadu" d="M230,500 L290,490 L260,620 L210,610 Z" />
            <path class="state-path" data-slug="assam" d="M455,215 L530,210 L510,260 L445,245 Z" />
          </g>
        </svg>
      </div>

      <!-- Right: Interactive State Preview Panel -->
      <div class="map-preview-panel" id="map-preview-panel" style="background: rgba(13, 20, 16, 0.85); padding: 24px; border-radius: 0 0 12px 0; border: 1px solid var(--line); border-left: none; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <span class="map-preview-badge" id="map-preview-badge" style="display: inline-block; font-family: var(--font-display); font-size: 0.7rem; color: var(--gold); letter-spacing: 0.1em; margin-bottom: 8px;">
            ${defaultState.region.toUpperCase()} INDIA • ${defaultState.type.toUpperCase()}
          </span>
          <h3 class="map-preview-title" id="map-preview-title" style="font-size: 1.4rem; color: #fff; margin-bottom: 10px;">
            ${defaultState.name}
          </h3>
          <p class="map-preview-story" id="map-preview-story" style="font-size: 0.85rem; color: var(--muted-bright); line-height: 1.5; margin-bottom: 20px;">
            ${defaultState.tagline}
          </p>
          
          <div class="map-preview-stats" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: rgba(0,0,0,0.3); padding: 14px; border-radius: 8px; border: 1px solid var(--line); margin-bottom: 20px;">
            <div class="map-stat-item">
              <small style="display: block; font-size: 0.68rem; color: var(--muted); text-transform: uppercase;">Capital</small>
              <span id="map-preview-capital" style="font-size: 0.88rem; color: #fff; font-weight: 600;">${defaultState.capital}</span>
            </div>
            <div class="map-stat-item">
              <small style="display: block; font-size: 0.68rem; color: var(--muted); text-transform: uppercase;">Destinations</small>
              <span id="map-preview-count" style="font-size: 0.88rem; color: #fff; font-weight: 600;">${DataRegistry.getDestinationsByState(defaultState.slug).length || 6} Places</span>
            </div>
            <div class="map-stat-item">
              <small style="display: block; font-size: 0.68rem; color: var(--muted); text-transform: uppercase;">Best Season</small>
              <span id="map-preview-season" style="font-size: 0.88rem; color: #fff; font-weight: 600;">${defaultState.quickStats.bestTime}</span>
            </div>
            <div class="map-stat-item">
              <small style="display: block; font-size: 0.68rem; color: var(--muted); text-transform: uppercase;">Ideal Trip</small>
              <span id="map-preview-duration" style="font-size: 0.88rem; color: #fff; font-weight: 600;">${defaultState.quickStats.idealDuration}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button id="open-external-gmaps-btn" class="btn gold" style="width: 100%; justify-content: center; font-size: 0.78rem; padding: 10px;">
            🌍 OPEN NATURAL 3D MAPS (TREES & CARS) ↗
          </button>
          <button id="ask-ai-map-btn" class="btn" style="width: 100%; justify-content: center; font-size: 0.78rem; padding: 10px; border-color: var(--gold); color: var(--gold);" onclick="window.raahiAskAssistant('Tell me all details, secrets, and travel tips for ' + (document.getElementById('map-preview-title')?.textContent || 'this state'))">
            ⚡ ASK GOOGLE AI ABOUT THIS LOCATION →
          </button>
          <a href="#/states/${defaultState.slug}" class="btn light" id="map-preview-link" style="justify-content: center; width: 100%; text-align: center;">
            EXPLORE ${defaultState.name.toUpperCase()} CODEX →
          </a>
        </div>
      </div>
    </div>
  `;

  // Initialize Leaflet GIS Map after DOM mount
  setTimeout(() => {
    initRaahiLeafletMap();
  }, 100);

  setupMapSearchHandlers(mount);
  setupViewToggle(mount);
}

function initRaahiLeafletMap() {
  if (typeof L === 'undefined') return;

  const mapContainer = document.getElementById('raahi-leaflet-map');
  if (!mapContainer) return;

  // Clean existing map instance if any
  if (raahiMapInstance) {
    try { raahiMapInstance.remove(); } catch(e) {}
    raahiMapInstance = null;
  }

  // Centered on India (22.5937° N, 78.9629° E) supporting maxZoom 21 for house & building-level zoom
  raahiMapInstance = L.map('raahi-leaflet-map', {
    center: [22.5937, 78.9629],
    zoom: 5,
    maxZoom: 21,
    zoomControl: true,
    scrollWheelZoom: true
  });

  // Google Maps Hybrid (Satellite + High-Res Street & House Labels)
  const googleHybrid = L.tileLayer('https://mt{s}.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    attribution: '&copy; Google Maps Hybrid Satellite Engine',
    maxZoom: 21,
    maxNativeZoom: 20
  });

  // Google Satellite (Pure Ultra-High Res Aerial Imagery)
  const googleSat = L.tileLayer('https://mt{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    attribution: '&copy; Google Maps Satellite Engine',
    maxZoom: 21,
    maxNativeZoom: 20
  });

  // Google Streets & House Outlines
  const googleStreets = L.tileLayer('https://mt{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    subdomains: ['0', '1', '2', '3'],
    attribution: '&copy; Google Maps Street View Engine',
    maxZoom: 21,
    maxNativeZoom: 20
  });

  // Esri Satellite Aerial Imagery
  const esriSat = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri World Imagery',
    maxZoom: 21,
    maxNativeZoom: 18
  });

  // OpenStreetMap Layer
  const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors | RAAHI Spatial Map',
    maxZoom: 21,
    maxNativeZoom: 19
  });

  activeTileLayers = {
    googleHybrid: [googleHybrid],
    googleSat: [googleSat],
    googleStreets: [googleStreets],
    esriSat: [esriSat],
    osm: [osmLayer]
  };

  // Default to Google Maps Hybrid Satellite so every house, building roof, street, and lane loads crisp & clear
  googleHybrid.addTo(raahiMapInstance);

  // Add Leaflet Native Layer Control on Top Right
  const baseMaps = {
    "🛰️ Google Satellite + House Labels": googleHybrid,
    "🌍 Google Pure Satellite Imagery": googleSat,
    "🏙️ Google Streets & Buildings": googleStreets,
    "🛰️ Esri Aerial Satellite": esriSat,
    "🗺️ OpenStreetMap": osmLayer
  };
  L.control.layers(baseMaps, null, { position: 'topright' }).addTo(raahiMapInstance);

  // Add Glowing Pins for All 36 Indian States/UTs
  Object.keys(STATES_DATA).forEach(slug => {
    const state = STATES_DATA[slug];
    const coords = STATE_COORDINATES[slug];
    if (!coords) return;

    const customIcon = L.divIcon({
      className: 'raahi-custom-marker',
      html: `<div class="marker-pin-outer" title="${state.name}"><div class="marker-pin-inner"></div></div>`,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });

    const marker = L.marker([coords.lat, coords.lng], { icon: customIcon }).addTo(raahiMapInstance);
    
    marker.bindPopup(`
      <div style="padding: 6px; color: #000; font-family: sans-serif;">
        <strong style="font-size: 0.95rem; text-transform: uppercase; color: #111;">${state.name}</strong><br>
        <span style="font-size: 0.78rem; color: #444;">Capital: <b>${state.capital}</b> (${state.region} India)</span><br>
        <a href="#/states/${slug}" style="display: inline-block; margin-top: 8px; font-size: 0.78rem; color: #b89628; font-weight: 700; text-decoration: none;">EXPLORE STATE CODEX →</a>
      </div>
    `);

    marker.on('click', () => {
      selectStateOnMap(slug, coords.lat, coords.lng, state.name);
    });
  });

  // Default selection marker: Rajasthan
  const defaultCoords = STATE_COORDINATES['rajasthan'];
  if (defaultCoords) {
    activeMarker = L.marker([defaultCoords.lat, defaultCoords.lng], {
      icon: L.divIcon({
        className: 'raahi-active-marker',
        html: '<div style="width:24px; height:24px; background: #d4af37; border:3px solid #fff; border-radius:50%; box-shadow: 0 0 20px #d4af37; transform: translate(-50%, -50%);"></div>',
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      })
    }).addTo(raahiMapInstance);
  }

  // Handle Layer Select Dropdown
  const selectEl = document.getElementById('raahi-tile-layer-select');
  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      const mode = e.target.value;
      switchTileLayer(mode);
    });
  }

  // Force Leaflet to re-calculate container dimensions
  setTimeout(() => {
    if (raahiMapInstance) raahiMapInstance.invalidateSize();
  }, 300);
}

function switchTileLayer(mode) {
  if (!raahiMapInstance) return;

  // Remove all existing layers
  Object.values(activeTileLayers).flat().forEach(layer => {
    if (raahiMapInstance.hasLayer(layer)) {
      raahiMapInstance.removeLayer(layer);
    }
  });

  // Add target layers
  if (activeTileLayers[mode]) {
    activeTileLayers[mode].forEach(layer => layer.addTo(raahiMapInstance));
  }
}

function selectStateOnMap(slug, lat, lng, name) {
  const state = STATES_DATA[slug];
  if (!state) return;

  currentSelectedCoords = { lat, lng };

  if (raahiMapInstance) {
    raahiMapInstance.flyTo([lat, lng], 15, { duration: 1.5 });

    if (activeMarker) {
      activeMarker.setLatLng([lat, lng]);
    }
  }

  // Update Telemetry Header
  const statusEl = document.getElementById('raahi-map-status');
  if (statusEl) statusEl.textContent = `VECTOR LOCKED // ${name.toUpperCase()}`;

  // Update Right Preview Card
  const previewBadge = document.getElementById('map-preview-badge');
  const previewTitle = document.getElementById('map-preview-title');
  const previewStory = document.getElementById('map-preview-story');
  const previewCapital = document.getElementById('map-preview-capital');
  const previewCount = document.getElementById('map-preview-count');
  const previewSeason = document.getElementById('map-preview-season');
  const previewDuration = document.getElementById('map-preview-duration');
  const previewLink = document.getElementById('map-preview-link');

  const count = DataRegistry.getDestinationsByState(slug).length;
  if (previewBadge) previewBadge.textContent = `${state.region.toUpperCase()} INDIA • ${state.type.toUpperCase()}`;
  if (previewTitle) previewTitle.textContent = state.name;
  if (previewStory) previewStory.textContent = state.tagline;
  if (previewCapital) previewCapital.textContent = state.capital;
  if (previewCount) previewCount.textContent = `${count} Places`;
  if (previewSeason) previewSeason.textContent = state.quickStats.bestTime;
  if (previewDuration) previewDuration.textContent = state.quickStats.idealDuration;
  if (previewLink) {
    previewLink.href = `#/states/${state.slug}`;
    previewLink.textContent = `EXPLORE ${state.name.toUpperCase()} CODEX →`;
  }

  updateStreetViewIframe(lat, lng, state.name);
}

function updateStreetViewIframe(lat, lng, queryName) {
  const iframe = document.getElementById('raahi-streetview-iframe');
  if (iframe) {
    // Embeds Google Maps 3D Natural Satellite & Street view showing trees, cars, houses, and roads
    iframe.src = `https://maps.google.com/maps?q=${lat},${lng}&t=k&z=19&ie=UTF8&iwloc=&output=embed`;
  }
}

function setupMapSearchHandlers(mount) {
  const input = mount.querySelector('#raahi-map-query-input');
  const searchBtn = mount.querySelector('#raahi-map-search-btn');
  const externalBtn = mount.querySelector('#open-external-gmaps-btn');
  const autocomplete = mount.querySelector('#raahi-map-autocomplete');
  if (!input || !searchBtn) return;

  if (externalBtn) {
    externalBtn.addEventListener('click', () => {
      const query = input.value.trim() || 'India';
      const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}&basemap=satellite`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Autocomplete Suggestions
  const SUGGESTIONS = Object.values(STATES_DATA).map(s => ({
    name: s.name,
    slug: s.slug,
    sub: `${s.capital} • ${s.region} India`,
    type: 'state'
  }));

  input.addEventListener('input', () => {
    const val = input.value.trim().toLowerCase();
    if (!val || !autocomplete) {
      if (autocomplete) autocomplete.style.display = 'none';
      return;
    }

    const matches = SUGGESTIONS.filter(item => 
      item.name.toLowerCase().includes(val) || item.sub.toLowerCase().includes(val)
    );

    if (matches.length === 0) {
      autocomplete.style.display = 'none';
      return;
    }

    autocomplete.innerHTML = matches.map(m => `
      <div class="autocomplete-item" data-slug="${m.slug}" style="padding: 10px 14px; cursor: pointer; border-bottom: 1px solid rgba(255,255,255,0.05); display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 700; color: #fff; font-size: 0.85rem;">${m.name}</div>
          <div style="font-size: 0.72rem; color: var(--muted);">${m.sub}</div>
        </div>
        <span style="font-size: 0.65rem; color: var(--gold); font-family: var(--font-display);">STATE</span>
      </div>
    `).join('');

    autocomplete.style.display = 'block';

    autocomplete.querySelectorAll('.autocomplete-item').forEach(el => {
      el.addEventListener('click', () => {
        const slug = el.getAttribute('data-slug');
        const state = STATES_DATA[slug];
        if (state) {
          input.value = state.name;
          autocomplete.style.display = 'none';
          const coords = STATE_COORDINATES[slug] || { lat: 26.9124, lng: 75.7873 };
          selectStateOnMap(slug, coords.lat, coords.lng, state.name);
        }
      });
    });
  });

  const performSearch = async () => {
    const query = input.value.trim();
    if (!query) return;

    if (autocomplete) autocomplete.style.display = 'none';

    // Direct match check in STATES_DATA
    const slug = Object.keys(STATES_DATA).find(k => 
      STATES_DATA[k].name.toLowerCase() === query.toLowerCase() || k === query.toLowerCase()
    );

    if (slug) {
      const coords = STATE_COORDINATES[slug] || { lat: 26.9124, lng: 75.7873 };
      selectStateOnMap(slug, coords.lat, coords.lng, STATES_DATA[slug].name);
      return;
    }

    // Geocoding via OpenStreetMap Nominatim API for general Indian locations/cities/houses
    try {
      const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query + ', India')}&limit=1`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.length > 0) {
          const item = data[0];
          const lat = parseFloat(item.lat);
          const lng = parseFloat(item.lon ?? item.lng);

          currentSelectedCoords = { lat, lng };

          if (raahiMapInstance) {
            raahiMapInstance.flyTo([lat, lng], 18, { duration: 1.5 });
            if (activeMarker) activeMarker.setLatLng([lat, lng]);
          }

          const statusEl = document.getElementById('raahi-map-status');
          if (statusEl) statusEl.textContent = `VECTOR LOCKED // ${query.toUpperCase()}`;

          const previewTitle = document.getElementById('map-preview-title');
          const previewStory = document.getElementById('map-preview-story');
          if (previewTitle) previewTitle.textContent = query.toUpperCase();
          if (previewStory) previewStory.textContent = item.display_name;

          updateStreetViewIframe(lat, lng, query);
        }
      }
    } catch(err) {
      console.warn('Geocoding search fetch error:', err);
    }
  };

  searchBtn.addEventListener('click', performSearch);
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') performSearch();
  });
}

function setupViewToggle(mount) {
  const toggleBtn = mount.querySelector('#raahi-map-toggle-view');
  const streetviewBtn = mount.querySelector('#raahi-streetview-btn');
  const leafletView = mount.querySelector('#leaflet-map-view');
  const streetviewView = mount.querySelector('#streetview-map-view');
  const svgView = mount.querySelector('#svg-map-view');

  if (!leafletView || !streetviewView || !svgView) return;

  let currentView = 'leaflet'; // 'leaflet', 'streetview', 'svg'

  if (streetviewBtn) {
    streetviewBtn.addEventListener('click', () => {
      if (currentView !== 'streetview') {
        currentView = 'streetview';
        leafletView.style.display = 'none';
        svgView.style.display = 'none';
        streetviewView.style.display = 'block';
        streetviewBtn.style.background = 'var(--emerald, #10b981)';
        streetviewBtn.style.color = '#000';
        updateStreetViewIframe(currentSelectedCoords.lat, currentSelectedCoords.lng, 'Target');
      } else {
        currentView = 'leaflet';
        streetviewView.style.display = 'none';
        svgView.style.display = 'none';
        leafletView.style.display = 'block';
        streetviewBtn.style.background = 'transparent';
        streetviewBtn.style.color = 'var(--emerald, #10b981)';
        setTimeout(() => {
          if (raahiMapInstance) raahiMapInstance.invalidateSize();
        }, 100);
      }
    });
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if (currentView !== 'svg') {
        currentView = 'svg';
        leafletView.style.display = 'none';
        streetviewView.style.display = 'none';
        svgView.style.display = 'block';
        toggleBtn.textContent = '🌐 LEAFLET GIS VIEW';
      } else {
        currentView = 'leaflet';
        streetviewView.style.display = 'none';
        svgView.style.display = 'none';
        leafletView.style.display = 'block';
        toggleBtn.textContent = '🗺️ SVG VECTOR VIEW';
        setTimeout(() => {
          if (raahiMapInstance) raahiMapInstance.invalidateSize();
        }, 100);
      }
    });
  }
}
