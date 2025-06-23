import { Person } from '../schemas/persons.schema.js'

export const getAllPersons = async(req, res) => {
    try {
        const persons = await Person.find()
        res.json(persons)
        if(persons.length === 0) {
            return res.status(404).json({ message: 'No persons found' })
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
            return res.status(404).json({ message: 'Person not found' })
        }
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}

export const createPerson = async(req, res) => {
    try {
        const { name, number, id } = req.body
        const getAllPerons = await Person.find()
        if(getAllPerons.some(person => person.name === name)) {
            return res.status(400).json({ message: 'esta persona ya existe, actualice su numero' })
        }
        const person = new Person({ name, number, id})
        await person.save()
        res.status(201).json(person)
    } catch (error) {
        console.log(error)
    }
}

export const updatePerson = async(req, res) => {
    try {
        const { id } = req.params
        const { name, number } = req.body
        const person = await Person.findByIdAndUpdate(id, { name, number }, { new: true })
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
