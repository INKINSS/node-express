import { Schema, model } from "mongoose";

export const personSchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    number: {
        type: String
    }
})

export const Person = model('Person', personSchema, 'persons')