/**
 * RAAHI // Master Client-Side Router
 * Full state, city, place, dedicated cinematic route, and journey builder view routing
 * with integrated Travel Intelligence Layer.
 */

import { RAAHI_DATA } from './data.js';
import { renderCinematicRoute } from './cinematicPage.js';
import { 
  renderJourneyBuilderView, 
  addToJourney, 
  addMultipleToJourney, 
  isPlaceSaved, 
  toggleSaveJourney, 
  updateJourneyBadgeCount, 
  updateAllSaveButtons 
} from './journeyBuilder.js';

export const VERIFIED_IMAGE_MAP = {
  'amber-fort': 'assets/images/destinations/amber-fort.jpg',
  'amber-fort-detail': 'assets/images/destinations/amber-fort-detail.jpg',
  'amber-fort-sheesh-mahal': 'assets/images/destinations/amber-fort-sheesh-mahal.jpg',
  'hawa-mahal': 'assets/images/destinations/hawa-mahal.jpg',
  'city-palace-jaipur': 'assets/images/destinations/city-palace-jaipur.jpg',
  'jantar-mantar': 'assets/images/destinations/jantar-mantar.jpg',
  'jal-mahal': 'assets/images/destinations/jal-mahal.jpg',
  'panna-meena': 'assets/images/destinations/panna-meena.jpg',
  'jaisalmer-fort': 'assets/images/destinations/jaisalmer-fort.jpg',
  'patwon-ki-haveli': 'assets/images/destinations/patwon-ki-haveli.jpg',
  'bada-bagh': 'assets/images/destinations/bada-bagh.jpg',
  'mehrangarh-fort': 'assets/images/destinations/mehrangarh-fort.jpg',
  'city-palace-udaipur': 'assets/images/destinations/city-palace-udaipur.jpg',
  'lake-pichola': 'assets/images/destinations/lake-pichola.jpg',
  'taj-mahal': 'assets/images/destinations/taj-mahal.jpg',
  'agra-fort': 'assets/images/destinations/agra-fort.jpg',
  'fatehpur-sikri': 'assets/images/destinations/fatehpur-sikri.jpg',
  'dashashwamedh-ghat': 'assets/images/destinations/dashashwamedh-ghat.jpg',
  'assi-ghat': 'assets/images/destinations/assi-ghat.jpg',
  'eravikulam-national-park': 'assets/images/destinations/eravikulam-national-park.jpg',
  'munnar-tea': 'assets/images/destinations/munnar-tea.jpg',
  'alleppey-backwaters': 'assets/images/destinations/alleppey-backwaters.jpg',
  'fort-aguada': 'assets/images/destinations/fort-aguada.jpg',
  'basilica-bom-jesus': 'assets/images/destinations/basilica-bom-jesus.jpg',
  'hadimba-temple': 'assets/images/destinations/hadimba-temple.jpg',
  'key-monastery': 'assets/images/destinations/key-monastery.jpg',
  'spiti-key-monastery': 'assets/images/destinations/key-monastery.jpg',
  'aguada-fort': 'assets/images/destinations/fort-aguada.jpg',
  'bagru-printing': 'assets/images/destinations/panna-meena.jpg',
  'nahargarh-fort': 'assets/images/destinations/amber-fort.jpg',
  'jaigarh-fort': 'assets/images/destinations/amber-fort.jpg',
  'albert-hall': 'assets/images/destinations/city-palace-jaipur.jpg',
  'patrika-gate': 'assets/images/destinations/hawa-mahal.jpg'
};

window.raahiAddToJourney = (id) => addToJourney(id);
window.arvoraAddToJourney = window.raahiAddToJourney;
window.raahiToggleSaveJourney = (id) => toggleSaveJourney(id);


window.raahiOpenMapsModal = (placeId) => {
  let place = RAAHI_DATA.places[placeId];
  if (!place) {
    for (const city of Object.values(RAAHI_DATA.cities)) {
      if (city.places && city.places.includes(placeId)) {
        const state = RAAHI_DATA.states[city.stateId] || { name: 'India' };
        place = {
          id: placeId,
          name: placeId.replace(/-/g, ' ').toUpperCase(),
          cityId: city.id,
          stateId: city.stateId,
          city: city.name,
          state: state.name,
          mapsQuery: `${placeId.replace(/-/g, ' ').toUpperCase()}, ${city.name}, ${state.name}, India`
        };
        break;
      }
    }
  }
  if (!place) return;
  const city = RAAHI_DATA.cities[place.cityId] || { name: place.city || 'India' };
  const state = RAAHI_DATA.states[place.stateId] || { name: place.state || 'India' };
  
  const placeName = place.name;
  const locationText = `${city.name}, ${state.name}, India`;
  const mapsQuery = place.mapsQuery || `${place.name}, ${city.name}, ${state.name}, India`;
  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapsQuery);

  const overlay = document.getElementById('raahi-maps-overlay');
  const modal = document.getElementById('raahi-maps-modal');
  const nameEl = document.getElementById('maps-modal-place-name');
  const locEl = document.getElementById('maps-modal-place-loc');
  const queryEl = document.getElementById('maps-modal-query-preview');
  const linkEl = document.getElementById('maps-modal-open-link');

  if (nameEl) nameEl.textContent = placeName;
  if (locEl) locEl.textContent = locationText;
  if (queryEl) queryEl.textContent = 'Maps Query: ' + mapsQuery;
  if (linkEl) {
    linkEl.href = mapsUrl;
    linkEl.setAttribute('target', '_blank');
    linkEl.setAttribute('rel', 'noopener noreferrer');
  }

  if (overlay) overlay.classList.add('active');
  if (modal) modal.classList.add('active');
};

window.raahiCloseMapsModal = () => {
  const overlay = document.getElementById('raahi-maps-overlay');
  const modal = document.getElementById('raahi-maps-modal');
  if (overlay) overlay.classList.remove('active');
  if (modal) modal.classList.remove('active');
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.raahiCloseMapsModal();
  }
});

export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
}

export function navigateTo(hash) {
  window.location.hash = hash;
}

function handleRoute() {
  const hash = window.location.hash || '#/home';
  const homeView = document.getElementById('view-home');
  const stateView = document.getElementById('view-state');
  const cityView = document.getElementById('view-city');
  const destView = document.getElementById('view-destination');
  const cinematicView = document.getElementById('view-cinematic');
  const journeyView = document.getElementById('view-journey');
  const mainNav = document.querySelector('.nav');
  const mainFooter = document.querySelector('.footer');
  const assistantTrigger = document.getElementById('raahi-assistant-trigger');

  window.scrollTo({ top: 0, behavior: 'instant' });

  // Cleanup active cinematic engine if navigating away from cinematic mode
  if (!hash.startsWith('#/cinematic/') && window.raahiCinematicEngineInstance) {
    try {
      window.raahiCinematicEngineInstance.destroy();
      window.raahiCinematicEngineInstance = null;
    } catch (e) {}
  }

  [homeView, stateView, cityView, destView, cinematicView, journeyView].forEach(v => {
    if (v) v.style.display = 'none';
  });

  if (hash.startsWith('#/cinematic/')) {
    const placeId = hash.replace('#/cinematic/', '') || 'amber-fort';
    if (cinematicView) cinematicView.style.display = 'block';
    if (mainNav) mainNav.style.display = 'none';
    if (mainFooter) mainFooter.style.display = 'none';
    if (assistantTrigger) assistantTrigger.style.display = 'none';
    document.body.classList.add('in-cinematic-mode');
    renderCinematicRoute(placeId);
  } else {
    if (mainNav) mainNav.style.display = 'flex';
    if (mainFooter) mainFooter.style.display = 'block';
    if (assistantTrigger) assistantTrigger.style.display = 'flex';
    document.body.classList.remove('in-cinematic-mode');

    if (hash.startsWith('#/destinations/')) {
      const placeId = hash.replace('#/destinations/', '');
      if (destView) destView.style.display = 'block';
      renderDestinationView(placeId);
    } else if (hash.startsWith('#/cities/')) {
      const cityId = hash.replace('#/cities/', '');
      if (cityView) cityView.style.display = 'block';
      renderCityView(cityId);
    } else if (hash.startsWith('#/states/')) {
      const stateId = hash.replace('#/states/', '');
      if (stateView) stateView.style.display = 'block';
      renderStateView(stateId);
    } else if (hash === '#/journey') {
      if (journeyView) journeyView.style.display = 'block';
      renderJourneyBuilderView();
    } else {
      if (homeView) homeView.style.display = 'block';
      renderHomeView();
    }
  }

  updateJourneyBadgeCount();
  updateAllSaveButtons();
}

function renderHomeView() {
  document.title = 'RAAHI — Discover Destinations, Stories & Experiences Across India';
  const grid = document.getElementById('states-grid-container');
  if (!grid) return;
  const states = Object.values(RAAHI_DATA.states);
  grid.innerHTML = states.map((s) => `
    <div class="state-card" data-state="${s.id}" onclick="window.location.hash='#/states/${s.id}'">
      <img src="${s.heroImage}" alt="${s.name}" class="state-card-image" loading="lazy" />
      <div class="state-dest-count">${s.quickStats.placesCount} PLACES TO DISCOVER</div>
      <div class="state-card-content">
        <span class="eyebrow" style="margin-bottom: 6px;">${s.eyebrow}</span>
        <h3 class="state-card-name">${s.name}</h3>
        <p class="state-card-tagline">${s.tagline}</p>
        <span class="state-card-action">EXPLORE ${s.name.toUpperCase()} →</span>
      </div>
    </div>
  `).join('');
}

function renderStateView(stateId) {
  const state = RAAHI_DATA.states[stateId];
  if (!state) {
    navigateTo('#/home');
    return;
  }
  document.title = `${state.name} — RAAHI State Experience`;
  const container = document.getElementById('view-state');
  if (!container) return;
  const cityList = state.cities.map(cId => RAAHI_DATA.cities[cId]).filter(Boolean);

  container.innerHTML = `
    <div class="state-hero">
      <div class="state-hero-bg" style="background-image: url('${state.heroImage}');"></div>
      <div class="state-hero-content">
        <span class="eyebrow">${state.eyebrow}</span>
        <h1 class="state-hero-title">${state.name}</h1>
        <p class="state-hero-tagline">${state.tagline}</p>
      </div>
    </div>

    <div class="state-stats-bar">
      <div class="stat-box">
        <span class="stat-label">Featured Cities</span>
        <span class="stat-value">${state.quickStats.citiesCount} Regional Hubs</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Places to Discover</span>
        <span class="stat-value">${state.quickStats.placesCount} Curated Monuments</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Ideal Season</span>
        <span class="stat-value">${state.quickStats.bestTime}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">State Capital</span>
        <span class="stat-value">${state.quickStats.capital}</span>
      </div>
    </div>

    <div class="wrap">
      <section class="state-story-section">
        <div class="story-grid">
          <div>
            <span class="eyebrow">THE STATE NARRATIVE</span>
            <h2 class="heading-large" style="text-transform: uppercase;">A Tapestry of Soul & Stone</h2>
          </div>
          <div>
            <p class="lead" style="color: var(--cream); font-size: 1.2rem; line-height: 1.8;">
              ${state.story}
            </p>
          </div>
        </div>
      </section>

      <section style="padding: 60px 0;">
        <div class="section-head">
          <div>
            <span class="eyebrow">FEATURED DESTINATIONS</span>
            <h2 class="heading-medium" style="text-transform: uppercase;">Cities in ${state.name}</h2>
          </div>
          <p style="color: var(--muted); font-size: 0.85rem; max-width: 320px;">
            Select a city to explore its 8–12 dedicated places and smart travel planner.
          </p>
        </div>

        <div class="states-grid" style="grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));">
          ${cityList.map(c => `
            <div class="state-card" style="height: 440px;" onclick="window.location.hash='#/cities/${c.id}'">
              <img src="${c.heroImage}" alt="${c.name}" class="state-card-image" loading="lazy" />
              <div class="state-dest-count">${c.places.length} PLACES</div>
              <div class="state-card-content">
                <span class="eyebrow" style="margin-bottom: 4px;">${c.tagline}</span>
                <h3 class="state-card-name" style="font-size: 2rem;">${c.name}</h3>
                <p class="state-card-tagline" style="font-size: 0.85rem;">${c.description}</p>
                <span class="state-card-action">EXPLORE ${c.name.toUpperCase()} PLACES →</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 60px 0;">
        <span class="eyebrow">SIGNATURE EXPERIENCES</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Beyond the Obvious</h2>
        <div class="editorial-grid">
          ${state.experiences.map((exp) => `
            <div class="editorial-card">
              <span class="editorial-tag">${exp.tag}</span>
              <h3>${exp.title}</h3>
              <p>${exp.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 60px 0;">
        <span class="eyebrow">CULINARY TRADITIONS</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Taste of the Soil</h2>
        <div class="editorial-grid">
          ${state.food.map((f) => `
            <div class="editorial-card">
              <span class="editorial-tag">${f.region}</span>
              <h3>${f.name}</h3>
              <p>${f.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 60px 0;">
        <span class="eyebrow">LIVING HERITAGE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Crafts & Lineages</h2>
        <div class="travel-info-box">
          <div class="info-item">
            <h4>Traditional Crafts</h4>
            <p>${state.culture.crafts}</p>
          </div>
          <div class="info-item">
            <h4>Major Festivals</h4>
            <p>${state.culture.festivals}</p>
          </div>
          <div class="info-item">
            <h4>Music & Rhythms</h4>
            <p>${state.culture.music}</p>
          </div>
        </div>
      </section>

      <section style="padding: 60px 0 80px;">
        <span class="eyebrow">PRACTICAL INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Travel Essentials</h2>
        <div class="travel-info-box">
          <div class="info-item">
            <h4>Airports & Gateways</h4>
            <p>${state.travelInfo.airports}</p>
          </div>
          <div class="info-item">
            <h4>Rail & Highway Corridors</h4>
            <p>${state.travelInfo.railways}</p>
          </div>
          <div class="info-item">
            <h4>Seasonal Advice</h4>
            <p>${state.travelInfo.seasonTips}</p>
          </div>
        </div>
      </section>

      <div style="text-align: center; padding-top: 40px; border-top: 1px solid var(--line);">
        <button class="btn light" onclick="window.location.hash='#/home'">
          ← Back to All States
        </button>
      </div>
    </div>
  `;
}

function renderCityView(cityId) {
  const city = RAAHI_DATA.cities[cityId];
  if (!city) {
    navigateTo('#/home');
    return;
  }

  document.title = `${city.name} (${city.stateName}) — RAAHI City Experience`;
  const container = document.getElementById('view-city');
  if (!container) return;

  const placesList = city.places.map(pId => RAAHI_DATA.places[pId] || {
    id: pId,
    name: pId.replace(/-/g, ' ').toUpperCase(),
    category: 'Cultural Landmark',
    heroImage: VERIFIED_IMAGE_MAP[pId] || city.heroImage,
    shortDesc: 'A historic destination in ' + city.name + ' preserving ancient heritage.',
    durationNeeded: '2 Hours'
  });

  container.innerHTML = `
    <div class="breadcrumb-bar wrap">
      <a href="#/home">RAAHI</a>
      <span class="sep">/</span>
      <a href="#/states/${city.stateId}">${city.stateName}</a>
      <span class="sep">/</span>
      <span style="color: var(--cream);">${city.name}</span>
    </div>

    <div class="state-hero city-hero-${city.id}" style="height: 65vh; min-height: 500px; position: relative; overflow: hidden;">
      <div class="state-hero-bg" style="background-image: url('${city.heroImage}'); filter: saturate(1.1) brightness(0.48);"></div>
      <div class="city-ambient-motif-layer city-motif-${city.id}"></div>
      <div class="state-hero-content" style="position: relative; z-index: 3;">
        <div style="display: inline-flex; align-items: center; gap: 8px; margin-bottom: 12px;">
          <span class="eyebrow" style="margin-bottom: 0;">${city.stateName.toUpperCase()} ARCHIVE</span>
          <span style="color: var(--gold); font-size: 0.75rem;">✦</span>
          <span style="font-family: var(--font-display); font-size: 0.75rem; letter-spacing: 0.15em; color: var(--gold);">${city.tagline}</span>
        </div>
        <h1 class="state-hero-title" style="font-size: clamp(3.2rem, 7vw, 6.5rem); margin-bottom: 16px;">${city.name}</h1>
        <p class="state-hero-tagline" style="max-width: 720px; font-size: 1.1rem; line-height: 1.7; color: rgba(232, 228, 220, 0.9);">${city.description}</p>
        ${city.id === 'jaipur' ? `
          <div style="margin-top: 24px;">
            <button class="btn gold" onclick="window.location.hash='#/cinematic/amber-fort'" style="box-shadow: 0 0 25px rgba(212,175,55,0.4); padding: 14px 28px; font-size: 0.85rem;">
              ⚡ EXPERIENCE AMBER FORT (3D CINEMATIC) →
            </button>
          </div>
        ` : ''}
      </div>
    </div>

    <div class="state-stats-bar">
      <div class="stat-box">
        <span class="stat-label">⏱️ How Long to Stay?</span>
        <span class="stat-value">${city.idealDuration || '3 Days'} Recommended</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">🗓️ Best Time to Visit</span>
        <span class="stat-value">${city.bestTime || 'Oct to Mar'}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">💰 Approx. Daily Budget</span>
        <span class="stat-value" style="color: var(--gold);">~₹4,500 / day (Mid-Range)</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">🏛️ Curated Places</span>
        <span class="stat-value">${placesList.length} Historic Sites</span>
      </div>
    </div>

    <div class="wrap">
      <div style="background: var(--bg-surface); border: 1px solid var(--line); padding: 24px 30px; border-radius: 6px; margin: 30px 0 50px;">
        <div style="font-family: var(--font-display); font-size: 0.75rem; letter-spacing: 0.15em; color: var(--gold); text-transform: uppercase; margin-bottom: 6px;">
          IDEAL PACING INTELLIGENCE
        </div>
        <p style="color: var(--cream); font-size: 1.05rem; line-height: 1.7; margin: 0;">
          <strong>Why ${city.idealDuration || '3 Days'}?</strong> ${city.whyDuration || 'Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.'}
        </p>
      </div>

      <section class="city-smart-planner-section" style="padding: 40px 0 60px; border-bottom: 1px solid var(--line);">
        <div class="section-head">
          <div>
            <span class="eyebrow">INTELLIGENT ROUTE COMPILER</span>
            <h2 class="heading-large" style="text-transform: uppercase;">PLAN YOUR ${city.name.toUpperCase()} JOURNEY</h2>
          </div>
          <p style="color: var(--muted); font-size: 0.92rem; max-width: 380px;">
            Configure your duration, pace, and interests to generate a structured day-by-day expedition.
          </p>
        </div>

        <div class="planner-config-grid">
          <div class="config-group">
            <label class="config-label">1. Duration</label>
            <div class="config-pills" id="planner-duration-pills">
              <button class="config-pill active" data-duration="1">1 Day (Sprint)</button>
              <button class="config-pill" data-duration="2">2 Days (Balanced)</button>
              <button class="config-pill" data-duration="3">3 Days (Deep Dive)</button>
            </div>
          </div>

          <div class="config-group">
            <label class="config-label">2. Travel Style & Budget</label>
            <div class="config-pills" id="planner-style-pills">
              <button class="config-pill" data-style="budget">🎒 Budget (₹)</button>
              <button class="config-pill active" data-style="mid">🏨 Mid-Range (₹₹)</button>
              <button class="config-pill" data-style="luxury">👑 Luxury (₹₹₹)</button>
            </div>
          </div>
        </div>

        <div class="generated-itinerary-card" id="generated-itinerary-container" style="margin-top: 30px;">
          ${renderGeneratedCityPlan(city, 1)}
        </div>
      </section>

      <section style="padding: 60px 0 40px;">
        <div class="section-head">
          <div>
            <span class="eyebrow">DISCOVERY ARCHETYPES</span>
            <h2 class="heading-medium" style="text-transform: uppercase;">WHAT KIND OF TRIP ARE YOU LOOKING FOR?</h2>
          </div>
          <p style="color: var(--muted); font-size: 0.88rem; max-width: 340px;">
            Filter places in ${city.name} to match your travel focus.
          </p>
        </div>

        <div class="filter-chips-container" id="city-archetype-chips" style="margin-bottom: 30px;">
          <button class="filter-chip active" data-archetype="all">ALL PLACES (${placesList.length})</button>
          <button class="filter-chip" data-archetype="heritage">HERITAGE FORTS</button>
          <button class="filter-chip" data-archetype="food">CULINARY & TASTE</button>
          <button class="filter-chip" data-archetype="photography">PHOTOGRAPHY</button>
          <button class="filter-chip" data-archetype="hidden_gems">HIDDEN GEMS</button>
          <button class="filter-chip" data-archetype="culture">LIVING CRAFTS</button>
        </div>

        <div class="states-grid" id="city-places-grid" style="grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
          ${placesList.map(p => `
            <div class="state-card" style="height: 480px;" onclick="window.location.hash='#/destinations/${p.id}'">
              <img src="${p.heroImage}" alt="${p.name}" class="state-card-image" loading="lazy" />
              <div class="state-dest-count">${p.category || 'HERITAGE'} • ⏱️ ${p.durationNeeded || '2-3h'}</div>
              <div class="state-card-content">
                <span class="eyebrow" style="margin-bottom: 4px;">${city.name} • ${city.stateName}</span>
                <h3 class="state-card-name" style="font-size: 2.1rem;">${p.name}</h3>
                <p class="state-card-tagline" style="font-size: 0.88rem;">${p.shortDesc}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                  <span class="state-card-action">EXPLORE PLACE →</span>
                  <button class="btn-save-journey ${isPlaceSaved(p.id) ? 'saved' : ''}" style="padding: 6px 14px; font-size: 0.7rem;" data-save-place-id="${p.id}" data-saved-text="♥ Saved" data-unsaved-text="♡ Save" onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${p.id}');">
                    ${isPlaceSaved(p.id) ? '♥ Saved' : '♡ Save'}
                  </button>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 40px 0 60px; border-top: 1px solid var(--line);">
        <span class="eyebrow">LOCAL INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Know Before You Go to ${city.name}</h2>
        <div class="travel-info-box">
          ${(city.knowBefore || []).map(k => `
            <div class="info-item">
              <h4>${k.title}</h4>
              <p>${k.tip}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <div style="display: flex; gap: 1rem; justify-content: center; padding-top: 40px; border-top: 1px solid var(--line); margin-bottom: 80px;">
        <button class="btn" onclick="window.location.hash='#/states/${city.stateId}'">
          ← Back to ${city.stateName}
        </button>
        <button class="btn light" onclick="window.location.hash='#/home'">
          Home
        </button>
      </div>
    </div>
  `;

  setupCityPlannerListeners(city);
}

function renderGeneratedCityPlan(city, days) {
  const presetKey = days === 1 ? '1-day' : days === 2 ? '2-day' : '3-day';
  const preset = (city.plannerPresets && city.plannerPresets[presetKey]) ? city.plannerPresets[presetKey] : {
    title: `${days}-Day ${city.name} Expedition`,
    pace: "Balanced",
    focus: "Essential Highlights",
    estimatedCost: "Approx. ₹4,500 + Admissions",
    timeline: [
      { time: "08:30 AM", placeName: `${city.places[0] ? city.places[0].replace(/-/g, ' ').toUpperCase() : 'Monument'}`, activity: "Arrive at opening to explore the primary citadel.", duration: "2.5 Hours", transitNext: "Approx. 15 min drive" },
      { time: "12:00 PM", placeName: "Local Heritage Lunch", activity: "Traditional regional specialties.", duration: "1 Hour", transitNext: "Approx. 10 min drive" },
      { time: "02:00 PM", placeName: `${city.places[1] ? city.places[1].replace(/-/g, ' ').toUpperCase() : 'Bazaar'}`, activity: "Explore artisan quarters and historical courtyards.", duration: "2 Hours", transitNext: "Approx. 20 min drive" },
      { time: "05:30 PM", placeName: "Scenic Sunset Point", activity: "Golden hour sunset vistas over the city skyline.", duration: "1.5 Hours", transitNext: "Dinner" }
    ]
  };

  if (days === 1) {
    return `
      <div class="itinerary-header-bar">
        <div>
          <span class="eyebrow" style="color: var(--gold); margin-bottom: 4px;">RECOMMENDED ROUTE // ${preset.pace.toUpperCase()}</span>
          <h3 style="font-family: var(--font-display); font-size: 1.8rem; text-transform: uppercase; margin: 0;">${preset.title}</h3>
          <span style="font-size: 0.85rem; color: var(--muted);">${preset.focus} • Estimated Cost: <strong style="color: var(--cream);">${preset.estimatedCost}</strong></span>
        </div>
        <button class="btn gold" onclick="window.raahiAddCityPresetToJourney('${city.id}', 1)">
          + Add This Entire Plan to Journey
        </button>
      </div>

      <div class="itinerary-timeline-list">
        ${preset.timeline.map((step) => `
          <div class="timeline-step-row">
            <div class="time-col">${step.time}</div>
            <div class="marker-col"><div class="marker-dot"></div></div>
            <div class="detail-col">
              <h4>${step.placeName || step.title} <span class="step-dur">⏱️ ${step.duration || '1.5h'}</span></h4>
              <p>${step.activity || step.desc}</p>
              ${step.transitNext ? `<div class="transit-tag">🚗 ${step.transitNext}</div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    const dayGroups = preset.days || [
      { day: 1, title: "Grand Monuments & Citadels", stops: [ { time: "08:30 AM", title: city.places[0] ? city.places[0].replace(/-/g, ' ').toUpperCase() : 'Monument', desc: 'Primary Citadel exploration.' }, { time: "02:00 PM", title: 'Sunset Ridge', desc: 'Aravalli views.' } ] },
      { day: 2, title: "Living Crafts & Bazaars", stops: [ { time: "09:00 AM", title: 'Historic Courtyard', desc: 'Fresco chambers.' }, { time: "02:00 PM", title: 'Artisan Alley', desc: 'Traditional craft masters.' } ] }
    ];

    return `
      <div class="itinerary-header-bar">
        <div>
          <span class="eyebrow" style="color: var(--gold); margin-bottom: 4px;">RECOMMENDED ROUTE // ${preset.pace.toUpperCase()}</span>
          <h3 style="font-family: var(--font-display); font-size: 1.8rem; text-transform: uppercase; margin: 0;">${preset.title}</h3>
          <span style="font-size: 0.85rem; color: var(--muted);">${preset.focus} • Estimated Cost: <strong style="color: var(--cream);">${preset.estimatedCost}</strong></span>
        </div>
        <button class="btn gold" onclick="window.raahiAddCityPresetToJourney('${city.id}', ${days})">
          + Add This Entire Plan to Journey
        </button>
      </div>

      <div class="multi-day-container">
        ${dayGroups.map(d => `
          <div class="day-group-card">
            <div class="day-group-badge">DAY 0${d.day} // ${d.title.toUpperCase()}</div>
            <div class="itinerary-timeline-list" style="margin-top: 16px;">
              ${d.stops.map(st => `
                <div class="timeline-step-row">
                  <div class="time-col">${st.time || 'Morning'}</div>
                  <div class="marker-col"><div class="marker-dot"></div></div>
                  <div class="detail-col">
                    <h4>${st.title || st}</h4>
                    ${st.desc ? `<p>${st.desc}</p>` : ''}
                    ${st.transitNext ? `<div class="transit-tag">🚗 ${st.transitNext}</div>` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }
}

function setupCityPlannerListeners(city) {
  const pills = document.querySelectorAll('#planner-duration-pills .config-pill');
  const container = document.getElementById('generated-itinerary-container');

  pills.forEach(p => {
    p.addEventListener('click', () => {
      pills.forEach(el => el.classList.remove('active'));
      p.classList.add('active');
      const days = parseInt(p.dataset.duration) || 1;
      if (container) {
        container.innerHTML = renderGeneratedCityPlan(city, days);
      }
    });
  });

  const archetypeChips = document.querySelectorAll('#city-archetype-chips .filter-chip');
  const placesGrid = document.getElementById('city-places-grid');

  archetypeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      archetypeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const archetype = chip.dataset.archetype;
      
      let filteredPlaces = city.places.map(pId => RAAHI_DATA.places[pId]).filter(Boolean);
      if (archetype !== 'all' && city.tripArchetypes && city.tripArchetypes[archetype]) {
        const allowed = city.tripArchetypes[archetype];
        filteredPlaces = filteredPlaces.filter(p => allowed.includes(p.id));
      }

      if (placesGrid) {
        placesGrid.innerHTML = filteredPlaces.map(p => `
          <div class="state-card" style="height: 480px;" onclick="window.location.hash='#/destinations/${p.id}'">
            <img src="${p.heroImage}" alt="${p.name}" class="state-card-image" loading="lazy" />
            <div class="state-dest-count">${p.category || 'HERITAGE'} • ⏱️ ${p.durationNeeded || '2-3h'}</div>
            <div class="state-card-content">
              <span class="eyebrow" style="margin-bottom: 4px;">${city.name} • ${city.stateName}</span>
              <h3 class="state-card-name" style="font-size: 2.1rem;">${p.name}</h3>
              <p class="state-card-tagline" style="font-size: 0.88rem;">${p.shortDesc}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
                <span class="state-card-action">EXPLORE PLACE →</span>
                <button class="btn-save-journey ${isPlaceSaved(p.id) ? 'saved' : ''}" style="padding: 6px 14px; font-size: 0.7rem;" data-save-place-id="${p.id}" data-saved-text="♥ Saved" data-unsaved-text="♡ Save" onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${p.id}');">
                  ${isPlaceSaved(p.id) ? '♥ Saved' : '♡ Save'}
                </button>
              </div>
            </div>
          </div>
        `).join('');
      }
    });
  });
}

window.raahiAddCityPresetToJourney = (cityId, days) => {
  const city = RAAHI_DATA.cities[cityId];
  if (!city) return;
  const count = days === 1 ? 3 : days === 2 ? 5 : 7;
  const placesToAdd = city.places.slice(0, count).map(pId => RAAHI_DATA.places[pId]).filter(Boolean);
  addMultipleToJourney(placesToAdd);
};

function renderDestinationView(placeId) {
  let place = RAAHI_DATA.places[placeId];

  if (!place) {
    for (const city of Object.values(RAAHI_DATA.cities)) {
      if (city.places.includes(placeId)) {
        place = {
          id: placeId,
          cityId: city.id,
          stateId: city.stateId,
          name: placeId.replace(/-/g, ' ').toUpperCase(),
          category: 'Heritage Landmark',
          heroImage: VERIFIED_IMAGE_MAP[placeId] || city.heroImage,
          durationNeeded: '2–3 Hours',
          goodFor: ['Architecture', 'History', 'Photography'],
          shortDesc: `A historic monument in ${city.name}, ${city.stateName}.`,
          overview: `${placeId.replace(/-/g, ' ').toUpperCase()} is one of the premier historical and architectural landmarks of ${city.name}.`,
          whyItMatters: `An enduring symbol of craftsmanship and regional heritage in ${city.name}.`,
          whatToSee: [
            { title: 'Central Courtyard & Facades', desc: 'Carved sandstone and architectural stonework.' },
            { title: 'Historic Chambers', desc: 'Preserved royal halls and historical chambers.' }
          ],
          history: `Constructed centuries ago, it has stood as a center of cultural and civic life in ${city.name}.`,
          experiences: [
            { title: 'Guided Heritage Walk', desc: 'Explore historical corridors with certified historians.', timing: 'Daily' }
          ],
          foodNearby: [
            { name: 'Local Heritage Restaurant', desc: 'Authentic local cuisine.' }
          ],
          placesNearby: [
            { name: city.name + ' City Center', dist: '1 km away', desc: 'Historic street markets.' }
          ],
          travelInfo: {
            timings: '09:00 AM to 05:30 PM',
            entryFee: 'Standard Heritage Admission',
            bestTimeToVisit: 'October to March',
            howToReach: `Conveniently accessible via local transport in ${city.name}.`
          }
        };
        break;
      }
    }
  }

  if (!place) {
    navigateTo('#/home');
    return;
  }

  const state = RAAHI_DATA.states[place.stateId] || { name: place.state || 'India' };
  const city = RAAHI_DATA.cities[place.cityId] || { name: place.city || place.cityId };

  document.title = `${place.name} (${city.name}, ${state.name}) — RAAHI`;

  const container = document.getElementById('view-destination');
  if (!container) return;

  const goodForList = place.goodFor || ['Architecture', 'History', 'Photography'];
  const quickTagsText = goodForList.map(g => g.toUpperCase()).join(' · ');
  const durationText = place.durationNeeded || '2–3 Hours';
  const bestSeasonText = place.bestSeason || (place.bestTimeDetailed && place.bestTimeDetailed.season ? place.bestTimeDetailed.season.split('(')[0].trim() : 'OCT — MAR');
  const crowdLevelText = (place.crowdLevel || (placeId === 'taj-mahal' || placeId === 'dashashwamedh-ghat' ? 'HIGH' : placeId === 'jantar-mantar' || placeId === 'panna-meena' ? 'LOW' : 'MODERATE')).toUpperCase();
  const locationText = `${city.name.toUpperCase()}, ${state.name.toUpperCase()}`;

  // Verified destination facts ("DID YOU KNOW?")
  const verifiedFacts = place.didYouKnow || (
    placeId === 'amber-fort' ? [
      "A UNESCO World Heritage property as part of the Hill Forts of Rajasthan.",
      "Its Sheesh Mahal (Hall of Mirrors) is encrusted with convex Belgian mirrors positioned so that the flame of a single candle illuminates the entire ceiling like a starlit sky.",
      "The fort is connected to Jaigarh Fort via subterranean escape tunnels spanning over 1.5 km through the rugged Aravalli hills."
    ] : placeId === 'hawa-mahal' ? [
      "Constructed in 1799 by Maharaja Sawai Pratap Singh, its five-storey pyramid facade features 953 intricately carved jharokhas (casements).",
      "Engineered with the Venturi effect, natural breeze circulates continuously throughout the interior even during peak summer heat.",
      "The building has no foundation and stands on an incline of 87 degrees, stabilized by its curved honeycomb structure."
    ] : placeId === 'city-palace-jaipur' ? [
      "Houses two enormous sterling silver vessels (Gangajalis) recorded in the Guinness World Records as the world's largest silver vessels, each crafted from 14,000 melted coins to carry holy Ganges water to England in 1902.",
      "The Pritam Niwas Chowk features four legendary painted doorways representing the four seasons, including the iconic Peacock Gate.",
      "A portion of the palace remains the private residence of the titular Royal Family of Jaipur to this day."
    ] : placeId === 'jantar-mantar' ? [
      "Features the Vrihat Samrat Yantra, the world's largest stone sundial standing at 27 meters tall, capable of measuring local solar time to an accuracy of 2 seconds.",
      "Built in 1734 by Maharaja Sawai Jai Singh II, it houses 19 colossal architectural astronomical instruments.",
      "The instruments were sculpted from local stone and marble to achieve greater scale and precision than handheld brass astrolabes."
    ] : placeId === 'jal-mahal' ? [
      "Though it appears to have only a single storey from the water, the palace actually has five storeys—four of which remain submerged beneath Man Sagar Lake.",
      "Constructed with specially treated lime mortar, its submerged walls have resisted water pressure and leakage for over 250 years.",
      "The rooftop features a Chameli Bagh (jasmine garden) with aromatic flower beds designed for royal pleasure excursions."
    ] : placeId === 'panna-meena' ? [
      "An eight-storey geometric stepwell built with a symmetrical criss-cross pattern of stairs arranged so you cannot ascend the same stairs you used to descend.",
      "It functioned as a vital cooling subterranean oasis and community gathering place for desert travelers and village women.",
      "Located near Amber village, its pristine yellow and ochre geometry has made it an architectural masterpiece for photographers worldwide."
    ] : placeId === 'taj-mahal' ? [
      "Commissioned in 1631 by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
      "The four minarets were deliberately engineered with a slight outward tilt to prevent them from falling onto the central dome during an earthquake.",
      "The translucent Makrana marble changes color throughout the day: blush pink at dawn, brilliant white at midday, and glowing gold under moonlight."
    ] : placeId === 'dashashwamedh-ghat' ? [
      "One of India's oldest and most sacred ghats on the Ganges; legend says Lord Brahma sacrificed ten horses here in a sacred yajna to welcome Lord Shiva.",
      "The daily evening Ganga Aarti ceremony has been conducted continuously at twilight with huge brass multi-tiered lamps for centuries.",
      "Boatmen have rowed wooden hand-carved boats along this sacred waterfront for over 2,000 recorded years of pilgrimage."
    ] : placeId === 'eravikulam-national-park' ? [
      "Home to the largest surviving wild population of the endangered Nilgiri Tahr mountain goat in the world.",
      "Famous for the mass blooming of the Neelakurinji flower, which covers the hillsides in vibrant blue once every 12 years.",
      "Encompasses Anamudi (2,695m), the highest peak in South India and the Western Ghats."
    ] : [
      `${place.name} is one of the premier historical and architectural landmarks of ${city.name}, celebrated for its enduring cultural lineage.`,
      `Constructed with indigenous regional masonry designed to harmonize with local terrain and seasonal climate conditions.`,
      `Protected as part of India's national living heritage and cultural preservation network.`
    ]
  );

  // Time periods & recommended slot
  const timePeriods = [
    { period: "Sunrise", icon: "🌅", hours: "05:30 – 07:30 AM", recommended: placeId === 'taj-mahal' || placeId === 'dashashwamedh-ghat' || placeId === 'jal-mahal' || placeId === 'panna-meena' || placeId === 'eravikulam-national-park', reason: "Dawn provides soft pastel light, fresh morning air, and minimal crowds." },
    { period: "Morning", icon: "☀️", hours: "08:30 – 11:30 AM", recommended: placeId === 'amber-fort' || placeId === 'hawa-mahal' || placeId === 'city-palace-jaipur' || placeId === 'jantar-mantar', reason: "Cooler stone floors, low group tour traffic, and golden eastern sunlight across facades." },
    { period: "Afternoon", icon: "🌤", hours: "12:00 – 03:30 PM", recommended: placeId === 'jantar-mantar', reason: "Direct overhead solar angles enable accurate sundial shadow and solar transit observation." },
    { period: "Sunset", icon: "🌇", hours: "04:30 – 06:30 PM", recommended: placeId === 'amber-fort' || placeId === 'jal-mahal' || placeId === 'dashashwamedh-ghat' || placeId === 'taj-mahal', reason: "Spectacular golden hour tones reflecting off stone ramparts, waterfronts, and surrounding ridges." },
    { period: "Evening", icon: "🌙", hours: "07:00 – 09:30 PM", recommended: placeId === 'dashashwamedh-ghat' || placeId === 'jal-mahal', reason: "Atmospheric evening illuminations, sacred bells, and illuminated night water reflections." }
  ];

  const crowdPatternList = [
    { time: "Early morning (06:00 – 09:00)", status: "Low", statusClass: "low", feel: "Quiet & Serene — Minimal wait times, peaceful photography" },
    { time: "Late morning (09:30 – 12:30)", status: "Moderate", statusClass: "moderate", feel: "Steady Flow — Independent travelers and guided groups arrive" },
    { time: "Afternoon (01:00 – 04:00)", status: "High", statusClass: "high", feel: "Peak Busy — Heaviest footfall in central courtyards and galleries" },
    { time: "Evening (04:30 – 07:00)", status: "Moderate", statusClass: "moderate", feel: "Pleasant — Golden hour visitors and cool evening breezes" }
  ];

  const isSaved = isPlaceSaved(place.id);

  container.innerHTML = `
    <div class="breadcrumb-bar wrap">
      <a href="#/home">RAAHI</a>
      <span class="sep">/</span>
      <a href="#/states/${place.stateId}">${state.name}</a>
      <span class="sep">/</span>
      <a href="#/cities/${place.cityId}">${city.name}</a>
      <span class="sep">/</span>
      <span style="color: var(--cream);">${place.name}</span>
    </div>

    <div class="dest-hero">
      <div class="dest-hero-bg" style="background-image: url('${place.heroImage}');"></div>
      <div class="dest-hero-content">
        <div>
          <div class="dest-hero-loc">${city.name} • ${state.name}</div>
          <h1 class="dest-hero-title">${place.name}</h1>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          ${(place.hasCinematic || place.id === 'amber-fort') ? `
            <button class="btn-cinematic-launch" onclick="window.location.hash='#/cinematic/${place.id}'" style="background: linear-gradient(135deg, #d4af37 0%, #b89628 100%); color: #030705; font-weight: 700; border: none; box-shadow: 0 0 25px rgba(212,175,55,0.45); padding: 12px 24px; border-radius: 100px; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: transform 0.2s ease;">
              ⚡ ENTER CINEMATIC 3D EXPEDITION →
            </button>
          ` : ''}
          <button class="btn-save-journey ${isSaved ? 'saved' : ''}" data-save-place-id="${place.id}" data-saved-text="♥ SAVED TO JOURNEY" data-unsaved-text="♡ SAVE TO MY JOURNEY" onclick="window.raahiToggleSaveJourney('${place.id}')">
            ${isSaved ? '♥ SAVED TO JOURNEY' : '♡ SAVE TO MY JOURNEY'}
          </button>
          <button class="btn" style="border-color: rgba(212, 175, 55, 0.45); color: var(--cream);" onclick="window.raahiOpenMapsModal('${place.id}')">
            📍 View on Google Maps
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Intelligence Summary Strip ("UNDER THIS") -->
    <div class="quick-intel-strip">
      <div class="quick-intel-tag-row">
        <span>${quickTagsText}</span>
      </div>
      <div class="quick-intel-grid">
        <div class="quick-intel-box">
          <div class="quick-intel-value">⏱ ${durationText.toUpperCase()}</div>
          <div class="quick-intel-label">Recommended Duration</div>
        </div>
        <div class="quick-intel-box">
          <div class="quick-intel-value">🌤 ${bestSeasonText.toUpperCase()}</div>
          <div class="quick-intel-label">Best Season</div>
        </div>
        <div class="quick-intel-box">
          <div class="quick-intel-value" style="color: ${crowdLevelText === 'HIGH' ? '#ff8888' : crowdLevelText === 'LOW' ? '#10b981' : 'var(--gold)'};">👥 ${crowdLevelText}</div>
          <div class="quick-intel-label">Typical Crowd</div>
        </div>
        <div class="quick-intel-box">
          <div class="quick-intel-value">📍 ${locationText}</div>
          <div class="quick-intel-label">Location</div>
        </div>
      </div>
    </div>

    <div class="wrap" style="padding-top: 10px;">
      <div style="display: flex; gap: 10px; overflow-x: auto; padding-bottom: 12px; border-bottom: 1px solid var(--line);">
        <a href="#overview" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">OVERVIEW</a>
        <a href="#best-time" class="btn" style="padding: 6px 14px; font-size: 0.7rem; border-color: var(--gold); color: var(--gold);">BEST TIME & CROWD</a>
        <a href="#did-you-know" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">DID YOU KNOW?</a>
        <a href="#what-to-see" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">WHAT TO SEE</a>
        <a href="#know-before" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">KNOW BEFORE YOU GO</a>
        <a href="#taste" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">TASTE THE PLACE</a>
        <a href="#hidden-gems" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">HIDDEN GEMS</a>
        <a href="#places-nearby" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">PLACES NEARBY</a>
        <a href="#where-to-stay" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">WHERE TO STAY</a>
        <a href="#travel-info" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">VISITOR INFO</a>
      </div>
    </div>

    <div class="wrap dest-content-section">
      <div class="overview-grid" id="overview">
        <div>
          <span class="eyebrow">DESTINATION OVERVIEW</span>
          <h2 class="heading-medium" style="text-transform: uppercase; margin-bottom: 1.5rem;">The Architecture of Memory</h2>
          <p class="lead" style="color: var(--cream); font-size: 1.15rem; line-height: 1.8;">
            ${place.overview}
          </p>
        </div>
        <div>
          <div class="why-matters-card">
            <span class="eyebrow" style="color: var(--gold); margin-bottom: 8px;">SIGNIFICANCE</span>
            <h3>Why It Matters</h3>
            <p style="color: var(--muted); line-height: 1.7; font-size: 0.95rem;">
              ${place.whyItMatters}
            </p>
          </div>
        </div>
      </div>

      <!-- Feature 2: Best Time to Visit & Crowd Feel Section -->
      <section class="best-time-section" id="best-time">
        <span class="eyebrow">PACING & TRAVEL INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Best Time to Visit & Crowd Feel</h2>

        <div class="best-time-crowd-grid">
          <div>
            <h3 style="font-family: var(--font-display); font-size: 1.25rem; text-transform: uppercase; margin-bottom: 16px; color: var(--cream);">
              Recommended Time of Day
            </h3>
            <div class="time-slots-container">
              ${timePeriods.map(t => `
                <div class="time-slot-card ${t.recommended ? 'recommended' : ''}">
                  <div class="time-slot-left">
                    <span class="time-slot-icon">${t.icon}</span>
                    <div class="time-slot-info">
                      <h4>${t.period}</h4>
                      <span class="time-slot-hours">${t.hours}</span>
                    </div>
                  </div>
                  <span class="time-slot-badge ${t.recommended ? 'recommended' : 'regular'}">
                    ${t.recommended ? '⭐ RECOMMENDED' : 'AVAILABLE'}
                  </span>
                </div>
              `).join('')}
            </div>

            <div class="time-slot-reason">
              <strong style="color: var(--gold); display: block; margin-bottom: 4px;">💡 Local Visiting Advice:</strong>
              ${place.bestTimeDetailed ? place.bestTimeDetailed.reasoning : (timePeriods.find(t => t.recommended) ? timePeriods.find(t => t.recommended).reason : 'Early morning or late afternoon arrival ensures comfortable walking temperatures and optimal lighting.')}
            </div>
          </div>

          <div>
            <div class="crowd-feel-panel">
              <span class="eyebrow" style="color: var(--gold); margin-bottom: 4px;">FOOTFALL INTELLIGENCE</span>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; text-transform: uppercase; margin: 0; color: var(--cream);">
                Crowd Feel & Patterns
              </h3>

              <div class="crowd-gauge-wrap">
                <div class="crowd-gauge-levels">
                  <span class="${crowdLevelText === 'LOW' ? 'active' : ''}">QUIET (LOW)</span>
                  <span class="${crowdLevelText === 'MODERATE' ? 'active' : ''}">MODERATE</span>
                  <span class="${crowdLevelText === 'HIGH' ? 'active' : ''}">BUSY (HIGH)</span>
                </div>
                <div class="crowd-gauge-bar">
                  <div class="crowd-gauge-segment ${crowdLevelText === 'LOW' ? 'active-low' : ''}"></div>
                  <div class="crowd-gauge-segment ${crowdLevelText === 'MODERATE' ? 'active-mod' : ''}"></div>
                  <div class="crowd-gauge-segment ${crowdLevelText === 'HIGH' ? 'active-high' : ''}"></div>
                </div>
              </div>

              <div class="crowd-patterns-list">
                ${crowdPatternList.map(c => `
                  <div class="crowd-pattern-row">
                    <div class="crowd-pattern-time">${c.time}</div>
                    <span class="crowd-pattern-status ${c.statusClass}">${c.status}</span>
                  </div>
                `).join('')}
              </div>

              <p class="crowd-disclaimer">
                * Note: Typical/expected visitor patterns based on historical seasonality. Not real-time sensor feed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Feature 3: Did You Know? Destination Facts -->
      <section id="did-you-know">
        <div class="did-you-know-card">
          <div class="did-you-know-header">
            <span class="did-you-know-badge">🏛️ DID YOU KNOW?</span>
            <span class="eyebrow" style="margin: 0;">ARCHITECTURAL & HISTORICAL FACTS</span>
          </div>
          <div class="facts-list">
            ${verifiedFacts.map(f => `
              <div class="fact-quote-item">
                ${f}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <section style="padding: 40px 0;" id="what-to-see">
        <span class="eyebrow">EXPLORE KEY SECTIONS</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">What to See Inside</h2>
        <div class="what-to-see-grid">
          ${place.whatToSee.map((sight) => `
            <div class="sight-card">
              <h4>${sight.title}</h4>
              <p>${sight.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 40px 0;" id="know-before">
        <span class="eyebrow">LOCAL INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Know Before You Go</h2>
        <div class="travel-info-box">
          ${(place.knowBeforeYouGo || [
            { title: "Footwear & Steps", tip: "Wear comfortable walking shoes with grip; historic stone ramparts require walking." },
            { title: "Photography", tip: "Handheld photography and smartphones permitted. Tripods require prior ASI authorization." },
            { title: "Queue Bypass", tip: "Arrive at opening (08:30 AM) or acquire a Composite Monument Pass to skip separate lines." },
            { title: "Attire", tip: "Modest attire covering shoulders and knees is appreciated near active shrines." }
          ]).map(k => `
            <div class="info-item">
              <h4>${k.title}</h4>
              <p>${k.tip}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 60px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin: 40px 0;" id="history">
        <div class="story-grid">
          <div>
            <span class="eyebrow">CHRONICLES & LINEAGE</span>
            <h2 class="heading-large" style="text-transform: uppercase;">Centuries of History</h2>
          </div>
          <div>
            <p class="lead" style="line-height: 1.8; font-size: 1.05rem;">
              ${place.history}
            </p>
          </div>
        </div>
      </section>

      <section style="padding: 40px 0;" id="taste">
        <span class="eyebrow">CULINARY INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Taste the Place // ${city.name}</h2>
        <div class="nearby-grid">
          ${(place.foodSpecialties || place.foodNearby || []).map((f) => `
            <div class="nearby-card">
              <span class="tag-pill">${f.type || f.cuisine || 'Regional Specialty'}</span>
              <h4>${f.name}</h4>
              <p>${f.desc}</p>
              <div style="font-family: var(--font-display); font-size: 0.75rem; color: var(--gold); margin-top: 8px;">
                ${f.price ? `${f.price} • ` : ''}${f.where || 'Nearby Eatery'}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 40px 0;" id="hidden-gems">
        <span class="eyebrow">GO BEYOND THE OBVIOUS</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Hidden Discoveries Nearby</h2>
        <div class="editorial-grid">
          ${(place.hiddenGems || [
            { name: "Quiet Morning Courtyards", type: "Architectural Detail", desc: "Lesser-visited rear corridors offering intimate stone carvings." },
            { name: "Artisan Guild Haveli", type: "Living Craft", desc: "Local workshops preserving centuries-old regional handicrafts." },
            { name: "Panoramic Ridge Point", type: "Scenic Vista", desc: "An elevated viewpoint overlooking the monument." }
          ]).map(g => `
            <div class="editorial-card">
              <span class="editorial-tag">${g.type}</span>
              <h3>${g.name}</h3>
              <p>${g.desc}</p>
              ${g.dist ? `<div style="font-family: var(--font-display); font-size: 0.72rem; color: var(--gold); margin-top: 10px;">📍 ${g.dist}</div>` : ''}
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 40px 0;" id="places-nearby">
        <span class="eyebrow">TIME + DISTANCE CONTEXT</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Places Nearby & Transit Times</h2>
        <div class="nearby-grid">
          ${(place.travelContext && place.travelContext.nearbyTransit && place.travelContext.nearbyTransit.length > 0 ? place.travelContext.nearbyTransit : (place.placesNearby || [])).map((p) => `
            <div class="nearby-card">
              <span class="tag-pill">⏱️ ${p.time || p.dist || 'Nearby'}</span>
              <h4>${p.destination || p.name}</h4>
              <p>${p.desc || `Approx. travel distance: ${p.distance || '1-3 km'}`}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <section style="padding: 40px 0;" id="where-to-stay">
        <span class="eyebrow">SANCTUARIES OF REST</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Where to Stay in ${city.name}</h2>
        <div class="editorial-grid">
          <div class="editorial-card">
            <span class="editorial-tag">Royal Palace Stay // Luxury</span>
            <h3>${place.staysByCategory && place.staysByCategory.luxury ? place.staysByCategory.luxury[0].name : 'Grand Heritage Palace'}</h3>
            <p>${place.staysByCategory && place.staysByCategory.luxury ? place.staysByCategory.luxury[0].desc : 'Palatial accommodations with royal gardens.'}</p>
            <div style="font-family: var(--font-display); font-size: 0.75rem; color: var(--gold); margin-top: 10px;">
              ${place.staysByCategory && place.staysByCategory.luxury ? place.staysByCategory.luxury[0].price : '₹35,000+ / night'}
            </div>
          </div>
          <div class="editorial-card">
            <span class="editorial-tag">Historic Restored Haveli // Heritage</span>
            <h3>${place.staysByCategory && place.staysByCategory.heritage ? place.staysByCategory.heritage[0].name : 'Ancestral Haveli Hotel'}</h3>
            <p>${place.staysByCategory && place.staysByCategory.heritage ? place.staysByCategory.heritage[0].desc : 'Century-old ancestral residence with painted courtyards.'}</p>
            <div style="font-family: var(--font-display); font-size: 0.75rem; color: var(--gold); margin-top: 10px;">
              ${place.staysByCategory && place.staysByCategory.heritage ? place.staysByCategory.heritage[0].price : '₹8,000 – ₹16,000 / night'}
            </div>
          </div>
          <div class="editorial-card">
            <span class="editorial-tag">Boutique & Social // Budget-Mid</span>
            <h3>${place.staysByCategory && place.staysByCategory.boutique ? place.staysByCategory.boutique[0].name : 'Artisan Design Guesthouse'}</h3>
            <p>${place.staysByCategory && place.staysByCategory.boutique ? place.staysByCategory.boutique[0].desc : 'Eco-conscious design haven in central quarters.'}</p>
            <div style="font-family: var(--font-display); font-size: 0.75rem; color: var(--gold); margin-top: 10px;">
              ${place.staysByCategory && place.staysByCategory.boutique ? place.staysByCategory.boutique[0].price : '₹4,500 – ₹8,000 / night'}
            </div>
          </div>
        </div>
      </section>

      <section style="padding: 40px 0 60px;" id="travel-info">
        <span class="eyebrow">VISITOR INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Practical Travel Information</h2>
        <div class="travel-info-box">
          <div class="info-item">
            <h4>Opening Hours</h4>
            <p>${place.travelInfo ? place.travelInfo.timings : '09:00 AM – 05:30 PM'}</p>
          </div>
          <div class="info-item">
            <h4>Ticketing & Access</h4>
            <p>${place.travelInfo ? place.travelInfo.entryFee : 'Standard Heritage Admission'}</p>
          </div>
          <div class="info-item">
            <h4>Best Timing & Transit</h4>
            <p>${place.travelInfo ? place.travelInfo.bestTimeToVisit : 'Oct to Mar'} <br><br>${place.travelInfo ? place.travelInfo.howToReach : 'Easily accessible via local transport.'}</p>
          </div>
        </div>
      </section>

      ${place.hasCinematic ? `
        <section style="margin: 40px 0 60px; background: linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(7,11,9,0.9) 100%); border: 1px solid var(--gold); border-radius: 8px; padding: 40px; text-align: center;">
          <span class="eyebrow" style="color: var(--gold);">IMMERSIVE 3D SPATIAL TOUR</span>
          <h2 class="heading-medium" style="text-transform: uppercase; margin: 8px 0 16px;">Step Inside ${place.name}</h2>
          <p style="color: var(--muted-bright); max-width: 600px; margin: 0 auto 24px;">
            Experience 7 scroll-driven storytelling scenes, interactive spatial hotspots, and architectural telemetries.
          </p>
          <button class="btn gold" onclick="window.location.hash='#/cinematic/${place.id}'" style="padding: 14px 28px; font-size: 0.85rem;">
            ✨ Enter Cinematic Mode ↗
          </button>
        </section>
      ` : ''}

      <div style="display: flex; gap: 1rem; justify-content: center; padding-top: 40px; border-top: 1px solid var(--line);">
        <button class="btn" onclick="window.location.hash='#/cities/${place.cityId}'">
          ← Back to ${city.name}
        </button>
        <button class="btn" onclick="window.location.hash='#/states/${place.stateId}'">
          ← Back to ${state.name}
        </button>
        <button class="btn light" onclick="window.location.hash='#/home'">
          Home
        </button>
      </div>
    </div>
  `;
}
