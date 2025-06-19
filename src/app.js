import express from 'express'
import route from './routes/persons.routes.js'

const app = express()

app.use(route)

app.get('/', (_req, res) => {
    console.log('server listen')
})

export default app