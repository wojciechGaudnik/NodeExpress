var express = require('express');
var router = express.Router();

const battlefields = {
  fortSumter: {
    state: 'SC',
  },
  manassas: {
    state: 'VA',
  },
  gettysburg: {
    state: 'PA',
  },
  antietam: {
    state: 'MD',
  }
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:name', function(req, res, next) {
  let battlefieldName = req.params.name;
  if (battlefields[battlefieldName]) {
    res.send(battlefields[battlefieldName]);
  }
  res.status(404).send();
});

module.exports = router;
