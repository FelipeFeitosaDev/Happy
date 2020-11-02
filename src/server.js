//importando dependencias
const express = require('express');
const path = require('path');
const server = express();

// iniciando servidor na porta 5500;
server.listen(5500);
//criando rotas para arquivos estáticos
server.use(express.static('public'));


// criando rotas
server.get('/', (req, resp)=>{
    //a variavel __dirname é o caminho da pasta atual
    //devolve a página page-landing.html
    return resp.sendFile(path.join(__dirname, 'views', 'page-landing.html')); 
});
