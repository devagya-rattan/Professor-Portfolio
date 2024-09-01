import express from "express";
import { registerUser, fetchUser,loginUser } from "../Controllers/userController.js";

const router = express.Router();
router.post("/register", registerUser);
router.post("/loginusers", loginUser);
router.get("/fetchusers", fetchUser);
export default router;
