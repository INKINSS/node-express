import express from 'express'
const route = express.Router()
import { deleteNote, getAllNotes, getNoteById, createNote } from '../controllers/notes.controller.js'

route.get('/api/notes', getAllNotes)
route.get('/api/notes/:id', getNoteById)
route.post('/api/notes', createNote)
route.delete('/api/notes/:id', deleteNote)

export default route