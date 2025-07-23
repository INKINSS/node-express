import { Schema, model } from "mongoose";

export const personSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    username: {
        type: String,
        required: true,
        minlength: 3
    },
    passwordHash: {
        type: String,
        required: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
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

export const Person = model('Person', personSchema, 'users')
