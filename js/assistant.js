/**
 * RAAHI // Contextual Travel Intelligence Assistant ("Ask RAAHI")
 * Dynamic context sensing (Place, City, State, Home),
 * quick prompt chips, and instant factual travel intelligence synthesis.
 */

import { RAAHI_DATA } from './data.js';
import { addToJourney } from './journeyBuilder.js';

let isDrawerOpen = false;

export function initAssistant() {
  const triggerBtn = document.getElementById('raahi-assistant-trigger');
  const drawer = document.getElementById('raahi-assistant-drawer');
  const closeBtn = document.getElementById('raahi-assistant-close');
  const sendBtn = document.getElementById('raahi-assistant-send');
  const inputEl = document.getElementById('raahi-assistant-input');
  const chipsContainer = document.getElementById('raahi-context-chips');
  const messagesContainer = document.getElementById('raahi-messages-container');

  if (!drawer) return;

  // Toggle drawer
  triggerBtn?.addEventListener('click', () => toggleAssistant(true));
  closeBtn?.addEventListener('click', () => toggleAssistant(false));

  // Send message handler
  sendBtn?.addEventListener('click', () => handleUserInput());
  inputEl?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleUserInput();
  });

  // Listen to route changes to update contextual prompt chips
  window.addEventListener('hashchange', updateAssistantContext);
  updateAssistantContext();
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
      // Focus input
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
      `Which state is best for royal fortresses?`,
      `Where can I experience peaceful backwaters?`,
      `What are the top spiritual river ghats?`,
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
    addMessage('assistant', `Namaste! I am your **RAAHI Travel Intelligence Assistant**. I provide factual context on ideal pacing, approximate budgets, hidden gems, and cultural etiquette. Ask me anything or tap a prompt above!`);
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
  processUserQuestion(promptText);
};

const _encodedKey = "QVEuQWI4Uk42S0xad3FuZC1yRmtRMjJMUklVcERfTGpZRkhJeUI0MC1ZVHFDVWk2bmp4WXc=";
const RAAHI_GEMINI_API_KEY = window.RAAHI_GEMINI_API_KEY || (typeof atob !== 'undefined' ? atob(_encodedKey) : "");

async function fetchGeminiAIResponse(query, contextData) {
  const apiKey = RAAHI_GEMINI_API_KEY;
  if (!apiKey) return null;

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`;
  
  const systemPrompt = `You are RAAHI AI, an eloquent, expert, and culturally authentic AI Travel Intelligence Assistant for the RAAHI National Tourism Platform (covering 28 States, 8 Union Territories, and 111+ Curated Destinations across India).
Current User Page Context: ${contextData ? JSON.stringify({ type: contextData.type, name: contextData.name, stateName: contextData.stateName || contextData.stateId }) : 'Exploring National Tourism Archive'}.
Provide concise, structured, highly factual travel intelligence with duration, best photography spots, authentic regional food, and approximate budgets in INR (₹). Keep formatting clean with bold headers and clear bullet points.`;

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
    console.warn("Gemini API connection fallback to local intelligence:", err);
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

  // 2. Local Context Fallback if API unavailable
  if (!answer) {
    const q = query.toLowerCase();
    if (ctx.type === 'place' && ctx.data) {
      const p = ctx.data;
      if (q.includes('how long') || q.includes('duration') || q.includes('time')) {
        answer = `**Ideal Duration for ${p.name}:**\n\n⏱️ **${p.durationNeeded}**\n\n- **Good for:** ${p.goodFor ? p.goodFor.join(', ') : 'Heritage & Photography'}\n- **Pace:** ${p.idealPace || 'Moderate walking'}\n\n**Reasoning:** ${p.bestTimeDetailed ? p.bestTimeDetailed.reasoning : 'Allows thorough exploration of historic courtyards and architectural chambers.'}`;
      } else if (q.includes('photo') || q.includes('view') || q.includes('sunset') || q.includes('spots')) {
        answer = `**Photography & Visual Highlights at ${p.name}:**\n\n- **Best Light:** ${p.bestTimeDetailed ? p.bestTimeDetailed.bestTimeOfDay : 'Early morning (08:30 AM)'}\n- **Key Angles:** ${p.whatToSee ? p.whatToSee.map(s => s.title).join(', ') : 'Central courtyards and ramparts'}\n\n💡 *Tip: Handheld photography and smartphones are welcome throughout. Commercial tripods require prior ASI authorization.*`;
      } else if (q.includes('food') || q.includes('eat') || q.includes('taste') || q.includes('dish')) {
        answer = `**Taste the Place (${ctx.cityName}):**\n\n` + 
          (p.foodSpecialties ? p.foodSpecialties.map(f => `• **${f.name}** *(${f.type})* — ${f.desc} *(Approx. ${f.price} at ${f.where})*`).join('\n') : 'Authentic local cuisine is available at nearby heritage eateries.') +
          `\n\n🍽️ *All recommendations use genuine regional specialties without fabricated restaurants.*`;
      } else if (q.includes('queue') || q.includes('ticket') || q.includes('crowd') || q.includes('avoid')) {
        answer = `**Crowd Bypass & Ticketing Intelligence:**\n\n- **Entry Fee:** ${p.budget ? p.budget.entryFee : 'Standard heritage admission'}\n- **Best Strategy:** Arrive right at opening time (08:30 AM) or acquire a Composite Monument Pass to skip separate ticketing lines.\n- **Etiquette:** ${p.knowBeforeYouGo ? p.knowBeforeYouGo[0].tip : 'Wear comfortable walking shoes with grip for stone steps.'}`;
      } else if (q.includes('hidden') || q.includes('gem') || q.includes('beyond') || q.includes('secret')) {
        answer = `**Beyond the Obvious near ${p.name}:**\n\n` +
          (p.hiddenGems ? p.hiddenGems.map(g => `✨ **${g.name}** *(${g.type})*\n${g.desc} *(Distance: ${g.dist})*`).join('\n\n') : 'Explore quiet secondary courtyards and nearby artisan craft workshops.');
      } else {
        answer = `**Travel Intelligence for ${p.name}:**\n\n${p.overview}\n\n- **Location:** ${ctx.cityName}, ${ctx.stateId ? ctx.stateId.toUpperCase() : 'India'}\n- **Estimated Budget:** ${p.budget ? p.budget.entryFee : '₹100 - ₹500'} (Entry) + ${p.budget ? p.budget.avgFoodCost : '₹400 food'}\n- **Travel Time:** ${p.travelContext ? p.travelContext.fromCityCenter : 'Approx. 20 min from city center'}`;
      }
    } else if (ctx.type === 'city' && ctx.data) {
      const c = ctx.data;
      if (q.includes('1-day') || q.includes('itinerary') || q.includes('plan') || q.includes('route')) {
        const preset = c.plannerPresets ? c.plannerPresets['1-day'] : null;
        if (preset) {
          answer = `**1-Day Highlight Itinerary for ${c.name}:**\n\n` +
            preset.timeline.map(t => `• **${t.time}** — **${t.placeName}**\n  *${t.activity}* *(Transit: ${t.transitNext})*`).join('\n\n') +
            `\n\n💰 **Approximate Cost:** ${preset.estimatedCost}`;
        } else {
          answer = `**Suggested Route in ${c.name}:**\n\nStart early at ${c.places[0] || 'Main Fort'}, stop for local lunch, and finish at ${c.places[1] || 'Scenic Viewpoint'} for sunset.`;
        }
      } else if (q.includes('budget') || q.includes('cost') || q.includes('price')) {
        answer = `**Approximate Daily Budget in ${c.name} (₹ INR):**\n\n- 🎒 **Budget Travel:** ${c.approxBudget ? c.approxBudget.budget : '₹1,800/day'}\n- 🏨 **Mid-Range Travel:** ${c.approxBudget ? c.approxBudget.midRange : '₹5,000/day'}\n- 👑 **Luxury Heritage:** ${c.approxBudget ? c.approxBudget.luxury : '₹20,000+/day'}\n\n*Estimates include accommodation, local transport, meals, and standard heritage admissions.*`;
      } else if (q.includes('sunset') || q.includes('view') || q.includes('vistas')) {
        answer = `**Best Sunset & Scenic Viewpoints in ${c.name}:**\n\n• **Nahargarh Ridge / Elevated Bastions:** Unrivaled views over the entire historic basin.\n• **Lakeside Promenades:** Golden hour reflections across the calm waters.\n\n💡 *Arrive 45 minutes before sundown to secure an uncrowded vantage point.*`;
      } else if (q.includes('hidden') || q.includes('gem')) {
        answer = `**Hidden Gems in ${c.name} (Beyond the Checklist):**\n\n` +
          c.places.slice(3).map(pId => {
            const pl = RAAHI_DATA.places[pId];
            return pl ? `• **${pl.name}** — ${pl.shortDesc}` : `• **${pId.replace(/-/g, ' ').toUpperCase()}**`;
          }).join('\n\n');
      } else {
        answer = `**Intelligence for ${c.name} (${c.stateName}):**\n\n${c.description}\n\n- **Ideal Duration:** ${c.idealDuration || '3 Days'}\n- **Best Season:** ${c.bestTime || 'Oct to Mar'}\n- **Curated Places:** ${c.places.length} monuments and artisan sectors available to explore.`;
      }
    } else {
      // Global India context
      if (q.includes('fort') || q.includes('royal') || q.includes('palace')) {
        answer = `**Royal Fortresses & Palaces in RAAHI:**\n\nRajasthan features India's most imposing medieval citadels:\n- **Amber Fort (Jaipur):** Colossal Aravalli fortress with Sheesh Mahal.\n- **Mehrangarh Citadel (Jodhpur):** Soaring 400-foot cliffside fortress.\n- **Jaisalmer Fort:** The world's largest living desert citadel.\n- **Agra Fort (Uttar Pradesh):** Imperial red sandstone palace of the Mughals.`;
      } else if (q.includes('backwater') || q.includes('kerala') || q.includes('water')) {
        answer = `**Backwaters & Coastal Sanctuaries in RAAHI:**\n\nExplore Kerala's tropical waterways:\n- **Alleppey (Alappuzha):** Interconnected lagoons and traditional kettuvallam houseboats.\n- **Fort Kochi:** Historic spice trading port and Chinese fishing nets.\n- **Varkala:** Dramatic laterite coastal cliffs overlooking the Arabian Sea.`;
      } else {
        answer = `**Welcome to RAAHI National Tourism Discovery Platform!**\n\nSelect any state (Rajasthan, Kerala, Himachal Pradesh, Goa, Uttar Pradesh) to explore curated regional cities, each with 8–12 meaningful places, verified photography, local food, and optional cinematic explorations.`;
      }
    }
  }

  addMessage('assistant', answer);
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
