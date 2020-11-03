// create map
const map = L.map('mapid').setView([-23.5503558,-46.6380009], 16);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: `/images/map-marker.svg`,
    iconSize: [48, 58],
    iconAnchor: [29, 68]
});

let marker;

//create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name="lat"]').value = lat;
    document.querySelector('[name="lng"]').value = lng;
    //remove icon
    //"Se marker tem icone remove o icone "
    marker && map.removeLayer(marker);

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
});

//add input value of photos
function addPhotoField(){
    //pegar o container de fotos #images
    const containerUpload = document.querySelector('#images');
    //pegar a lista .new-upload
    const newUploads = document.querySelectorAll('.new-upload');
    //clonar ultimo .new-upload da lista 
    const lastUpload = newUploads[newUploads.length - 1].cloneNode(true);
    //se o campo estiver vazio não adicionar ao container de #images
    const inputUpload = lastUpload.children[0];
    
    if(inputUpload == ''){
        return;
    }
    //limpar o campo antes de anexar ao container #images
    inputUpload.value = '';
    //adicionar o clone ao container de #images
    containerUpload.appendChild(lastUpload);
}

function removeUpload(event){
    const span = event.currentTarget;
    const newUploads = document.querySelectorAll('.new-upload');

    if(newUploads.length < 2){
        span.parentNode.children[0].value = '';
        return;
    }
    span.parentNode.remove();
}

//botão sim ou não
function toggleSelect(event){
    //para cada elemento button da lista, remova a classe .active
    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'));
    //colocar a classe active no botao que foi clicado
    const button = event.currentTarget;
    button.classList.add('active');
    //atualizar o input hidden com o valor que foi clicado para ser submetido ao banco de dados
    const inputYN = document.querySelector('[name="open-on-weekend"]');
    inputYN.value = button.dataset.value;

    
}

