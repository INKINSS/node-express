import { Blog } from "../schemas/blogs.schema.js"
import { Person } from "../schemas/persons.schema.js"

export const getAllBlogs = async (_req, res) => {
    try {
        const blog = await Blog.find().populate('user', { name: 1, username: 1 })
        if(blog.length === 0) {
            return res.status(404).json({ message: 'No blogs found' })
        }
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

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

//valida que el usuario que esta creando el blog sea el dueño
export const createBlog = async(req, res) => {
    try {
        const { title, author, url, content, userId } = req.body
        const user = await Person.findById(userId)
        const blog = new Blog({ title, author, url, content, user: user._id })
        await blog.save()
        user.notes = user.notes.concat(blog._id)
        await user.save()
        res.status(201).json(blog)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

export const updateBlog = async(req, res) => {
    try {
        const { id } = req.params
        const { title, author, url } = req.body
        const blog = await Blog.findByIdAndUpdate(id, { title, author, url }, { new: true })
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