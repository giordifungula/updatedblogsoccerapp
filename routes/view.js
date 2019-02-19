var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require("request");

router.get('/:pokeId', function(req, res, next) {
    //make a post request to our database
    request({
    uri: "http://localhost:8000/pokemon/" + req.params.pokeId,
    method: "GET",
    }, function(error, response, body) {
        // console.log(JSON.parse(body));
        //send a response message
        res.render('view', {poke: JSON.parse(body)});
        // res.send('view', {});

    });
});


router.post('/', function(req, res, next) {

    //test if data is coming through
    // res.send(res.body);
    // req.send(res.body);

    //set a new dynamic id
    var id = Pokemon.pokemon.length;

    //make a post request to our database
    request({
    uri: "http://localhost:8000/pokemon/",
    method: "POST",
    form: {
        content: req.body.content
        // Collecting name on HTML form to use 
    }
    }, function(error, response, body) {
        console.log(body);
        //send a response message
        res.render('create', {message: 'Successfully Added.'});
        // .body displays the body of the content added from json file
        // res.render('view', {});
    });
    // res.render('view', {});

});
module.exports = router;