const {createLinkDb, deleteLinkDb, updateLinkDb} = require('../models/db')

exports.createLink = (req, res) => {
    createLinkDb(req.body)
        .then(() => res.redirect('/agenda'))
        .catch(err => res.render('error.pug', err))
}

exports.deleteLink = (req, res) => {
    deleteLinkDb(req.params.id)
        .then(() => res.redirect('/agenda'))
        .catch(err => res.render('error.pug', err))
}

exports.updateLink = (req, res) => {
    updateLinkDb(req.params.id, req.body.link)
        .then( res.redirect('/agenda'))
        .catch(err => res.render('error.pug', err))
}