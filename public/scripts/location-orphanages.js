
// create map
const map = L.map('mapid').setView([-23.5503558,-46.6380009], 14);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: `/images/map-marker.svg`,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [160, 2]

});
//pega cada propriedade do objeto orphanage, e separa em um parâmetro
//cria um pin no mapa
function addMarker({id, name, lat, lng}){
    // create popup overlay
    const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 200,
    minHeight: 100
    })
    .setContent(`
    ${name} 
    <a href="/spot-orphanage?id=${id}">
    <img src="/images/arrow-white.svg">
    </a>`);

//Pop-up do mapa 

    L
    .marker([lat, lng], {icon})
    .addTo(map)
    .bindPopup(popup)

}
//pega a lista de objetos do datafake.js pelos spans de location-orphanages,
const spanOrphanages = document.querySelectorAll('.orphanages span');
//para cada item lista cria um novo objeto
spanOrphanages.forEach((span)=>{
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    };
    //executa a função que cria um pin no mapa
    addMarker(orphanage);
});



