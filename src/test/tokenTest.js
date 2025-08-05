import supertest from 'supertest';
import app from '../app.js';
import { Blog } from '../models/blog.js';
import { Person } from '../schemas/persons.schema.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import test from 'node:test';

const api = supertest(app);

let token = '';

test.beforeAll(async () => {
  // Limpia base de datos
  await Blog.deleteMany({});
  await Person.deleteMany({});

  // Crea un usuario de prueba
  const passwordHash = await bcrypt.hash('sekret', 10);
  const user = new Person({ username: 'testuser', passwordHash });
  await user.save();

  // Crea un token válido
  const userForToken = {
    username: user.username,
    id: user._id,
  };
  token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' });
});

test('un blog válido se puede agregar si se envía un token válido', async () => {
  const newBlog = {
    title: 'Nuevo blog test',
    author: 'Tester',
    url: 'http://example.com/test',
    likes: 5,
  };

  await api
    .post('/api/blogs')
    .set('Authorization', `Bearer ${token}`)
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/);

  const blogs = await Blog.find({});
  const titles = blogs.map((b) => b.title);

  test.expect(titles).toContain('Nuevo blog test');
});
