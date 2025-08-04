import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { Person } from '../schemas/persons.schema.js'

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
    const user = await Person.findOne({ username })
    if(!user) {
        return res.status(401).json({ message: 'usuario no encontrado' })
    }
    const passwordCorrect = await bcrypt.compare(password, user.passwordHash)
    if(!passwordCorrect) {
        return res.status(401).json({ message: 'contraseña incorrecta' })
    }
    const userForToken = {
        username: user.username,
        id: user._id
    }
    const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '1h' })
    res.status(200).json({ token, username: user.username, name: user.name })
    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'token expirado' })
        }
    }
}