import { Schema, model } from "mongoose";

export const personSchema = new Schema({
    name: {
        type: String,
        minlenght: 3
    },
    username: {
        type: String,
        minlenght: 3,
        unique: true
    },
    passwordHash: {
        type: String,
    },
    number: {
        type: String,
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Blog'
    }]
}, {
    versionKey: false
}).set('toJSON', {
    transform: (_doc, ret) => {
      ret.id = ret._id.toString()
      delete ret._id
      delete ret.__v
      delete ret.passwordHash
    }
})

export const Person = model('Person', personSchema, 'persons')
