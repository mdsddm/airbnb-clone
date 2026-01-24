const { faker } = require("@faker-js/faker");

const cities = [
  { city: "New York", country: "United States", coords: [-74.006, 40.7128] },
  {
    city: "Los Angeles",
    country: "United States",
    coords: [-118.2437, 34.0522],
  },
  {
    city: "San Francisco",
    country: "United States",
    coords: [-122.4194, 37.7749],
  },
  { city: "Miami", country: "United States", coords: [-80.1918, 25.7617] },
  { city: "Chicago", country: "United States", coords: [-87.6298, 41.8781] },
  { city: "Austin", country: "United States", coords: [-97.7431, 30.2672] },
  { city: "Seattle", country: "United States", coords: [-122.3321, 47.6062] },
  { city: "Denver", country: "United States", coords: [-104.9903, 39.7392] },

  { city: "Paris", country: "France", coords: [2.3522, 48.8566] },
  { city: "London", country: "United Kingdom", coords: [-0.1276, 51.5072] },
  { city: "Rome", country: "Italy", coords: [12.4964, 41.9028] },
  { city: "Barcelona", country: "Spain", coords: [2.1734, 41.3851] },
  { city: "Amsterdam", country: "Netherlands", coords: [4.9041, 52.3676] },
  { city: "Berlin", country: "Germany", coords: [13.405, 52.52] },
  { city: "Zurich", country: "Switzerland", coords: [8.5417, 47.3769] },

  { city: "Tokyo", country: "Japan", coords: [139.6917, 35.6895] },
  { city: "Kyoto", country: "Japan", coords: [135.7681, 35.0116] },
  { city: "Bangkok", country: "Thailand", coords: [100.5018, 13.7563] },
  { city: "Bali", country: "Indonesia", coords: [115.1889, -8.4095] },
  { city: "Sydney", country: "Australia", coords: [151.2093, -33.8688] },
];

// ✅ CATEGORY ENUM — MUST MATCH MONGOOSE SCHEMA
const categories = [
  "trending",
  "rooms",
  "iconic_cities",
  "mountains",
  "castles",
  "arctic",
  "camping",
  "farms",
  "domes",
  "boats",
];

const unsplashImages = [
  "photo-1552733407-5d5c46c3bb3b",
  "photo-1501785888041-af3ef285b470",
  "photo-1571896349842-33c89424de2d",
  "photo-1566073771259-6a8506099945",
  "photo-1520250497591-112f2f40a3f4",
  "photo-1571003123894-1f0594d2b5d9",
  "photo-1622396481328-9b1b78cdd9fd",
  "photo-1502784444187-359ac186c5bb",
  "photo-1493246507139-91e8fad9978e",
  "photo-1504280390367-361c6d9f38f4",
];

function generateListings(count = 120) {
  const listings = [];

  for (let i = 0; i < count; i++) {
    const place = faker.helpers.arrayElement(cities);
    const imageId = faker.helpers.arrayElement(unsplashImages);

    listings.push({
      title: faker.company.catchPhrase(),
      description: faker.lorem.sentences(2),

      image: {
        filename: imageId,
        url: `https://images.unsplash.com/${imageId}?w=800&q=60&auto=format`,
      },

      price: faker.number.int({ min: 60, max: 800 }),
      priceUnit: "night",

      // ✅ SINGLE STRING ENUM (IMPORTANT)
      category: faker.helpers.arrayElement(categories),

      location: place.city,
      country: place.country,

      geometry: {
        type: "Point",
        coordinates: place.coords,
      },
    });
  }

  return listings;
}

const sampleListings = generateListings(120);

module.exports = { data: sampleListings };
