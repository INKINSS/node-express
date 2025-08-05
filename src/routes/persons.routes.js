import express from 'express'
import { validateName } from '../middlewares/persons.middleware.js'
import { deletePerson, getAllPersons, getPersonById, createPerson, updatePerson } from '../controllers/persons.controller.js'

const route = express.Router()

route.get('/api/persons', getAllPersons)
route.get('/api/persons/:id', getPersonById)
route.post('/api/persons', validateName, createPerson)
route.put('/api/persons/:id', updatePerson)
route.delete('/api/persons/:id', deletePerson)

export default route