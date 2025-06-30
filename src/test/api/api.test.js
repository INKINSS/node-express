import { test, after } from 'node:test'
import mongoose from 'mongoose'
import supertest from 'supertest'
import app from '../../app.js'

const API = supertest(app)
test('blogs are returned as json', async () => {
    await API
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

after(async () => {
    await mongoose.connection.close()
})