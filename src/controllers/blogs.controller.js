import { Blog } from "../schemas/blogs.schema.js"

export const getAllBlogs = async (req, res) => {
    try {
        const blog = await Blog.find()
        if(blog.length === 0) {
            return res.status(404).json({ message: 'No blogs found' })
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const createBlog = async(req, res) => {
    try {
        const { title, author, url, likes } = req.body
        const blog = new Blog({ title, author, url, likes })
        await blog.save()
        res.status(201).json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}