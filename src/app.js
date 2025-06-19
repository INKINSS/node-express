import express from 'express'
import routes from './routes/index.js'
import morganBody from 'morgan-body'
// import { shotMethod } from './middlewares/method.middleware.js'
// import { pageNotFound } from './middlewares/pageNotFound.middleware.js'

const app = express()


//middlewares
app.use(express.json())
morganBody(app)
// app.use(shotMethod)

//error handlers
// app.use(pageNotFound)

//routes
app.use(routes)



app.get('/', (_req, res) => {
    console.log('server listen')
})

export default app;