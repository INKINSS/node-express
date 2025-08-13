import express from 'express'
import { createContact } from '../controllers/contact.controller.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const routerContacts = express.Router()

routerContacts.post('/api/contacts', verifyToken, createContact)

export default routerContacts