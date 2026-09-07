/**
 * RAAHI // Cinematic Exploration Data Architecture
 * Multi-destination support with Amber Fort as flagship implementation.
 * Includes camera waypoints, 3D perspective transforms, hotspots, and deep research dossiers.
 */

export const CINEMATIC_DESTINATIONS = {
  'amber-fort': {
    id: 'amber-fort',
    name: 'Amber Fort',
    city: 'Jaipur',
    cityId: 'jaipur',
    state: 'Rajasthan',
    stateId: 'rajasthan',
    country: 'India',
    introEyebrow: 'CINEMATIC EXPEDITION // JAIPUR · RAJASTHAN',
    tagline: 'A royal fortress overlooking the Aravalli hills.',
    soundscapeTitle: 'Aravalli Ridge Winds & Saffron Court Santoor',
    mapsQuery: 'Amber Fort, Devisinghpura, Amer, Jaipur, Rajasthan 302001, India',
    
    // 7 Milestones / Camera Journey Waypoints
    milestones: [
      {
        id: 'scene-approach',
        index: 0,
        progress: 0.00,
        label: 'APPROACH',
        eyebrow: 'SCENE 01 // AERIAL APPROACH',
        title: 'ABOVE THE ARAVALLIS',
        subtitle: 'Jaipur Context · Desert Gateway',
        caption: 'Rising 400 feet above the rugged hills, Amber Fort commands the historical trade pass between Delhi and Rajasthan.',
        bgImage: 'assets/images/destinations/amber-fort.jpg',
        camera: {
          zoom: 1.0,
          panX: 0,
          panY: 0,
          rotX: 3,
          rotY: 0,
          rotZ: 0,
          depthScale: 1.0,
          brightness: 0.88,
          contrast: 1.05
        }
      },
      {
        id: 'scene-reveal',
        index: 1,
        progress: 0.18,
        label: 'THE CITADEL',
        eyebrow: 'SCENE 02 // FORTRESS REVEAL',
        title: 'A FORTRESS BUILT FOR ROYALTY',
        subtitle: 'Cheel ka Teela Ridge · 1592 AD',
        caption: 'Yellow and pink sandstone ramparts stretch for miles along the mountain ridgelines, merging seamlessly into natural rock faces.',
        bgImage: 'assets/images/destinations/amber-fort.jpg',
        camera: {
          zoom: 1.35,
          panX: -20,
          panY: -12,
          rotX: 5,
          rotY: -4,
          rotZ: -1,
          depthScale: 1.25,
          brightness: 0.9,
          contrast: 1.08
        }
      },
      {
        id: 'scene-entrance',
        index: 2,
        progress: 0.42,
        label: 'GANESH POL',
        eyebrow: 'SCENE 03 // CEREMONIAL ENTRANCE',
        title: 'THE CEREMONIAL GATEWAY',
        subtitle: 'Ganesh Pol · Royal Threshold',
        caption: 'Entering through Suraj Pol into the majestic cloisters of Ganesh Pol, where natural lapis lazuli frescoes welcome returning monarchs.',
        bgImage: 'assets/images/destinations/amber-fort-detail.jpg',
        camera: {
          zoom: 1.70,
          panX: 0,
          panY: -22,
          rotX: 6,
          rotY: 0,
          rotZ: 0,
          depthScale: 1.5,
          brightness: 0.95,
          contrast: 1.12
        },
        hotspotId: 'ganesh-pol'
      },
      {
        id: 'scene-interiors',
        index: 3,
        progress: 0.62,
        label: 'SHEESH MAHAL',
        eyebrow: 'SCENE 04 // ROYAL INTERIORS',
        title: 'THE MIRROR PALACE',
        subtitle: 'Sheesh Mahal · Hall of Celestial Mirrors',
        caption: 'Step inside the world-renowned chamber where convex Belgian mirror inlays illuminate the darkness with starlike constellations.',
        bgImage: 'assets/images/destinations/amber-fort-sheesh-mahal.jpg',
        camera: {
          zoom: 1.85,
          panX: 15,
          panY: -18,
          rotX: -3,
          rotY: 4,
          rotZ: 1,
          depthScale: 1.65,
          brightness: 0.98,
          contrast: 1.15
        },
        hotspotId: 'sheesh-mahal'
      },
      {
        id: 'scene-courtyard',
        index: 4,
        progress: 0.78,
        label: 'DIWAN-I-AAM',
        eyebrow: 'SCENE 05 // ROYAL AUDIENCE',
        title: 'HALL OF PUBLIC AUDIENCE',
        subtitle: 'Diwan-i-Aam · 27 Sandstone Pillars',
        caption: 'The sweeping open durbar hall supported by sculpted elephant-head brackets where the Kachwaha Maharajas held state council.',
        bgImage: 'assets/images/destinations/amber-fort-detail.jpg',
        camera: {
          zoom: 1.50,
          panX: -15,
          panY: -8,
          rotX: 4,
          rotY: -3,
          rotZ: 0,
          depthScale: 1.35,
          brightness: 0.9,
          contrast: 1.1
        },
        hotspotId: 'diwan-i-aam'
      },
      {
        id: 'scene-landscape',
        index: 5,
        progress: 0.90,
        label: 'MAOTA LAKE',
        eyebrow: 'SCENE 06 // RESERVOIR OASIS',
        title: 'THE FLOATING SAFFRON GARDENS',
        subtitle: 'Maota Lake & Kesar Kyari',
        caption: 'Overlooking the tranquil reservoir below the battlements, cradling the symmetrical star-patterned saffron garden.',
        bgImage: 'assets/images/destinations/amber-fort.jpg',
        camera: {
          zoom: 1.25,
          panX: 20,
          panY: 10,
          rotX: -5,
          rotY: 4,
          rotZ: -1,
          depthScale: 1.2,
          brightness: 0.92,
          contrast: 1.08
        },
        hotspotId: 'maota-lake'
      },
      {
        id: 'scene-conclusion',
        index: 6,
        progress: 1.00,
        label: 'DISCOVER JAIPUR',
        eyebrow: 'SCENE 07 // EXPEDITION COMPLETE',
        title: "YOU'VE ENTERED AMBER FORT.",
        subtitle: 'NOW DISCOVER JAIPUR.',
        caption: 'Your journey through Amer is the gateway to the Pink City. Continue your expedition across ancient stepwells, astronomical observatories, and artisan quarters.',
        bgImage: 'assets/images/destinations/amber-fort.jpg',
        camera: {
          zoom: 1.08,
          panX: 0,
          panY: 0,
          rotX: 0,
          rotY: 0,
          rotZ: 0,
          depthScale: 1.0,
          brightness: 0.85,
          contrast: 1.05
        }
      }
    ],

    // Hotspot Telemetry & Deep Research Dossiers
    hotspots: {
      'ganesh-pol': {
        id: 'ganesh-pol',
        name: 'Ganesh Pol',
        subtitle: 'The Ceremonial Gateway into Amber Fort',
        location: 'Jaipur, Rajasthan',
        categoryTag: 'ROYAL ARCHITECTURE',
        image: 'assets/images/destinations/amber-fort-detail.jpg',
        mapsQuery: 'Ganesh Pol, Amber Fort, Amer, Jaipur, Rajasthan, India',
        targetProgress: 0.42,
        screenPos: { x: 50, y: 52 },
        
        attributes: [
          { label: 'Architecture', value: 'Rajput · Mughal Fusion (1640 AD)' },
          { label: 'Known For', value: 'Natural Vegetable Frescoes · Suhag Mandir Lattices · Royal Entry' },
          { label: 'Patron', value: 'Mirza Raja Jai Singh I' }
        ],
        
        quickIntel: {
          focus: 'HERITAGE · ARCHITECTURE · PHOTOGRAPHY',
          duration: '30–45 MIN',
          bestTime: 'MORNING (8:30 AM — 11:00 AM)',
          location: 'JAIPUR, RAJASTHAN',
          crowdLevel: 'MODERATE'
        },

        summary: 'Commissioned in 1640 by Mirza Raja Jai Singh I, Ganesh Pol is the grand ceremonial portal connecting public state courtyards with the royal private apartments. Adorned with natural mineral and vegetable-dye frescoes, it remains an undisputed masterpiece of Rajasthani architectural painting.',

        deepResearch: {
          whyItMatters: 'Ganesh Pol served as the auspicious transition point between the external civic world and the sovereign inner sanctum. Named after Lord Ganesha, the remover of obstacles, it greeted kings, diplomats, and conquering armies with spiritual blessings.',
          whatToNotice: 'Look above the central arch at the intricately latticed marble jharokhas of the Suhag Mandir, through which royal women could observe victory processions. Notice the 380-year-old original pigments made from pulverized lapis lazuli (blue), malachite (green), cinnabar (red), and real leaf gold.',
          history: 'Erected between 1639 and 1643 AD during the reign of Mirza Raja Jai Singh I, who served as a senior commander in the Mughal army. The gateway reflects a refined synthesis of Persian arch geometry with indigenous Rajput decorative stonecarving.',
          culturalContext: 'Upon returning from battle, the Maharaja was received at Ganesh Pol with ceremonial brass aarti lamps and saffron waters before entering the inner palaces.',
          visitorIntelligence: {
            bestLighting: 'Eastern morning light directly illuminates the frescoed facade from 8:30 AM to 11:00 AM.',
            crowdAdvice: 'Early morning visits avoid guided group clusters in the courtyard below.',
            photographyTip: 'Stand at the far western edge of Jaleb Chowk for a symmetrical composition framed by the courtyard battlements.'
          },
          relatedPlaces: [
            { id: 'sheesh-mahal', name: 'Sheesh Mahal', dist: '50m deeper in fort' },
            { id: 'diwan-i-aam', name: 'Diwan-i-Aam', dist: 'In front courtyard' },
            { id: 'panna-meena', name: 'Panna Meena Stepwell', dist: '300m in Amer village' }
          ]
        }
      },

      'sheesh-mahal': {
        id: 'sheesh-mahal',
        name: 'Sheesh Mahal',
        subtitle: 'The Celestial Hall of Mirrors',
        location: 'Upper Courtyard, Amber Fort',
        categoryTag: 'ASTRONOMICAL OPULENCE',
        image: 'assets/images/destinations/amber-fort-sheesh-mahal.jpg',
        mapsQuery: 'Sheesh Mahal, Amber Fort, Amer, Jaipur, Rajasthan, India',
        targetProgress: 0.62,
        screenPos: { x: 54, y: 50 },

        attributes: [
          { label: 'Architecture', value: 'Indo-Persian Inlaid Glass & Makrana Marble' },
          { label: 'Known For', value: 'Star-Lit Candle Reflections · Floral Bas-Reliefs · Belgian Convex Glass' },
          { label: 'Built Under', value: 'Raja Man Singh I & Mirza Raja Jai Singh' }
        ],

        quickIntel: {
          focus: 'OPULENCE · CRAFTSMANSHIP · ILLUSION',
          duration: '45–60 MIN',
          bestTime: 'AFTERNOON / GOLDEN HOUR',
          location: 'AMBER FORT, JAIPUR',
          crowdLevel: 'HIGH (Early visit advised)'
        },

        summary: 'The world-famed Sheesh Mahal was engineered so that a single oil lamp or candle flame multiplies into thousands of shimmering starlike reflections across concave and convex glass foil mirrors embedded in the walls and ceilings.',

        deepResearch: {
          whyItMatters: 'Considered one of the greatest masterworks of glass-mosaic artistry in South Asia, it allowed the royal court to experience the visual grandeur of an open starlit desert sky during winter without exposing themselves to chilly mountain draughts.',
          whatToNotice: 'Examine the lower marble wall panels for the celebrated "Magic Flower" bas-relief. By covering different parts of the single carved flower with your hand, you can discern seven distinct symbols: a lotus, cobra hood, elephant trunk, fish tail, corn cob, scorpion, and lion tail.',
          history: 'Begun around 1592 by Raja Man Singh I and completed in the 1630s. The imported mirror foils were crafted using specialized silvering techniques brought from Belgium and Venice through ancient spice routes.',
          culturalContext: 'Used as the winter residence (Jai Mandir) for the royal Kachwaha dynasty. Velvet drapes and fragrant incense burners were placed in the alcoves to retain radiant candle warmth.',
          visitorIntelligence: {
            bestLighting: 'Late afternoon sunlight bounces off the marble courtyard floor into the mirror alcoves.',
            crowdAdvice: 'Visit at opening (8:00 AM) or after 4:00 PM for unobstructed views into the central hall.',
            photographyTip: 'Turn off camera flash; ambient exposure captures the natural silver sparkle of the convex mirrors.'
          },
          relatedPlaces: [
            { id: 'ganesh-pol', name: 'Ganesh Pol', dist: 'Threshold to palace' },
            { id: 'diwan-i-aam', name: 'Diwan-i-Aam', dist: 'Public durbar' },
            { id: 'jal-mahal', name: 'Jal Mahal', dist: '5 km toward Jaipur' }
          ]
        }
      },

      'diwan-i-aam': {
        id: 'diwan-i-aam',
        name: 'Diwan-i-Aam',
        subtitle: 'The Hall of Public Audience',
        location: 'Second Courtyard, Amber Fort',
        categoryTag: 'CIVIC HERITAGE',
        image: 'assets/images/destinations/amber-fort-detail.jpg',
        mapsQuery: 'Diwan-e-Aam, Amber Fort, Amer, Jaipur, Rajasthan, India',
        targetProgress: 0.78,
        screenPos: { x: 46, y: 52 },

        attributes: [
          { label: 'Architecture', value: 'Double-Row Sandstone Columns & Marble Capitals' },
          { label: 'Known For', value: '27 Elephant-Head Brackets · Royal Durbar Assemblies · Acoustic Vaulting' },
          { label: 'Period', value: 'Early 17th Century' }
        ],

        quickIntel: {
          focus: 'GOVERNANCE · ARCHITECTURE · CIVIC LIFE',
          duration: '30 MIN',
          bestTime: 'EARLY MORNING (8:00 AM — 10:00 AM)',
          location: 'AMBER FORT, JAIPUR',
          crowdLevel: 'MODERATE'
        },

        summary: 'The grand pillared durbar hall where the Maharajas of Amer received public petitions, celebrated state victories, and held councils of state with regional chieftains and international emissaries.',

        deepResearch: {
          whyItMatters: 'It functioned as the open constitutional forum of the Amber kingdom, structured with acoustic geometry so that the monarch’s pronouncements resonated clearly across hundreds of attending citizens.',
          whatToNotice: 'Observe the transition of materials: the outer row of 27 columns is sculpted from warm red sandstone with carved elephant brackets, while the inner elevated colonnade is carved from pure white Makrana marble.',
          history: 'Commissioned by Mirza Raja Jai Singh I. The hall was so magnificent that contemporary Mughal chronicles record Emperor Jahangir sending inspectors fearing it rivaled the imperial court at Agra.',
          culturalContext: 'Site of the ceremonial coronation of Kachwaha rulers and festive gatherings for Dussehra, when royal cavalry and battle standards were consecrated.',
          visitorIntelligence: {
            bestLighting: 'Early morning light casts long architectural column shadows across the stone floor.',
            crowdAdvice: 'Take the elevated rampart walkway on the southern flank for a dramatic elevated view of the full column grid.',
            photographyTip: 'Use a wide focal length to align the row of 27 elephant capitals in deep perspective.'
          },
          relatedPlaces: [
            { id: 'ganesh-pol', name: 'Ganesh Pol', dist: 'Adjacent gateway' },
            { id: 'sheesh-mahal', name: 'Sheesh Mahal', dist: 'Inner court' },
            { id: 'maota-lake', name: 'Maota Lake', dist: 'Direct view below' }
          ]
        }
      },

      'maota-lake': {
        id: 'maota-lake',
        name: 'Maota Lake & Kesar Kyari',
        subtitle: 'The Valley Oasis & Floating Saffron Garden',
        location: 'Valley Base, Amer',
        categoryTag: 'LANDSCAPE HYDRAULICS',
        image: 'assets/images/destinations/amber-fort.jpg',
        mapsQuery: 'Maota Lake, Amer, Jaipur, Rajasthan, India',
        targetProgress: 0.90,
        screenPos: { x: 50, y: 55 },

        attributes: [
          { label: 'Engineering', value: 'Medieval Water Harvesting & Island Garden' },
          { label: 'Known For', value: 'Kesar Kyari (Saffron Bed) · Fort Reflection · Strategic Moat' },
          { label: 'Fed By', value: 'Aravalli Monsoon Catchment' }
        ],

        quickIntel: {
          focus: 'LANDSCAPE · HYDRAULICS · NATURE',
          duration: '30 MIN',
          bestTime: 'SUNRISE / GOLDEN HOUR SUNSET',
          location: 'AMER VALLEY, JAIPUR',
          crowdLevel: 'LOW / PEACEFUL'
        },

        summary: 'Cradled in the valley beneath the fort’s sheer cliffs, Maota Lake was engineered to supply water to Amer town while creating an impassable moat along the valley floor. In its center floats Kesar Kyari, a symmetrical star-shaped garden.',

        deepResearch: {
          whyItMatters: 'A triumph of medieval desert hydraulic engineering that gathered sparse monsoon runoff from the surrounding Aravalli hills, sustaining the fortress garrison through prolonged historical sieges.',
          whatToNotice: 'The star-shaped geometric planting beds (Charbagh style) designed in the center of the lake. Historically, saffron (kesar) bulbs were transported from Kashmir and cultivated here to scent the cool evening breezes rising toward the palace.',
          history: 'Dating back to the 16th century foundation of Amer by Raja Man Singh I, with water lift wheels (Pawan Chakkis) that raised water hundreds of vertical feet up the cliffside into fort cisterns.',
          culturalContext: 'The reflection of the illuminated golden fortress across the dark waters of Maota Lake at dusk remains the quintessential visual symbol of Rajasthan’s royal grandeur.',
          visitorIntelligence: {
            bestLighting: 'Sunset casts an intense golden glow across the fortress walls, reflected perfectly in calm water.',
            crowdAdvice: 'Walk the perimeter pathway below the parking terrace for tranquil, crowd-free vistas.',
            photographyTip: 'Use a tripod at twilight for long-exposure reflections of the floodlit battlements.'
          },
          relatedPlaces: [
            { id: 'amber-fort', name: 'Amber Fort Citadel', dist: 'Overlooking above' },
            { id: 'panna-meena', name: 'Panna Meena Stepwell', dist: '200m north' },
            { id: 'jal-mahal', name: 'Jal Mahal', dist: '5 km south on Jaipur road' }
          ]
        }
      }
    }
  }
};
