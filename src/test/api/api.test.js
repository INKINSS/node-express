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
