import express from 'express'
const route = express.Router()
import { getAllPersons } from '../controllers/persons.controller.js'

route.get('/api/persons', getAllPersons)

export default route