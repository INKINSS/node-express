import { Schema, model } from "mongoose";

export const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    likes: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    versionKey: false
}).set('toJSON', {
    transform: (_doc, ret) => {
      ret.id = ret._id.toString()
      delete ret._id
      delete ret.__v
    }
})

export const Blog = model('Blog', blogSchema, 'notes')