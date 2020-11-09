//importando dependencias
const express = require('express');
const path = require('path');
const server = express();
const pages = require('./pages.js')



// iniciando servidor na porta 5500;
server.listen(5500);

//criando rotas para arquivos estáticos(images,css,script) e permitindo receber dados do metodo post
server
    .use(express.urlencoded({extended: true}))
    .use(express.static('public'));

//configurar template engine(permie mudar o html de forma dinâmica, com objetos, loops, etc)
server
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')


// criando rotas
server.get('/', pages.pageLanding);
server. get('/spot-orphanage', pages.spotOrphanage);
server.get('/location-orphanages', pages.locationOrphanages);
server.get('/form-orphanage', pages.formOrphanage);
server.post('/save-orphanage', pages.saveOrphanage);

