var express = require('express');
var router = express.Router();

var Posts = require('../db.json');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', {title: "All Pokemon"});

// });

router.get('/archive', function (req, res, next) {

    let data = {
        title: 'Top Soccer Stories',
        pokemon: Posts, 
        message: false,
    }

    res.render('archive', data);

});

module.exports = router;