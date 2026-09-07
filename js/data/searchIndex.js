/**
 * RAAHI // High-Performance Sub-Millisecond Search Index & Fuzzy Search Engine
 */

import { STATES_DATA } from './statesData.js';
import { DESTINATIONS_DATA } from './destinationsData.js';
import { EXPERIENCES_DATA } from './experiencesData.js';

class SearchEngine {
  constructor() {
    this.items = [];
    this.buildIndex();
  }

  buildIndex() {
    // 1. Index States & UTs
    Object.values(STATES_DATA).forEach(state => {
      this.items.push({
        id: state.slug,
        title: state.name,
        subtitle: state.type === 'ut' ? 'Union Territory • ' + state.region + ' India' : 'State • ' + state.region + ' India',
        category: 'State & UT',
        type: state.type,
        route: '#/states/' + state.slug,
        image: state.heroImage,
        keywords: [state.name, state.slug, state.capital, state.region, state.tagline, ...(state.culture ? [state.culture.crafts, state.culture.festivals] : [])].join(' ').toLowerCase()
      });
    });

    // 2. Index Destinations
    Object.values(DESTINATIONS_DATA).forEach(dest => {
      const attractionsText = dest.attractions ? dest.attractions.map(a => a.name).join(' ') : '';
      const tagsText = dest.tags ? dest.tags.join(' ') : '';
      this.items.push({
        id: dest.id,
        title: dest.name,
        subtitle: dest.type + ' • ' + dest.state,
        category: 'Destination',
        type: dest.type,
        route: '#/destinations/' + dest.slug,
        image: dest.image,
        keywords: [dest.name, dest.slug, dest.state, dest.type, dest.region, tagsText, attractionsText, dest.shortDescription].join(' ').toLowerCase()
      });

      // Index individual attractions
      if (dest.attractions) {
        dest.attractions.forEach(att => {
          this.items.push({
            id: dest.id + '-' + att.name.toLowerCase().replace(/[^a-z0-9]/g, '-'),
            title: att.name,
            subtitle: 'Attraction in ' + dest.name + ', ' + dest.state,
            category: 'Attraction',
            type: att.type,
            route: '#/destinations/' + dest.slug,
            image: dest.image,
            keywords: [att.name, att.type, att.desc, dest.name, dest.state].join(' ').toLowerCase()
          });
        });
      }
    });

    // 3. Index Experiences
    EXPERIENCES_DATA.forEach(exp => {
      this.items.push({
        id: exp.id,
        title: exp.name,
        subtitle: 'Curated Travel Archetype',
        category: 'Experience',
        type: exp.category,
        route: '#journey-discovery',
        image: exp.heroImage,
        keywords: [exp.name, exp.tagline, exp.category, exp.icon].join(' ').toLowerCase()
      });
    });
  }

  search(query, limit = 10) {
    if (!query || query.trim().length === 0) return [];
    const q = query.trim().toLowerCase();
    const tokens = q.split(/\s+/);

    const scored = [];
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      let score = 0;

      // Exact title match gets highest score
      const titleLower = item.title.toLowerCase();
      if (titleLower === q) {
        score += 100;
      } else if (titleLower.startsWith(q)) {
        score += 50;
      } else if (titleLower.includes(q)) {
        score += 30;
      }

      // Keyword token matching
      let allTokensMatch = true;
      for (const t of tokens) {
        if (item.keywords.includes(t)) {
          score += 10;
        } else {
          allTokensMatch = false;
        }
      }

      if (score > 0 || allTokensMatch) {
        // Boost Destinations and States
        if (item.category === 'Destination') score += 5;
        if (item.category === 'State & UT') score += 8;
        scored.push({ item, score });
      }
    }

    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, limit).map(s => s.item);
  }
}

export const searchIndex = new SearchEngine();
