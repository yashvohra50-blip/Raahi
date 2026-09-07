/**
 * RAAHI // Cinematic Interactive Destination Exploration Engine
 * M-Sport inspired real-time camera journey through physical destinations.
 * Smooth 60fps lerp camera interpolation, multi-plane depth projection,
 * atmospheric particles, discoverable spatial hotspots, and deep research drawer.
 */

import { CINEMATIC_DESTINATIONS } from './cinematicData.js';
import { isPlaceSaved, toggleSaveJourney } from './journeyBuilder.js';

export class CinematicEngine {
  constructor(placeId, containerElement) {
    this.placeId = placeId;
    this.container = containerElement;
    this.data = CINEMATIC_DESTINATIONS[placeId] || CINEMATIC_DESTINATIONS['amber-fort'];
    
    // Core state
    this.currentProgress = 0.0;
    this.targetProgress = 0.0;
    this.isPaused = false;
    this.activeHotspotId = null;
    this.isAudioPlaying = false;
    this.audioContext = null;
    this.gainNode = null;
    this.activeMilestoneIndex = 0;
    this.isDragging = false;
    this.dragStartY = 0;
    this.dragStartProgress = 0;

    // DOM references
    this.dom = {};
    
    // Animation frame handle
    this.rafHandle = null;

    // Initialize
    this.initDOM();
    this.initAtmosphericCanvas();
    this.bindEvents();
    this.startLoop();
  }

  initDOM() {
    this.container.innerHTML = `
      <div class="cinematic-viewport-root" id="cinematic-viewport">
        <!-- 1. Top HUD Header -->
        <header class="cinematic-hud-bar">
          <div class="hud-left">
            <a href="#/destinations/${this.data.id}" class="hud-logo-link" title="Return to Destination">
              <span class="hud-brand-mark"></span>
              <span class="hud-brand-name">RAAHI</span>
            </a>
            <span class="hud-divider">/</span>
            <span class="hud-destination-badge">${this.data.name.toUpperCase()} · ${this.data.city.toUpperCase()}</span>
          </div>

          <div class="hud-center">
            <span class="hud-experience-title">CINEMATIC EXPEDITION</span>
          </div>

          <div class="hud-right">
            <button class="hud-btn" id="cinematic-audio-toggle" title="Toggle Soundscape">
              <span class="hud-btn-icon">🔊</span>
              <span class="hud-btn-text">SOUNDSCAPE: OFF</span>
            </button>
            <button class="hud-btn hud-exit-btn" id="cinematic-exit-btn" title="Exit Cinematic Exploration">
              ← EXIT [ESC]
            </button>
          </div>
        </header>

        <!-- 2. Fullscreen Multi-Plane 3D Camera Stage -->
        <div class="cinematic-camera-stage" id="cinematic-stage">
          <!-- Deep Background: Aravalli Mountain Vistas -->
          <div class="camera-layer layer-deep-bg" id="layer-deep-bg"></div>

          <!-- Midground: Monument Architecture & Fortress Walls -->
          <div class="camera-layer layer-monument" id="layer-monument"></div>

          <!-- Foreground: Flying Architectural Arch & Portals -->
          <div class="camera-layer layer-foreground-portal" id="layer-foreground-portal"></div>

          <!-- Atmospheric Canvas: Floating Dust Motes & Sun Shimmer -->
          <canvas class="camera-layer layer-atmosphere" id="layer-atmosphere"></canvas>

          <!-- Vignette & Cinematic Gradients -->
          <div class="cinematic-vignette-overlay"></div>
          <div class="cinematic-dim-backdrop" id="cinematic-dim-backdrop"></div>
        </div>

        <!-- 3. Dynamic Story Milestones Overlay -->
        <div class="cinematic-story-overlay" id="cinematic-story-overlay">
          <div class="story-content-card" id="story-content-card">
            <span class="story-eyebrow" id="story-eyebrow">${this.data.milestones[0].eyebrow}</span>
            <h1 class="story-title" id="story-title">${this.data.milestones[0].title}</h1>
            <h2 class="story-subtitle" id="story-subtitle">${this.data.milestones[0].subtitle}</h2>
            <p class="story-caption" id="story-caption">${this.data.milestones[0].caption}</p>
          </div>
        </div>

        <!-- 4. Discoverable Spatial Hotspot Beacon Layer -->
        <div class="cinematic-hotspots-layer" id="cinematic-hotspots-layer">
          ${Object.values(this.data.hotspots).map(h => `
            <div class="spatial-hotspot-beacon" id="beacon-${h.id}" data-hotspot-id="${h.id}" style="left: ${h.screenPos.x}%; top: ${h.screenPos.y}%;">
              <div class="beacon-pulse-ring"></div>
              <div class="beacon-pulse-ring delayed"></div>
              <div class="beacon-core-dot"></div>
              <div class="beacon-label-pill">
                <span class="beacon-plus">+</span>
                <span class="beacon-name">${h.name.toUpperCase()}</span>
                <span class="beacon-dot">●</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- 5. Bottom Interactive Navigation HUD -->
        <footer class="cinematic-bottom-hud">
          <div class="milestones-tracker-strip">
            <div class="milestones-track-line">
              <div class="milestones-track-fill" id="milestones-track-fill"></div>
            </div>
            <div class="milestones-pills-row">
              ${this.data.milestones.map((m, idx) => `
                <button class="milestone-step-btn ${idx === 0 ? 'active' : ''}" data-progress="${m.progress}" data-index="${idx}" id="step-btn-${idx}">
                  <span class="step-dot"></span>
                  <span class="step-label">${m.label}</span>
                </button>
              `).join('')}
            </div>
          </div>

          <div class="cinematic-scroll-prompt" id="cinematic-scroll-prompt">
            <span class="prompt-text">SCROLL OR DRAG TO FLY THROUGH FORT</span>
            <span class="prompt-arrow">↓</span>
          </div>
        </footer>

        <!-- 6. Deep Research Side Panel -->
        <aside class="cinematic-research-panel" id="cinematic-research-panel" role="dialog" aria-modal="true">
          <div class="panel-inner" id="panel-inner-content">
            <!-- Dynamic Hotspot Dossier Injected Here -->
          </div>
        </footer>
      </div>
    `;

    // Cache elements
    this.dom.stage = document.getElementById('cinematic-stage');
    this.dom.layerDeepBg = document.getElementById('layer-deep-bg');
    this.dom.layerMonument = document.getElementById('layer-monument');
    this.dom.layerForeground = document.getElementById('layer-foreground-portal');
    this.dom.atmosphereCanvas = document.getElementById('layer-atmosphere');
    this.dom.dimBackdrop = document.getElementById('cinematic-dim-backdrop');
    this.dom.storyCard = document.getElementById('story-content-card');
    this.dom.storyEyebrow = document.getElementById('story-eyebrow');
    this.dom.storyTitle = document.getElementById('story-title');
    this.dom.storySubtitle = document.getElementById('story-subtitle');
    this.dom.storyCaption = document.getElementById('story-caption');
    this.dom.trackFill = document.getElementById('milestones-track-fill');
    this.dom.scrollPrompt = document.getElementById('cinematic-scroll-prompt');
    this.dom.researchPanel = document.getElementById('cinematic-research-panel');
    this.dom.panelContent = document.getElementById('panel-inner-content');
    this.dom.audioToggle = document.getElementById('cinematic-audio-toggle');
    this.dom.exitBtn = document.getElementById('cinematic-exit-btn');

    // Set initial background
    this.dom.layerDeepBg.style.backgroundImage = `url('${this.data.milestones[0].bgImage}')`;
    this.dom.layerMonument.style.backgroundImage = `url('${this.data.milestones[0].bgImage}')`;
  }

  initAtmosphericCanvas() {
    const canvas = this.dom.atmosphereCanvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Generate 75 floating golden dust particles
    this.particles = Array.from({ length: 75 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.2 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      pulse: Math.random() * Math.PI * 2
    }));

    this.renderAtmosphere = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const w = canvas.width;
      const h = canvas.height;

      // Draw subtle warm sunbeam gradient from top-right
      const sunGradient = ctx.createRadialGradient(w * 0.85, h * 0.15, 50, w * 0.85, h * 0.15, w * 0.8);
      sunGradient.addColorStop(0, 'rgba(212, 175, 55, 0.18)');
      sunGradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.04)');
      sunGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = sunGradient;
      ctx.fillRect(0, 0, w, h);

      // Render floating golden motes
      for (const p of this.particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += 0.03;

        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;

        const currentOpacity = p.opacity * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 218, 140, ${currentOpacity.toFixed(3)})`;
        ctx.fill();
      }
    };
  }

  bindEvents() {
    // 1. Wheel listener with inertia
    window.addEventListener('wheel', (e) => {
      if (this.isPaused) return;
      e.preventDefault();
      const delta = e.deltaY * 0.00065;
      this.targetProgress = Math.max(0, Math.min(1, this.targetProgress + delta));
      this.hidePrompt();
    }, { passive: false });

    // 2. Touch scrub
    window.addEventListener('touchstart', (e) => {
      if (this.isPaused) return;
      this.isDragging = true;
      this.dragStartY = e.touches[0].clientY;
      this.dragStartProgress = this.targetProgress;
    }, { passive: true });

    window.addEventListener('touchmove', (e) => {
      if (this.isPaused || !this.isDragging) return;
      const currentY = e.touches[0].clientY;
      const diffY = this.dragStartY - currentY;
      const delta = diffY * 0.0018;
      this.targetProgress = Math.max(0, Math.min(1, this.dragStartProgress + delta));
      this.hidePrompt();
    }, { passive: true });

    window.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // 3. Keyboard controls
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (this.isPaused) {
          this.closeHotspotPanel();
        } else {
          window.location.hash = `#/destinations/${this.data.id}`;
        }
      }

      if (this.isPaused) return;

      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        this.targetProgress = Math.min(1, this.targetProgress + 0.06);
        this.hidePrompt();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        this.targetProgress = Math.max(0, this.targetProgress - 0.06);
        this.hidePrompt();
      } else if (e.key === 'PageDown') {
        e.preventDefault();
        this.targetProgress = Math.min(1, this.targetProgress + 0.18);
        this.hidePrompt();
      } else if (e.key === 'PageUp') {
        e.preventDefault();
        this.targetProgress = Math.max(0, this.targetProgress - 0.18);
        this.hidePrompt();
      }
    });

    // 4. Milestone Buttons
    document.querySelectorAll('.milestone-step-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const prog = parseFloat(btn.dataset.progress);
        this.targetProgress = prog;
        this.hidePrompt();
      });
    });

    // 5. Hotspot Beacon Clicks
    document.querySelectorAll('.spatial-hotspot-beacon').forEach(beacon => {
      beacon.addEventListener('click', () => {
        const hId = beacon.dataset.hotspotId;
        this.openHotspotPanel(hId);
      });
    });

    // 6. Backdrop click to close panel
    this.dom.dimBackdrop?.addEventListener('click', () => {
      if (this.isPaused) this.closeHotspotPanel();
    });

    // 7. Audio Toggle
    this.dom.audioToggle?.addEventListener('click', () => {
      this.toggleSoundscape();
    });

    // 8. Exit Button
    this.dom.exitBtn?.addEventListener('click', () => {
      window.location.hash = `#/destinations/${this.data.id}`;
    });
  }

  hidePrompt() {
    if (this.dom.scrollPrompt) {
      this.dom.scrollPrompt.style.opacity = '0';
      this.dom.scrollPrompt.style.pointerEvents = 'none';
    }
  }

  startLoop() {
    const loop = () => {
      if (!this.isPaused) {
        // Smooth lerp (0.07 damping)
        this.currentProgress += (this.targetProgress - this.currentProgress) * 0.07;
      }

      this.updateCameraTransforms();
      this.updateMilestoneContent();
      this.updateHotspotVisibility();

      if (this.renderAtmosphere) {
        this.renderAtmosphere();
      }

      this.rafHandle = requestAnimationFrame(loop);
    };

    this.rafHandle = requestAnimationFrame(loop);
  }

  updateCameraTransforms() {
    const p = this.currentProgress;
    const milestones = this.data.milestones;

    // Find milestone interval
    let prev = milestones[0];
    let next = milestones[milestones.length - 1];

    for (let i = 0; i < milestones.length - 1; i++) {
      if (p >= milestones[i].progress && p <= milestones[i + 1].progress) {
        prev = milestones[i];
        next = milestones[i + 1];
        break;
      }
    }

    const span = next.progress - prev.progress || 1;
    const localRatio = Math.max(0, Math.min(1, (p - prev.progress) / span));
    // Smooth cubic ease for segment
    const eased = localRatio * localRatio * (3 - 2 * localRatio);

    // Interpolate camera values
    const c1 = prev.camera;
    const c2 = next.camera;

    const zoom = c1.zoom + (c2.zoom - c1.zoom) * eased;
    const panX = c1.panX + (c2.panX - c1.panX) * eased;
    const panY = c1.panY + (c2.panY - c1.panY) * eased;
    const rotX = c1.rotX + (c2.rotX - c1.rotX) * eased;
    const rotY = c1.rotY + (c2.rotY - c1.rotY) * eased;
    const rotZ = c1.rotZ + (c2.rotZ - c1.rotZ) * eased;
    const brightness = c1.brightness + (c2.brightness - c1.brightness) * eased;
    const contrast = c1.contrast + (c2.contrast - c1.contrast) * eased;

    // Switch image smoothly when entering next major zone
    if (this.dom.layerMonument.style.backgroundImage.indexOf(prev.bgImage) === -1 && localRatio < 0.5) {
      this.dom.layerMonument.style.backgroundImage = `url('${prev.bgImage}')`;
    } else if (this.dom.layerMonument.style.backgroundImage.indexOf(next.bgImage) === -1 && localRatio >= 0.5) {
      this.dom.layerMonument.style.backgroundImage = `url('${next.bgImage}')`;
    }

    // Apply CSS 3D Transforms
    const monumentTransform = `
      perspective(1200px)
      translate3d(${panX.toFixed(2)}px, ${panY.toFixed(2)}px, 0px)
      scale(${zoom.toFixed(3)})
      rotateX(${rotX.toFixed(2)}deg)
      rotateY(${rotY.toFixed(2)}deg)
      rotateZ(${rotZ.toFixed(2)}deg)
    `;

    const deepBgTransform = `
      perspective(1400px)
      translate3d(${(panX * 0.25).toFixed(2)}px, ${(panY * 0.25).toFixed(2)}px, 0px)
      scale(${(1.0 + (zoom - 1.0) * 0.35).toFixed(3)})
      rotateX(${(rotX * 0.3).toFixed(2)}deg)
      rotateY(${(rotY * 0.3).toFixed(2)}deg)
    `;

    this.dom.layerMonument.style.transform = monumentTransform;
    this.dom.layerMonument.style.filter = `brightness(${brightness.toFixed(2)}) contrast(${contrast.toFixed(2)})`;
    this.dom.layerDeepBg.style.transform = deepBgTransform;

    // Update bottom track fill width
    if (this.dom.trackFill) {
      this.dom.trackFill.style.width = `${(p * 100).toFixed(1)}%`;
    }
  }

  updateMilestoneContent() {
    const p = this.currentProgress;
    const milestones = this.data.milestones;

    // Find nearest milestone
    let nearestIdx = 0;
    let minDiff = 999;
    milestones.forEach((m, idx) => {
      const diff = Math.abs(p - m.progress);
      if (diff < minDiff) {
        minDiff = diff;
        nearestIdx = idx;
      }
    });

    if (nearestIdx !== this.activeMilestoneIndex) {
      this.activeMilestoneIndex = nearestIdx;
      const m = milestones[nearestIdx];

      // Update HUD active pill
      document.querySelectorAll('.milestone-step-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === nearestIdx);
      });

      // Update Story Card with smooth fade
      if (this.dom.storyCard) {
        this.dom.storyCard.classList.add('transitioning');
        setTimeout(() => {
          this.dom.storyEyebrow.textContent = m.eyebrow;
          this.dom.storyTitle.textContent = m.title;
          this.dom.storySubtitle.textContent = m.subtitle;
          this.dom.storyCaption.textContent = m.caption;
          this.dom.storyCard.classList.remove('transitioning');
        }, 220);
      }
    }
  }

  updateHotspotVisibility() {
    const p = this.currentProgress;
    const hotspots = this.data.hotspots;

    for (const h of Object.values(hotspots)) {
      const el = document.getElementById(`beacon-${h.id}`);
      if (!el) continue;

      // Active in range [targetProgress - 0.10, targetProgress + 0.10]
      const diff = Math.abs(p - h.targetProgress);
      const isVisible = diff <= 0.10;

      if (isVisible) {
        const opacity = Math.max(0, 1 - (diff / 0.10));
        el.style.opacity = opacity.toFixed(2);
        el.style.pointerEvents = opacity > 0.4 ? 'auto' : 'none';
        el.classList.add('in-view');
      } else {
        el.style.opacity = '0';
        el.style.pointerEvents = 'none';
        el.classList.remove('in-view');
      }
    }
  }

  openHotspotPanel(hotspotId) {
    const spot = this.data.hotspots[hotspotId];
    if (!spot) return;

    this.isPaused = true;
    this.activeHotspotId = hotspotId;

    // Dim environment
    if (this.dom.dimBackdrop) {
      this.dom.dimBackdrop.classList.add('active');
    }

    // Build panel HTML
    const isSaved = isPlaceSaved(this.placeId);
    this.dom.panelContent.innerHTML = `
      <div class="panel-header-bar">
        <div class="panel-header-meta">
          <span class="panel-category-badge">${spot.categoryTag}</span>
          <span class="panel-location-tag">📍 ${spot.location}</span>
        </div>
        <button class="panel-close-btn" id="btn-panel-close" aria-label="Close Information Panel">✕</button>
      </div>

      <div class="panel-scroll-body">
        <div class="panel-hero-image-wrap">
          <img src="${spot.image}" alt="${spot.name}" class="panel-hero-image" />
          <div class="panel-hero-gradient"></div>
          <div class="panel-hero-titles">
            <h2 class="panel-spot-name">${spot.name}</h2>
            <p class="panel-spot-subtitle">${spot.subtitle}</p>
          </div>
        </div>

        <div class="panel-attributes-grid">
          ${spot.attributes.map(a => `
            <div class="attr-item">
              <span class="attr-label">${a.label}</span>
              <span class="attr-val">${a.value}</span>
            </div>
          `).join('')}
        </div>

        <div class="panel-summary-card">
          <div class="summary-card-title">DISCOVER</div>
          <p class="summary-card-p">${spot.summary}</p>
        </div>

        <div class="panel-quick-intel-bar">
          <div class="intel-item">
            <span class="intel-lbl">FOCUS</span>
            <span class="intel-val">${spot.quickIntel.focus}</span>
          </div>
          <div class="intel-item">
            <span class="intel-lbl">TIME NEEDED</span>
            <span class="intel-val">⏱️ ${spot.quickIntel.duration}</span>
          </div>
          <div class="intel-item">
            <span class="intel-lbl">BEST PERIOD</span>
            <span class="intel-val">🌅 ${spot.quickIntel.bestTime}</span>
          </div>
        </div>

        <!-- Primary Action Buttons Row -->
        <div class="panel-actions-row">
          <button class="panel-action-btn maps" onclick="window.raahiOpenMapsModal('${this.placeId}')">
            📍 VIEW ON GOOGLE MAPS
          </button>
          <button class="panel-action-btn journey ${isSaved ? 'saved' : ''}" id="panel-save-journey-btn" onclick="window.raahiToggleSaveJourney('${this.placeId}')">
            ${isSaved ? '♥ SAVED TO MY JOURNEY' : '♡ SAVE TO MY JOURNEY'}
          </button>
        </div>

        <!-- Deep Research Mode Accordion -->
        <div class="deep-research-section" id="deep-research-section">
          <div class="deep-research-toggle" id="deep-research-toggle">
            <div class="deep-toggle-left">
              <span class="deep-sparkle">✦</span>
              <span class="deep-title">DEEP RESEARCH DOSSIER</span>
            </div>
            <span class="deep-chevron" id="deep-chevron">EXPAND ↓</span>
          </div>

          <div class="deep-research-content" id="deep-research-content" style="display: none;">
            <div class="deep-block">
              <h4>WHY IT MATTERS</h4>
              <p>${spot.deepResearch.whyItMatters}</p>
            </div>

            <div class="deep-block">
              <h4>WHAT TO NOTICE</h4>
              <p>${spot.deepResearch.whatToNotice}</p>
            </div>

            <div class="deep-block">
              <h4>HISTORY & PROVENANCE</h4>
              <p>${spot.deepResearch.history}</p>
            </div>

            <div class="deep-block">
              <h4>CULTURAL CONTEXT</h4>
              <p>${spot.deepResearch.culturalContext}</p>
            </div>

            <div class="deep-block">
              <h4>VISITOR INTELLIGENCE</h4>
              <ul class="deep-intel-list">
                <li><strong>Lighting:</strong> ${spot.deepResearch.visitorIntelligence.bestLighting}</li>
                <li><strong>Crowds:</strong> ${spot.deepResearch.visitorIntelligence.crowdAdvice}</li>
                <li><strong>Photography:</strong> ${spot.deepResearch.visitorIntelligence.photographyTip}</li>
              </ul>
            </div>

            <div class="deep-block">
              <h4>RELATED DISCOVERIES</h4>
              <div class="related-chips-row">
                ${spot.deepResearch.relatedPlaces.map(r => `
                  <div class="related-chip" onclick="window.raahiCinematicEngineInstance?.openHotspotPanel('${r.id}') || (window.location.hash='#/destinations/${r.id}')">
                    <span class="chip-name">${r.name}</span>
                    <span class="chip-dist">${r.dist}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>

        <div class="panel-footer-hint">
          <span>PRESS [ESC] OR CLICK OUTSIDE TO RETURN TO CAMERA JOURNEY</span>
        </div>
      </div>
    `;

    // Bind panel listeners
    document.getElementById('btn-panel-close')?.addEventListener('click', () => {
      this.closeHotspotPanel();
    });

    const deepToggle = document.getElementById('deep-research-toggle');
    const deepContent = document.getElementById('deep-research-content');
    const deepChevron = document.getElementById('deep-chevron');

    deepToggle?.addEventListener('click', () => {
      const isExpanded = deepContent.style.display !== 'none';
      deepContent.style.display = isExpanded ? 'none' : 'block';
      deepChevron.textContent = isExpanded ? 'EXPAND ↓' : 'COLLAPSE ↑';
    });

    // Open side panel
    this.dom.researchPanel.classList.add('open');
  }

  closeHotspotPanel() {
    this.isPaused = false;
    this.activeHotspotId = null;

    if (this.dom.dimBackdrop) {
      this.dom.dimBackdrop.classList.remove('active');
    }

    if (this.dom.researchPanel) {
      this.dom.researchPanel.classList.remove('open');
    }
  }

  toggleSoundscape() {
    if (!this.isAudioPlaying) {
      this.startSyntheticSoundscape();
      this.isAudioPlaying = true;
      if (this.dom.audioToggle) {
        this.dom.audioToggle.classList.add('active');
        this.dom.audioToggle.querySelector('.hud-btn-text').textContent = 'SOUNDSCAPE: ON';
      }
    } else {
      this.stopSyntheticSoundscape();
      this.isAudioPlaying = false;
      if (this.dom.audioToggle) {
        this.dom.audioToggle.classList.remove('active');
        this.dom.audioToggle.querySelector('.hud-btn-text').textContent = 'SOUNDSCAPE: OFF';
      }
    }
  }

  startSyntheticSoundscape() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      this.audioContext = new AudioCtx();
      
      const now = this.audioContext.currentTime;
      this.gainNode = this.audioContext.createGain();
      this.gainNode.gain.setValueAtTime(0.01, now);
      this.gainNode.gain.exponentialRampToValueAtTime(0.18, now + 3);
      this.gainNode.connect(this.audioContext.destination);

      // 1. Warm low root drone (D2 = 73.42Hz, A2 = 110Hz)
      const osc1 = this.audioContext.createOscillator();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(73.42, now);
      osc1.connect(this.gainNode);
      osc1.start();

      const osc2 = this.audioContext.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(110.0, now);
      osc2.connect(this.gainNode);
      osc2.start();

      // 2. High Santoor shimmer drone (D5 = 587.3Hz) with slow LFO
      const osc3 = this.audioContext.createOscillator();
      osc3.type = 'sine';
      osc3.frequency.setValueAtTime(587.33, now);

      const lfo = this.audioContext.createOscillator();
      lfo.frequency.setValueAtTime(0.15, now);
      const lfoGain = this.audioContext.createGain();
      lfoGain.gain.setValueAtTime(0.06, now);
      lfo.connect(lfoGain.gain);

      osc3.connect(lfoGain);
      lfoGain.connect(this.gainNode);
      osc3.start();
      lfo.start();

      this.activeOscillators = [osc1, osc2, osc3, lfo];
    } catch (e) {
      console.warn('AudioContext not permitted yet:', e);
    }
  }

  stopSyntheticSoundscape() {
    if (this.audioContext) {
      try {
        const now = this.audioContext.currentTime;
        this.gainNode?.gain.exponentialRampToValueAtTime(0.0001, now + 1);
        setTimeout(() => {
          this.activeOscillators?.forEach(o => { try { o.stop(); } catch(e){} });
          this.audioContext?.close();
          this.audioContext = null;
        }, 1100);
      } catch (e) {}
    }
  }

  destroy() {
    if (this.rafHandle) cancelAnimationFrame(this.rafHandle);
    this.stopSyntheticSoundscape();
    this.container.innerHTML = '';
  }
}
