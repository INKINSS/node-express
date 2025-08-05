import jwt from 'jsonwebtoken'

//verify token como middleware
export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Token no encontrado' })
        }
        const token = authHeader.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.SECRET)
        req.user = decodedToken
        next()
    } catch (error) {
        if(error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expirado' })
        }
        next(error)
    }
}