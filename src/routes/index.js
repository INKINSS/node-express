import { Router } from "express";
import infoRoutes from "./info.routes.js";
import personsRoutes from "./persons.routes.js";

const router = Router();

router.use(infoRoutes)
router.use(personsRoutes)

export default router
