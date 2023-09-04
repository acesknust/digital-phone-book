import { Router } from "express";
import * as controller from "../controllers/student.controller";
import { verifyJWTToken } from "../middleware/verifyToken";
import { verifyExistingReferenceNumber, verifyStudentReferenceNumber } from "../middleware/verifyReferenceNumber";
import {
  validateCreateStudentSchema,
  validateStudentReferenceNumberPayloadSchema,
  validateUpdateStudentSchema,
  validateYearParameter,
} from "../middleware/validateStudentSchema";

const router = Router();

router.post("/student", verifyJWTToken, verifyExistingReferenceNumber,validateCreateStudentSchema, controller.createStudent);
router.get("/student", controller.getAllStudentData);
router.get("/student/:year", validateYearParameter, controller.getAllStudentDataInYear);
router.patch(
  "/student",
  verifyStudentReferenceNumber,
  validateUpdateStudentSchema,
  controller.updateStudentDataHavingTheReferenceNumber
);
router.post(
  "/students/:year",
  verifyJWTToken,
  validateYearParameter,
  validateStudentReferenceNumberPayloadSchema,
  controller.uplooadListOfStudentReferenceNumbersWithCorrespondingYear
);

export default router;
