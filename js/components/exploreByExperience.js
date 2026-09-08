/**
 * RAAHI // Explore by Experience Component
 * 8 curated horizontal travel archetype cards with live filter interactions.
 */

export const EXPERIENCE_CATEGORIES = [
  {
    id: "heritage",
    filterKey: "Heritage",
    name: "Heritage",
    icon: "🏰",
    subtitle: "Royal Citadels, Fortresses & Dynasties",
    count: "32+ Hubs",
    image: "assets/images/destinations/amber-fort.jpg"
  },
  {
    id: "mountains",
    filterKey: "Himalayas",
    name: "Mountains",
    icon: "🏔️",
    subtitle: "High Passes, Snowy Ridges & Valleys",
    count: "18+ Hubs",
    image: "assets/images/destinations/hadimba-temple.jpg"
  },
  {
    id: "beaches",
    filterKey: "Beach",
    name: "Beaches",
    icon: "🌊",
    subtitle: "Azure Coastlines, Lagoons & Coral Isles",
    count: "14+ Hubs",
    image: "assets/images/destinations/fort-aguada.jpg"
  },
  {
    id: "nature",
    filterKey: "Nature",
    name: "Nature",
    icon: "🌿",
    subtitle: "Living Root Bridges & Rolling Tea Estates",
    count: "16+ Hubs",
    image: "assets/images/destinations/munnar-tea.jpg"
  },
  {
    id: "spiritual",
    filterKey: "Spiritual",
    name: "Spiritual",
    icon: "🛕",
    subtitle: "Sacred Ghats, Monasteries & Pilgrimages",
    count: "22+ Hubs",
    image: "assets/images/destinations/dashashwamedh-ghat.jpg"
  },
  {
    id: "food",
    filterKey: "Culture",
    name: "Food",
    icon: "🍲",
    subtitle: "Royal Thalis, Coastal Spices & Ancient Sweets",
    count: "28+ Hubs",
    image: "assets/images/destinations/city-palace-jaipur.jpg"
  },
  {
    id: "wildlife",
    filterKey: "Wildlife",
    name: "Wildlife",
    icon: "🐅",
    subtitle: "National Parks, Rhinos & Mangrove Reserves",
    count: "12+ Hubs",
    image: "assets/images/destinations/eravikulam-national-park.jpg"
  },
  {
    id: "adventure",
    filterKey: "Adventure",
    name: "Adventure",
    icon: "🧗",
    subtitle: "High-Altitude Treks, Rafting & Thar Dunes",
    count: "15+ Hubs",
    image: "assets/images/destinations/key-monastery.jpg"
  }
];

export function initExploreByExperience(mountId = 'explore-experience-mount') {
  const mount = document.getElementById(mountId);
  if (!mount) return;

  mount.innerHTML = `
    <section class="explore-experience-section" id="explore-by-experience">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="eyebrow" style="color: var(--gold); margin-bottom: 6px;">EXPLORE BY EXPERIENCE</span>
            <h2 class="heading-large" style="text-transform: uppercase; margin-bottom: 8px;">
              Find Your Perfect Journey
            </h2>
          </div>
          <p style="color: var(--muted); font-size: 0.95rem; max-width: 440px; line-height: 1.6;">
            Select your preferred travel archetype to discover curated destinations, heritage routes, and local culinary traditions across India.
          </p>
        </div>

        <div class="experience-grid">
          ${EXPERIENCE_CATEGORIES.map(cat => `
            <div 
              class="experience-card" 
              data-filter="${cat.filterKey}"
              onclick="window.raahiFilterByExperience('${cat.filterKey}')"
              role="button"
              tabindex="0"
              aria-label="Filter by ${cat.name}: ${cat.subtitle}"
            >
              <img 
                src="${cat.image}" 
                alt="${cat.name}" 
                class="experience-card-bg" 
                loading="lazy" 
                onerror="this.onerror=null; this.src='assets/images/destinations/fallback-raahi.jpg'" 
              />
              <div class="experience-card-overlay"></div>
              <span class="experience-card-count">${cat.count}</span>

              <div class="experience-card-content">
                <span class="experience-icon-wrap">${cat.icon}</span>
                <h3 class="experience-card-title">${cat.name}</h3>
                <p class="experience-card-subtitle">${cat.subtitle}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;

  // Keyboard accessibility for experience cards
  mount.querySelectorAll('.experience-card').forEach(card => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const filterKey = card.getAttribute('data-filter');
        if (filterKey && window.raahiFilterByExperience) {
          window.raahiFilterByExperience(filterKey);
        }
      }
    });
  });
}
