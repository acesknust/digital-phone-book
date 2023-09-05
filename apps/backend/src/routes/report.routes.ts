import { Router } from "express";
import * as controller from "../controllers/report.controller"
import { verifyStudentReferenceNumber } from "../middleware/verifyReferenceNumber";
import { verifyJWTToken } from "../middleware/verifyToken";

const router = Router()

router.post("/", verifyStudentReferenceNumber, controller.createReport)

// only admins can see reports
router.get("/", verifyJWTToken, controller.getReports)
router.get("/:id", verifyJWTToken, controller.getReports) // get report by id

export default router

