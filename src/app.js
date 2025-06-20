import express from 'express'
import routes from './routes/index.js'
import morganBody from 'morgan-body'
import cors from 'cors'
const app = express()


//middlewares
app.use(express.json())
morganBody(app)
app.use(cors())
//routes
app.use(routes)



app.get('/', (_req, res) => {
    console.log('server listen')
})

export default app;