import { Router } from "express";
import * as controller from "../controllers/report.controller"
import { verifyStudentReferenceNumber } from "../middleware/verifyReferenceNumber";
import { verifyJWTToken } from "../middleware/verifyToken";

const router = Router()

router.post("/", verifyStudentReferenceNumber, controller.createReport)
router.get("/", verifyJWTToken, controller.getReports)


export default router

