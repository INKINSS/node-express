import express from 'express'
const route = express.Router()
import { getAllInfo } from '../controllers/info.controller.js'

route.get('/info', getAllInfo)

export default route