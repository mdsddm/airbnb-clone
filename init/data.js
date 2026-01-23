const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway with stunning ocean views.",
    image: {
      filename: "beachfront-cottage-malibu",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },

  {
    title: "Modern Loft in Downtown",
    description:
      "Stay in the heart of the city in this stylish loft apartment, perfect for urban explorers.",
    image: {
      filename: "modern-loft-nyc",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 1200,
    location: "New York City",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
  },

  {
    title: "Mountain Retreat Cabin",
    description:
      "Unplug and unwind in this peaceful mountain cabin surrounded by nature.",
    image: {
      filename: "mountain-retreat-aspen",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
    },
    price: 1000,
    location: "Aspen",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "Experience the charm of Tuscany in this beautifully restored historic villa.",
    image: {
      filename: "historic-villa-florence",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    price: 2500,
    location: "Florence",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },

  {
    title: "Secluded Treehouse Getaway",
    description:
      "Live among the treetops in this unique treehouse retreat for nature lovers.",
    image: {
      filename: "treehouse-portland",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    },
    price: 800,
    location: "Portland",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },

  {
    title: "Beachfront Paradise Condo",
    description:
      "Step directly onto the sandy beach from this relaxing beachfront condo.",
    image: {
      filename: "beachfront-condo-cancun",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
    },
    price: 2000,
    location: "Cancun",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },

  {
    title: "Luxury Penthouse with City Views",
    description:
      "Enjoy luxury living with panoramic city views from this modern penthouse.",
    image: {
      filename: "luxury-penthouse-los-angeles",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
    },
    price: 3500,
    location: "Los Angeles",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },

  {
    title: "Ski-In Ski-Out Chalet",
    description:
      "Hit the slopes right from your doorstep in this Swiss Alps chalet.",
    image: {
      filename: "ski-chalet-verbier",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
    },
    price: 3000,
    location: "Verbier",
    country: "Switzerland",
    geometry: {
      type: "Point",
      coordinates: [7.2286, 46.0961],
    },
  },

  {
    title: "Safari Lodge in Serengeti",
    description:
      "Experience the thrill of the wild in this comfortable safari lodge.",
    image: {
      filename: "safari-lodge-serengeti",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
    },
    price: 4000,
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },

  {
    title: "Historic Canal House",
    description:
      "Stay in a beautifully preserved canal house in Amsterdam’s iconic district.",
    image: {
      filename: "canal-house-amsterdam",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4",
    },
    price: 1800,
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
];

module.exports = { data: sampleListings };
