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
      status: "UNKNOWN",
      error: "Raahi cannot verify a current price for this item yet.",
      fallbackGuidance: [
        "Check for official tariff boards or displayed government rate cards on site",
        "Look for published restaurant menus with printed prices before ordering",
        "Use official prepaid counters at transit terminals (airports, major railway stations)"
      ]
    };
  }
}
