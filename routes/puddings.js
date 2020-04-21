var express = require('express');
var router = express.Router();

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio'];

const findPuddingIndex = (name) => {
    return puddingFlavors.indexOf(name);
}

const deletePuddingAtIndex = (index) => {
    puddingFlavors.splice(index, 1);
}


router.get('/:flavor', function(req, res, next) {
    let flavor = req.params.flavor;
    if (findPuddingIndex(flavor) >= 0) {
        deletePuddingAtIndex(findPuddingIndex(flavor));
        res.status(204).send();
        return;
    }
    res.status(404).send();
});

router.get('/all/all', function (req, res, next) {
    res.send(puddingFlavors);
});

module.exports = router;