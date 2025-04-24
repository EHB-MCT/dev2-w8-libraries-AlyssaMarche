let map; // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
let myData;
function init() {

	// initialise de kaart
	map = L.map("map").setView([50.8456, 4.357], 14);
	// voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		// vergeet openstreetmap attributie niet
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
	// gebruik de functie "loadMarkers" om de markers toe te voegen
	addMarker();
	loadMarkers();
}

function loadMarkers() {
	//TODO: Fetch
	//TODO: Then
	//TODO: For
	// fetch de data van opendata.brussels.be
	const baseApiUrl =
		"https://opendata.bruxelles.be/api/explore/v2.1/catalog/datasets/toilettes_publiques_vbx/records";
	fetch(baseApiUrl + "?limit=20")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			myData = data;
			console.log(myData);
			for (let i = 0; i < myData.results.length; i++) {
				const element = myData.results[i];
				addMarker(
					element.geo_point_2d.lat,
					element.geo_point_2d_lon,
					element.location
				);
			}
		});
	// als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
}

function addMarker(lat, lon) {
	// voeg een marker toe op lat, lon
	var marker = L.marker([50.84170999588725, 4.3228016662216096]).addTo(map);
	marker.bindPopup("Kom <b>MCT</b> volgen op Erasmus hogeschool!").openPopup();

    // initialise de kaart
    map = L.map('map').setView([50.8456, 4.3570], 14);
    // voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
    // vergeet openstreetmap attributie niet
    // gebruik de functie "loadMarkers" om de markers toe te voegen
    addMarker()
}

function loadMarkers() {
    // fetch de data van opendata.brussels.be
    fetch('https://opendata.brussels.be/api/explore/v2.1/catalog/datasets/infrastructures-sportives-gerees-par-la-ville-de-bruxelles/records?limit=38')
    // als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart

}

function addMarker(lat, lon) {
    // voeg een marker toe op lat, lon
    var marker = L.marker([50.84170999588725, 4.3228016662216096]).addTo(map);
    marker.bindPopup("Kom <b>MCT</b> volgen op Erasmus hogeschool!").openPopup();

}
init();
