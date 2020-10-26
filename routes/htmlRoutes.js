const router = require('express').Router();
var path = require('path');

//send note html file to server
router.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//retrieve and display landing page
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;