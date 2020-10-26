const router = require('express').Router();
const notes = require('../db/notes.js');

//display user notes
router.get('/notes', function(req, res) {
    notes.getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//add note
router.post('/notes', function(req, res) {
    notes.createNote(req.body)
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

//delete note
router.delete('/notes/:id', function(req, res) {
    notes.removeNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;