import express from 'express'
const route = express.Router()

import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogs.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

route.get('/api/blogs', getAllBlogs)
route.post('/api/blogs', verifyToken, createBlog)
route.get('/api/blogs/:id', getBlogById)
route.put('/api/blogs/:id', verifyToken, updateBlog)
route.delete('/api/blogs/:id', verifyToken, deleteBlog)

export default route