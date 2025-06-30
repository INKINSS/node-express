import test from 'node:test'
import assert from 'node:assert'
import supertest from 'supertest'
import app from '../../app.js'

const request = supertest(app)

test('get number of blogs', async () => {
  const response = await request.get('/api/blogs')
  assert.strictEqual(response.statusCode, 200)
  assert.strictEqual(Array.isArray(response.body), true)
  assert.strictEqual(response.body.length, 1)
})

test('cada blog debe tener un campo _id', async () => {
    const response = await request.get('/api/blogs')
  
    assert.strictEqual(response.statusCode, 200)
    assert.ok(Array.isArray(response.body), 'El body debe ser un array')
  
    for (const blog of response.body) {
      assert.ok(
        blog._id,
        `El blog no tiene el campo _id: ${JSON.stringify(blog)}`
      )
    }
})

test('verifica si falta la propied likes en la solicitud', async() => {
    const newNote = {
        title: 'Test',
        author: 'Test',
        url: 'Test',
    }

    const result = await request.post('/api/blogs').send(newNote)
    assert.strictEqual(result.statusCode, 201)
    assert.strictEqual(result.body.likes, 0)
})

test('verifica que no puede faltar el title o la url y que responde con codigo 400', async () => {
    const newNote = {
        author: 'Test',
        title: 'Test',
    }

    const result = await request.post('/api/blogs').send(newNote)
    assert.strictEqual(result.statusCode, 400)
    assert.strictEqual(result.body.message, 'Blog validation failed: url: Path `url` is required.')
})