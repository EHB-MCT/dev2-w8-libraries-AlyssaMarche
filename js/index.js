let map; // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie

function init() {
    // initialise de kaart
    var map = L.map('map').setView([50.8456, 4.3570], 14);
    // voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    // vergeet openstreetmap attributie niet
    // gebruik de functie "loadMarkers" om de markers toe te voegen
    loadMarkers()
}

function loadMarkers() {
    // fetch de data van opendata.brussels.be
    // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
    var marker = L.marker([50.8456, 4.3570]).addTo(map);

}

function addMarker(lat, lon) {
    // voeg een marker toe op lat, lon

}
init()