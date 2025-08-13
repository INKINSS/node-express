import { Person } from "../schemas/persons.schema.js"

export const createContact = async (req, res) => {
    try {
        const { name, number } = req.body
        if(!name || !number) {
            return res.status(400).json({ message: 'falta nombre o numero' })
        }
        const existingPerson = await Person.findOne({ name })
        if(existingPerson) {
            return res.status(400).json({ message: 'esta persona ya existe' })
        }
        const person = new Person({ name, number })
        await person.save()
        res.status(201).json(person)
    } catch (error) {
        console.log(error)
    }
}