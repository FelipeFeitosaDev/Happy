const Database = require('sqlite-async');

function execute(db){
    /*criando a tabela definindo o nome das colunas e os tipos de dado que 
    podem ser inseridos em casa coluna*/
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    
    
    `)
}

//exportando a tabela
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);
