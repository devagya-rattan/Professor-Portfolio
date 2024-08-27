import express from "express";
import { publish } from "../Controllers/publicationController.js";
const router = express.Router();
router.post("/publish", publish);

export default router;
