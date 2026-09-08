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

    // 4. Index Raahi Fair Price Intelligence
    const fairItems = [
      {
        id: 'fair-auto-transport',
        title: 'Auto Rickshaw & Taxi Fair Fare Calculator',
        subtitle: 'Official Municipal RTO Gazette Rates • 14+ Indian Cities',
        category: 'Fair Prices',
        type: 'Utility',
        route: '#/fair?category=transport',
        image: 'assets/images/destinations/hawa-mahal.jpg',
        keywords: 'auto rickshaw fare meter price taxi cab rto transport cost rates night surcharge jaipur delhi mumbai bengaluru kolkata varanasi raahi fair'
      },
      {
        id: 'fair-shikara-rates',
        title: 'Dal Lake Shikara Official Union Rates',
        subtitle: 'JKTDC & Dal Lake Boatmen Union Verified Tariffs • Srinagar',
        category: 'Fair Prices',
        type: 'Tariff',
        route: '#/fair?city=srinagar&category=activities',
        image: 'assets/images/destinations/dal-lake.jpg',
        keywords: 'shikara boat ride dal lake srinagar kashmir j&k hourly rates union tariff water taxi fair price'
      },
      {
        id: 'fair-monuments-tariffs',
        title: 'ASI Heritage Monuments Ticket Rates',
        subtitle: 'Archaeological Survey of India Official Published Tariffs',
        category: 'Fair Prices',
        type: 'Tariff',
        route: '#/fair?category=monuments',
        image: 'assets/images/destinations/taj-mahal.jpg',
        keywords: 'asi ticket monument entrance entry fees taj mahal amber fort qutub minar red fort composite ticket fair price'
      },
      {
        id: 'fair-pashmina-shopping',
        title: 'Kashmiri Pashmina & GI Craft Price Benchmarks',
        subtitle: 'Handicrafts Dept & GI Registry Standards • Srinagar & Jaipur',
        category: 'Fair Prices',
        type: 'Benchmark',
        route: '#/fair?category=shopping',
        image: 'assets/images/destinations/dal-lake.jpg',
        keywords: 'pashmina shawl kashmir sanganeri cotton handblock banarasi silk blue pottery carpet shopping fair price cost'
      },
      {
        id: 'fair-guide-tariffs',
        title: 'Government Authorized Tourist Guides Rates',
        subtitle: 'Ministry of Tourism Approved Day Rates & Half-day Tariffs',
        category: 'Fair Prices',
        type: 'Tariff',
        route: '#/fair?category=services',
        image: 'assets/images/destinations/hawa-mahal.jpg',
        keywords: 'tour guide official approved ministry tourism charges fees per day half day porter rates fair price'
      }
    ];

    fairItems.forEach(item => {
      this.items.push(item);
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
