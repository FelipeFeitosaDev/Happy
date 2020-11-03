
// create map
const map = L.map('mapid').setView([-23.5503558,-46.6380009], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: `/images/map-marker.svg`,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [160, 2]

});

// create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 200,
    minHeight: 100
}).setContent(`
    Lar das meninas 
    <a href="spot-orphanage.html?id=1" class="choose-orphanage">
    <img src="/images/arrow-white.svg">
    </a>`);

//Pop-up do mapa 

L
.marker([-23.5503558,-46.6380009],{icon})
.addTo(map)
.bindPopup(popup)
