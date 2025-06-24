export const validateName = (req, res, next) => {
    const { name } = req.body
    if(name.length < 3) {
        return res.status(400).json({ message: 'el nombre debe tener al menos 3 caracteres' })
    }
    next()
}