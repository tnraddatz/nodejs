//Setup
const express = require('express')
const app = express()

//Routes 
var movies = require('./pages/movies')
var cars = require('./pages/cars')
var news = require('./pages/news')

//Configs
app.use(express.json())

//Routes
app.get('/', (req, res) => {
    res.send("Hello World")
});

app.use('/movies', movies)
app.use('/cars', cars)
app.use('/news', news)

//server 
app.listen(8000, () => console.log("Listening at http://127.0.0.1:8000"))
