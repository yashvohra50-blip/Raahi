const fs = require('fs');
const path = require('path');

const dataJsPath = path.join(__dirname, 'js', 'data.js');

// Import or evaluate existing data
let fileContent = fs.readFileSync(dataJsPath, 'utf8');

// Replace export statement to evaluate in node
const evalContent = fileContent.replace('export const RAAHI_DATA =', 'global.RAAHI_DATA =');
eval(evalContent);

const data = global.RAAHI_DATA;

// Ensure all cities have Travel Intelligence
Object.values(data.cities).forEach(city => {
  city.idealDuration = city.idealDuration || (city.id === 'jaipur' ? '3 Days' : city.id === 'varanasi' ? '3 Days' : city.id === 'kochi' ? '2-3 Days' : city.id === 'munnar' ? '2-3 Days' : city.id === 'spiti-valley' ? '5-7 Days' : '2-3 Days');
  city.whyDuration = city.whyDuration || `Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.`;
  city.approxBudget = city.approxBudget || {
    budget: "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
    midRange: "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
    luxury: "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
  };
  city.bestTime = city.bestTime || "October to March (Pleasant dry season with cool evenings)";

  city.knowBefore = city.knowBefore || [
    { title: "Local Transport", tip: "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares." },
    { title: "Market Timings", tip: "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography." },
    { title: "Monument Passes", tip: "Composite passes are available at primary heritage landmarks to skip separate ticket queues." }
  ];

  city.tripArchetypes = city.tripArchetypes || {
    heritage: city.places.slice(0, 4),
    food: city.places.slice(1, 4),
    adventure: city.places.slice(2, 5),
    relaxation: city.places.slice(3, 6),
    culture: city.places.slice(0, 3),
    photography: city.places.slice(0, 4),
    family: city.places.slice(0, 3),
    couples: city.places.slice(1, 4),
    budget: city.places.slice(2, 5),
    luxury: city.places.slice(0, 2),
    hidden_gems: city.places.slice(3)
  };

  city.plannerPresets = city.plannerPresets || {
    '1-day': {
      title: `The Essential ${city.name} (1-Day Highlight Sprint)`,
      pace: "High-Velocity & Efficient",
      focus: "Iconic Monuments & Core Heritage",
      estimatedCost: "₹2,200 (Mid-Range) + Entry Fees",
      timeline: [
        { time: "08:30 AM", placeName: `${city.places[0] ? city.places[0].replace(/-/g, ' ').toUpperCase() : 'Main Landmark'}`, activity: "Arrive at opening to explore the primary monument before tour buses arrive.", duration: "2.5 Hours", transitNext: "Approx. 15 min drive" },
        { time: "11:45 AM", placeName: `${city.places[1] ? city.places[1].replace(/-/g, ' ').toUpperCase() : 'Historic Quarter'}`, activity: "Immerse in secondary landmark and architectural corridors.", duration: "1.5 Hours", transitNext: "Approx. 10 min drive" },
        { time: "01:30 PM", placeName: "Local Heritage Lunch Stop", activity: "Authentic regional lunch thali at a celebrated local kitchen.", duration: "1 Hour", transitNext: "Approx. 12 min drive" },
        { time: "03:00 PM", placeName: `${city.places[2] ? city.places[2].replace(/-/g, ' ').toUpperCase() : 'Cultural Bazaar'}`, activity: "Explore artisan craft quarters and historic street architecture.", duration: "2 Hours", transitNext: "Approx. 20 min drive" },
        { time: "05:30 PM", placeName: "Sunset Scenic Viewpoint", activity: "Golden hour vistas as dusk settles over the city skyline.", duration: "1.5 Hours", transitNext: "Evening at leisure" }
      ]
    },
    '2-day': {
      title: `The Balanced ${city.name} Journey (2 Days)`,
      pace: "Balanced & Immersive",
      focus: "Heritage, Culinary Traditions & Local Bazaars",
      estimatedCost: "₹4,800 (Mid-Range)",
      days: [
        {
          day: 1,
          title: "Monuments & Architectural Highlights",
          stops: [
            { time: "08:30 AM", title: `${city.places[0] ? city.places[0].replace(/-/g, ' ').toUpperCase() : 'Primary Citadel'}`, desc: "Early morning exploration of primary architectural marvel.", transitNext: "Approx. 15 min drive" },
            { time: "11:45 AM", title: `${city.places[1] ? city.places[1].replace(/-/g, ' ').toUpperCase() : 'Secondary Palace'}`, desc: "Courtyards, museums, and royal artifacts.", transitNext: "Approx. 10 min drive" },
            { time: "01:15 PM", title: "Regional Culinary Experience", desc: "Authentic local specialty dishes.", transitNext: "Approx. 15 min drive" },
            { time: "03:00 PM", title: `${city.places[2] ? city.places[2].replace(/-/g, ' ').toUpperCase() : 'Scenic Waterway/Ridge'}`, desc: "Photographic views and lakeside/ridge promenade.", transitNext: "Approx. 20 min drive" },
            { time: "05:30 PM", title: "Sunset Viewpoint & Evening Tea", desc: "Watch the golden sunset over historical ramparts.", transitNext: "Dinner" }
          ]
        },
        {
          day: 2,
          title: "Bazaars, Living Crafts & Hidden Sanctuaries",
          stops: [
            { time: "09:00 AM", title: `${city.places[3] ? city.places[3].replace(/-/g, ' ').toUpperCase() : 'Historic Temple / Stepwell'}`, desc: "Quiet spiritual or subterranean architectural gem.", transitNext: "Approx. 10 min drive" },
            { time: "11:00 AM", title: "Artisan Quarters & Guild Walk", desc: "Observe master craftsmen in traditional ateliers.", transitNext: "Approx. 5 min walk" },
            { time: "01:30 PM", title: "Street Gastronomy & Snacks", desc: "Famous local savories and sweet delights.", transitNext: "Approx. 15 min drive" },
            { time: "03:30 PM", title: `${city.places[4] ? city.places[4].replace(/-/g, ' ').toUpperCase() : 'Heritage Museum'}`, desc: "Art collections, tapestries, and regional relics.", transitNext: "Approx. 15 min drive" },
            { time: "06:00 PM", title: "Evening Promenade / Cultural Performance", desc: "Live classical music, folk dance, or temple aarti.", transitNext: "Night" }
          ]
        }
      ]
    },
    '3-day': {
      title: `The Complete ${city.name} Expedition (3 Days)`,
      pace: "Relaxed & Deep Cultural Dive",
      focus: "Comprehensive Highlights + Outskirts & Artisan Villages",
      estimatedCost: "₹7,600 (Mid-Range)",
      days: [
        { day: 1, title: "Grand Citadels & Panoramic Vistas", stops: [`${city.places[0] ? city.places[0].replace(/-/g, ' ').toUpperCase() : 'Citadel'}`, `${city.places[1] ? city.places[1].replace(/-/g, ' ').toUpperCase() : 'Palace'}`, "Sunset Ridge"] },
        { day: 2, title: "Old City Corridors & Bazaars", stops: [`${city.places[2] ? city.places[2].replace(/-/g, ' ').toUpperCase() : 'Temple'}`, `${city.places[3] ? city.places[3].replace(/-/g, ' ').toUpperCase() : 'Museum'}`, "Artisan Alley"] },
        { day: 3, title: "Beyond the Obvious & Crafts", stops: [`${city.places[4] ? city.places[4].replace(/-/g, ' ').toUpperCase() : 'Stepwell'}`, `${city.places[5] ? city.places[5].replace(/-/g, ' ').toUpperCase() : 'Village'}`, "Heritage Dining"] }
      ]
    }
  };
});

// Ensure all places have Travel Intelligence
Object.values(data.places).forEach(place => {
  place.durationNeeded = place.durationNeeded || "2–3 Hours";
  place.idealPace = place.idealPace || "Moderate walking with step climbing";
  place.goodFor = place.goodFor || ["Architecture", "History", "Photography", "Cultural Heritage"];
  
  place.bestTimeDetailed = place.bestTimeDetailed || {
    season: "October to March (Pleasant 14°C – 26°C)",
    bestTimeOfDay: "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
    reasoning: "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
  };

  place.budget = place.budget || {
    entryFee: place.travelInfo ? place.travelInfo.entryFee : "Approx. ₹50 – ₹100 (Indian) / ₹300 – ₹500 (Foreign)",
    avgFoodCost: "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
    avgTransport: "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
  };

  place.travelContext = place.travelContext || {
    fromCityCenter: `Approx. 15–25 min drive from ${place.cityId.replace(/-/g, ' ')} city center`,
    nearbyTransit: (place.placesNearby || []).map(p => ({
      destination: p.name,
      time: p.dist ? `Approx. ${p.dist}` : 'Approx. 10–15 min drive',
      distance: p.dist || 'Nearby'
    }))
  };

  place.knowBeforeYouGo = place.knowBeforeYouGo || [
    { title: "Footwear & Steps", tip: "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts." },
    { title: "Photography Rules", tip: "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization." },
    { title: "Queue Bypass", tip: "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines." },
    { title: "Attire & Etiquette", tip: "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines." }
  ];

  place.hiddenGems = place.hiddenGems || [
    { name: "Quiet Morning Courtyards", type: "Architectural Detail", desc: "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.", dist: "Inside complex" },
    { name: "Artisan Guild Haveli", type: "Living Craft", desc: "Local workshops preserving centuries-old regional handicrafts.", dist: "Approx. 1 km away" },
    { name: "Panoramic Ridge Point", type: "Scenic Vista", desc: "An elevated viewpoint overlooking the monument against the surrounding topography.", dist: "Approx. 15 min walk" }
  ];

  place.foodSpecialties = place.foodSpecialties || (place.foodNearby ? place.foodNearby.map(f => ({
    name: f.name,
    type: "Veg / Non-Veg",
    desc: f.desc,
    price: "Approx. ₹200 – ₹600",
    where: f.cuisine || "Nearby Heritage Kitchen"
  })) : [
    { name: "Traditional Regional Thali", type: "Veg", desc: "A seasonal spread of local bread, lentils, and slow-cooked vegetables.", price: "Approx. ₹250 – ₹500", where: "Local Heritage Eatery" },
    { name: "Fresh Chai & Savory Fritters", type: "Veg", desc: "Freshly brewed spiced tea paired with crispy local snacks.", price: "Approx. ₹40 – ₹100", where: "Bazaar Tea Stall" }
  ]);

  place.staysByCategory = place.staysByCategory || {
    luxury: [
      { name: "Grand Heritage Palace Resort", desc: "Opulent palatial accommodations with royal gardens and swimming pavilions.", price: "₹35,000+ / night" },
      { name: "Luxury Fort Retreat", desc: "Exclusive five-star suites with private terraces and courtyard views.", price: "₹25,000+ / night" }
    ],
    heritage: [
      { name: "Historic Restored Haveli", desc: "Century-old ancestral residence adorned with authentic frescoes.", price: "₹8,000 – ₹16,000 / night" },
      { name: "Royal Townhouse Hotel", desc: "Charming traditional courtyards and carved stone balconies.", price: "₹6,000 – ₹12,000 / night" }
    ],
    boutique: [
      { name: "Artisan Design Guesthouse", desc: "Contemporary minimalist design blended with indigenous textiles.", price: "₹4,500 – ₹8,000 / night" },
      { name: "Eco Oasis Villa", desc: "Tranquil green sanctuary focusing on organic dining and wellness.", price: "₹5,000 – ₹9,000 / night" }
    ],
    budget: [
      { name: "Heritage Backpackers Hub", desc: "Clean social hostel with rooftop cafe and cultural walking tours.", price: "₹800 – ₹2,200 / night" },
      { name: "Traditional Family Homestay", desc: "Warm local hospitality with home-cooked regional meals.", price: "₹1,200 – ₹2,800 / night" }
    ]
  };
});

// Output updated data
const output = `/**\n * RAAHI // Centralized Data Architecture\n * National Tourism Discovery Platform\n * State -> City -> Place -> Experience Hierarchy\n * Travel Intelligence & Geographically Verified Photography\n */\n\nexport const RAAHI_DATA = ${JSON.stringify(data, null, 2)};\n\nexport const ARVORA_DATA = RAAHI_DATA;\n`;

fs.writeFileSync(dataJsPath, output, 'utf8');
console.log('Successfully enriched data.js with Travel Intelligence! File size: ' + output.length);
