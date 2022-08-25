import express from "express";
import { home } from "../controllers/index.js";
const router = express.Router();

// Routes
// home page
router.get("/", home);

export default router;
