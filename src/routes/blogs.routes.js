import express from 'express'
const route = express.Router()

import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogs.controller.js'

route.get('/api/blogs', getAllBlogs)
route.post('/api/blogs', createBlog)
route.get('/api/blogs/:id', getBlogById)
route.put('/api/blogs/:id', updateBlog)
route.delete('/api/blogs/:id', deleteBlog)

export default route