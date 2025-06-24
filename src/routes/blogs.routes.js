import express from 'express'
const route = express.Router()

import { createBlog, getAllBlogs } from '../controllers/blogs.controller.js'

route.get('/api/blogs', getAllBlogs)
route.post('/api/blogs', createBlog)

export default route