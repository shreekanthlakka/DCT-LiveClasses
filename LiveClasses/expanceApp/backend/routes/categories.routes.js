import express from "express";
const categoriesRouter = express.Router();
import { checkSchema } from "express-validator";

import {
    getallCategories,
    createCategory,
    getCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/caterogies.controller.js";
import { categoryValidationSchema } from "../validationSchema/caregory.validationSchema.js";

categoriesRouter.route("/all").get(getallCategories);
categoriesRouter
    .route("/new")
    .post(checkSchema(categoryValidationSchema), createCategory);
categoriesRouter
    .route("/:id")
    .get(getCategory)
    .put(updateCategory)
    .delete(deleteCategory);

export default categoriesRouter;
