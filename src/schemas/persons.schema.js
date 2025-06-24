import { Schema, model } from "mongoose";

export const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    number: {
        type: String,
        required: true,
        minlength: 8
    }
}, {
    versionKey: false
})

export const Person = model('Person', personSchema, 'persons')
