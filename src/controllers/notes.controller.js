import data from '../data/data.json' with { type : 'json' }
import { Note } from '../schemas/note.schema.js'
import mongoose from 'mongoose'

export const getAllNotes = async(req, res) => {
    try {
        const notes = await Note.find()
        res.json(notes)
        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}

export const getNoteById = async(req, res) => {
    try {
        const { id } = req.params
        const note = await Note.findById(id)
        if(!note) {
            return res.status(404).json({ message: 'Note not found' })
        }
        res.json(note)
        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}

export const createNote = async(req, res) => {
    try {
        const { content, important } = req.body
        const note = new Note({ content, important})
        await note.save()
        res.status(201).json(note)
        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}

export const deleteNote = async(req, res) => {
    try {
        const { id } = req.params
        const note = await Note.findByIdAndDelete(id)
        if(!note) {
            return res.status(404).json({ message: 'Note not found' })
        }
        res.json(note)
        mongoose.connection.close()
    } catch (error) {
        console.log(error)
    }
}
