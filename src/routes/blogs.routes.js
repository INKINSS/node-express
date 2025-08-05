import express from 'express'
const route = express.Router()

import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogs.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'
import { userExtractor } from '../middlewares/userStractor.js'

route.get('/api/blogs', getAllBlogs)
route.post('/api/blogs', verifyToken, userExtractor, createBlog)
route.get('/api/blogs/:id', getBlogById)
route.put('/api/blogs/:id', verifyToken, userExtractor, updateBlog)
route.delete('/api/blogs/:id', verifyToken, userExtractor, deleteBlog)

export default route