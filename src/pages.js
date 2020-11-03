/*
    req é uma parametro que vai pegar dados vindo do cliente
    pode ser na URL após ? req.query
    pode ser dados vindo de um formulário req.body
    esses dados vem em forma de objeto
    */
module.exports = {
    pageLanding(req, res){res.render('page-landing')},
    spotOrphanage(req, res){res.render('spot-orphanage')},
    locationOrphanages(req, res){res.render('location-orphanages')},
    formOrphanage(req, res){res.render('form-orphanage')}
}