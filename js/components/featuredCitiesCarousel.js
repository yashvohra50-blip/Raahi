/**
 * RAAHI // Featured Cities Cinematic Carousel Component
 * Netflix-style full-width hero carousel with ambient depth,
 * multi-layer dark gradients, text overlaid on image, touch swipe,
 * keyboard controls, and auto-rotation.
 */

import { getFeaturedCities } from '../data/featuredCitiesData.js';

export function initFeaturedCitiesCarousel(mountId = 'featured-cities-mount') {
  let stage = document.getElementById('featured-carousel-stage');
  const mount = document.getElementById(mountId);

  if (!stage && !mount) return;

  const cities = getFeaturedCities();
  if (!cities || cities.length === 0) return;

  let currentIndex = 0;
  let autoPlayTimer = null;
  let isHovered = false;
  let isTransitioning = false;
  let touchStartX = 0;
  let touchEndX = 0;

  // Mount Section HTML if not already statically rendered in the DOM
  if (!stage && mount) {
    mount.innerHTML = `
      <section class="featured-cities-section" id="featured-cities-section">
        <!-- Dynamic Blurred Ambient Backdrop of Active City -->
        <div class="featured-ambient-backdrop" id="featured-ambient-bg" style="background-image: url('${cities[0].image}');"></div>
        <div class="featured-ambient-overlay"></div>

        <div class="featured-cities-wrap">
          <!-- Section Header -->
          <div class="featured-header-row">
            <div>
              <span class="featured-state-eyebrow" style="color: var(--gold, #d5b56f); margin-bottom: 6px;">
                FEATURED CITIES
              </span>
              <h2 class="heading-large" style="text-transform: uppercase; margin: 4px 0 8px;">
                Iconic Cities, Unforgettable Experiences
              </h2>
              <p style="color: var(--muted, #94a3b8); font-size: 1.02rem; max-width: 580px; line-height: 1.6; margin: 0;">
                Discover India's most loved cities — each with its own story, culture and charm.
              </p>
            </div>

            <a href="#all-destinations" class="featured-explore-all-link">
              <span>Explore All Cities</span>
              <span class="arrow">→</span>
            </a>
          </div>

          <!-- Cinematic Hero Carousel Stage -->
          <div class="featured-carousel-stage" id="featured-carousel-stage" tabindex="0" role="region" aria-label="Featured Cities Showcase">
            <!-- Circular Prev Button Overlapping Edge -->
            <button class="carousel-nav-btn prev" id="featured-prev-btn" aria-label="Previous Featured City" title="Previous City (←)">
              ←
            </button>

            <!-- The Large Cinematic Card Viewport -->
            <div class="featured-cards-viewport" id="featured-card-viewport">
              <!-- Dynamic card content rendered here -->
            </div>

            <!-- Circular Next Button Overlapping Edge -->
            <button class="carousel-nav-btn next" id="featured-next-btn" aria-label="Next Featured City" title="Next City (→)">
              →
            </button>
          </div>

          <!-- Pagination Indicator Dots Below -->
          <div class="carousel-pagination" id="featured-pagination-dots" role="tablist" aria-label="Featured Cities Indicators">
            ${cities.map((city, idx) => `
              <button 
                class="carousel-dot ${idx === 0 ? 'active' : ''}" 
                data-index="${idx}" 
                role="tab" 
                aria-selected="${idx === 0 ? 'true' : 'false'}" 
                aria-label="Slide ${idx + 1}: ${city.name}"
                title="${city.name}">
              </button>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  const viewport = document.getElementById('featured-card-viewport');
  const ambientBg = document.getElementById('featured-ambient-bg');
  const prevBtn = document.getElementById('featured-prev-btn');
  const nextBtn = document.getElementById('featured-next-btn');
  const dotsContainer = document.getElementById('featured-pagination-dots');
  const stage = document.getElementById('featured-carousel-stage');

  /**
   * Render Active City Slide
   */
  function renderCard(index, animate = true) {
    const city = cities[index];
    if (!city || !viewport) return;

    // Preload adjacent images (next and prev only) to optimize bandwidth & memory
    const nextIdx = (index + 1) % cities.length;
    const prevIdx = (index - 1 + cities.length) % cities.length;
    [cities[nextIdx].image, cities[prevIdx].image].forEach(src => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });

    const cardHtml = `
      <div class="featured-card-bg-wrap">
        <img 
          src="${city.image}" 
          alt="${city.name}, ${city.state}" 
          class="featured-card-bg" 
          loading="${index === 0 ? 'eager' : 'lazy'}"
          onerror="this.onerror=null; this.src='${city.fallbackImage || 'assets/images/destinations/fallback-raahi.jpg'}'"
        />
      </div>

      <!-- Multi-Layer Dark Gradients for Maximum Text Legibility -->
      <div class="featured-gradient-layer"></div>

      <!-- Text Content Overlaid on the Image -->
      <div class="featured-card-content">
        <span class="featured-state-eyebrow">
          <span class="dot"></span>
          ${city.state.toUpperCase()}
        </span>

        <h3 class="featured-city-title">${city.name}</h3>

        <p class="featured-city-desc">
          ${city.description}
        </p>

        <div class="featured-meta-row">
          <span class="featured-meta-badge">📍 ${city.state}</span>
          <span class="featured-meta-badge">🏛 ${city.category}</span>
          <span class="featured-meta-badge">📷 ${city.experience}</span>
          <span class="featured-meta-badge rating">★ ${city.rating} (${city.reviews})</span>
        </div>

        <a 
          href="${city.route}" 
          class="featured-cta-btn" 
          onclick="event.stopPropagation();"
        >
          <span>Explore ${city.name}</span>
          <span class="arrow">→</span>
        </a>
      </div>
    `;

    if (animate) {
      viewport.style.opacity = '0.35';
      viewport.style.transform = 'scale(0.995)';
      viewport.style.transition = 'opacity 0.35s ease, transform 0.35s ease';

      setTimeout(() => {
        viewport.innerHTML = cardHtml;
        viewport.style.opacity = '1';
        viewport.style.transform = 'scale(1)';
      }, 150);
    } else {
      viewport.innerHTML = cardHtml;
    }

    // Update Ambient Blurred Backdrop
    if (ambientBg) {
      ambientBg.style.backgroundImage = `url('${city.image}')`;
    }

    // Update Pagination Dots
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, dIdx) => {
        if (dIdx === index) {
          dot.classList.add('active');
          dot.setAttribute('aria-selected', 'true');
        } else {
          dot.classList.remove('active');
          dot.setAttribute('aria-selected', 'false');
        }
      });
    }
  }

  function goToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = (index + cities.length) % cities.length;
    renderCard(currentIndex, true);
    setTimeout(() => {
      isTransitioning = false;
    }, 450);
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Autoplay Controller (6 seconds)
  function startAutoPlay() {
    stopAutoPlay();
    autoPlayTimer = setInterval(() => {
      if (!isHovered) {
        nextSlide();
      }
    }, 6000);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function restartAutoPlayOnInteraction() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Click on Card navigates to Destination Route
  if (viewport) {
    viewport.addEventListener('click', () => {
      const city = cities[currentIndex];
      if (city && city.route) {
        window.location.hash = city.route;
      }
    });
  }

  // Prev / Next Navigation Buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      prevSlide();
      restartAutoPlayOnInteraction();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      nextSlide();
      restartAutoPlayOnInteraction();
    });
  }

  // Pagination Dot Buttons
  if (dotsContainer) {
    dotsContainer.addEventListener('click', (e) => {
      const dot = e.target.closest('.carousel-dot');
      if (!dot) return;
      const targetIdx = parseInt(dot.dataset.index, 10);
      if (!isNaN(targetIdx) && targetIdx !== currentIndex) {
        goToSlide(targetIdx);
        restartAutoPlayOnInteraction();
      }
    });
  }

  // Hover Pause / Resume
  if (stage) {
    stage.addEventListener('mouseenter', () => {
      isHovered = true;
      stopAutoPlay();
    });

    stage.addEventListener('mouseleave', () => {
      isHovered = false;
      startAutoPlay();
    });

    // Keyboard Navigation (ArrowLeft / ArrowRight)
    stage.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
        restartAutoPlayOnInteraction();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextSlide();
        restartAutoPlayOnInteraction();
      }
    });

    // Global listener when stage is in viewport
    document.addEventListener('keydown', (e) => {
      if (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA') return;
      const rect = stage.getBoundingClientRect();
      const inView = (rect.top < window.innerHeight && rect.bottom > 0);
      if (inView) {
        if (e.key === 'ArrowLeft') {
          prevSlide();
          restartAutoPlayOnInteraction();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
          restartAutoPlayOnInteraction();
        }
      }
    });

    // Touch / Swipe Gestures for Mobile
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      isHovered = true;
      stopAutoPlay();
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      isHovered = false;
      startAutoPlay();
    }, { passive: true });
  }

  function handleSwipe() {
    const diff = touchStartX - touchEndX;
    const threshold = 45; // min swipe delta in px
    if (diff > threshold) {
      // Swiped Left -> Next
      nextSlide();
      restartAutoPlayOnInteraction();
    } else if (diff < -threshold) {
      // Swiped Right -> Prev
      prevSlide();
      restartAutoPlayOnInteraction();
    }
  }

  // Initial Render & Start Autoplay
  renderCard(0, false);
  startAutoPlay();

  return {
    destroy() {
      stopAutoPlay();
    }
  };
}
