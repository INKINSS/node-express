import express from 'express'
import { getAllInfo } from '../controllers/info.controller.js'

const route = express.Router()

route.get('/info', getAllInfo)

export default route