import data from '../data/data.json' with { type : 'json' }

export const getAllPersons = (req, res) => {
    res.send(data)
}
