import express from "express";
const categoriesRouter = express.Router();

import {
    getallCategories,
    createCategory,
} from "../controllers/caterogies.controller.js";

categoriesRouter.route("/all").get(getallCategories);
categoriesRouter.route("/new").post(createCategory);

export default categoriesRouter;
