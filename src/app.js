import express from 'express'
import routes from './routes/index.js'
import morganBody from 'morgan-body'
import dotenv from 'dotenv'
import { connectDB } from './db/config.js'
import cors from 'cors'
const app = express()

//config
if (process.env.NODE_ENV !== 'production') {
    const envFile = `.env.${process.env.NODE_ENV}`;
    dotenv.config({ path: envFile });
}

app.use(cors())

//middlewares
app.use(express.json())
morganBody(app)

//database
connectDB()

//routes
app.use('/', routes)


app.get('/', (_req, _res) => {
    console.log('server listen')
})

export default app;