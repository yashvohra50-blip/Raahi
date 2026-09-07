# 🏛️ RAAHI — National Tourism Discovery & Cinematic Exploration Platform

> **"Don't Just Visit. Experience."**
> A national-scale digital discovery platform celebrating India's architectural masterpieces, regional soul, travel intelligence, and living cultural lineages.

---

## 🌟 Overview

**RAAHI** is a modern editorial and cinematic tourism platform built to revolutionize how travelers discover India. Built around the foundational hierarchy:

$$\text{INDIA} \longrightarrow \text{STATE} \longrightarrow \text{CITY} \longrightarrow \text{PLACE} \longrightarrow \text{EXPERIENCE}$$

---

## ✨ Key Features

### 1. ⚡ 3D Cinematic Destination Exploration (`#/cinematic/:placeId`)
- **Full-Screen Viewport Dominance**: The user's scroll controls a continuous 3D camera trajectory flying into monumental heritage landmarks (e.g. Amber Fort).
- **Smooth 60fps Interpolation**: Real-time `requestAnimationFrame` inertia lerp damping.
- **Discoverable Spatial Hotspots**: Pulsating golden beacons appear at precise 3D camera anchors (*Ganesh Pol*, *Sheesh Mahal*, *Diwan-i-Aam*, *Maota Lake*).
- **Deep Research Dossiers**: Slide-in side drawers with quick intelligence, architectural facts, and zero camera position reset.
- **Atmospheric Canvas & Generative Soundscape**: Real-time floating dust motes and synthesized Santoor acoustic resonances using the Web Audio API.

### 2. 🗺️ State & City Experience Portals (`#/states/:id` & `#/cities/:id`)
- **Rich Cultural Visual Identity**: Ambient textures, sandstone motifs, lake shimmer, and mountain mist tailored to each destination (Jaipur, Jaisalmer, Udaipur, Varanasi, Munnar).
- **Intelligent Route Compiler**: 1-Day (Sprint), 2-Day (Balanced), and 3-Day (Deep Dive) itinerary generators with travel style filters (Budget, Mid-Range, Luxury).
- **Pacing Intelligence**: Editorial guidance on ideal duration, daily budget approximations, and seasonal advice.

### 3. 📍 Verified Geolocation & Google Maps Integration
- Direct modal linking every monument (*Amber Fort, Taj Mahal, Hawa Mahal, Jal Mahal, Panna Meena, etc.*) to its precise coordinates on Google Maps.

### 4. ♡ Persistent "My Journey" Route Builder (`#/journey`)
- Save places while browsing with zero login required (persists across visits via `localStorage`).
- Sequential route organizer, pacing calculator, and one-click itinerary export dossier.

### 5. ✦ "Ask RAAHI" Contextual Travel Assistant
- Intelligent conversational assistant providing timing tips, local culinary highlights, hidden gems, and crowd mitigation advice.

---

## 📸 Geographically Verified Photography

All 26 destination assets depict the genuine landmarks with 100% geographic visual accuracy:
- **Amber Fort**: Ramparts, Aravalli ridges & Maota Lake reflections
- **Amber Fort Ganesh Pol**: 1640 frescoed gate and marble lattices
- **Sheesh Mahal**: Convex Belgian glass inlays & mirror mosaics
- **Hawa Mahal**: 5-tier pink honeycomb facade with 953 jharokhas
- **City Palace Jaipur**: Chandra Mahal & Peacock courtyards
- **Taj Mahal**: White Makrana marble dome on the Yamuna
- **Key Monastery**: 1,000-year-old cliffside Tibetan gompa at 13,668 ft
- **Alleppey**: Palm-fringed backwater channels and kettuvallams

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla JavaScript (ES6+ Modules), HTML5, CSS3 (Custom Design System, Glassmorphism, CSS 3D Transforms)
- **Audio Engine**: Web Audio API (Generative Harmonic Synthesis)
- **Canvas Rendering**: 2D/3D Context Particle Pipeline
- **Routing**: Lightweight Hash-based Client-Side SPA Router (`#/home`, `#/states/:id`, `#/cities/:id`, `#/destinations/:id`, `#/cinematic/:id`, `#/journey`)
- **Storage**: LocalStorage API for offline Journey persistence
- **Zero External Framework Dependencies**: Fast, lightweight, and performant.

---

## 🚀 Quick Start / Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/raahi.git
   cd raahi
   ```

2. **Run a static server**:
   ```bash
   # Using Node.js
   npx serve .
   
   # Or using Python
   python -m http.server 5500
   ```

3. **Open in browser**:
   Navigate to `http://localhost:5500`

---

## 📄 License

MIT License © 2026 RAAHI National Tourism Platform.
