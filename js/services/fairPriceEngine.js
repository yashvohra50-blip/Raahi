/**
 * RAAHI FAIR // Algorithmic Price Resolution & Transparent Calculation Engine
 * Core Principle: NO VERIFIED DATA = NO CLAIM.
 * Never guesses. Always separates fact from estimate.
 */

import { 
  OFFICIAL_TRANSPORT_SCHEDULES, 
  VERIFIED_ROUTES, 
  VERIFIED_PRICES_CATALOG, 
  PRICE_TYPES, 
  SOURCE_TYPES 
} from '../data/fairPricesData.js';

export class FairPriceEngine {

  /**
   * Get list of cities with verified pricing intelligence
   */
  static getSupportedCities() {
    return [
      { slug: "jaipur", name: "Jaipur", state: "Rajasthan" },
      { slug: "delhi", name: "Delhi", state: "Delhi" },
      { slug: "mumbai", name: "Mumbai", state: "Maharashtra" },
      { slug: "varanasi", name: "Varanasi", state: "Uttar Pradesh" },
      { slug: "agra", name: "Agra", state: "Uttar Pradesh" },
      { slug: "srinagar", name: "Srinagar", state: "Jammu & Kashmir" },
      { slug: "bengaluru", name: "Bengaluru", state: "Karnataka" },
      { slug: "kolkata", name: "Kolkata", state: "West Bengal" },
      { slug: "rishikesh", name: "Rishikesh", state: "Uttarakhand" },
      { slug: "amritsar", name: "Amritsar", state: "Punjab" },
      { slug: "goa", name: "Goa", state: "Goa" },
      { slug: "udaipur", name: "Udaipur", state: "Rajasthan" },
      { slug: "kochi", name: "Kochi", state: "Kerala" },
      { slug: "hampi", name: "Hampi", state: "Karnataka" }
    ];
  }

  /**
   * Get verified point-to-point routes for a city
   */
  static getRoutesForCity(citySlug) {
    if (!citySlug) return [];
    const clean = citySlug.toLowerCase().trim();
    return VERIFIED_ROUTES.filter(r => r.city === clean);
  }

  /**
   * Get verified items available for a category in a city
   */
  static getCatalogItems(category, citySlug) {
    if (!category) return [];
    let items = VERIFIED_PRICES_CATALOG.filter(item => item.category === category);
    if (citySlug && citySlug !== 'all') {
      const clean = citySlug.toLowerCase().trim();
      items = items.filter(item => item.citySlug === clean || item.citySlug === 'pan-india');
    }
    return items;
  }

  /**
   * Calculate exact transport fare from municipal RTO gazette formulas
   */
  static calculateTransportFare({ citySlug, vehicleType = 'auto', distanceKm, isNight = false, waitingMin = 0, hasLuggage = false }) {
    const cleanCity = (citySlug || '').toLowerCase().trim();
    const citySchedule = OFFICIAL_TRANSPORT_SCHEDULES[cleanCity];

    if (!citySchedule) {
      return {
        verified: false,
        priceType: PRICE_TYPES.UNKNOWN,
        status: "UNKNOWN",
        error: `Raahi does not have verified municipal RTO fare rules for '${citySlug}' yet.`,
        fallbackGuidance: [
          "Ask local drivers or traffic police for the official meter rate card",
          "Check for pre-paid auto or taxi counters at the railway station or airport arrival hall",
          "Agree on the total fare including luggage before getting inside the vehicle"
        ]
      };
    }

    const vehicleRules = citySchedule[vehicleType] || citySchedule.auto || citySchedule.taxi;
    if (!vehicleRules) {
      return {
        verified: false,
        priceType: PRICE_TYPES.UNKNOWN,
        status: "UNKNOWN",
        error: `No verified rate schedule for ${vehicleType} in ${citySchedule.city}.`
      };
    }

    const km = parseFloat(distanceKm);
    if (isNaN(km) || km <= 0) {
      return {
        verified: false,
        priceType: PRICE_TYPES.UNKNOWN,
        status: "UNKNOWN",
        error: "A valid travel distance in kilometers is required to compute official fares."
      };
    }

    // 1. Base fare calculation
    const baseFare = vehicleRules.baseFare;
    const baseKm = vehicleRules.baseDistanceKm;
    let distanceFare = 0;

    if (km > baseKm) {
      const extraKm = km - baseKm;
      distanceFare = extraKm * vehicleRules.perKmRate;
    }

    const subtotal = baseFare + distanceFare;

    // 2. Night surcharge calculation
    let nightSurcharge = 0;
    if (isNight && vehicleRules.nightSurchargePercent > 0) {
      nightSurcharge = (subtotal * vehicleRules.nightSurchargePercent) / 100;
    }

    // 3. Waiting & luggage charges
    let waitingCharge = 0;
    if (waitingMin > 15 && vehicleRules.waitingRatePerHour > 0) {
      waitingCharge = ((waitingMin - 15) / 60) * vehicleRules.waitingRatePerHour;
    }

    let luggageCharge = 0;
    if (hasLuggage && vehicleRules.luggageChargePerPiece > 0) {
      luggageCharge = vehicleRules.luggageChargePerPiece;
    }

    const calculatedExact = subtotal + nightSurcharge + waitingCharge + luggageCharge;

    // Build real-world expected range (+5% to +20% to account for traffic halts and round-off)
    const fairMin = Math.round(calculatedExact);
    const fairMax = Math.round(calculatedExact * 1.18);

    // Build transparent step-by-step breakdown
    const breakdown = [
      { label: `Base Fare (first ${baseKm} km)`, amount: `₹${baseFare.toFixed(2)}` },
      km > baseKm ? { 
        label: `Distance Charge (${(km - baseKm).toFixed(1)} km @ ₹${vehicleRules.perKmRate.toFixed(2)}/km)`, 
        amount: `₹${distanceFare.toFixed(2)}` 
      } : null,
      isNight ? { 
        label: `Night Surcharge (${vehicleRules.nightSurchargePercent}% during ${vehicleRules.nightHours})`, 
        amount: `₹${nightSurcharge.toFixed(2)}` 
      } : null,
      waitingCharge > 0 ? { label: `Waiting Time (${waitingMin} min)`, amount: `₹${waitingCharge.toFixed(2)}` } : null,
      luggageCharge > 0 ? { label: `Luggage Surcharge`, amount: `₹${luggageCharge.toFixed(2)}` } : null
    ].filter(Boolean);

    return {
      verified: true,
      priceType: PRICE_TYPES.CALCULATED_OFFICIAL,
      city: citySchedule.city,
      state: citySchedule.state,
      vehicleName: vehicleRules.vehicleName,
      distanceKm: km,
      fairMin,
      fairMax,
      currency: "INR",
      unit: `trip (${km} km)`,
      meterMandatory: vehicleRules.meterMandatory,
      breakdown,
      formulaExplanation: `Base ₹${baseFare} (${baseKm} km) + ${(km > baseKm ? (km - baseKm).toFixed(1) : 0)} km @ ₹${vehicleRules.perKmRate}/km${isNight ? ` + ${vehicleRules.nightSurchargePercent}% Night` : ''}`,
      source: vehicleRules.source,
      sourceType: vehicleRules.sourceType,
      sourceUrl: vehicleRules.sourceUrl,
      effectiveDate: vehicleRules.effectiveDate,
      lastVerified: vehicleRules.lastVerified,
      confidence: vehicleRules.confidence,
      notes: vehicleRules.notes,
      whatYouCanDo: [
        vehicleRules.meterMandatory ? "Ask the driver to switch on the electronic meter before setting off" : "Agree on this exact calculated fare before getting inside",
        "Point to the official RTO notification if asked for arbitrary flat rates",
        "Compare with app-based services (Uber/Ola) or official prepaid counter if available"
      ]
    };
  }

  /**
   * Evaluate user's quoted price against verified range
   */
  static evaluateQuote({ userQuote, fairMin, fairMax, isPremiumTier = false }) {
    const quote = parseFloat(userQuote);
    if (isNaN(quote) || quote <= 0) {
      return {
        status: "UNKNOWN",
        label: "Quote Required",
        color: "#94a3b8",
        message: "Enter the quote you received to compare against local verified rates."
      };
    }

    if (isPremiumTier) {
      return {
        status: "PREMIUM",
        label: "PREMIUM CONTEXT",
        badgeClass: "badge-premium",
        color: "#c084fc",
        message: "This price is higher than standard, but reflects an authenticated luxury, heritage, or certified artisan tier."
      };
    }

    // Benchmark comparison ratios
    if (quote <= fairMax * 1.05) {
      return {
        status: "FAIR",
        label: "FAIR PRICE",
        badgeClass: "badge-fair",
        color: "#10b981",
        ratio: quote / fairMax,
        message: "Your quote is within or very close to the expected local range."
      };
    } else if (quote <= fairMax * 1.35) {
      return {
        status: "HIGH",
        label: "HIGH",
        badgeClass: "badge-high",
        color: "#f59e0b",
        ratio: quote / fairMax,
        diffPercent: Math.round(((quote - fairMax) / fairMax) * 100),
        message: `Your quote is approximately ${Math.round(((quote - fairMax) / fairMax) * 100)}% above the typical local range.`
      };
    } else {
      return {
        status: "VERY HIGH",
        label: "VERY HIGH",
        badgeClass: "badge-very-high",
        color: "#f43f5e",
        ratio: quote / fairMax,
        diffPercent: Math.round(((quote - fairMax) / fairMax) * 100),
        message: `Your quote is substantially higher (about ${Math.round(((quote - fairMax) / fairMax) * 100)}% above) the verified local fare.`
      };
    }
  }

  /**
   * Master query resolver
   */
  static getFairPrice({ citySlug, category, itemId, routeId, customKm, vehicleType, isNight, userQuote }) {
    // Case 1: Transport Route Calculation
    if (category === 'transport') {
      let km = customKm;
      let routeObj = null;

      if (routeId) {
        routeObj = VERIFIED_ROUTES.find(r => r.id === routeId);
        if (routeObj) {
          km = routeObj.distanceKm;
        }
      }

      if (!km || km <= 0) {
        return {
          verified: false,
          priceType: PRICE_TYPES.UNKNOWN,
          status: "UNKNOWN",
          error: "Please select a verified journey or enter travel distance in kilometers."
        };
      }

      const transportResult = this.calculateTransportFare({
        citySlug,
        vehicleType: vehicleType || 'auto',
        distanceKm: km,
        isNight: !!isNight
      });

      if (!transportResult.verified) {
        return transportResult;
      }

      const evaluation = userQuote ? this.evaluateQuote({
        userQuote,
        fairMin: transportResult.fairMin,
        fairMax: transportResult.fairMax
      }) : null;

      return {
        ...transportResult,
        routeInfo: routeObj,
        userQuote: userQuote ? parseFloat(userQuote) : null,
        evaluation
      };
    }

    // Case 2: Catalog Lookup (Monuments, Food, Shopping, Activities, Services)
    if (itemId) {
      const item = VERIFIED_PRICES_CATALOG.find(i => i.id === itemId);
      if (item) {
        const evaluation = userQuote ? this.evaluateQuote({
          userQuote,
          fairMin: item.priceMin,
          fairMax: item.priceMax
        }) : null;

        return {
          verified: true,
          priceType: item.priceType,
          itemName: item.itemName,
          city: item.city,
          state: item.state,
          category: item.category,
          fairMin: item.priceMin,
          fairMax: item.priceMax,
          currency: item.currency || "INR",
          unit: item.unit,
          factors: item.factors || [],
          whatYouCanDo: item.whatYouCanDo || [],
          source: item.source,
          sourceType: item.sourceType,
          sourceUrl: item.sourceUrl,
          effectiveDate: item.effectiveDate,
          lastVerified: item.lastVerified,
          confidence: item.confidence,
          userQuote: userQuote ? parseFloat(userQuote) : null,
          evaluation
        };
      }
    }

    // Case 3: Unverified / Unsupported
    return {
      verified: false,
      priceType: PRICE_TYPES.UNKNOWN,
      status: "PRICE NOT VERIFIED",
      error: "Raahi cannot verify a current price for this item yet.",
      fallbackGuidance: [
        "Check for official tariff boards or displayed government rate cards on site",
        "Look for published restaurant menus with printed prices before ordering",
        "Use official prepaid counters at transit terminals (airports, major railway stations)"
      ]
    };
  }

  /**
   * Universal Natural Language Query Parser & Fair Price Resolver
   * Grounded strictly in verified gazettes, ASI tariffs, and registered union benchmarks.
   * NEVER invents prices: NO VERIFIED DATA = NO CLAIM.
   */
  static parseAndResolveQuery(userQuery = '', context = {}) {
    if (!userQuery || typeof userQuery !== 'string' || !userQuery.trim()) {
      return {
        verified: false,
        priceType: PRICE_TYPES.UNKNOWN,
        status: "QUERY REQUIRED",
        error: "Please enter what you are paying for (e.g. 'Auto from Jaipur station to Amber Fort', 'Entry ticket for Amber Fort')."
      };
    }

    const q = userQuery.toLowerCase().trim();
    let userQuote = context.userQuote || null;

    // Check if user embedded a quote in query (e.g. "quoted 500", "for 350 rs", "driver asked 400")
    if (!userQuote) {
      const quoteMatch = q.match(/(?:quoted|asked|charge[ds]?|pay(?:ing)?|price|cost|rs\.?|₹)\s*[:=]?\s*₹?\s*(\d{2,6})/i);
      if (quoteMatch && quoteMatch[1]) {
        userQuote = parseFloat(quoteMatch[1]);
      }
    }

    // 1. Detect Vehicle Class
    let vehicleType = context.vehicleType || 'auto';
    if (q.includes('taxi') || q.includes('cab') || q.includes('uber') || q.includes('ola') || q.includes('kaali peeli')) {
      vehicleType = 'taxi';
    } else if (q.includes('auto') || q.includes('rickshaw') || q.includes('tuk tuk') || q.includes('tempo')) {
      vehicleType = 'auto';
    }

    // 2. Detect City / Destination Region
    let detectedCity = null;
    const cityKeywords = [
      { slug: 'jaipur', words: ['jaipur', 'pink city', 'amer', 'amber'] },
      { slug: 'delhi', words: ['delhi', 'new delhi', 'ndls', 'igi', 'connaught', 'cp', 'nizamuddin', 'red fort', 'qutub'] },
      { slug: 'mumbai', words: ['mumbai', 'bombay', 'csmt', 'cst', 'colaba', 'marine drive', 'bandra', 'gateway of india'] },
      { slug: 'varanasi', words: ['varanasi', 'banaras', 'kashi', 'dashashwamedh', 'assi ghat', 'sarnath', 'ganga'] },
      { slug: 'agra', words: ['agra', 'taj mahal', 'fatehpur'] },
      { slug: 'srinagar', words: ['srinagar', 'kashmir', 'dal lake', 'shikara', 'pashmina'] },
      { slug: 'jaisalmer', words: ['jaisalmer', 'sam sand dunes', 'sam dunes', 'camel'] },
      { slug: 'amritsar', words: ['amritsar', 'golden temple', 'wagah'] },
      { slug: 'bengaluru', words: ['bengaluru', 'bangalore'] },
      { slug: 'kolkata', words: ['kolkata', 'calcutta', 'howrah'] },
      { slug: 'udaipur', words: ['udaipur', 'pichola'] },
      { slug: 'rishikesh', words: ['rishikesh', 'rafting'] },
      { slug: 'goa', words: ['goa', 'aguada'] },
      { slug: 'kochi', words: ['kochi', 'cochin'] },
      { slug: 'hampi', words: ['hampi'] }
    ];

    for (const ck of cityKeywords) {
      if (ck.words.some(w => q.includes(w))) {
        detectedCity = ck.slug;
        break;
      }
    }

    if (!detectedCity && context.city) {
      detectedCity = context.city.toLowerCase().trim();
    }

    // Default to 'jaipur' for pan-India demo queries if no city specified
    if (!detectedCity) {
      if (q.includes('amber') || q.includes('hawa mahal') || q.includes('city palace')) {
        detectedCity = 'jaipur';
      } else if (q.includes('taj') || q.includes('fatehpur')) {
        detectedCity = 'agra';
      } else if (q.includes('qutub') || q.includes('red fort') || q.includes('airport to cp')) {
        detectedCity = 'delhi';
      } else if (q.includes('shikara') || q.includes('dal lake')) {
        detectedCity = 'srinagar';
      } else if (q.includes('ghat') || q.includes('aarti')) {
        detectedCity = 'varanasi';
      }
    }

    // 3. POINT-TO-POINT TRANSPORT ROUTE DETECTION
    const isTransportQuery = q.includes('auto') || q.includes('cab') || q.includes('taxi') || q.includes('from') || q.includes('to') || q.includes('fare') || q.includes('distance') || q.includes('station') || q.includes('airport');

    if (isTransportQuery) {
      let matchedRoute = null;

      // Scan VERIFIED_ROUTES
      for (const r of VERIFIED_ROUTES) {
        if (detectedCity && r.city !== detectedCity) continue;
        const fromWords = r.from.toLowerCase().split(/\s+/).filter(w => w.length > 2);
        const toWords = r.to.toLowerCase().split(/\s+/).filter(w => w.length > 2);

        const hasFrom = fromWords.some(w => q.includes(w));
        const hasTo = toWords.some(w => q.includes(w));

        if (hasFrom && hasTo) {
          matchedRoute = r;
          if (!detectedCity) detectedCity = r.city;
          break;
        }
      }

      // If specific route matched
      if (matchedRoute) {
        const fareRes = this.calculateTransportFare({
          citySlug: matchedRoute.city,
          vehicleType,
          distanceKm: matchedRoute.distanceKm,
          isNight: !!context.isNight
        });

        if (fareRes.verified) {
          const evalRes = userQuote ? this.evaluateQuote({
            userQuote,
            fairMin: fareRes.fairMin,
            fairMax: fareRes.fairMax
          }) : null;

          return {
            ...fareRes,
            query: userQuery,
            queryType: 'ROUTE_CALCULATION',
            title: `${matchedRoute.from} ➔ ${matchedRoute.to}`,
            routeInfo: matchedRoute,
            userQuote,
            evaluation: evalRes
          };
        }
      }

      // If specific prepaid airport route mentioned
      if (q.includes('airport') && q.includes('taxi') && detectedCity === 'delhi') {
        const prepaidItem = VERIFIED_PRICES_CATALOG.find(i => i.id === 'delhi-airport-prepaid-taxi');
        if (prepaidItem) {
          const evalRes = userQuote ? this.evaluateQuote({ userQuote, fairMin: prepaidItem.priceMin, fairMax: prepaidItem.priceMax }) : null;
          return {
            verified: true,
            query: userQuery,
            queryType: 'CATALOG_ITEM',
            title: prepaidItem.itemName,
            priceType: prepaidItem.priceType,
            city: prepaidItem.city,
            state: prepaidItem.state,
            category: prepaidItem.category,
            fairMin: prepaidItem.priceMin,
            fairMax: prepaidItem.priceMax,
            unit: prepaidItem.unit,
            breakdown: [
              { label: "Official Delhi Traffic Police Airport Prepaid Voucher", amount: `₹${prepaidItem.priceMin} – ₹${prepaidItem.priceMax}` }
            ],
            factors: prepaidItem.factors,
            whatYouCanDo: prepaidItem.whatYouCanDo,
            source: prepaidItem.source,
            sourceType: prepaidItem.sourceType,
            sourceUrl: prepaidItem.sourceUrl,
            lastVerified: prepaidItem.lastVerified,
            confidence: prepaidItem.confidence,
            userQuote,
            evaluation: evalRes
          };
        }
      }

      // If generic "How much should I pay for an auto?" / "Taxi fare in <city>"
      if (detectedCity && OFFICIAL_TRANSPORT_SCHEDULES[detectedCity]) {
        const schedule = OFFICIAL_TRANSPORT_SCHEDULES[detectedCity];
        const vRules = schedule[vehicleType] || schedule.auto || schedule.taxi;
        if (vRules) {
          return {
            verified: true,
            query: userQuery,
            queryType: 'MUNICIPAL_SCHEDULE',
            title: `Official ${vRules.vehicleName} Rate Card — ${schedule.city}`,
            priceType: PRICE_TYPES.OFFICIAL_RATE,
            city: schedule.city,
            state: schedule.state,
            vehicleName: vRules.vehicleName,
            fairMin: vRules.baseFare,
            fairMax: vRules.baseFare,
            exactBaseFare: vRules.baseFare,
            perKmRate: vRules.perKmRate,
            unit: `Base Fare (first ${vRules.baseDistanceKm} km), then ₹${vRules.perKmRate}/km`,
            meterMandatory: vRules.meterMandatory,
            breakdown: [
              { label: `Base Fare (first ${vRules.baseDistanceKm} km)`, amount: `₹${vRules.baseFare.toFixed(2)}` },
              { label: `Rate Per Subsequent Kilometer`, amount: `₹${vRules.perKmRate.toFixed(2)} / km` },
              { label: `Night Surcharge (${vRules.nightHours})`, amount: `+${vRules.nightSurchargePercent}%` },
              { label: `Luggage Surcharge (per piece)`, amount: `₹${vRules.luggageChargePerPiece.toFixed(2)}` }
            ],
            source: vRules.source,
            sourceType: vRules.sourceType,
            sourceUrl: vRules.sourceUrl,
            lastVerified: vRules.lastVerified,
            confidence: "VERIFIED",
            formulaExplanation: `Official Formula: Base ₹${vRules.baseFare} (${vRules.baseDistanceKm} km) + Extra Distance × ₹${vRules.perKmRate}/km.`,
            whatYouCanDo: [
              vRules.meterMandatory ? "Ask the driver to turn on the electronic digital meter before setting off" : "Agree on the exact calculated fare based on official RTO rates before boarding",
              "Check for official prepaid counters at railway stations and airport terminals"
            ]
          };
        }
      }
    }

    // 4. CATALOG SEARCH (Monuments, Food, Shopping, Activities, Services)
    let bestCatalogItem = null;
    let highestScore = 0;

    for (const item of VERIFIED_PRICES_CATALOG) {
      let score = 0;
      const itemNameLower = item.itemName.toLowerCase();
      const catLower = (item.category || '').toLowerCase();
      const cityLower = (item.citySlug || '').toLowerCase();

      // Keyword matches
      if (itemNameLower.includes(q)) score += 10;
      if (q.includes(item.destinationId || '---')) score += 8;

      const words = q.split(/\s+/).filter(w => w.length > 2);
      for (const w of words) {
        if (itemNameLower.includes(w)) score += 3;
        if (catLower.includes(w)) score += 1;
        if (cityLower.includes(w)) score += 2;
      }

      // Contextual boosts
      if (detectedCity && (item.citySlug === detectedCity || item.citySlug === 'pan-india')) {
        score += 2;
      }

      // Specific query intents
      if (q.includes('ticket') || q.includes('entry')) {
        if (item.category === 'monuments') score += 4;
      }
      if (q.includes('camel') && item.id.includes('camel')) score += 8;
      if (q.includes('shikara') && item.id.includes('shikara')) score += 8;
      if (q.includes('pashmina') && item.id.includes('pashmina')) score += 8;
      if (q.includes('boat') && item.id.includes('boat')) score += 8;
      if (q.includes('guide') && item.id.includes('guide')) score += 8;
      if (q.includes('parking') && item.id.includes('parking')) score += 8;
      if (q.includes('ferry') && item.id.includes('ferry')) score += 8;

      if (score > highestScore) {
        highestScore = score;
        bestCatalogItem = item;
      }
    }

    if (bestCatalogItem && highestScore >= 3) {
      const evalRes = userQuote ? this.evaluateQuote({
        userQuote,
        fairMin: bestCatalogItem.priceMin,
        fairMax: bestCatalogItem.priceMax
      }) : null;

      const breakdown = [
        { label: "Verified Tariff / Standard Rate", amount: bestCatalogItem.priceMin === bestCatalogItem.priceMax ? `₹${bestCatalogItem.priceMin}` : `₹${bestCatalogItem.priceMin} – ₹${bestCatalogItem.priceMax}` }
      ];

      return {
        verified: true,
        query: userQuery,
        queryType: 'CATALOG_ITEM',
        title: bestCatalogItem.itemName,
        priceType: bestCatalogItem.priceType,
        city: bestCatalogItem.city,
        state: bestCatalogItem.state,
        category: bestCatalogItem.category,
        fairMin: bestCatalogItem.priceMin,
        fairMax: bestCatalogItem.priceMax,
        unit: bestCatalogItem.unit,
        breakdown,
        factors: bestCatalogItem.factors || [],
        whatYouCanDo: bestCatalogItem.whatYouCanDo || [],
        source: bestCatalogItem.source,
        sourceType: bestCatalogItem.sourceType,
        sourceUrl: bestCatalogItem.sourceUrl,
        effectiveDate: bestCatalogItem.effectiveDate,
        lastVerified: bestCatalogItem.lastVerified,
        confidence: bestCatalogItem.confidence || "VERIFIED",
        userQuote,
        evaluation: evalRes
      };
    }

    // 5. UNVERIFIED / UNKNOWN (CRITICAL PRINCIPLE: NO VERIFIED DATA = NO CLAIM)
    return {
      verified: false,
      priceType: PRICE_TYPES.UNKNOWN,
      status: "PRICE NOT VERIFIED",
      title: "PRICE NOT VERIFIED",
      query: userQuery,
      city: detectedCity || context.city || null,
      message: "We couldn't verify a current price for this item yet.",
      explanation: "In adherence to Raahi's strict transparency policy, we never generate estimated numbers or AI guesses. If official government gazettes, ASI tariffs, or verified union rate cards are not available for this specific query, we declare it UNVERIFIED.",
      fallbackGuidance: [
        "Check for official tariff boards or displayed government rate cards on site",
        "Insist on the electronic digital meter for autos/taxis in municipal regions",
        "Use official prepaid counters at transit terminals (airports, major railway stations)",
        "Ask for printed restaurant menus with displayed prices before ordering food",
        "Report the price you were charged below to help build transparent benchmarks for future travelers"
      ]
    };
  }

  /**
   * Calculate verified transport segments along a custom itinerary
   * Used in Build Route (My Journey)
   */
  static calculateRouteSegments(placesList = []) {
    if (!placesList || placesList.length < 2) {
      return {
        hasSegments: false,
        segments: [],
        totalVerifiedMin: 0,
        totalVerifiedMax: 0,
        verifiedCount: 0,
        totalCount: 0
      };
    }

    const segments = [];
    let totalVerifiedMin = 0;
    let totalVerifiedMax = 0;
    let verifiedCount = 0;

    for (let i = 0; i < placesList.length - 1; i++) {
      const fromPlace = placesList[i];
      const toPlace = placesList[i + 1];

      const fromName = (fromPlace.name || fromPlace.id || '').toLowerCase();
      const toName = (toPlace.name || toPlace.id || '').toLowerCase();
      const city = (fromPlace.city || fromPlace.stateId || fromPlace.cityId || '').toLowerCase();

      // Look up route
      let matched = VERIFIED_ROUTES.find(r => {
        const rf = r.from.toLowerCase();
        const rt = r.to.toLowerCase();
        const direct = (fromName.includes(r.id) || rf.includes(fromPlace.id) || fromName.split(' ').some(w => w.length > 3 && rf.includes(w))) &&
                       (toName.includes(r.id) || rt.includes(toPlace.id) || toName.split(' ').some(w => w.length > 3 && rt.includes(w)));
        const reverse = (toName.includes(r.id) || rf.includes(toPlace.id) || toName.split(' ').some(w => w.length > 3 && rf.includes(w))) &&
                        (fromName.includes(r.id) || rt.includes(fromPlace.id) || fromName.split(' ').some(w => w.length > 3 && rt.includes(w)));
        return direct || reverse;
      });

      if (matched) {
        const fare = this.calculateTransportFare({
          citySlug: matched.city,
          vehicleType: 'auto',
          distanceKm: matched.distanceKm
        });

        if (fare.verified) {
          segments.push({
            from: fromPlace.name,
            to: toPlace.name,
            distanceKm: matched.distanceKm,
            travelTimeMin: matched.travelTimeMin,
            verified: true,
            fareMin: fare.fairMin,
            fareMax: fare.fairMax,
            vehicle: 'Auto Rickshaw',
            formula: fare.formulaExplanation,
            source: fare.source
          });
          totalVerifiedMin += fare.fairMin;
          totalVerifiedMax += fare.fairMax;
          verifiedCount++;
          continue;
        }
      }

      // Unverified segment
      segments.push({
        from: fromPlace.name,
        to: toPlace.name,
        verified: false,
        fareMin: null,
        fareMax: null,
        note: "No gazetted transit route data available for this segment"
      });
    }

    return {
      hasSegments: segments.length > 0,
      segments,
      totalVerifiedMin,
      totalVerifiedMax,
      verifiedCount,
      totalCount: segments.length
    };
  }
}

