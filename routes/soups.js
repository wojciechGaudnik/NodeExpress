var express = require('express');
var router = express.Router();

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa'];


router.post('/', function(req, res, next) {
    let soup = req.query.name;
    soups.push(soup);
    res.status(201).send();
});

router.get('/all', function (req, res, next) {
    res.send(soups);
});

module.exports = router;