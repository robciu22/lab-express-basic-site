// Require Express
const express = require('express')


// Express server handling requests and responses
const app = express()

const path = require('path')
const expressLayouts = require('express-ejs-layouts')

app.use(expressLayouts)
    // app.use(express.static("views"))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

// our first Route:
// app.get('/home', (request, response, next) => response.send('<h1>Welcome Ironhacker :) Many, many greetings from Robciu22 ;-D</h1>'));
app.get('/', (req, res, next) =>
    res.render('home')

)
app.get('/about', (req, res, next) =>
    res.render('about'))

app.get('/works', (req, res, next) =>
    res.render('works')
)

app.get('/photoGallery', (req, res, next) =>
    res.render('photo')
)



// Server Started
app.listen(3000, () => console.log('My first labApp listening on port 3000! '));