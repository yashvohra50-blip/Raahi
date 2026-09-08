/**
 * RAAHI // Global Intelligent Search Modal with Keyboard Navigation
 */

import { searchIndex } from '../data/searchIndex.js';

export function initSearchModal() {
  // Check if modal already exists
  if (document.getElementById('raahi-search-modal')) return;

  const modalHtml = `
    <div class="search-overlay" id="raahi-search-overlay" onclick="window.raahiCloseSearchModal()"></div>
    <div class="search-modal" id="raahi-search-modal" role="dialog" aria-modal="true" aria-label="Global Travel Search">
      <div class="search-modal-header">
        <div class="search-input-wrapper">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            id="global-search-input" 
            class="global-search-input" 
            placeholder="Search all 28 States, 8 UTs, monuments, beaches, food, culture... (Ctrl+K)" 
            autocomplete="off"
          />
          <span class="search-kbd-hint"><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
          <button class="search-close-btn" onclick="window.raahiCloseSearchModal()" title="Close Search (Esc)">✕</button>
        </div>

        <div class="search-quick-tags" id="search-quick-tags">
          <span class="quick-tag-label">POPULAR:</span>
          <button class="search-tag-chip" data-q="Jaipur">🏰 Jaipur</button>
          <button class="search-tag-chip" data-q="Royal Fortresses">🏛️ Forts</button>
          <button class="search-tag-chip" data-q="Backwaters">🌊 Beaches</button>
          <button class="search-tag-chip" data-q="Spiti Valley">🏔️ Himalayas</button>
          <button class="search-tag-chip" data-q="Varanasi">🛕 Spiritual</button>
          <button class="search-tag-chip" data-q="Kaziranga">🐅 Wildlife</button>
          <button class="search-tag-chip" data-q="Kerala">🌴 Backwaters</button>
        </div>
      </div>

      <div class="search-results-list" id="search-results-list">
        <div class="search-empty-state">
          Type a destination, state, attraction, or travel archetype to explore.
        </div>
      </div>

      <div class="search-footer-hint">
        <span><kbd>↑</kbd> <kbd>↓</kbd> Navigate</span>
        <span><kbd>↵ Enter</kbd> Open Page</span>
        <span><kbd>Esc</kbd> Close</span>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  // Global functions
  window.raahiOpenSearchModal = () => {
    const overlay = document.getElementById('raahi-search-overlay');
    const modal = document.getElementById('raahi-search-modal');
    const input = document.getElementById('global-search-input');
    if (overlay) overlay.classList.add('active');
    if (modal) modal.classList.add('active');
    document.body.classList.add('lock-scroll');
    if (input) {
      input.value = '';
      input.focus();
      renderResults('');
    }
  };

  window.raahiCloseSearchModal = () => {
    const overlay = document.getElementById('raahi-search-overlay');
    const modal = document.getElementById('raahi-search-modal');
    if (overlay) overlay.classList.remove('active');
    if (modal) modal.classList.remove('active');
    document.body.classList.remove('lock-scroll');
  };

  // Keyboard shortcut: Ctrl+K or Cmd+K or /
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      window.raahiOpenSearchModal();
    } else if (e.key === 'Escape') {
      window.raahiCloseSearchModal();
    }
  });

  const input = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-list');
  let selectedIndex = -1;
  let currentResults = [];

  function renderResults(q) {
    if (!resultsContainer) return;
    if (!q || q.trim().length === 0) {
      resultsContainer.innerHTML = `
        <div class="search-empty-state">
          Type to search across all 28 States, 8 UTs, 120+ destinations, and cultural landmarks.
        </div>
      `;
      currentResults = [];
      selectedIndex = -1;
      return;
    }

    currentResults = searchIndex.search(q, 10);
    selectedIndex = currentResults.length > 0 ? 0 : -1;

    const aiBtnHtml = `
      <div style="padding: 10px 14px; margin-bottom: 12px; background: linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(13, 20, 16, 0.8) 100%); border: 1px solid rgba(212, 175, 55, 0.4); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer;" onclick="window.raahiCloseSearchModal(); window.raahiAskAssistant('${q.replace(/'/g, "\\'")}');">
        <div>
          <span style="font-family: var(--font-display); font-size: 0.68rem; color: var(--gold); letter-spacing: 0.1em; text-transform: uppercase;">✦ GOOGLE GEMINI AI KNOWLEDGE</span>
          <div style="font-family: var(--font-display); font-size: 0.95rem; color: var(--cream); font-weight: 600;">Ask Google AI about "${q}"</div>
        </div>
        <span class="btn gold" style="padding: 6px 14px; font-size: 0.72rem;">⚡ ASK AI →</span>
      </div>
    `;

    if (currentResults.length === 0) {
      resultsContainer.innerHTML = `
        ${aiBtnHtml}
        <div class="search-empty-state">
          No offline index entries for "<strong>${q}</strong>". Click the button above to ask Google Gemini AI directly!
        </div>
      `;
      return;
    }

    resultsContainer.innerHTML = aiBtnHtml + currentResults.map((item, idx) => `
      <div class="search-result-item ${idx === 0 ? 'selected' : ''}" data-idx="${idx}" data-route="${item.route}">
        <img src="${item.image}" alt="${item.title}" class="search-result-img" loading="lazy" />
        <div class="search-result-info">
          <div style="display: flex; align-items: center; gap: 8px;">
            <h4 class="search-result-title">${item.title}</h4>
            <span class="search-result-badge">${item.category}</span>
          </div>
          <p class="search-result-sub">${item.subtitle}</p>
        </div>
        <span class="search-result-arrow">→</span>
      </div>
    `).join('');

    resultsContainer.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const route = el.getAttribute('data-route');
        if (route) {
          window.location.hash = route;
          window.raahiCloseSearchModal();
        }
      });
    });
  }

  input?.addEventListener('input', (e) => {
    renderResults(e.target.value);
  });

  input?.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentResults.length === 0) return;
      selectedIndex = (selectedIndex + 1) % currentResults.length;
      updateSelected();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentResults.length === 0) return;
      selectedIndex = (selectedIndex - 1 + currentResults.length) % currentResults.length;
      updateSelected();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < currentResults.length) {
        const item = currentResults[selectedIndex];
        window.location.hash = item.route;
        window.raahiCloseSearchModal();
      }
    }
  });

  function updateSelected() {
    const items = resultsContainer.querySelectorAll('.search-result-item');
    items.forEach((it, idx) => {
      if (idx === selectedIndex) {
        it.classList.add('selected');
        it.scrollIntoView({ block: 'nearest' });
      } else {
        it.classList.remove('selected');
      }
    });
  }

  // Quick tag chips
  document.querySelectorAll('#search-quick-tags .search-tag-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-q') || '';
      if (input) {
        input.value = q;
        renderResults(q);
      }
    });
  });
}
