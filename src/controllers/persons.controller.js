import data from '../data/data.json' with { type : 'json' }

export const getAllPersons = (req, res) => {
    res.send(data)
}

export const getPersonById = (req, res) => {
    try {
        const { id } = req.params
        const person = data.find(person => person.id === Number(id))
        if(!person) {
            return res.status(404).json({ message: 'Person not found' })
        }
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}

export const deletePerson = (req, res) => {
    try {
        const { id } = req.params
        const person = data.filter(person => person.id !== Number(id))
        if(!person) {
            return res.status(404).json({ message: 'Person not found' })
        }
        res.json(person)
    } catch (error) {
        console.log(error)
    }
}
