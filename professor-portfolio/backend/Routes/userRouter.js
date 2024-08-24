import express from "express";
import { register } from "../Controllers/userController.js";
import { loginUser } from "../Controllers/userController.js";
const router = express.Router();
router.post("/register", register);
router.post("/login", loginUser);
export default router
