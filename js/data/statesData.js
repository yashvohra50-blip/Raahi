/**
 * RAAHI // Complete 28 States and 8 Union Territories of India (36 Entities)
 */

export const STATES_DATA = {
  // 1. NORTH INDIA
  "rajasthan": {
    id: "RJ",
    slug: "rajasthan",
    name: "Rajasthan",
    type: "state",
    region: "North",
    capital: "Jaipur",
    eyebrow: "ROYAL CITADELS • DESERT TRADITIONS",
    tagline: "Sandstone fortresses, royal palaces, desert dunes and living heritage.",
    heroImage: "assets/images/destinations/amber-fort.jpg",
    accentColor: "#d4af37",
    story: "Rajasthan is a timeless expanse where golden sand dunes meet magnificent sandstone fortresses. From the pink courtyards of Jaipur and the romantic lakes of Udaipur to the golden ramparts of Jaisalmer and the blue alleyways of Jodhpur, every corner echoes with tales of chivalry, vibrant arts, and desert hospitality.",
    quickStats: {
      bestTime: "October to March",
      capital: "Jaipur",
      languages: "Hindi, Rajasthani, Marwari",
      airports: "Jaipur (JAI), Udaipur (UDR), Jodhpur (JDH)",
      railways: "Shatabdi & Palace on Wheels network",
      idealDuration: "7-10 Days"
    },
    experiences: [
      { title: "Nahargarh Ridge Sunset", desc: "Gaze over the amber glow of Jaipur from royal battlements.", tag: "Heritage & Vistas" },
      { title: "Sam Sand Dunes Desert Camp", desc: "Star-gaze to Manganiyar folk melodies amidst undulating Thar dunes.", tag: "Desert Immersion" },
      { title: "Bagru Indigo Block Printing", desc: "Work with master artisans preserving 500-year-old botanical dye craft.", tag: "Artisan Lineage" },
      { title: "Lake Pichola Sunset Boat Ride", desc: "Glide past shimmering white marble palaces reflecting on sacred waters.", tag: "Royal Solitude" }
    ],
    food: [
      { name: "Dal Baati Churma", desc: "Crusted wheat rolls baked in wood coals, immersed in pure ghee with spiced lentils and sweet churma." },
      { name: "Laal Maas", desc: "Fiery heritage curry slow-cooked with Mathania smoked red chillies and yogurt." },
      { name: "Pyaaz Kachori & Ghevar", desc: "Crisp flaky onion pastries paired with saffron-honeycomb festive sweets." },
      { name: "Ker Sangri", desc: "Tangy desert berry and dried bean preparation cooked with mustard oil and dry spices." }
    ],
    culture: {
      crafts: "Blue Pottery, Kundan-Meenakari Jewelry, Bagru/Sanganer Block Prints, Mojaris",
      festivals: "Pushkar Camel Fair, Desert Festival Jaisalmer, Teej, Gangaur",
      music: "Manganiyar & Langa folk vocals, Kamaycha, Morchang, Khartal"
    },
    travelInfo: {
      airports: "Jaipur International (JAI), Udaipur Maharana Pratap (UDR), Jodhpur (JDH)",
      railways: "Major junctions at Jaipur, Jodhpur, Kota, Ajmer and Bikaner",
      seasonTips: "Winter days are pleasant (20-25°C) with brisk nights (5-10°C). Carry light layers."
    }
  },
  "himachal-pradesh": {
    id: "HP",
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    type: "state",
    region: "North",
    capital: "Shimla (Summer), Dharamshala (Winter)",
    eyebrow: "HIMALAYAN PEAKS • CEDAR FORESTS",
    tagline: "Snowbound passes, high-altitude Tibetan monasteries, and cedar valleys.",
    heroImage: "assets/images/destinations/key-monastery.jpg",
    accentColor: "#38bdf8",
    story: "Nestled in the western Himalayas, Himachal Pradesh is a sanctuary of snow-capped peaks, whispering deodar pine forests, emerald apple orchards, and thousand-year-old cliffside Buddhist gompas.",
    quickStats: {
      bestTime: "March to June & Sept to Nov",
      capital: "Shimla",
      languages: "Hindi, Pahari, Kangri",
      airports: "Kullu-Manali (KUU), Kangra (DHM), Shimla (SLV)",
      railways: "UNESCO Kalka-Shimla Toy Train",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Spiti Valley High Passes", desc: "Traverse Kunzum Pass into the moonscape vistas of Key and Tabo.", tag: "Trans-Himalayan Expedition" },
      { title: "Parvati Valley Trekking", desc: "Walk alongside crystal mountain torrents through deodar pine groves.", tag: "Alpine Solitude" },
      { title: "Tibetan Teachings in McLeod Ganj", desc: "Immerse in prayer wheels and monastic debates in Tsuglagkhang complex.", tag: "Spiritual Enlightenment" }
    ],
    food: [
      { name: "Himachali Dham", desc: "Traditional celebratory multi-course feast served on broad leaves with Madra, Chha Gosht, and Mittha." },
      { name: "Siddu", desc: "Steamed wheat bread stuffed with spiced crushed walnuts, poppy seeds, or lentils, served with pure ghee." },
      { name: "Kullu Trout Fish", desc: "Pan-fried mountain trout cooked with light lemon mustard spices." }
    ],
    culture: {
      crafts: "Kullu Shawls, Chamba Rumal embroidery, Kangra miniature paintings, wooden carvings",
      festivals: "Kullu Dussehra, Minjar Fair Chamba, Losar (Tibetan New Year)",
      music: "Nati folk dance, traditional Dhol-Nagada rhythms, Pahari ballads"
    },
    travelInfo: {
      airports: "Kullu Bhuntar (KUU), Dharamshala Gaggal (DHM), Shimla Jubbarhatti (SLV)",
      railways: "Broad gauge until Kalka / Pathankot; connecting scenic narrow gauge toy trains",
      seasonTips: "Heavy snowfall in high valleys from Dec-Feb. Monsoons (July-Aug) require weather checks."
    }
  },
  "uttar-pradesh": {
    id: "UP",
    slug: "uttar-pradesh",
    name: "Uttar Pradesh",
    type: "state",
    region: "North",
    capital: "Lucknow",
    eyebrow: "SACRED RIVERS • MUGHAL MASTERPIECES",
    tagline: "The spiritual cradle of the Ganga, marble wonders, and refined Nawabi culture.",
    heroImage: "assets/images/destinations/taj-mahal.jpg",
    accentColor: "#f59e0b",
    story: "Uttar Pradesh is the heartland of Indian civilization. It encompasses the sublime white marble splendor of the Taj Mahal in Agra, the sacred eternal stone ghats of Varanasi on the holy Ganga, the refined Awadhi culinary and artistic heritage of Lucknow, and the revered devotional sanctuaries of Ayodhya and Mathura.",
    quickStats: {
      bestTime: "October to March",
      capital: "Lucknow",
      languages: "Hindi, Urdu, Awadhi, Bhojpuri",
      airports: "Lucknow (LKO), Varanasi (VNS), Ayodhya (AYJ)",
      railways: "Vande Bharat, Rajdhani hubs",
      idealDuration: "5-8 Days"
    },
    experiences: [
      { title: "Ganga Aarti at Dashashwamedh", desc: "Experience brass lamps, conch shells, and incense drifting over the river at dusk.", tag: "Sacred Ritual" },
      { title: "Sunrise at the Taj Mahal", desc: "Watch the morning sun illuminate the translucent Makrana marble dome.", tag: "Architectural Icon" },
      { title: "Chikankari & Awadhi Tasting in Lucknow", desc: "Wander Old Chowk for melt-in-mouth Galouti kebabs and hand-embroidered textiles.", tag: "Nawabi Heritage" }
    ],
    food: [
      { name: "Galouti & Tunday Kebabs", desc: "Velvety spiced kebabs crafted with over 100 secret aromatic herbs and spices." },
      { name: "Varanasi Malaiyyo & Kachori Sabzi", desc: "Foamy saffron milk cloud sweet served in winter mornings with spicy hing kachori." },
      { name: "Agra Petha & Bedmi Puri", desc: "Ash gourd sweet in saffron-pistachio flavours paired with spiced lentil puris." }
    ],
    culture: {
      crafts: "Lucknow Chikankari, Banarasi Silk Brocades, Brassware of Moradabad, Perfumes of Kannauj",
      festivals: "Dev Deepawali Varanasi, Ganga Mahotsav, Lathmar Holi Barsana, Ram Navami",
      music: "Benares Gharana classical tabla and vocal, Kathak dance lineage"
    },
    travelInfo: {
      airports: "Lucknow (LKO), Varanasi (VNS), Ayodhya (AYJ), Agra (AGR)",
      railways: "Super-dense railway connectivity across all major cultural hubs",
      seasonTips: "Winter (Nov-Feb) is ideal with clear skies and misty mornings."
    }
  },
  "uttarakhand": {
    id: "UK",
    slug: "uttarakhand",
    name: "Uttarakhand",
    type: "state",
    region: "North",
    capital: "Dehradun (Winter), Gairsain (Summer)",
    eyebrow: "LAND OF THE GODS • GLACIAL SPRINGS",
    tagline: "Himalayan pilgrimages, alpine meadows, yoga capitals and tiger reserves.",
    heroImage: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1200",
    accentColor: "#06b6d4",
    story: "Known as Devbhoomi, Uttarakhand is a celestial terrain where sacred rivers emerge from high-altitude glaciers. From the peaceful yoga ashrams of Rishikesh and the holy shrines of the Char Dham to the alpine bugyals of Auli and the dense tiger corridors of Corbett.",
    quickStats: {
      bestTime: "March to June & September to November",
      capital: "Dehradun",
      languages: "Hindi, Garhwali, Kumaoni",
      airports: "Dehradun Jolly Grant (DED), Pantnagar (PGH)",
      railways: "Haridwar, Dehradun, Kathgodam railway heads",
      idealDuration: "5-8 Days"
    },
    experiences: [
      { title: "Sunrise Yoga on the Ganga in Rishikesh", desc: "Practice mindfulness on tranquil river shores beneath Himalayan foothills.", tag: "Wellness & Spirit" },
      { title: "Skiing the Alpine Slopes of Auli", desc: "Glide across powdered snow with panoramic views of Nanda Devi peak.", tag: "Mountain Adventure" },
      { title: "Jim Corbett Jungle Safari", desc: "Track wild Royal Bengal Tigers through sal forests and grassland riverbeds.", tag: "Wildlife Exploration" }
    ],
    food: [
      { name: "Kafuli & Chainsoo", desc: "Thick iron-pot cooked spinach-fenugreek stew paired with roasted ground black gram curry." },
      { name: "Aloo ke Gutke", desc: "Crispy mountain potatoes tossed with regional jambu herb, coriander, and fried red chillies." },
      { name: "Bal Mithai & Singori", desc: "Roasted fudge coated in sugar balls and sweet milk solids wrapped in fragrant Malu leaves." }
    ],
    culture: {
      crafts: "Aipan ritual floor art, Ringal bamboo craft, Kumaoni wood carving",
      festivals: "Kumbh Mela Haridwar, Nanda Devi Raj Jat, Ganga Dussehra",
      music: "Jagar spirit invocation songs, Chholiya sword dance"
    },
    travelInfo: {
      airports: "Dehradun Jolly Grant (DED), Pantnagar (PGH)",
      railways: "Haridwar, Rishikesh, Dehradun, and Kathgodam provide direct broad-gauge links",
      seasonTips: "Summers are delightful in hill stations. Winter brings skiing in Auli."
    }
  },
  "punjab": {
    id: "PB",
    slug: "punjab",
    name: "Punjab",
    type: "state",
    region: "North",
    capital: "Chandigarh",
    eyebrow: "GOLDEN SANCTUARY • FERTILE FIELDS",
    tagline: "Spiritual golden domes, boundless hospitality, and agricultural abundance.",
    heroImage: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200",
    accentColor: "#f59e0b",
    story: "Punjab, the land of five rivers, is world-renowned for its profound spirituality, joyful spirit, and lavish hospitality. The Golden Temple in Amritsar stands as an architectural and spiritual marvel open to all humankind.",
    quickStats: {
      bestTime: "October to March",
      capital: "Chandigarh",
      languages: "Punjabi, Hindi",
      airports: "Amritsar (ATQ), Chandigarh (IXC)",
      railways: "Extensive main-line network",
      idealDuration: "3-5 Days"
    },
    experiences: [
      { title: "Golden Temple Midnight Palki Sahib", desc: "Witness the sacred ceremonial procession surrounded by the shimmering Amrit Sarovar.", tag: "Spiritual Grace" },
      { title: "Wagah Border Beating Retreat", desc: "Feel the electric patriotic energy and coordinated military drills at sunset.", tag: "National Landmark" },
      { title: "Rural Farmstay & Mustard Fields", desc: "Ride tractors through blooming mustard fields and enjoy fresh dairy meals.", tag: "Agri-Tourism" }
    ],
    food: [
      { name: "Amritsari Kulcha with Chole", desc: "Multi-layered clay-oven baked potato-paneer bread served with spiced chickpeas." },
      { name: "Sarson da Saag & Makki di Roti", desc: "Slow-cooked winter mustard greens served with cornmeal flatbread and fresh white butter." },
      { name: "Rich Amritsari Lassi", desc: "Cream-topped sweet yogurt in earthen cups alongside roasted wheat-ghee sweet laddoos." }
    ],
    culture: {
      crafts: "Phulkari silk embroidery, Juttis with tilla work, Woodcraft of Kartarpur",
      festivals: "Baisakhi, Lohri, Gurpurab, Holla Mohalla Anandpur Sahib",
      music: "Bhangra & Giddha high-energy folk dances, Dhol beats"
    },
    travelInfo: {
      airports: "Sri Guru Ram Dass Jee International Amritsar (ATQ), Chandigarh (IXC)",
      railways: "High speed connections via Shatabdi & Vande Bharat Express",
      seasonTips: "Winter (Nov-Feb) provides crisp sunny weather and the season for hot sarson saag."
    }
  },
  "haryana": {
    id: "HR",
    slug: "haryana",
    name: "Haryana",
    type: "state",
    region: "North",
    capital: "Chandigarh",
    eyebrow: "ANCIENT EPIC CRADLE • MODERN HUBS",
    tagline: "Historic battlegrounds, Mahabharata legends, and cutting-edge urban hubs.",
    heroImage: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200",
    accentColor: "#10b981",
    story: "Haryana bridges ancient heritage and modern India. Home to Kurukshetra where the Bhagavad Gita was delivered, as well as the heritage crafts capital of Surajkund, and the global tech hub of Gurugram.",
    quickStats: {
      bestTime: "October to March",
      capital: "Chandigarh",
      languages: "Hindi, Haryanvi, Punjabi",
      airports: "Delhi IGI Airport (DEL - adjacent), Chandigarh (IXC)",
      railways: "Extensive railway connectivity",
      idealDuration: "2-4 Days"
    },
    experiences: [
      { title: "Brahma Sarovar at Kurukshetra", desc: "Reflect at the ancient ceremonial water tank mentioned in Vedic scriptures.", tag: "Mythological Journey" },
      { title: "Surajkund International Crafts Mela", desc: "Explore Asia's largest congregation of traditional folk artisans.", tag: "Craft Exposition" },
      { title: "Sultanpur National Bird Sanctuary", desc: "Spot migratory Siberian cranes and flamingos across protected wetlands.", tag: "Eco Sanctuary" }
    ],
    food: [
      { name: "Bajra Khichdi with Ghee", desc: "Slow-simmered pearl millet and moong dal preparation served with warm jaggery and fresh curd." },
      { name: "Kadhi Pakora & Besan Roti", desc: "Gram flour yogurt curry loaded with onion fritters and whole spices." }
    ],
    culture: {
      crafts: "Panipat woven durries, clay pottery, brass casting",
      festivals: "Surajkund Crafts Mela, Gita Mahotsav Kurukshetra, Baisakhi",
      music: "Ragini folk ballads, Saang theater"
    },
    travelInfo: {
      airports: "Delhi IGI Airport serves southern Haryana; Chandigarh Airport serves the north",
      railways: "Major junctions at Ambala, Panipat, Rohtak, and Rewari",
      seasonTips: "Winter is crisp and ideal for outdoor bird watching and heritage excursions."
    }
  },
  "delhi": {
    id: "DL",
    slug: "delhi",
    name: "Delhi",
    type: "ut",
    region: "North",
    capital: "New Delhi",
    eyebrow: "NATIONAL CAPITAL • SEVEN HISTORIC CITIES",
    tagline: "Monumental Mughal red stone, British colonial avenues, and epic street food.",
    heroImage: "https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=1200",
    accentColor: "#ef4444",
    story: "Delhi is the grand capital of India, where millennia of history blend seamlessly into vibrant modern life. From the soaring minarets of Qutub Minar and Humayun's Tomb to Chandni Chowk and Lutyens' Delhi.",
    quickStats: {
      bestTime: "October to March",
      capital: "New Delhi",
      languages: "Hindi, English, Punjabi, Urdu",
      airports: "Indira Gandhi International Airport (DEL)",
      railways: "New Delhi, Old Delhi, Hazrat Nizamuddin, Anand Vihar",
      idealDuration: "3-5 Days"
    },
    experiences: [
      { title: "Heritage Walk in Mehrauli Archaeological Park", desc: "Discover 1,000 years of continuous architectural monuments in lush parkland.", tag: "Medieval Antiquity" },
      { title: "Cycle Tour of Old Delhi & Spice Market", desc: "Navigate sunrise alleys of Khari Baoli spice bazaar and grand Jama Masjid.", tag: "Sensory Exploration" },
      { title: "Sufi Qawwali at Hazrat Nizamuddin Dargah", desc: "Listen to transcendent devotional poetry on Thursday evenings in the sacred marble courtyard.", tag: "Mystic Devotion" }
    ],
    food: [
      { name: "Old Delhi Butter Chicken & Nihari", desc: "Slow-simmered rich tomato gravy alongside overnight stewed shank meat with ginger juliennes." },
      { name: "Paranthe Wali Gali Assorted Paranthas", desc: "Deep-fried stuffed flatbreads filled with rabri, almonds, paneer, and spiced vegetables." },
      { name: "Chole Bhature & Dahi Bhalla", desc: "Puffed golden bread with spicy chickpea curry and lentil dumplings bathed in sweetened curd." }
    ],
    culture: {
      crafts: "Zardozi gold embroidery, miniature art, paper crafts of Daryaganj",
      festivals: "Qutub Festival, Republic Day Parade, International Mango Festival",
      music: "Delhi Gharana Hindustani classical, contemporary performing arts"
    },
    travelInfo: {
      airports: "Indira Gandhi International Airport (DEL - Terminals 1, 2, 3)",
      railways: "Extensive high-speed connectivity; world-class Delhi Metro",
      seasonTips: "Autumn and spring (Oct-Nov & Feb-March) offer the finest outdoor walking conditions."
    }
  },
  "jammu-and-kashmir": {
    id: "JK",
    slug: "jammu-and-kashmir",
    name: "Jammu and Kashmir",
    type: "ut",
    region: "North",
    capital: "Srinagar (Summer), Jammu (Winter)",
    eyebrow: "PARADISE VALLEYS • SHIKARA REFLECTIONS",
    tagline: "Floating houseboats on Dal Lake, alpine meadows, and pine-clad snow slopes.",
    heroImage: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?q=80&w=1200",
    accentColor: "#0ea5e9",
    story: "Often hailed as Paradise on Earth, Jammu & Kashmir enchants with its iconic cedar-wood houseboats floating on Dal Lake, saffron fields of Pampore, snow-clad slopes of Gulmarg, and the sacred mountain shrine of Vaishno Devi in the Shivalik foothills.",
    quickStats: {
      bestTime: "March to October (Summer & Autumn) & Dec-Feb (Skiing)",
      capital: "Srinagar & Jammu",
      languages: "Kashmiri, Dogri, Urdu, Hindi",
      airports: "Srinagar (SXR), Jammu (IXJ)",
      railways: "Chenab Bridge Railway Link",
      idealDuration: "6-8 Days"
    },
    experiences: [
      { title: "Dawn Shikara Ride on Dal Lake", desc: "Glide past floating flower and vegetable markets as the sun strikes the Pir Panjal range.", tag: "Alpine Waterways" },
      { title: "Gulmarg Gondola to Mt. Apharwat", desc: "Ascend above 13,000 feet on Asia's highest cable car for world-class skiing.", tag: "High Altitude Thrill" },
      { title: "Mughal Terraced Gardens", desc: "Walk among centuries-old chinar trees and fountains at Shalimar Bagh and Nishat Bagh.", tag: "Royal Landscaping" }
    ],
    food: [
      { name: "Kashmiri Wazwan", desc: "Masterful royal feast featuring Rogan Josh, Rista, Gushtaba, and Tabak Maaz." },
      { name: "Kahwa & Kashmiri Kulcha", desc: "Green tea brewed with saffron strands, whole green cardamom, and crushed almonds." }
    ],
    culture: {
      crafts: "Pashmina Shawls, Walnut wood carvings, Papier-mâché art, Silk carpets",
      festivals: "Tulip Festival Srinagar, Shikara Festival, Baisakhi",
      music: "Sufiyana Kalam, Chakri folk songs, Santoor classical repertoire"
    },
    travelInfo: {
      airports: "Sheikh ul-Alam International Airport Srinagar (SXR), Jammu Airport (IXJ)",
      railways: "Vande Bharat to Katra; direct rail across the monumental Chenab Railway Bridge",
      seasonTips: "Spring (April-May) features the Asia-largest Tulip Garden in full bloom."
    }
  },
  "ladakh": {
    id: "LA",
    slug: "ladakh",
    name: "Ladakh",
    type: "ut",
    region: "North",
    capital: "Leh",
    eyebrow: "LAND OF HIGH PASSES • MOONSCAPES",
    tagline: "Trans-Himalayan desert, cobalt high-altitude lakes, and ancient Buddhist gompas.",
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200",
    accentColor: "#6366f1",
    story: "Ladakh is a high-altitude desert wonderland situated between the Karakoram and Great Himalayan ranges. Known for its dramatically carved gorges, crystal-clear sapphire lakes like Pangong Tso, and cliffside monasteries.",
    quickStats: {
      bestTime: "May to September",
      capital: "Leh",
      languages: "Ladakhi (Bhoti), Hindi, English",
      airports: "Kushok Bakula Rimpochee Airport Leh (IXL)",
      railways: "High mountain passes via Manali & Srinagar",
      idealDuration: "7-10 Days"
    },
    experiences: [
      { title: "Pangong Tso Cobalt Waters", desc: "Witness the dramatic color shifts of the saline lake perched at 14,270 feet.", tag: "Lakeside Solitude" },
      { title: "Morning Chants at Thiksey Monastery", desc: "Ascend the 12-story hilltop monastery for resonant deep-throat Tibetan Buddhist prayers.", tag: "Monastic Living" },
      { title: "Double-Humped Camel Safari in Nubra", desc: "Ride Bactrian camels along white sand dunes framed by snow-covered mountain walls.", tag: "Desert Altitude" }
    ],
    food: [
      { name: "Ladakhi Thukpa & Momos", desc: "Steaming handmade wheat noodle soup with mountain herbs, served with yak cheese momos." },
      { name: "Butter Tea & Khambir", desc: "Salted yak butter tea paired with thick crusty whole wheat sourdough bread." }
    ],
    culture: {
      crafts: "Pashmina wool spinning, Thangka painting on silk, silver and turquoise jewellery",
      festivals: "Hemis Festival, Ladakh Festival Leh, Losar, Dosmoche",
      music: "Traditional Surna & Daman instruments, sacred monastic Cham mask dances"
    },
    travelInfo: {
      airports: "Leh Kushok Bakula Rimpochee Airport (IXL) with daily flights from Delhi",
      railways: "Accessible by spectacular highway corridors (Manali-Leh & Srinagar-Leh)",
      seasonTips: "Mandatory 48-hour acclimatization in Leh before ascending above 12,000 feet."
    }
  },
  "chandigarh": {
    id: "CH",
    slug: "chandigarh",
    name: "Chandigarh",
    type: "ut",
    region: "North",
    capital: "Chandigarh",
    eyebrow: "THE CITY BEAUTIFUL • MODERNIST ARCHITECTURE",
    tagline: "Le Corbusier's urban masterpiece, whimsical rock sculptures, and serene lakes.",
    heroImage: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200",
    accentColor: "#14b8a6",
    story: "Designed by master architect Le Corbusier as independent India's first planned city, Chandigarh is celebrated for its grid layout, open parks, Capitol Complex UNESCO monuments, and Nek Chand's Rock Garden.",
    quickStats: {
      bestTime: "October to March",
      capital: "Chandigarh",
      languages: "Hindi, Punjabi, English",
      airports: "Shaheed Bhagat Singh International Airport (IXC)",
      railways: "Chandigarh Junction with Shatabdi & Vande Bharat links",
      idealDuration: "2-3 Days"
    },
    experiences: [
      { title: "Nek Chand's Rock Garden", desc: "Wander through open-air courtyards built entirely from recycled ceramic, glass, and industrial discard.", tag: "Sculptural Wonder" },
      { title: "Sunset Stroll on Sukhna Lake Promenade", desc: "Watch the evening reflections of the Shivalik hills ripple across the reservoir.", tag: "Urban Solitude" },
      { title: "Capitol Complex Architecture Tour", desc: "Explore the Open Hand Monument, Palace of Assembly, and High Court.", tag: "Modernist Architecture" }
    ],
    food: [
      { name: "Stuffed Butter Naan & Dal Makhani", desc: "Slow-cooked black lentils simmered with butter paired with tandoor baked bread." },
      { name: "Sector 8 Street Chaat", desc: "Tangy spiced chickpea street delicacies topped with pickled ginger and mint chutney." }
    ],
    culture: {
      crafts: "Modernist furniture designs, terracotta pottery, hand-embroidered textiles",
      festivals: "Rose Festival Zakir Hussain Garden, Mango Festival",
      music: "Contemporary concerts, Punjabi folk traditions"
    },
    travelInfo: {
      airports: "Chandigarh International Airport (IXC)",
      railways: "3-hour journey from New Delhi via high-speed Shatabdi/Vande Bharat",
      seasonTips: "Autumn and winter months feature blooming roses and comfortable walking weather."
    }
  },

  // 2. WEST INDIA
  "goa": {
    id: "GA",
    slug: "goa",
    name: "Goa",
    type: "state",
    region: "West",
    capital: "Panaji",
    eyebrow: "ARABIAN SEA COASTLINE • INDO-PORTUGUESE HERITAGE",
    tagline: "Golden sand beaches, whitewashed coastal churches, spice plantations, and susegad.",
    heroImage: "assets/images/destinations/fort-aguada.jpg",
    accentColor: "#06b6d4",
    story: "Goa is a vibrant coastal haven where 450 years of Portuguese influence blend with ancient Konkani coastal culture. From 17th-century ramparts of Fort Aguada and UNESCO basilicas to peaceful palm-fringed southern shores.",
    quickStats: {
      bestTime: "November to March",
      capital: "Panaji",
      languages: "Konkani, English, Marathi, Hindi",
      airports: "Dabolim (GOI), Manohar International Mopa (GOX)",
      railways: "Konkan Railway (Madgaon, Thivim)",
      idealDuration: "4-7 Days"
    },
    experiences: [
      { title: "Heritage Walk in Fontainhas Latin Quarter", desc: "Stroll among brightly colored Portuguese villas with terracotta tile roofs.", tag: "Colonial Heritage" },
      { title: "Fort Aguada Lighthouse & Arabian Sea Views", desc: "Stand atop 17th-century coastal fortifications looking over ocean waves.", tag: "Coastal Bastion" },
      { title: "Spice Plantation Tour & River Kayaking", desc: "Sample organic vanilla and cardamom harvests before paddling through backwaters.", tag: "Nature & Aromas" }
    ],
    food: [
      { name: "Goan Fish Curry Thali", desc: "Kingfish cooked in a rich coconut-kokum-chilli gravy, served with red Goan rice." },
      { name: "Chicken Xacuti & Bebinca", desc: "Aromatic curry made with roasted poppy seeds alongside multi-layered baked coconut dessert." }
    ],
    culture: {
      crafts: "Azulejos glazed tiles, seashell crafts, coconut husk sculptures",
      festivals: "Goa Carnival, Shigmo Festival, Feast of St. Francis Xavier",
      music: "Mando ballads, Fado guitar melodies, Konkani Dulpod"
    },
    travelInfo: {
      airports: "Dabolim International (GOI) and Manohar International Airport (GOX)",
      railways: "Konkan Railway provides scenic connectivity with Madgaon (MAO) and Thivim (THVM)",
      seasonTips: "Winter is prime beach weather; monsoons (June-Sept) offer lush green hills and waterfalls."
    }
  },
  "gujarat": {
    id: "GJ",
    slug: "gujarat",
    name: "Gujarat",
    type: "state",
    region: "West",
    capital: "Gandhinagar",
    eyebrow: "WHITE SALT DESERT • ASIATIC LION SANCTUARIES",
    tagline: "Rann of Kutch salt flats, stepwells, Asiatic lions, and textile artistry.",
    heroImage: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200",
    accentColor: "#f97316",
    story: "Gujarat is a dynamic state of extreme landscapes and deep historical heritage. From the endless glowing white expanse of the Great Rann of Kutch and wild Asiatic lions in Gir Forest to the subterranean architecture of Rani ki Vav.",
    quickStats: {
      bestTime: "October to March",
      capital: "Gandhinagar",
      languages: "Gujarati, Hindi",
      airports: "Ahmedabad (AMD), Surat (STV), Vadodara (BDQ)",
      railways: "Western Railway trunk network",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Full Moon Night at Rann of Kutch", desc: "Watch the salt desert turn into a boundless sheet of shimmering silver under moonlight.", tag: "Desert Phenomenon" },
      { title: "Gir Asiatic Lion Safari", desc: "Encounter the world's last remaining wild Asiatic lions in dry deciduous teak forest.", tag: "Wildlife Heritage" },
      { title: "Rani ki Vav Stepwell Exploration", desc: "Marvel at 7 subterranean tiers of over 500 principal sculptures celebrating water.", tag: "Subterranean Art" }
    ],
    food: [
      { name: "Gujarati Thali with Farsan", desc: "Balanced sweet-savory platter with Dhokla, Khandvi, Thepla, and Kadhi." },
      { name: "Undhiyu with Jalebi", desc: "Winter vegetable slow-cooked in earthen pots paired with crisp saffron jalebi." }
    ],
    culture: {
      crafts: "Rogan art of Nirona, Bandhani tie-dye, Patola double ikat silk",
      festivals: "Navratri Garba, Rann Utsav, International Kite Festival",
      music: "Garba & Dandiya Raas, Dayro folk recitals"
    },
    travelInfo: {
      airports: "Sardar Vallabhbhai Patel International Ahmedabad (AMD), Bhuj, Rajkot",
      railways: "Major junctions at Ahmedabad, Vadodara, Surat, and Rajkot",
      seasonTips: "Visit Kutch between November and February during the Rann Utsav."
    }
  },
  "maharashtra": {
    id: "MH",
    slug: "maharashtra",
    name: "Maharashtra",
    type: "state",
    region: "West",
    capital: "Mumbai",
    eyebrow: "WESTERN GHATS FORTS • AJANTA-ELLORA CAVES",
    tagline: "Financial capitals, rock-cut cave temples, Maratha hill forts, and Konkan coasts.",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200",
    accentColor: "#e11d48",
    story: "Maharashtra is a powerhouse of commerce, cinema, and ancient rock-cut art. From the glittering skyline of Mumbai to the breathtaking 2,000-year-old Buddhist and Hindu rock-cut marvels of Ajanta & Ellora.",
    quickStats: {
      bestTime: "October to March & July-Sept (Monsoon Treks)",
      capital: "Mumbai",
      languages: "Marathi, Hindi, English",
      airports: "Mumbai CSMI (BOM), Pune (PNQ), Nagpur (NAG)",
      railways: "Central & Western Railway headquarters",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Ellora Kailash Temple Monolith", desc: "Stand in awe before the world's largest monolithic rock excavation carved top-down.", tag: "Ancient Engineering" },
      { title: "Marine Drive Sunset in Mumbai", desc: "Watch the Queen's Necklace lights illuminate along the sweeping Arabian Sea promenade.", tag: "Urban Splendor" },
      { title: "Monsoon Trek to Harishchandragad", desc: "Witness reverse waterfall phenomena and mist-wrapped cliffs in the Sahyadri mountains.", tag: "Sahyadri Adventure" }
    ],
    food: [
      { name: "Vada Pav & Misal Pav", desc: "Mumbai's iconic spiced potato fritter in fresh bun and Kolhapuri fiery sprouted bean curry." },
      { name: "Puran Poli with Katachi Amti", desc: "Sweet jaggery-chana dal stuffed flatbread served with tangy thin spiced lentil broth." }
    ],
    culture: {
      crafts: "Paithani silk sarees with peacock borders, Warli tribal art, Kolhapuri leather chappals",
      festivals: "Ganesh Chaturthi, Gudi Padwa, Banganga Music Festival",
      music: "Lavani energetic folk dance, Natya Sangeet musical theatre"
    },
    travelInfo: {
      airports: "Chhatrapati Shivaji Maharaj International Airport (BOM), Pune (PNQ), Aurangabad (IXU)",
      railways: "Extensive rail grid connecting all districts via Central and Western lines",
      seasonTips: "Monsoons transform the Sahyadri hills into lush emerald waterfalls."
    }
  },
  "dadra-and-nagar-haveli-and-daman-and-diu": {
    id: "DNHDD",
    slug: "dadra-and-nagar-haveli-and-daman-and-diu",
    name: "Dadra and Nagar Haveli and Daman and Diu",
    type: "ut",
    region: "West",
    capital: "Daman",
    eyebrow: "COASTAL FORTS • TRIBAL FORESTS",
    tagline: "Portuguese island fortresses, serene Arabian Sea beaches, and tribal culture.",
    heroImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200",
    accentColor: "#0284c7",
    story: "Consolidated into a single Union Territory, this coastal destination brings together the historic sea-fortresses of Diu, the palm-lined beaches of Daman, and the lush forested valleys of Dadra & Nagar Haveli.",
    quickStats: {
      bestTime: "October to March",
      capital: "Daman",
      languages: "Gujarati, Hindi, English, Portuguese",
      airports: "Diu Airport (DIU), Surat (STV - near Daman)",
      railways: "Vapi (for Daman & Silvassa), Veraval (for Diu)",
      idealDuration: "3-5 Days"
    },
    experiences: [
      { title: "Diu Fort & Naida Caves", desc: "Walk along 16th-century stone bastions overlooking the sea and explore natural sunlight rock caverns.", tag: "Coastal Antiquity" },
      { title: "Ghoghla Beach Watersports", desc: "Enjoy clean Blue Flag certified golden sand shores and paragliding over the ocean.", tag: "Coastal Leisure" },
      { title: "Tribal Heritage Museum in Silvassa", desc: "Discover Warli paintings, traditional hunting bows, and musical instruments of local tribes.", tag: "Tribal Heritage" }
    ],
    food: [
      { name: "Cohelo & Prawn Balchão", desc: "Portuguese-influenced marinated prawn preparation with coastal spices and vinegar." },
      { name: "Fresh Catch Seafood Tawa Fry", desc: "Catch-of-the-day seafood seasoned with local red chilli paste." }
    ],
    culture: {
      crafts: "Tortoiseshell carving, mat weaving, Warli tribal paintings",
      festivals: "Festa De Diu, Nariyal Poornima, Garba, Christmas",
      music: "Mando and Portuguese folk dance, Tarpa dance of the Warli community"
    },
    travelInfo: {
      airports: "Diu Airport (DIU) has direct flights from Mumbai; Daman is accessed via Surat Airport",
      railways: "Vapi Railway Station on Western line serves Daman & Silvassa",
      seasonTips: "Winter months (Nov-Feb) offer breezy beach temperatures."
    }
  },

  // 3. SOUTH INDIA
  "kerala": {
    id: "KL",
    slug: "kerala",
    name: "Kerala",
    type: "state",
    region: "South",
    capital: "Thiruvananthapuram",
    eyebrow: "TROPICAL BACKWATERS • SPICE PLANTATIONS",
    tagline: "Tranquil emerald lagoons, misty Western Ghats tea hills, and Kathakali art.",
    heroImage: "assets/images/destinations/alleppey-backwaters.jpg",
    accentColor: "#10b981",
    story: "Known as God's Own Country, Kerala is a tropical paradise where interconnected canals and lagoons meet mist-draped Western Ghats tea estates, pristine Arabian Sea coastlines, and ancient Ayurvedic healing traditions.",
    quickStats: {
      bestTime: "September to March",
      capital: "Thiruvananthapuram",
      languages: "Malayalam, English",
      airports: "Kochi (COK), Trivandrum (TRV), Kozhikode (CCJ), Kannur (CNN)",
      railways: "Extensive coastal rail line",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Overnight Houseboat in Alleppey", desc: "Drift along palm-fringed canals on a handcrafted traditional kettuvallam.", tag: "Backwater Serenity" },
      { title: "Tea Estate Walking in Munnar", desc: "Walk among rolling emerald carpet slopes and encounter the endangered Nilgiri Tahr.", tag: "Highland Solitude" },
      { title: "Kathakali Performance & Kalaripayattu", desc: "Observe elaborate facial makeup rituals and ancient martial arts mastery.", tag: "Performing Traditions" }
    ],
    food: [
      { name: "Kerala Sadya on Banana Leaf", desc: "Vegetarian feast of 24+ dishes including Avial, Sambar, Olan, Thoran, and sweet Payasam." },
      { name: "Appam with Ishtu & Karimeen Pollichathu", desc: "Lacy fermented rice pancakes with coconut milk stew alongside pearl spot fish baked in banana leaves." }
    ],
    culture: {
      crafts: "Aranmula metal mirrors, Coir crafts, Bell-metal lamps, Kathakali wooden masks",
      festivals: "Onam, Thrissur Pooram, Vishu, Nehru Trophy Boat Race",
      music: "Sopana Sangeetham, Chenda Melam percussion ensembles, Mohiniyattam"
    },
    travelInfo: {
      airports: "Cochin International (COK - 100% solar powered), Trivandrum (TRV), Calicut (CCJ), Kannur (CNN)",
      railways: "Full coastal double-track rail corridor from Kasaragod to Kanyakumari",
      seasonTips: "Winter is dry and pleasant; June-August monsoons are peak for Ayurvedic rejuvenation therapies."
    }
  },
  "tamil-nadu": {
    id: "TN",
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    type: "state",
    region: "South",
    capital: "Chennai",
    eyebrow: "DRAVIDIAN TEMPLE GEMS • LIVING CLASSICAL ROOTS",
    tagline: "Soaring gopuram temple towers, Carnatic melodies, Chettinad mansions, and silk.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200",
    accentColor: "#f59e0b",
    story: "Tamil Nadu represents one of the oldest living classical civilizations on earth. It is celebrated for monumental Dravidian stone temple complexes like Brihadisvara in Thanjavur and Meenakshi Amman in Madurai, palatial mansions of Chettinad, and the Nilgiri hills.",
    quickStats: {
      bestTime: "October to March",
      capital: "Chennai",
      languages: "Tamil, English",
      airports: "Chennai (MAA), Madurai (IXM), Coimbatore (CJB)",
      railways: "Southern Railway hub",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Meenakshi Temple Night Ceremony", desc: "Witness the ceremonial procession of Lord Shiva amidst incense and nadaswaram music.", tag: "Sacred Grandeur" },
      { title: "Nilgiri Mountain UNESCO Toy Train", desc: "Ascend from Mettupalayam to Ooty through 250 bridges and pine forests.", tag: "Mountain Wonder" },
      { title: "Chettinad Heritage Mansion Trail", desc: "Explore 19th-century merchant mansions adorned with Burmese teak and Belgian crystal.", tag: "Architectural Opulence" }
    ],
    food: [
      { name: "Authentic Chettinad Pepper Chicken", desc: "Fiery regional curry prepared with freshly ground black peppercorns and star anise." },
      { name: "Filter Coffee & Idli-Sambar", desc: "Frothy chicory-infused decoction coffee served in brass dabarah alongside light steamed rice cakes." }
    ],
    culture: {
      crafts: "Kanchipuram silk sarees, Thanjavur gold paintings, Bronze casting of Swamimalai",
      festivals: "Pongal, Margazhi Music Season Chennai, Natyanjali Dance Festival",
      music: "Carnatic classical music, Bharatanatyam classical dance"
    },
    travelInfo: {
      airports: "Chennai (MAA), Coimbatore (CJB), Madurai (IXM), Tiruchirappalli (TRZ)",
      railways: "Chennai Central and Egmore connect every district via Shatabdi and Vande Bharat",
      seasonTips: "December-January brings Chennai's world-famous Margazhi classical music season."
    }
  },
  "karnataka": {
    id: "KA",
    slug: "karnataka",
    name: "Karnataka",
    type: "state",
    region: "South",
    capital: "Bengaluru",
    eyebrow: "VIJAYANAGARA RUINS • COFFEE FORESTS",
    tagline: "UNESCO boulder ruins of Hampi, Mysore royal palaces, and Western Ghats wildlife.",
    heroImage: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200",
    accentColor: "#8b5cf6",
    story: "Karnataka is a diverse state where the ancient and the hyper-modern thrive together. From the monumental boulder-hewn ruins of Hampi and Hoysala temples to the coffee hills of Coorg and tech capital Bengaluru.",
    quickStats: {
      bestTime: "October to March",
      capital: "Bengaluru",
      languages: "Kannada, English, Tulu",
      airports: "Bengaluru (BLR), Mangaluru (IXE), Belagavi (IXG)",
      railways: "South Western Railway hub",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Bouldering & Sunset in Hampi", desc: "Climb granite boulders beside the Tungabhadra River to view 14th-century Vijayanagara ruins.", tag: "Ancient Citadel" },
      { title: "Mysore Palace Illumination", desc: "Watch 100,000 golden incandescent bulbs illuminate the grand royal palace.", tag: "Royal Majesty" },
      { title: "Coffee Plantation Walk in Coorg", desc: "Sample single-origin Arabica roasts and walk beneath pepper vines.", tag: "Highland Plantations" }
    ],
    food: [
      { name: "Mysore Masala Dosa", desc: "Crispy golden fermented crepe smeared with spicy red garlic chutney and potato filling." },
      { name: "Bisi Bele Bath & Coorg Pandi Curry", desc: "Spiced lentil-rice dish and tender pork cooked in wild black Kachampuli vinegar." }
    ],
    culture: {
      crafts: "Mysore Silk, Channapatna wooden toys, Sandalwood carving, Bidriware",
      festivals: "Mysore Dasara, Hampi Utsav, Karaga Bengaluru, Kambala",
      music: "Carnatic music tradition, Yakshagana mythological dance-theatre"
    },
    travelInfo: {
      airports: "Kempegowda International Bengaluru (BLR), Mangaluru (IXE), Mysuru (MYQ)",
      railways: "Broad gauge connections through South Western Railway",
      seasonTips: "Winter is prime for visiting the ruins in Hampi."
    }
  },
  "andhra-pradesh": {
    id: "AP",
    slug: "andhra-pradesh",
    name: "Andhra Pradesh",
    type: "state",
    region: "South",
    capital: "Amaravati",
    eyebrow: "SACRED HILL SHRINES • COASTAL DELTAS",
    tagline: "Tirupati Balaji spiritual sanctuary, Eastern Ghats valleys, and spicy culinary heritage.",
    heroImage: "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200",
    accentColor: "#ea580c",
    story: "Andhra Pradesh combines ancient Buddhist heritage, sacred hill shrines, and a 974 km coastline. From the world-famous hill temple of Tirumala Tirupati and the coffee hills of Araku Valley to the rock-cut caves of Undavalli.",
    quickStats: {
      bestTime: "October to March",
      capital: "Amaravati",
      languages: "Telugu, English",
      airports: "Visakhapatnam (VTZ), Vijayawada (VGA), Tirupati (TIR)",
      railways: "East Coast & South Central Railway",
      idealDuration: "5-7 Days"
    },
    experiences: [
      { title: "Tirumala Temple Darshan", desc: "Ascend the sacred seven hills of the Seshachalam range.", tag: "Sacred Pilgrimage" },
      { title: "Vistadome Train to Araku Valley", desc: "Ride through 84 bridges and tunnels inside glass-roofed coaches.", tag: "Scenic Mountain Rail" },
      { title: "Borra Caves Underground Marvel", desc: "Explore million-year-old limestone stalactite and stalagmite formations.", tag: "Geological Antiquity" }
    ],
    food: [
      { name: "Gongura Pachadi & Andhra Thali", desc: "Tangy sorrel leaf chutney mixed with hot rice and ghee, served with spicy Pappu." },
      { name: "Pesarattu with Ginger Chutney", desc: "Green gram crepe stuffed with savoury upma, a breakfast signature." }
    ],
    culture: {
      crafts: "Kalamkari hand-painted textiles, Kondapalli wooden toys, Dharmavaram silk",
      festivals: "Ugadi, Brahmotsavam Tirupati, Visakha Utsav",
      music: "Kuchipudi classical dance, Annamacharya devotional keertanas"
    },
    travelInfo: {
      airports: "Visakhapatnam (VTZ), Vijayawada (VGA), Tirupati (TIR)",
      railways: "Major trunk lines connecting Chennai, Kolkata, and Hyderabad",
      seasonTips: "Winter months (Nov-Feb) offer breezy coastal weather."
    }
  },
  "telangana": {
    id: "TG",
    slug: "telangana",
    name: "Telangana",
    type: "state",
    region: "South",
    capital: "Hyderabad",
    eyebrow: "PEARL CITADELS • DECCAN ARCHITECTURE",
    tagline: "Historic Golconda ramparts, Charminar bazaars, Kakatiya stone temples, and royal biryani.",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200",
    accentColor: "#ec4899",
    story: "Telangana is a land of rich Deccan history where Qutb Shahi and Asaf Jahi dynasties blended with indigenous Telugu culture. Known for Charminar and Golconda Fort in Hyderabad and UNESCO-listed Ramappa Temple.",
    quickStats: {
      bestTime: "October to March",
      capital: "Hyderabad",
      languages: "Telugu, Urdu, Hindi, English",
      airports: "Rajiv Gandhi International Hyderabad (HYD)",
      railways: "South Central Railway headquarters",
      idealDuration: "3-5 Days"
    },
    experiences: [
      { title: "Acoustics of Golconda Fort", desc: "Clap at the entrance portico to send sound signals across 1 km to the hilltop Bala Hissar pavilion.", tag: "Medieval Engineering" },
      { title: "UNESCO Ramappa Temple Floating Bricks", desc: "Admire 800-year-old carvings and roof structures built with floating bricks.", tag: "UNESCO Masterpiece" },
      { title: "Chowmahalla Palace Royal Walk", desc: "Explore grand chandeliers and courtyards of the Nizams.", tag: "Royal Palace" }
    ],
    food: [
      { name: "Hyderabadi Dum Biryani", desc: "Fragrant basmati rice and marinated meat slow-cooked together sealed with dough in a handi." },
      { name: "Haleem & Qubani ka Meetha", desc: "Slow-cooked paste of meat, wheat, and lentils alongside stewed apricot dessert." }
    ],
    culture: {
      crafts: "Pochampally Ikat silk, Bidri metal inlay with silver, Dokra brass casting",
      festivals: "Bonalu, Bathukamma floral festival, Numaishe Exhibition",
      music: "Oggu Katha folk performances, Qawwali"
    },
    travelInfo: {
      airports: "Rajiv Gandhi International Airport (HYD) with nonstop flights worldwide",
      railways: "Major junctions at Secunderabad (SC) and Hyderabad Deccan (HYB)",
      seasonTips: "Winter (Nov-Feb) provides ideal mild temperatures."
    }
  },
  "puducherry": {
    id: "PY",
    slug: "puducherry",
    name: "Puducherry",
    type: "ut",
    region: "South",
    capital: "Puducherry",
    eyebrow: "FRENCH COLONIAL QUARTERS • EXPERIMENTAL COMMUNE",
    tagline: "Mustard-yellow colonial villas, tranquil seafront promenades, and Auroville.",
    heroImage: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1200",
    accentColor: "#f43f5e",
    story: "Puducherry preserves French colonial charm with bougainvillea-draped mustard villas in White Town, vibrant Tamil quarters with traditional thinnai verandas, and the universal township of Auroville.",
    quickStats: {
      bestTime: "October to March",
      capital: "Puducherry",
      languages: "Tamil, French, English",
      airports: "Puducherry (PNY), Chennai (MAA - 2.5 hrs)",
      railways: "Puducherry Railway Station",
      idealDuration: "2-4 Days"
    },
    experiences: [
      { title: "Cycle the French Quarter (White Town)", desc: "Pedal past colonial villas and chic art galleries along cobblestone streets.", tag: "Colonial Charm" },
      { title: "Matrimandir Meditation in Auroville", desc: "Sit inside the serene golden sphere designed as the soul of the township.", tag: "Mindfulness" },
      { title: "Sunrise on Promenade Beach", desc: "Walk along the 1.5 km oceanfront promenade.", tag: "Seaside Serenity" }
    ],
    food: [
      { name: "Franco-Tamil Fusion Bouillabaisse", desc: "Fisherman seafood stew infused with French herbs and local curry leaves." },
      { name: "Artisanal Croissants & Quiches", desc: "Flaky French pastries baked fresh daily in wood-fired ovens." }
    ],
    culture: {
      crafts: "Handmade paper at Sri Aurobindo Ashram, clay ceramics, leather goods",
      festivals: "Bastille Day, French Food Festival, Pongal",
      music: "Chamber concerts, Carnatic music, spiritual chants"
    },
    travelInfo: {
      airports: "Puducherry Airport (PNY); Chennai Airport is 135 km via scenic ECR",
      railways: "Puducherry (PDY) links directly to Chennai and Bengaluru",
      seasonTips: "Winter brings cool ocean breezes and perfect weather for cafe dining."
    }
  },
  "lakshadweep": {
    id: "LD",
    slug: "lakshadweep",
    name: "Lakshadweep",
    type: "ut",
    region: "South",
    capital: "Kavaratti",
    eyebrow: "CORAL ATOLLS • TURQUOISE LAGOONS",
    tagline: "Pristine coral reefs, secluded coconut atolls, and transparent waters.",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
    accentColor: "#06b6d4",
    story: "Lakshadweep is an archipelago of 36 coral islands in the Arabian Sea. Renowned for untouched marine biodiversity, turquoise lagoons, vibrant live reefs, and calm islands like Bangaram and Agatti.",
    quickStats: {
      bestTime: "October to mid-May",
      capital: "Kavaratti",
      languages: "Malayalam dialect, Mahl, English",
      airports: "Agatti Airport (AGX)",
      railways: "Accessible by sea/flight from Kochi",
      idealDuration: "4-6 Days"
    },
    experiences: [
      { title: "Scuba Diving in Bangaram Reefs", desc: "Dive into warm crystal waters teeming with sea turtles, manta rays, and reef sharks.", tag: "Marine Safari" },
      { title: "Glass-Bottom Boat Tour in Kavaratti", desc: "Observe living coral gardens without getting wet.", tag: "Coral Wonder" }
    ],
    food: [
      { name: "Kavaratti Tuna Curry & Parotta", desc: "Fresh oceanic skipjack tuna simmered in spiced coconut milk and curry leaves." }
    ],
    culture: {
      crafts: "Coconut shell carving, coir rope twining, traditional boat building",
      festivals: "Eid-ul-Fitr, Island Fest",
      music: "Kolkali martial stick dance"
    },
    travelInfo: {
      airports: "Agatti Airport (AGX) receives daily flights from Kochi (COK)",
      railways: "Passenger cruise ships operate regularly from Kochi port",
      seasonTips: "Permits are required for all visitors."
    }
  },
  "andaman-and-nicobar-islands": {
    id: "AN",
    slug: "andaman-and-nicobar-islands",
    name: "Andaman and Nicobar Islands",
    type: "ut",
    region: "South",
    capital: "Port Blair",
    eyebrow: "EMERALD ISLANDS • TROPICAL FORESTS",
    tagline: "Cellular Jail national memorial, Radhanagar white sand beaches, and coral biospheres.",
    heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200",
    accentColor: "#0284c7",
    story: "The Andaman & Nicobar archipelago encompasses over 500 islands nestled between the Bay of Bengal and Andaman Sea. Famous for the historic Cellular Jail and world-celebrated Radhanagar Beach.",
    quickStats: {
      bestTime: "October to May",
      capital: "Port Blair",
      languages: "Hindi, Bengali, Tamil, Telugu, English",
      airports: "Veer Savarkar International Port Blair (IXZ)",
      railways: "Port Blair gateway",
      idealDuration: "5-8 Days"
    },
    experiences: [
      { title: "Radhanagar Beach Sunset (Havelock)", desc: "Walk on powdery white sand bordered by tropical mahua trees and turquoise waves.", tag: "World-Class Shoreline" },
      { title: "Cellular Jail Light & Sound Show", desc: "Listen to chronicles of India's freedom fighters in the historic colonial memorial.", tag: "National Memorial" }
    ],
    food: [
      { name: "Fresh Tandoori Crab & Lobster", desc: "Seafood seasoned with crushed island spices and lemon garlic butter." }
    ],
    culture: {
      crafts: "Cane and bamboo basketry, coconut shell artifacts, seashell jewelry",
      festivals: "Island Tourism Festival, Subhash Mela",
      music: "Multi-ethnic folk music reflecting island spirit"
    },
    travelInfo: {
      airports: "Veer Savarkar International Port Blair (IXZ) connects to Chennai, Kolkata, Delhi",
      railways: "High-speed private catamarans connect Port Blair to Havelock & Neil",
      seasonTips: "November to April provides sunny skies and peak water clarity."
    }
  },

  // 4. EAST & CENTRAL INDIA
  "west-bengal": {
    id: "WB",
    slug: "west-bengal",
    name: "West Bengal",
    type: "state",
    region: "East",
    capital: "Kolkata",
    eyebrow: "CULTURAL RENAISSANCE • SUNDARBANS TIGERS",
    tagline: "Victorian colonial elegance, Darjeeling tea hills, Royal Bengal Tigers, and Durga Puja.",
    heroImage: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200",
    accentColor: "#f59e0b",
    story: "West Bengal spans from the towering snow peaks of Kanchenjunga in Darjeeling to the mangrove deltas of the Sundarbans. Home to Kolkata, revered for literary giants, artistic cinema, and legendary sweets.",
    quickStats: {
      bestTime: "October to March",
      capital: "Kolkata",
      languages: "Bengali, English, Hindi",
      airports: "Kolkata (CCU), Bagdogra (IXB)",
      railways: "Howrah & Sealdah major hubs",
      idealDuration: "6-9 Days"
    },
    experiences: [
      { title: "Darjeeling Himalayan Toy Train", desc: "Ride the 1881 steam train to India's highest railway station with views of Kanchenjunga.", tag: "UNESCO Railway" },
      { title: "Sundarbans Boat Safari", desc: "Navigate mangrove channels to spot Royal Bengal Tigers and estuarine crocodiles.", tag: "Mangrove Wilderness" }
    ],
    food: [
      { name: "Kolkata Biryani with Aloo", desc: "Fragrant biryani featuring melt-in-mouth spiced potato, egg, and tender meat." },
      { name: "Rosogolla & Mishti Doi", desc: "Iconic spongy chhena balls in light syrup alongside caramel baked yogurt." }
    ],
    culture: {
      crafts: "Bishnupur Terracotta, Kantha embroidery, Baluchari silk sarees",
      festivals: "Durga Puja (UNESCO Heritage), Kolkata Book Fair, Poush Mela",
      music: "Rabindra Sangeet, Baul mystic songs"
    },
    travelInfo: {
      airports: "Netaji Subhash Chandra Bose International Kolkata (CCU), Bagdogra (IXB)",
      railways: "Howrah (HWH) and Sealdah (SDAH) are the busiest rail networks in eastern India",
      seasonTips: "Autumn during Durga Puja (Sept-Oct) is the most vibrant time."
    }
  },
  "bihar": {
    id: "BR",
    slug: "bihar",
    name: "Bihar",
    type: "state",
    region: "East",
    capital: "Patna",
    eyebrow: "BUDDHIST ENLIGHTENMENT • NALANDA ROOTS",
    tagline: "The Bodhi Tree where Buddha found enlightenment, ancient universities, and Madhubani art.",
    heroImage: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200",
    accentColor: "#eab308",
    story: "Bihar is the sacred birthplace of Buddhism and Jainism. Here under the Bodhi Tree in Bodh Gaya, Gautama Buddha attained enlightenment. Home to ancient Nalanda University.",
    quickStats: {
      bestTime: "October to March",
      capital: "Patna",
      languages: "Hindi, Maithili, Bhojpuri",
      airports: "Patna (PAT), Gaya (GAY), Darbhanga (DBR)",
      railways: "East Central Railway",
      idealDuration: "4-6 Days"
    },
    experiences: [
      { title: "Meditation under the Bodhi Tree", desc: "Sit beside the UNESCO Mahabodhi Temple where the Buddha achieved enlightenment.", tag: "Spiritual Epicenter" },
      { title: "Nalanda Ancient University Ruins", desc: "Walk among red brick monasteries that educated 10,000 scholars in the 5th century.", tag: "Ancient Academy" }
    ],
    food: [
      { name: "Litti Chokha with Desi Ghee", desc: "Wood-coal roasted wheat balls stuffed with spiced sattu and roasted eggplant mash." }
    ],
    culture: {
      crafts: "Madhubani paintings, Tikuli art, Sikki grass weaving",
      festivals: "Chhath Puja, Sonepur Mela, Buddha Jayanti",
      music: "Maithili & Bhojpuri folk songs, classical Dhrupad"
    },
    travelInfo: {
      airports: "Jay Prakash Narayan Airport Patna (PAT), Gaya International Airport (GAY)",
      railways: "Patna Junction connects directly to New Delhi, Kolkata, Mumbai",
      seasonTips: "Winter months offer serene weather for Buddhist pilgrimage circuits."
    }
  },
  "odisha": {
    id: "OD",
    slug: "odisha",
    name: "Odisha",
    type: "state",
    region: "East",
    capital: "Bhubaneswar",
    eyebrow: "SUN TEMPLE CHARIOTS • SACRED RATH YATRA",
    tagline: "Konark Sun Temple stone wheels, Puri Jagannath sanctuary, and Chilika lagoon.",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
    accentColor: "#f97316",
    story: "Odisha is a coastal realm of magnificent Kalinga temple architecture, sacred pilgrimage traditions, and pristine ecological sanctuaries like the Sun Temple at Konark and Chilika Lake.",
    quickStats: {
      bestTime: "October to March",
      capital: "Bhubaneswar",
      languages: "Odia, English, Hindi",
      airports: "Bhubaneswar (BBI), Jharsuguda (JRG)",
      railways: "East Coast Railway headquarters",
      idealDuration: "5-8 Days"
    },
    experiences: [
      { title: "Konark Sun Temple Carvings", desc: "Marvel at 24 sculpted stone wheels that function as precise sundials.", tag: "Architectural Feat" },
      { title: "Irrawaddy Dolphin Safari on Chilika Lake", desc: "Boat through lagoon channels to spot endangered playful dolphins.", tag: "Eco Lagoon" }
    ],
    food: [
      { name: "Puri Mahaprasad & Dalma", desc: "Sacred 56-item temple offering cooked in earthen pots featuring lentils and raw papaya." },
      { name: "Chhena Poda", desc: "Carmelized baked cottage cheese cake infused with cardamom." }
    ],
    culture: {
      crafts: "Pattachitra palm-leaf art, Silver Filigree of Cuttack, Sambalpuri Ikat",
      festivals: "Puri Rath Yatra, Konark Dance Festival, Bali Jatra",
      music: "Odissi classical dance, Odissi classical music"
    },
    travelInfo: {
      airports: "Biju Patnaik International Airport Bhubaneswar (BBI)",
      railways: "Bhubaneswar and Puri stations offer express and Vande Bharat services",
      seasonTips: "December hosts the prestigious Konark Dance Festival."
    }
  },
  "jharkhand": {
    id: "JH",
    slug: "jharkhand",
    name: "Jharkhand",
    type: "state",
    region: "East",
    capital: "Ranchi",
    eyebrow: "WATERFALL HILLS • TRIBAL WOODLANDS",
    tagline: "Rushing waterfalls, sacred Parasnath peaks, and ancient tribal Sohrai murals.",
    heroImage: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1200",
    accentColor: "#84cc16",
    story: "Jharkhand is blessed with rolling hills, cascading waterfalls, mineral-rich plateaus, and vibrant indigenous tribal cultures like Sohrai wall paintings and sacred Shikharji peak.",
    quickStats: {
      bestTime: "October to March",
      capital: "Ranchi",
      languages: "Hindi, Santhali, Mundari",
      airports: "Ranchi (IXR), Deoghar (DGH)",
      railways: "South Eastern & East Central Railway",
      idealDuration: "4-6 Days"
    },
    experiences: [
      { title: "Hundru & Jonha Waterfalls Trail", desc: "Witness the Subarnarekha River plunge over dramatic basalt rock tiers.", tag: "Cascading Torrents" },
      { title: "Baidyanath Dham Temple Darshan", desc: "Visit one of the 12 sacred Jyotirlingas in Deoghar.", tag: "Sacred Jyotirlinga" }
    ],
    food: [
      { name: "Dhuska with Ghugni", desc: "Deep-fried fermented rice-lentil pancakes served with spicy black chickpea curry." }
    ],
    culture: {
      crafts: "Sohrai & Khovar wall murals, Dokra brass craft, Pyatkar paintings",
      festivals: "Sarhul (Spring tree worship), Karma, Sohrai",
      music: "Jhumair folk dance, traditional Mandar drums"
    },
    travelInfo: {
      airports: "Birsa Munda Airport Ranchi (IXR) and Deoghar Airport (DGH)",
      railways: "Ranchi, Tatanagar, and Dhanbad are major railway hubs",
      seasonTips: "Winter brings pleasant temperatures for waterfall treks."
    }
  },
  "madhya-pradesh": {
    id: "MP",
    slug: "madhya-pradesh",
    name: "Madhya Pradesh",
    type: "state",
    region: "Central",
    capital: "Bhopal",
    eyebrow: "THE HEART OF INDIA • TIGER SANCTUARIES",
    tagline: "Khajuraho temples, Sanchi Buddhist stupas, Kanha tigers, and Gwalior fortresses.",
    heroImage: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200",
    accentColor: "#f59e0b",
    story: "Madhya Pradesh is the geographic and historical heart of India. It boasts UNESCO sites including Khajuraho temples, Sanchi stupas, and Bhimbetka prehistoric shelters alongside premier tiger reserves.",
    quickStats: {
      bestTime: "October to March",
      capital: "Bhopal",
      languages: "Hindi, Malvi, Bundeli, Gondi",
      airports: "Indore (IDR), Bhopal (BHO), Khajuraho (HJR)",
      railways: "West Central Railway hub",
      idealDuration: "7-10 Days"
    },
    experiences: [
      { title: "Khajuraho Temple Sculpture Trail", desc: "Admire medieval Chandela architecture and intricate carvings.", tag: "UNESCO Masterpiece" },
      { title: "Bandhavgarh Tiger Safari", desc: "Track wild tigers in high-density reserve forests.", tag: "Tiger Capital" }
    ],
    food: [
      { name: "Indori Poha & Bhutte ka Kees", desc: "Steamed seasoned flattened rice topped with Sev alongside grated spiced corn porridge." },
      { name: "Dal Bafla with Ladoos", desc: "Boiled and baked wheat dough dumplings soaked in ghee." }
    ],
    culture: {
      crafts: "Chanderi silk-cotton sarees, Maheshwari weaves, Gond tribal art",
      festivals: "Khajuraho Dance Festival, Tansen Music Festival Gwalior",
      music: "Gwalior Gharana classical vocal, tribal Karma dances"
    },
    travelInfo: {
      airports: "Devi Ahilyabai Holkar Indore (IDR), Raja Bhoj Bhopal (BHO), Khajuraho (HJR)",
      railways: "Bhopal, Itarsi, Gwalior, and Jabalpur form central junction points",
      seasonTips: "Winter is best for national park game drives."
    }
  },
  "chhattisgarh": {
    id: "CG",
    slug: "chhattisgarh",
    name: "Chhattisgarh",
    type: "state",
    region: "Central",
    capital: "Raipur",
    eyebrow: "TRIBAL BASTAR • NIAGARA OF INDIA",
    tagline: "Chitrakote horseshoe waterfalls, ancient Bastar bell metal, and sal forests.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
    accentColor: "#84cc16",
    story: "Chhattisgarh is an enchanting heartland of dense sal forests, ancient tribal kingdoms, and majestic waterfalls like Chitrakote Falls and lost-wax Dokra brass casting.",
    quickStats: {
      bestTime: "October to March",
      capital: "Raipur",
      languages: "Chhattisgarhi, Hindi, Gondi",
      airports: "Raipur (RPR), Jagdalpur (JGB)",
      railways: "South East Central Railway",
      idealDuration: "4-7 Days"
    },
    experiences: [
      { title: "Chitrakote Horseshoe Waterfall", desc: "Stand before the 300-meter wide cascading curtain of the Indravati River.", tag: "Water Wonder" },
      { title: "Bastar Dussehra 75-Day Festival", desc: "Witness the world's longest cultural festival dedicated to Goddess Danteshwari.", tag: "Tribal Pageantry" }
    ],
    food: [
      { name: "Chila & Fara with Tomato Chutney", desc: "Steamed and seasoned rice flour dumplings tossed with mustard and sesame." }
    ],
    culture: {
      crafts: "Bastar Dokra bronze casting, Wrought iron craft, Kosa silk",
      festivals: "Bastar Dussehra, Madai Festival, Rajim Kumbh Mela",
      music: "Pandavani epic narration, Panthi dance"
    },
    travelInfo: {
      airports: "Swami Vivekananda Airport Raipur (RPR), Jagdalpur (JGB)",
      railways: "Raipur, Bilaspur, and Durg connect to all metros",
      seasonTips: "Monsoons and post-monsoon (Aug-Nov) offer roaring waterfall volumes."
    }
  },

  // 5. NORTHEAST INDIA
  "assam": {
    id: "AS",
    slug: "assam",
    name: "Assam",
    type: "state",
    region: "Northeast",
    capital: "Dispur (Guwahati)",
    eyebrow: "BRAHMAPUTRA REALM • ONE-HORNED RHINOS",
    tagline: "Kaziranga rhino sanctuaries, Majuli river island, golden Muga silk, and tea valleys.",
    heroImage: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200",
    accentColor: "#10b981",
    story: "Assam is the majestic gateway to Northeast India, dominated by the mighty Brahmaputra River. It is home to Kaziranga National Park, world's largest river island Majuli, and rolling tea gardens.",
    quickStats: {
      bestTime: "October to April",
      capital: "Dispur",
      languages: "Assamese, Bodo, Bengali, English",
      airports: "Guwahati (GAU), Dibrugarh (DIB), Jorhat (JRH)",
      railways: "Northeast Frontier Railway",
      idealDuration: "5-8 Days"
    },
    experiences: [
      { title: "Kaziranga Safari", desc: "Traverse elephant-grass marshes at dawn to observe one-horned rhinoceroses.", tag: "UNESCO Wildlife" },
      { title: "Majuli Island Satra Culture", desc: "Learn mask-making at 500-year-old monastic centres on the Brahmaputra.", tag: "River Island Heritage" }
    ],
    food: [
      { name: "Masor Tenga & Khaar", desc: "Light sour fish curry with elephant apple and alkaline raw papaya preparation." },
      { name: "Pitha & Assam Tea", desc: "Steamed rice flour cakes stuffed with coconut and jaggery alongside single-estate tea." }
    ],
    culture: {
      crafts: "Muga Golden Silk & Eri silk weaving, Bamboo and cane crafts, Majuli masks",
      festivals: "Bihu (Rongali, Kongali, Bhogali), Ambubachi Mela",
      music: "Bihu dance with Dhol and Pepa, Borgeet songs"
    },
    travelInfo: {
      airports: "Guwahati (GAU), Dibrugarh (DIB), Jorhat (JRH)",
      railways: "Guwahati connects directly via Rajdhani and Vande Bharat to Delhi",
      seasonTips: "Kaziranga National Park remains open from November to April."
    }
  },
  "meghalaya": {
    id: "ML",
    slug: "meghalaya",
    name: "Meghalaya",
    type: "state",
    region: "Northeast",
    capital: "Shillong",
    eyebrow: "ABODE OF CLOUDS • LIVING ROOT BRIDGES",
    tagline: "Bio-engineered living root bridges, crystal Umngot river, and roaring waterfalls.",
    heroImage: "https://images.unsplash.com/photo-1589793463357-5fb813435467?q=80&w=1200",
    accentColor: "#06b6d4",
    story: "Meghalaya is a highland paradise of subtropical forests and dramatic cliffs. Celebrated for bio-engineered living root bridges in Cherrapunji, transparent Umngot River in Dawki, and deep limestone caves.",
    quickStats: {
      bestTime: "September to May",
      capital: "Shillong",
      languages: "Khasi, Garo, English",
      airports: "Shillong Umroi (SHL), Guwahati (GAU - 3 hrs)",
      railways: "Guwahati (100 km) is the nearest railhead",
      idealDuration: "5-7 Days"
    },
    experiences: [
      { title: "Double Decker Living Root Bridge Trek", desc: "Hike into the rainforest of Nongriat to cross ancient intertwined tree bridges.", tag: "Bio-Engineering" },
      { title: "Boating on Glass Waters of Dawki", desc: "Glide over the crystal-clear Umngot River where boats appear to float on air.", tag: "Crystal Water" }
    ],
    food: [
      { name: "Jadoh with Dohkhleh", desc: "Aromatic rice cooked with pork stock and ginger, served with traditional salad." }
    ],
    culture: {
      crafts: "Cane and bamboo mats, Endi silk weaving, Pineapple fiber crafts",
      festivals: "Nongkrem Dance, Wangala 100-Drums Festival, Cherry Blossom Festival",
      music: "Khasi acoustic rock, traditional Duitara lutes"
    },
    travelInfo: {
      airports: "Shillong Airport Umroi (SHL), Guwahati (GAU)",
      railways: "Guwahati Railway Station with scenic 3-hour road drive to Shillong",
      seasonTips: "November features blooming pink Himalayan Cherry Blossoms."
    }
  },
  "arunachal-pradesh": {
    id: "AR",
    slug: "arunachal-pradesh",
    name: "Arunachal Pradesh",
    type: "state",
    region: "Northeast",
    capital: "Itanagar",
    eyebrow: "LAND OF DAWN-LIT MOUNTAINS • TAWANG MONASTERY",
    tagline: "Tawang Buddhist citadel, Sela Pass snow lakes, tribal biodiversity, and orchid valleys.",
    heroImage: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200",
    accentColor: "#6366f1",
    story: "Arunachal Pradesh is India's easternmost frontier where the sun first rises. Features 17th-century Tawang Monastery, frozen alpine lakes at Sela Pass, and 26 indigenous major tribes.",
    quickStats: {
      bestTime: "October to April",
      capital: "Itanagar",
      languages: "Monpa, Nyishi, Adi, Hindi, English",
      airports: "Donyi Polo Airport Itanagar (HGI), Tezu (TEI)",
      railways: "Naharlagun Railway Station",
      idealDuration: "7-10 Days"
    },
    experiences: [
      { title: "Tawang Monastery Heritage & Prayers", desc: "Explore the 400-year-old fortified Mahayana Buddhist gompa.", tag: "Monastic Citadel" },
      { title: "Sela Pass & Sela Lake at 13,700 Feet", desc: "Cross the sacred gateway decorated with prayer flags and frozen turquoise waters.", tag: "High Mountain Pass" }
    ],
    food: [
      { name: "Pika Pila & Thukpa", desc: "Traditional bamboo shoot pickle paired with noodle soup and roasted mountain herbs." }
    ],
    culture: {
      crafts: "Monpa handmade paper (Mon Shugu), Tibetan thangka painting, Apatani shawls",
      festivals: "Losar Tawang, Ziro Festival of Music, Torgya",
      music: "Monpa horn music, tribal dance chants"
    },
    travelInfo: {
      airports: "Donyi Polo Airport Itanagar (HGI), Lilabari (IXI)",
      railways: "Naharlagun connects with direct express trains to Delhi and Guwahati",
      seasonTips: "Inner Line Permit (ILP) is required for travelers."
    }
  },
  "sikkim": {
    id: "SK",
    slug: "sikkim",
    name: "Sikkim",
    type: "state",
    region: "Northeast",
    capital: "Gangtok",
    eyebrow: "KANGCHENJUNGA SANCTUARY • ORGANIC HIGHLANDS",
    tagline: "Sacred glacial lakes, Rumtek monastery, rhododendron valleys, and 100% organic farms.",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200",
    accentColor: "#0ea5e9",
    story: "Sikkim is a peaceful Himalayan state nestled in the shadow of Mount Kangchenjunga (8,586m). As India's first 100% organic state, it offers pristine sanctuaries like Tsomgo Lake and Rumtek Monastery.",
    quickStats: {
      bestTime: "March to May & October to mid-December",
      capital: "Gangtok",
      languages: "Nepali, Bhutia, Lepcha, English",
      airports: "Pakyong Airport (PYG), Bagdogra (IXB - 4 hrs)",
      railways: "New Jalpaiguri (NJP)",
      idealDuration: "5-8 Days"
    },
    experiences: [
      { title: "Tsomgo Lake & Nathula Pass", desc: "Drive to the glacial alpine lake at 12,310 feet and the historic Silk Route pass.", tag: "Silk Route Frontier" },
      { title: "Yumthang Valley of Flowers", desc: "Walk among 24 species of blooming rhododendrons framed by snow peaks.", tag: "Alpine Floral Valley" }
    ],
    food: [
      { name: "Sikkimese Momos & Thukpa", desc: "Steamed dumplings filled with local organic vegetables, served with fiery Dalle chili sauce." }
    ],
    culture: {
      crafts: "Carved wooden Choktse tables, Lepcha handloom weaves, Thangka paintings",
      festivals: "Losar, Saga Dawa, Pang Lhabsol",
      music: "Monastic masked Cham dances, traditional Lepcha flutes"
    },
    travelInfo: {
      airports: "Pakyong Airport (PYG) near Gangtok; Bagdogra Airport (IXB)",
      railways: "New Jalpaiguri (NJP) is the primary railhead",
      seasonTips: "Spring (March-May) displays magnificent rhododendron blooms."
    }
  },
  "nagaland": {
    id: "NL",
    slug: "nagaland",
    name: "Nagaland",
    type: "state",
    region: "Northeast",
    capital: "Kohima",
    eyebrow: "HORNBILL FESTIVAL • NAGA WARRIOR TRADITIONS",
    tagline: "Emerald Dzukou Valley, 16 distinct Naga tribes, and the great Hornbill Festival.",
    heroImage: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200",
    accentColor: "#ef4444",
    story: "Nagaland is celebrated for the Hornbill Festival in Kisama—the Festival of Festivals—the wilderness of Dzukou Valley, and 16 major indigenous tribes each with distinct shawls and traditions.",
    quickStats: {
      bestTime: "October to May (December 1-10 for Hornbill Festival)",
      capital: "Kohima",
      languages: "Nagamese, English, Ao, Angami, Sumi",
      airports: "Dimapur Airport (DMU)",
      railways: "Dimapur Railway Station",
      idealDuration: "5-7 Days"
    },
    experiences: [
      { title: "Hornbill Festival at Kisama", desc: "Witness all 16 Naga tribes perform traditional dances, archery, and ceremonial music in December.", tag: "Tribal Grandeur" },
      { title: "Trek through Dzukou Valley", desc: "Hike through rolling bamboo meadows and endemic Dzukou lilies at 8,000 feet.", tag: "Highland Trek" }
    ],
    food: [
      { name: "Smoked Pork with Axone", desc: "Tender wood-smoked meat cooked with fermented soybean paste and fiery Raja Mircha." }
    ],
    culture: {
      crafts: "Distinctive Naga tribal shawls, Wood carving of Konyak morungs, Bead jewelry",
      festivals: "Hornbill Festival (Dec 1-10), Moatsu, Sekrenyi",
      music: "Naga choral harmonies, Log drum rhythmic drumming"
    },
    travelInfo: {
      airports: "Dimapur Airport (DMU) connects to Kolkata and Guwahati; Kohima is 2.5 hrs drive",
      railways: "Dimapur (DMU) on the broad gauge line",
      seasonTips: "Book accommodation early if visiting during Hornbill Festival (Dec 1-10)."
    }
  },
  "manipur": {
    id: "MN",
    slug: "manipur",
    name: "Manipur",
    type: "state",
    region: "Northeast",
    capital: "Imphal",
    eyebrow: "JEWEL OF INDIA • FLOATING LOKTAK LAKE",
    tagline: "Floating phumdis on Loktak Lake, Sangai deer sanctuary, and classical Raas Leela dance.",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
    accentColor: "#8b5cf6",
    story: "Manipur is celebrated for Loktak Lake—the largest freshwater lake in Northeast India featuring unique floating islands (phumdis) and Keibul Lamjao, the world's only floating national park home to the Sangai deer.",
    quickStats: {
      bestTime: "October to April",
      capital: "Imphal",
      languages: "Meiteilon (Manipuri), English",
      airports: "Bir Tikendrajit International Airport Imphal (IMF)",
      railways: "Jiribam / Imphal rail network",
      idealDuration: "4-6 Days"
    },
    experiences: [
      { title: "Floating Phumdis on Loktak Lake", desc: "Stay in eco-huts on floating biomass islands and take traditional canoe rides at dawn.", tag: "Floating Biosphere" },
      { title: "Ima Keithel Women's Market", desc: "Wander through Asia's largest market run exclusively by 4,000+ women entrepreneurs.", tag: "Living Matriarchy" }
    ],
    food: [
      { name: "Chak-Hao Kheer & Kangshoi", desc: "Royal black rice dessert alongside boiled seasonal vegetable stew with herbs." }
    ],
    culture: {
      crafts: "Longpi black pottery, Kauna reed craft, Moirang Phee handloom weaving",
      festivals: "Sangai Festival, Yaoshang, Lai Haraoba",
      music: "Manipuri classical Raas Leela dance, Pung Cholom drum acrobatic dance"
    },
    travelInfo: {
      airports: "Bir Tikendrajit International Airport Imphal (IMF) with daily flights from Delhi, Kolkata",
      railways: "Connected by road to Dimapur and Silchar railheads",
      seasonTips: "November hosts the grand Manipur Sangai Festival."
    }
  },
  "mizoram": {
    id: "MZ",
    slug: "mizoram",
    name: "Mizoram",
    type: "state",
    region: "Northeast",
    capital: "Aizawl",
    eyebrow: "LAND OF ROLLING HILLS • BAMBOO DANCE",
    tagline: "Lush mountain ridges, Cheraw bamboo dance, Solomon's Temple, and pristine forests.",
    heroImage: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=1200",
    accentColor: "#14b8a6",
    story: "Mizoram is a peaceful high-ridge state with 21 hill ranges. Known for warm community harmony, cliffside capital Aizawl overlooking cloud valleys, and the rhythmic Cheraw bamboo dance.",
    quickStats: {
      bestTime: "October to March",
      capital: "Aizawl",
      languages: "Mizo, English",
      airports: "Lengpui Airport Aizawl (AJL)",
      railways: "Bairabi railway station",
      idealDuration: "4-6 Days"
    },
    experiences: [
      { title: "Cheraw Bamboo Dance Performance", desc: "Watch performers step gracefully in and out of clapping horizontal bamboo poles.", tag: "Rhythmic Tradition" },
      { title: "Reiek Mountain Ridge Hike", desc: "Ascend to rocky cliffs with panoramic views across Bangladesh plains and valley clouds.", tag: "Ridge Trek" }
    ],
    food: [
      { name: "Bai & Vawksa Rep", desc: "Light vegetable stew with bamboo shoots alongside smoked pork with mustard leaves." }
    ],
    culture: {
      crafts: "Puan handloom shawls, Bamboo and cane basketry, musical drums",
      festivals: "Chapchar Kut (Spring festival), Mim Kut, Pawl Kut",
      music: "Choral hymns, Mizo traditional ballads, acoustic folk guitar"
    },
    travelInfo: {
      airports: "Lengpui Airport (AJL) connects directly to Kolkata, Guwahati",
      railways: "Silchar (Assam) is the nearest major rail hub",
      seasonTips: "March hosts the joyful Chapchar Kut spring festival."
    }
  },
  "tripura": {
    id: "TR",
    slug: "tripura",
    name: "Tripura",
    type: "state",
    region: "Northeast",
    capital: "Agartala",
    eyebrow: "WATER PALACES • UNAKOTI ROCK SCULPTURES",
    tagline: "Neermahal lake palace, colossal rock-cut Shaivite reliefs of Unakoti, and bamboo art.",
    heroImage: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200",
    accentColor: "#f59e0b",
    story: "Tripura is a historic kingdom rich in royal architecture. Highlights include Neermahal (the only water palace in East India on Rudrasagar Lake) and the colossal ancient rock faces of Unakoti.",
    quickStats: {
      bestTime: "October to March",
      capital: "Agartala",
      languages: "Bengali, Kokborok, English",
      airports: "Maharaja Bir Bikram Airport Agartala (IXA)",
      railways: "Agartala Railway Station (direct to Delhi)",
      idealDuration: "3-5 Days"
    },
    experiences: [
      { title: "Unakoti Rock Sculptures in the Forest", desc: "Wander through a jungle canyon adorned with giant stone carvings of Shiva.", tag: "Ancient Sculpture" },
      { title: "Neermahal Water Palace Boat Ride", desc: "Sail across Rudrasagar Lake to explore the royal summer palace.", tag: "Royal Water Palace" }
    ],
    food: [
      { name: "Mui Borok & Awan Bangwi", desc: "Traditional tribal cuisine with fermented fish herbs alongside sticky rice leaf dumplings." }
    ],
    culture: {
      crafts: "Cane and bamboo handicrafts, Risha handwoven breast-cloth",
      festivals: "Kharchi Puja (14 deities), Garia Puja, Neermahal Festival",
      music: "Hojagiri balance dance by Reang community, Sarinda flute music"
    },
    travelInfo: {
      airports: "Maharaja Bir Bikram Airport Agartala (IXA) connects to Kolkata, Delhi",
      railways: "Direct Rajdhani Express linking Agartala to New Delhi",
      seasonTips: "Winter provides dry, pleasant weather for temple visits."
    }
  }
};

export const statesData = STATES_DATA;
