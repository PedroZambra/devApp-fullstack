const {getAllLinks, createLinkDb, deleteLinkDb} = require('../models/db')

exports.index = (req, res) => {
    res.render('index.pug')
}

exports.agenda = (req, res) => {
    getAllLinks()
        .then(data => {
            // console.log(data)
            res.render('agenda.pug', {data}) 
        })
    
}

exports.canales = (req, res) => {
    res.render('canales.pug')
}

exports.about = (req, res) => {
    res.render('about.pug')
}

exports.createLink = (req, res) => {
    createLinkDb(req.body)
        .then(() => res.redirect('/agenda'))
        .catch(err => res.render('error.pug', err))
    
}

exports.deleteLink = (req, res) => {
    console.log("Estos son los parametros: ", req.params.id)
    //Posible plantilla de confirmacion y devolver parametro por promesa
    deleteLinkDb(req.params.id)
        .then(() => res.redirect('/agenda'))
        .catch(err => res.render('error.pug', err))
}



