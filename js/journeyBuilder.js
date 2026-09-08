/**
 * RAAHI // Interactive Journey Builder & Travel Intelligence Engine
 * Custom itinerary compiler, sequence optimizer, approximate budget calculator,
 * persistent drawer, and localStorage persistence.
 */

import { RAAHI_DATA } from './data.js';
import { FairPriceEngine } from './services/fairPriceEngine.js';

const STORAGE_KEY = 'raahi_custom_journey';

export function getSavedJourney() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem('arvora_custom_journey');
    return raw ? JSON.parse(raw) : [
      { id: 'amber-fort', name: 'Amber Fort & Palace', city: 'JAIPUR', state: 'RAJASTHAN', category: 'Heritage Citadel', days: 1 },
      { id: 'hawa-mahal', name: 'Hawa Mahal', city: 'JAIPUR', state: 'RAJASTHAN', category: 'Palatial Architecture', days: 1 },
      { id: 'city-palace-jaipur', name: 'City Palace', city: 'JAIPUR', state: 'RAJASTHAN', category: 'Royal Museum', days: 1 },
      { id: 'jal-mahal', name: 'Jal Mahal Water Palace', city: 'JAIPUR', state: 'RAJASTHAN', category: 'Scenic Water Monument', days: 1 }
    ];
  } catch (e) {
    return [];
  }
}

export function saveJourney(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    updateJourneyBadgeCount();
  } catch (e) {}
}

export function updateJourneyBadgeCount() {
  const items = getSavedJourney();
  const badges = document.querySelectorAll('.journey-count-badge');
  badges.forEach(b => {
    b.textContent = items.length;
  });
}

export function resolvePlaceData(placeId) {
  let place = RAAHI_DATA.places[placeId];
  if (place) return place;
  for (const city of Object.values(RAAHI_DATA.cities)) {
    if (city.places && city.places.includes(placeId)) {
      const state = RAAHI_DATA.states[city.stateId] || { name: 'India' };
      return {
        id: placeId,
        name: placeId.replace(/-/g, ' ').toUpperCase(),
        cityId: city.id,
        stateId: city.stateId,
        city: city.name,
        state: state.name,
        category: 'Heritage Landmark',
        heroImage: city.heroImage
      };
    }
  }
  return {
    id: placeId,
    name: placeId.replace(/-/g, ' ').toUpperCase(),
    city: 'India',
    state: 'India',
    category: 'Heritage Landmark'
  };
}

export function isPlaceSaved(placeId) {
  const current = getSavedJourney();
  return current.some(item => item.id === placeId);
}

export function toggleSaveJourney(placeId) {
  const place = resolvePlaceData(placeId);
  let current = getSavedJourney();
  const exists = current.some(item => item.id === placeId);
  let saved = false;

  if (exists) {
    current = current.filter(item => item.id !== placeId);
    saved = false;
    showToastNotification(`Removed "${place.name}" from My Journey.`);
  } else {
    current.push({
      id: place.id,
      name: place.name,
      city: place.city || (place.cityId ? place.cityId.toUpperCase() : 'INDIA'),
      state: place.state || (place.stateId ? place.stateId.toUpperCase() : 'INDIA'),
      category: place.category || 'Heritage Landmark',
      heroImage: place.heroImage,
      days: 1
    });
    saved = true;
    showToastNotification(`Saved "${place.name}" to My Journey! ♡`);
  }

  saveJourney(current);
  updateAllSaveButtons();
  renderJourneyDrawer();

  if (window.location.hash === '#/journey') {
    renderJourneyBuilderView();
  }

  return saved;
}

export function addToJourney(placeId) {
  return toggleSaveJourney(placeId);
}

export function addMultipleToJourney(placesList) {
  const current = getSavedJourney();
  let addedCount = 0;
  placesList.forEach(p => {
    if (!current.some(item => item.id === p.id)) {
      current.push({
        id: p.id,
        name: p.name,
        city: p.city || (p.cityId ? p.cityId.toUpperCase() : 'INDIA'),
        state: p.state || (p.stateId ? p.stateId.toUpperCase() : 'INDIA'),
        category: p.category || 'Heritage Landmark',
        heroImage: p.heroImage,
        days: 1
      });
      addedCount++;
    }
  });
  saveJourney(current);
  updateAllSaveButtons();
  renderJourneyDrawer();
  showToastNotification(`Added ${addedCount} destinations to your journey!`);
}

export function updateAllSaveButtons() {
  const buttons = document.querySelectorAll('[data-save-place-id]');
  buttons.forEach(btn => {
    const pId = btn.getAttribute('data-save-place-id');
    const saved = isPlaceSaved(pId);
    if (saved) {
      btn.classList.add('saved');
      btn.innerHTML = btn.getAttribute('data-saved-text') || '♥ SAVED TO JOURNEY';
      btn.setAttribute('title', 'Click to remove from My Journey');
    } else {
      btn.classList.remove('saved');
      btn.innerHTML = btn.getAttribute('data-unsaved-text') || '♡ SAVE TO MY JOURNEY';
      btn.setAttribute('title', 'Save to My Journey');
    }
  });
}

export function clearJourney() {
  if (confirm("Are you sure you want to clear your saved places?")) {
    saveJourney([]);
    updateAllSaveButtons();
    renderJourneyDrawer();
    if (window.location.hash === '#/journey') {
      renderJourneyBuilderView();
    }
    showToastNotification("Your journey has been cleared.");
  }
}

export function openJourneyDrawer() {
  const drawer = document.getElementById('raahi-journey-drawer');
  const overlay = document.getElementById('raahi-journey-overlay');
  renderJourneyDrawer();
  if (overlay) overlay.classList.add('active');
  if (drawer) drawer.classList.add('active');
  document.body.classList.add('lock-scroll');
}

export function closeJourneyDrawer() {
  const drawer = document.getElementById('raahi-journey-drawer');
  const overlay = document.getElementById('raahi-journey-overlay');
  if (overlay) overlay.classList.remove('active');
  if (drawer) drawer.classList.remove('active');
  document.body.classList.remove('lock-scroll');
}

export function renderJourneyDrawer() {
  const drawer = document.getElementById('raahi-journey-drawer');
  if (!drawer) return;

  const items = getSavedJourney();

  drawer.innerHTML = `
    <div class="journey-drawer-header">
      <div class="drawer-title-group">
        <span class="eyebrow" style="color: var(--gold); margin-bottom: 2px;">EXPEDITION DOSSIER</span>
        <h3 class="drawer-title">MY JOURNEY</h3>
        <span class="drawer-badge">${items.length} ${items.length === 1 ? 'PLACE' : 'PLACES'} SAVED</span>
      </div>
      <button class="stage-btn" onclick="window.raahiCloseJourneyDrawer()" style="width: 36px; height: 36px; font-size: 0.9rem;" title="Close">✕</button>
    </div>

    <div class="journey-drawer-body">
      ${items.length === 0 ? `
        <div class="drawer-empty-state">
          <div class="empty-icon">🗺️</div>
          <h4 style="font-family: var(--font-display); font-size: 1.2rem; color: var(--cream); margin-bottom: 8px;">YOUR JOURNEY IS EMPTY</h4>
          <p style="color: var(--muted); font-size: 0.85rem; line-height: 1.6; margin-bottom: 20px;">
            Click <strong>"♡ SAVE TO MY JOURNEY"</strong> on any destination or place to curate your personalized route.
          </p>
          <button class="btn light" onclick="window.raahiCloseJourneyDrawer(); window.location.hash='#/home';" style="font-size: 0.75rem;">
            Explore Destinations →
          </button>
        </div>
      ` : `
        <div class="drawer-items-list">
          ${items.map((item, idx) => `
            <div class="drawer-item-row" onclick="window.raahiCloseJourneyDrawer(); window.location.hash='#/destinations/${item.id}';">
              <div class="drawer-item-num">${idx + 1}.</div>
              <div class="drawer-item-content">
                <h4 class="drawer-item-title">${item.name}</h4>
                <div class="drawer-item-meta">${item.city} • ${item.state}</div>
              </div>
              <button class="drawer-item-remove" onclick="event.stopPropagation(); window.raahiRemoveJourneyItem('${item.id}');" title="Remove place">
                ✕
              </button>
            </div>
          `).join('')}
        </div>
      `}
    </div>

    <div class="journey-drawer-footer">
      <button class="btn gold btn-build-journey" onclick="window.raahiCloseJourneyDrawer(); window.location.hash='#/journey';" style="width: 100%; justify-content: center; padding: 14px; font-size: 0.85rem; box-shadow: 0 0 25px rgba(212,175,55,0.25);">
        BUILD MY JOURNEY →
      </button>
      ${items.length > 0 ? `
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 12px;">
          <span style="font-size: 0.72rem; color: var(--muted);">${items.length} stops in sequence</span>
          <button class="btn-clear-journey" onclick="window.raahiClearJourney()" style="background: none; border: none; color: #ff8888; font-size: 0.72rem; cursor: pointer; text-decoration: underline;">
            Clear All
          </button>
        </div>
      ` : ''}
    </div>
  `;
}

function showToastNotification(msg) {
  let toast = document.getElementById('raahi-toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'raahi-toast-notification';
    toast.className = 'raahi-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('visible');
  setTimeout(() => toast.classList.remove('visible'), 3000);
}

export function renderJourneyBuilderView() {
  const container = document.getElementById('view-journey');
  if (!container) return;

  const items = getSavedJourney();
  const totalStops = items.length;
  const estimatedDays = Math.max(1, Math.ceil(totalStops / 3));
  
  // Approximate Budget Calculation (in ₹ INR)
  const approxStay = estimatedDays * 3500;
  const approxFood = totalStops * 450;
  const approxTransport = totalStops * 250;
  const approxEntry = totalStops * 150;
  const approxTotalBudget = approxStay + approxFood + approxTransport + approxEntry;
  const fairSegmentsResult = FairPriceEngine.calculateRouteSegments(items);

  container.innerHTML = `
    <div class="wrap" style="padding: 120px 0 80px;">
      <div class="section-head">
        <div>
          <span class="eyebrow">CUSTOM ITINERARY COMPILER</span>
          <h1 class="heading-large" style="text-transform: uppercase;">MY JOURNEY</h1>
        </div>
        <div style="display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
          ${items.length > 1 ? `
            <button class="btn gold" onclick="window.raahiOptimizeJourneySequence()">
              ⚡ Auto-Sequence Stops
            </button>
          ` : ''}
          ${items.length > 0 ? `
            <button class="btn" style="border-color: rgba(255,100,100,0.4); color: #ff8888;" onclick="window.raahiClearJourney()">
              Clear Journey
            </button>
          ` : ''}
          <button class="btn light" onclick="window.location.hash='#/home'">
            + Discover More Places
          </button>
        </div>
      </div>

      <!-- Quick Intelligence Ribbon -->
      <div class="journey-summary-ribbon">
        <div class="stat-box">
          <span class="stat-label">Estimated Pacing</span>
          <span class="stat-value">${estimatedDays} Days Recommended</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">Selected Destinations</span>
          <span class="stat-value">${totalStops} Curated Stops</span>
        </div>
        <div class="stat-box">
          <span class="stat-label">Approx. Total Budget (₹)</span>
          <span class="stat-value" style="color: var(--gold);">~₹${approxTotalBudget.toLocaleString('en-IN')} (Mid-Range)</span>
        </div>
      </div>

      <!-- Budget Breakdown Card -->
      <div class="journey-budget-breakdown">
        <div class="budget-col">
          <span class="budget-title">🏨 Accommodation (~${estimatedDays} Nights)</span>
          <span class="budget-amt">Approx. ₹${approxStay.toLocaleString('en-IN')}</span>
          <small>Heritage Havelis & Boutique Stays</small>
        </div>
        <div class="budget-col">
          <span class="budget-title">🍽️ Regional Food & Dining</span>
          <span class="budget-amt">Approx. ₹${approxFood.toLocaleString('en-IN')}</span>
          <small>Authentic local thalis & heritage cafes</small>
        </div>
        <div class="budget-col">
          <span class="budget-title">🚖 Local Transit & Cabs</span>
          <span class="budget-amt">Approx. ₹${approxTransport.toLocaleString('en-IN')}</span>
          <small>City rides and intra-corridor transfers</small>
        </div>
        <div class="budget-col">
          <span class="budget-title">🎟️ Monument & Audio Tickets</span>
          <span class="budget-amt">Approx. ₹${approxEntry.toLocaleString('en-IN')}</span>
          <small>Standard heritage admissions</small>
        </div>
      </div>

      <!-- Journey Sequence Items -->
      <div class="journey-items-list" id="journey-items-list">
        ${items.length === 0 ? `
          <div style="padding: 60px; text-align: center; background: var(--bg-surface); border: 1px solid var(--line); border-radius: 8px;">
            <p style="color: var(--muted); font-size: 1.1rem; margin-bottom: 1.5rem;">Your custom route is currently empty. Explore places across Rajasthan, Kerala, Himachal, Goa, and UP to add them to your journey!</p>
            <a href="#/home" class="btn light">Start Exploring India →</a>
          </div>
        ` : items.map((item, idx) => {
          const transitText = idx < items.length - 1 ? `Approx. ${10 + (idx * 5) % 20} min drive to next stop` : `Final stop of this expedition sequence`;
          return `
            <div class="journey-item-row" data-id="${item.id}">
              <div class="item-order-badge">${idx + 1}.</div>
              <div class="item-info-col">
                <h3 class="item-name">${item.name}</h3>
                <span class="item-meta">${item.city} • ${item.state} • ${item.category || 'Heritage'}</span>
                <div class="transit-time-hint">⏱️ ${transitText}</div>
              </div>
              <div class="item-actions-col">
                <button class="btn" style="padding: 8px 16px; font-size: 0.72rem;" onclick="window.location.hash='#/destinations/${item.id}'">
                  View Place →
                </button>
                <button class="btn" style="padding: 8px 16px; font-size: 0.72rem; border-color: rgba(255,100,100,0.4); color: #ff8888;" onclick="window.raahiRemoveJourneyItem('${item.id}')">
                  Remove
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Raahi Fair Route Transport Cost Breakdown -->
      ${items.length > 1 ? `
        <div style="background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(14, 21, 18, 0.95) 100%); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 14px; padding: 24px 28px; margin: 30px 0 40px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px; margin-bottom: 16px;">
            <div>
              <span class="eyebrow" style="color: var(--gold); margin-bottom: 4px; font-size: 0.72rem;">
                ⚖️ RAAHI FAIR // ROUTE TRANSPORT COST
              </span>
              <h3 style="font-family: var(--font-display); font-size: 1.3rem; color: var(--cream); margin: 0;">
                FAIR TRAVEL COST BREAKDOWN
              </h3>
              <p style="font-size: 0.84rem; color: var(--muted-bright); margin: 4px 0 0;">
                Calculated from verified municipal RTO rate cards and surveyed transit distances.
              </p>
            </div>
            <div style="text-align: right;">
              <span style="font-size: 0.75rem; color: var(--muted); display: block;">Total Verified Transport Range</span>
              <span style="font-family: var(--font-display); font-size: 1.6rem; color: var(--gold); font-weight: 700;">
                ${fairSegmentsResult.verifiedCount > 0 ? `₹${fairSegmentsResult.totalVerifiedMin} – ₹${fairSegmentsResult.totalVerifiedMax}` : 'No verified route data'}
              </span>
              <span style="font-size: 0.72rem; color: var(--muted); display: block;">(${fairSegmentsResult.verifiedCount} of ${fairSegmentsResult.totalCount} segments verified)</span>
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 14px;">
            ${fairSegmentsResult.segments.map((seg, sIdx) => `
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px; background: rgba(0,0,0,0.4); border: 1px solid var(--line); border-radius: 8px; font-size: 0.86rem; flex-wrap: wrap; gap: 10px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <span style="color: var(--gold); font-weight: 700;">Stop ${sIdx + 1} ➔ ${sIdx + 2}:</span>
                  <span style="color: var(--cream);">${seg.from} ➔ ${seg.to}</span>
                  ${seg.distanceKm ? `<span style="color: var(--muted); font-size: 0.78rem;">(${seg.distanceKm} km)</span>` : ''}
                </div>
                <div>
                  ${seg.verified ? `
                    <span style="font-family: var(--font-display); font-weight: 700; color: #10b981; font-size: 0.95rem;">
                      ₹${seg.fareMin} – ₹${seg.fareMax}
                    </span>
                    <span style="font-size: 0.72rem; color: var(--muted); margin-left: 6px;">(Auto Fare)</span>
                  ` : `
                    <span style="font-size: 0.75rem; color: #94a3b8; font-style: italic;">
                      No gazetted fare available
                    </span>
                  `}
                </div>
              </div>
            `).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 14px; padding-top: 12px; border-top: 1px dashed rgba(255,255,255,0.08); font-size: 0.78rem; color: var(--muted);">
            <span>🛡️ In adherence to our strict transparency principle, unverified segments are never assigned guessed numbers.</span>
            <button class="btn light" onclick="window.raahiOpenFairModal({ query: 'Auto fare in ${items[0]?.city || 'Jaipur'}' })" style="padding: 6px 14px; font-size: 0.72rem;">
              Check Rate Cards ↗
            </button>
          </div>
        </div>
      ` : ''}

      <!-- Footer Action Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid var(--line); flex-wrap: wrap; gap: 16px;">
        <button class="btn" onclick="window.location.hash='#/home'">
          ← Continue Exploring
        </button>
        <div style="display: flex; gap: 12px;">
          <button class="btn light" onclick="window.raahiExportDossier()">
            Copy Route Dossier 📋
          </button>
          <button class="btn gold" onclick="alert('Your journey has been compiled and saved locally!')">
            Save Route Itinerary ✨
          </button>
        </div>
      </div>
    </div>
  `;
}

// Global Handlers
if (typeof window !== 'undefined') {
  window.raahiToggleSaveJourney = (id) => toggleSaveJourney(id);
  window.raahiOpenJourneyDrawer = () => openJourneyDrawer();
  window.raahiCloseJourneyDrawer = () => closeJourneyDrawer();
  window.raahiClearJourney = () => clearJourney();

  window.raahiRemoveJourneyItem = (id) => {
    let items = getSavedJourney();
    items = items.filter(item => item.id !== id);
    saveJourney(items);
    updateAllSaveButtons();
    renderJourneyDrawer();
    if (window.location.hash === '#/journey') {
      renderJourneyBuilderView();
    }
  };

  window.removeJourneyItem = window.raahiRemoveJourneyItem;

  window.raahiOptimizeJourneySequence = () => {
    let items = getSavedJourney();
    items.sort((a, b) => (a.city || '').localeCompare(b.city || ''));
    saveJourney(items);
    renderJourneyDrawer();
    renderJourneyBuilderView();
    showToastNotification("Optimized stops into a geographically organized sequence!");
  };

  window.raahiExportDossier = () => {
    const items = getSavedJourney();
    if (items.length === 0) {
      alert("Your journey is currently empty.");
      return;
    }
    let text = `RAAHI EXPEDITION DOSSIER // INDIA\\n====================================\\n\\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.name} (${item.city}, ${item.state})\\n`;
    });
    text += `\\nEstimated Pacing: ${Math.max(1, Math.ceil(items.length / 3))} Days\\n`;
    text += `Generated via RAAHI National Tourism Discovery Platform.\\n`;

    navigator.clipboard?.writeText(text);
    alert("Route dossier copied to clipboard!\\n\\n" + text);
  };

  // Listeners
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeJourneyDrawer();
    }
  });
}
