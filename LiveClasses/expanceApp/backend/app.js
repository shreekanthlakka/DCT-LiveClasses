import express from "express";
import morgan from "morgan";
const app = express();
app.use(morgan("tiny"));
app.use(express.json());

import categoriesRouter from "./routes/categories.routes.js";
import expanceRoute from "./routes/expance.routes.js";

app.use("/api/v1/categories", categoriesRouter);
app.use("/api/v1/expences", expanceRoute);

export { app };
