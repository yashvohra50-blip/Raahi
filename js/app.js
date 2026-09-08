/**
 * RAAHI // Application Bootstrap Coordinator
 */

import { initRouter, navigateTo } from './router.js';
import { initAssistant } from './assistant.js';
import { initSearchModal } from './components/searchModal.js';
import { updateJourneyBadgeCount, isPlaceSaved, updateAllSaveButtons } from './journeyBuilder.js';
import { DataRegistry, RAAHI_DATA } from './data/dataRegistry.js';
import { experiencesData } from './data/experiencesData.js';

// Expose navigation functions globally for inline HTML event handlers
window.raahiNavigate = (hash) => navigateTo(hash);
window.arvoraNavigate = window.raahiNavigate;

function initDiscoveryFilters() {
  const chips = document.querySelectorAll('#discovery-filter-chips .filter-chip');
  const grid = document.getElementById('discovery-results-grid');
  if (!grid) return;

  function renderCategory(cat) {
    const list = (cat === 'all') 
      ? experiencesData 
      : experiencesData.filter(item => item.category === cat || item.id === cat);

    grid.innerHTML = list.map(item => `
      <div class="discovery-card" onclick="window.location.hash='#/destinations/${item.destSlug || item.id}'">
        <img src="${item.img || item.heroImage || 'assets/images/destinations/amber-fort.jpg'}" alt="${item.name || item.title}" class="discovery-card-img" loading="lazy" onerror="this.src='assets/images/destinations/amber-fort.jpg'" />
        <div class="discovery-card-tag">${item.categoryTag || item.tag || 'CURATED EXPEDITION'}</div>
        <div class="discovery-card-content">
          <span class="eyebrow" style="margin-bottom: 4px;">${item.loc || item.state || 'India'}</span>
          <h3 class="discovery-card-title">${item.name || item.title}</h3>
          <p class="discovery-card-sub">${item.desc || item.description}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <span class="state-card-action">EXPLORE DESTINATION →</span>
            <button class="btn-save-journey ${isPlaceSaved(item.destSlug || item.id) ? 'saved' : ''}" style="padding: 6px 12px; font-size: 0.68rem;" data-save-place-id="${item.destSlug || item.id}" data-saved-text="♥ Saved" data-unsaved-text="♡ Save" onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${item.destSlug || item.id}');">
              ${isPlaceSaved(item.destSlug || item.id) ? '♥ Saved' : '♡ Save'}
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const category = chip.dataset.category || 'all';
      renderCategory(category);
    });
  });

  // Initial render
  renderCategory('all');
}

function bootstrapApp() {
  // 1. Initialize Core Router, Search & Assistant
  initRouter();
  initSearchModal();
  initDiscoveryFilters();
  initAssistant();
  updateJourneyBadgeCount();
  updateAllSaveButtons();
  
  // 2. Sticky Nav Controller
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav?.classList.add('scrolled');
    } else {
      nav?.classList.remove('scrolled');
    }
  });

  // 3. Mobile Menu Toggle
  const menuToggle = document.getElementById('menu-toggle-btn');
  const mobileMenu = document.getElementById('mobile-menu-drawer');
  const mobileClose = document.getElementById('mobile-menu-close');

  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.add('active');
    document.body.classList.add('lock-scroll');
  });

  mobileClose?.addEventListener('click', () => {
    mobileMenu?.classList.remove('active');
    document.body.classList.remove('lock-scroll');
  });

  // 4. Global Keyboard Shortcuts: Ctrl+K or / to open Search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (window.raahiOpenSearchModal) window.raahiOpenSearchModal();
    } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
      e.preventDefault();
      if (window.raahiOpenSearchModal) window.raahiOpenSearchModal();
    }
  });

  // 5. Quick Explore Buttons
  document.querySelectorAll('[data-route]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const route = el.getAttribute('data-route');
      if (route) navigateTo(route);
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapApp);
} else {
  bootstrapApp();
}
