var map = L.map("map", {
    zoomControl: false,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function showMap(lat, lng) {
  map.setView([lat, lng], 16);
  L.marker([lat - 0.002, lng]).addTo(map);
  $(".leaflet-marker-icon").attr("src", "assets/img/icon-location.svg");
}
