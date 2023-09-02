import { Router } from "express";
import * as controller from "../controllers/student.controller";
import { verifyJWTToken } from "../middleware/verifyToken";

const router = Router()

router.post('/student',verifyJWTToken, controller.createStudent)
router.get('/student',controller.getAllStudentData)

export default router