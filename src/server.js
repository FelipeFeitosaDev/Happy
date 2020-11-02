//importando dependencias
const express = require('express');
const path = require('path');
const server = express();

// iniciando servidor na porta 5500;
server.listen(5500);
//criando rotas para arquivos estáticos
server.use(express.static('public'));
//configurar template engine(permie mudar o html de forma dinâmica, com objetos, loops, etc)
server
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')


// criando rotas
server.get('/', (req, resp)=>{
    //a variavel __dirname é o caminho da pasta atual
    //devolve a página page-landing.html
    return resp.render('page-landing'); 
    /*
    req é uma parametro que vai pegar dados vindo do cliente
    pode ser na URL após ? req.query
    pode ser dados vindo de um formulário req.body
    esses dados vem em forma de objeto
    */
});
