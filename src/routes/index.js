import { Router } from "express";
import infoRoutes from "./info.routes.js";
import personsRoutes from './persons.routes.js'
import blogsRoutes from './blogs.routes.js'
import loginRoutes from './login.js'
import routerContacts from './contact.routes.js'

const router = Router();

router.use(infoRoutes)
router.use(personsRoutes)
router.use(blogsRoutes)
router.use(loginRoutes)
router.use(routerContacts)

export default router
