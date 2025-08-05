import { Router } from "express";
import infoRoutes from "./info.routes.js";
import personsRoutes from './persons.routes.js'
import blogsRoutes from './blogs.routes.js'
import loginRoutes from './login.js'

const router = Router();

router.use(infoRoutes)
router.use(personsRoutes)
router.use(blogsRoutes)
router.use(loginRoutes)

export default router
