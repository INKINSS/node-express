import { Blog } from "../schemas/blogs.schema.js"

export const getAllBlogs = async (_req, res) => {
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

export const getBlogById = async(req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findById(id)
        if(!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }
        res.json(blog)
    } catch (error) {
        console.log(error)
    }
}

export const createBlog = async(req, res) => {
    try {
        const { title, author, url, likes } = req.body
        const blog = new Blog({ title, author, url, likes })
        await blog.save()
        res.status(201).json(blog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateBlog = async(req, res) => {
    try {
        const { id } = req.params
        const { title, author, url, likes } = req.body
        const blog = await Blog.findByIdAndUpdate(id, { title, author, url, likes }, { new: true })
        if(!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }
        res.json(blog)
    } catch (error) {
        console.log(error)
    }
}

export const deleteBlog = async(req, res) => {
    try {
        const { id } = req.params
        const blog = await Blog.findByIdAndDelete(id)
        if(!blog) {
            return res.status(404).json({ message: 'Blog not found' })
        }
        res.json(blog)
    } catch (error) {
        console.log(error)
    }
}