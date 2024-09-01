import express from "express";
import colors from "colors";
import { PrismaClient } from "@prisma/client";
import { configDotenv } from "dotenv";
import userRouter from "./Routes/userRouter.js";
import fetchRouter from "./Routes/userRouter.js";
import loginRouter from "./Routes/userRouter.js";
import cors from "cors";
const prisma = new PrismaClient();
const app = express();
const PORT = 8080;
// middlewares
app.use(cors());
app.use(express.json());
configDotenv();
// conneting to the routes------------->>>>>>
app.use("/api/users", userRouter);
app.use("/api/fetch", fetchRouter);
app.use("/api/login", loginRouter);
// conneting to the port 8080
app.listen(PORT, () => {
  console.log(` server is working on port ${PORT} `.bgBlack.white);
});
const postgresConnection = async () => {
  try {
    const result = await prisma.$queryRaw`SELECT current_database()`;
    console.log(" Connected to database: ".bgBlue.black, result[0]);
  } catch (e) {
    console.error("Error connecting to database:", e);
  } finally {
    await prisma.$disconnect();
  }
};
postgresConnection();
