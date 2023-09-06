import { Router } from "express";
import * as controller from "../controllers/student.controller";
import { verifyJWTToken } from "../middleware/verifyToken";
import {
  verifyExistingReferenceNumber,
  verifyStudentReferenceNumber,
} from "../middleware/verifyReferenceNumber";
import {
  validateCreateStudentSchema,
  validateStudentReferenceNumberPayloadSchema,
  validateUpdateStudentSchema,
  validateYearParameter,
} from "../middleware/validateStudentSchema";

const router = Router();

router.post(
  "/",
  verifyJWTToken,
  verifyExistingReferenceNumber,
  validateCreateStudentSchema,
  controller.createStudent
);

router.delete("/", [verifyJWTToken, verifyStudentReferenceNumber], controller.deleteStudentRecord)
router.get("/", controller.getAllStudentData);
router.get("/:year", validateYearParameter, controller.getAllStudentDataInYear);
router.patch(
  "/",
  verifyStudentReferenceNumber,
  validateUpdateStudentSchema,
  controller.updateStudentDataHavingTheReferenceNumber
);
router.post(
  "/:year",
  verifyJWTToken,
  validateYearParameter,
  validateStudentReferenceNumberPayloadSchema,
  controller.uplooadListOfStudentReferenceNumbersWithCorrespondingYear
);

export default router;
