/**
 * RAAHI // Interactive SVG India Map Component
 * Displays all 28 States and 8 UTs with hover inspection and routing
 */

import { STATES_DATA } from '../data/statesData.js';
import { DataRegistry } from '../data/dataRegistry.js';

export function renderIndiaMap(containerId = 'india-map-mount') {
  const mount = document.getElementById(containerId);
  if (!mount) return;

  const states = Object.values(STATES_DATA);
  const defaultState = STATES_DATA['rajasthan'];

  mount.innerHTML = `
    <section class="raahi-map-section" id="interactive-map">
      <div class="wrap">
        <div class="section-head">
          <div>
            <span class="eyebrow">SPATIAL CODEX</span>
            <h2 class="heading-large" style="text-transform: uppercase;">EXPLORE THE MAP OF BHARAT</h2>
          </div>
          <p style="color: var(--muted); font-size: 0.95rem; max-width: 380px;">
            Interactive spatial overview across 28 States and 8 Union Territories. Click any region to enter its destination codex.
          </p>
        </div>

        <div class="map-container">
          <!-- Left: SVG Interactive Vector Map -->
          <div class="india-svg-wrapper">
            <svg class="india-svg-map" viewBox="0 0 600 700" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#d4af37" flood-opacity="0.3"/>
                </filter>
              </defs>
              
              <!-- Clean Stylized Geospatial Grid of Indian States -->
              <g id="states-group">
                <!-- Northern & Himalayan -->
                <path class="state-path" data-slug="ladakh" d="M260,30 L320,50 L340,90 L300,110 L250,90 Z" />
                <path class="state-path" data-slug="jammu-and-kashmir" d="M220,70 L255,85 L245,120 L210,105 Z" />
                <path class="state-path" data-slug="himachal-pradesh" d="M255,100 L295,115 L285,145 L245,130 Z" />
                <path class="state-path" data-slug="punjab" d="M210,120 L245,130 L235,160 L195,145 Z" />
                <path class="state-path" data-slug="chandigarh" d="M242,135 A 4 4 0 1 1 242,136 Z" />
                <path class="state-path" data-slug="uttarakhand" d="M285,130 L325,140 L315,175 L275,160 Z" />
                <path class="state-path" data-slug="haryana" d="M230,150 L265,155 L255,185 L220,175 Z" />
                <path class="state-path" data-slug="delhi" d="M252,168 A 5 5 0 1 1 252,169 Z" />
                
                <!-- Western & Central -->
                <path class="state-path active" data-slug="rajasthan" d="M160,170 L230,175 L220,260 L140,240 Z" />
                <path class="state-path" data-slug="gujarat" d="M120,245 L185,255 L175,320 L100,300 Z" />
                <path class="state-path" data-slug="dadra-and-nagar-haveli-and-daman-and-diu" d="M135,315 A 4 4 0 1 1 135,316 Z" />
                <path class="state-path" data-slug="uttar-pradesh" d="M255,175 L350,185 L330,250 L240,230 Z" />
                <path class="state-path" data-slug="madhya-pradesh" d="M220,240 L330,250 L310,330 L200,310 Z" />
                <path class="state-path" data-slug="maharashtra" d="M170,320 L270,330 L250,420 L160,400 Z" />
                <path class="state-path" data-slug="goa" d="M180,430 L195,435 L190,455 L175,450 Z" />
                <path class="state-path" data-slug="chhattisgarh" d="M305,280 L350,290 L335,380 L290,360 Z" />
                
                <!-- Eastern & Island -->
                <path class="state-path" data-slug="bihar" d="M345,210 L410,215 L395,260 L335,250 Z" />
                <path class="state-path" data-slug="jharkhand" d="M340,260 L400,265 L385,310 L330,300 Z" />
                <path class="state-path" data-slug="west-bengal" d="M395,255 L430,260 L410,340 L380,315 Z" />
                <path class="state-path" data-slug="odisha" d="M330,320 L400,330 L370,410 L310,390 Z" />
                
                <!-- Southern -->
                <path class="state-path" data-slug="telangana" d="M245,360 L310,370 L290,440 L230,420 Z" />
                <path class="state-path" data-slug="andhra-pradesh" d="M260,410 L345,400 L300,510 L250,480 Z" />
                <path class="state-path" data-slug="karnataka" d="M190,410 L255,420 L230,520 L180,490 Z" />
                <path class="state-path" data-slug="kerala" d="M200,510 L230,515 L215,610 L190,590 Z" />
                <path class="state-path" data-slug="tamil-nadu" d="M230,500 L290,490 L260,620 L210,610 Z" />
                <path class="state-path" data-slug="puducherry" d="M282,530 A 4 4 0 1 1 282,531 Z" />
                <path class="state-path" data-slug="lakshadweep" d="M140,550 A 6 6 0 1 1 140,551 Z" />
                <path class="state-path" data-slug="andaman-and-nicobar-islands" d="M510,500 L530,510 L520,580 L500,570 Z" />
                
                <!-- Northeastern -->
                <path class="state-path" data-slug="sikkim" d="M410,185 L430,188 L425,210 L405,205 Z" />
                <path class="state-path" data-slug="assam" d="M455,215 L530,210 L510,260 L445,245 Z" />
                <path class="state-path" data-slug="arunachal-pradesh" d="M480,165 L560,180 L540,215 L470,205 Z" />
                <path class="state-path" data-slug="meghalaya" d="M450,240 L495,242 L490,265 L445,260 Z" />
                <path class="state-path" data-slug="nagaland" d="M530,215 L555,225 L545,255 L525,245 Z" />
                <path class="state-path" data-slug="manipur" d="M525,255 L550,260 L540,295 L520,290 Z" />
                <path class="state-path" data-slug="mizoram" d="M505,295 L530,300 L520,345 L500,340 Z" />
                <path class="state-path" data-slug="tripura" d="M480,275 L505,278 L495,315 L475,310 Z" />
              </g>
            </svg>

            <!-- Floating Hover Tooltip -->
            <div class="map-floating-tooltip" id="map-tooltip">Rajasthan</div>
          </div>

          <!-- Right: Interactive State Preview Card -->
          <div class="map-preview-panel" id="map-preview-panel">
            <span class="map-preview-badge" id="map-preview-badge">${defaultState.region} INDIA • STATE</span>
            <h3 class="map-preview-title" id="map-preview-title">${defaultState.name}</h3>
            <p class="map-preview-story" id="map-preview-story">${defaultState.tagline}</p>
            
            <div class="map-preview-stats">
              <div class="map-stat-item">
                <small>Capital City</small>
                <span id="map-preview-capital">${defaultState.capital}</span>
              </div>
              <div class="map-stat-item">
                <small>Destinations</small>
                <span id="map-preview-count">${DataRegistry.getDestinationsByState(defaultState.slug).length || 6} Places</span>
              </div>
              <div class="map-stat-item">
                <small>Best Season</small>
                <span id="map-preview-season">${defaultState.quickStats.bestTime}</span>
              </div>
              <div class="map-stat-item">
                <small>Ideal Trip</small>
                <span id="map-preview-duration">${defaultState.quickStats.idealDuration}</span>
              </div>
            </div>

            <a href="#/states/${defaultState.slug}" class="btn light" id="map-preview-link" style="justify-content: center; margin-top: 10px;">
              EXPLORE ${defaultState.name.toUpperCase()} CODEX →
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach hover & click event listeners
  const paths = mount.querySelectorAll('.state-path');
  const tooltip = mount.querySelector('#map-tooltip');
  const previewBadge = mount.querySelector('#map-preview-badge');
  const previewTitle = mount.querySelector('#map-preview-title');
  const previewStory = mount.querySelector('#map-preview-story');
  const previewCapital = mount.querySelector('#map-preview-capital');
  const previewCount = mount.querySelector('#map-preview-count');
  const previewSeason = mount.querySelector('#map-preview-season');
  const previewDuration = mount.querySelector('#map-preview-duration');
  const previewLink = mount.querySelector('#map-preview-link');

  function updatePreview(slug) {
    const state = STATES_DATA[slug];
    if (!state) return;

    paths.forEach(p => p.classList.remove('active'));
    const activePath = mount.querySelector(`.state-path[data-slug="${slug}"]`);
    if (activePath) activePath.classList.add('active');

    const count = DataRegistry.getDestinationsByState(state.slug).length;
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
  }

  paths.forEach(pathEl => {
    const slug = pathEl.getAttribute('data-slug');
    const state = STATES_DATA[slug];
    if (!state) return;

    pathEl.addEventListener('mouseenter', (e) => {
      if (tooltip) {
        tooltip.textContent = `${state.name} (${state.type === 'ut' ? 'UT' : 'State'})`;
        tooltip.classList.add('active');
        const rect = pathEl.getBoundingClientRect();
        const parentRect = mount.querySelector('.india-svg-wrapper').getBoundingClientRect();
        tooltip.style.left = (rect.left - parentRect.left + rect.width / 2) + 'px';
        tooltip.style.top = (rect.top - parentRect.top) + 'px';
      }
      updatePreview(slug);
    });

    pathEl.addEventListener('mouseleave', () => {
      if (tooltip) tooltip.classList.remove('active');
    });

    pathEl.addEventListener('click', () => {
      window.location.hash = `#/states/${slug}`;
    });
  });
}
