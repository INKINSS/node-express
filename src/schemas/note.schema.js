import { Schema, model } from "mongoose";

export const noteSchema = new Schema({
    content: {
        type: String
    },
    important: {
        type: Boolean
    }
})

export const Note = model('Note', noteSchema, 'notes')