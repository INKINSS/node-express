import { Person } from '../schemas/persons.schema.js'
import '../schemas/blogs.schema.js'
import bcrypt from 'bcrypt'

export const getAllPersons = async(_req, res) => {
    try {
        const persons = await Person.find().populate('notes')
        res.json(persons)
        if(persons.lenght === 0) {
            return res.status(404).json({ message: 'no hay usuarios en la base de datos' })
        }
    } catch (error) {
        console.log(error)
    }
}

export const getPersonById = async(req, res) => {
    try {
        const { id } = req.params
        const person = await Person.findById(id)
        if(!person) {
            return res.status(404).json({ message: 'no se encontro el usuario' })
        }
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}

export const createPerson = async(req, res) => {
    try {
        const { username, password, name } = req.body
        if(!username || !password || !name) {
            return res.status(400).json({ message: 'falta nombre, contraseña o usuario' })
        }
        if(username.length < 3 || password.length < 3) {
            return res.status(400).json({ message: 'el usuario y la contraseña deben tener al menos 3 caracteres' })
        }

        const existingUser = await Person.findOne({ username })
        if(existingUser) {
            return res.status(400).json({ message: 'esta persona ya existe' })
        }
        
        const person = new Person({ username, passwordHash: await bcrypt.hash(password, 10), name })
        await person.save()
        res.status(201).json(person)
    } catch (error) {
        console.log(error)
    }
};

export const updatePerson = async(req, res) => {
    try {
        const { id } = req.params
        const { name, number } = req.body
        const person = await Person.findByIdAndUpdate(id, { name, number }, { new: true, runValidators: true, context: 'query' })
        if(!person) {
            return res.status(404).json({ message: 'Person not found' })
        }
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}

export const deletePerson = async(req, res) => {
    try {
        const { id } = req.params
        const person = await Person.findByIdAndDelete(id)
        if(!person) {
            return res.status(404).json({ message: 'Person not found' })
        }
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}