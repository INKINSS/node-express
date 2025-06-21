import express from 'express'
const route = express.Router()
import { deletePerson, getAllPersons, getPersonById, createPerson } from '../controllers/persons.controller.js'

route.get('/api/persons', getAllPersons)
route.get('/api/persons/:id', getPersonById)
route.post('/api/persons', createPerson)
route.delete('/api/persons/:id', deletePerson)

export default route