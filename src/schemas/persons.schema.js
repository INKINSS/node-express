import { Schema, model } from "mongoose";

export const personSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})

export const Person = model('Person', personSchema, 'persons')
