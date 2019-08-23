//Setup
var express = require('express')
var router = express.Router()

//Fake DB
const cars = [
    { id : 1, info : { name: "Porsche", mpg: "20"}}, 
    { id : 2, info : { name: "Mercedes", mpg: "26"}}, 
    { id : 3, info : { name: "BMW", mpg: "22"}}
];

//Routes
router.get('/', (req, res) => {
    res.send(cars);
});

router.post('/', (req, res) => {
    var car = {
        id : cars.length + 1, 
        info : {
            name : req.body.info.name, 
            rating : req.body.info.mpg
        }
    };

    cars.push(car);
    res.send(cars);
});
//End Routes 

//Export router
module.exports = router