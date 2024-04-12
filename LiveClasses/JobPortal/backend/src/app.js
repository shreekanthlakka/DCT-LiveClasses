import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// // const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const __dirname = dirname(fileURLToPath(import.meta.url));

// const accessLogStream = fs.createWriteStream(
//     // path.join(__dirname, "access.log"),
//     "./access.log",
//     { flags: "a" }
// );

const app = express();

app.use(express.json());
app.use(cookieParser());
// app.use((req, res, next) => {
//     console.log(`${req.ip} - ${req.method} - ${req.url} - ${new Date()}`);
//     next();
// });
app.use(morgan("tiny"));

import users from "./routes/user.routes.js";
import candidate from "./routes/candidate.routes.js";
import recuiter from "./routes/recuiter.routes.js";

app.use("/api/v1/users", users);
app.use("/api/v1/users/candidate", candidate);
app.use("/api/v1/users/recuiter", recuiter);

export default app;
