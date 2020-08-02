var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    route = require('./routes/index.routes'),
    routeLink = require('./routes/link.routes')

require('dotenv').config()

const app = express()

//Middelware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
-
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));

//Routes
app.get('/', route.index)
app.get('/agenda', route.agenda)
app.get('/canales', route.canales)
app.get('/about', route.about)

app.post('/agenda/add', routeLink.createLink)
app.post('/agenda/delete/:id', routeLink.deleteLink)
app.post('/agenda/update/:id', routeLink.updateLink)

//listen
app.listen(process.env.PORT, () => {
    console.log("Starting port " + process.env.PORT + ", http://localhost:"+process.env.PORT)
})



