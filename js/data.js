/**
 * RAAHI // Centralized Data Architecture
 * National Tourism Discovery Platform
 * State -> City -> Place -> Experience Hierarchy
 * Travel Intelligence & Geographically Verified Photography
 */

export const RAAHI_DATA = {
  "states": {
    "rajasthan": {
      "id": "rajasthan",
      "name": "Rajasthan",
      "eyebrow": "ROYAL • DESERT • HERITAGE",
      "tagline": "Forts, palaces, desert landscapes and living traditions.",
      "heroImage": "assets/images/destinations/amber-fort.jpg",
      "accentColor": "#d5b56f",
      "story": "Rajasthan is a land forged by royalty, chivalry, and desert winds. Across the arid expanse of the Thar Desert rise monumental sandstone citadels, gilded palaces, and vibrant medieval bazaars. Here, every stone tells a story of courage, intricate craftsmanship, and timeless hospitality.",
      "quickStats": {
        "citiesCount": 5,
        "placesCount": 42,
        "bestTime": "October to March",
        "capital": "Jaipur",
        "language": "Hindi, Rajasthani, Marwari"
      },
      "cities": [
        "jaipur",
        "jaisalmer",
        "udaipur",
        "jodhpur",
        "pushkar"
      ],
      "experiences": [
        {
          "title": "Royal Night Astronomy on Nahargarh Ridge",
          "desc": "Observe constellations from medieval battlements overlooking the glowing grid of Jaipur.",
          "tag": "Astronomy & Vistas"
        },
        {
          "title": "Master Hand-Block Printing in Bagru",
          "desc": "Work alongside 5th-generation master printers using natural vegetable and indigo dyes.",
          "tag": "Artisan Workshop"
        },
        {
          "title": "Dunes Twilight Camping in Sam Sand Dunes",
          "desc": "Listen to Manganiyar folk ballads around a desert hearth under pristine starry skies.",
          "tag": "Desert Immersion"
        }
      ],
      "food": [
        {
          "name": "Dal Baati Churma",
          "desc": "Baked wheat dough balls dipped in pure desi ghee, served with spiced mixed lentils and sweetened crushed grain churma.",
          "region": "All Rajasthan"
        },
        {
          "name": "Laal Maas",
          "desc": "A fiery heritage royal curry prepared with Mathania dry red chillies and slow-cooked tender meat or paneer.",
          "region": "Marwar / Mewar"
        },
        {
          "name": "Ghevar & Pyaaz Kachori",
          "desc": "Disc-shaped honeycomb sweet soaked in saffron syrup, paired with crisp flaky onion pastries.",
          "region": "Jaipur"
        }
      ],
      "culture": {
        "crafts": "Blue Pottery, Handloom Block Prints, Kundan Jewelry, Leather Juttis",
        "festivals": "Pushkar Camel Fair, Desert Festival Jaisalmer, Teej Jaipur",
        "music": "Manganiyar & Langa folk ragas, Kamaycha and Morchang instruments"
      },
      "travelInfo": {
        "airports": "Jaipur International (JAI), Udaipur (UDR), Jodhpur (JDH)",
        "railways": "Extensive Superfast Shatabdi & Palace on Wheels connectivity",
        "seasonTips": "Carry warm layers for desert winter nights (5°C) and light cottons for sunny days (24°C)."
      }
    },
    "kerala": {
      "id": "kerala",
      "name": "Kerala",
      "eyebrow": "BACKWATERS • SPICES • COASTAL",
      "tagline": "Lush waterways, tranquil lagoons, spice-laden hills and ancient Ayurveda.",
      "heroImage": "assets/images/destinations/alleppey-backwaters.jpg",
      "accentColor": "#10b981",
      "story": "Known as God's Own Country, Kerala is a tropical tapestry where emerald lagoons interlace with misty Western Ghats tea estates, pristine Arabian Sea coastlines, and centuries-old Ayurvedic traditions.",
      "quickStats": {
        "citiesCount": 5,
        "placesCount": 38,
        "bestTime": "September to March",
        "capital": "Thiruvananthapuram",
        "language": "Malayalam, English"
      },
      "cities": [
        "kochi",
        "munnar",
        "alappuzha",
        "varkala",
        "thekkady"
      ],
      "experiences": [
        {
          "title": "Dawn Canoe Glide Through Village Waterways",
          "desc": "Navigate quiet backwater estuaries before motorized boats awake, observing rare kingfishers.",
          "tag": "Eco Backwaters"
        },
        {
          "title": "Cardamom & Black Pepper Plantation Foraging",
          "desc": "Walk through organic spice gardens with master planters in the heights of Kumily.",
          "tag": "Botanical Journey"
        },
        {
          "title": "Kathakali Makeup & Performance Mastery",
          "desc": "Witness the painstaking 3-hour natural herbal facial makeup ritual followed by dynamic classical drama.",
          "tag": "Classical Theatre"
        }
      ],
      "food": [
        {
          "name": "Kerala Sadya on Banana Leaf",
          "desc": "A grand vegetarian feast of 24+ dishes including Avial, Sambar, Thoran, and sweet Payasam served on fresh banana leaves.",
          "region": "All Kerala"
        },
        {
          "name": "Karimeen Pollichathu",
          "desc": "Fresh pearl spot fish marinated in spicy shallot paste, wrapped in a charred banana leaf and slow-steamed.",
          "region": "Backwaters"
        },
        {
          "name": "Appam with Vegetable Stew",
          "desc": "Lace-edged fermented rice pancakes paired with creamy, fragrant coconut milk and vegetable stew.",
          "region": "Central Kerala"
        }
      ],
      "culture": {
        "crafts": "Aranmula Metal Mirrors, Coir Handloom, Coconut Shell Carvings, Kasavu Weaves",
        "festivals": "Onam Boat Races (Vallam Kali), Thrissur Pooram, Vishu",
        "music": "Chenda Melam percussion ensembles, Sopana Sangeetham"
      },
      "travelInfo": {
        "airports": "Cochin International (COK), Trivandrum (TRV), Calicut (CCJ)",
        "railways": "Coastal trunk railway lines connecting all major towns",
        "seasonTips": "Monsoon (June–August) is ideal for traditional Ayurvedic wellness treatments; winters are pleasant for beach and backwaters."
      }
    },
    "himachal-pradesh": {
      "id": "himachal-pradesh",
      "name": "Himachal Pradesh",
      "eyebrow": "HIMALAYAS • FORESTS • VALLEYS",
      "tagline": "Snow peaks, deodar valleys, remote mountain passes and timeless monasteries.",
      "heroImage": "assets/images/destinations/key-monastery.jpg",
      "accentColor": "#38bdf8",
      "story": "Himachal Pradesh is a sanctuary of the high Himalayas. From the British colonial cedar ridges of Shimla to the trans-Himalayan moonscapes of Spiti and the tranquil apple orchards of Kullu, it invites travelers to slow down and breathe deep mountain air.",
      "quickStats": {
        "citiesCount": 5,
        "placesCount": 36,
        "bestTime": "March to June & Dec to Feb for Snow",
        "capital": "Shimla (Summer), Dharamshala (Winter)",
        "language": "Hindi, Pahari, Kangri"
      },
      "cities": [
        "shimla",
        "manali",
        "dharamshala",
        "spiti-valley",
        "kasol"
      ],
      "experiences": [
        {
          "title": "Heritage Kalka-Shimla Toy Train Journey",
          "desc": "Traverse 102 tunnels and stone arch bridges on a UNESCO World Heritage narrow-gauge railway.",
          "tag": "Heritage Rail"
        },
        {
          "title": "High-Altitude Stargazing at Kaza & Kibber",
          "desc": "Observe the crystal-clear Milky Way core with near-zero light pollution in the trans-Himalayas.",
          "tag": "Astrophotography"
        },
        {
          "title": "Apple Harvest & Cider Pressing in Kinnaur",
          "desc": "Experience orchard life alongside local farming families during the autumn harvest.",
          "tag": "Agro Immersion"
        }
      ],
      "food": [
        {
          "name": "Himachali Dham",
          "desc": "A traditional festive feast cooked in brass vessels by master Botis, featuring Madra, Mah Dal, and Khatta.",
          "region": "Mandi / Kangra"
        },
        {
          "name": "Siddu with Ghee",
          "desc": "Steamed wheat flour bread stuffed with poppy seeds, walnuts, and mountain herbs, served with melted pure desi ghee.",
          "region": "Kullu / Shimla"
        },
        {
          "name": "Freshwater River Trout",
          "desc": "Pan-seared freshwater Himalayan river trout seasoned with mountain garlic and local mustard oil.",
          "region": "Tirthan / Manali"
        }
      ],
      "culture": {
        "crafts": "Kullu Woolen Shawls, Chamba Rumal Embroidery, Kangra Miniature Paintings, Wood Carvings",
        "festivals": "Kullu Dussehra, Losar Tibetan New Year, Minjar Fair",
        "music": "Nati folk dances, Dhol-Nagara ceremonial rhythms"
      },
      "travelInfo": {
        "airports": "Kullu-Manali (KUU), Kangra (DHM), Shimla (SLV)",
        "railways": "Broad gauge up to Chandigarh and Kalka; narrow-gauge onward",
        "seasonTips": "Carry heavy down jackets in winter; during monsoon, check mountain highway advisories for landslide updates."
      }
    },
    "goa": {
      "id": "goa",
      "name": "Goa",
      "eyebrow": "COASTAL • HERITAGE • TROPICAL",
      "tagline": "Golden shores, Portuguese baroque architecture, spice farms and soulful village life.",
      "heroImage": "assets/images/destinations/fort-aguada.jpg",
      "accentColor": "#f59e0b",
      "story": "Goa is India's sun-drenched coastal sanctuary where Konkani soul interweaves with 450 years of Indo-Portuguese heritage. Beyond the famous beaches lie tranquil backwater estuaries, whitewashed Baroque basilicas, and aromatic spice plantations.",
      "quickStats": {
        "citiesCount": 5,
        "placesCount": 35,
        "bestTime": "November to March",
        "capital": "Panaji",
        "language": "Konkani, English, Marathi, Portuguese"
      },
      "cities": [
        "panaji",
        "old-goa",
        "palolem",
        "anjuna",
        "vagator"
      ],
      "experiences": [
        {
          "title": "Heritage Architectural Walk in Fontainhas",
          "desc": "Discover hidden courtyard bakeries, tile-painting azulejo ateliers, and vintage Indo-Portuguese mansions.",
          "tag": "Heritage Walk"
        },
        {
          "title": "Organic Spice Plantation & Feni Distillation Tour",
          "desc": "Learn the ancient pot-still cashew feni fermentation craft and savor home-cooked Goan Saraswat meals.",
          "tag": "Culinary Heritage"
        },
        {
          "title": "Mangrove Kayaking in the Mandovi Delta",
          "desc": "Paddle quietly through brackish mangrove forests observing otters, marsh crocodiles, and migratory birds.",
          "tag": "Eco Kayaking"
        }
      ],
      "food": [
        {
          "name": "Goan Fish Curry Rice",
          "desc": "Fresh kingfish or pomfret simmered in ground coconut, spicy Kashmiri chillies, and tangy dried Kokum.",
          "region": "Coastal Goa"
        },
        {
          "name": "Mushroom Xacuti",
          "desc": "A complex slow-cooked curry infused with roasted coconut, poppy seeds, star anise, and 18 spices.",
          "region": "Central Goa"
        },
        {
          "name": "Bebinca & Poee Bread",
          "desc": "Traditional seven-layered coconut milk pudding, paired with crusty Goan wholewheat pocket bread.",
          "region": "Old Goa / Panaji"
        }
      ],
      "culture": {
        "crafts": "Azulejos Ceramic Tiles, Kunbi Sarees, Terracotta Pottery, Brass Lamps",
        "festivals": "Goa Carnival, Sao Joao River Festival, Shigmo Spring Dance",
        "music": "Fado ballads, Mando romantic folk songs, Dulpod rhythms"
      },
      "travelInfo": {
        "airports": "Manohar International Airport Mopa (GOX), Dabolim Airport (GOI)",
        "railways": "Madgaon (MAO) and Thivim (THVM) connected via Konkan Railway",
        "seasonTips": "Renting a scooter or electric bicycle is the best way to explore coastal villages and heritage back-lanes."
      }
    },
    "uttar-pradesh": {
      "id": "uttar-pradesh",
      "name": "Uttar Pradesh",
      "eyebrow": "SACRED • MONUMENTS • LIVING CULTURE",
      "tagline": "The eternal ghats of the Ganga, Mughal masterpieces, and sacred pilgrim corridors.",
      "heroImage": "assets/images/destinations/taj-mahal.jpg",
      "accentColor": "#e05a47",
      "story": "Uttar Pradesh is the cultural heartland of northern India. It cradles millennia of philosophy along the sacred banks of the Ganges, the monumental Mughal granduer of Agra, the refined Awadhi culinary arts of Lucknow, and timeless pilgrimage routes.",
      "quickStats": {
        "citiesCount": 5,
        "placesCount": 40,
        "bestTime": "October to March",
        "capital": "Lucknow",
        "language": "Hindi, Urdu, Awadhi, Bhojpuri"
      },
      "cities": [
        "agra",
        "varanasi",
        "lucknow",
        "ayodhya",
        "mathura"
      ],
      "experiences": [
        {
          "title": "Subah-e-Banaras Dawn Boat Ride",
          "desc": "Glide along the misty Ganga at 5:30 AM as sacred chants, flute melodies, and temple bells greet the morning sun.",
          "tag": "Spiritual Dawn"
        },
        {
          "title": "Master Banarasi Zari & Silk Weaving Atelier",
          "desc": "Watch master weavers create exquisite gold-brocaded Katan silk sarees on century-old wooden pit looms.",
          "tag": "Master Artisan"
        },
        {
          "title": "Lucknowi Dastarkhwan Heritage Culinary Walk",
          "desc": "Taste melting Galouti kebabs and slow-dum fragrant Awadhi biryani crafted by 4th-generation Khansamas in Chowk.",
          "tag": "Culinary Masterclass"
        }
      ],
      "food": [
        {
          "name": "Galouti Kebab with Ulte Tawe Ka Paratha",
          "desc": "Silken, finely minced patties infused with 160+ secret spices that melt on the tongue.",
          "region": "Lucknow"
        },
        {
          "name": "Banarasi Kachori Jalebi & Malaiyo",
          "desc": "Spiced lentil puris paired with hot jalebis and seasonal winter saffron milk-froth dessert (Malaiyo).",
          "region": "Varanasi"
        },
        {
          "name": "Petha of Agra (Angoori & Kesar)",
          "desc": "Translucent ash-gourd confection flavored with saffron, rose water, and kewra essence.",
          "region": "Agra"
        }
      ],
      "culture": {
        "crafts": "Chikan & Zardozi Embroidery, Banarasi Silk, Marble Inlay (Pietra Dura), Brassware",
        "festivals": "Dev Deepawali Varanasi, Ganga Mahotsav, Taj Mahotsav Agra",
        "music": "Benares Gharana classical tabla and thumri, Kathak classical dance"
      },
      "travelInfo": {
        "airports": "Lucknow (LKO), Varanasi (VNS), Ayodhya (AYJ), Agra (AGR)",
        "railways": "Vande Bharat Express & Gatimaan Express connecting New Delhi in under 2 hours",
        "seasonTips": "Visit during Dev Deepawali (full moon after Diwali) to witness a million earthen oil lamps illuminating Varanasi ghats."
      }
    }
  },
  "cities": {
    "jaipur": {
      "id": "jaipur",
      "stateId": "rajasthan",
      "stateName": "Rajasthan",
      "name": "Jaipur",
      "tagline": "The Royal Pink City & Fortress Ridge",
      "heroImage": "assets/images/destinations/hawa-mahal.jpg",
      "description": "Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India’s first planned city, renowned for its symmetrical terracotta grid, hill fortresses, and vibrant bazaars.",
      "places": [
        "amber-fort",
        "city-palace-jaipur",
        "hawa-mahal",
        "jantar-mantar",
        "jal-mahal",
        "nahargarh-fort",
        "jaigarh-fort",
        "albert-hall",
        "patrika-gate",
        "panna-meena"
      ],
      "idealDuration": "3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "amber-fort",
          "city-palace-jaipur",
          "hawa-mahal",
          "jantar-mantar"
        ],
        "food": [
          "city-palace-jaipur",
          "hawa-mahal",
          "jantar-mantar"
        ],
        "adventure": [
          "hawa-mahal",
          "jantar-mantar",
          "jal-mahal"
        ],
        "relaxation": [
          "jantar-mantar",
          "jal-mahal",
          "nahargarh-fort"
        ],
        "culture": [
          "amber-fort",
          "city-palace-jaipur",
          "hawa-mahal"
        ],
        "photography": [
          "amber-fort",
          "city-palace-jaipur",
          "hawa-mahal",
          "jantar-mantar"
        ],
        "family": [
          "amber-fort",
          "city-palace-jaipur",
          "hawa-mahal"
        ],
        "couples": [
          "city-palace-jaipur",
          "hawa-mahal",
          "jantar-mantar"
        ],
        "budget": [
          "hawa-mahal",
          "jantar-mantar",
          "jal-mahal"
        ],
        "luxury": [
          "amber-fort",
          "city-palace-jaipur"
        ],
        "hidden_gems": [
          "jantar-mantar",
          "jal-mahal",
          "nahargarh-fort",
          "jaigarh-fort",
          "albert-hall",
          "patrika-gate",
          "panna-meena"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Jaipur (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "AMBER FORT",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "CITY PALACE JAIPUR",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "HAWA MAHAL",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Jaipur Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "AMBER FORT",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "CITY PALACE JAIPUR",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "HAWA MAHAL",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "JANTAR MANTAR",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "JAL MAHAL",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Jaipur Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "AMBER FORT",
                "CITY PALACE JAIPUR",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "HAWA MAHAL",
                "JANTAR MANTAR",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "JAL MAHAL",
                "NAHARGARH FORT",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "jaisalmer": {
      "id": "jaisalmer",
      "stateId": "rajasthan",
      "stateName": "Rajasthan",
      "name": "Jaisalmer",
      "tagline": "The Golden Citadel of the Thar Desert",
      "heroImage": "assets/images/destinations/jaisalmer-fort.jpg",
      "description": "Rising from the heart of the Great Indian Desert, Jaisalmer is a yellow sandstone jewel crowned by its living medieval hilltop fortress.",
      "places": [
        "jaisalmer-fort",
        "patwon-ki-haveli",
        "salim-singh-haveli",
        "gadisar-lake",
        "bada-bagh",
        "sam-sand-dunes",
        "kuldhara-abandoned-village",
        "desert-national-park"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "jaisalmer-fort",
          "patwon-ki-haveli",
          "salim-singh-haveli",
          "gadisar-lake"
        ],
        "food": [
          "patwon-ki-haveli",
          "salim-singh-haveli",
          "gadisar-lake"
        ],
        "adventure": [
          "salim-singh-haveli",
          "gadisar-lake",
          "bada-bagh"
        ],
        "relaxation": [
          "gadisar-lake",
          "bada-bagh",
          "sam-sand-dunes"
        ],
        "culture": [
          "jaisalmer-fort",
          "patwon-ki-haveli",
          "salim-singh-haveli"
        ],
        "photography": [
          "jaisalmer-fort",
          "patwon-ki-haveli",
          "salim-singh-haveli",
          "gadisar-lake"
        ],
        "family": [
          "jaisalmer-fort",
          "patwon-ki-haveli",
          "salim-singh-haveli"
        ],
        "couples": [
          "patwon-ki-haveli",
          "salim-singh-haveli",
          "gadisar-lake"
        ],
        "budget": [
          "salim-singh-haveli",
          "gadisar-lake",
          "bada-bagh"
        ],
        "luxury": [
          "jaisalmer-fort",
          "patwon-ki-haveli"
        ],
        "hidden_gems": [
          "gadisar-lake",
          "bada-bagh",
          "sam-sand-dunes",
          "kuldhara-abandoned-village",
          "desert-national-park"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Jaisalmer (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "JAISALMER FORT",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "PATWON KI HAVELI",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "SALIM SINGH HAVELI",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Jaisalmer Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "JAISALMER FORT",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "PATWON KI HAVELI",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "SALIM SINGH HAVELI",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "GADISAR LAKE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "BADA BAGH",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Jaisalmer Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "JAISALMER FORT",
                "PATWON KI HAVELI",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "SALIM SINGH HAVELI",
                "GADISAR LAKE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "BADA BAGH",
                "SAM SAND DUNES",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "udaipur": {
      "id": "udaipur",
      "stateId": "rajasthan",
      "stateName": "Rajasthan",
      "name": "Udaipur",
      "tagline": "The City of Lakes & Marble Water Palaces",
      "heroImage": "assets/images/destinations/city-palace-udaipur.jpg",
      "description": "Set amidst the Aravalli hills around four interconnected freshwater lakes, Udaipur is celebrated for its floating palaces and romantic sunsets.",
      "places": [
        "city-palace-udaipur",
        "lake-pichola",
        "jag-mandir",
        "jagdish-temple",
        "saheliyon-ki-bari",
        "monsoon-palace",
        "bagore-ki-haveli",
        "fateh-sagar-lake"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "city-palace-udaipur",
          "lake-pichola",
          "jag-mandir",
          "jagdish-temple"
        ],
        "food": [
          "lake-pichola",
          "jag-mandir",
          "jagdish-temple"
        ],
        "adventure": [
          "jag-mandir",
          "jagdish-temple",
          "saheliyon-ki-bari"
        ],
        "relaxation": [
          "jagdish-temple",
          "saheliyon-ki-bari",
          "monsoon-palace"
        ],
        "culture": [
          "city-palace-udaipur",
          "lake-pichola",
          "jag-mandir"
        ],
        "photography": [
          "city-palace-udaipur",
          "lake-pichola",
          "jag-mandir",
          "jagdish-temple"
        ],
        "family": [
          "city-palace-udaipur",
          "lake-pichola",
          "jag-mandir"
        ],
        "couples": [
          "lake-pichola",
          "jag-mandir",
          "jagdish-temple"
        ],
        "budget": [
          "jag-mandir",
          "jagdish-temple",
          "saheliyon-ki-bari"
        ],
        "luxury": [
          "city-palace-udaipur",
          "lake-pichola"
        ],
        "hidden_gems": [
          "jagdish-temple",
          "saheliyon-ki-bari",
          "monsoon-palace",
          "bagore-ki-haveli",
          "fateh-sagar-lake"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Udaipur (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "CITY PALACE UDAIPUR",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "LAKE PICHOLA",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "JAG MANDIR",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Udaipur Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "CITY PALACE UDAIPUR",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "LAKE PICHOLA",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "JAG MANDIR",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "JAGDISH TEMPLE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "SAHELIYON KI BARI",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Udaipur Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "CITY PALACE UDAIPUR",
                "LAKE PICHOLA",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "JAG MANDIR",
                "JAGDISH TEMPLE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "SAHELIYON KI BARI",
                "MONSOON PALACE",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "jodhpur": {
      "id": "jodhpur",
      "stateId": "rajasthan",
      "stateName": "Rajasthan",
      "name": "Jodhpur",
      "tagline": "The Sun City Beneath the Blue Fortress",
      "heroImage": "assets/images/destinations/mehrangarh-fort.jpg",
      "description": "Guarded by the colossal ramparts of Mehrangarh Fort, Jodhpur unfolds as a labyrinth of indigo-painted cubic houses and spice markets.",
      "places": [
        "mehrangarh-fort",
        "jaswant-thada",
        "umaid-bhawan-palace",
        "mandore-gardens",
        "toorji-ka-jhalra",
        "clock-tower-sardar-market",
        "rao-jodha-park",
        "kaylana-lake"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "mehrangarh-fort",
          "jaswant-thada",
          "umaid-bhawan-palace",
          "mandore-gardens"
        ],
        "food": [
          "jaswant-thada",
          "umaid-bhawan-palace",
          "mandore-gardens"
        ],
        "adventure": [
          "umaid-bhawan-palace",
          "mandore-gardens",
          "toorji-ka-jhalra"
        ],
        "relaxation": [
          "mandore-gardens",
          "toorji-ka-jhalra",
          "clock-tower-sardar-market"
        ],
        "culture": [
          "mehrangarh-fort",
          "jaswant-thada",
          "umaid-bhawan-palace"
        ],
        "photography": [
          "mehrangarh-fort",
          "jaswant-thada",
          "umaid-bhawan-palace",
          "mandore-gardens"
        ],
        "family": [
          "mehrangarh-fort",
          "jaswant-thada",
          "umaid-bhawan-palace"
        ],
        "couples": [
          "jaswant-thada",
          "umaid-bhawan-palace",
          "mandore-gardens"
        ],
        "budget": [
          "umaid-bhawan-palace",
          "mandore-gardens",
          "toorji-ka-jhalra"
        ],
        "luxury": [
          "mehrangarh-fort",
          "jaswant-thada"
        ],
        "hidden_gems": [
          "mandore-gardens",
          "toorji-ka-jhalra",
          "clock-tower-sardar-market",
          "rao-jodha-park",
          "kaylana-lake"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Jodhpur (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "MEHRANGARH FORT",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "JASWANT THADA",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "UMAID BHAWAN PALACE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Jodhpur Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "MEHRANGARH FORT",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "JASWANT THADA",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "UMAID BHAWAN PALACE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "MANDORE GARDENS",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "TOORJI KA JHALRA",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Jodhpur Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "MEHRANGARH FORT",
                "JASWANT THADA",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "UMAID BHAWAN PALACE",
                "MANDORE GARDENS",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "TOORJI KA JHALRA",
                "CLOCK TOWER SARDAR MARKET",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "pushkar": {
      "id": "pushkar",
      "stateId": "rajasthan",
      "stateName": "Rajasthan",
      "name": "Pushkar",
      "tagline": "The Sacred Lotus Lake & Brahma Sanctuary",
      "heroImage": "assets/images/destinations/bada-bagh.jpg",
      "description": "A tranquil pilgrimage town encircled by sand dunes and 52 sacred bathing ghats, home to one of the world’s few temples dedicated to Lord Brahma.",
      "places": [
        "pushkar-lake",
        "brahma-temple",
        "savitri-temple",
        "varaha-temple",
        "pushkar-bazaar",
        "man-mahal"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "pushkar-lake",
          "brahma-temple",
          "savitri-temple",
          "varaha-temple"
        ],
        "food": [
          "brahma-temple",
          "savitri-temple",
          "varaha-temple"
        ],
        "adventure": [
          "savitri-temple",
          "varaha-temple",
          "pushkar-bazaar"
        ],
        "relaxation": [
          "varaha-temple",
          "pushkar-bazaar",
          "man-mahal"
        ],
        "culture": [
          "pushkar-lake",
          "brahma-temple",
          "savitri-temple"
        ],
        "photography": [
          "pushkar-lake",
          "brahma-temple",
          "savitri-temple",
          "varaha-temple"
        ],
        "family": [
          "pushkar-lake",
          "brahma-temple",
          "savitri-temple"
        ],
        "couples": [
          "brahma-temple",
          "savitri-temple",
          "varaha-temple"
        ],
        "budget": [
          "savitri-temple",
          "varaha-temple",
          "pushkar-bazaar"
        ],
        "luxury": [
          "pushkar-lake",
          "brahma-temple"
        ],
        "hidden_gems": [
          "varaha-temple",
          "pushkar-bazaar",
          "man-mahal"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Pushkar (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "PUSHKAR LAKE",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "BRAHMA TEMPLE",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "SAVITRI TEMPLE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Pushkar Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "PUSHKAR LAKE",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "BRAHMA TEMPLE",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "SAVITRI TEMPLE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "VARAHA TEMPLE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "PUSHKAR BAZAAR",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Pushkar Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "PUSHKAR LAKE",
                "BRAHMA TEMPLE",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "SAVITRI TEMPLE",
                "VARAHA TEMPLE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "PUSHKAR BAZAAR",
                "MAN MAHAL",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "kochi": {
      "id": "kochi",
      "stateId": "kerala",
      "stateName": "Kerala",
      "name": "Kochi",
      "tagline": "The Queen of the Arabian Sea & Historic Spice Port",
      "heroImage": "assets/images/destinations/alleppey-backwaters.jpg",
      "description": "A cosmopolitan coastal city where 600 years of global maritime trade have blended Portuguese, Dutch, British, and Chinese architectural heritages.",
      "places": [
        "fort-kochi-beach",
        "chinese-fishing-nets",
        "mattancherry-palace",
        "jew-town-synagogue",
        "st-francis-church",
        "kerala-kathakali-centre",
        "marine-drive-kochi",
        "bolgatty-palace"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "fort-kochi-beach",
          "chinese-fishing-nets",
          "mattancherry-palace",
          "jew-town-synagogue"
        ],
        "food": [
          "chinese-fishing-nets",
          "mattancherry-palace",
          "jew-town-synagogue"
        ],
        "adventure": [
          "mattancherry-palace",
          "jew-town-synagogue",
          "st-francis-church"
        ],
        "relaxation": [
          "jew-town-synagogue",
          "st-francis-church",
          "kerala-kathakali-centre"
        ],
        "culture": [
          "fort-kochi-beach",
          "chinese-fishing-nets",
          "mattancherry-palace"
        ],
        "photography": [
          "fort-kochi-beach",
          "chinese-fishing-nets",
          "mattancherry-palace",
          "jew-town-synagogue"
        ],
        "family": [
          "fort-kochi-beach",
          "chinese-fishing-nets",
          "mattancherry-palace"
        ],
        "couples": [
          "chinese-fishing-nets",
          "mattancherry-palace",
          "jew-town-synagogue"
        ],
        "budget": [
          "mattancherry-palace",
          "jew-town-synagogue",
          "st-francis-church"
        ],
        "luxury": [
          "fort-kochi-beach",
          "chinese-fishing-nets"
        ],
        "hidden_gems": [
          "jew-town-synagogue",
          "st-francis-church",
          "kerala-kathakali-centre",
          "marine-drive-kochi",
          "bolgatty-palace"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Kochi (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "FORT KOCHI BEACH",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "CHINESE FISHING NETS",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "MATTANCHERRY PALACE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Kochi Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "FORT KOCHI BEACH",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "CHINESE FISHING NETS",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "MATTANCHERRY PALACE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "JEW TOWN SYNAGOGUE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "ST FRANCIS CHURCH",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Kochi Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "FORT KOCHI BEACH",
                "CHINESE FISHING NETS",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "MATTANCHERRY PALACE",
                "JEW TOWN SYNAGOGUE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "ST FRANCIS CHURCH",
                "KERALA KATHAKALI CENTRE",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "munnar": {
      "id": "munnar",
      "stateId": "kerala",
      "stateName": "Kerala",
      "name": "Munnar",
      "tagline": "The Emerald Tea Highlands & Anamudi Ridge",
      "heroImage": "assets/images/destinations/munnar-tea.jpg",
      "description": "Nestled at 1,600m in the Western Ghats, Munnar is draped in lush rolling tea plantations, mist-covered mountain valleys, and waterfalls.",
      "places": [
        "eravikulam-national-park",
        "munnar-tea-museum",
        "mattupetty-dam",
        "echo-point-munnar",
        "kundala-lake",
        "top-station-munnar",
        "attukad-waterfalls",
        "anamudi-peak"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "eravikulam-national-park",
          "munnar-tea-museum",
          "mattupetty-dam",
          "echo-point-munnar"
        ],
        "food": [
          "munnar-tea-museum",
          "mattupetty-dam",
          "echo-point-munnar"
        ],
        "adventure": [
          "mattupetty-dam",
          "echo-point-munnar",
          "kundala-lake"
        ],
        "relaxation": [
          "echo-point-munnar",
          "kundala-lake",
          "top-station-munnar"
        ],
        "culture": [
          "eravikulam-national-park",
          "munnar-tea-museum",
          "mattupetty-dam"
        ],
        "photography": [
          "eravikulam-national-park",
          "munnar-tea-museum",
          "mattupetty-dam",
          "echo-point-munnar"
        ],
        "family": [
          "eravikulam-national-park",
          "munnar-tea-museum",
          "mattupetty-dam"
        ],
        "couples": [
          "munnar-tea-museum",
          "mattupetty-dam",
          "echo-point-munnar"
        ],
        "budget": [
          "mattupetty-dam",
          "echo-point-munnar",
          "kundala-lake"
        ],
        "luxury": [
          "eravikulam-national-park",
          "munnar-tea-museum"
        ],
        "hidden_gems": [
          "echo-point-munnar",
          "kundala-lake",
          "top-station-munnar",
          "attukad-waterfalls",
          "anamudi-peak"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Munnar (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "ERAVIKULAM NATIONAL PARK",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "MUNNAR TEA MUSEUM",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "MATTUPETTY DAM",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Munnar Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "ERAVIKULAM NATIONAL PARK",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "MUNNAR TEA MUSEUM",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "MATTUPETTY DAM",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "ECHO POINT MUNNAR",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "KUNDALA LAKE",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Munnar Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "ERAVIKULAM NATIONAL PARK",
                "MUNNAR TEA MUSEUM",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "MATTUPETTY DAM",
                "ECHO POINT MUNNAR",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "KUNDALA LAKE",
                "TOP STATION MUNNAR",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "alappuzha": {
      "id": "alappuzha",
      "stateId": "kerala",
      "stateName": "Kerala",
      "name": "Alappuzha (Alleppey)",
      "tagline": "The Venice of the East & Backwater Labyrinth",
      "heroImage": "assets/images/destinations/alleppey-backwaters.jpg",
      "description": "A tranquil network of palm-fringed canals, lagoons, and paddy fields where traditional Kettuvallam houseboats glide at leisurely speed.",
      "places": [
        "alleppey-backwaters",
        "vembanad-lake",
        "marari-beach",
        "alappuzha-lighthouse",
        "kuttanad-paddy-fields",
        "pathiramanal-island",
        "krishnapuram-palace"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "alleppey-backwaters",
          "vembanad-lake",
          "marari-beach",
          "alappuzha-lighthouse"
        ],
        "food": [
          "vembanad-lake",
          "marari-beach",
          "alappuzha-lighthouse"
        ],
        "adventure": [
          "marari-beach",
          "alappuzha-lighthouse",
          "kuttanad-paddy-fields"
        ],
        "relaxation": [
          "alappuzha-lighthouse",
          "kuttanad-paddy-fields",
          "pathiramanal-island"
        ],
        "culture": [
          "alleppey-backwaters",
          "vembanad-lake",
          "marari-beach"
        ],
        "photography": [
          "alleppey-backwaters",
          "vembanad-lake",
          "marari-beach",
          "alappuzha-lighthouse"
        ],
        "family": [
          "alleppey-backwaters",
          "vembanad-lake",
          "marari-beach"
        ],
        "couples": [
          "vembanad-lake",
          "marari-beach",
          "alappuzha-lighthouse"
        ],
        "budget": [
          "marari-beach",
          "alappuzha-lighthouse",
          "kuttanad-paddy-fields"
        ],
        "luxury": [
          "alleppey-backwaters",
          "vembanad-lake"
        ],
        "hidden_gems": [
          "alappuzha-lighthouse",
          "kuttanad-paddy-fields",
          "pathiramanal-island",
          "krishnapuram-palace"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Alappuzha (Alleppey) (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "ALLEPPEY BACKWATERS",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "VEMBANAD LAKE",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "MARARI BEACH",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Alappuzha (Alleppey) Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "ALLEPPEY BACKWATERS",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "VEMBANAD LAKE",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "MARARI BEACH",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "ALAPPUZHA LIGHTHOUSE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "KUTTANAD PADDY FIELDS",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Alappuzha (Alleppey) Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "ALLEPPEY BACKWATERS",
                "VEMBANAD LAKE",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "MARARI BEACH",
                "ALAPPUZHA LIGHTHOUSE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "KUTTANAD PADDY FIELDS",
                "PATHIRAMANAL ISLAND",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "varkala": {
      "id": "varkala",
      "stateId": "kerala",
      "stateName": "Kerala",
      "name": "Varkala",
      "tagline": "Red Laterite Sea Bluffs & Sacred Waters",
      "heroImage": "assets/images/destinations/fort-aguada.jpg",
      "description": "Famous for its dramatic red cliffs running parallel to the Arabian Sea, natural mineral springs, and the ancient Janardhana Swamy Temple.",
      "places": [
        "varkala-cliff",
        "papanasam-beach",
        "janardhana-swamy-temple",
        "anjeengo-fort",
        "kappil-lake",
        "edava-beach",
        "ponnumthuruthu-island"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "varkala-cliff",
          "papanasam-beach",
          "janardhana-swamy-temple",
          "anjeengo-fort"
        ],
        "food": [
          "papanasam-beach",
          "janardhana-swamy-temple",
          "anjeengo-fort"
        ],
        "adventure": [
          "janardhana-swamy-temple",
          "anjeengo-fort",
          "kappil-lake"
        ],
        "relaxation": [
          "anjeengo-fort",
          "kappil-lake",
          "edava-beach"
        ],
        "culture": [
          "varkala-cliff",
          "papanasam-beach",
          "janardhana-swamy-temple"
        ],
        "photography": [
          "varkala-cliff",
          "papanasam-beach",
          "janardhana-swamy-temple",
          "anjeengo-fort"
        ],
        "family": [
          "varkala-cliff",
          "papanasam-beach",
          "janardhana-swamy-temple"
        ],
        "couples": [
          "papanasam-beach",
          "janardhana-swamy-temple",
          "anjeengo-fort"
        ],
        "budget": [
          "janardhana-swamy-temple",
          "anjeengo-fort",
          "kappil-lake"
        ],
        "luxury": [
          "varkala-cliff",
          "papanasam-beach"
        ],
        "hidden_gems": [
          "anjeengo-fort",
          "kappil-lake",
          "edava-beach",
          "ponnumthuruthu-island"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Varkala (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "VARKALA CLIFF",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "PAPANASAM BEACH",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "JANARDHANA SWAMY TEMPLE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Varkala Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "VARKALA CLIFF",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "PAPANASAM BEACH",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "JANARDHANA SWAMY TEMPLE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "ANJEENGO FORT",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "KAPPIL LAKE",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Varkala Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "VARKALA CLIFF",
                "PAPANASAM BEACH",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "JANARDHANA SWAMY TEMPLE",
                "ANJEENGO FORT",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "KAPPIL LAKE",
                "EDAVA BEACH",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "thekkady": {
      "id": "thekkady",
      "stateId": "kerala",
      "stateName": "Kerala",
      "name": "Thekkady (Periyar)",
      "tagline": "Cardamom Hills & Evergreen Elephant Sanctuary",
      "heroImage": "assets/images/destinations/eravikulam-national-park.jpg",
      "description": "The green heart of Kerala’s spice country, centered around the sprawling Periyar National Park and organic aromatic plantations.",
      "places": [
        "periyar-wildlife-sanctuary",
        "periyar-lake-boating",
        "kumily-spice-gardens",
        "kadathanadan-kalari-centre",
        "murikkady-viewpoint",
        "pandikuzhi-waterfalls",
        "chellarkovil-viewpoint"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "periyar-wildlife-sanctuary",
          "periyar-lake-boating",
          "kumily-spice-gardens",
          "kadathanadan-kalari-centre"
        ],
        "food": [
          "periyar-lake-boating",
          "kumily-spice-gardens",
          "kadathanadan-kalari-centre"
        ],
        "adventure": [
          "kumily-spice-gardens",
          "kadathanadan-kalari-centre",
          "murikkady-viewpoint"
        ],
        "relaxation": [
          "kadathanadan-kalari-centre",
          "murikkady-viewpoint",
          "pandikuzhi-waterfalls"
        ],
        "culture": [
          "periyar-wildlife-sanctuary",
          "periyar-lake-boating",
          "kumily-spice-gardens"
        ],
        "photography": [
          "periyar-wildlife-sanctuary",
          "periyar-lake-boating",
          "kumily-spice-gardens",
          "kadathanadan-kalari-centre"
        ],
        "family": [
          "periyar-wildlife-sanctuary",
          "periyar-lake-boating",
          "kumily-spice-gardens"
        ],
        "couples": [
          "periyar-lake-boating",
          "kumily-spice-gardens",
          "kadathanadan-kalari-centre"
        ],
        "budget": [
          "kumily-spice-gardens",
          "kadathanadan-kalari-centre",
          "murikkady-viewpoint"
        ],
        "luxury": [
          "periyar-wildlife-sanctuary",
          "periyar-lake-boating"
        ],
        "hidden_gems": [
          "kadathanadan-kalari-centre",
          "murikkady-viewpoint",
          "pandikuzhi-waterfalls",
          "chellarkovil-viewpoint"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Thekkady (Periyar) (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "PERIYAR WILDLIFE SANCTUARY",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "PERIYAR LAKE BOATING",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "KUMILY SPICE GARDENS",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Thekkady (Periyar) Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "PERIYAR WILDLIFE SANCTUARY",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "PERIYAR LAKE BOATING",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "KUMILY SPICE GARDENS",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "KADATHANADAN KALARI CENTRE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "MURIKKADY VIEWPOINT",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Thekkady (Periyar) Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "PERIYAR WILDLIFE SANCTUARY",
                "PERIYAR LAKE BOATING",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "KUMILY SPICE GARDENS",
                "KADATHANADAN KALARI CENTRE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "MURIKKADY VIEWPOINT",
                "PANDIKUZHI WATERFALLS",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "shimla": {
      "id": "shimla",
      "stateId": "himachal-pradesh",
      "stateName": "Himachal Pradesh",
      "name": "Shimla",
      "tagline": "The British Colonial Summer Capital",
      "heroImage": "assets/images/destinations/hadimba-temple.jpg",
      "description": "Perched along a crescent-shaped cedar ridge at 2,200m, Shimla is renowned for its pedestrian Mall Road, neo-Gothic Christ Church, and toy train.",
      "places": [
        "the-ridge-shimla",
        "mall-road-shimla",
        "jakhoo-temple",
        "viceregal-lodge",
        "kufri-valley",
        "christ-church-shimla",
        "tara-devi-temple",
        "chadwick-falls"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "the-ridge-shimla",
          "mall-road-shimla",
          "jakhoo-temple",
          "viceregal-lodge"
        ],
        "food": [
          "mall-road-shimla",
          "jakhoo-temple",
          "viceregal-lodge"
        ],
        "adventure": [
          "jakhoo-temple",
          "viceregal-lodge",
          "kufri-valley"
        ],
        "relaxation": [
          "viceregal-lodge",
          "kufri-valley",
          "christ-church-shimla"
        ],
        "culture": [
          "the-ridge-shimla",
          "mall-road-shimla",
          "jakhoo-temple"
        ],
        "photography": [
          "the-ridge-shimla",
          "mall-road-shimla",
          "jakhoo-temple",
          "viceregal-lodge"
        ],
        "family": [
          "the-ridge-shimla",
          "mall-road-shimla",
          "jakhoo-temple"
        ],
        "couples": [
          "mall-road-shimla",
          "jakhoo-temple",
          "viceregal-lodge"
        ],
        "budget": [
          "jakhoo-temple",
          "viceregal-lodge",
          "kufri-valley"
        ],
        "luxury": [
          "the-ridge-shimla",
          "mall-road-shimla"
        ],
        "hidden_gems": [
          "viceregal-lodge",
          "kufri-valley",
          "christ-church-shimla",
          "tara-devi-temple",
          "chadwick-falls"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Shimla (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "THE RIDGE SHIMLA",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "MALL ROAD SHIMLA",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "JAKHOO TEMPLE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Shimla Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "THE RIDGE SHIMLA",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "MALL ROAD SHIMLA",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "JAKHOO TEMPLE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "VICEREGAL LODGE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "KUFRI VALLEY",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Shimla Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "THE RIDGE SHIMLA",
                "MALL ROAD SHIMLA",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "JAKHOO TEMPLE",
                "VICEREGAL LODGE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "KUFRI VALLEY",
                "CHRIST CHURCH SHIMLA",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "manali": {
      "id": "manali",
      "stateId": "himachal-pradesh",
      "stateName": "Himachal Pradesh",
      "name": "Manali",
      "tagline": "Gateway to the High Himalayan Passes",
      "heroImage": "assets/images/destinations/hadimba-temple.jpg",
      "description": "Set amidst pine forests and snowy summits along the Beas River, Manali is the premier base for mountain adventures and passes into Ladakh.",
      "places": [
        "solang-valley",
        "rohtang-pass",
        "hadimba-temple",
        "old-manali-village",
        "jogini-waterfalls",
        "vashisht-hot-springs",
        "manu-temple",
        "atal-tunnel"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "solang-valley",
          "rohtang-pass",
          "hadimba-temple",
          "old-manali-village"
        ],
        "food": [
          "rohtang-pass",
          "hadimba-temple",
          "old-manali-village"
        ],
        "adventure": [
          "hadimba-temple",
          "old-manali-village",
          "jogini-waterfalls"
        ],
        "relaxation": [
          "old-manali-village",
          "jogini-waterfalls",
          "vashisht-hot-springs"
        ],
        "culture": [
          "solang-valley",
          "rohtang-pass",
          "hadimba-temple"
        ],
        "photography": [
          "solang-valley",
          "rohtang-pass",
          "hadimba-temple",
          "old-manali-village"
        ],
        "family": [
          "solang-valley",
          "rohtang-pass",
          "hadimba-temple"
        ],
        "couples": [
          "rohtang-pass",
          "hadimba-temple",
          "old-manali-village"
        ],
        "budget": [
          "hadimba-temple",
          "old-manali-village",
          "jogini-waterfalls"
        ],
        "luxury": [
          "solang-valley",
          "rohtang-pass"
        ],
        "hidden_gems": [
          "old-manali-village",
          "jogini-waterfalls",
          "vashisht-hot-springs",
          "manu-temple",
          "atal-tunnel"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Manali (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "SOLANG VALLEY",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "ROHTANG PASS",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "HADIMBA TEMPLE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Manali Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "SOLANG VALLEY",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "ROHTANG PASS",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "HADIMBA TEMPLE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "OLD MANALI VILLAGE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "JOGINI WATERFALLS",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Manali Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "SOLANG VALLEY",
                "ROHTANG PASS",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "HADIMBA TEMPLE",
                "OLD MANALI VILLAGE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "JOGINI WATERFALLS",
                "VASHISHT HOT SPRINGS",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "dharamshala": {
      "id": "dharamshala",
      "stateId": "himachal-pradesh",
      "stateName": "Himachal Pradesh",
      "name": "Dharamshala & McLeod Ganj",
      "tagline": "Little Lhasa in the Shadow of the Dhauladhar",
      "heroImage": "assets/images/destinations/key-monastery.jpg",
      "description": "The residence of His Holiness the Dalai Lama and the Tibetan government in exile, surrounded by deodar forests and dramatic alpine crags.",
      "places": [
        "tsuglagkhang-dalai-lama-temple",
        "bhagsunag-waterfall",
        "triund-ridge-trek",
        "norbulingka-institute",
        "st-john-in-the-wilderness",
        "dharamshala-cricket-stadium",
        "namgyal-monastery",
        "naddi-sunset-viewpoint"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "tsuglagkhang-dalai-lama-temple",
          "bhagsunag-waterfall",
          "triund-ridge-trek",
          "norbulingka-institute"
        ],
        "food": [
          "bhagsunag-waterfall",
          "triund-ridge-trek",
          "norbulingka-institute"
        ],
        "adventure": [
          "triund-ridge-trek",
          "norbulingka-institute",
          "st-john-in-the-wilderness"
        ],
        "relaxation": [
          "norbulingka-institute",
          "st-john-in-the-wilderness",
          "dharamshala-cricket-stadium"
        ],
        "culture": [
          "tsuglagkhang-dalai-lama-temple",
          "bhagsunag-waterfall",
          "triund-ridge-trek"
        ],
        "photography": [
          "tsuglagkhang-dalai-lama-temple",
          "bhagsunag-waterfall",
          "triund-ridge-trek",
          "norbulingka-institute"
        ],
        "family": [
          "tsuglagkhang-dalai-lama-temple",
          "bhagsunag-waterfall",
          "triund-ridge-trek"
        ],
        "couples": [
          "bhagsunag-waterfall",
          "triund-ridge-trek",
          "norbulingka-institute"
        ],
        "budget": [
          "triund-ridge-trek",
          "norbulingka-institute",
          "st-john-in-the-wilderness"
        ],
        "luxury": [
          "tsuglagkhang-dalai-lama-temple",
          "bhagsunag-waterfall"
        ],
        "hidden_gems": [
          "norbulingka-institute",
          "st-john-in-the-wilderness",
          "dharamshala-cricket-stadium",
          "namgyal-monastery",
          "naddi-sunset-viewpoint"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Dharamshala & McLeod Ganj (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "TSUGLAGKHANG DALAI LAMA TEMPLE",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "BHAGSUNAG WATERFALL",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "TRIUND RIDGE TREK",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Dharamshala & McLeod Ganj Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "TSUGLAGKHANG DALAI LAMA TEMPLE",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "BHAGSUNAG WATERFALL",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "TRIUND RIDGE TREK",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "NORBULINGKA INSTITUTE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "ST JOHN IN THE WILDERNESS",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Dharamshala & McLeod Ganj Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "TSUGLAGKHANG DALAI LAMA TEMPLE",
                "BHAGSUNAG WATERFALL",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "TRIUND RIDGE TREK",
                "NORBULINGKA INSTITUTE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "ST JOHN IN THE WILDERNESS",
                "DHARAMSHALA CRICKET STADIUM",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "spiti-valley": {
      "id": "spiti-valley",
      "stateId": "himachal-pradesh",
      "stateName": "Himachal Pradesh",
      "name": "Spiti Valley",
      "tagline": "The Middle Land of High-Altitude Cold Deserts",
      "heroImage": "assets/images/destinations/key-monastery.jpg",
      "description": "An arid, otherworldly trans-Himalayan desert valley at 3,800m, dotted with 1,000-year-old cliffside Buddhist monasteries and crystal night skies.",
      "places": [
        "key-monastery",
        "dhankar-monastery",
        "chandratal-lake",
        "kibber-village",
        "kaza-town",
        "hikkim-highest-post-office",
        "komic-highest-village",
        "pin-valley-national-park"
      ],
      "idealDuration": "5-7 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "key-monastery",
          "dhankar-monastery",
          "chandratal-lake",
          "kibber-village"
        ],
        "food": [
          "dhankar-monastery",
          "chandratal-lake",
          "kibber-village"
        ],
        "adventure": [
          "chandratal-lake",
          "kibber-village",
          "kaza-town"
        ],
        "relaxation": [
          "kibber-village",
          "kaza-town",
          "hikkim-highest-post-office"
        ],
        "culture": [
          "key-monastery",
          "dhankar-monastery",
          "chandratal-lake"
        ],
        "photography": [
          "key-monastery",
          "dhankar-monastery",
          "chandratal-lake",
          "kibber-village"
        ],
        "family": [
          "key-monastery",
          "dhankar-monastery",
          "chandratal-lake"
        ],
        "couples": [
          "dhankar-monastery",
          "chandratal-lake",
          "kibber-village"
        ],
        "budget": [
          "chandratal-lake",
          "kibber-village",
          "kaza-town"
        ],
        "luxury": [
          "key-monastery",
          "dhankar-monastery"
        ],
        "hidden_gems": [
          "kibber-village",
          "kaza-town",
          "hikkim-highest-post-office",
          "komic-highest-village",
          "pin-valley-national-park"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Spiti Valley (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "KEY MONASTERY",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "DHANKAR MONASTERY",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "CHANDRATAL LAKE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Spiti Valley Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "KEY MONASTERY",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "DHANKAR MONASTERY",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "CHANDRATAL LAKE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "KIBBER VILLAGE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "KAZA TOWN",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Spiti Valley Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "KEY MONASTERY",
                "DHANKAR MONASTERY",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "CHANDRATAL LAKE",
                "KIBBER VILLAGE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "KAZA TOWN",
                "HIKKIM HIGHEST POST OFFICE",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "kasol": {
      "id": "kasol",
      "stateId": "himachal-pradesh",
      "stateName": "Himachal Pradesh",
      "name": "Kasol & Parvati Valley",
      "tagline": "Coniferous River Valleys & Thermal Springs",
      "heroImage": "assets/images/destinations/hadimba-temple.jpg",
      "description": "A forested mountain village along the roaring Parvati River, famous for trekking trails, cedar glades, and natural hot sulfur springs.",
      "places": [
        "parvati-river-banks",
        "kheerganga-trek-hot-springs",
        "manikaran-sahib-gurudwara",
        "tosh-village",
        "malana-ancient-village",
        "chalal-trail",
        "grahan-village"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "parvati-river-banks",
          "kheerganga-trek-hot-springs",
          "manikaran-sahib-gurudwara",
          "tosh-village"
        ],
        "food": [
          "kheerganga-trek-hot-springs",
          "manikaran-sahib-gurudwara",
          "tosh-village"
        ],
        "adventure": [
          "manikaran-sahib-gurudwara",
          "tosh-village",
          "malana-ancient-village"
        ],
        "relaxation": [
          "tosh-village",
          "malana-ancient-village",
          "chalal-trail"
        ],
        "culture": [
          "parvati-river-banks",
          "kheerganga-trek-hot-springs",
          "manikaran-sahib-gurudwara"
        ],
        "photography": [
          "parvati-river-banks",
          "kheerganga-trek-hot-springs",
          "manikaran-sahib-gurudwara",
          "tosh-village"
        ],
        "family": [
          "parvati-river-banks",
          "kheerganga-trek-hot-springs",
          "manikaran-sahib-gurudwara"
        ],
        "couples": [
          "kheerganga-trek-hot-springs",
          "manikaran-sahib-gurudwara",
          "tosh-village"
        ],
        "budget": [
          "manikaran-sahib-gurudwara",
          "tosh-village",
          "malana-ancient-village"
        ],
        "luxury": [
          "parvati-river-banks",
          "kheerganga-trek-hot-springs"
        ],
        "hidden_gems": [
          "tosh-village",
          "malana-ancient-village",
          "chalal-trail",
          "grahan-village"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Kasol & Parvati Valley (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "PARVATI RIVER BANKS",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "KHEERGANGA TREK HOT SPRINGS",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "MANIKARAN SAHIB GURUDWARA",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Kasol & Parvati Valley Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "PARVATI RIVER BANKS",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "KHEERGANGA TREK HOT SPRINGS",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "MANIKARAN SAHIB GURUDWARA",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "TOSH VILLAGE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "MALANA ANCIENT VILLAGE",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Kasol & Parvati Valley Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "PARVATI RIVER BANKS",
                "KHEERGANGA TREK HOT SPRINGS",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "MANIKARAN SAHIB GURUDWARA",
                "TOSH VILLAGE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "MALANA ANCIENT VILLAGE",
                "CHALAL TRAIL",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "panaji": {
      "id": "panaji",
      "stateId": "goa",
      "stateName": "Goa",
      "name": "Panaji",
      "tagline": "The Capital of Indo-Portuguese Heritage",
      "heroImage": "assets/images/destinations/fort-aguada.jpg",
      "description": "Overlooking the Mandovi River, Panaji is characterized by cobblestone heritage quarters, red-tiled roofs, and whitewashed churches.",
      "places": [
        "fontainhas-latin-quarter",
        "immaculate-conception-church",
        "miramar-beach-goa",
        "dona-paula-viewpoint",
        "mandovi-river-promenade",
        "goa-state-museum",
        "altinho-hilltop"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "fontainhas-latin-quarter",
          "immaculate-conception-church",
          "miramar-beach-goa",
          "dona-paula-viewpoint"
        ],
        "food": [
          "immaculate-conception-church",
          "miramar-beach-goa",
          "dona-paula-viewpoint"
        ],
        "adventure": [
          "miramar-beach-goa",
          "dona-paula-viewpoint",
          "mandovi-river-promenade"
        ],
        "relaxation": [
          "dona-paula-viewpoint",
          "mandovi-river-promenade",
          "goa-state-museum"
        ],
        "culture": [
          "fontainhas-latin-quarter",
          "immaculate-conception-church",
          "miramar-beach-goa"
        ],
        "photography": [
          "fontainhas-latin-quarter",
          "immaculate-conception-church",
          "miramar-beach-goa",
          "dona-paula-viewpoint"
        ],
        "family": [
          "fontainhas-latin-quarter",
          "immaculate-conception-church",
          "miramar-beach-goa"
        ],
        "couples": [
          "immaculate-conception-church",
          "miramar-beach-goa",
          "dona-paula-viewpoint"
        ],
        "budget": [
          "miramar-beach-goa",
          "dona-paula-viewpoint",
          "mandovi-river-promenade"
        ],
        "luxury": [
          "fontainhas-latin-quarter",
          "immaculate-conception-church"
        ],
        "hidden_gems": [
          "dona-paula-viewpoint",
          "mandovi-river-promenade",
          "goa-state-museum",
          "altinho-hilltop"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Panaji (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "FONTAINHAS LATIN QUARTER",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "IMMACULATE CONCEPTION CHURCH",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "MIRAMAR BEACH GOA",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Panaji Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "FONTAINHAS LATIN QUARTER",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "IMMACULATE CONCEPTION CHURCH",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "MIRAMAR BEACH GOA",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "DONA PAULA VIEWPOINT",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "MANDOVI RIVER PROMENADE",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Panaji Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "FONTAINHAS LATIN QUARTER",
                "IMMACULATE CONCEPTION CHURCH",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "MIRAMAR BEACH GOA",
                "DONA PAULA VIEWPOINT",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "MANDOVI RIVER PROMENADE",
                "GOA STATE MUSEUM",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "old-goa": {
      "id": "old-goa",
      "stateId": "goa",
      "stateName": "Goa",
      "name": "Old Goa (Velha Goa)",
      "tagline": "The Monumental Rome of the East",
      "heroImage": "assets/images/destinations/basilica-bom-jesus.jpg",
      "description": "The 16th-century capital of Portuguese India, containing monumental UNESCO World Heritage Baroque basilicas and cathedrals.",
      "places": [
        "basilica-of-bom-jesus",
        "se-cathedral",
        "church-of-st-francis-of-assisi",
        "church-of-st-cajetan",
        "st-augustine-tower-ruins",
        "archaeological-museum-goa",
        "viceroys-arch"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "basilica-of-bom-jesus",
          "se-cathedral",
          "church-of-st-francis-of-assisi",
          "church-of-st-cajetan"
        ],
        "food": [
          "se-cathedral",
          "church-of-st-francis-of-assisi",
          "church-of-st-cajetan"
        ],
        "adventure": [
          "church-of-st-francis-of-assisi",
          "church-of-st-cajetan",
          "st-augustine-tower-ruins"
        ],
        "relaxation": [
          "church-of-st-cajetan",
          "st-augustine-tower-ruins",
          "archaeological-museum-goa"
        ],
        "culture": [
          "basilica-of-bom-jesus",
          "se-cathedral",
          "church-of-st-francis-of-assisi"
        ],
        "photography": [
          "basilica-of-bom-jesus",
          "se-cathedral",
          "church-of-st-francis-of-assisi",
          "church-of-st-cajetan"
        ],
        "family": [
          "basilica-of-bom-jesus",
          "se-cathedral",
          "church-of-st-francis-of-assisi"
        ],
        "couples": [
          "se-cathedral",
          "church-of-st-francis-of-assisi",
          "church-of-st-cajetan"
        ],
        "budget": [
          "church-of-st-francis-of-assisi",
          "church-of-st-cajetan",
          "st-augustine-tower-ruins"
        ],
        "luxury": [
          "basilica-of-bom-jesus",
          "se-cathedral"
        ],
        "hidden_gems": [
          "church-of-st-cajetan",
          "st-augustine-tower-ruins",
          "archaeological-museum-goa",
          "viceroys-arch"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Old Goa (Velha Goa) (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "BASILICA OF BOM JESUS",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "SE CATHEDRAL",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "CHURCH OF ST FRANCIS OF ASSISI",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Old Goa (Velha Goa) Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "BASILICA OF BOM JESUS",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "SE CATHEDRAL",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "CHURCH OF ST FRANCIS OF ASSISI",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "CHURCH OF ST CAJETAN",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "ST AUGUSTINE TOWER RUINS",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Old Goa (Velha Goa) Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "BASILICA OF BOM JESUS",
                "SE CATHEDRAL",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "CHURCH OF ST FRANCIS OF ASSISI",
                "CHURCH OF ST CAJETAN",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "ST AUGUSTINE TOWER RUINS",
                "ARCHAEOLOGICAL MUSEUM GOA",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "palolem": {
      "id": "palolem",
      "stateId": "goa",
      "stateName": "Goa",
      "name": "Palolem",
      "tagline": "The Tranquil Crescent Cove of South Goa",
      "heroImage": "assets/images/destinations/fort-aguada.jpg",
      "description": "A scenic crescent-shaped bay enclosed between two rocky headlands, known for calm swimmable waters and colorful beachfront shacks.",
      "places": [
        "palolem-beach-cove",
        "butterfly-beach-goa",
        "colom-beach",
        "patnem-beach",
        "cotigao-wildlife-sanctuary",
        "cabo-de-rama-fort",
        "monkey-island-palolem"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "palolem-beach-cove",
          "butterfly-beach-goa",
          "colom-beach",
          "patnem-beach"
        ],
        "food": [
          "butterfly-beach-goa",
          "colom-beach",
          "patnem-beach"
        ],
        "adventure": [
          "colom-beach",
          "patnem-beach",
          "cotigao-wildlife-sanctuary"
        ],
        "relaxation": [
          "patnem-beach",
          "cotigao-wildlife-sanctuary",
          "cabo-de-rama-fort"
        ],
        "culture": [
          "palolem-beach-cove",
          "butterfly-beach-goa",
          "colom-beach"
        ],
        "photography": [
          "palolem-beach-cove",
          "butterfly-beach-goa",
          "colom-beach",
          "patnem-beach"
        ],
        "family": [
          "palolem-beach-cove",
          "butterfly-beach-goa",
          "colom-beach"
        ],
        "couples": [
          "butterfly-beach-goa",
          "colom-beach",
          "patnem-beach"
        ],
        "budget": [
          "colom-beach",
          "patnem-beach",
          "cotigao-wildlife-sanctuary"
        ],
        "luxury": [
          "palolem-beach-cove",
          "butterfly-beach-goa"
        ],
        "hidden_gems": [
          "patnem-beach",
          "cotigao-wildlife-sanctuary",
          "cabo-de-rama-fort",
          "monkey-island-palolem"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Palolem (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "PALOLEM BEACH COVE",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "BUTTERFLY BEACH GOA",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "COLOM BEACH",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Palolem Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "PALOLEM BEACH COVE",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "BUTTERFLY BEACH GOA",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "COLOM BEACH",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "PATNEM BEACH",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "COTIGAO WILDLIFE SANCTUARY",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Palolem Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "PALOLEM BEACH COVE",
                "BUTTERFLY BEACH GOA",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "COLOM BEACH",
                "PATNEM BEACH",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "COTIGAO WILDLIFE SANCTUARY",
                "CABO DE RAMA FORT",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "anjuna": {
      "id": "anjuna",
      "stateId": "goa",
      "stateName": "Goa",
      "name": "Anjuna",
      "tagline": "Bohemian Red Cliffs & Flea Market Culture",
      "heroImage": "assets/images/destinations/fort-aguada.jpg",
      "description": "A legendary seaside hub with dramatic laterite sea bluffs, coastal music venues, and world-famous weekly artisan markets.",
      "places": [
        "anjuna-beach-rocks",
        "anjuna-flea-market-grounds",
        "albuquerque-mansion",
        "baga-river-estuary",
        "curlies-rock-promenade",
        "south-anjuna-sunset-point"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "anjuna-beach-rocks",
          "anjuna-flea-market-grounds",
          "albuquerque-mansion",
          "baga-river-estuary"
        ],
        "food": [
          "anjuna-flea-market-grounds",
          "albuquerque-mansion",
          "baga-river-estuary"
        ],
        "adventure": [
          "albuquerque-mansion",
          "baga-river-estuary",
          "curlies-rock-promenade"
        ],
        "relaxation": [
          "baga-river-estuary",
          "curlies-rock-promenade",
          "south-anjuna-sunset-point"
        ],
        "culture": [
          "anjuna-beach-rocks",
          "anjuna-flea-market-grounds",
          "albuquerque-mansion"
        ],
        "photography": [
          "anjuna-beach-rocks",
          "anjuna-flea-market-grounds",
          "albuquerque-mansion",
          "baga-river-estuary"
        ],
        "family": [
          "anjuna-beach-rocks",
          "anjuna-flea-market-grounds",
          "albuquerque-mansion"
        ],
        "couples": [
          "anjuna-flea-market-grounds",
          "albuquerque-mansion",
          "baga-river-estuary"
        ],
        "budget": [
          "albuquerque-mansion",
          "baga-river-estuary",
          "curlies-rock-promenade"
        ],
        "luxury": [
          "anjuna-beach-rocks",
          "anjuna-flea-market-grounds"
        ],
        "hidden_gems": [
          "baga-river-estuary",
          "curlies-rock-promenade",
          "south-anjuna-sunset-point"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Anjuna (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "ANJUNA BEACH ROCKS",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "ANJUNA FLEA MARKET GROUNDS",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "ALBUQUERQUE MANSION",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Anjuna Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "ANJUNA BEACH ROCKS",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "ANJUNA FLEA MARKET GROUNDS",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "ALBUQUERQUE MANSION",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "BAGA RIVER ESTUARY",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "CURLIES ROCK PROMENADE",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Anjuna Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "ANJUNA BEACH ROCKS",
                "ANJUNA FLEA MARKET GROUNDS",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "ALBUQUERQUE MANSION",
                "BAGA RIVER ESTUARY",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "CURLIES ROCK PROMENADE",
                "SOUTH ANJUNA SUNSET POINT",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "vagator": {
      "id": "vagator",
      "stateId": "goa",
      "stateName": "Goa",
      "name": "Vagator",
      "tagline": "Chapora Bastions & Dramatic Coastal Cliffs",
      "heroImage": "assets/images/destinations/fort-aguada.jpg",
      "description": "Where the Chapora River empties into the Arabian Sea below the 300-year-old red-stone bastions of Chapora Fort.",
      "places": [
        "chapora-fort",
        "big-vagator-beach",
        "little-vagator-ozran",
        "shiva-rock-carving",
        "morjim-turtle-beach-view",
        "chapora-fishing-jetty"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "chapora-fort",
          "big-vagator-beach",
          "little-vagator-ozran",
          "shiva-rock-carving"
        ],
        "food": [
          "big-vagator-beach",
          "little-vagator-ozran",
          "shiva-rock-carving"
        ],
        "adventure": [
          "little-vagator-ozran",
          "shiva-rock-carving",
          "morjim-turtle-beach-view"
        ],
        "relaxation": [
          "shiva-rock-carving",
          "morjim-turtle-beach-view",
          "chapora-fishing-jetty"
        ],
        "culture": [
          "chapora-fort",
          "big-vagator-beach",
          "little-vagator-ozran"
        ],
        "photography": [
          "chapora-fort",
          "big-vagator-beach",
          "little-vagator-ozran",
          "shiva-rock-carving"
        ],
        "family": [
          "chapora-fort",
          "big-vagator-beach",
          "little-vagator-ozran"
        ],
        "couples": [
          "big-vagator-beach",
          "little-vagator-ozran",
          "shiva-rock-carving"
        ],
        "budget": [
          "little-vagator-ozran",
          "shiva-rock-carving",
          "morjim-turtle-beach-view"
        ],
        "luxury": [
          "chapora-fort",
          "big-vagator-beach"
        ],
        "hidden_gems": [
          "shiva-rock-carving",
          "morjim-turtle-beach-view",
          "chapora-fishing-jetty"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Vagator (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "CHAPORA FORT",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "BIG VAGATOR BEACH",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "LITTLE VAGATOR OZRAN",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Vagator Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "CHAPORA FORT",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "BIG VAGATOR BEACH",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "LITTLE VAGATOR OZRAN",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "SHIVA ROCK CARVING",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "MORJIM TURTLE BEACH VIEW",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Vagator Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "CHAPORA FORT",
                "BIG VAGATOR BEACH",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "LITTLE VAGATOR OZRAN",
                "SHIVA ROCK CARVING",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "MORJIM TURTLE BEACH VIEW",
                "CHAPORA FISHING JETTY",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "agra": {
      "id": "agra",
      "stateId": "uttar-pradesh",
      "stateName": "Uttar Pradesh",
      "name": "Agra",
      "tagline": "The Imperial Mughal Capital on the Yamuna",
      "heroImage": "assets/images/destinations/taj-mahal.jpg",
      "description": "Home to three UNESCO World Heritage Sites, Agra represents the golden apex of Mughal art, monumental architecture, and marble craftsmanship.",
      "places": [
        "taj-mahal",
        "agra-fort",
        "fatehpur-sikri",
        "itmad-ud-daulah",
        "mehtab-bagh",
        "akbars-tomb-sikandra",
        "chimi-ka-rauza",
        "jama-masjid-agra"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "taj-mahal",
          "agra-fort",
          "fatehpur-sikri",
          "itmad-ud-daulah"
        ],
        "food": [
          "agra-fort",
          "fatehpur-sikri",
          "itmad-ud-daulah"
        ],
        "adventure": [
          "fatehpur-sikri",
          "itmad-ud-daulah",
          "mehtab-bagh"
        ],
        "relaxation": [
          "itmad-ud-daulah",
          "mehtab-bagh",
          "akbars-tomb-sikandra"
        ],
        "culture": [
          "taj-mahal",
          "agra-fort",
          "fatehpur-sikri"
        ],
        "photography": [
          "taj-mahal",
          "agra-fort",
          "fatehpur-sikri",
          "itmad-ud-daulah"
        ],
        "family": [
          "taj-mahal",
          "agra-fort",
          "fatehpur-sikri"
        ],
        "couples": [
          "agra-fort",
          "fatehpur-sikri",
          "itmad-ud-daulah"
        ],
        "budget": [
          "fatehpur-sikri",
          "itmad-ud-daulah",
          "mehtab-bagh"
        ],
        "luxury": [
          "taj-mahal",
          "agra-fort"
        ],
        "hidden_gems": [
          "itmad-ud-daulah",
          "mehtab-bagh",
          "akbars-tomb-sikandra",
          "chimi-ka-rauza",
          "jama-masjid-agra"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Agra (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "TAJ MAHAL",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "AGRA FORT",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "FATEHPUR SIKRI",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Agra Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "TAJ MAHAL",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "AGRA FORT",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "FATEHPUR SIKRI",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "ITMAD UD DAULAH",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "MEHTAB BAGH",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Agra Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "TAJ MAHAL",
                "AGRA FORT",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "FATEHPUR SIKRI",
                "ITMAD UD DAULAH",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "MEHTAB BAGH",
                "AKBARS TOMB SIKANDRA",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "varanasi": {
      "id": "varanasi",
      "stateId": "uttar-pradesh",
      "stateName": "Uttar Pradesh",
      "name": "Varanasi (Kashi)",
      "tagline": "The Oldest Continuously Inhabited City on the Sacred Ganga",
      "heroImage": "assets/images/destinations/dashashwamedh-ghat.jpg",
      "description": "The spiritual heart of India where 84 stone ghats meet the holy Ganges, alive with dawn hymns, silk weavers, and evening fire aartis.",
      "places": [
        "dashashwamedh-ghat",
        "assi-ghat",
        "manikarnika-ghat",
        "kashi-vishwanath-temple",
        "sarnath-dhamek-stupa",
        "ramnagar-fort",
        "namo-ghat",
        "tulsi-ghat",
        "banaras-hindu-university"
      ],
      "idealDuration": "3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "dashashwamedh-ghat",
          "assi-ghat",
          "manikarnika-ghat",
          "kashi-vishwanath-temple"
        ],
        "food": [
          "assi-ghat",
          "manikarnika-ghat",
          "kashi-vishwanath-temple"
        ],
        "adventure": [
          "manikarnika-ghat",
          "kashi-vishwanath-temple",
          "sarnath-dhamek-stupa"
        ],
        "relaxation": [
          "kashi-vishwanath-temple",
          "sarnath-dhamek-stupa",
          "ramnagar-fort"
        ],
        "culture": [
          "dashashwamedh-ghat",
          "assi-ghat",
          "manikarnika-ghat"
        ],
        "photography": [
          "dashashwamedh-ghat",
          "assi-ghat",
          "manikarnika-ghat",
          "kashi-vishwanath-temple"
        ],
        "family": [
          "dashashwamedh-ghat",
          "assi-ghat",
          "manikarnika-ghat"
        ],
        "couples": [
          "assi-ghat",
          "manikarnika-ghat",
          "kashi-vishwanath-temple"
        ],
        "budget": [
          "manikarnika-ghat",
          "kashi-vishwanath-temple",
          "sarnath-dhamek-stupa"
        ],
        "luxury": [
          "dashashwamedh-ghat",
          "assi-ghat"
        ],
        "hidden_gems": [
          "kashi-vishwanath-temple",
          "sarnath-dhamek-stupa",
          "ramnagar-fort",
          "namo-ghat",
          "tulsi-ghat",
          "banaras-hindu-university"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Varanasi (Kashi) (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "DASHASHWAMEDH GHAT",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "ASSI GHAT",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "MANIKARNIKA GHAT",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Varanasi (Kashi) Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "DASHASHWAMEDH GHAT",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "ASSI GHAT",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "MANIKARNIKA GHAT",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "KASHI VISHWANATH TEMPLE",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "SARNATH DHAMEK STUPA",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Varanasi (Kashi) Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "DASHASHWAMEDH GHAT",
                "ASSI GHAT",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "MANIKARNIKA GHAT",
                "KASHI VISHWANATH TEMPLE",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "SARNATH DHAMEK STUPA",
                "RAMNAGAR FORT",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "lucknow": {
      "id": "lucknow",
      "stateId": "uttar-pradesh",
      "stateName": "Uttar Pradesh",
      "name": "Lucknow",
      "tagline": "The City of Nawabs, Tehzeeb & Chikan Embroidery",
      "heroImage": "assets/images/destinations/agra-fort.jpg",
      "description": "Renowned for its refined Awadhi culture, courtly manners, unsupported vaulted architecture, and delicate Chikan hand embroidery.",
      "places": [
        "bara-imambara-bhool-bhulaiya",
        "chhota-imambara",
        "rumi-darwaza",
        "the-residency-lucknow",
        "chowk-heritage-bazaar",
        "dr-ambedkar-memorial-park",
        "dilkusha-kothi",
        "clock-tower-husainabad"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "bara-imambara-bhool-bhulaiya",
          "chhota-imambara",
          "rumi-darwaza",
          "the-residency-lucknow"
        ],
        "food": [
          "chhota-imambara",
          "rumi-darwaza",
          "the-residency-lucknow"
        ],
        "adventure": [
          "rumi-darwaza",
          "the-residency-lucknow",
          "chowk-heritage-bazaar"
        ],
        "relaxation": [
          "the-residency-lucknow",
          "chowk-heritage-bazaar",
          "dr-ambedkar-memorial-park"
        ],
        "culture": [
          "bara-imambara-bhool-bhulaiya",
          "chhota-imambara",
          "rumi-darwaza"
        ],
        "photography": [
          "bara-imambara-bhool-bhulaiya",
          "chhota-imambara",
          "rumi-darwaza",
          "the-residency-lucknow"
        ],
        "family": [
          "bara-imambara-bhool-bhulaiya",
          "chhota-imambara",
          "rumi-darwaza"
        ],
        "couples": [
          "chhota-imambara",
          "rumi-darwaza",
          "the-residency-lucknow"
        ],
        "budget": [
          "rumi-darwaza",
          "the-residency-lucknow",
          "chowk-heritage-bazaar"
        ],
        "luxury": [
          "bara-imambara-bhool-bhulaiya",
          "chhota-imambara"
        ],
        "hidden_gems": [
          "the-residency-lucknow",
          "chowk-heritage-bazaar",
          "dr-ambedkar-memorial-park",
          "dilkusha-kothi",
          "clock-tower-husainabad"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Lucknow (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "BARA IMAMBARA BHOOL BHULAIYA",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "CHHOTA IMAMBARA",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "RUMI DARWAZA",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Lucknow Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "BARA IMAMBARA BHOOL BHULAIYA",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "CHHOTA IMAMBARA",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "RUMI DARWAZA",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "THE RESIDENCY LUCKNOW",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "CHOWK HERITAGE BAZAAR",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Lucknow Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "BARA IMAMBARA BHOOL BHULAIYA",
                "CHHOTA IMAMBARA",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "RUMI DARWAZA",
                "THE RESIDENCY LUCKNOW",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "CHOWK HERITAGE BAZAAR",
                "DR AMBEDKAR MEMORIAL PARK",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "ayodhya": {
      "id": "ayodhya",
      "stateId": "uttar-pradesh",
      "stateName": "Uttar Pradesh",
      "name": "Ayodhya",
      "tagline": "The Ancient Epic Capital on the Sacred Sarayu",
      "heroImage": "assets/images/destinations/fatehpur-sikri.jpg",
      "description": "An ancient spiritual capital celebrated in the Ramayana, adorned with sacred river ghats, stone temples, and evening laser aartis.",
      "places": [
        "ram-janmabhoomi-mandir",
        "ram-ki-paidi-ghats",
        "hanuman-garhi",
        "kanak-bhawan",
        "nageshwarnath-temple",
        "gulab-bari",
        "guptar-ghat",
        "suraj-kund-ayodhya"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "ram-janmabhoomi-mandir",
          "ram-ki-paidi-ghats",
          "hanuman-garhi",
          "kanak-bhawan"
        ],
        "food": [
          "ram-ki-paidi-ghats",
          "hanuman-garhi",
          "kanak-bhawan"
        ],
        "adventure": [
          "hanuman-garhi",
          "kanak-bhawan",
          "nageshwarnath-temple"
        ],
        "relaxation": [
          "kanak-bhawan",
          "nageshwarnath-temple",
          "gulab-bari"
        ],
        "culture": [
          "ram-janmabhoomi-mandir",
          "ram-ki-paidi-ghats",
          "hanuman-garhi"
        ],
        "photography": [
          "ram-janmabhoomi-mandir",
          "ram-ki-paidi-ghats",
          "hanuman-garhi",
          "kanak-bhawan"
        ],
        "family": [
          "ram-janmabhoomi-mandir",
          "ram-ki-paidi-ghats",
          "hanuman-garhi"
        ],
        "couples": [
          "ram-ki-paidi-ghats",
          "hanuman-garhi",
          "kanak-bhawan"
        ],
        "budget": [
          "hanuman-garhi",
          "kanak-bhawan",
          "nageshwarnath-temple"
        ],
        "luxury": [
          "ram-janmabhoomi-mandir",
          "ram-ki-paidi-ghats"
        ],
        "hidden_gems": [
          "kanak-bhawan",
          "nageshwarnath-temple",
          "gulab-bari",
          "guptar-ghat",
          "suraj-kund-ayodhya"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Ayodhya (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "RAM JANMABHOOMI MANDIR",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "RAM KI PAIDI GHATS",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "HANUMAN GARHI",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Ayodhya Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "RAM JANMABHOOMI MANDIR",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "RAM KI PAIDI GHATS",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "HANUMAN GARHI",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "KANAK BHAWAN",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "NAGESHWARNATH TEMPLE",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Ayodhya Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "RAM JANMABHOOMI MANDIR",
                "RAM KI PAIDI GHATS",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "HANUMAN GARHI",
                "KANAK BHAWAN",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "NAGESHWARNATH TEMPLE",
                "GULAB BARI",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    },
    "mathura": {
      "id": "mathura",
      "stateId": "uttar-pradesh",
      "stateName": "Uttar Pradesh",
      "name": "Mathura & Vrindavan",
      "tagline": "The Sacred Land of Krishna & Braj Traditions",
      "heroImage": "assets/images/destinations/assi-ghat.jpg",
      "description": "Sacred twin pilgrimage centers on the Yamuna, renowned for celebratory Holi festivals, 5,000+ temples, and Raas Leela performances.",
      "places": [
        "krishna-janmasthan-temple",
        "vishram-ghat-mathura",
        "bankey-bihari-temple",
        "prem-mandir-vrindavan",
        "iskcon-temple-vrindavan",
        "govardhan-hill-parikrama",
        "kusum-sarovar",
        "radha-kund"
      ],
      "idealDuration": "2-3 Days",
      "whyDuration": "Allows you to comfortably explore the major heritage citadels, sample authentic local culinary traditions, and experience hidden craft quarters without rushing.",
      "approxBudget": {
        "budget": "₹1,800 – ₹2,800 / day (Boutique hostels, autos, street thalis)",
        "midRange": "₹4,500 – ₹8,500 / day (Heritage hotels, cabs, local fine dining)",
        "luxury": "₹18,000+ / day (Palace suites, private chauffeurs, curated tours)"
      },
      "bestTime": "October to March (Pleasant dry season with cool evenings)",
      "knowBefore": [
        {
          "title": "Local Transport",
          "tip": "Pre-negotiate auto rickshaws or use verified app-based ride services for transparent fares."
        },
        {
          "title": "Market Timings",
          "tip": "Traditional artisan bazaars peak between 4:00 PM and 8:30 PM; morning visits are best for uncrowded photography."
        },
        {
          "title": "Monument Passes",
          "tip": "Composite passes are available at primary heritage landmarks to skip separate ticket queues."
        }
      ],
      "tripArchetypes": {
        "heritage": [
          "krishna-janmasthan-temple",
          "vishram-ghat-mathura",
          "bankey-bihari-temple",
          "prem-mandir-vrindavan"
        ],
        "food": [
          "vishram-ghat-mathura",
          "bankey-bihari-temple",
          "prem-mandir-vrindavan"
        ],
        "adventure": [
          "bankey-bihari-temple",
          "prem-mandir-vrindavan",
          "iskcon-temple-vrindavan"
        ],
        "relaxation": [
          "prem-mandir-vrindavan",
          "iskcon-temple-vrindavan",
          "govardhan-hill-parikrama"
        ],
        "culture": [
          "krishna-janmasthan-temple",
          "vishram-ghat-mathura",
          "bankey-bihari-temple"
        ],
        "photography": [
          "krishna-janmasthan-temple",
          "vishram-ghat-mathura",
          "bankey-bihari-temple",
          "prem-mandir-vrindavan"
        ],
        "family": [
          "krishna-janmasthan-temple",
          "vishram-ghat-mathura",
          "bankey-bihari-temple"
        ],
        "couples": [
          "vishram-ghat-mathura",
          "bankey-bihari-temple",
          "prem-mandir-vrindavan"
        ],
        "budget": [
          "bankey-bihari-temple",
          "prem-mandir-vrindavan",
          "iskcon-temple-vrindavan"
        ],
        "luxury": [
          "krishna-janmasthan-temple",
          "vishram-ghat-mathura"
        ],
        "hidden_gems": [
          "prem-mandir-vrindavan",
          "iskcon-temple-vrindavan",
          "govardhan-hill-parikrama",
          "kusum-sarovar",
          "radha-kund"
        ]
      },
      "plannerPresets": {
        "1-day": {
          "title": "The Essential Mathura & Vrindavan (1-Day Highlight Sprint)",
          "pace": "High-Velocity & Efficient",
          "focus": "Iconic Monuments & Core Heritage",
          "estimatedCost": "₹2,200 (Mid-Range) + Entry Fees",
          "timeline": [
            {
              "time": "08:30 AM",
              "placeName": "KRISHNA JANMASTHAN TEMPLE",
              "activity": "Arrive at opening to explore the primary monument before tour buses arrive.",
              "duration": "2.5 Hours",
              "transitNext": "Approx. 15 min drive"
            },
            {
              "time": "11:45 AM",
              "placeName": "VISHRAM GHAT MATHURA",
              "activity": "Immerse in secondary landmark and architectural corridors.",
              "duration": "1.5 Hours",
              "transitNext": "Approx. 10 min drive"
            },
            {
              "time": "01:30 PM",
              "placeName": "Local Heritage Lunch Stop",
              "activity": "Authentic regional lunch thali at a celebrated local kitchen.",
              "duration": "1 Hour",
              "transitNext": "Approx. 12 min drive"
            },
            {
              "time": "03:00 PM",
              "placeName": "BANKEY BIHARI TEMPLE",
              "activity": "Explore artisan craft quarters and historic street architecture.",
              "duration": "2 Hours",
              "transitNext": "Approx. 20 min drive"
            },
            {
              "time": "05:30 PM",
              "placeName": "Sunset Scenic Viewpoint",
              "activity": "Golden hour vistas as dusk settles over the city skyline.",
              "duration": "1.5 Hours",
              "transitNext": "Evening at leisure"
            }
          ]
        },
        "2-day": {
          "title": "The Balanced Mathura & Vrindavan Journey (2 Days)",
          "pace": "Balanced & Immersive",
          "focus": "Heritage, Culinary Traditions & Local Bazaars",
          "estimatedCost": "₹4,800 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Monuments & Architectural Highlights",
              "stops": [
                {
                  "time": "08:30 AM",
                  "title": "KRISHNA JANMASTHAN TEMPLE",
                  "desc": "Early morning exploration of primary architectural marvel.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "11:45 AM",
                  "title": "VISHRAM GHAT MATHURA",
                  "desc": "Courtyards, museums, and royal artifacts.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "01:15 PM",
                  "title": "Regional Culinary Experience",
                  "desc": "Authentic local specialty dishes.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:00 PM",
                  "title": "BANKEY BIHARI TEMPLE",
                  "desc": "Photographic views and lakeside/ridge promenade.",
                  "transitNext": "Approx. 20 min drive"
                },
                {
                  "time": "05:30 PM",
                  "title": "Sunset Viewpoint & Evening Tea",
                  "desc": "Watch the golden sunset over historical ramparts.",
                  "transitNext": "Dinner"
                }
              ]
            },
            {
              "day": 2,
              "title": "Bazaars, Living Crafts & Hidden Sanctuaries",
              "stops": [
                {
                  "time": "09:00 AM",
                  "title": "PREM MANDIR VRINDAVAN",
                  "desc": "Quiet spiritual or subterranean architectural gem.",
                  "transitNext": "Approx. 10 min drive"
                },
                {
                  "time": "11:00 AM",
                  "title": "Artisan Quarters & Guild Walk",
                  "desc": "Observe master craftsmen in traditional ateliers.",
                  "transitNext": "Approx. 5 min walk"
                },
                {
                  "time": "01:30 PM",
                  "title": "Street Gastronomy & Snacks",
                  "desc": "Famous local savories and sweet delights.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "03:30 PM",
                  "title": "ISKCON TEMPLE VRINDAVAN",
                  "desc": "Art collections, tapestries, and regional relics.",
                  "transitNext": "Approx. 15 min drive"
                },
                {
                  "time": "06:00 PM",
                  "title": "Evening Promenade / Cultural Performance",
                  "desc": "Live classical music, folk dance, or temple aarti.",
                  "transitNext": "Night"
                }
              ]
            }
          ]
        },
        "3-day": {
          "title": "The Complete Mathura & Vrindavan Expedition (3 Days)",
          "pace": "Relaxed & Deep Cultural Dive",
          "focus": "Comprehensive Highlights + Outskirts & Artisan Villages",
          "estimatedCost": "₹7,600 (Mid-Range)",
          "days": [
            {
              "day": 1,
              "title": "Grand Citadels & Panoramic Vistas",
              "stops": [
                "KRISHNA JANMASTHAN TEMPLE",
                "VISHRAM GHAT MATHURA",
                "Sunset Ridge"
              ]
            },
            {
              "day": 2,
              "title": "Old City Corridors & Bazaars",
              "stops": [
                "BANKEY BIHARI TEMPLE",
                "PREM MANDIR VRINDAVAN",
                "Artisan Alley"
              ]
            },
            {
              "day": 3,
              "title": "Beyond the Obvious & Crafts",
              "stops": [
                "ISKCON TEMPLE VRINDAVAN",
                "GOVARDHAN HILL PARIKRAMA",
                "Heritage Dining"
              ]
            }
          ]
        }
      }
    }
  },
  "places": {
    "amber-fort": {
      "id": "amber-fort",
      "cityId": "jaipur",
      "stateId": "rajasthan",
      "name": "Amber Fort & Palace",
      "category": "UNESCO World Heritage Fortress",
      "tagline": "The Crown Citadel of the Aravalli Crest",
      "heroImage": "assets/images/destinations/amber-fort.jpg",
      "shortDesc": "A colossal 16th-century fortress blending Rajput and Mughal architecture above the calm waters of Maota Lake.",
      "overview": "Perched high on the rugged Aravalli hillside above the calm waters of Maota Lake, Amber Fort is a masterpiece of Rajput and Mughal architecture. Built in 1592 by Raja Man Singh I and later expanded by Sawai Jai Singh, this imposing fortress conceals inside it lavish marble courtyards, mirror-encrusted halls, and sophisticated natural air-cooling engineering.",
      "whyItMatters": "Amber Fort is a UNESCO World Heritage site and a testament to the sophisticated fusion of Hindu and Persian aesthetics. Its fortified perimeter runs over 14 kilometers across mountain ridges, functioning as an impenetrable defense while housing the world-renowned Sheesh Mahal (Mirror Palace) where a single candle can illuminate an entire chamber.",
      "whatToSee": [
        {
          "title": "Ganesh Pol Gateway",
          "desc": "A magnificent three-storey ceremonial gateway adorned with fresco paintings made from vegetable dyes and marble lattice screens (Jharokhas)."
        },
        {
          "title": "Sheesh Mahal (Mirror Palace)",
          "desc": "The most celebrated chamber in the fort, completely encrusted with convex Belgian glass mirrors and multi-faceted stone carvings."
        },
        {
          "title": "Diwan-i-Aam & Diwan-i-Khas",
          "desc": "The monumental Public and Private Audience Halls featuring double rows of sandstone columns crowned by carved elephant-shaped brackets."
        },
        {
          "title": "Sukh Niwas (Pleasure Palace)",
          "desc": "The private royal retreat featuring an ingenious medieval air-conditioning system where cool water was channeled through cascading marble pipes."
        }
      ],
      "history": "Originally founded in 967 CE by the Chanda clan of Meenas, Amber became the royal capital of the Kachwaha Rajputs in the 11th century. The current palace complex was initiated in 1592 by Raja Man Singh I, commander of Emperor Akbar's imperial army. Amber remained the seat of power until 1727, when Sawai Jai Singh II founded the planned city of Jaipur in the plains below.",
      "experiences": [
        {
          "title": "Sound & Light Show at Kesar Kyari",
          "desc": "An evocative evening narrative voiced by Amitabh Bachchan recounting the 600-year history of Kachwaha rulers over the waters of Maota Lake.",
          "timing": "Daily 07:30 PM (English) / 08:30 PM (Hindi)"
        },
        {
          "title": "Secret Subterranean Tunnel Walk to Jaigarh",
          "desc": "Explore the newly restored 1-km subterranean military escape tunnel connecting Amber Palace directly to the mountain summit of Jaigarh Fort.",
          "timing": "Open Daily 10:00 AM - 05:00 PM"
        }
      ],
      "foodNearby": [
        {
          "name": "1135 AD (Inside Fort Ramparts)",
          "cuisine": "Royal Rajputana Fine Dining",
          "desc": "Dine like royalty under gold-leaf ceilings with silver thalis and authentic live sitar ragas."
        },
        {
          "name": "The Stag Rooftop Restro",
          "cuisine": "Cafe & North Indian",
          "desc": "Unmatched panoramic balcony view of the entire Amber Fort illuminated at night against Maota Lake."
        }
      ],
      "placesNearby": [
        {
          "name": "Panna Meena Ka Kund Stepwell",
          "dist": "600 meters away",
          "desc": "A symmetrical 16th-century geometric stepwell with zig-zag interlocking stairs."
        },
        {
          "name": "Anokhi Museum of Hand Printing",
          "dist": "800 meters away",
          "desc": "A beautifully restored haveli showcasing traditional hand block-printing artisans at work."
        },
        {
          "name": "Jaigarh Fort & Jaivana Cannon",
          "dist": "1.5 km uphill",
          "desc": "Houses the Jaivana cannon, once the world’s largest cannon on wheels."
        }
      ],
      "travelInfo": {
        "timings": "08:00 AM to 05:30 PM (Day) | 06:30 PM to 09:15 PM (Night Tourism)",
        "entryFee": "₹100 (Indians) | ₹500 (Foreign Nationals) | Student Discounts Available",
        "bestTimeToVisit": "Early morning (08:00 AM) to beat queue bottlenecks, or evening for sunset illumination.",
        "howToReach": "Located 11 km north of Jaipur center. Accessible via taxi, auto-rickshaw, or low-floor AC bus route AC-1 from Ajmeri Gate."
      },
      "hasCinematic": true,
      "cinematicScenes": [
        {
          "name": "Suraj Pol (Sun Gate)",
          "desc": "The monumental eastern gate through which royal cavalcades and victory processions entered the royal fortress.",
          "bgImage": "assets/images/destinations/amber-fort.jpg",
          "time": "Dawn & Morning Light",
          "musicMood": "Grand Shehnai & Nagara drums",
          "historicalNote": "Guarded by elite Rajput warriors; designed with sweeping sandstone curves to deflect siege elephants."
        },
        {
          "name": "Ganesh Pol & Main Courtyard",
          "desc": "The multi-tiered ceremonial gateway adorned with exquisite vegetable-dye frescoes and miniature paintings.",
          "bgImage": "assets/images/destinations/amber-fort-detail.jpg",
          "time": "Midday Radiance",
          "musicMood": "Classical Sarangi raga",
          "historicalNote": "Built in 1640 by Mirza Raja Jai Singh; features latticed marble jharokhas for royal women to witness state returns."
        },
        {
          "name": "Sheesh Mahal (Mirror Palace)",
          "desc": "A world-renowned hall of mirrors designed so that a single candle flame illuminates the entire chamber with starry reflections.",
          "bgImage": "assets/images/destinations/amber-fort-sheesh-mahal.jpg",
          "time": "Candlelight Night",
          "musicMood": "Ethereal Santoor melodies",
          "historicalNote": "Inlaid with convex Belgian glass foils embedded directly into the plaster ceiling and floral marble reliefs."
        },
        {
          "name": "Sukh Niwas (Hall of Pleasure)",
          "desc": "Royal private summer chambers cooled by an ingenious cascading water channel fed by mountain breezes.",
          "bgImage": "assets/images/destinations/amber-fort.jpg",
          "time": "Afternoon Cool",
          "musicMood": "Gentle Flute & Water sounds",
          "historicalNote": "Sandalwood doors inlaid with ivory and marble channels created natural desert air conditioning in the 17th century."
        },
        {
          "name": "Maota Lake Reflections",
          "desc": "The tranquil lake below the ramparts cradling the saffron garden (Kesar Kyari) and reflecting golden fortifications.",
          "bgImage": "assets/images/destinations/amber-fort.jpg",
          "time": "Golden Hour",
          "musicMood": "Acoustic strings & Desert wind",
          "historicalNote": "Engineered in the 16th century to supply water to Amer town while creating an impassable moat along the valley floor."
        },
        {
          "name": "Zenana Courtyard",
          "desc": "The secluded inner palace cloisters designed with 12 distinct rooms opening onto a shared central courtyard.",
          "bgImage": "assets/images/destinations/amber-fort-detail.jpg",
          "time": "Dusk Whispers",
          "musicMood": "Solo Veena resonance",
          "historicalNote": "Constructed so the Maharaja could visit each private suite without the knowledge of the other queens."
        },
        {
          "name": "Amer Ridge Twilight",
          "desc": "Panoramic 360-degree overlook from the ramparts as twilight settles over the Aravalli mountain passes.",
          "bgImage": "assets/images/destinations/amber-fort.jpg",
          "time": "Twilight & Stars",
          "musicMood": "Deep ambient bass & sitar",
          "historicalNote": "Connected by underground secret fortified escape tunnels leading all the way up to Jaigarh Fort."
        }
      ],
      "hotspots": [
        {
          "title": "Sheesh Mahal Mirrors",
          "loc": "Upper Courtyard",
          "desc": "Thousands of miniature convex mirror facets crafted to replicate a star-studded night sky with a single lamp flame.",
          "image": "assets/images/destinations/amber-fort-sheesh-mahal.jpg"
        },
        {
          "title": "Ganesh Pol Gate",
          "loc": "Ceremonial Threshold",
          "desc": "Masterful Rajput-Mughal fusion gateway painted with natural lapis lazuli, vermilion, and gold pigments in 1640.",
          "image": "assets/images/destinations/amber-fort-detail.jpg"
        },
        {
          "title": "Maota Lake & Kesar Kyari",
          "loc": "Valley Base",
          "desc": "Symmetrical star-shaped saffron gardens floating in the reservoir beneath the fortress battlements.",
          "image": "assets/images/destinations/amber-fort.jpg"
        },
        {
          "title": "Panna Meena Stepwell",
          "loc": "Amer Valley (200m North)",
          "desc": "Symmetrical 16th-century geometric stepwell where community water harvesting met master architectural precision.",
          "image": "assets/images/destinations/panna-meena.jpg"
        }
      ],
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "₹100 (Indians) | ₹500 (Foreign Nationals) | Student Discounts Available",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from jaipur city center",
        "nearbyTransit": [
          {
            "destination": "Panna Meena Ka Kund Stepwell",
            "time": "Approx. 600 meters away",
            "distance": "600 meters away"
          },
          {
            "destination": "Anokhi Museum of Hand Printing",
            "time": "Approx. 800 meters away",
            "distance": "800 meters away"
          },
          {
            "destination": "Jaigarh Fort & Jaivana Cannon",
            "time": "Approx. 1.5 km uphill",
            "distance": "1.5 km uphill"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "1135 AD (Inside Fort Ramparts)",
          "type": "Veg / Non-Veg",
          "desc": "Dine like royalty under gold-leaf ceilings with silver thalis and authentic live sitar ragas.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Royal Rajputana Fine Dining"
        },
        {
          "name": "The Stag Rooftop Restro",
          "type": "Veg / Non-Veg",
          "desc": "Unmatched panoramic balcony view of the entire Amber Fort illuminated at night against Maota Lake.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Cafe & North Indian"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "mapsQuery": "Amber Fort & Palace, Jaipur, Rajasthan, India"
    },
    "city-palace-jaipur": {
      "id": "city-palace-jaipur",
      "cityId": "jaipur",
      "stateId": "rajasthan",
      "name": "City Palace, Jaipur",
      "category": "Royal Palace & Living Heritage",
      "tagline": "The Seven-Storeyed Chandra Mahal & Peacock Courtyard",
      "heroImage": "assets/images/destinations/city-palace-jaipur.jpg",
      "shortDesc": "A grand complex blending Rajput, Mughal, and European architecture that remains the residence of the Jaipur royal family.",
      "overview": "Conceived and built by Maharaja Sawai Jai Singh II in 1727, the City Palace occupies one-seventh of the walled Pink City. It features ceremonial courtyards, the famed Peacock Gate, and museum galleries holding royal regalia and the world’s largest sterling silver urns.",
      "whyItMatters": "It represents the ceremonial heart of the planned grid of Jaipur and showcases the pinnacle of Kachwaha statecraft and architectural patronage.",
      "whatToSee": [
        {
          "title": "Pritam Niwas Chowk (Peacock Gate)",
          "desc": "Four ornate gates representing the four seasons, adorned with vivid enamel peacock and lotus mosaics."
        },
        {
          "title": "Chandra Mahal",
          "desc": "The seven-storeyed private residence of the titular Maharaja, crowned with the royal flag."
        },
        {
          "title": "Mubarak Mahal (Textile Gallery)",
          "desc": "An Islamic-European fusion pavilion displaying royal pashminas and silk robes."
        }
      ],
      "history": "When Sawai Jai Singh II moved the capital from Amber to Jaipur in 1727, he collaborated with master Bengali architect Vidyadhar Bhattacharya to construct the City Palace based on ancient Vastu Shastra principles.",
      "experiences": [
        {
          "title": "Exclusive Royal Grandeur Tour of Chandra Mahal",
          "desc": "Private guided access to the mirror-covered Sukh Niwas and blue-and-gold Chhavi Niwas chambers."
        }
      ],
      "foodNearby": [
        {
          "name": "The Baradari Restaurant",
          "desc": "Fine heritage dining situated in the historic central courtyard of City Palace."
        }
      ],
      "placesNearby": [
        {
          "name": "Jantar Mantar Observatory",
          "dist": "100m walk",
          "desc": "UNESCO astronomical observatory."
        },
        {
          "name": "Hawa Mahal",
          "dist": "400m walk",
          "desc": "Iconic Palace of Winds facade."
        }
      ],
      "travelInfo": {
        "timings": "09:30 AM to 05:00 PM (Day) | 07:00 PM to 10:00 PM (Night Tour)",
        "entryFee": "₹300 (Indians) | ₹700 (Foreigners) | Chandra Mahal Special Access ₹2500",
        "bestTimeToVisit": "Morning 09:30 AM before tour groups arrive.",
        "howToReach": "Located in the center of old walled city near Tripolia Gate."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "₹300 (Indians) | ₹700 (Foreigners) | Chandra Mahal Special Access ₹2500",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from jaipur city center",
        "nearbyTransit": [
          {
            "destination": "Jantar Mantar Observatory",
            "time": "Approx. 100m walk",
            "distance": "100m walk"
          },
          {
            "destination": "Hawa Mahal",
            "time": "Approx. 400m walk",
            "distance": "400m walk"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "The Baradari Restaurant",
          "type": "Veg / Non-Veg",
          "desc": "Fine heritage dining situated in the historic central courtyard of City Palace.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "mapsQuery": "City Palace, Jaipur, Jaipur, Rajasthan, India"
    },
    "hawa-mahal": {
      "id": "hawa-mahal",
      "cityId": "jaipur",
      "stateId": "rajasthan",
      "name": "Hawa Mahal",
      "category": "Architectural Masterwork",
      "tagline": "The Palace of Winds with 953 Carved Jharokhas",
      "heroImage": "assets/images/destinations/hawa-mahal.jpg",
      "shortDesc": "A five-storey crown-shaped facade of pink and red sandstone with 953 latticework windows designed for cooling natural airflow.",
      "overview": "Built in 1799 by Maharaja Sawai Pratap Singh, Hawa Mahal (Palace of Winds) resembles the crown of Lord Krishna. Its unique five-tier honeycomb facade allowed royal ladies to observe vibrant city life on the street below while remaining unseen behind intricate stone screens.",
      "whyItMatters": "An engineering marvel of natural air conditioning: the Venturi effect cools the breeze as it passes through the small lattice openings, keeping the chambers cool during blistering desert summers.",
      "whatToSee": [
        {
          "title": "The 953 Jharokhas",
          "desc": "Intricately carved sandstone oriel windows with colored stained glass insets."
        },
        {
          "title": "Ratan Mandir & Prakash Mandir",
          "desc": "Upper floors glowing with colorful glass reflections during golden morning light."
        }
      ],
      "history": "Architect Lal Chand Ustad designed Hawa Mahal as an extension of the Royal City Palace Zenana (women’s quarters), using pink sandstone to harmonize with the planned color scheme of the city.",
      "experiences": [
        {
          "title": "Dawn Golden Hour Photography from Wind View Cafe",
          "desc": "Watch the sunrise illuminate the five-storey facade with morning tea on opposite rooftop balconies."
        }
      ],
      "foodNearby": [
        {
          "name": "LMB (Laxmi Mishtan Bhandar)",
          "desc": "Legendary Johari Bazaar sweet shop famous for Pyaaz Kachori and Ghevar."
        }
      ],
      "placesNearby": [
        {
          "name": "Johari Bazaar Gem Market",
          "dist": "50m away",
          "desc": "Historic street of gemstone cutters and silversmiths."
        }
      ],
      "travelInfo": {
        "timings": "09:00 AM to 05:00 PM",
        "entryFee": "₹50 (Indians) | ₹200 (Foreign Nationals)",
        "bestTimeToVisit": "Sunrise (07:00 AM - 08:30 AM) when the morning sun shines directly onto the facade.",
        "howToReach": "Badi Chaupar, Old City, Jaipur."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "₹50 (Indians) | ₹200 (Foreign Nationals)",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from jaipur city center",
        "nearbyTransit": [
          {
            "destination": "Johari Bazaar Gem Market",
            "time": "Approx. 50m away",
            "distance": "50m away"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "LMB (Laxmi Mishtan Bhandar)",
          "type": "Veg / Non-Veg",
          "desc": "Legendary Johari Bazaar sweet shop famous for Pyaaz Kachori and Ghevar.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "mapsQuery": "Hawa Mahal, Jaipur, Rajasthan, India"
    },
    "jantar-mantar": {
      "id": "jantar-mantar",
      "cityId": "jaipur",
      "stateId": "rajasthan",
      "name": "Jantar Mantar",
      "category": "UNESCO World Heritage Science Monument",
      "tagline": "The World’s Largest Stone Astronomical Observatory",
      "heroImage": "assets/images/destinations/jantar-mantar.jpg",
      "shortDesc": "A collection of nineteen architectural astronomical instruments built by Maharaja Sawai Jai Singh II, including the world’s largest stone sundial.",
      "overview": "Constructed between 1728 and 1734, Jantar Mantar features monumental geometric instruments made of local stone and marble, designed to measure time, track celestial coordinates, and predict eclipses with astonishing accuracy.",
      "whyItMatters": "The Samrat Yantra sundial stands 27 meters tall and can calculate local Jaipur solar time to an accuracy of two seconds.",
      "whatToSee": [
        {
          "title": "Vrihat Samrat Yantra",
          "desc": "The world’s largest stone sundial casting a sharp shadow onto calibrated marble scales."
        },
        {
          "title": "Jai Prakash Yantra",
          "desc": "Hemispherical inverted bowl instruments mapping the night sky directly."
        }
      ],
      "history": "Sawai Jai Singh II built five astronomical observatories in northern India, with the Jaipur complex being the largest, best preserved, and most sophisticated.",
      "experiences": [
        {
          "title": "Astronomer-Led Solar Time Workshop",
          "desc": "Learn how to read the exact time and zodiac positions using only the shadow cast by the sun."
        }
      ],
      "foodNearby": [
        {
          "name": "Kalyan Rooftop Restaurant",
          "desc": "Great thalis with views of the old city skyline."
        }
      ],
      "placesNearby": [
        {
          "name": "City Palace",
          "dist": "Adjacent",
          "desc": "Royal residence."
        }
      ],
      "travelInfo": {
        "timings": "09:00 AM to 04:30 PM",
        "entryFee": "₹50 (Indians) | ₹200 (Foreigners)",
        "bestTimeToVisit": "Midday (11:30 AM - 01:30 PM) when the sun is overhead to observe the instruments in direct action."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "₹50 (Indians) | ₹200 (Foreigners)",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from jaipur city center",
        "nearbyTransit": [
          {
            "destination": "City Palace",
            "time": "Approx. Adjacent",
            "distance": "Adjacent"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "Kalyan Rooftop Restaurant",
          "type": "Veg / Non-Veg",
          "desc": "Great thalis with views of the old city skyline.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "mapsQuery": "Jantar Mantar, Jaipur, Rajasthan, India"
    },
    "jal-mahal": {
      "id": "jal-mahal",
      "cityId": "jaipur",
      "stateId": "rajasthan",
      "name": "Jal Mahal (Water Palace)",
      "category": "Heritage Water Palace",
      "tagline": "The Floating Palace on Man Sagar Lake",
      "heroImage": "assets/images/destinations/jal-mahal.jpg",
      "shortDesc": "A picturesque five-storey palace floating in the center of Man Sagar Lake, with four lower storeys submerged underwater.",
      "overview": "Built in the mid-18th century as a royal duck-hunting lodge and summer retreat, Jal Mahal appears to float serenely on the waters of Man Sagar Lake against the backdrop of the Nahargarh hills.",
      "whyItMatters": "Constructed from pink sandstone with fragrant Chameli terrace gardens, it features specialized waterproof mortar that has held water at bay for over 250 years.",
      "whatToSee": [
        {
          "title": "Man Sagar Promenade",
          "desc": "Lakeside walkway offering panoramic views of the water palace and surrounding birdlife."
        },
        {
          "title": "Chhatris & Terrace Architecture",
          "desc": "Bengali-style vaulted domes (Bangaldar) and Rajput chhatris crowning the roof."
        }
      ],
      "history": "Maharaja Madho Singh I built the original structure in 1750, and his son Madho Singh II added the upper courtyard gardens in the early 19th century.",
      "experiences": [
        {
          "title": "Sunset Promenade & Birdwatching",
          "desc": "Spot migratory flamingos and pelicans arriving at Man Sagar Lake in winter months."
        }
      ],
      "foodNearby": [
        {
          "name": "Kanak Vrindavan Gardens Cafe",
          "desc": "Heritage garden cafe located in the valley behind Jal Mahal."
        }
      ],
      "placesNearby": [
        {
          "name": "Kanak Ghati Gardens",
          "dist": "1 km away",
          "desc": "Restored royal garden complex."
        }
      ],
      "travelInfo": {
        "timings": "Viewable from lakeside promenade 24/7 (Internal palace access restricted)",
        "entryFee": "Free lakeside promenade access",
        "bestTimeToVisit": "Sunset (05:30 PM - 06:45 PM) when the lights illuminate the water reflection."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "Free lakeside promenade access",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from jaipur city center",
        "nearbyTransit": [
          {
            "destination": "Kanak Ghati Gardens",
            "time": "Approx. 1 km away",
            "distance": "1 km away"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "Kanak Vrindavan Gardens Cafe",
          "type": "Veg / Non-Veg",
          "desc": "Heritage garden cafe located in the valley behind Jal Mahal.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "mapsQuery": "Jal Mahal (Water Palace), Jaipur, Rajasthan, India"
    },
    "panna-meena": {
      "id": "panna-meena",
      "cityId": "jaipur",
      "stateId": "rajasthan",
      "name": "Panna Meena Ka Kund",
      "category": "16th-Century Stepwell & Engineering",
      "tagline": "The Geometric Interlocking Stepwell of Amber",
      "heroImage": "assets/images/destinations/panna-meena.jpg",
      "shortDesc": "An eight-tiered symmetrical stepwell featuring a mesmerizing matrix of criss-cross zig-zag steps and recessed pavilions.",
      "overview": "Located in ancient Amber town near the Kheri Gate, Panna Meena Ka Kund was constructed in the 16th century for rainwater harvesting and community gatherings. Its interlocking staircases are designed so that the stairs used to walk down cannot be used to walk up.",
      "whyItMatters": "A triumph of medieval hydraulic architecture that maintains a micro-climate 5°C cooler than the desert heat.",
      "whatToSee": [
        {
          "title": "The Zig-Zag Step Geometry",
          "desc": "Eight levels of symmetrical staircases carved with architectural precision."
        },
        {
          "title": "Corner Chhatri Pavilions",
          "desc": "Four domed corner towers where villagers once rested in the cool shade."
        }
      ],
      "history": "Built during the reign of Maharaja Man Singh I by the local Meena chieftaincy, it served as the community lifeline of Amber before piped water.",
      "experiences": [
        {
          "title": "Morning Solitude Sketching & Photography",
          "desc": "Enjoy peaceful morning light before tourist buses reach the nearby fortress."
        }
      ],
      "foodNearby": [
        {
          "name": "Kokum Bistro Amber",
          "desc": "Charming rooftop spot serving authentic Rajasthani thalis."
        }
      ],
      "placesNearby": [
        {
          "name": "Anokhi Block Printing Museum",
          "dist": "200m walk",
          "desc": "Living textile workshop in a restored haveli."
        },
        {
          "name": "Amber Fort",
          "dist": "600m uphill",
          "desc": "Main fort palace."
        }
      ],
      "travelInfo": {
        "timings": "07:00 AM to 06:00 PM",
        "entryFee": "Free Entry",
        "bestTimeToVisit": "Early morning (07:30 AM - 09:00 AM)."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "Free Entry",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from jaipur city center",
        "nearbyTransit": [
          {
            "destination": "Anokhi Block Printing Museum",
            "time": "Approx. 200m walk",
            "distance": "200m walk"
          },
          {
            "destination": "Amber Fort",
            "time": "Approx. 600m uphill",
            "distance": "600m uphill"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "Kokum Bistro Amber",
          "type": "Veg / Non-Veg",
          "desc": "Charming rooftop spot serving authentic Rajasthani thalis.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Jaipur",
      "state": "Rajasthan",
      "country": "India",
      "mapsQuery": "Panna Meena Ka Kund, Jaipur, Rajasthan, India"
    },
    "taj-mahal": {
      "id": "taj-mahal",
      "cityId": "agra",
      "stateId": "uttar-pradesh",
      "name": "Taj Mahal",
      "category": "UNESCO World Wonder",
      "tagline": "The Marble Epitaph of Eternal Love on the Yamuna",
      "heroImage": "assets/images/destinations/taj-mahal.jpg",
      "shortDesc": "An internationally celebrated ivory-white marble mausoleum commissioned in 1631 by Mughal Emperor Shah Jahan.",
      "overview": "Set in a 42-acre Charbagh garden along the banks of the Yamuna River, the Taj Mahal is widely considered the greatest architectural achievement in Indo-Islamic history, featuring pure Makrana marble inlaid with 28 types of precious stones.",
      "whyItMatters": "A UNESCO World Heritage site and one of the New 7 Wonders of the World, built with flawless symmetry where four minarets tilt slightly outwards to protect the tomb in case of earthquakes.",
      "whatToSee": [
        {
          "title": "The Central Dome & Cenotaph Chamber",
          "desc": "Intricately carved marble jali screens inlaid with lapis lazuli, carnelian, and jade."
        },
        {
          "title": "Pietra Dura (Parchin Kari) Inlay",
          "desc": "Exquisite floral stone inlays that glow under direct sunlight and full moonlight."
        },
        {
          "title": "The Charbagh Reflecting Pool",
          "desc": "A symmetrical Persian quadrilateral garden mirroring the white dome."
        }
      ],
      "history": "Shah Jahan commissioned the mausoleum in memory of his favorite wife, Mumtaz Mahal. Over 20,000 artisans worked under court architect Ustad Ahmad Lahori for 22 years to complete the monument.",
      "experiences": [
        {
          "title": "Sunrise Viewing from Mehtab Bagh across the Yamuna",
          "desc": "Watch the pale pink morning light reflect off the marble dome from across the river with zero crowds."
        }
      ],
      "foodNearby": [
        {
          "name": "Pinch of Spice Agra",
          "desc": "Renowned North Indian dining famous for Dal Makhani and Murgh Boti."
        }
      ],
      "placesNearby": [
        {
          "name": "Agra Fort",
          "dist": "2.5 km away",
          "desc": "Red sandstone imperial citadel."
        }
      ],
      "travelInfo": {
        "timings": "Sunrise to Sunset (Closed on Fridays) | Night viewing on Full Moon nights",
        "entryFee": "₹50 (Indians) | ₹1100 (Foreign Nationals) + ₹200 for Main Mausoleum Chamber",
        "bestTimeToVisit": "Sunrise (05:45 AM - 07:00 AM) to experience the morning mist and golden dawn light."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "₹50 (Indians) | ₹1100 (Foreign Nationals) + ₹200 for Main Mausoleum Chamber",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from agra city center",
        "nearbyTransit": [
          {
            "destination": "Agra Fort",
            "time": "Approx. 2.5 km away",
            "distance": "2.5 km away"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "Pinch of Spice Agra",
          "type": "Veg / Non-Veg",
          "desc": "Renowned North Indian dining famous for Dal Makhani and Murgh Boti.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Agra",
      "state": "Uttar Pradesh",
      "country": "India",
      "mapsQuery": "Taj Mahal, Agra, Uttar Pradesh, India"
    },
    "dashashwamedh-ghat": {
      "id": "dashashwamedh-ghat",
      "cityId": "varanasi",
      "stateId": "uttar-pradesh",
      "name": "Dashashwamedh Ghat",
      "category": "Sacred Riverfront & Living Ritual",
      "tagline": "The Grand Ganga Aarti Center of Varanasi",
      "heroImage": "assets/images/destinations/dashashwamedh-ghat.jpg",
      "shortDesc": "The main and most spectacular ghat on the sacred Ganges River, legendary for the synchronized evening Maha Aarti ceremony.",
      "overview": "Located adjacent to the Kashi Vishwanath Temple, Dashashwamedh Ghat is the focal point of pilgrim life in Varanasi. Every evening at dusk, young saffron-clad priests perform a choreographed worship ritual with multi-tiered brass oil lamps, incense, and conch shells.",
      "whyItMatters": "According to Hindu mythology, Lord Brahma created this ghat to welcome Lord Shiva and performed the sacrifice of ten horses (Dasa-ashwamedha).",
      "whatToSee": [
        {
          "title": "Evening Ganga Aarti Ritual",
          "desc": "A 45-minute synchronized worship with roaring fire lamps, bells, and river floating diyas."
        },
        {
          "title": "Dawn Wooden Boat Flotilla",
          "desc": "Observe pilgrims performing sun salutations and morning ablutions along stone steps."
        }
      ],
      "history": "The current ghat was constructed in 1748 by Peshwa Balaji Baji Rao and later expanded by Ahilyabai Holkar of Indore in 1774.",
      "experiences": [
        {
          "title": "Evening Wooden Boat Aarti Viewing",
          "desc": "Anchor a traditional hand-rowed wooden boat on the Ganges for the best vantage point of the fire ritual."
        }
      ],
      "foodNearby": [
        {
          "name": "Blue Lassi Shop",
          "desc": "A tiny 80-year-old shop serving hand-churned fruit lassis topped with thick malai and pistachios."
        }
      ],
      "placesNearby": [
        {
          "name": "Kashi Vishwanath Corridor",
          "dist": "300m walk",
          "desc": "Golden temple of Lord Shiva."
        }
      ],
      "travelInfo": {
        "timings": "Open 24 Hours | Evening Aarti begins at 06:45 PM (Summer) / 06:00 PM (Winter)",
        "entryFee": "Free Entry | Boat hire ₹300–₹800",
        "bestTimeToVisit": "Dawn (05:30 AM) for tranquil riverboat rides, and 06:00 PM for the evening Aarti."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "Free Entry | Boat hire ₹300–₹800",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from varanasi city center",
        "nearbyTransit": [
          {
            "destination": "Kashi Vishwanath Corridor",
            "time": "Approx. 300m walk",
            "distance": "300m walk"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "Blue Lassi Shop",
          "type": "Veg / Non-Veg",
          "desc": "A tiny 80-year-old shop serving hand-churned fruit lassis topped with thick malai and pistachios.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Varanasi (Kashi)",
      "state": "Uttar Pradesh",
      "country": "India",
      "mapsQuery": "Dashashwamedh Ghat, Varanasi (Kashi), Uttar Pradesh, India"
    },
    "eravikulam-national-park": {
      "id": "eravikulam-national-park",
      "cityId": "munnar",
      "stateId": "kerala",
      "name": "Eravikulam National Park",
      "category": "High-Altitude Eco Reserve",
      "tagline": "Home of the Endangered Nilgiri Tahr & Neelakurinji",
      "heroImage": "assets/images/destinations/eravikulam-national-park.jpg",
      "shortDesc": "A high-altitude montane shola-grassland sanctuary protecting the highest peak in South India (Anamudi) and wild Nilgiri ibex.",
      "overview": "Spanning 97 square kilometers in the Kannan Devan Hills of the Western Ghats, Eravikulam features rolling grasslands interspersed with stunted shola forest groves. It is the natural habitat of the endangered Nilgiri Tahr mountain goat and the legendary Neelakurinji flower that blooms once every 12 years.",
      "whyItMatters": "A UNESCO World Heritage biodiversity hotspot and home to Anamudi (2,695m), the highest mountain peak in India south of the Himalayas.",
      "whatToSee": [
        {
          "title": "Nilgiri Tahr Herds",
          "desc": "Spot wild mountain goats grazing peacefully along the Rajamalai trail."
        },
        {
          "title": "Anamudi Peak Vistas",
          "desc": "Dramatic viewpoints looking up at the elephant-shaped granite summit."
        }
      ],
      "history": "Originally declared a private game sanctuary by the British North Travancore Plantation Company in 1895, it was designated a National Park in 1978 to preserve the Tahr.",
      "experiences": [
        {
          "title": "Rajamalai Guided Eco Safari Walk",
          "desc": "Trek along designated cloud-forest ridge paths with certified forest naturalists."
        }
      ],
      "foodNearby": [
        {
          "name": "Rapsy Restaurant Munnar",
          "desc": "Popular local joint known for hot Kerala parottas and spiced egg roast."
        }
      ],
      "placesNearby": [
        {
          "name": "Munnar Tea Museum",
          "dist": "12 km away",
          "desc": "History of early tea manufacturing in the Ghats."
        }
      ],
      "travelInfo": {
        "timings": "07:30 AM to 04:00 PM (Closed Feb–March during Tahr calving season)",
        "entryFee": "₹200 (Indians) | ₹500 (Foreign Nationals) including safari bus transport",
        "bestTimeToVisit": "September to January for crystal clear mountain visibility."
      },
      "durationNeeded": "2–3 Hours",
      "idealPace": "Moderate walking with step climbing",
      "goodFor": [
        "Architecture",
        "History",
        "Photography",
        "Cultural Heritage"
      ],
      "bestTimeDetailed": {
        "season": "October to March (Pleasant 14°C – 26°C)",
        "bestTimeOfDay": "Early Morning (08:30 AM) or Late Afternoon (04:00 PM)",
        "reasoning": "Early arrival avoids midday sun on open stone courtyards and allows golden hour lighting on intricate facades."
      },
      "budget": {
        "entryFee": "₹200 (Indians) | ₹500 (Foreign Nationals) including safari bus transport",
        "avgFoodCost": "Approx. ₹350 – ₹800 per person at nearby heritage eateries",
        "avgTransport": "Approx. ₹250 – ₹450 (Auto/Cab from city center)"
      },
      "travelContext": {
        "fromCityCenter": "Approx. 15–25 min drive from munnar city center",
        "nearbyTransit": [
          {
            "destination": "Munnar Tea Museum",
            "time": "Approx. 12 km away",
            "distance": "12 km away"
          }
        ]
      },
      "knowBeforeYouGo": [
        {
          "title": "Footwear & Steps",
          "tip": "Comfortable walking shoes with good grip are recommended for historic stone stairways and ramparts."
        },
        {
          "title": "Photography Rules",
          "tip": "Handheld photography and smartphones are permitted. Commercial tripods require prior ASI authorization."
        },
        {
          "title": "Queue Bypass",
          "tip": "Book tickets online in advance or acquire a composite monument pass to skip long ticketing lines."
        },
        {
          "title": "Attire & Etiquette",
          "tip": "Modest attire covering shoulders and knees is appreciated, particularly when approaching active shrines."
        }
      ],
      "hiddenGems": [
        {
          "name": "Quiet Morning Courtyards",
          "type": "Architectural Detail",
          "desc": "Lesser-visited rear corridors and shaded arcades offering intimate stone carvings.",
          "dist": "Inside complex"
        },
        {
          "name": "Artisan Guild Haveli",
          "type": "Living Craft",
          "desc": "Local workshops preserving centuries-old regional handicrafts.",
          "dist": "Approx. 1 km away"
        },
        {
          "name": "Panoramic Ridge Point",
          "type": "Scenic Vista",
          "desc": "An elevated viewpoint overlooking the monument against the surrounding topography.",
          "dist": "Approx. 15 min walk"
        }
      ],
      "foodSpecialties": [
        {
          "name": "Rapsy Restaurant Munnar",
          "type": "Veg / Non-Veg",
          "desc": "Popular local joint known for hot Kerala parottas and spiced egg roast.",
          "price": "Approx. ₹200 – ₹600",
          "where": "Nearby Heritage Kitchen"
        }
      ],
      "staysByCategory": {
        "luxury": [
          {
            "name": "Grand Heritage Palace Resort",
            "desc": "Opulent palatial accommodations with royal gardens and swimming pavilions.",
            "price": "₹35,000+ / night"
          },
          {
            "name": "Luxury Fort Retreat",
            "desc": "Exclusive five-star suites with private terraces and courtyard views.",
            "price": "₹25,000+ / night"
          }
        ],
        "heritage": [
          {
            "name": "Historic Restored Haveli",
            "desc": "Century-old ancestral residence adorned with authentic frescoes.",
            "price": "₹8,000 – ₹16,000 / night"
          },
          {
            "name": "Royal Townhouse Hotel",
            "desc": "Charming traditional courtyards and carved stone balconies.",
            "price": "₹6,000 – ₹12,000 / night"
          }
        ],
        "boutique": [
          {
            "name": "Artisan Design Guesthouse",
            "desc": "Contemporary minimalist design blended with indigenous textiles.",
            "price": "₹4,500 – ₹8,000 / night"
          },
          {
            "name": "Eco Oasis Villa",
            "desc": "Tranquil green sanctuary focusing on organic dining and wellness.",
            "price": "₹5,000 – ₹9,000 / night"
          }
        ],
        "budget": [
          {
            "name": "Heritage Backpackers Hub",
            "desc": "Clean social hostel with rooftop cafe and cultural walking tours.",
            "price": "₹800 – ₹2,200 / night"
          },
          {
            "name": "Traditional Family Homestay",
            "desc": "Warm local hospitality with home-cooked regional meals.",
            "price": "₹1,200 – ₹2,800 / night"
          }
        ]
      },
      "city": "Munnar",
      "state": "Kerala",
      "country": "India",
      "mapsQuery": "Eravikulam National Park, Munnar, Kerala, India"
    }
  }
};

export const ARVORA_DATA = RAAHI_DATA;
