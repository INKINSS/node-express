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
    }
}, {
    versionKey: false
})

export const Blog = model('Blog', blogSchema, 'blogs')