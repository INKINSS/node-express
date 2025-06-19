import express from 'express'
import routes from './routes/index.js'

const app = express()

app.use(routes)

app.get('/', (_req, res) => {
    console.log('server listen')
})

export default app