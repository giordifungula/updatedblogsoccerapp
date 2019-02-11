var express = require('express');
var router = express.Router();
var Pokemon = require('../db.json');
var request = require("request");

/* GET create page. */
router.get('/', function(req, res, next) {
  res.render('create', {message: false});
});

router.post('/', function(req, res, next) {

    //test if data is coming through
    // res.send(req.body);

    //set a new dynamic id
    var id = Pokemon.pokemon.length;

    //make a post request to our database
    request({
    uri: "http://localhost:8000/pokemon/",
    method: "POST",
    form: {
        id: id,
        title: req.body.title,
        author: req.body.author,
        image: req.body.image_url,
        content: req.body.content
        // Collecting name on HTML form to use 
    }
    }, function(error, response, body) {
        // console.log(body);
        //send a response message
        res.render('create', {message: 'Successfully Added.'});
        // .body displays the body of the content added from json file
        res.render('view', {});
    });
    // res.send(req.body);

})

module.exports = router;