/**
 * RAAHI FAIR // UI Component & Interactive Controller
 * "Know the price before you pay"
 * 
 * Strict Principle: NO VERIFIED DATA = NO CLAIM.
 * Zero AI guesses. Transparent calculations from official gazettes and published tariffs.
 */

import { FairPriceEngine } from '../services/fairPriceEngine.js';
import { 
  OFFICIAL_TRANSPORT_SCHEDULES, 
  VERIFIED_ROUTES, 
  VERIFIED_PRICES_CATALOG, 
  PRICE_TYPES, 
  SOURCE_TYPES 
} from '../data/fairPricesData.js';

export const RaahiFair = {
  activeCategory: 'transport',
  selectedCity: 'jaipur',
  selectedRouteId: '',
  selectedItemId: '',
  distanceKm: 13.5,
  vehicleType: 'auto',
  isNight: false,
  waitingMin: 0,
  userQuote: '',

  /**
   * Render the dedicated Raahi Fair Page
   */
  renderFullPage(containerId = 'view-fair', params = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Apply URL params if provided
    if (params.city) {
      this.selectedCity = params.city.toLowerCase();
    }
    if (params.category) {
      this.activeCategory = params.category.toLowerCase();
    }

    const cities = FairPriceEngine.getSupportedCities();
    const cityExists = cities.some(c => c.slug === this.selectedCity);
    if (!cityExists && this.selectedCity !== 'all') {
      // Default to Jaipur if unsupported slug passed
      this.selectedCity = 'jaipur';
    }

    container.innerHTML = `
      <section class="fair-section">
        <div class="wrap">
          <!-- Page Header -->
          <div class="fair-hero">
            <span class="eyebrow">⚖️ RAAHI FAIR // TRAVEL PRICE TRANSPARENCY</span>
            <h1 class="fair-hero-title">KNOW THE PRICE BEFORE YOU PAY.</h1>
            <p class="fair-hero-subtitle">Official rates, transparent calculations, and zero guesswork.</p>
            <p class="fair-hero-desc">
              Raahi prioritizes verified, current, verifiable prices across India. Grounded strictly in municipal RTO fare schedules, Archaeological Survey of India tariffs, registered union rates, and authenticated artisan standards.
            </p>

            <div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
              <span class="fair-price-type-pill" style="border-color: rgba(212,175,55,0.4); color: var(--gold);">
                ✓ Government Gazettes
              </span>
              <span class="fair-price-type-pill" style="border-color: rgba(16,185,129,0.4); color: #10b981;">
                ✓ Official ASI Tariffs
              </span>
              <span class="fair-price-type-pill" style="border-color: rgba(192,132,252,0.4); color: #c084fc;">
                ✓ GI Craft Benchmarks
              </span>
              <span class="fair-price-type-pill" style="border-color: rgba(148,163,184,0.4); color: #94a3b8;">
                ✓ Zero AI-Generated Guesses
              </span>
            </div>
          </div>

          <!-- Main Interactive Card -->
          <div class="fair-card">
            <!-- City Selector Bar -->
            <div class="fair-grid-2" style="margin-bottom: 24px;">
              <div>
                <label class="fair-label" for="fair-city-select">SELECT DESTINATION / REGION</label>
                <select id="fair-city-select" class="fair-select">
                  ${cities.map(c => `
                    <option value="${c.slug}" ${c.slug === this.selectedCity ? 'selected' : ''}>
                      ${c.name} (${c.state})
                    </option>
                  `).join('')}
                  <option value="pan-india" ${this.selectedCity === 'pan-india' ? 'selected' : ''}>Pan-India (Nationwide Standard)</option>
                  <option value="other">Other City / Unlisted Region...</option>
                </select>
              </div>

              <div>
                <label class="fair-label" for="fair-quick-search">QUICK SEARCH ANY SERVICE</label>
                <input type="text" id="fair-quick-search" class="fair-input" placeholder="e.g. Shikara, Pashmina, Taj Mahal, Auto..." />
              </div>
            </div>

            <!-- Category Tabs -->
            <div class="fair-category-tabs">
              <button class="fair-tab-btn ${this.activeCategory === 'transport' ? 'active' : ''}" data-category="transport">
                🛺 Transport & Cabs
              </button>
              <button class="fair-tab-btn ${this.activeCategory === 'activities' ? 'active' : ''}" data-category="activities">
                ⛵ Activities & Tours
              </button>
              <button class="fair-tab-btn ${this.activeCategory === 'monuments' ? 'active' : ''}" data-category="monuments">
                🏛️ Monuments & Heritage
              </button>
              <button class="fair-tab-btn ${this.activeCategory === 'shopping' ? 'active' : ''}" data-category="shopping">
                🧵 Artisanal Shopping
              </button>
              <button class="fair-tab-btn ${this.activeCategory === 'food' ? 'active' : ''}" data-category="food">
                🍛 Traditional Food
              </button>
              <button class="fair-tab-btn ${this.activeCategory === 'services' ? 'active' : ''}" data-category="services">
                🧭 Guides & Porters
              </button>
            </div>

            <!-- Dynamic Interactive Controls Container -->
            <div id="fair-controls-container">
              <!-- Rendered dynamically by updateControls() -->
            </div>

            <!-- Quote Input Box -->
            <div class="fair-quote-box">
              <label class="fair-label" style="color: var(--gold);">
                WHAT WERE YOU QUOTED? (OPTIONAL COMPARISON)
              </label>
              <div class="fair-quote-input-wrapper">
                <span class="fair-currency-symbol">₹</span>
                <input type="number" id="fair-quote-input" class="fair-quote-input" placeholder="e.g. 350" value="${this.userQuote || ''}" min="0" step="10" />
              </div>
              <p style="font-size: 0.8rem; color: var(--muted); margin-top: 8px;">
                Enter the quote you were given by a driver, vendor, or shop to see an instant neutral evaluation against verified local rates.
              </p>
            </div>

            <button id="fair-calculate-btn" class="fair-submit-btn">
              EVALUATE FAIR PRICE & RATES →
            </button>

            <!-- Results Output Container -->
            <div id="fair-result-container">
              <!-- Rendered dynamically -->
            </div>
          </div>

          <!-- Bottom Transparency Principles Banner -->
          <div style="max-width: 840px; margin: 0 auto; background: rgba(255,255,255,0.02); border: 1px solid var(--line); border-radius: 12px; padding: 24px;">
            <h3 style="font-family: var(--font-display); font-size: 1.05rem; color: var(--gold); margin-bottom: 10px; display: flex; align-items: center; gap: 8px;">
              ⚖️ OUR COMMITMENT: NO VERIFIED DATA = NO CLAIM
            </h3>
            <p style="font-size: 0.88rem; color: var(--muted-bright); line-height: 1.6; margin-bottom: 8px;">
              Unlike generic estimation tools, Raahi never invents travel prices or uses predictive algorithms to guess local costs. If official municipal gazettes or published union tariffs are not available for a specific route or town, we explicitly declare it as <strong>UNVERIFIED</strong> and provide official steps for on-ground verification.
            </p>
            <div style="font-size: 0.8rem; color: var(--muted);">
              All municipal transport schedules, ASI monument entrance tariffs, and registered union rates are reviewed and updated regularly against gazette notifications.
            </div>
          </div>
        </div>
      </section>
    `;

    this.attachEventListeners();
    this.updateControls();
    this.runCalculation();
  },

  /**
   * Attach interactive listeners
   */
  attachEventListeners() {
    // City Selector
    const citySelect = document.getElementById('fair-city-select');
    if (citySelect) {
      citySelect.addEventListener('change', (e) => {
        this.selectedCity = e.target.value;
        this.updateControls();
        this.runCalculation();
      });
    }

    // Quick Search Input
    const quickSearch = document.getElementById('fair-quick-search');
    if (quickSearch) {
      quickSearch.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        if (query.length > 1) {
          const results = FairPriceEngine.searchItems(query, this.selectedCity);
          if (results.length > 0) {
            const first = results[0];
            if (first.category && first.category !== this.activeCategory) {
              this.activeCategory = first.category;
              this.updateCategoryTabs();
            }
            this.selectedItemId = first.id;
            this.updateControls();
            this.runCalculation();
          }
        }
      });
    }

    // Category Tabs
    const tabs = document.querySelectorAll('.fair-tab-btn');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        this.activeCategory = tab.dataset.category;
        this.updateControls();
        this.runCalculation();
      });
    });

    // Calculate Button
    const calcBtn = document.getElementById('fair-calculate-btn');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        const quoteEl = document.getElementById('fair-quote-input');
        if (quoteEl) this.userQuote = quoteEl.value;
        this.runCalculation();
      });
    }

    // Realtime quote updates
    const quoteEl = document.getElementById('fair-quote-input');
    if (quoteEl) {
      quoteEl.addEventListener('input', (e) => {
        this.userQuote = e.target.value;
      });
      quoteEl.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.runCalculation();
        }
      });
    }
  },

  updateCategoryTabs() {
    const tabs = document.querySelectorAll('.fair-tab-btn');
    tabs.forEach(tab => {
      if (tab.dataset.category === this.activeCategory) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  },

  /**
   * Update the dynamic controls depending on category
   */
  updateControls() {
    const container = document.getElementById('fair-controls-container');
    if (!container) return;

    if (this.selectedCity === 'other') {
      container.innerHTML = `
        <div style="background: rgba(244,63,94,0.06); border: 1px solid rgba(244,63,94,0.3); border-radius: 10px; padding: 20px; margin-bottom: 20px;">
          <h4 style="color: #f43f5e; font-family: var(--font-display); font-size: 0.95rem; margin-bottom: 8px;">
            ⚠️ UNLISTED REGION // STRICT TRANSPARENCY STANDARD
          </h4>
          <p style="font-size: 0.88rem; color: var(--muted-bright); line-height: 1.5; margin-bottom: 12px;">
            Raahi does not currently hold verified gazetted rate notifications for this specific town. In adherence to our foundational rule (<strong>NO VERIFIED DATA = NO CLAIM</strong>), we do not synthesize estimates.
          </p>
          <div style="font-size: 0.82rem; color: var(--cream);">
            <strong>Recommended On-Ground Verification:</strong>
            <ul style="margin: 6px 0 0 18px; line-height: 1.6;">
              <li>Locate the official Railway Station Pre-paid Booth or Traffic Police counter</li>
              <li>Ask the local Auto Union kiosk for their printed rate board</li>
              <li>Always insist on the electronic meter if operating in a notified municipal district</li>
            </ul>
          </div>
        </div>
      `;
      return;
    }

    if (this.activeCategory === 'transport') {
      const routes = FairPriceEngine.getRoutesForCity(this.selectedCity);
      const schedule = OFFICIAL_TRANSPORT_SCHEDULES[this.selectedCity];

      let routesOptions = `<option value="custom">Enter Custom Distance (Kilometers)...</option>`;
      if (routes && routes.length > 0) {
        routesOptions = routes.map((r, idx) => `
          <option value="${r.id}" ${idx === 0 && !this.selectedRouteId ? 'selected' : (r.id === this.selectedRouteId ? 'selected' : '')}>
            ${r.from} ➔ ${r.to} (${r.distanceKm} km)
          </option>
        `).join('') + routesOptions;

        if (!this.selectedRouteId && routes[0]) {
          this.selectedRouteId = routes[0].id;
          this.distanceKm = routes[0].distanceKm;
        }
      }

      container.innerHTML = `
        <div class="fair-field-group">
          <label class="fair-label" for="fair-route-select">SELECT VERIFIED POINT-TO-POINT ROUTE</label>
          <select id="fair-route-select" class="fair-select">
            ${routesOptions}
          </select>
        </div>

        <div class="fair-grid-2">
          <div class="fair-field-group">
            <label class="fair-label" for="fair-vehicle-select">VEHICLE CLASS</label>
            <select id="fair-vehicle-select" class="fair-select">
              <option value="auto" ${this.vehicleType === 'auto' ? 'selected' : ''}>Auto Rickshaw (CNG / Petrol)</option>
              <option value="taxi" ${this.vehicleType === 'taxi' ? 'selected' : ''}>Metered Taxi (Non-AC / Kaali Peeli)</option>
              <option value="taxi_ac" ${this.vehicleType === 'taxi_ac' ? 'selected' : ''}>Metered Taxi (AC / Sedan)</option>
            </select>
          </div>

          <div class="fair-field-group">
            <label class="fair-label" for="fair-distance-input">TRAVEL DISTANCE (KM)</label>
            <input type="number" id="fair-distance-input" class="fair-input" value="${this.distanceKm}" step="0.1" min="0.5" max="250" />
          </div>
        </div>

        <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: center; margin-bottom: 20px; padding: 14px 18px; background: rgba(255,255,255,0.02); border: 1px solid var(--line); border-radius: 8px;">
          <label style="display: inline-flex; align-items: center; gap: 8px; cursor: pointer; font-size: 0.88rem; color: var(--cream);">
            <input type="checkbox" id="fair-night-toggle" ${this.isNight ? 'checked' : ''} style="width: 16px; height: 16px; accent-color: var(--gold);" />
            <span>Night Journey (${schedule?.auto?.nightHours || '11:00 PM – 05:00 AM'})</span>
          </label>

          <div style="display: inline-flex; align-items: center; gap: 8px; font-size: 0.85rem; color: var(--muted-bright); margin-left: auto;">
            <span>Waiting Time:</span>
            <select id="fair-waiting-select" class="fair-select" style="width: auto; padding: 6px 10px; font-size: 0.82rem;">
              <option value="0" ${this.waitingMin === 0 ? 'selected' : ''}>None</option>
              <option value="15" ${this.waitingMin === 15 ? 'selected' : ''}>15 min</option>
              <option value="30" ${this.waitingMin === 30 ? 'selected' : ''}>30 min</option>
              <option value="60" ${this.waitingMin === 60 ? 'selected' : ''}>1 Hour</option>
            </select>
          </div>
        </div>
      `;

      // Attach sub-listeners
      const routeSelect = document.getElementById('fair-route-select');
      const distInput = document.getElementById('fair-distance-input');
      const vehSelect = document.getElementById('fair-vehicle-select');
      const nightToggle = document.getElementById('fair-night-toggle');
      const waitSelect = document.getElementById('fair-waiting-select');

      if (routeSelect) {
        routeSelect.addEventListener('change', (e) => {
          this.selectedRouteId = e.target.value;
          if (e.target.value !== 'custom') {
            const found = routes.find(r => r.id === e.target.value);
            if (found && distInput) {
              this.distanceKm = found.distanceKm;
              distInput.value = found.distanceKm;
            }
          }
          this.runCalculation();
        });
      }

      if (distInput) {
        distInput.addEventListener('input', (e) => {
          this.distanceKm = parseFloat(e.target.value) || 0;
          this.runCalculation();
        });
      }

      if (vehSelect) {
        vehSelect.addEventListener('change', (e) => {
          this.vehicleType = e.target.value;
          this.runCalculation();
        });
      }

      if (nightToggle) {
        nightToggle.addEventListener('change', (e) => {
          this.isNight = e.target.checked;
          this.runCalculation();
        });
      }

      if (waitSelect) {
        waitSelect.addEventListener('change', (e) => {
          this.waitingMin = parseInt(e.target.value, 10) || 0;
          this.runCalculation();
        });
      }

    } else {
      // Non-transport: Activities, Monuments, Shopping, Food, Services
      const catalog = FairPriceEngine.getCatalogItems(this.activeCategory, this.selectedCity);

      if (!catalog || catalog.length === 0) {
        container.innerHTML = `
          <div style="padding: 20px; text-align: center; background: rgba(255,255,255,0.02); border: 1px solid var(--line); border-radius: 10px; margin-bottom: 20px;">
            <div style="font-size: 1.5rem; margin-bottom: 8px;">📋</div>
            <h4 style="font-family: var(--font-display); color: var(--cream); font-size: 0.95rem; margin-bottom: 6px;">
              NO VERIFIED PUBLISHED TARIFFS FOR THIS COMBINATION
            </h4>
            <p style="font-size: 0.85rem; color: var(--muted); max-width: 500px; margin: 0 auto;">
              No verified rate records found for <strong>${this.activeCategory}</strong> in <strong>${this.selectedCity}</strong>. Try selecting another city or category.
            </p>
          </div>
        `;
        return;
      }

      if (!this.selectedItemId || !catalog.some(i => i.id === this.selectedItemId)) {
        this.selectedItemId = catalog[0].id;
      }

      const activeItem = catalog.find(i => i.id === this.selectedItemId) || catalog[0];

      let tiersHtml = '';
      if (activeItem.tiers && activeItem.tiers.length > 0) {
        tiersHtml = `
          <div class="fair-field-group">
            <label class="fair-label">SELECT SPECIFIC TIER / VARIATION</label>
            <select id="fair-tier-select" class="fair-select">
              ${activeItem.tiers.map((t, idx) => `
                <option value="${idx}">
                  ${t.name} (₹${t.fairMin}${t.fairMax ? ' – ₹' + t.fairMax : ''}) — ${t.desc}
                </option>
              `).join('')}
            </select>
          </div>
        `;
      }

      container.innerHTML = `
        <div class="fair-field-group">
          <label class="fair-label" for="fair-item-select">SELECT VERIFIED ITEM / EXPERIENCE</label>
          <select id="fair-item-select" class="fair-select">
            ${catalog.map(item => `
              <option value="${item.id}" ${item.id === this.selectedItemId ? 'selected' : ''}>
                ${item.title} — ${item.city} (${item.state})
              </option>
            `).join('')}
          </select>
        </div>

        ${tiersHtml}

        <div style="background: rgba(212,175,55,0.03); border: 1px solid rgba(212,175,55,0.18); border-radius: 8px; padding: 14px 18px; margin-bottom: 20px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-family: var(--font-display); font-size: 0.88rem; color: var(--gold); font-weight: 600;">
              ${activeItem.title}
            </span>
            <span class="fair-price-type-pill" style="font-size: 0.68rem;">
              ${activeItem.priceType}
            </span>
          </div>
          <p style="font-size: 0.84rem; color: var(--muted-bright); margin: 0; line-height: 1.5;">
            ${activeItem.description}
          </p>
        </div>
      `;

      const itemSelect = document.getElementById('fair-item-select');
      const tierSelect = document.getElementById('fair-tier-select');

      if (itemSelect) {
        itemSelect.addEventListener('change', (e) => {
          this.selectedItemId = e.target.value;
          this.updateControls();
          this.runCalculation();
        });
      }

      if (tierSelect) {
        tierSelect.addEventListener('change', () => {
          this.runCalculation();
        });
      }
    }
  },

  /**
   * Run the calculation and render results
   */
  runCalculation() {
    const resultContainer = document.getElementById('fair-result-container');
    if (!resultContainer) return;

    if (this.selectedCity === 'other') {
      resultContainer.innerHTML = '';
      return;
    }

    let result = null;

    if (this.activeCategory === 'transport') {
      result = FairPriceEngine.calculateTransportFare({
        citySlug: this.selectedCity,
        vehicleType: this.vehicleType,
        distanceKm: this.distanceKm,
        isNight: this.isNight,
        waitingMin: this.waitingMin,
        hasLuggage: false
      });
    } else {
      const catalog = FairPriceEngine.getCatalogItems(this.activeCategory, this.selectedCity);
      const activeItem = catalog.find(i => i.id === this.selectedItemId);

      if (!activeItem) {
        resultContainer.innerHTML = '';
        return;
      }

      const tierSelect = document.getElementById('fair-tier-select');
      let chosenMin = activeItem.fairMin;
      let chosenMax = activeItem.fairMax;
      let chosenUnit = activeItem.unit;
      let tierNotes = activeItem.notes;

      if (tierSelect && activeItem.tiers && activeItem.tiers[tierSelect.value]) {
        const tier = activeItem.tiers[tierSelect.value];
        chosenMin = tier.fairMin;
        chosenMax = tier.fairMax || tier.fairMin;
        tierNotes = `${tier.desc}. ${activeItem.notes}`;
      }

      result = {
        verified: true,
        priceType: activeItem.priceType,
        title: activeItem.title,
        city: activeItem.city,
        state: activeItem.state,
        fairMin: chosenMin,
        fairMax: chosenMax,
        currency: "INR",
        unit: chosenUnit,
        source: activeItem.source,
        sourceType: activeItem.sourceType,
        sourceUrl: activeItem.sourceUrl,
        lastVerified: activeItem.lastVerified,
        notes: tierNotes,
        whatYouCanDo: activeItem.whatYouCanDo,
        isPremiumTier: activeItem.isPremiumTier
      };
    }

    if (!result || !result.verified) {
      resultContainer.innerHTML = `
        <div class="fair-result-card">
          <div style="background: rgba(244,63,94,0.08); border: 1px solid rgba(244,63,94,0.4); border-radius: 8px; padding: 20px;">
            <h4 style="color: #f43f5e; font-family: var(--font-display); font-size: 0.95rem; margin-bottom: 6px;">
              ⚠️ UNVERIFIED PRICE INFORMATION
            </h4>
            <p style="font-size: 0.88rem; color: var(--muted-bright); margin-bottom: 10px;">
              ${result?.error || 'No verified rate data matches the selected parameters.'}
            </p>
            ${result?.fallbackGuidance ? `
              <ul style="font-size: 0.82rem; color: var(--cream); margin: 0 0 0 18px; line-height: 1.6;">
                ${result.fallbackGuidance.map(g => `<li>${g}</li>`).join('')}
              </ul>
            ` : ''}
          </div>
        </div>
      `;
      return;
    }

    // Evaluate user quote if provided
    let quoteEval = null;
    if (this.userQuote && parseFloat(this.userQuote) > 0) {
      quoteEval = FairPriceEngine.evaluateQuote({
        userQuote: this.userQuote,
        fairMin: result.fairMin,
        fairMax: result.fairMax,
        isPremiumTier: result.isPremiumTier
      });
    }

    // Format fair range string
    const fairRangeString = result.fairMin === result.fairMax 
      ? `₹${result.fairMin}` 
      : `₹${result.fairMin} – ₹${result.fairMax}`;

    resultContainer.innerHTML = `
      <div class="fair-result-card">
        <!-- Meta Row -->
        <div class="fair-result-meta-row">
          <span class="fair-price-type-pill" style="border-color: rgba(212,175,55,0.4); color: var(--gold);">
            ● ${result.priceType}
          </span>
          <span style="font-size: 0.8rem; color: var(--muted);">
            Last Verified: <strong>${result.lastVerified || 'February 2026'}</strong>
          </span>
        </div>

        <!-- Big Price Comparison Grid -->
        <div class="fair-comparison-grid">
          <div class="fair-price-col">
            <div class="sublabel">EXPECTED VERIFIED FARE</div>
            <div class="main-val" style="color: var(--gold);">
              ${fairRangeString}
            </div>
            <div style="font-size: 0.78rem; color: var(--muted); margin-top: 4px;">
              per ${result.unit || 'trip'}
            </div>
          </div>

          <div class="fair-vs-divider">VS</div>

          <div class="fair-price-col">
            <div class="sublabel">YOUR QUOTE / STATUS</div>
            <div class="main-val" style="color: ${quoteEval ? quoteEval.color : 'var(--muted-dim)'};">
              ${this.userQuote ? '₹' + this.userQuote : '—'}
            </div>
            <div style="margin-top: 6px;">
              ${quoteEval ? `
                <span class="fair-price-type-pill ${quoteEval.badgeClass}" style="font-size: 0.72rem; padding: 4px 10px;">
                  ${quoteEval.label}
                </span>
              ` : `
                <span style="font-size: 0.76rem; color: var(--muted);">Enter quote above to compare</span>
              `}
            </div>
          </div>
        </div>

        <!-- Quote Evaluation Status Message -->
        ${quoteEval ? `
          <div class="fair-status-banner" style="background: ${quoteEval.status === 'FAIR' ? 'rgba(16,185,129,0.08)' : (quoteEval.status === 'HIGH' ? 'rgba(245,158,11,0.08)' : 'rgba(244,63,94,0.08)')}; border: 1px solid ${quoteEval.color};">
            <span style="font-size: 1.3rem;">
              ${quoteEval.status === 'FAIR' ? '✅' : (quoteEval.status === 'HIGH' ? '⚠️' : '🚨')}
            </span>
            <div>
              <strong style="color: ${quoteEval.color}; font-family: var(--font-display); letter-spacing: 0.05em; display: block; margin-bottom: 2px;">
                ${quoteEval.label}: ${quoteEval.diffPercent ? quoteEval.diffPercent + '% above verified rate' : 'Aligned with official range'}
              </strong>
              <div style="color: var(--cream); font-size: 0.88rem;">
                ${quoteEval.message}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Itemized Transparent Math Breakdown (Transport Only) -->
        ${result.breakdown ? `
          <div class="fair-breakdown-box">
            <div class="fair-breakdown-title">
              📊 Transparent Math Breakdown (Official RTO Formula)
            </div>
            ${result.breakdown.map(b => `
              <div class="fair-breakdown-row">
                <span>${b.label}</span>
                <span style="font-family: var(--font-display); font-weight: 600;">${b.amount}</span>
              </div>
            `).join('')}
            <div class="fair-breakdown-row total">
              <span>Calculated Regulatory Fare</span>
              <span style="font-family: var(--font-display); color: var(--gold); font-size: 1rem;">${fairRangeString}</span>
            </div>
          </div>
        ` : ''}

        <!-- Trust Evidence Box ("Why Should I Trust This?") -->
        <div class="fair-trust-box">
          <h4>
            <span>🛡️</span> WHY SHOULD I TRUST THIS PRICE?
          </h4>
          <ul class="fair-trust-list">
            <li>
              <strong>Source Authority:</strong> ${result.sourceType || SOURCE_TYPES.GOVERNMENT}
            </li>
            <li>
              <strong>Regulatory Reference:</strong> ${result.source}
            </li>
            ${result.meterMandatory ? `
              <li>
                <strong>Legal Mandate:</strong> Electronic meter usage is mandatory by law in this jurisdiction.
              </li>
            ` : ''}
            <li>
              <strong>Verification Standard:</strong> Checked against active gazette filings as of ${result.lastVerified || 'February 2026'}.
            </li>
          </ul>
        </div>

        <!-- Culturally Respectful Local Advice & Negotiation -->
        <div class="fair-advice-box">
          <h4>
            💡 LOCAL TRAVEL INTELLIGENCE & ADVICE
          </h4>
          <ul class="fair-advice-list">
            ${(result.whatYouCanDo || [
              "Politely ask the operator: 'Bhaiya, meter se chalenge?' (Brother, will you go by the meter?)",
              "If flat fare is insisted, negotiate respectfully around the calculated upper threshold.",
              "Check for official pre-paid counters at major railway stations and airports."
            ]).map(tip => `
              <li>${tip}</li>
            `).join('')}
          </ul>
          ${result.notes ? `
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px dashed rgba(255,255,255,0.08); font-size: 0.8rem; color: var(--muted); font-style: italic;">
              Context Note: ${result.notes}
            </div>
          ` : ''}
        </div>

        <!-- Source Link Footer -->
        <div class="fair-source-footer">
          <div>
            Location: <strong>${result.city}, ${result.state}</strong>
          </div>
          ${result.sourceUrl ? `
            <a href="${result.sourceUrl}" target="_blank" rel="noopener noreferrer" class="fair-source-link">
              View Official Regulatory Filing ↗
            </a>
          ` : `
            <span>Verified Official Record</span>
          `}
        </div>
      </div>
    `;
  },

  /**
   * Render compact discovery card for homepage or destination page
   */
  renderDiscoveryCard(containerId, options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const city = options.city || 'jaipur';
    const title = options.title || 'Check Fair Prices in India';
    const subtitle = options.subtitle || 'Never overpay for autos, heritage entries, or local crafts. Instant official RTO calculations and transparent tariffs.';

    container.innerHTML = `
      <div class="raahi-fair-discovery-card">
        <div class="raahi-fair-discovery-content">
          <span class="eyebrow" style="color: var(--gold); margin-bottom: 6px; display: inline-block;">
            ⚖️ RAAHI FAIR // PRICE TRANSPARENCY
          </span>
          <h3>${title}</h3>
          <p>${subtitle}</p>
        </div>
        <button class="btn gold" onclick="window.location.hash='#/fair?city=${city}'" style="white-space: nowrap; padding: 12px 24px;">
          OPEN PRICE CALCULATOR ↗
        </button>
      </div>
    `;
  },

  /**
   * Render embedded Fair Price Guide into Destination Detail View
   */
  renderDestinationFairBlock(destSlug) {
    const clean = (destSlug || '').toLowerCase();
    const cityRoutes = FairPriceEngine.getRoutesForCity(clean);
    const transportSchedule = OFFICIAL_TRANSPORT_SCHEDULES[clean];
    const catalogItems = VERIFIED_PRICES_CATALOG.filter(i => i.citySlug === clean);

    if (!transportSchedule && catalogItems.length === 0 && (!cityRoutes || cityRoutes.length === 0)) {
      return `
        <div class="travel-info-box" style="margin-top: 30px; border-left: 3px solid var(--gold);">
          <div class="info-item" style="grid-column: 1 / -1;">
            <span class="eyebrow" style="color: var(--gold);">⚖️ RAAHI FAIR INTELLIGENCE</span>
            <h4 style="margin: 4px 0 8px;">Fair Travel Prices for ${destSlug.replace(/-/g, ' ').toUpperCase()}</h4>
            <p style="margin-bottom: 12px;">
              Check official rates for transport, tickets, and artisan items before negotiating. Raahi never guesses travel prices.
            </p>
            <button class="btn gold" onclick="window.location.hash='#/fair?city=${destSlug}'" style="font-size: 0.78rem; padding: 8px 16px;">
              Check Local Fair Prices ↗
            </button>
          </div>
        </div>
      `;
    }

    return `
      <section style="padding: 30px 0 40px;" id="fair-prices-guide">
        <div style="background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(14,21,18,0.9) 100%); border: 1px solid rgba(212,175,55,0.25); border-radius: 12px; padding: 24px;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
            <div>
              <span class="eyebrow" style="color: var(--gold); margin-bottom: 4px;">⚖️ LOCAL PRICE TRANSPARENCY</span>
              <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--cream); margin: 0; text-transform: uppercase;">
                Verified Local Rates & Fare Benchmarks
              </h3>
            </div>
            <button class="btn gold" onclick="window.location.hash='#/fair?city=${clean}'" style="font-size: 0.78rem; padding: 8px 16px;">
              Launch Fair Calculator ↗
            </button>
          </div>

          <div class="best-time-crowd-grid" style="gap: 16px; margin-top: 14px;">
            ${transportSchedule ? `
              <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--line); border-radius: 8px; padding: 16px;">
                <span class="eyebrow" style="font-size: 0.7rem; color: var(--gold);">🛺 MUNICIPAL AUTO FARE</span>
                <div style="font-family: var(--font-display); font-size: 1.4rem; color: var(--cream); font-weight: 700; margin: 4px 0;">
                  ₹${transportSchedule.auto.baseFare} <span style="font-size: 0.8rem; font-weight: 400; color: var(--muted);">first ${transportSchedule.auto.baseDistanceKm} km</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--muted-bright); margin: 0;">
                  Then ₹${transportSchedule.auto.perKmRate}/km. Meter mandatory by RTO gazette. Night surcharge ${transportSchedule.auto.nightSurchargePercent}%.
                </p>
              </div>
            ` : ''}

            ${catalogItems.length > 0 ? `
              <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--line); border-radius: 8px; padding: 16px;">
                <span class="eyebrow" style="font-size: 0.7rem; color: var(--gold);">🏛️ KEY TARIFF BENCHMARK</span>
                <div style="font-family: var(--font-display); font-size: 1.4rem; color: var(--cream); font-weight: 700; margin: 4px 0;">
                  ${catalogItems[0].fairMin === catalogItems[0].fairMax ? '₹' + catalogItems[0].fairMin : '₹' + catalogItems[0].fairMin + ' – ₹' + catalogItems[0].fairMax}
                </div>
                <p style="font-size: 0.8rem; color: var(--muted-bright); margin: 0;">
                  ${catalogItems[0].title} (${catalogItems[0].priceType}).
                </p>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
  }
};

window.RaahiFair = RaahiFair;
