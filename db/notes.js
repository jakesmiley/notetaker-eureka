const fs = require('fs');
const util = require('util');

//read and write file
const fileRead = util.promisify(fs.readFile);
const fileWrite = util.promisify(fs.writeFile);

//notes creator
class Notes {
    constructor() {
        this.idDum = 0;
    };

    read() {
        return fileRead('db/db.json', 'utf8');
    };

    write(note) {
        return fileWrite('db/db.json', JSON.stringify(note));
    };

    getNotes() {
        return this.read().then(notes => {
            let notesList;
            try {
                notesList = [].concat(JSON.parse(notes));
            }
            catch (err) {
                notesList = [];
            }
            return notesList;
        });
    };

    createNote(note) {
        const { title, text } = note;
        const neotericNote = { title, text, id: ++this.idDum }
        return this.getNotes()
            .then(notes => [...notes, neotericNote])
            .then(updateNotes => this.write(updateNotes))
            .then(() => neotericNote)
    };

    destroyNote(id) {
        return this.getNotes()
            .then(notes => notes.filter(note => note.id !== parseInt(id)))
            .then(listedNotes => this.write(listedNotes))
    };
}

module.exports = new Notes();