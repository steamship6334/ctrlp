import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", router);

export default app;
