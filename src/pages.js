const Database = require('./database/db');
const tableOrphanage = require('./database/table-orphanage');

module.exports = {
    pageLanding(req, res){res.render('page-landing')},
    
    async spotOrphanage(req, res){
        try {
            const id = req.query.id;
            const db = await Database;
            const results = await db.all(`SELECT * FROM orphanages WHERE id = "${id}"`);
            const orphanage = results[0];

            orphanage.images = orphanage.images.split(",");
            orphanage.firstImage = orphanage.images[0];

            if(orphanage.open_on_weekends == "0"){
                orphanage.open_on_weekends = false;
            }else{
                orphanage.open_on_weekends = true;
            }

            return res.render('spot-orphanage',{ orphanage })
        } catch (error) {
            return res.send('Erro no banco de dados')
        }
        
    },
    
    async locationOrphanages(req, res){
        //se der certo
        try {
            const db = await Database;
            const orphanagesList = await db.all(`SELECT * FROM orphanages`);
            return res.render('location-orphanages', { orphanagesList }) 
        // se não devolve um erro
        } catch (error) {
            console.log(error);
            return res.send('Erro no banco de dados');
        }
        
    },

    formOrphanage(req, res){res.render('form-orphanage')},

    async saveOrphanage(req, res){
        const fields = req.body;
        console.log(req.body);

        if(Object.values(fields).includes('')){
            return res.send('Não esqueça de marcar a localização no mapa')
        };

        try {
            const bd = await Database;
            await tableOrphanage(bd, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                opening_hours: fields.opening_hours,
                open_on_weekends: fields.open_on_weekends
            })
        //redirecionamento     
        return res.redirect('location-orphanages') 
        } catch (error) {
            console.log(error);
            return res.send('Erro no Banco de Dados')
        }
        
        
    }
}

    








/*
    req é uma parametro que vai pegar dados vindo do cliente
    pode ser na URL após ? req.query
    pode ser dados vindo de um formulário req.body
    esses dados vem em forma de objeto
    */