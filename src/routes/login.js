import { Router } from "express";
import { login } from "../controllers/login.js";

const loginRouter = Router()

loginRouter.post('/api/login', login)

export default loginRouter
