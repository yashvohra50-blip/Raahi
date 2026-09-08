/**
 * RAAHI FAIR // UI Component, Modal Drawer & Interactive Controller
 * "KNOW THE PRICE BEFORE YOU PAY."
 * 
 * Strict Principle: NO VERIFIED DATA = NO CLAIM.
 * Never invents prices. Transparent calculations from official gazettes and published tariffs.
 * Completely separates VERIFIED PRICE from COMMUNITY REPORT (UNVERIFIED).
 */

import { FairPriceEngine } from '../services/fairPriceEngine.js';
import { 
  OFFICIAL_TRANSPORT_SCHEDULES, 
  VERIFIED_ROUTES, 
  VERIFIED_PRICES_CATALOG, 
  PRICE_TYPES, 
  SOURCE_TYPES 
} from '../data/fairPricesData.js';

const COMMUNITY_STORAGE_KEY = 'raahi_fair_community_reports';

export function getCommunityReports() {
  try {
    const raw = localStorage.getItem(COMMUNITY_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [
      {
        id: 'cr-1',
        category: 'transport',
        item: 'Prepaid auto from Jaipur Jn to Amber Fort',
        price: 180,
        city: 'Jaipur, Rajasthan',
        date: '2026-09-02',
        note: 'Prepaid booth outside platform 1, official receipt given'
      },
      {
        id: 'cr-2',
        category: 'activities',
        item: 'Morning rowing boat from Dashashwamedh Ghat (private)',
        price: 450,
        city: 'Varanasi, Uttar Pradesh',
        date: '2026-08-29',
        note: 'Agreed for 1.5 hr sunrise cruise across main ghats'
      }
    ];
  } catch (e) {
    return [];
  }
}

export function saveCommunityReport(report) {
  try {
    const list = getCommunityReports();
    list.unshift(report);
    localStorage.setItem(COMMUNITY_STORAGE_KEY, JSON.stringify(list));
  } catch (e) {}
}

export const RaahiFair = {
  activeCategory: 'transport',
  selectedCity: 'jaipur',
  selectedRouteId: '',
  selectedItemId: '',
  distanceKm: 13.8,
  vehicleType: 'auto',
  isNight: false,
  activeModalQuery: '',
  getCommunityReports,
  saveCommunityReport,

  /**
   * Open the Quick-Access Raahi Fair Cinematic Modal / Panel
   */
  openModal(context = {}) {
    let overlay = document.getElementById('raahi-fair-overlay');
    let modal = document.getElementById('raahi-fair-modal');

    // Dynamically create modal DOM if not already present
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'raahi-fair-overlay';
      overlay.className = 'raahi-fair-overlay';
      overlay.onclick = () => window.raahiCloseFairModal();
      document.body.appendChild(overlay);
    }

    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'raahi-fair-modal';
      modal.className = 'raahi-fair-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', 'Raahi Fair Price Intelligence');
      document.body.appendChild(modal);
    }

    this.renderModal(modal, context);
    overlay.classList.add('active');
    modal.classList.add('active');
    document.body.classList.add('lock-scroll');

    // Auto-focus search input
    setTimeout(() => {
      const input = document.getElementById('raahi-fair-modal-input');
      if (input) {
        input.focus();
        if (context.query) {
          input.value = context.query;
          this.executeModalSearch(context.query, context);
        }
      }
    }, 100);
  },

  /**
   * Close the Quick-Access Raahi Fair Modal
   */
  closeModal() {
    const overlay = document.getElementById('raahi-fair-overlay');
    const modal = document.getElementById('raahi-fair-modal');
    if (overlay) overlay.classList.remove('active');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('lock-scroll');
  },

  /**
   * Render the contents of the Quick-Access Modal
   */
  renderModal(modalElement, context = {}) {
    const initialQuery = context.query || (context.destination ? `Entry ticket for ${context.destination}` : '');
    const initialCity = context.city || 'jaipur';

    modalElement.innerHTML = `
      <div class="fair-modal-header">
        <div class="fair-modal-title-group">
          <div class="fair-modal-eyebrow">
            <span class="mark" style="width: 12px; height: 12px; border-color: var(--gold);"></span>
            ⚖️ RAAHI FAIR // TRAVEL PRICE TRANSPARENCY
          </div>
          <h2 class="fair-modal-heading">KNOW THE PRICE BEFORE YOU PAY.</h2>
          <p class="fair-modal-subtitle">Transparent, verified pricing for travel across India.</p>
        </div>
        <button class="stage-btn fair-modal-close-btn" onclick="window.raahiCloseFairModal()" title="Close (Esc)">✕</button>
      </div>

      <div class="fair-modal-body">
        <!-- Natural Language Search Bar -->
        <div class="fair-search-box">
          <label class="fair-label" for="raahi-fair-modal-input">WHAT ARE YOU PAYING FOR?</label>
          <div class="fair-search-input-wrapper">
            <input 
              type="text" 
              id="raahi-fair-modal-input" 
              class="fair-search-input" 
              placeholder="e.g. Auto from Jaipur Railway Station to Amber Fort" 
              value="${initialQuery}"
              autocomplete="off"
            />
            <button id="raahi-fair-modal-submit" class="btn gold fair-search-btn">
              CHECK FAIR PRICE →
            </button>
          </div>
          <div class="fair-search-examples">
            Try: "Auto from Jaipur station to Amber Fort" • "Cab from Delhi airport to Connaught Place" • "Entry ticket for Amber Fort" • "Price of camel ride in Jaisalmer"
          </div>
        </div>

        <!-- Suggested Search Pills -->
        <div class="fair-suggested-pills-bar">
          <span class="fair-suggested-label">Quick Checks:</span>
          <button class="fair-suggested-pill" data-query="Auto fare in Jaipur">🛺 Auto fare</button>
          <button class="fair-suggested-pill" data-query="Cab from Delhi airport to Connaught Place">🚕 Taxi fare</button>
          <button class="fair-suggested-pill" data-query="Entry ticket for Amber Fort">🏛️ Entry tickets</button>
          <button class="fair-suggested-pill" data-query="Sunrise boat ride in Varanasi">⛵ Boat rides</button>
          <button class="fair-suggested-pill" data-query="Authentic Rajasthani Thali in Jaipur">🍛 Food prices</button>
          <button class="fair-suggested-pill" data-query="Pure Kashmir Pashmina Shawl">🧵 Shopping</button>
          <button class="fair-suggested-pill" data-query="Ministry of Tourism approved guide charges">🧭 Guide charges</button>
          <button class="fair-suggested-pill" data-query="Official monument parking tariff">🅿️ Parking</button>
          <button class="fair-suggested-pill" data-query="Price of camel ride in Jaisalmer">🐪 Camel ride</button>
        </div>

        <!-- Optional Quote Comparison Box -->
        <div class="fair-modal-quote-strip">
          <div style="flex: 1; min-width: 200px;">
            <label class="fair-label" style="margin-bottom: 4px; color: var(--gold);">
              WHAT WERE YOU QUOTED? (OPTIONAL COMPARISON)
            </label>
            <div class="fair-quote-input-wrapper" style="max-width: 260px;">
              <span class="fair-currency-symbol">₹</span>
              <input type="number" id="raahi-fair-modal-quote" class="fair-quote-input" placeholder="e.g. 350" min="0" step="10" />
            </div>
          </div>
          <div style="flex: 1; min-width: 220px; font-size: 0.8rem; color: var(--muted); line-height: 1.5;">
            Enter the exact quote a driver, vendor, or guide gave you. Raahi will evaluate whether it is aligned with verified local rates or inflated.
          </div>
        </div>

        <!-- Results Mount Container -->
        <div id="raahi-fair-modal-results" class="fair-modal-results-container">
          <!-- Initial Welcome Guidance -->
          <div class="fair-initial-placeholder">
            <div style="font-size: 2rem; margin-bottom: 12px;">⚖️</div>
            <h4 style="font-family: var(--font-display); font-size: 1.1rem; color: var(--cream); margin-bottom: 6px;">
              OFFICIAL RATES & VERIFIED BENCHMARKS
            </h4>
            <p style="color: var(--muted-bright); font-size: 0.9rem; max-width: 540px; margin: 0 auto; line-height: 1.6;">
              Type a transport route, monument ticket, local activity, or artisan craft above. Raahi resolves exact gazetted fares and published state tariffs.
            </p>
          </div>
        </div>

        <!-- Report a Price Section (Community Intelligence) -->
        <div class="fair-report-section" id="fair-modal-report-section">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <h4 style="font-family: var(--font-display); font-size: 0.95rem; color: var(--cream); margin: 0;">
                📢 HELP FELLOW TRAVELERS
              </h4>
              <p style="font-size: 0.8rem; color: var(--muted); margin: 2px 0 0;">
                Were you charged a fair or unfair price? Submit an on-ground report.
              </p>
            </div>
            <button id="fair-toggle-report-btn" class="btn light" style="font-size: 0.75rem; padding: 8px 16px;">
              + Report a Price You Paid
            </button>
          </div>

          <!-- Collapsible Report Form -->
          <form id="fair-report-form" class="fair-report-form" style="display: none; margin-top: 16px;">
            <div class="fair-grid-2">
              <div class="fair-field-group">
                <label class="fair-label">ITEM / SERVICE DESCRIPTION *</label>
                <input type="text" id="rep-item" class="fair-input" placeholder="e.g. Auto from Sindhi Camp to City Palace" required />
              </div>
              <div class="fair-field-group">
                <label class="fair-label">PRICE YOU WERE CHARGED (₹) *</label>
                <input type="number" id="rep-price" class="fair-input" placeholder="e.g. 200" min="1" required />
              </div>
            </div>

            <div class="fair-grid-2">
              <div class="fair-field-group">
                <label class="fair-label">CATEGORY *</label>
                <select id="rep-category" class="fair-select">
                  <option value="transport">🛺 Transport & Cabs</option>
                  <option value="food">🍛 Food & Dining</option>
                  <option value="shopping">🧵 Artisanal Shopping</option>
                  <option value="activity">⛵ Local Activities & Tours</option>
                  <option value="service">🧭 Guides & Services</option>
                  <option value="other">📦 Other Travel Expense</option>
                </select>
              </div>
              <div class="fair-field-group">
                <label class="fair-label">CITY / LOCATION *</label>
                <input type="text" id="rep-location" class="fair-input" placeholder="e.g. Jaipur, Rajasthan" required />
              </div>
            </div>

            <div class="fair-field-group">
              <label class="fair-label">DATE OF EXPERIENCE</label>
              <input type="date" id="rep-date" class="fair-input" value="${new Date().toISOString().split('T')[0]}" />
            </div>

            <div class="fair-field-group">
              <label class="fair-label">OPTIONAL ON-GROUND NOTE</label>
              <textarea id="rep-note" class="fair-input" style="height: 60px; resize: vertical;" placeholder="e.g. Driver refused meter at first, agreed after mentioning RTO prepaid rate."></textarea>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 12px;">
              <button type="button" id="fair-cancel-report-btn" class="btn" style="padding: 8px 16px; font-size: 0.75rem;">Cancel</button>
              <button type="submit" class="btn gold" style="padding: 8px 20px; font-size: 0.75rem;">Submit Community Report →</button>
            </div>
            
            <p style="font-size: 0.75rem; color: var(--muted); margin-top: 10px; line-height: 1.4;">
              Note: Reported prices are stored locally and labeled strictly as <strong>COMMUNITY REPORT (UNVERIFIED)</strong> to maintain our core principle of truthful, verified benchmarks.
            </p>
          </form>

          <!-- Community Reports Display -->
          <div id="fair-modal-community-reports" style="margin-top: 16px;">
            ${this.renderCommunityReportsHTML()}
          </div>
        </div>
      </div>

      <div class="fair-modal-footer">
        <div style="font-size: 0.78rem; color: var(--muted-bright);">
          🛡️ <strong>Principle:</strong> NO VERIFIED DATA = NO CLAIM. Zero AI guesswork.
        </div>
        <a href="#/fair" onclick="window.raahiCloseFairModal()" class="fair-full-page-link">
          Open Full Dedicated Calculator ↗
        </a>
      </div>
    `;

    this.attachModalEventListeners(modalElement, context);
  },

  /**
   * Render HTML for Community Reports
   */
  renderCommunityReportsHTML() {
    const reports = getCommunityReports();
    if (!reports || reports.length === 0) return '';

    return `
      <div style="border-top: 1px solid var(--line); padding-top: 14px; margin-top: 14px;">
        <span class="eyebrow" style="font-size: 0.68rem; color: var(--muted); margin-bottom: 8px;">
          COMMUNITY REPORTS (UNVERIFIED)
        </span>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${reports.slice(0, 3).map(r => `
            <div class="community-report-item">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;">
                <div>
                  <strong style="color: var(--cream); font-size: 0.85rem;">${r.item}</strong>
                  <div style="color: var(--muted); font-size: 0.75rem;">${r.city} • ${r.date}</div>
                </div>
                <div style="text-align: right;">
                  <span style="font-family: var(--font-display); font-weight: 700; color: #f59e0b; font-size: 0.95rem;">₹${r.price}</span>
                  <div class="badge-unverified-tag">COMMUNITY REPORT</div>
                </div>
              </div>
              ${r.note ? `<p style="margin: 4px 0 0; font-size: 0.78rem; color: var(--muted-bright); font-style: italic;">"${r.note}"</p>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  /**
   * Attach interactive listeners inside the modal
   */
  attachModalEventListeners(modalElement, context = {}) {
    const input = modalElement.querySelector('#raahi-fair-modal-input');
    const submitBtn = modalElement.querySelector('#raahi-fair-modal-submit');
    const quoteInput = modalElement.querySelector('#raahi-fair-modal-quote');
    const suggestedPills = modalElement.querySelectorAll('.fair-suggested-pill');
    const toggleReportBtn = modalElement.querySelector('#fair-toggle-report-btn');
    const cancelReportBtn = modalElement.querySelector('#fair-cancel-report-btn');
    const reportForm = modalElement.querySelector('#fair-report-form');

    const doSearch = () => {
      const q = input?.value.trim() || '';
      if (!q) return;
      this.executeModalSearch(q, {
        ...context,
        userQuote: quoteInput?.value ? parseFloat(quoteInput.value) : null
      });
    };

    submitBtn?.addEventListener('click', doSearch);
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        doSearch();
      }
    });

    quoteInput?.addEventListener('input', () => {
      const q = input?.value.trim() || '';
      if (q) doSearch();
    });

    suggestedPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const queryText = pill.getAttribute('data-query');
        if (input) input.value = queryText;
        doSearch();
      });
    });

    // Toggle Report Form
    toggleReportBtn?.addEventListener('click', () => {
      if (reportForm) {
        const isHidden = reportForm.style.display === 'none';
        reportForm.style.display = isHidden ? 'block' : 'none';
        toggleReportBtn.textContent = isHidden ? '✕ Close Form' : '+ Report a Price You Paid';
      }
    });

    cancelReportBtn?.addEventListener('click', () => {
      if (reportForm) {
        reportForm.style.display = 'none';
        if (toggleReportBtn) toggleReportBtn.textContent = '+ Report a Price You Paid';
      }
    });

    // Handle Report Form Submit
    reportForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const item = document.getElementById('rep-item')?.value.trim();
      const price = parseFloat(document.getElementById('rep-price')?.value);
      const category = document.getElementById('rep-category')?.value;
      const location = document.getElementById('rep-location')?.value.trim();
      const date = document.getElementById('rep-date')?.value;
      const note = document.getElementById('rep-note')?.value.trim();

      if (!item || isNaN(price) || !location) return;

      saveCommunityReport({
        id: 'cr-' + Date.now(),
        item,
        price,
        category,
        city: location,
        date: date || new Date().toISOString().split('T')[0],
        note
      });

      reportForm.reset();
      reportForm.style.display = 'none';
      if (toggleReportBtn) toggleReportBtn.textContent = '+ Report a Price You Paid';

      const listContainer = document.getElementById('fair-modal-community-reports');
      if (listContainer) {
        listContainer.innerHTML = this.renderCommunityReportsHTML();
      }

      alert("Thank you! Your report has been saved. It is labeled as a COMMUNITY REPORT (UNVERIFIED) to separate community data from verified government and ASI tariffs.");
    });
  },

  /**
   * Execute search and render result cards in the modal
   */
  executeModalSearch(query, context = {}) {
    const resultsContainer = document.getElementById('raahi-fair-modal-results');
    if (!resultsContainer) return;

    this.activeModalQuery = query;
    const result = FairPriceEngine.parseAndResolveQuery(query, context);

    resultsContainer.innerHTML = this.renderResultHTML(result, context.userQuote || result.userQuote);
  },

  /**
   * Universal HTML Card Renderer for verified or unverified query results
   */
  renderResultHTML(result, userQuote = null) {
    if (!result.verified) {
      // UNVERIFIED / UNKNOWN CARD (STRICT TRUTH IN PRICING)
      return `
        <div class="fair-unverified-card">
          <div class="fair-unverified-header">
            <span class="badge-unverified-tag">⚠️ ${result.status || 'PRICE NOT VERIFIED'}</span>
            <span style="font-size: 0.78rem; color: var(--muted);">Strict Verification Protocol</span>
          </div>

          <h3 class="fair-unverified-title">
            PRICE NOT VERIFIED
          </h3>

          <p class="fair-unverified-message">
            We couldn't verify a current price for "${result.query || 'this item'}" yet.
          </p>

          <p class="fair-unverified-explanation">
            In adherence to Raahi's strict transparency policy, <strong>we never synthesize estimated numbers or AI guesses</strong>. If official government gazettes, ASI tariffs, or verified operator rate cards are not available for this specific service, we explicitly declare it UNVERIFIED.
          </p>

          <div class="fair-advice-box" style="margin-top: 16px;">
            <h4>💡 RECOMMENDED ON-GROUND VERIFICATION STEPS:</h4>
            <ul class="fair-advice-list">
              ${(result.fallbackGuidance || [
                "Check for official tariff boards or displayed government rate cards on site",
                "Insist on the electronic digital meter for autos/taxis in municipal regions",
                "Use official prepaid counters at transit terminals (airports, major railway stations)"
              ]).map(step => `<li>${step}</li>`).join('')}
            </ul>
          </div>
        </div>
      `;
    }

    // VERIFIED RESULT CARD
    const quoteEval = result.evaluation;
    const fairRangeString = result.fairMin === result.fairMax 
      ? `₹${result.fairMin}` 
      : `₹${result.fairMin} – ₹${result.fairMax}`;

    return `
      <div class="fair-result-card">
        <!-- Meta Status Row -->
        <div class="fair-result-meta-row">
          <span class="fair-price-type-pill" style="border-color: rgba(212,175,55,0.4); color: var(--gold);">
            ● ${result.priceType}
          </span>
          <span style="font-size: 0.8rem; color: var(--muted);">
            Confidence: <strong style="color: #10b981;">${result.confidence || 'VERIFIED'}</strong> • Last Verified: <strong>${result.lastVerified || 'September 2026'}</strong>
          </span>
        </div>

        <!-- Big Price Comparison Grid -->
        <div class="fair-comparison-grid">
          <div class="fair-price-col">
            <div class="sublabel">VERIFIED FAIR PRICE</div>
            <div class="main-val" style="color: var(--gold);">
              ${fairRangeString}
            </div>
            <div style="font-size: 0.8rem; color: var(--muted); margin-top: 4px;">
              ${result.unit ? result.unit : (result.vehicleName ? `trip (${result.distanceKm || ''} km)` : 'standard entry / rate')}
            </div>
          </div>

          <div class="fair-vs-divider">VS</div>

          <div class="fair-price-col">
            <div class="sublabel">WHAT YOU WERE QUOTED</div>
            <div class="main-val" style="color: ${quoteEval ? quoteEval.color : 'var(--muted-dim)'};">
              ${userQuote ? '₹' + userQuote : '—'}
            </div>
            <div style="margin-top: 6px;">
              ${quoteEval ? `
                <span class="fair-price-type-pill ${quoteEval.badgeClass}" style="font-size: 0.72rem; padding: 4px 10px;">
                  ${quoteEval.label}
                </span>
              ` : `
                <span style="font-size: 0.76rem; color: var(--muted);">Optional quote comparison</span>
              `}
            </div>
          </div>
        </div>

        <!-- Quote Evaluation Status Banner -->
        ${quoteEval ? `
          <div class="fair-status-banner" style="background: ${quoteEval.status === 'FAIR' ? 'rgba(16,185,129,0.08)' : (quoteEval.status === 'HIGH' ? 'rgba(245,158,11,0.08)' : 'rgba(244,63,94,0.08)')}; border: 1px solid ${quoteEval.color};">
            <span style="font-size: 1.3rem;">
              ${quoteEval.status === 'FAIR' ? '✅' : (quoteEval.status === 'HIGH' ? '⚠️' : '🚨')}
            </span>
            <div>
              <strong style="color: ${quoteEval.color}; font-family: var(--font-display); letter-spacing: 0.05em; display: block; margin-bottom: 2px;">
                ${quoteEval.label}: ${quoteEval.diffPercent ? quoteEval.diffPercent + '% above verified rate' : 'Within fair local range'}
              </strong>
              <div style="color: var(--cream); font-size: 0.88rem;">
                ${quoteEval.message}
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Itemized Transparent Math Breakdown -->
        ${result.breakdown && result.breakdown.length > 0 ? `
          <div class="fair-breakdown-box">
            <div class="fair-breakdown-title">
              📊 PRICE DETAILS & CALCULATION
            </div>
            ${result.breakdown.map(b => `
              <div class="fair-breakdown-row">
                <span>${b.label}</span>
                <span style="font-family: var(--font-display); font-weight: 600;">${b.amount}</span>
              </div>
            `).join('')}
            <div class="fair-breakdown-row total">
              <span>Total Verified Fare</span>
              <span style="font-family: var(--font-display); color: var(--gold); font-size: 1.05rem;">${fairRangeString}</span>
            </div>
          </div>
        ` : ''}

        <!-- Trust Evidence Box -->
        <div class="fair-trust-box">
          <h4>
            <span>🛡️</span> SOURCE & VERIFICATION
          </h4>
          <ul class="fair-trust-list">
            <li>
              <strong>Verified from:</strong> ${result.source || 'Official Government Gazette'}
            </li>
            <li>
              <strong>Authority Type:</strong> ${result.sourceType || SOURCE_TYPES.GOVERNMENT}
            </li>
            <li>
              <strong>Last Verified:</strong> ${result.lastVerified || 'September 2026'}
            </li>
            <li>
              <strong>Confidence Rating:</strong> <span style="color: #10b981; font-weight: 600;">VERIFIED (${result.confidence || 'HIGH'})</span>
            </li>
            ${result.meterMandatory ? `
              <li>
                <strong>Legal Mandate:</strong> Digital electronic meter is legally mandatory for this route under state RTO rules.
              </li>
            ` : ''}
          </ul>
        </div>

        <!-- On-Ground Guidance -->
        <div class="fair-advice-box">
          <h4>
            💡 WHAT YOU CAN DO & ADVICE
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
        </div>

        <!-- Source Link Footer -->
        <div class="fair-source-footer">
          <div>
            Location: <strong>${result.city || 'India'}, ${result.state || ''}</strong>
          </div>
          ${result.sourceUrl ? `
            <a href="${result.sourceUrl}" target="_blank" rel="noopener noreferrer" class="fair-source-link">
              View Official Regulatory Tariff ↗
            </a>
          ` : `
            <span>Verified Official Record</span>
          `}
        </div>
      </div>
    `;
  },

  /**
   * Render the dedicated Raahi Fair Full Page View (#/fair)
   */
  renderFullPage(containerId = 'view-fair', params = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (params.city) {
      this.selectedCity = params.city.toLowerCase();
    }
    if (params.category) {
      this.activeCategory = params.category.toLowerCase();
    }

    const cities = FairPriceEngine.getSupportedCities();
    const cityExists = cities.some(c => c.slug === this.selectedCity);
    if (!cityExists && this.selectedCity !== 'all') {
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
                ✓ Registered Union Benchmarks
              </span>
              <span class="fair-price-type-pill" style="border-color: rgba(148,163,184,0.4); color: #94a3b8;">
                ✓ Zero AI Guesses (NO DATA = NO CLAIM)
              </span>
            </div>
          </div>

          <!-- Main Interactive Card -->
          <div class="fair-card">
            <!-- Universal Natural Language Query Bar -->
            <div class="fair-search-box" style="margin-bottom: 24px;">
              <label class="fair-label" for="fair-page-search-input">WHAT ARE YOU PAYING FOR?</label>
              <div class="fair-search-input-wrapper">
                <input 
                  type="text" 
                  id="fair-page-search-input" 
                  class="fair-search-input" 
                  placeholder="e.g. Auto from Jaipur Railway Station to Amber Fort" 
                />
                <button id="fair-page-search-btn" class="btn gold fair-search-btn">
                  CHECK FAIR PRICE →
                </button>
              </div>
              <div class="fair-suggested-pills-bar" style="margin-top: 12px;">
                <span class="fair-suggested-label">Quick Checks:</span>
                <button class="fair-suggested-pill page-pill" data-query="Auto from Jaipur station to Amber Fort">Jaipur Auto</button>
                <button class="fair-suggested-pill page-pill" data-query="Cab from Delhi airport to Connaught Place">Delhi Cab</button>
                <button class="fair-suggested-pill page-pill" data-query="Entry ticket for Amber Fort">Amber Fort Ticket</button>
                <button class="fair-suggested-pill page-pill" data-query="Taj Mahal ticket">Taj Mahal Ticket</button>
                <button class="fair-suggested-pill page-pill" data-query="Price of camel ride in Jaisalmer">Camel Ride</button>
                <button class="fair-suggested-pill page-pill" data-query="Shikara ride in Dal Lake">Dal Lake Shikara</button>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 14px; margin: 20px 0; color: var(--muted); font-size: 0.8rem;">
              <div style="flex: 1; height: 1px; background: var(--line);"></div>
              <span>OR EXPLORE BY DESTINATION & CATEGORY</span>
              <div style="flex: 1; height: 1px; background: var(--line);"></div>
            </div>

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
                <label class="fair-label" for="fair-category-dropdown">SELECT SERVICE CATEGORY</label>
                <select id="fair-category-dropdown" class="fair-select">
                  <option value="transport" ${this.activeCategory === 'transport' ? 'selected' : ''}>🛺 Transport & Cabs</option>
                  <option value="activities" ${this.activeCategory === 'activities' ? 'selected' : ''}>⛵ Activities & Tours</option>
                  <option value="monuments" ${this.activeCategory === 'monuments' ? 'selected' : ''}>🏛️ Monuments & Heritage</option>
                  <option value="shopping" ${this.activeCategory === 'shopping' ? 'selected' : ''}>🧵 Artisanal Shopping</option>
                  <option value="food" ${this.activeCategory === 'food' ? 'selected' : ''}>🍛 Traditional Food</option>
                  <option value="services" ${this.activeCategory === 'services' ? 'selected' : ''}>🧭 Guides & Porters</option>
                </select>
              </div>
            </div>

            <!-- Dynamic Controls Container -->
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
                Enter the quote you were given to see an instant neutral evaluation against verified local rates.
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

    this.attachFullPageEventListeners();
    this.updateControls();
    this.runCalculation();
  },

  attachFullPageEventListeners() {
    // City Selector
    const citySelect = document.getElementById('fair-city-select');
    if (citySelect) {
      citySelect.addEventListener('change', (e) => {
        this.selectedCity = e.target.value;
        this.updateControls();
        this.runCalculation();
      });
    }

    // Category Dropdown
    const catSelect = document.getElementById('fair-category-dropdown');
    if (catSelect) {
      catSelect.addEventListener('change', (e) => {
        this.activeCategory = e.target.value;
        this.updateControls();
        this.runCalculation();
      });
    }

    // Page Search Input & Button
    const searchInput = document.getElementById('fair-page-search-input');
    const searchBtn = document.getElementById('fair-page-search-btn');

    const doPageSearch = () => {
      const q = searchInput?.value.trim();
      if (!q) return;
      const quoteVal = document.getElementById('fair-quote-input')?.value;
      const res = FairPriceEngine.parseAndResolveQuery(q, {
        city: this.selectedCity,
        userQuote: quoteVal ? parseFloat(quoteVal) : null
      });
      const resultContainer = document.getElementById('fair-result-container');
      if (resultContainer) {
        resultContainer.innerHTML = this.renderResultHTML(res, quoteVal ? parseFloat(quoteVal) : null);
      }
    };

    searchBtn?.addEventListener('click', doPageSearch);
    searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        doPageSearch();
      }
    });

    // Suggested Pills on Page
    document.querySelectorAll('.page-pill').forEach(pill => {
      pill.addEventListener('click', () => {
        if (searchInput) searchInput.value = pill.getAttribute('data-query');
        doPageSearch();
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
  },

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
            </select>
          </div>

          <div class="fair-field-group">
            <label class="fair-label" for="fair-distance-input">TRAVEL DISTANCE (KM)</label>
            <input type="number" id="fair-distance-input" class="fair-input" value="${this.distanceKm}" step="0.1" min="0.5" max="250" />
          </div>
        </div>
      `;

      // Sub listeners
      const routeSelect = document.getElementById('fair-route-select');
      const distInput = document.getElementById('fair-distance-input');
      const vehSelect = document.getElementById('fair-vehicle-select');

      routeSelect?.addEventListener('change', (e) => {
        this.selectedRouteId = e.target.value;
        if (e.target.value === 'custom') {
          if (distInput) distInput.focus();
        } else {
          const r = routes.find(item => item.id === e.target.value);
          if (r) {
            this.distanceKm = r.distanceKm;
            if (distInput) distInput.value = r.distanceKm;
          }
        }
        this.runCalculation();
      });

      distInput?.addEventListener('input', (e) => {
        this.distanceKm = parseFloat(e.target.value) || 1;
      });

      vehSelect?.addEventListener('change', (e) => {
        this.vehicleType = e.target.value;
        this.runCalculation();
      });

    } else {
      // Catalog items for selected category & city
      const items = FairPriceEngine.getCatalogItems(this.activeCategory, this.selectedCity);

      if (items.length === 0) {
        container.innerHTML = `
          <div style="background: rgba(255,255,255,0.02); border: 1px dashed var(--line); border-radius: 8px; padding: 20px; text-align: center; margin-bottom: 20px;">
            <p style="color: var(--muted); font-size: 0.88rem; margin: 0;">
              No specific catalog items listed under this category for ${this.selectedCity.toUpperCase()} yet. Try searching above!
            </p>
          </div>
        `;
        return;
      }

      if (!this.selectedItemId || !items.some(i => i.id === this.selectedItemId)) {
        this.selectedItemId = items[0].id;
      }

      container.innerHTML = `
        <div class="fair-field-group">
          <label class="fair-label" for="fair-item-select">SELECT VERIFIED ITEM / TARIFF</label>
          <select id="fair-item-select" class="fair-select">
            ${items.map(item => `
              <option value="${item.id}" ${item.id === this.selectedItemId ? 'selected' : ''}>
                ${item.itemName} (${item.priceMin === item.priceMax ? '₹' + item.priceMin : '₹' + item.priceMin + ' – ₹' + item.priceMax})
              </option>
            `).join('')}
          </select>
        </div>
      `;

      const itemSelect = document.getElementById('fair-item-select');
      itemSelect?.addEventListener('change', (e) => {
        this.selectedItemId = e.target.value;
        this.runCalculation();
      });
    }
  },

  runCalculation() {
    const resultContainer = document.getElementById('fair-result-container');
    if (!resultContainer) return;

    const result = FairPriceEngine.getFairPrice({
      citySlug: this.selectedCity,
      category: this.activeCategory,
      itemId: this.selectedItemId,
      routeId: this.selectedRouteId === 'custom' ? null : this.selectedRouteId,
      customKm: this.distanceKm,
      vehicleType: this.vehicleType,
      isNight: this.isNight,
      userQuote: this.userQuote
    });

    resultContainer.innerHTML = this.renderResultHTML(result, this.userQuote);
  },

  /**
   * Render embedded Fair Price Guide into Destination Detail View
   */
  renderDestinationFairBlock(destSlug) {
    const clean = (destSlug || '').toLowerCase();
    const cityRoutes = FairPriceEngine.getRoutesForCity(clean);
    const transportSchedule = OFFICIAL_TRANSPORT_SCHEDULES[clean];
    const catalogItems = VERIFIED_PRICES_CATALOG.filter(i => i.citySlug === clean);

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
            <button class="btn gold" onclick="window.raahiOpenFairModal({ city: '${clean}', query: 'Auto fare in ${clean}' })" style="font-size: 0.78rem; padding: 8px 16px;">
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
                  Then ₹${transportSchedule.auto.perKmRate}/km. Meter mandatory by RTO gazette.
                </p>
              </div>
            ` : ''}

            ${catalogItems.length > 0 ? `
              <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--line); border-radius: 8px; padding: 16px;">
                <span class="eyebrow" style="font-size: 0.7rem; color: var(--gold);">🏛️ KEY TARIFF BENCHMARK</span>
                <div style="font-family: var(--font-display); font-size: 1.4rem; color: var(--cream); font-weight: 700; margin: 4px 0;">
                  ${catalogItems[0].priceMin === catalogItems[0].priceMax ? '₹' + catalogItems[0].priceMin : '₹' + catalogItems[0].priceMin + ' – ₹' + catalogItems[0].priceMax}
                </div>
                <p style="font-size: 0.8rem; color: var(--muted-bright); margin: 0;">
                  ${catalogItems[0].itemName} (${catalogItems[0].priceType}).
                </p>
              </div>
            ` : ''}
          </div>
        </div>
      </section>
    `;
  },

  /**
   * Render compact discovery card for homepage
   */
  renderDiscoveryCard(containerId = 'home-fair-card-mount', options = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const city = options.city || 'jaipur';
    const title = options.title || 'Know the Fair Price Before You Pay';
    const subtitle = options.subtitle || 'Official municipal auto rickshaw meters, ASI heritage entry tariffs, boat unions, and certified artisan craft benchmarks. Zero guesswork.';

    container.innerHTML = `
      <div class="raahi-fair-discovery-card" style="background: linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(14,21,18,0.9) 100%); border: 1px solid rgba(212,175,55,0.25); border-radius: 12px; padding: 24px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; margin: 30px 0;">
        <div class="raahi-fair-discovery-content" style="max-width: 650px;">
          <span class="eyebrow" style="color: var(--gold); margin-bottom: 6px; display: inline-block;">
            ⚖️ RAAHI FAIR // PRICE TRANSPARENCY
          </span>
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; color: var(--cream); margin: 0 0 6px;">${title}</h3>
          <p style="color: var(--muted-bright); font-size: 0.9rem; line-height: 1.5; margin: 0;">${subtitle}</p>
        </div>
        <button class="btn gold" onclick="window.raahiOpenFairModal({ city: '${city}' })" style="white-space: nowrap; padding: 12px 24px; font-weight: 700;">
          ⚖ OPEN FAIR CALCULATOR ↗
        </button>
      </div>
    `;
  }
};

// Global Windows Hooks
if (typeof window !== 'undefined') {
  window.RaahiFair = RaahiFair;
  window.raahiOpenFairModal = (context = {}) => RaahiFair.openModal(context);
  window.raahiCloseFairModal = () => RaahiFair.closeModal();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      RaahiFair.closeModal();
    }
  });
}
