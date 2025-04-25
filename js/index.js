import Toilet from "./Toilet.js";
let map; // gebruik dit om de map gemakkelijk aan te spreken doorheen de applicatie
map = L.map("map").setView([50.8456, 4.357], 14);
const items = [];

function init() {
	// initialise de kaart

	// voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png
	L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
		maxZoom: 19,
		// vergeet openstreetmap attributie niet
		attribution:
			'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	}).addTo(map);
	// gebruik de functie "loadMarkers" om de markers toe te voegen
	
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
			console.log(data);
			data.results.forEach(function(wc){
				console.log(wc);
				const WC = new Toilet(wc.geo_point_2d.lat, wc.geo_point_2d.lon, wc.location);
				console.log(wc.geo_point_2d.lat, wc.geo_point_2d.lon, wc.location);
				items.push(WC);
				addMarker(WC.lon, WC.lat, WC.location);

			})
			.catch(function(error){
				console.log('Error fetching data:', error);
			})
		});
	// als er coordinaten beschikbaar zijn, kan je de addMarker functie gebruiken om een marker toe te voegen op de kaart
}

function addMarker(lat, lon,location) {
	// voeg een marker toe op lat, lon
	let marker = L.marker([lat,lon]).addTo(map);
	marker.bindPopup(location).openPopup();
	let marker_2 = L.marker([50.8522310393519, 4.342487185303602]).addTo(map);
	marker_2.bindPopup("Kom <b>MCT</b> volgen aan de erasmus hogeschool").openPopup();

	// initialise de kaart
	
	// voeg een tile layer toe, met URL https://a.tile.openstreetmap.org/{z}/{x}/{y}.png

	// vergeet openstreetmap attributie niet
	// gebruik de functie "loadMarkers" om de markers toe te voegen
	
}

init();
