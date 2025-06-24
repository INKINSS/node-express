export const validateName = (req, res, next) => {
    const { name } = req.body
    if(name.length < 3) {
        return res.status(400).json({ message: 'el nombre debe tener al menos 3 caracteres' })
    }
    next()
}

export const validateNumber = (req, res, next) => {
    const { number } = req.body
    const numberPattern = /^\d{2,3}-\d+$/;
    if (!numberPattern.test(number)) {
        return res.status(400).json({ message: 'el número debe tener el formato XX-XXXX o XXX-XXXX, donde X es un dígito' })
    }
    next()
}