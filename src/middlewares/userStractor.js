import jwt from 'jsonwebtoken';
import { Person } from '../schemas/persons.schema.js';

export const userExtractor = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Token no encontrado' });
    }

    const token = authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);

    if (!decodedToken.id) {
      return res.status(401).json({ message: 'Token invalido' });
    }

    const user = await Person.findById(decodedToken.id);
    if (!user) {
      return res.status(401).json({ message: 'Usuario no encontrado' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Autenticacion fallida' }, error);
  }
};
