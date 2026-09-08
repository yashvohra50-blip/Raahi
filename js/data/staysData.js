/**
 * RAAHI // Heritage Stays, Palace Sanctuaries & Eco Lodges across India
 */

export const VERIFIED_STAYS = [
  {
    id: "stay-1",
    name: "The Imperial",
    location: "Janpath, New Delhi",
    category: "palaces",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/The_Imperial_New_Delhi.jpg?width=800",
    price: "₹18,500/night",
    tag: "COLONIAL HERITAGE"
  },
  {
    id: "stay-2",
    name: "Haveli Dharampura",
    location: "Chandni Chowk, Old Delhi",
    category: "havelis",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Haveli_Dharampura_Courtyard.jpg?width=800",
    price: "₹11,000/night",
    tag: "MUGHAL RESTORATION"
  },
  {
    id: "stay-3",
    name: "Taj Falaknuma Palace",
    location: "Hyderabad, Telangana",
    category: "palaces",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Falaknuma_Palace,_Hyderabad.jpg?width=800",
    price: "₹45,000/night",
    tag: "NIZAM PALATIAL"
  },
  {
    id: "stay-4",
    name: "Evolve Back Kabini",
    location: "Kabini, Karnataka",
    category: "eco",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kabini_River_Karnataka.jpg?width=800",
    price: "₹28,000/night",
    tag: "KURUBA FOREST LODGE"
  }
];

export const STAYS_DATA = [
  ...VERIFIED_STAYS,
  {
    id: "samode-palace",
    name: "Samode Palace & Haveli",
    stateId: "RJ",
    location: "Jaipur, Rajasthan",
    type: "palace",
    price: "₹22,000 / night",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200",
    desc: "475-year-old Rajput architectural gem adorned with mirror work, royal suites, and serene marble courtyards."
  },
  {
    id: "kumarakom-lake-resort",
    name: "Kumarakom Lake Heritage Villas",
    stateId: "KL",
    location: "Kottayam / Alleppey, Kerala",
    type: "eco",
    price: "₹28,000 / night",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200",
    desc: "Reconstructed 16th-century traditional Tharavadu wooden homes set alongside tranquil backwater lagoons."
  },
  {
    id: "oberoi-cecil",
    name: "The Oberoi Cecil Heritage",
    stateId: "HP",
    location: "Shimla, Himachal Pradesh",
    type: "heritage",
    price: "₹20,000 / night",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200",
    desc: "Grand British colonial heritage retreat nestled in the Himalayan cedar forests since 1884."
  },
  {
    id: "brijrama-palace",
    name: "BrijRama Palace on Darbhanga Ghat",
    stateId: "UP",
    location: "Varanasi, Uttar Pradesh",
    type: "palace",
    price: "₹28,000 / night",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200",
    desc: "1812 Maratha palace right on the holy Ganga ghats, accessible by private heritage boat."
  },
  {
    id: "taj-cidade-de-goa",
    name: "Taj Cidade de Goa Heritage",
    stateId: "GA",
    location: "Panaji, Goa",
    type: "heritage",
    price: "₹18,000 / night",
    rating: 4.8,
    image: "assets/images/destinations/fort-aguada.jpg",
    desc: "Portuguese hamlet architecture with arched verandas looking directly onto Vainguinim Beach."
  },
  {
    id: "grand-dragon-ladakh",
    name: "The Grand Dragon Ladakh",
    stateId: "LA",
    location: "Leh, Ladakh",
    type: "eco",
    price: "₹16,000 / night",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1200",
    desc: "Solar-heated eco-luxury mountain retreat adorned with traditional Ladakhi woodcraft and mountain views."
  }
];

export const staysData = STAYS_DATA;

if (typeof window !== 'undefined') {
  window.VERIFIED_STAYS = VERIFIED_STAYS;
  window.STAYS_DATA = STAYS_DATA;
}
