import { Router } from "express";
import * as controller from "../controllers/auth.contoller";

const router = Router()

router.post("/signup", controller.signup)
router.post("/signin", controller.signin)

export default router