const {getAllLinks} = require('../models/db')

exports.index = (req, res) => {
    res.render('index.pug')
}

exports.agenda = (req, res) => {
    getAllLinks()
        .then(data => res.render('agenda.pug', {data}))
        .catch(err => res.render('error.pug', err))
}

exports.canales = (req, res) => {
    res.render('canales.pug')
}

exports.about = (req, res) => {
    res.render('about.pug')
}



