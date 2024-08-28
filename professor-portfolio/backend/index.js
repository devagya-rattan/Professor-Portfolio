// importtim all dependencies
import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import colors from "colors";
import mongoose from "mongoose";
// import { postgreConnection } from "./Models/database.js";
import userRouter from "./Routes/userRouter.js";
import publicationRoutes from "./Routes/publicationRoutes.js";
import blogRoute from "./Routes/blogRoute.js";
import internRoute from "./Routes/internRoute.js"
// Defining the express routing by assign it to a variable-------->
const PORT = 8080;
const app = express();
// middlewares
configDotenv();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRouter);
app.use("/api/addpublish", publicationRoutes);
app.use("/api/addblog", blogRoute);
app.use("/api/addintern", internRoute);
// Connecting to the database Postgres pg4 admin
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" connected to mongo db ".bgGreen.black);
  })
  .catch((error) => {
    console.log(" error connecting to mongo db ".bgRed.white, error);
  });
// Starting the server on port
app.listen(PORT, () => {
  console.log(` Server is listening to the port ${PORT} `.bgCyan.black);
});
