import bcrypt from 'bcrypt'
import User from '../schemas/persons.schema.js'
import test, { beforeEach } from 'node:test'


test('crear usuario al registrarse en la base de datos', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const passwordHash = await bcrypt.hash('test', 10)
        const user = new User({ username: 'samito', passwordHash, name: 'samuel' })
        await user.save()
    })
})