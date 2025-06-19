import data from '../data/data.json' with { type : 'json' }

export const getAllPersons = (req, res) => {
    res.send(data)
}

export const deletePerson = (req, res) => {
    try {
        const { id } = req.params
        const person = data.filter(person => person.id !== Number(id))
        if(!person) {
            return res.status(404).json({ message: 'Person not found' })
        }
        res.send(person)
    } catch (error) {
        console.log(error)
    }
}
