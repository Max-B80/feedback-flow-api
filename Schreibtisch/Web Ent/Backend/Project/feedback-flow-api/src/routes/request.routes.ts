import express from "express";
import { createFeatureRequest } from "../controllers/request.controller.js";

const router = express.Router();

// Define the POST endpoint for requests
router.post("/requests", createFeatureRequest);

export default router;