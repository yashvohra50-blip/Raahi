/**
 * RAAHI // Master Client-Side Router & View Compiler
 * Complete Pan-India Architecture covering 28 States, 8 Union Territories,
 * 111+ Curated Destinations, Interactive Maps, Search & Travel Intelligence.
 */

import { DataRegistry, RAAHI_DATA } from './data/dataRegistry.js';
import { statesData } from './data/statesData.js';
import { destinationsData } from './data/destinationsData.js';
import { experiencesData } from './data/experiencesData.js';
import { staysData } from './data/staysData.js';
import { searchIndex } from './data/searchIndex.js';
import { renderCinematicRoute } from './cinematicPage.js';
import { renderIndiaMap } from './components/indiaMap.js';
import { renderJourneyBuilderView, 
  addToJourney, 
  addMultipleToJourney, 
  isPlaceSaved, 
  toggleSaveJourney, 
  updateJourneyBadgeCount, 
  updateAllSaveButtons 
} from './journeyBuilder.js';
import { fetchGooglePlacePhoto, enhanceImagesWithGooglePlaces } from './services/placesPhotoService.js';

export const VERIFIED_IMAGE_MAP = {
  'amber-fort': 'assets/images/destinations/amber-fort.jpg',
  'amber-fort-detail': 'assets/images/destinations/amber-fort-detail.jpg',
  'amber-fort-sheesh-mahal': 'assets/images/destinations/amber-fort-sheesh-mahal.jpg',
  'hawa-mahal': 'assets/images/destinations/hawa-mahal.jpg',
  'city-palace-jaipur': 'assets/images/destinations/city-palace-jaipur.jpg',
  'jantar-mantar': 'assets/images/destinations/jantar-mantar.jpg',
  'jal-mahal': 'assets/images/destinations/jal-mahal.jpg',
  'panna-meena': 'assets/images/destinations/panna-meena.jpg',
  'jaisalmer': 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?q=80&w=1200',
  'jaisalmer-fort': 'https://images.unsplash.com/photo-1572445271230-a78b5944a659?q=80&w=1200',
  'patwon-ki-haveli': 'assets/images/destinations/patwon-ki-haveli.jpg',
  'bada-bagh': 'assets/images/destinations/bada-bagh.jpg',
  'mehrangarh-fort': 'assets/images/destinations/mehrangarh-fort.jpg',
  'jodhpur': 'https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1200',
  'city-palace-udaipur': 'assets/images/destinations/city-palace-udaipur.jpg',
  'udaipur': 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200',
  'lake-pichola': 'assets/images/destinations/lake-pichola.jpg',
  'taj-mahal': 'assets/images/destinations/taj-mahal.jpg',
  'agra-fort': 'assets/images/destinations/agra-fort.jpg',
  'fatehpur-sikri': 'assets/images/destinations/fatehpur-sikri.jpg',
  'varanasi': 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200',
  'dashashwamedh-ghat': 'assets/images/destinations/dashashwamedh-ghat.jpg',
  'assi-ghat': 'assets/images/destinations/assi-ghat.jpg',
  'munnar': 'assets/images/destinations/munnar-tea.jpg',
  'eravikulam-national-park': 'assets/images/destinations/eravikulam-national-park.jpg',
  'munnar-tea': 'assets/images/destinations/munnar-tea.jpg',
  'alleppey': 'assets/images/destinations/alleppey-backwaters.jpg',
  'alleppey-backwaters': 'assets/images/destinations/alleppey-backwaters.jpg',
  'fort-aguada': 'assets/images/destinations/fort-aguada.jpg',
  'basilica-bom-jesus': 'assets/images/destinations/basilica-bom-jesus.jpg',
  'hadimba-temple': 'assets/images/destinations/hadimba-temple.jpg',
  'manali': 'assets/images/destinations/hadimba-temple.jpg',
  'spiti-valley': 'assets/images/destinations/key-monastery.jpg',
  'key-monastery': 'assets/images/destinations/key-monastery.jpg',
  'spiti-key-monastery': 'assets/images/destinations/key-monastery.jpg',
  'golden-temple': 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
  'amritsar': 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
  'qutub-minar': 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=1200',
  'delhi': 'https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=1200',
  'gateway-of-india': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200',
  'mumbai': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200',
  'hampi': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
  'konark-sun-temple': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200',
  'darjeeling': 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
  'mysore-palace': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
  'rann-of-kutch': 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200',
  'khajuraho': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
  'meenakshi-temple': 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
  'ladakh': 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200',
  'pangong-tso': 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200',
  'kaziranga': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
  'sundarbans': 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200',
  'cherrapunji': 'https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1200',
  'tawang': 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200',
  'dal-lake': 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200',
  'srinagar': 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200',
  'rishikesh': 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1200',
  'kedarnath': 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200',
  'charminar': 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200',
  'chittorgarh-fort': 'https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?q=80&w=1200',
  'chandigarh': 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200'
};

import { RaahiFair } from './components/raahiFair.js';

window.raahiAddToJourney = (id) => addToJourney(id);
window.arvoraAddToJourney = window.raahiAddToJourney;
window.raahiToggleSaveJourney = (id) => toggleSaveJourney(id);

// Global Google Maps Modal Handler
window.raahiOpenMapsModal = (destId) => {
  const dest = DataRegistry.getDestination(destId);
  const place = dest || RAAHI_DATA.places[destId] || {};
  
  const placeName = place.name || (destId ? destId.replace(/-/g, ' ').toUpperCase() : 'India Destination');
  const stateName = place.state || 'India';
  const locationText = `${placeName}, ${stateName}, India`;
  const mapsQuery = place.mapsQuery || (place.coordinates ? `${place.coordinates.lat},${place.coordinates.lng}` : `${placeName}, ${stateName}, India`);
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

// App Router Initializer
export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', () => {
    handleRoute();
    setupNavClickHandlers();
  });
  handleRoute();
  setupNavClickHandlers();
}

export function navigateTo(hash) {
  window.location.hash = hash;
}

export function scrollToSection(targetId) {
  const targetEl = document.getElementById(targetId);
  if (!targetEl) return;
  const nav = document.querySelector('.nav');
  const navHeight = nav ? nav.offsetHeight + 16 : 80;
  const targetPosition = targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
}

export function setupNavClickHandlers() {
  document.querySelectorAll('.navlinks a, .mobile-nav-links a').forEach(link => {
    link.onclick = (e) => {
      const href = link.getAttribute('href');
      if (!href) return;

      // Close mobile drawer if active
      const mobileDrawer = document.getElementById('mobile-menu-drawer');
      if (mobileDrawer) {
        mobileDrawer.classList.remove('active');
        document.body.classList.remove('lock-scroll');
      }

      if (href.startsWith('#/') && href !== '#/home') {
        // Route view like #/journey or #/states/rajasthan
        return;
      }

      e.preventDefault();

      // Active state highlight on header nav
      document.querySelectorAll('.navlinks a').forEach(l => l.classList.remove('active'));
      if (link.closest('.navlinks')) {
        link.classList.add('active');
      }

      const targetId = href.startsWith('#/') ? null : href.replace('#', '');
      const homeView = document.getElementById('view-home');
      const isHomeVisible = homeView && homeView.style.display !== 'none';

      if (!isHomeVisible) {
        window.location.hash = '#/home';
        setTimeout(() => {
          if (targetId) {
            scrollToSection(targetId);
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 120);
      } else {
        if (targetId) {
          scrollToSection(targetId);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };
  });
}

// Global state for progressive pagination on home view
let currentDestFilter = {
  region: 'all',
  type: 'all',
  budget: 'all',
  season: 'all',
  sort: 'featured',
  page: 1,
  pageSize: 12
};

function handleRoute() {
  const hash = window.location.hash || '#/home';
  const homeView = document.getElementById('view-home');
  const stateView = document.getElementById('view-state');
  const cityView = document.getElementById('view-city');
  const destView = document.getElementById('view-destination');
  const cinematicView = document.getElementById('view-cinematic');
  const journeyView = document.getElementById('view-journey');
  const fairView = document.getElementById('view-fair');
  const mainNav = document.querySelector('.nav');
  const mainFooter = document.querySelector('.footer');
  const assistantTrigger = document.getElementById('raahi-assistant-trigger');

  // Only scroll to top if navigating to a full page view route
  const isViewRoute = hash.startsWith('#/destinations/') || hash.startsWith('#/states/') || hash.startsWith('#/cities/') || hash === '#/journey' || hash.startsWith('#/cinematic/');
  if (isViewRoute) {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  // Cleanup active cinematic engine if navigating away from cinematic mode
  if (!hash.startsWith('#/cinematic/') && window.raahiCinematicEngineInstance) {
    try {
      window.raahiCinematicEngineInstance.destroy();
      window.raahiCinematicEngineInstance = null;
    } catch (e) {}
  }

  [homeView, stateView, cityView, destView, cinematicView, journeyView, fairView].forEach(v => {
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

    // Route matching
    if (hash.startsWith('#/destinations/')) {
      const slug = hash.replace('#/destinations/', '');
      if (destView) destView.style.display = 'block';
      renderDestinationView(slug);
    } else if (hash.startsWith('#/states/')) {
      const rest = hash.replace('#/states/', '');
      const parts = rest.split('/').filter(Boolean);
      if (parts.length >= 2) {
        // Hierarchical route: #/states/:stateSlug/:destSlug
        const destSlug = parts[1];
        if (destView) destView.style.display = 'block';
        renderDestinationView(destSlug);
      } else {
        // State route: #/states/:stateSlug
        const stateSlug = parts[0];
        if (stateView) stateView.style.display = 'block';
        renderStateView(stateSlug);
      }
    } else if (hash.startsWith('#/cities/')) {
      // Legacy city route or destination redirect
      const cityId = hash.replace('#/cities/', '');
      const dest = DataRegistry.getDestination(cityId);
      if (dest) {
        if (destView) destView.style.display = 'block';
        renderDestinationView(dest.slug);
      } else if (RAAHI_DATA.cities && RAAHI_DATA.cities[cityId]) {
        if (cityView) cityView.style.display = 'block';
        renderCityView(cityId);
      } else {
        if (stateView) stateView.style.display = 'block';
        renderStateView(cityId);
      }
    } else if (hash.startsWith('#/fair') || hash.startsWith('#fair')) {
      if (fairView) fairView.style.display = 'block';
      updateSEOMetadata('RAAHI FAIR — Know the Price Before You Pay // Official Rates & Fair Calculator', 'Verified transport fares, municipal auto meters, ASI tickets, and artisanal price transparency across India.');
      
      const queryIndex = hash.indexOf('?');
      const params = {};
      if (queryIndex !== -1) {
        const queryStr = hash.substring(queryIndex + 1);
        const searchParams = new URLSearchParams(queryStr);
        for (const [key, value] of searchParams.entries()) {
          params[key] = value;
        }
      }
      RaahiFair.renderFullPage('view-fair', params);
    } else if (hash === '#/journey') {
      if (journeyView) journeyView.style.display = 'block';
      renderJourneyBuilderView();
    } else {
      if (homeView) homeView.style.display = 'block';
      renderHomeView();

      const sectionId = (!hash.startsWith('#/') && hash.startsWith('#')) ? hash.replace('#', '') : null;
      if (sectionId) {
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    }
  }

  updateJourneyBadgeCount();
  updateAllSaveButtons();
}

/**
 * Render Master Pan-India Home View
 */
function renderHomeView() {
  document.title = 'RAAHI — Discover 28 States, 8 Union Territories & 111+ Destinations Across India';

  // 1. Mount India Map
  const mapMount = document.getElementById('india-map-mount');
  if (mapMount) {
    renderIndiaMap('india-map-mount');
  }

  // 2. Render States Grid with Region Filter Chips
  renderStatesGridWithFilter('all');
  setupStateRegionFilterListeners();

  // 3. Render Destinations Grid with Multi-Filter
  renderDestinationsGrid();
  setupDestinationsFilterListeners();

  // 4. Mount Raahi Fair Price Discovery Card
  const fairMount = document.getElementById('home-fair-card-mount');
  if (fairMount && !fairMount.hasChildNodes()) {
    RaahiFair.renderDiscoveryCard('home-fair-card-mount', {
      title: "Know the Fair Price Before You Pay",
      subtitle: "Official municipal auto rickshaw meters, ASI heritage entry tariffs, boat unions, and certified artisan craft benchmarks. Zero guesswork.",
      city: "jaipur"
    });
  }

  // 5. Render Stays Section
  renderStaysSection();
}

let currentStatesCarouselIndex = 0;
let currentFilteredStates = [];
let statesCarouselAutoTimer = null;
let currentStatesViewMode = 'carousel'; // 'carousel', 'rail', 'grid'

function renderStatesGridWithFilter(regionFilter = 'all') {
  const container = document.getElementById('states-grid-container');
  if (!container) return;

  const allStates = DataRegistry.getAllStates();
  currentFilteredStates = regionFilter === 'all' 
    ? allStates 
    : regionFilter === 'ut'
      ? allStates.filter(s => s.type === 'Union Territory')
      : allStates.filter(s => s.region.toLowerCase() === regionFilter.toLowerCase() && s.type !== 'Union Territory');

  currentStatesCarouselIndex = 0;
  renderStatesContainer();
}

function renderStatesContainer() {
  const container = document.getElementById('states-grid-container');
  if (!container) return;

  if (statesCarouselAutoTimer) {
    clearInterval(statesCarouselAutoTimer);
    statesCarouselAutoTimer = null;
  }

  if (currentStatesViewMode === 'carousel') {
    container.innerHTML = `
      <div class="states-carousel-banner-wrapper" style="position: relative; margin-top: 10px;">
        <!-- Left Floating Prev Arrow -->
        <button class="states-carousel-arrow prev" id="states-carousel-prev" aria-label="Previous Slide" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); z-index: 10; width: 44px; height: 44px; border-radius: 50%; background: rgba(7, 11, 9, 0.85); border: 1px solid var(--line-strong); color: #fff; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
          ‹
        </button>

        <!-- Right Floating Next Arrow -->
        <button class="states-carousel-arrow next" id="states-carousel-next" aria-label="Next Slide" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); z-index: 10; width: 44px; height: 44px; border-radius: 50%; background: rgba(7, 11, 9, 0.85); border: 1px solid var(--line-strong); color: #fff; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
          ›
        </button>

        <!-- Main Slide Container matching Photo 1 -->
        <div id="states-carousel-card-stage" style="min-height: 440px; border-radius: 16px; overflow: hidden; position: relative; border: 1px solid var(--line); box-shadow: 0 20px 40px rgba(0,0,0,0.5); transition: opacity 0.25s ease;">
          <!-- Card content generated by updateStatesCarouselStage() -->
        </div>

        <!-- Pagination Dots Bar -->
        <div id="states-carousel-dots-bar" style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 20px; flex-wrap: wrap;">
          <!-- Dots generated by JS -->
        </div>
      </div>
    `;

    setupStatesCarouselEvents();
    updateStatesCarouselStage();
    startStatesCarouselAutoPlay();

  } else if (currentStatesViewMode === 'rail') {
    container.innerHTML = `
      <div class="states-rail-slider-wrapper" style="position: relative;">
        <div class="rail" id="states-rail-slider" style="display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; scrollbar-width: thin;">
          ${currentFilteredStates.map((s) => {
            const destCount = s.destinationsCount || (s.featuredDestinations ? s.featuredDestinations.length : 3);
            return `
              <div class="state-card" style="flex: 0 0 320px; height: 440px; scroll-snap-align: start;" data-state="${s.slug}" onclick="window.location.hash='#/states/${s.slug}'">
                <img src="${s.heroImage}" alt="${s.name}" class="state-card-image" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
                <div class="state-dest-count">${destCount} DESTINATIONS</div>
                <div class="state-card-content">
                  <span class="eyebrow" style="margin-bottom: 4px;">${s.type.toUpperCase()} • ${s.region.toUpperCase()}</span>
                  <h3 class="state-card-name" style="font-size: 1.8rem;">${s.name}</h3>
                  <p class="state-card-tagline" style="font-size: 0.82rem;">${s.tagline}</p>
                  <span class="state-card-action">EXPLORE →</span>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  } else {
    // Grid View
    container.innerHTML = `
      <div class="states-grid">
        ${currentFilteredStates.map((s) => {
          const destCount = s.destinationsCount || (s.featuredDestinations ? s.featuredDestinations.length : 3);
          return `
            <div class="state-card" data-state="${s.slug}" onclick="window.location.hash='#/states/${s.slug}'">
              <img src="${s.heroImage}" alt="${s.name}" class="state-card-image" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
              <div class="state-dest-count">${destCount} DESTINATIONS • ${s.type === 'Union Territory' ? 'UT' : s.region.toUpperCase()}</div>
              <div class="state-card-content">
                <span class="eyebrow" style="margin-bottom: 6px;">${s.eyebrow || s.type.toUpperCase()}</span>
                <h3 class="state-card-name">${s.name}</h3>
                <p class="state-card-tagline">${s.tagline}</p>
                <span class="state-card-action">EXPLORE ${s.name.toUpperCase()} →</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }
}

function updateStatesCarouselStage() {
  const stage = document.getElementById('states-carousel-card-stage');
  const dotsBar = document.getElementById('states-carousel-dots-bar');
  if (!stage || currentFilteredStates.length === 0) return;

  if (currentStatesCarouselIndex >= currentFilteredStates.length) {
    currentStatesCarouselIndex = 0;
  }
  if (currentStatesCarouselIndex < 0) {
    currentStatesCarouselIndex = currentFilteredStates.length - 1;
  }

  const s = currentFilteredStates[currentStatesCarouselIndex];
  const destCount = s.destinationsCount || (s.featuredDestinations ? s.featuredDestinations.length : 3);
  const bestTime = s.quickStats ? s.quickStats.bestTime : 'Oct — Mar';
  const capital = s.quickStats ? s.quickStats.capital : s.capital;

  stage.style.opacity = '0.3';

  setTimeout(() => {
    stage.innerHTML = `
      <div class="states-hero-carousel-card" style="position: relative; min-height: 440px; display: flex; align-items: flex-end; padding: 40px; background: #070b09; overflow: hidden; cursor: pointer;" onclick="window.location.hash='#/states/${s.slug}'">
        <img src="${s.heroImage}" alt="${s.name}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: saturate(0.9) brightness(0.68); transition: transform 0.8s ease;" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
        
        <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(3,7,5,0.92) 0%, rgba(3,7,5,0.65) 50%, rgba(3,7,5,0.3) 100%), linear-gradient(0deg, rgba(3,7,5,0.95) 0%, transparent 60%); pointer-events: none;"></div>

        <div style="position: relative; z-index: 3; max-width: 680px;">
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 10px; flex-wrap: wrap;">
            <span style="font-family: var(--font-display); font-size: 0.72rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase;">
              ${s.region.toUpperCase()} INDIA • ${s.type.toUpperCase()}
            </span>
            <span style="font-size: 0.72rem; color: var(--muted);">&bull;</span>
            <span style="font-family: var(--font-display); font-size: 0.72rem; color: #fff; letter-spacing: 0.1em; background: rgba(0,0,0,0.5); padding: 3px 10px; border-radius: 100px; border: 1px solid var(--line);">
              DESTINATION ${currentStatesCarouselIndex + 1} OF ${currentFilteredStates.length}
            </span>
          </div>

          <h3 style="font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 600; text-transform: uppercase; color: var(--cream); margin: 0 0 10px 0; line-height: 1;">
            ${s.name}
          </h3>

          <p style="font-size: 0.98rem; color: var(--muted-bright); line-height: 1.6; margin-bottom: 20px; max-width: 580px;">
            ${s.tagline}
          </p>

          <!-- Badges Pill Row matching Photo 1 -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px;">
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--cream);">
              📍 Capital: ${capital}
            </span>
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--gold);">
              🏛️ ${destCount} Curated Destinations
            </span>
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--cream);">
              🌤️ Best: ${bestTime}
            </span>
          </div>

          <button class="btn gold" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; font-size: 0.82rem; box-shadow: 0 0 20px rgba(212,175,55,0.35);">
            ▶ EXPLORE ${s.name.toUpperCase()} CODEX →
          </button>
        </div>
      </div>
    `;
    stage.style.opacity = '1';
  }, 120);

  // Update Dots
  if (dotsBar) {
    dotsBar.innerHTML = currentFilteredStates.map((st, idx) => `
      <span class="states-dot ${idx === currentStatesCarouselIndex ? 'active' : ''}" 
            data-index="${idx}" 
            title="${st.name}"
            style="display: inline-block; width: ${idx === currentStatesCarouselIndex ? '28px' : '10px'}; height: 10px; border-radius: 100px; background: ${idx === currentStatesCarouselIndex ? 'var(--gold)' : 'rgba(255,255,255,0.25)'}; cursor: pointer; transition: all 0.3s ease;"></span>
    `).join('');

    dotsBar.querySelectorAll('.states-dot').forEach(dot => {
      dot.onclick = (e) => {
        e.stopPropagation();
        currentStatesCarouselIndex = parseInt(dot.dataset.index);
        updateStatesCarouselStage();
      };
    });
  }
}

function setupStatesCarouselEvents() {
  const prevBtn = document.getElementById('states-carousel-prev');
  const nextBtn = document.getElementById('states-carousel-next');

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      currentStatesCarouselIndex--;
      updateStatesCarouselStage();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      currentStatesCarouselIndex++;
      updateStatesCarouselStage();
    };
  }
}

function startStatesCarouselAutoPlay() {
  if (statesCarouselAutoTimer) clearInterval(statesCarouselAutoTimer);
  statesCarouselAutoTimer = setInterval(() => {
    if (currentStatesViewMode === 'carousel' && currentFilteredStates.length > 1) {
      currentStatesCarouselIndex++;
      updateStatesCarouselStage();
    }
  }, 5000);
}

function setupStateRegionFilterListeners() {
  const regionContainer = document.getElementById('states-region-chips');
  const viewToggleContainer = document.getElementById('states-view-mode-toggle');

  if (regionContainer) {
    const chips = regionContainer.querySelectorAll('.filter-chip');
    chips.forEach(chip => {
      chip.onclick = () => {
        chips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        const region = chip.dataset.region || 'all';
        renderStatesGridWithFilter(region);
      };
    });
  }

  if (viewToggleContainer) {
    const viewChips = viewToggleContainer.querySelectorAll('.filter-chip');
    viewChips.forEach(chip => {
      chip.onclick = () => {
        viewChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentStatesViewMode = chip.dataset.view || 'carousel';
        renderStatesContainer();
      };
    });
  }
}

let currentDestCarouselIndex = 0;
let currentFilteredDestinations = [];
let destCarouselAutoTimer = null;
let currentDestViewMode = 'carousel'; // 'carousel', 'rail', 'grid'

function renderDestinationsGrid() {
  const grid = document.getElementById('all-destinations-grid');
  const countLabel = document.getElementById('destinations-count-label');
  if (!grid) return;

  let list = DataRegistry.getAllDestinations();

  // Apply filters
  if (currentDestFilter.region !== 'all') {
    if (currentDestFilter.region === 'ut') {
      const utStateSlugs = DataRegistry.getAllStates().filter(s => s.type === 'Union Territory').map(s => s.slug);
      list = list.filter(d => utStateSlugs.includes(d.stateSlug) || d.region === 'Union Territory');
    } else {
      list = list.filter(d => d.region.toLowerCase() === currentDestFilter.region.toLowerCase());
    }
  }

  if (currentDestFilter.type !== 'all') {
    list = list.filter(d => d.type.toLowerCase().includes(currentDestFilter.type.toLowerCase()));
  }

  if (currentDestFilter.budget !== 'all') {
    list = list.filter(d => (d.budget && d.budget.tier) ? d.budget.tier.toLowerCase() === currentDestFilter.budget.toLowerCase() : true);
  }

  if (currentDestFilter.season !== 'all') {
    list = list.filter(d => {
      const best = (d.bestTimeToVisit || d.bestSeason || '').toLowerCase();
      if (currentDestFilter.season === 'winter') return best.includes('oct') || best.includes('nov') || best.includes('dec') || best.includes('jan') || best.includes('feb') || best.includes('mar');
      if (currentDestFilter.season === 'monsoon') return best.includes('jun') || best.includes('jul') || best.includes('aug') || best.includes('sep') || best.includes('monsoon');
      if (currentDestFilter.season === 'summer') return best.includes('apr') || best.includes('may') || best.includes('jun');
      return true;
    });
  }

  // Sort
  if (currentDestFilter.sort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentDestFilter.sort === 'rating') {
    list.sort((a, b) => (b.rating || 4.8) - (a.rating || 4.8));
  } else {
    // Featured / Default
    list.sort((a, b) => (b.cinematicAvailable ? 1 : 0) - (a.cinematicAvailable ? 1 : 0));
  }

  currentFilteredDestinations = list;
  const totalFiltered = list.length;

  if (countLabel) {
    countLabel.textContent = `Showing ${currentDestViewMode === 'grid' ? Math.min(currentDestFilter.page * currentDestFilter.pageSize, totalFiltered) : totalFiltered} of ${totalFiltered} destinations`;
  }

  currentDestCarouselIndex = 0;
  renderDestinationsContainer();
}

function renderDestinationsContainer() {
  const grid = document.getElementById('all-destinations-grid');
  const loadMoreBtn = document.getElementById('load-more-destinations-btn');
  if (!grid) return;

  if (destCarouselAutoTimer) {
    clearInterval(destCarouselAutoTimer);
    destCarouselAutoTimer = null;
  }

  if (currentDestViewMode === 'carousel') {
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    grid.className = '';
    grid.style.display = 'block';
    grid.style.gridTemplateColumns = 'none';

    grid.innerHTML = `
      <div class="dest-carousel-banner-wrapper" style="position: relative; margin-top: 10px; width: 100%;">
        <!-- Left Floating Prev Arrow -->
        <button class="states-carousel-arrow prev" id="dest-carousel-prev" aria-label="Previous Slide" style="position: absolute; left: 16px; top: 50%; transform: translateY(-50%); z-index: 10; width: 44px; height: 44px; border-radius: 50%; background: rgba(7, 11, 9, 0.85); border: 1px solid var(--line-strong); color: #fff; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
          ‹
        </button>

        <!-- Right Floating Next Arrow -->
        <button class="states-carousel-arrow next" id="dest-carousel-next" aria-label="Next Slide" style="position: absolute; right: 16px; top: 50%; transform: translateY(-50%); z-index: 10; width: 44px; height: 44px; border-radius: 50%; background: rgba(7, 11, 9, 0.85); border: 1px solid var(--line-strong); color: #fff; font-size: 1.4rem; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(10px); transition: all 0.2s ease; box-shadow: 0 8px 24px rgba(0,0,0,0.5);">
          ›
        </button>

        <!-- Main Slide Stage Container -->
        <div id="dest-carousel-card-stage" style="min-height: 440px; border-radius: 16px; overflow: hidden; position: relative; border: 1px solid var(--line); box-shadow: 0 20px 40px rgba(0,0,0,0.5); transition: opacity 0.25s ease;">
          <!-- Content rendered by updateDestCarouselStage() -->
        </div>

        <!-- Pagination Dots Bar -->
        <div id="dest-carousel-dots-bar" style="display: flex; justify-content: center; align-items: center; gap: 8px; margin-top: 20px; flex-wrap: wrap;">
          <!-- Dots rendered by JS -->
        </div>
      </div>
    `;

    setupDestCarouselEvents();
    updateDestCarouselStage();
    startDestCarouselAutoPlay();

  } else if (currentDestViewMode === 'rail') {
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
    grid.className = '';
    grid.style.display = 'block';
    grid.style.gridTemplateColumns = 'none';

    grid.innerHTML = `
      <div class="dest-rail-slider-wrapper" style="position: relative; width: 100%;">
        <div class="rail" id="dest-rail-slider" style="display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; padding-bottom: 16px; scrollbar-width: thin;">
          ${currentFilteredDestinations.map(dest => {
            const isSaved = isPlaceSaved(dest.id || dest.slug);
            const imgUrl = VERIFIED_IMAGE_MAP[dest.slug] || VERIFIED_IMAGE_MAP[dest.id] || dest.image || dest.heroImage || 'assets/images/destinations/amber-fort.jpg';
            const descText = dest.tagline || dest.shortDescription || dest.shortDesc || (dest.description ? dest.description.slice(0, 80) + '...' : '');
            return `
              <div class="destination-card" style="flex: 0 0 320px; height: 460px; scroll-snap-align: start;" onclick="window.location.hash='#/destinations/${dest.slug}'">
                <img src="${imgUrl}" alt="${dest.name}" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
                <div class="dest-copy">
                  <small>${dest.state.toUpperCase()} • ${dest.region.toUpperCase()}</small>
                  <h3>${dest.name}</h3>
                  <p>${descText}</p>
                </div>
                <div class="enter-circle">→</div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  } else {
    // Grid View
    grid.className = 'states-grid';
    grid.style.display = 'grid';
    grid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(340px, 1fr))';

    const visibleList = currentFilteredDestinations.slice(0, currentDestFilter.page * currentDestFilter.pageSize);

    grid.innerHTML = visibleList.map(dest => {
      const isSaved = isPlaceSaved(dest.id || dest.slug);
      const imgUrl = VERIFIED_IMAGE_MAP[dest.slug] || VERIFIED_IMAGE_MAP[dest.id] || dest.image || dest.heroImage || 'assets/images/destinations/amber-fort.jpg';
      const descText = dest.tagline || dest.shortDescription || dest.shortDesc || (dest.description ? dest.description.slice(0, 100) + '...' : '');
      return `
        <div class="state-card" style="height: 480px;" onclick="window.location.hash='#/destinations/${dest.slug}'">
          <img src="${imgUrl}" alt="${dest.name}" class="state-card-image" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
          <div class="state-dest-count">${dest.type.toUpperCase()} • ⏱️ ${dest.idealDuration || '2-3 Days'}</div>
          <div class="state-card-content">
            <span class="eyebrow" style="margin-bottom: 4px;">${dest.state} • ${dest.region.toUpperCase()}</span>
            <h3 class="state-card-name" style="font-size: 1.9rem;">${dest.name}</h3>
            <p class="state-card-tagline" style="font-size: 0.88rem;">${descText}</p>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
              <span class="state-card-action">EXPLORE DESTINATION →</span>
              <button 
                class="btn-save-journey ${isSaved ? 'saved' : ''}" 
                style="padding: 6px 14px; font-size: 0.72rem;" 
                data-save-place-id="${dest.id || dest.slug}" 
                data-saved-text="♥ Saved" 
                data-unsaved-text="♡ Save" 
                onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${dest.id || dest.slug}');">
                ${isSaved ? '♥ Saved' : '♡ Save'}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (loadMoreBtn) {
      if (visibleList.length >= currentFilteredDestinations.length) {
        loadMoreBtn.style.display = 'none';
      } else {
        loadMoreBtn.style.display = 'inline-flex';
        loadMoreBtn.textContent = `LOAD MORE DESTINATIONS (${currentFilteredDestinations.length - visibleList.length} REMAINING) ↓`;
      }
    }
  }
}

function updateDestCarouselStage() {
  const stage = document.getElementById('dest-carousel-card-stage');
  const dotsBar = document.getElementById('dest-carousel-dots-bar');
  if (!stage || currentFilteredDestinations.length === 0) return;

  if (currentDestCarouselIndex >= currentFilteredDestinations.length) {
    currentDestCarouselIndex = 0;
  }
  if (currentDestCarouselIndex < 0) {
    currentDestCarouselIndex = currentFilteredDestinations.length - 1;
  }

  const dest = currentFilteredDestinations[currentDestCarouselIndex];
  const isSaved = isPlaceSaved(dest.id || dest.slug);
  const imgUrl = VERIFIED_IMAGE_MAP[dest.slug] || VERIFIED_IMAGE_MAP[dest.id] || dest.image || dest.heroImage || 'assets/images/destinations/amber-fort.jpg';
  const durationText = dest.idealDuration || '2-3 Days';
  const bestSeasonText = dest.bestSeason || dest.bestTimeToVisit || 'OCT — MAR';
  const descText = dest.tagline || dest.shortDescription || dest.shortDesc || (dest.description ? dest.description.slice(0, 140) + '...' : '');

  stage.style.opacity = '0.3';

  setTimeout(() => {
    stage.innerHTML = `
      <div class="dest-hero-carousel-card" style="position: relative; min-height: 440px; display: flex; align-items: flex-end; padding: 40px; background: #070b09; overflow: hidden; cursor: pointer;" onclick="window.location.hash='#/destinations/${dest.slug}'">
        <img src="${imgUrl}" alt="${dest.name}" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: saturate(0.9) brightness(0.68); transition: transform 0.8s ease;" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
        
        <div style="position: absolute; inset: 0; background: linear-gradient(90deg, rgba(3,7,5,0.92) 0%, rgba(3,7,5,0.65) 50%, rgba(3,7,5,0.3) 100%), linear-gradient(0deg, rgba(3,7,5,0.95) 0%, transparent 60%); pointer-events: none;"></div>

        <div style="position: relative; z-index: 3; max-width: 680px;">
          <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 10px; flex-wrap: wrap;">
            <span style="font-family: var(--font-display); font-size: 0.72rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase;">
              ${dest.state.toUpperCase()} • ${dest.region.toUpperCase()} INDIA
            </span>
            <span style="font-size: 0.72rem; color: var(--muted);">&bull;</span>
            <span style="font-family: var(--font-display); font-size: 0.72rem; color: #fff; letter-spacing: 0.1em; background: rgba(0,0,0,0.5); padding: 3px 10px; border-radius: 100px; border: 1px solid var(--line);">
              MONUMENT ${currentDestCarouselIndex + 1} OF ${currentFilteredDestinations.length}
            </span>
          </div>

          <h3 style="font-family: var(--font-display); font-size: clamp(2.2rem, 5vw, 3.8rem); font-weight: 600; text-transform: uppercase; color: var(--cream); margin: 0 0 10px 0; line-height: 1;">
            ${dest.name}
          </h3>

          <p style="font-size: 0.98rem; color: var(--muted-bright); line-height: 1.6; margin-bottom: 20px; max-width: 580px;">
            ${descText}
          </p>

          <!-- Badges Pill Row matching Photo 1 -->
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px;">
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--cream);">
              📍 ${dest.state}
            </span>
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--gold);">
              🏛️ ${dest.type}
            </span>
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--cream);">
              ⏱️ ${durationText}
            </span>
            <span class="badge-pill" style="display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-display); font-size: 0.72rem; background: rgba(13, 20, 16, 0.8); backdrop-filter: blur(8px); border: 1px solid var(--line); padding: 6px 14px; border-radius: 100px; color: var(--cream);">
              🌤️ Best: ${bestSeasonText}
            </span>
          </div>

          <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
            <button class="btn gold" style="display: inline-flex; align-items: center; gap: 8px; padding: 12px 28px; font-size: 0.82rem; box-shadow: 0 0 20px rgba(212,175,55,0.35);">
              ▶ EXPLORE ${dest.name.toUpperCase()} →
            </button>
            <button 
              class="btn-save-journey ${isSaved ? 'saved' : ''}" 
              style="padding: 12px 20px; font-size: 0.78rem;" 
              data-save-place-id="${dest.id || dest.slug}" 
              data-saved-text="♥ Saved to Journey" 
              data-unsaved-text="♡ Save to Journey" 
              onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${dest.id || dest.slug}');">
              ${isSaved ? '♥ Saved to Journey' : '♡ Save to Journey'}
            </button>
          </div>
        </div>
      </div>
    `;
    stage.style.opacity = '1';
  }, 120);

  // Update Dots
  if (dotsBar) {
    const maxDots = 20;
    const total = Math.min(currentFilteredDestinations.length, maxDots);
    dotsBar.innerHTML = currentFilteredDestinations.slice(0, total).map((d, idx) => `
      <span class="dest-dot ${idx === currentDestCarouselIndex ? 'active' : ''}" 
            data-index="${idx}" 
            title="${d.name}"
            style="display: inline-block; width: ${idx === currentDestCarouselIndex ? '28px' : '10px'}; height: 10px; border-radius: 100px; background: ${idx === currentDestCarouselIndex ? 'var(--gold)' : 'rgba(255,255,255,0.25)'}; cursor: pointer; transition: all 0.3s ease;"></span>
    `).join('');

    dotsBar.querySelectorAll('.dest-dot').forEach(dot => {
      dot.onclick = (e) => {
        e.stopPropagation();
        currentDestCarouselIndex = parseInt(dot.dataset.index);
        updateDestCarouselStage();
      };
    });
  }
}

function setupDestCarouselEvents() {
  const prevBtn = document.getElementById('dest-carousel-prev');
  const nextBtn = document.getElementById('dest-carousel-next');

  if (prevBtn) {
    prevBtn.onclick = (e) => {
      e.stopPropagation();
      currentDestCarouselIndex--;
      updateDestCarouselStage();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = (e) => {
      e.stopPropagation();
      currentDestCarouselIndex++;
      updateDestCarouselStage();
    };
  }
}

function startDestCarouselAutoPlay() {
  if (destCarouselAutoTimer) clearInterval(destCarouselAutoTimer);
  destCarouselAutoTimer = setInterval(() => {
    if (currentDestViewMode === 'carousel' && currentFilteredDestinations.length > 1) {
      currentDestCarouselIndex++;
      updateDestCarouselStage();
    }
  }, 5000);
}

function setupDestinationsFilterListeners() {
  const regionSelect = document.getElementById('dest-filter-region');
  const typeSelect = document.getElementById('dest-filter-type');
  const budgetSelect = document.getElementById('dest-filter-budget');
  const seasonSelect = document.getElementById('dest-filter-season');
  const sortSelect = document.getElementById('dest-filter-sort');
  const loadMoreBtn = document.getElementById('load-more-destinations-btn');
  const destViewToggle = document.getElementById('dest-view-mode-toggle');

  if (destViewToggle) {
    const viewChips = destViewToggle.querySelectorAll('.filter-chip');
    viewChips.forEach(chip => {
      chip.onclick = () => {
        viewChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        currentDestViewMode = chip.dataset.view || 'carousel';
        currentDestCarouselIndex = 0;
        renderDestinationsContainer();
      };
    });
  }

  if (regionSelect) {
    regionSelect.onchange = (e) => {
      currentDestFilter.region = e.target.value;
      currentDestFilter.page = 1;
      renderDestinationsGrid();
    };
  }

  if (typeSelect) {
    typeSelect.onchange = (e) => {
      currentDestFilter.type = e.target.value;
      currentDestFilter.page = 1;
      renderDestinationsGrid();
    };
  }

  if (budgetSelect) {
    budgetSelect.onchange = (e) => {
      currentDestFilter.budget = e.target.value;
      currentDestFilter.page = 1;
      renderDestinationsGrid();
    };
  }

  if (seasonSelect) {
    seasonSelect.onchange = (e) => {
      currentDestFilter.season = e.target.value;
      currentDestFilter.page = 1;
      renderDestinationsGrid();
    };
  }

  if (sortSelect) {
    sortSelect.onchange = (e) => {
      currentDestFilter.sort = e.target.value;
      renderDestinationsGrid();
    };
  }

  if (loadMoreBtn) {
    loadMoreBtn.onclick = () => {
      currentDestFilter.page += 1;
      renderDestinationsContainer();
    };
  }
}

function renderVerifiedStayCard(stay) {
  const safeImg = sanitizeImageUrl(stay.image, stay.category);
  return `
    <div class="stay-card" data-stay-category="${stay.category || 'palaces'}">
      <img src="${safeImg}" alt="${stay.name}" loading="lazy" onerror="this.onerror=null; this.src='https://commons.wikimedia.org/wiki/Special:FilePath/The_Imperial_New_Delhi.jpg?width=800';" />
      <div class="stay-card-info">
        <h4>${stay.name}</h4>
        <p>${stay.location || stay.desc || ''}</p>
        <span>${stay.price || stay.priceRange || '₹18,500/night'}</span>
      </div>
    </div>
  `;
}

function renderStaysSection() {
  const container = document.getElementById('stays-editorial-grid');
  if (!container) return;

  const staysToRender = (typeof VERIFIED_STAYS !== 'undefined' && VERIFIED_STAYS.length > 0) ? VERIFIED_STAYS : staysData;

  container.innerHTML = staysToRender.map(stay => renderVerifiedStayCard(stay)).join('');
}


/**
 * Render Dedicated State / Union Territory View
 */
function renderStateView(stateSlug) {
  const state = DataRegistry.getState(stateSlug);
  if (!state) {
    navigateTo('#/home');
    return;
  }

  document.title = `${state.name} (${state.type}) — RAAHI Pan-India Travel Discovery`;
  const container = document.getElementById('view-state');
  if (!container) return;

  const stateDests = DataRegistry.getDestinationsByState(state.slug);
  const destsCount = stateDests.length;

  container.innerHTML = `
    <div class="breadcrumb-bar wrap">
      <a href="#/home">RAAHI</a>
      <span class="sep">/</span>
      <a href="#states">States & UTs</a>
      <span class="sep">/</span>
      <span style="color: var(--cream);">${state.name}</span>
    </div>

    <div class="state-hero">
      <div class="state-hero-bg" style="background-image: url('${state.heroImage}'); filter: saturate(1.1) brightness(0.48);"></div>
      <div class="state-hero-content">
        <span class="eyebrow">${state.eyebrow || (state.type.toUpperCase() + ' // ' + state.region.toUpperCase() + ' INDIA')}</span>
        <h1 class="state-hero-title">${state.name}</h1>
        <p class="state-hero-tagline">${state.tagline}</p>
      </div>
    </div>

    <div class="state-stats-bar">
      <div class="stat-box">
        <span class="stat-label">Administrative Status</span>
        <span class="stat-value">${state.type}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Curated Destinations</span>
        <span class="stat-value">${destsCount} Premier Hubs</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Ideal Season</span>
        <span class="stat-value">${state.quickStats ? state.quickStats.bestTime : (state.bestTimeToVisit || 'Oct — Mar')}</span>
      </div>
      <div class="stat-box">
        <span class="stat-label">Capital / Headquarters</span>
        <span class="stat-value">${state.quickStats ? state.quickStats.capital : state.capital}</span>
      </div>
    </div>

    <div class="wrap">
      <!-- State Narrative Section -->
      <section class="state-story-section" style="padding: 60px 0 40px;">
        <div class="story-grid">
          <div>
            <span class="eyebrow">THE REGIONAL NARRATIVE</span>
            <h2 class="heading-large" style="text-transform: uppercase;">A Tapestry of Soul & Stone</h2>
          </div>
          <div>
            <p class="lead" style="color: var(--cream); font-size: 1.18rem; line-height: 1.8;">
              ${state.story || state.narrative || `Discover the timeless cultural traditions, architectural marvels, and breathtaking landscapes of ${state.name}.`}
            </p>
          </div>
        </div>
      </section>

      <!-- Curated Destinations in this State -->
      <section style="padding: 40px 0 60px;">
        <div class="section-head">
          <div>
            <span class="eyebrow">EXPLORE ${state.name.toUpperCase()}</span>
            <h2 class="heading-medium" style="text-transform: uppercase;">Curated Destinations (${destsCount})</h2>
          </div>
          <p style="color: var(--muted); font-size: 0.9rem; max-width: 340px;">
            Select any destination below for in-depth travel intelligence, pacing, and 3D exploration.
          </p>
        </div>

        <div class="states-grid" style="grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));">
          ${stateDests.map(dest => {
            const isSaved = isPlaceSaved(dest.id || dest.slug);
            const imgUrl = VERIFIED_IMAGE_MAP[dest.slug] || dest.heroImage || 'assets/images/destinations/amber-fort.jpg';
            return `
              <div class="state-card" style="height: 480px;" onclick="window.location.hash='#/destinations/${dest.slug}'">
                <img src="${imgUrl}" alt="${dest.name}" class="state-card-image" loading="lazy" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'" />
                <div class="state-dest-count">${dest.type.toUpperCase()} • ⏱️ ${dest.idealDuration || '2-3 Days'}</div>
                <div class="state-card-content">
                  <span class="eyebrow" style="margin-bottom: 4px;">${state.name} • ${dest.bestSeason || 'BEST: OCT-MAR'}</span>
                  <h3 class="state-card-name" style="font-size: 2.1rem;">${dest.name}</h3>
                  <p class="state-card-tagline" style="font-size: 0.88rem;">${dest.tagline || dest.shortDesc || dest.overview.slice(0, 100) + '...'}</p>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px;">
                    <span class="state-card-action">EXPLORE DESTINATION →</span>
                    <button 
                      class="btn-save-journey ${isSaved ? 'saved' : ''}" 
                      style="padding: 6px 14px; font-size: 0.72rem;" 
                      data-save-place-id="${dest.id || dest.slug}" 
                      data-saved-text="♥ Saved" 
                      data-unsaved-text="♡ Save" 
                      onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${dest.id || dest.slug}');">
                      ${isSaved ? '♥ Saved' : '♡ Save'}
                    </button>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Signature Experiences -->
      ${state.experiences && state.experiences.length > 0 ? `
        <section style="padding: 40px 0 60px; border-top: 1px solid var(--line);">
          <span class="eyebrow">SIGNATURE EXPERIENCES</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Beyond the Obvious</h2>
          <div class="editorial-grid">
            ${state.experiences.map((exp) => `
              <div class="editorial-card">
                <span class="editorial-tag">${exp.tag || 'EXPERIENCE'}</span>
                <h3>${exp.title}</h3>
                <p>${exp.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Culinary Traditions -->
      ${state.food && state.food.length > 0 ? `
        <section style="padding: 40px 0 60px; border-top: 1px solid var(--line);">
          <span class="eyebrow">CULINARY TRADITIONS</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Taste of the Soil</h2>
          <div class="editorial-grid">
            ${state.food.map((f) => `
              <div class="editorial-card">
                <span class="editorial-tag">${f.region || state.name}</span>
                <h3>${f.name}</h3>
                <p>${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- Living Heritage -->
      ${state.culture ? `
        <section style="padding: 40px 0 60px; border-top: 1px solid var(--line);">
          <span class="eyebrow">LIVING HERITAGE</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Crafts & Lineages</h2>
          <div class="travel-info-box">
            <div class="info-item">
              <h4>Traditional Crafts</h4>
              <p>${state.culture.crafts || 'Centuries of indigenous artisan techniques.'}</p>
            </div>
            <div class="info-item">
              <h4>Major Festivals</h4>
              <p>${state.culture.festivals || 'Vibrant regional celebrations.'}</p>
            </div>
            <div class="info-item">
              <h4>Music & Rhythms</h4>
              <p>${state.culture.music || 'Classical and folk music traditions.'}</p>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- Practical Intelligence -->
      ${state.travelInfo ? `
        <section style="padding: 40px 0 60px; border-top: 1px solid var(--line);">
          <span class="eyebrow">PRACTICAL INTELLIGENCE</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Travel Essentials</h2>
          <div class="travel-info-box">
            <div class="info-item">
              <h4>Airports & Gateways</h4>
              <p>${state.travelInfo.airports || 'Regional and international flight gateways.'}</p>
            </div>
            <div class="info-item">
              <h4>Rail & Highway Corridors</h4>
              <p>${state.travelInfo.railways || 'National highway and rail network linkages.'}</p>
            </div>
            <div class="info-item">
              <h4>Seasonal Advice</h4>
              <p>${state.travelInfo.seasonTips || 'Plan according to regional weather patterns.'}</p>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- Live Google AI Knowledge Integration -->
      <section style="padding: 40px 0 80px; border-top: 1px solid var(--line);">
        <div style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(13, 20, 16, 0.95) 100%); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 16px; padding: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
          <div>
            <span style="font-family: var(--font-display); font-size: 0.72rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase;">✦ GOOGLE GEMINI AI KNOWLEDGE ENGINE</span>
            <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--cream); margin: 6px 0;">Have a question about ${state.name}?</h3>
            <p style="color: var(--muted-bright); font-size: 0.92rem; margin: 0; max-width: 580px;">Ask about hidden gems, 3-day travel routes, regional cuisine, or historical facts about ${state.name} powered by live Google Knowledge.</p>
          </div>
          <button class="btn gold" onclick="window.raahiAskAssistant('Tell me all details, hidden gems, and travel tips for ${state.name}')" style="padding: 14px 28px; font-size: 0.85rem; box-shadow: 0 0 25px rgba(212,175,55,0.35);">
            ⚡ ASK GOOGLE AI ABOUT ${state.name.toUpperCase()} →
          </button>
        </div>
      </section>

      <div style="text-align: center; padding: 40px 0 60px; border-top: 1px solid var(--line); display: flex; gap: 16px; justify-content: center;">
        <button class="btn light" onclick="window.location.hash='#states'">
          ← Explore All 36 States & UTs
        </button>
        <button class="btn" onclick="window.location.hash='#/home'">
          Home
        </button>
      </div>
    </div>
  `;
}

/**
 * Render Universal Destination View (111+ destinations)
 */
function renderDestinationView(destSlug) {
  let dest = DataRegistry.getDestination(destSlug);

  // Fallback lookup
  if (!dest) {
    const all = DataRegistry.getAllDestinations();
    dest = all.find(d => d.id === destSlug || d.slug === destSlug || d.name.toLowerCase() === destSlug.toLowerCase().replace(/-/g, ' '));
  }

  // Legacy place fallback
  if (!dest && RAAHI_DATA.places && RAAHI_DATA.places[destSlug]) {
    const p = RAAHI_DATA.places[destSlug];
    const city = (RAAHI_DATA.cities && RAAHI_DATA.cities[p.cityId]) || { name: p.city || 'India', stateName: p.state || 'India' };
    dest = {
      id: p.id,
      name: p.name,
      slug: p.id,
      state: city.stateName || 'India',
      stateSlug: p.stateId || 'rajasthan',
      region: 'North',
      type: p.category || 'Heritage Landmark',
      tagline: p.shortDesc || 'Historic architectural monument',
      overview: p.overview || p.shortDesc || 'An iconic historical destination.',
      whyItMatters: p.whyItMatters || 'Preserves vital cultural lineage.',
      heroImage: VERIFIED_IMAGE_MAP[p.id] || p.heroImage || 'assets/images/destinations/amber-fort.jpg',
      idealDuration: p.durationNeeded || '2-3 Hours',
      bestTimeToVisit: 'October to March',
      bestSeason: 'OCT — MAR',
      attractions: p.whatToSee ? p.whatToSee.map(s => ({ name: s.title, desc: s.desc })) : [],
      experiences: p.experiences ? p.experiences.map(e => ({ name: e.title, desc: e.desc })) : [],
      foods: p.foodNearby ? p.foodNearby.map(f => ({ name: f.name, desc: f.desc })) : [],
      history: p.history || 'Centuries of rich architectural heritage.',
      didYouKnow: p.didYouKnow || [],
      knowBefore: p.knowBeforeYouGo || [],
      hiddenGems: p.hiddenGems || [],
      placesNearby: p.placesNearby || [],
      stays: [],
      travelInfo: p.travelInfo || {},
      cinematicAvailable: p.id === 'amber-fort' || p.hasCinematic
    };
  }

  if (!dest) {
    navigateTo('#/home');
    return;
  }

  document.title = `${dest.name} (${dest.state}) — RAAHI Travel Intelligence`;

  const container = document.getElementById('view-destination');
  if (!container) return;

  const isSaved = isPlaceSaved(dest.id || dest.slug);
  const heroImg = VERIFIED_IMAGE_MAP[dest.slug] || dest.heroImage || 'assets/images/destinations/amber-fort.jpg';
  const durationText = dest.idealDuration || '2–3 Days';
  const bestSeasonText = dest.bestSeason || dest.bestTimeToVisit || 'OCT — MAR';
  const crowdLevelText = (dest.crowdLevel || (dest.slug === 'amber-fort' || dest.slug === 'taj-mahal' || dest.slug === 'dashashwamedh-ghat' ? 'HIGH' : 'MODERATE')).toUpperCase();
  const locationText = `${dest.name.toUpperCase()}, ${dest.state.toUpperCase()}`;

  // Time periods
  const timePeriods = [
    { period: "Sunrise", icon: "🌅", hours: "05:30 – 07:30 AM", recommended: dest.slug === 'taj-mahal' || dest.slug === 'dashashwamedh-ghat' || dest.slug === 'munnar-tea' || dest.slug === 'pangong-lake' || dest.slug === 'radhanagar-beach', reason: "Soft pastel lighting, fresh morning air, and undisturbed reflections." },
    { period: "Morning", icon: "☀️", hours: "08:30 – 11:30 AM", recommended: true, reason: "Comfortable temperatures, clear visibility, and low group tour traffic." },
    { period: "Afternoon", icon: "🌤", hours: "12:00 – 03:30 PM", recommended: dest.type.includes('Museum') || dest.slug === 'jantar-mantar', reason: "Ideal for indoor galleries, shaded courtyards, or solar observatories." },
    { period: "Sunset", icon: "🌇", hours: "04:30 – 06:30 PM", recommended: dest.slug === 'amber-fort' || dest.slug === 'alleppey-backwaters' || dest.slug === 'hampi-ruins' || dest.slug === 'mehrangarh-fort', reason: "Spectacular golden hour tones across ancient stone ramparts and waterways." },
    { period: "Evening", icon: "🌙", hours: "07:00 – 09:30 PM", recommended: dest.slug === 'dashashwamedh-ghat' || dest.slug === 'golden-temple', reason: "Atmospheric evening illuminations, sacred bells, and lighted water reflections." }
  ];

  const crowdPatternList = [
    { time: "Early morning (06:00 – 09:00)", status: "Low", statusClass: "low", feel: "Quiet & Serene — Minimal wait times, peaceful photography" },
    { time: "Late morning (09:30 – 12:30)", status: "Moderate", statusClass: "moderate", feel: "Steady Flow — Independent travelers and guided groups arrive" },
    { time: "Afternoon (01:00 – 04:00)", status: "High", statusClass: "high", feel: "Peak Busy — Heaviest footfall in central courtyards and viewpoints" },
    { time: "Evening (04:30 – 07:00)", status: "Moderate", statusClass: "moderate", feel: "Pleasant — Golden hour visitors and cool evening breezes" }
  ];

  const facts = (dest.didYouKnow && dest.didYouKnow.length > 0) ? dest.didYouKnow : [
    `${dest.name} is celebrated as one of ${dest.state}'s most culturally significant landmarks.`,
    `Engineered with regional craftsmanship adapted precisely to local climate and terrain.`,
    `Protected as part of India's living cultural and architectural heritage network.`
  ];

  container.innerHTML = `
    <div class="breadcrumb-bar wrap">
      <a href="#/home">RAAHI</a>
      <span class="sep">/</span>
      <a href="#/states/${dest.stateSlug}">${dest.state}</a>
      <span class="sep">/</span>
      <span style="color: var(--cream);">${dest.name}</span>
    </div>

    <div class="dest-hero">
      <div class="dest-hero-bg" style="background-image: url('${heroImg}');"></div>
      <div class="dest-hero-content">
        <div>
          <div class="dest-hero-loc">${dest.type.toUpperCase()} • ${dest.state.toUpperCase()} (${dest.region.toUpperCase()})</div>
          <h1 class="dest-hero-title">${dest.name}</h1>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          ${dest.cinematicAvailable ? `
            <button class="btn-cinematic-launch" onclick="window.location.hash='#/cinematic/${dest.slug}'" style="background: linear-gradient(135deg, #d4af37 0%, #b89628 100%); color: #030705; font-weight: 700; border: none; box-shadow: 0 0 25px rgba(212,175,55,0.45); padding: 12px 24px; border-radius: 100px; display: inline-flex; align-items: center; gap: 8px; cursor: pointer; transition: transform 0.2s ease;">
              ⚡ ENTER CINEMATIC 3D EXPEDITION →
            </button>
          ` : ''}
          <button class="btn-save-journey ${isSaved ? 'saved' : ''}" data-save-place-id="${dest.id || dest.slug}" data-saved-text="♥ SAVED TO JOURNEY" data-unsaved-text="♡ SAVE TO MY JOURNEY" onclick="window.raahiToggleSaveJourney('${dest.id || dest.slug}')">
            ${isSaved ? '♥ SAVED TO JOURNEY' : '♡ SAVE TO MY JOURNEY'}
          </button>
          <button class="btn" style="border-color: rgba(212, 175, 55, 0.45); color: var(--cream);" onclick="window.raahiOpenMapsModal('${dest.slug}')">
            📍 View on Google Maps
          </button>
        </div>
      </div>
    </div>

    <!-- Quick Intelligence Summary Strip -->
    <div class="quick-intel-strip">
      <div class="quick-intel-tag-row">
        <span>${dest.type.toUpperCase()} · ${dest.state.toUpperCase()} · INDIA</span>
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
        <a href="#attractions" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">TOP ATTRACTIONS</a>
        <a href="#know-before" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">KNOW BEFORE YOU GO</a>
        <a href="#taste" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">TASTE THE PLACE</a>
        <a href="#where-to-stay" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">WHERE TO STAY</a>
        <a href="#travel-info" class="btn" style="padding: 6px 14px; font-size: 0.7rem;">VISITOR INFO</a>
      </div>
    </div>

    <div class="wrap dest-content-section">
      <!-- 1. Destination Overview -->
      <div class="overview-grid" id="overview" style="padding: 40px 0 20px;">
        <div>
          <span class="eyebrow">DESTINATION OVERVIEW</span>
          <h2 class="heading-medium" style="text-transform: uppercase; margin-bottom: 1.5rem;">The Architecture of Memory</h2>
          <p class="lead" style="color: var(--cream); font-size: 1.15rem; line-height: 1.8;">
            ${dest.overview}
          </p>
        </div>
        <div>
          <div class="why-matters-card">
            <span class="eyebrow" style="color: var(--gold); margin-bottom: 8px;">SIGNIFICANCE</span>
            <h3>Why It Matters</h3>
            <p style="color: var(--muted); line-height: 1.7; font-size: 0.95rem;">
              ${dest.whyItMatters || dest.tagline || `A testament to Indian architectural and cultural greatness.`}
            </p>
          </div>
        </div>
      </div>

      <!-- 2. Best Time & Crowd Feel Section -->
      <section class="best-time-section" id="best-time" style="padding: 40px 0;">
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
              ${dest.bestTimeReason || 'Early morning or late afternoon arrival ensures comfortable walking temperatures and optimal lighting for exploration.'}
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
                * Note: Typical seasonal patterns based on regional tourism analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- 3. Did You Know? Facts -->
      <section id="did-you-know" style="padding: 20px 0 40px;">
        <div class="did-you-know-card">
          <div class="did-you-know-header">
            <span class="did-you-know-badge">🏛️ DID YOU KNOW?</span>
            <span class="eyebrow" style="margin: 0;">AUTHENTIC HISTORICAL & ARCHITECTURAL FACTS</span>
          </div>
          <div class="facts-list">
            ${facts.map(f => `
              <div class="fact-quote-item">
                ${f}
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- 4. Key Attractions -->
      ${dest.attractions && dest.attractions.length > 0 ? `
        <section style="padding: 40px 0;" id="attractions">
          <span class="eyebrow">KEY HIGHLIGHTS</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">What to See & Experience</h2>
          <div class="what-to-see-grid">
            ${dest.attractions.map((sight) => `
              <div class="sight-card">
                <h4>${sight.name || sight.title}</h4>
                <p>${sight.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 5. Know Before You Go -->
      <section style="padding: 40px 0;" id="know-before">
        <span class="eyebrow">LOCAL INTELLIGENCE</span>
        <h2 class="heading-medium" style="text-transform: uppercase;">Know Before You Go</h2>
        <div class="travel-info-box">
          ${(dest.knowBefore && dest.knowBefore.length > 0 ? dest.knowBefore : [
            { title: "Footwear & Terrain", tip: "Wear comfortable walking footwear with firm grip for stone ramparts and natural pathways." },
            { title: "Photography Guidelines", tip: "Handheld photography and smartphones welcome. Professional rigs or drones require local permits." },
            { title: "Queue Bypass & Timing", tip: "Early morning arrival (around 08:30 AM) ensures direct access without long ticket queues." },
            { title: "Cultural Attire", tip: "Modest attire covering shoulders and knees is appreciated at sacred and consecrated shrines." }
          ]).map(k => `
            <div class="info-item">
              <h4>${k.title}</h4>
              <p>${k.tip}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 5b. Local Fair Price Intelligence (Raahi Fair) -->
      ${RaahiFair.renderDestinationFairBlock(dest.slug || dest.id)}

      <!-- 6. History & Heritage -->
      ${dest.history ? `
        <section style="padding: 60px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); margin: 40px 0;" id="history">
          <div class="story-grid">
            <div>
              <span class="eyebrow">CHRONICLES & LINEAGE</span>
              <h2 class="heading-large" style="text-transform: uppercase;">Centuries of History</h2>
            </div>
            <div>
              <p class="lead" style="line-height: 1.8; font-size: 1.05rem;">
                ${dest.history}
              </p>
            </div>
          </div>
        </section>
      ` : ''}

      <!-- 7. Taste the Place -->
      ${dest.foods && dest.foods.length > 0 ? `
        <section style="padding: 40px 0;" id="taste">
          <span class="eyebrow">CULINARY INTELLIGENCE</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Taste the Place // ${dest.name}</h2>
          <div class="nearby-grid">
            ${dest.foods.map((f) => `
              <div class="nearby-card">
                <span class="tag-pill">${f.type || 'Regional Specialty'}</span>
                <h4>${f.name}</h4>
                <p>${f.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 8. Where to Stay -->
      ${dest.stays && dest.stays.length > 0 ? `
        <section style="padding: 40px 0;" id="where-to-stay">
          <span class="eyebrow">SANCTUARIES OF REST</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Recommended Stays in ${dest.name}</h2>
          <div class="editorial-grid">
            ${dest.stays.map(s => `
              <div class="editorial-card">
                <span class="editorial-tag">${s.tier || 'Heritage'} Stay</span>
                <h3>${s.name}</h3>
                <p>${s.desc}</p>
              </div>
            `).join('')}
          </div>
        </section>
      ` : ''}

      <!-- 9. Practical Visitor Info -->
      ${dest.travelInfo ? `
        <section style="padding: 40px 0 60px;" id="travel-info">
          <span class="eyebrow">VISITOR INTELLIGENCE</span>
          <h2 class="heading-medium" style="text-transform: uppercase;">Practical Travel Information</h2>
          <div class="travel-info-box">
            <div class="info-item">
              <h4>Opening Hours & Access</h4>
              <p>${dest.travelInfo.timings || '09:00 AM – 05:30 PM (Daily)'}</p>
            </div>
            <div class="info-item">
              <h4>Entry Fee & Permits</h4>
              <p>${dest.travelInfo.entryFee || 'Standard Heritage Admission'}</p>
            </div>
            <div class="info-item">
              <h4>Transit & How to Reach</h4>
              <p>Airport: ${dest.travelInfo.nearestAirport || 'Nearest regional airport'}<br>Railway: ${dest.travelInfo.nearestRailway || 'Nearest major junction'}<br>${dest.travelInfo.howToReach || 'Well connected via state highway and private cab corridors.'}</p>
            </div>
          </div>
        </section>
      ` : ''}

      ${dest.cinematicAvailable ? `
        <section style="margin: 40px 0 60px; background: linear-gradient(135deg, rgba(212,175,55,0.12) 0%, rgba(7,11,9,0.9) 100%); border: 1px solid var(--gold); border-radius: 8px; padding: 40px; text-align: center;">
          <span class="eyebrow" style="color: var(--gold);">IMMERSIVE 3D SPATIAL TOUR</span>
          <h2 class="heading-medium" style="text-transform: uppercase; margin: 8px 0 16px;">Step Inside ${dest.name}</h2>
          <p style="color: var(--muted-bright); max-width: 600px; margin: 0 auto 24px;">
            Experience 7 scroll-driven storytelling scenes, interactive spatial hotspots, and architectural telemetries.
          </p>
          <button class="btn gold" onclick="window.location.hash='#/cinematic/${dest.slug}'" style="padding: 14px 28px; font-size: 0.85rem;">
            ✨ Enter Cinematic Mode ↗
          </button>
        </section>
      ` : ''}

      <!-- Live Google AI Knowledge Integration -->
      <section style="margin: 40px 0 60px;">
        <div style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(13, 20, 16, 0.95) 100%); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 16px; padding: 32px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px;">
          <div>
            <span style="font-family: var(--font-display); font-size: 0.72rem; color: var(--gold); letter-spacing: 0.15em; text-transform: uppercase;">✦ GOOGLE GEMINI AI KNOWLEDGE ENGINE</span>
            <h3 style="font-family: var(--font-display); font-size: 1.6rem; color: var(--cream); margin: 6px 0;">Have a question about ${dest.name}?</h3>
            <p style="color: var(--muted-bright); font-size: 0.92rem; margin: 0; max-width: 580px;">Ask about secret viewpoints, photography angles, ticket queue bypass, or local food recommendations for ${dest.name} powered by live Google Knowledge.</p>
          </div>
          <button class="btn gold" onclick="window.raahiAskAssistant('Tell me all details, hidden gems, photography angles, and local food for ${dest.name}')" style="padding: 14px 28px; font-size: 0.85rem; box-shadow: 0 0 25px rgba(212,175,55,0.35);">
            ⚡ ASK GOOGLE AI ABOUT ${dest.name.toUpperCase()} →
          </button>
        </div>
      </section>

      <div style="display: flex; gap: 1rem; justify-content: center; padding: 40px 0 60px; border-top: 1px solid var(--line); flex-wrap: wrap;">
        <button class="btn" onclick="window.location.hash='#/states/${dest.stateSlug}'">
          ← Back to ${dest.state}
        </button>
        <button class="btn" onclick="window.location.hash='#states'">
          All States & UTs
        </button>
        <button class="btn light" onclick="window.location.hash='#/home'">
          Home
        </button>
      </div>
    </div>
  `;
}

// Backward-compatible city view placeholder if referenced
function renderCityView(cityId) {
  renderStateView(cityId);
}
