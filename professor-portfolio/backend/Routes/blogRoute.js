import express from "express";
import { postBlog } from "../Controllers/blogController.js";
const router = express.Router();
router.post("/blog", postBlog);
export default router
