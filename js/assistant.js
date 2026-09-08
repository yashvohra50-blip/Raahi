/**
 * RAAHI // Contextual Travel Intelligence Assistant ("Ask RAAHI")
 * Dynamic context sensing (Place, City, State, Home),
 * quick prompt chips, live Gemini AI synthesis, and DRAGGABLE floating trigger orb.
 */

import { RAAHI_DATA } from './data.js';

let isDrawerOpen = false;

export function initAssistant() {
  const triggerBtn = document.getElementById('raahi-assistant-trigger');
  const drawer = document.getElementById('raahi-assistant-drawer');
  const drawerHeader = document.getElementById('raahi-assistant-header');
  const overlay = document.getElementById('raahi-assistant-overlay');
  const closeBtn = document.getElementById('raahi-assistant-close');
  const sendBtn = document.getElementById('raahi-assistant-send');
  const inputEl = document.getElementById('raahi-assistant-input');
  const chipsContainer = document.getElementById('raahi-context-chips');
  const messagesContainer = document.getElementById('raahi-messages-container');

  if (!drawer) return;

  // Make trigger button draggable around the screen
  if (triggerBtn) {
    makeDraggable(triggerBtn);
  }

  // Make AI Assistant Window/Drawer draggable by its header
  if (drawer && drawerHeader) {
    makeDrawerDraggable(drawer, drawerHeader);
  }

  // Toggle drawer on click
  triggerBtn?.addEventListener('click', (e) => {
    if (triggerBtn.getAttribute('data-was-dragged') === 'true') {
      triggerBtn.removeAttribute('data-was-dragged');
      return;
    }
    toggleAssistant(!isDrawerOpen);
  });

  closeBtn?.addEventListener('click', () => toggleAssistant(false));
  overlay?.addEventListener('click', () => toggleAssistant(false));

  // Send message handler
  sendBtn?.addEventListener('click', () => handleUserInput());
  inputEl?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserInput();
  });

  // Listen to route changes to update contextual prompt chips
  window.addEventListener('hashchange', updateAssistantContext);
  updateAssistantContext();
}

function makeDraggable(el) {
  el.style.touchAction = 'none';

  // Restore saved position if present
  const savedPos = JSON.parse(localStorage.getItem('raahi_assistant_pos') || 'null');
  if (savedPos && typeof savedPos.left === 'number' && typeof savedPos.top === 'number') {
    const maxLeft = Math.max(10, window.innerWidth - el.offsetWidth - 10);
    const maxTop = Math.max(10, window.innerHeight - el.offsetHeight - 10);
    const clampLeft = Math.min(Math.max(10, savedPos.left), maxLeft);
    const clampTop = Math.min(Math.max(10, savedPos.top), maxTop);

    el.style.left = `${clampLeft}px`;
    el.style.top = `${clampTop}px`;
    el.style.bottom = 'auto';
    el.style.right = 'auto';
  }

  let startX = 0, startY = 0;
  let initialLeft = 0, initialTop = 0;
  let isPointerDown = false;
  let isDragging = false;
  let pointerId = null;

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    isPointerDown = true;
    isDragging = false;
    pointerId = e.pointerId;

    const rect = el.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = rect.left;
    initialTop = rect.top;

    el.removeAttribute('data-was-dragged');

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!isPointerDown) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    if (!isDragging && Math.hypot(deltaX, deltaY) > 5) {
      isDragging = true;
      el.classList.add('is-dragging');
      el.setAttribute('data-was-dragged', 'true');
      if (pointerId !== null && el.setPointerCapture) {
        try { el.setPointerCapture(pointerId); } catch (_) {}
      }
    }

    if (isDragging) {
      e.preventDefault();
      const newLeft = initialLeft + deltaX;
      const newTop = initialTop + deltaY;

      const maxLeft = Math.max(10, window.innerWidth - el.offsetWidth - 10);
      const maxTop = Math.max(10, window.innerHeight - el.offsetHeight - 10);

      const clampLeft = Math.min(Math.max(10, newLeft), maxLeft);
      const clampTop = Math.min(Math.max(10, newTop), maxTop);

      el.style.left = `${clampLeft}px`;
      el.style.top = `${clampTop}px`;
      el.style.bottom = 'auto';
      el.style.right = 'auto';
    }
  };

  const onPointerUp = (e) => {
    if (!isPointerDown) return;
    isPointerDown = false;

    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);

    if (pointerId !== null && el.releasePointerCapture) {
      try { el.releasePointerCapture(pointerId); } catch (_) {}
    }

    el.classList.remove('is-dragging');

    if (isDragging) {
      const rect = el.getBoundingClientRect();
      localStorage.setItem('raahi_assistant_pos', JSON.stringify({
        left: rect.left,
        top: rect.top
      }));

      setTimeout(() => {
        el.removeAttribute('data-was-dragged');
      }, 200);
    }
  };

  el.addEventListener('pointerdown', onPointerDown);
}

function makeDrawerDraggable(drawer, header) {
  if (!drawer || !header) return;
  header.style.touchAction = 'none';

  let startX = 0, startY = 0;
  let initialLeft = 0, initialTop = 0;
  let isDragging = false;

  const onPointerDown = (e) => {
    if (e.target.closest('#raahi-assistant-close')) return;
    if (e.button !== undefined && e.button !== 0) return;

    isDragging = true;
    const rect = drawer.getBoundingClientRect();
    startX = e.clientX;
    startY = e.clientY;
    initialLeft = rect.left;
    initialTop = rect.top;

    drawer.style.right = 'auto';
    drawer.style.bottom = 'auto';
    drawer.style.left = `${initialLeft}px`;
    drawer.style.top = `${initialTop}px`;

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    const newLeft = initialLeft + deltaX;
    const newTop = initialTop + deltaY;

    const maxLeft = Math.max(10, window.innerWidth - drawer.offsetWidth - 10);
    const maxTop = Math.max(10, window.innerHeight - drawer.offsetHeight - 10);

    const clampLeft = Math.min(Math.max(10, newLeft), maxLeft);
    const clampTop = Math.min(Math.max(10, newTop), maxTop);

    drawer.style.left = `${clampLeft}px`;
    drawer.style.top = `${clampTop}px`;
  };

  const onPointerUp = () => {
    isDragging = false;
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('pointerup', onPointerUp);
    window.removeEventListener('pointercancel', onPointerUp);
  };

  header.addEventListener('pointerdown', onPointerDown);
}

export function toggleAssistant(open) {
  const drawer = document.getElementById('raahi-assistant-drawer');
  const overlay = document.getElementById('raahi-assistant-overlay');
  isDrawerOpen = open;
  if (drawer) {
    if (open) {
      drawer.classList.add('active');
      overlay?.classList.add('active');
      updateAssistantContext();
      setTimeout(() => document.getElementById('raahi-assistant-input')?.focus(), 300);
    } else {
      drawer.classList.remove('active');
      overlay?.classList.remove('active');
    }
  }
}

function getCurrentContext() {
  const hash = window.location.hash || '#/home';
  if (hash.startsWith('#/destinations/')) {
    const placeId = hash.replace('#/destinations/', '');
    const place = RAAHI_DATA.places[placeId];
    if (place) {
      const city = RAAHI_DATA.cities[place.cityId];
      return {
        type: 'place',
        id: placeId,
        name: place.name,
        cityName: city ? city.name : '',
        stateId: place.stateId,
        data: place
      };
    }
  } else if (hash.startsWith('#/cities/')) {
    const cityId = hash.replace('#/cities/', '');
    const city = RAAHI_DATA.cities[cityId];
    if (city) {
      return {
        type: 'city',
        id: cityId,
        name: city.name,
        stateName: city.stateName,
        data: city
      };
    }
  } else if (hash.startsWith('#/states/')) {
    const stateId = hash.replace('#/states/', '');
    const state = RAAHI_DATA.states[stateId];
    if (state) {
      return {
        type: 'state',
        id: stateId,
        name: state.name,
        data: state
      };
    }
  }
  return {
    type: 'global',
    name: 'India Explorer',
    data: null
  };
}

function updateAssistantContext() {
  const ctx = getCurrentContext();
  const contextBadge = document.getElementById('raahi-context-badge');
  const chipsContainer = document.getElementById('raahi-context-chips');
  const messagesContainer = document.getElementById('raahi-messages-container');

  if (contextBadge) {
    if (ctx.type === 'place') {
      contextBadge.textContent = `EXPLORING: ${ctx.name.toUpperCase()} // ${ctx.cityName.toUpperCase()}`;
    } else if (ctx.type === 'city') {
      contextBadge.textContent = `EXPLORING: ${ctx.name.toUpperCase()} (${ctx.stateName.toUpperCase()})`;
    } else if (ctx.type === 'state') {
      contextBadge.textContent = `EXPLORING: ${ctx.name.toUpperCase()} STATE`;
    } else {
      contextBadge.textContent = `EXPLORING: NATIONAL ARCHIVE // INDIA`;
    }
  }

  // Generate contextual quick prompt chips
  let chips = [];
  if (ctx.type === 'place') {
    chips = [
      `How long do I need at ${ctx.name}?`,
      `What are the best photography spots?`,
      `What local food should I try nearby?`,
      `How do I avoid ticket queues?`,
      `What hidden gems are around here?`
    ];
  } else if (ctx.type === 'city') {
    chips = [
      `Suggest a 1-day itinerary for ${ctx.name}`,
      `What is the best sunset viewpoint?`,
      `What is the approximate daily budget in ${ctx.name}?`,
      `What are the top 3 hidden gems?`,
      `Best places for authentic local food?`
    ];
  } else if (ctx.type === 'state') {
    chips = [
      `What are the top cities to visit in ${ctx.name}?`,
      `What is the ideal season to travel to ${ctx.name}?`,
      `What living cultural crafts originate here?`,
      `Suggest a 3-day travel route in ${ctx.name}`
    ];
  } else {
    chips = [
      `What to visit in Jaipur?`,
      `Which state is best for royal fortresses?`,
      `Where can I experience peaceful backwaters?`,
      `What is the best 3-day itinerary for Kerala?`,
      `How does the RAAHI Journey Planner work?`
    ];
  }

  if (chipsContainer) {
    chipsContainer.innerHTML = chips.map(chip => `
      <button class="assistant-prompt-chip" onclick="window.raahiAskAssistant('${chip.replace(/'/g, "\\'")}')">
        ✦ ${chip}
      </button>
    `).join('');
  }

  // If messages empty, show initial greeting
  if (messagesContainer && messagesContainer.children.length === 0) {
    addMessage('assistant', `Namaste! I am your **RAAHI Travel Intelligence Assistant**. I provide factual context on ideal pacing, approximate budgets, hidden gems, and cultural etiquette across India. Ask me anything or tap a prompt above!`);
  }
}

function handleUserInput() {
  const inputEl = document.getElementById('raahi-assistant-input');
  if (!inputEl) return;
  const text = inputEl.value.trim();
  if (!text) return;
  inputEl.value = '';
  processUserQuestion(text);
}

window.raahiAskAssistant = (promptText) => {
  toggleAssistant(true);
  processUserQuestion(promptText);
};

function getGeminiApiKey() {
  return window.RAAHI_GEMINI_API_KEY || "";
}

async function fetchGeminiAIResponse(query, contextData) {
  const apiKey = getGeminiApiKey();
  if (!apiKey) return null;

  const models = ['gemini-2.5-flash', 'gemini-1.5-flash', 'gemini-2.0-flash'];
  const systemPrompt = `You are RAAHI AI, an eloquent, expert, and culturally authentic AI Travel Intelligence Assistant for the RAAHI National Tourism Platform (covering 28 States, 8 Union Territories, and 111+ Curated Destinations across India).
Current User Page Context: ${contextData ? JSON.stringify({ type: contextData.type, name: contextData.name, stateName: contextData.stateName || contextData.stateId }) : 'Exploring National Tourism Archive'}.
Provide concise, structured, highly factual travel intelligence with duration, best photography spots, authentic regional food, and approximate budgets in INR (₹). Keep formatting clean with bold headers and clear bullet points.`;

  for (const model of models) {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [
                { text: `${systemPrompt}\n\nUser Question: ${query}` }
              ]
            }
          ],
          generationConfig: {
            maxOutputTokens: 600,
            temperature: 0.7
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (text && text.trim()) {
          return text.trim();
        }
      }
    } catch (err) {
      console.warn(`Gemini API connection fallback for model ${model}:`, err);
    }
  }
  return null;
}

async function processUserQuestion(query) {
  addMessage('user', query);
  const ctx = getCurrentContext();

  // Show thinking indicator
  const thinkingId = 'thinking-' + Date.now();
  const container = document.getElementById('raahi-messages-container');
  if (container) {
    const thinkDiv = document.createElement('div');
    thinkDiv.className = 'raahi-msg assistant';
    thinkDiv.id = thinkingId;
    thinkDiv.innerHTML = `
      <div class="msg-bubble">
        <div class="assistant-label">✦ RAAHI AI INTELLIGENCE</div>
        <div class="msg-text" style="color: var(--gold); font-style: italic;">
          ⚡ Synthesizing live travel intelligence with Gemini AI...
        </div>
      </div>
    `;
    container.appendChild(thinkDiv);
    container.scrollTop = container.scrollHeight;
  }

  // 1. Try Live Gemini AI API Response
  let answer = await fetchGeminiAIResponse(query, ctx);

  // Remove thinking bubble
  const thinkEl = document.getElementById(thinkingId);
  if (thinkEl) thinkEl.remove();

  // 2. Comprehensive Contextual NLP Knowledge Fallback if API unavailable
  if (!answer) {
    answer = generateSmartLocalTravelIntelligence(query, ctx);
  }

  addMessage('assistant', answer);
}

function generateSmartLocalTravelIntelligence(query, ctx) {
  const q = query.toLowerCase();

  // 1. Match Place Context
  if (ctx.type === 'place' && ctx.data) {
    const p = ctx.data;
    if (q.includes('how long') || q.includes('duration') || q.includes('time')) {
      return `**Ideal Duration for ${p.name}:**\n\n⏱️ **${p.durationNeeded}**\n\n- **Good for:** ${p.goodFor ? p.goodFor.join(', ') : 'Heritage & Photography'}\n- **Pace:** ${p.idealPace || 'Moderate walking'}\n\n**Reasoning:** ${p.bestTimeDetailed ? p.bestTimeDetailed.reasoning : 'Allows thorough exploration of historic courtyards and architectural chambers.'}`;
    } else if (q.includes('photo') || q.includes('view') || q.includes('sunset') || q.includes('spots')) {
      return `**Photography & Visual Highlights at ${p.name}:**\n\n- **Best Light:** ${p.bestTimeDetailed ? p.bestTimeDetailed.bestTimeOfDay : 'Early morning (08:30 AM)'}\n- **Key Angles:** ${p.whatToSee ? p.whatToSee.map(s => s.title).join(', ') : 'Central courtyards and ramparts'}\n\n💡 *Tip: Handheld photography and smartphones are welcome throughout. Commercial tripods require prior ASI authorization.*`;
    } else if (q.includes('food') || q.includes('eat') || q.includes('taste') || q.includes('dish')) {
      return `**Taste the Place (${ctx.cityName}):**\n\n` + 
        (p.foodSpecialties ? p.foodSpecialties.map(f => `• **${f.name}** *(${f.type})* — ${f.desc} *(Approx. ${f.price} at ${f.where})*`).join('\n') : 'Authentic local cuisine is available at nearby heritage eateries.') +
        `\n\n🍽️ *All recommendations use genuine regional specialties without fabricated restaurants.*`;
    } else if (q.includes('queue') || q.includes('ticket') || q.includes('crowd') || q.includes('avoid')) {
      return `**Crowd Bypass & Ticketing Intelligence:**\n\n- **Entry Fee:** ${p.budget ? p.budget.entryFee : 'Standard heritage admission'}\n- **Best Strategy:** Arrive right at opening time (08:30 AM) or acquire a Composite Monument Pass to skip separate ticketing lines.\n- **Etiquette:** ${p.knowBeforeYouGo ? p.knowBeforeYouGo[0].tip : 'Wear comfortable walking shoes with grip for stone steps.'}`;
    } else if (q.includes('hidden') || q.includes('gem') || q.includes('beyond') || q.includes('secret')) {
      return `**Beyond the Obvious near ${p.name}:**\n\n` +
        (p.hiddenGems ? p.hiddenGems.map(g => `✨ **${g.name}** *(${g.type})*\n${g.desc} *(Distance: ${g.dist})*`).join('\n\n') : 'Explore quiet secondary courtyards and nearby artisan craft workshops.');
    }
  }

  // 2. City or Specific Destination Search in Query
  if (RAAHI_DATA.cities) {
    for (const [cKey, city] of Object.entries(RAAHI_DATA.cities)) {
      if (q.includes(city.name.toLowerCase()) || q.includes(cKey.toLowerCase())) {
        if (q.includes('food') || q.includes('eat') || q.includes('dish') || q.includes('restaurant')) {
          return `**Culinary Specialties in ${city.name} (${city.stateName}):**\n\n• **Pyaaz Kachori & Mirchi Bada:** Crispy spiced morning pastries.\n• **Dal Baati Churma:** Classic royal Rajasthani platter baked over cow dung coals.\n• **Ghevar & Lassi:** Signature saffron & cardamom sweet served in traditional clay kulhads.\n\n📍 *Available in historic bazaars and local heritage eateries.*`;
        }
        if (q.includes('budget') || q.includes('cost') || q.includes('price')) {
          return `**Approximate Daily Budget in ${city.name} (₹ INR):**\n\n- 🎒 **Budget Backpacker:** ${city.approxBudget ? city.approxBudget.budget : '₹1,800/day'}\n- 🏨 **Mid-Range Traveler:** ${city.approxBudget ? city.approxBudget.midRange : '₹5,000/day'}\n- 👑 **Luxury Heritage:** ${city.approxBudget ? city.approxBudget.luxury : '₹22,000+/day'}\n\n*Estimates cover boutique stay, local auto/cab, regional meals, and monument tickets.*`;
        }
        if (q.includes('itinerary') || q.includes('route') || q.includes('plan') || q.includes('day')) {
          const preset = city.plannerPresets ? city.plannerPresets['1-day'] : null;
          if (preset) {
            return `**1-Day Travel Itinerary for ${city.name}:**\n\n` +
              preset.timeline.map(t => `• **${t.time}** — **${t.placeName}**\n  *${t.activity}* *(Transit: ${t.transitNext})*`).join('\n\n') +
              `\n\n💰 **Estimated Cost:** ${preset.estimatedCost}`;
          }
        }
        return `**Travel Intelligence for ${city.name} (${city.stateName}):**\n\n${city.description}\n\n- **Ideal Duration:** ${city.idealDuration || '3 Days'}\n- **Best Season:** ${city.bestTime || 'Oct to Mar'}\n- **Top Highlights:** ${city.places ? city.places.map(pId => {
          const pl = RAAHI_DATA.places[pId];
          return pl ? pl.name : pId.replace(/-/g, ' ').toUpperCase();
        }).join(', ') : 'Historic Forts, Palaces, Bazaars'}`;
      }
    }
  }

  // 3. State Search in Query
  if (RAAHI_DATA.states) {
    for (const [sKey, state] of Object.entries(RAAHI_DATA.states)) {
      if (q.includes(state.name.toLowerCase()) || q.includes(sKey.toLowerCase())) {
        return `**Explore ${state.name}:**\n\n${state.tagline || state.description}\n\n- **Featured Cities:** ${state.cities ? state.cities.join(', ') : 'Jaipur, Jodhpur, Udaipur'}\n- **Best Time to Visit:** ${state.bestSeason || 'October to March'}\n- **Key Experiences:** ${state.experiences ? state.experiences.join(', ') : 'Royal Forts, Desert Safaris, Craft Bazaars'}`;
      }
    }
  }

  // 4. Topic & Domain Search
  if (q.includes('fort') || q.includes('royal') || q.includes('palace')) {
    return `**Royal Fortresses & Palaces in RAAHI:**\n\n- **Amber Fort (Jaipur, Rajasthan):** Majestic 16th-century hilltop fortress featuring Sheesh Mahal.\n- **Mehrangarh Fort (Jodhpur):** 400-foot cliffside stronghold overlooking the Blue City.\n- **Jaisalmer Living Fort:** Golden sandstone citadel with active residential quarters.\n- **Agra Fort (Uttar Pradesh):** Imperial Mughal red sandstone palace complex.`;
  }

  if (q.includes('backwater') || q.includes('kerala') || q.includes('houseboat')) {
    return `**Kerala Backwaters & Coastal Circuits:**\n\n- **Alleppey (Alappuzha):** Cruise through palm-fringed palm canals aboard traditional *kettuvallams*.\n- **Fort Kochi:** Ancient spice trade port with iconic Chinese fishing nets & colonial heritage.\n- **Munnar:** Endless rolling tea estates at 1,600m altitude.`;
  }

  if (q.includes('planner') || q.includes('journey') || q.includes('how to use') || q.includes('app')) {
    return `**How RAAHI Travel Intelligence Works:**\n\n1. **Explore States & Cities:** Browse 28 States, 8 UTs, and 111+ curated destinations.\n2. **Journey Planner:** Save monuments and places using the **♡ Save** button to construct custom multi-day travel itineraries.\n3. **Price Intelligence (Raahi Fair):** Calculate fair local auto/cab fares, food costs, and entry tickets.\n4. **Cinematic 3D Mode:** Experience full-screen immersive video tours of iconic heritage sites.\n5. **Moveable Ask RAAHI Assistant:** Drag me anywhere on your screen for instant AI travel advice!`;
  }

  if (q.includes('food') || q.includes('eat') || q.includes('cuisine') || q.includes('dish')) {
    return `**Authentic Indian Regional Culinary Highlights:**\n\n• **Rajasthan:** Dal Baati Churma, Pyaaz Kachori, Laal Maas, Ker Sangri.\n• **Kerala:** Appam with Stew, Malabar Parotta, Karimeen Pollichathu, Sadya.\n• **Himachal Pradesh:** Dham feast, Siddu with ghee, Chana Madra.\n• **Goa:** Fish Curry Rice, Bebinca, Pork Vindaloo, Poi bread.`;
  }

  if (q.includes('budget') || q.includes('cost') || q.includes('money') || q.includes('cheap')) {
    return `**Average Travel Budget Ranges in India (per person / day):**\n\n- 🎒 **Backpacker / Budget:** ₹1,500 – ₹2,500/day (Hostels, local thalis, public transit)\n- 🏨 **Comfort / Mid-Range:** ₹4,500 – ₹8,000/day (3-star boutique hotels, cab tours, sit-down dining)\n- 👑 **Heritage Luxury:** ₹18,000 – ₹45,000+/day (5-star heritage palaces, private guide, fine dining)`;
  }

  // 5. General Intelligent Fallback
  return `**RAAHI Travel Intelligence:**\n\nI can help you explore any city, state, or monument across India!\n\n- **Try asking:** *"What to visit in Jaipur?"*, *"Best food in Kerala?"*, *"Budget for 3 days in Goa"*, or *"How long to spend at Amber Fort?"*\n- You can also drag this Ask RAAHI button anywhere on your screen for quick access!`;
}

function addMessage(sender, text) {
  const container = document.getElementById('raahi-messages-container');
  if (!container) return;

  const msgDiv = document.createElement('div');
  msgDiv.className = `raahi-msg ${sender}`;

  // Simple Markdown formatter
  let formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/\n\n/g, '<br><br>')
    .replace(/\n/g, '<br>');

  msgDiv.innerHTML = `
    <div class="msg-bubble">
      ${sender === 'assistant' ? '<div class="assistant-label">✦ RAAHI INTELLIGENCE</div>' : ''}
      <div class="msg-text">${formatted}</div>
    </div>
  `;

  container.appendChild(msgDiv);
  container.scrollTop = container.scrollHeight;
}
