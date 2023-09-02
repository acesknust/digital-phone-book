import { Router } from "express";
import * as controller from "../controllers/student.controller";
import { verifyJWTToken } from "../middleware/verifyToken";
import { verifyStudentReferenceNumber } from "../middleware/verifyReferenceNumber";

const router = Router()

router.post('/student',verifyJWTToken, controller.createStudent)
router.get('/student',controller.getAllStudentData)
router.get('/student/:year',controller.getAllStudentDataInYear)
router.patch('/student/:referenceNumber',verifyStudentReferenceNumber,controller.updateStudentDataHavingTheReferenceNumber)
router.post('/students/:year',verifyJWTToken,controller.uplooadListOfStudentReferenceNumbersWithCorrespondingYear)

export default router