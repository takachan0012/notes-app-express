const routes = require('express').Router();
const {
  getNotes, addNotes, getNoteById, updateNoteById, deleteNoteById,
} = require('./handler');

routes.post('/notes', addNotes);
routes.get('/notes', getNotes);
routes.get('/notes/:id', getNoteById);
routes.post('/notes/:id', updateNoteById);
routes.delete('/notes/:id', deleteNoteById);

module.exports = routes;
