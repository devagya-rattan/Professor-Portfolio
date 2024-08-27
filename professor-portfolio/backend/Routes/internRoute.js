import express from "express";
import { postIntern } from "../Controllers/internController.js";
const router = express.Router();
router.post("/intern", postIntern);
export default router
