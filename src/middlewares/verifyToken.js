import jwt from 'jsonwebtoken'

//verify token como middleware
export const verifyToken = (req, _res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.verify(token, process.env.SECRET)
        req.user = decodedToken
        next()
    } catch (error) {
        if(error.name === 'TokenExpiredError') {
            return next(new Error('Token expired'))
        }
        next(error)
    }
}