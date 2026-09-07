/**
 * RAAHI // Application Bootstrap Coordinator
 */

import { initRouter, navigateTo } from './router.js';
import { initAssistant } from './assistant.js';
import { updateJourneyBadgeCount, isPlaceSaved, updateAllSaveButtons } from './journeyBuilder.js';
import { RAAHI_DATA } from './data.js';

// Expose navigation functions globally for inline HTML event handlers
window.raahiNavigate = (hash) => navigateTo(hash);
window.arvoraNavigate = window.raahiNavigate;

const DISCOVERY_ITEMS = [
  {
    id: 'amber-fort',
    name: 'Amber Fort',
    categoryTag: 'ROYAL FORTRESS',
    category: 'forts',
    loc: 'Jaipur, Rajasthan',
    desc: 'Monumental hilltop citadel with mirror-mosaic palaces and panoramic Aravalli ridge views.',
    img: 'assets/images/destinations/amber-fort.jpg'
  },
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    categoryTag: 'SACRED MONUMENT',
    category: 'sacred',
    loc: 'Agra, Uttar Pradesh',
    desc: 'Ivory-white marble mausoleum on the Yamuna River bank celebrating eternal devotion.',
    img: 'assets/images/destinations/taj-mahal.jpg'
  },
  {
    id: 'spiti-key-monastery',
    name: 'Key Monastery',
    categoryTag: 'HIMALAYAN SOLITUDE',
    category: 'himalayas',
    loc: 'Spiti Valley, Himachal',
    desc: 'Thousand-year-old cliffside Tibetan Buddhist monastery at 13,668 ft elevation.',
    img: 'assets/images/destinations/key-monastery.jpg'
  },
  {
    id: 'alleppey-backwaters',
    name: 'Alleppey Canals',
    categoryTag: 'BACKWATERS & COASTS',
    category: 'backwaters',
    loc: 'Alappuzha, Kerala',
    desc: 'Tranquil emerald backwaters navigated by hand-crafted kettuvallam houseboats.',
    img: 'assets/images/destinations/alleppey-backwaters.jpg'
  },
  {
    id: 'dashashwamedh-ghat',
    name: 'Dashashwamedh Ghat',
    categoryTag: 'SACRED RIVERS',
    category: 'sacred',
    loc: 'Varanasi, Uttar Pradesh',
    desc: 'Ancient stone riverfront alive with evening Ganga Aarti brass lamps and devotional chanting.',
    img: 'assets/images/destinations/dashashwamedh-ghat.jpg'
  },
  {
    id: 'hadimba-temple',
    name: 'Hadimba Temple',
    categoryTag: 'HIMALAYAN SOLITUDE',
    category: 'himalayas',
    loc: 'Manali, Himachal',
    desc: 'Ancient wooden pagoda shrine enveloped by towering centuries-old giant cedar deodars.',
    img: 'assets/images/destinations/hadimba-temple.jpg'
  },
  {
    id: 'aguada-fort',
    name: 'Fort Aguada',
    categoryTag: 'COASTAL FORT',
    category: 'forts',
    loc: 'Candolim, Goa',
    desc: '17th-century Portuguese fortress and vintage stone lighthouse overlooking the Arabian Sea.',
    img: 'assets/images/destinations/fort-aguada.jpg'
  },
  {
    id: 'bagru-printing',
    name: 'Bagru Block Printing',
    categoryTag: 'LIVING TRADITIONS',
    category: 'culture',
    loc: 'Jaipur, Rajasthan',
    desc: 'Artisan village preserving centuries-old hand-carved teak block printing with natural indigo.',
    img: 'assets/images/destinations/panna-meena.jpg'
  }
];

function initDiscoveryFilters() {
  const chips = document.querySelectorAll('#discovery-filter-chips .filter-chip');
  const grid = document.getElementById('discovery-results-grid');
  if (!grid) return;

  function renderCategory(cat) {
    const filtered = cat === 'all' 
      ? DISCOVERY_ITEMS 
      : DISCOVERY_ITEMS.filter(item => item.category === cat);

    grid.innerHTML = filtered.map(item => `
      <div class="discovery-card" onclick="window.location.hash='#/destinations/${item.id}'">
        <img src="${item.img}" alt="${item.name}" class="discovery-card-img" loading="lazy" />
        <div class="discovery-card-tag">${item.categoryTag}</div>
        <div class="discovery-card-content">
          <span class="eyebrow" style="margin-bottom: 4px;">${item.loc}</span>
          <h3 class="discovery-card-title">${item.name}</h3>
          <p class="discovery-card-sub">${item.desc}</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px;">
            <span class="state-card-action">EXPLORE DESTINATION →</span>
            <button class="btn-save-journey ${isPlaceSaved(item.id) ? 'saved' : ''}" style="padding: 6px 12px; font-size: 0.68rem;" data-save-place-id="${item.id}" data-saved-text="♥ Saved" data-unsaved-text="♡ Save" onclick="event.stopPropagation(); window.raahiToggleSaveJourney('${item.id}');">
              ${isPlaceSaved(item.id) ? '♥ Saved' : '♡ Save'}
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
  // 1. Initialize Core Router & Assistant
  initRouter();
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

  // 4. Quick Explore Buttons
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
