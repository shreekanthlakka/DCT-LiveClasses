import express from "express";
import { checkSchema } from "express-validator";
import {
    createAnExpence,
    getAllExpances,
} from "../controllers/expance.controller.js";
import { expenceValidationSchema } from "../validationSchema/expence.validationSchema.js";

const router = express.Router();

router.route("/all").get(getAllExpances);
router
    .route("/new")
    .post(checkSchema(expenceValidationSchema), createAnExpence);
export default router;
