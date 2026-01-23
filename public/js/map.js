console.log("coordinates:", coordinates);

const map = L.map("map").setView(coordinates, 12);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// initial marker with custom message
let marker = L.marker(coordinates)
  .addTo(map)
  .bindPopup(
    `<strong>${placeName}</strong><br>Exact location will be provided after booking`,
  );

// on click, move marker and show coords popup
map.on("click", ({ latlng: { lat, lng } }) => {
  marker
    .setLatLng([lat, lng])
    .bindPopup(`Lat: ${lat.toFixed(4)}<br>Lng: ${lng.toFixed(4)}`)
    .openPopup();
});
