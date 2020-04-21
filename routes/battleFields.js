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
  console.log(battlefieldName);
    for (let key in battlefields) {
      console.log(key.toString() + "<--->"  + battlefieldName.toString())
      console.log(battlefieldName)
      if (key.valueOf() === battlefieldName.valueOf()) {
      // if ("fortSmuter" === "fortSmuter") {
        console.log("---------------");
        res.send("ok");
        return;
    }
  }
  if (battlefields[battlefieldName]) {
    res.send(battlefields[battlefieldName]);
  }
  res.send("battlefieldss");
});

module.exports = router;
