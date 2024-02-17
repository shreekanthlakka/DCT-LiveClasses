import express from "express";
import { getAllExpances } from "../controllers/expance.controller.js";

const router = express.Router();

router.route("/all").get(getAllExpances);
export default router;
