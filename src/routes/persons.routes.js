import express from 'express'
const route = express.Router()
import { deletePerson, getAllPersons } from '../controllers/persons.controller.js'

route.get('/api/persons', getAllPersons)
route.delete('/api/persons/:id', deletePerson)

export default route