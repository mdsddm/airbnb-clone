const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Relax in this charming beachfront cottage with uninterrupted ocean views.",
    image: {
      filename: "beachfront-cottage-malibu",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=800&q=60&auto=format",
    },
    price: 220,
    priceUnit: "night",
    category: ["beach", "cottage"],
    location: "Malibu, California",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.7798, 34.0259],
    },
  },

  {
    title: "Modern Loft in Downtown Manhattan",
    description:
      "A sleek loft apartment in the heart of NYC, perfect for city explorers.",
    image: {
      filename: "modern-loft-nyc",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=60&auto=format",
    },
    price: 180,
    priceUnit: "night",
    category: ["city", "apartment"],
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
      "Quiet wooden cabin surrounded by alpine forests and hiking trails.",
    image: {
      filename: "mountain-retreat-aspen",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=60&auto=format",
    },
    price: 160,
    priceUnit: "night",
    category: ["mountain", "nature"],
    location: "Aspen, Colorado",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.1911],
    },
  },

  {
    title: "Historic Villa in Tuscany",
    description:
      "A restored countryside villa surrounded by vineyards and olive trees.",
    image: {
      filename: "historic-villa-tuscany",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=60&auto=format",
    },
    price: 420,
    priceUnit: "night",
    category: ["villa", "luxury"],
    location: "Florence, Tuscany",
    country: "Italy",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
  },

  {
    title: "Secluded Treehouse Escape",
    description: "A peaceful treehouse retreat hidden in the forest canopy.",
    image: {
      filename: "treehouse-oregon",
      url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=60&auto=format",
    },
    price: 120,
    priceUnit: "night",
    category: ["treehouse", "nature"],
    location: "Portland, Oregon",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-122.6765, 45.5231],
    },
  },

  {
    title: "Beachfront Condo in Cancun",
    description:
      "Modern condo with direct beach access and oceanfront balcony.",
    image: {
      filename: "beachfront-condo-cancun",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=60&auto=format",
    },
    price: 210,
    priceUnit: "night",
    category: ["beach", "condo"],
    location: "Cancún",
    country: "Mexico",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },

  {
    title: "Luxury Penthouse with Skyline Views",
    description: "High-end penthouse with panoramic city skyline views.",
    image: {
      filename: "luxury-penthouse-la",
      url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?w=800&q=60&auto=format",
    },
    price: 550,
    priceUnit: "night",
    category: ["luxury", "city"],
    location: "Los Angeles, California",
    country: "United States",
    geometry: {
      type: "Point",
      coordinates: [-118.2437, 34.0522],
    },
  },

  {
    title: "Ski-In Ski-Out Alpine Chalet",
    description: "Traditional wooden chalet with direct access to ski slopes.",
    image: {
      filename: "ski-chalet-verbier",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?w=800&q=60&auto=format",
    },
    price: 480,
    priceUnit: "night",
    category: ["ski", "chalet"],
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
      "Luxury safari lodge offering unforgettable wildlife experiences.",
    image: {
      filename: "safari-lodge-serengeti",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=800&q=60&auto=format",
    },
    price: 650,
    priceUnit: "night",
    category: ["safari", "luxury"],
    location: "Serengeti National Park",
    country: "Tanzania",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },

  {
    title: "Canal-Side Townhouse",
    description: "Classic Amsterdam canal house with historic charm.",
    image: {
      filename: "canal-house-amsterdam",
      url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=60&auto=format",
    },
    price: 260,
    priceUnit: "night",
    category: ["historic", "city"],
    location: "Amsterdam",
    country: "Netherlands",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },
];

module.exports = { data: sampleListings };
