import { Router } from "express";
import * as controller from "../controllers/auth.contoller";
import { validateAdminLoginAndSignUpSchema } from "../middleware/validateAdminSchema";

const router = Router();

router.post("/signup",validateAdminLoginAndSignUpSchema, controller.signup);
router.post("/signin",validateAdminLoginAndSignUpSchema, controller.signin);

export default router;
