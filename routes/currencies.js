var express = require('express');
var router = express.Router();

const currencies = {
    diram: {
        countries: ['UAE', 'Morocco'],
    },
    real: {
        countries: ['Brazil'],
    },
    dinar: {
        countries: ['Algeria', 'Bahrain', 'Jordan', 'Kuwait'],
    },
    vatu: {
        countries: ['Vanuatu'],
    },
    shilling: {
        countries: ['Tanzania', 'Uganda', 'Somalia', 'Kenya'],
    },
};


router.put('/:name/countries', function(req, res, next) {
    let currency = req.params.name;
    let countriesToUpdate = req.query;
    if (currencies[currency]) {
        currencies[currency].countries = countriesToUpdate;
        res.send(countriesToUpdate);
    }
    res.status(404).send();
});

router.get('/', function (req, res, next) {
    res.send(currencies);
});

module.exports = router;