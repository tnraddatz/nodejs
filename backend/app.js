//Setup
const express = require('express');
const app = express();
app.listen(3000, () => console.log("Listening at http://127.0.0.1:3000"))

//Routes 
var movies_obj = require('./pages/movies')
var cars_obj = require('./pages/cars')

//Configs
app.use(express.json())

//Routes
app.use('/movies', movies_obj)
app.use('/cars', cars_obj)

app.get('/', (req, res) => {
    res.send("Hello World")
});

