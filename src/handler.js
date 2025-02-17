const { nanoid } = require('nanoid');
const notes = require('./notes');

const addNotes = (req, res) => {
    const { title, body } = req.body;
    const id = nanoid(16);
    const newNotes = { id, title, body };
    notes.push(newNotes);
    return res.status(201).send({
        status: 'success',
        message: 'Notes added successfully',
        data: {
            id
        }
    });
};

const getNotes = (req, res) => res.status(200).send({
    status: 'success',
    message: 'Notes fetched successfully',
    data: {
        notes,
    },
});

const getNoteById = (req, res) => {
    const { id } = req.params;
    const noted = notes.find((note) => note.id === id);
    if (!noted) {
        return res.status(404).send({
            status: 'error',
            message: 'Note not found',
        });
    }
    return res.status(200).send({
        status: 'success',
        message: 'Note fetched successfully',
        data: {
            noted,
        },
    });
};

const updateNoteById = (req, res) => {
    const { body, title } = req.body;
    const { id } = req.params;
    const updateNote = notes.findIndex((note) => note.id === id);
    notes[updateNote] = { id, title, body };
    return res.status(200).send({
        status: 'success',
        message: 'Note updated successfully',
    });
};

const deleteNoteById = (req, res) => {
    const { id } = req.params;
    const deleteNote = notes.findIndex((note) => note.id === id);
    notes.splice(deleteNote, 1);
    return res.status(200).send({
        status: 'success',
        message: 'Note deleted successfully',
    });
};

module.exports = {
    addNotes, getNotes, getNoteById, updateNoteById, deleteNoteById,
};
