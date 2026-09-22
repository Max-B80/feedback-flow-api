import express from "express";
import { CreateFeatureRequestSchema } from "../schemas/request.schema.js";

export const createFeatureRequest = async (req: express.Request, res: express.Response) => {
  try {
    // Validate incoming user data
    const validatedData = CreateFeatureRequestSchema.parse(req.body);

    // Send success response
    res.status(201).json({
      message: "Feature request created successfully! 🎉",
      data: validatedData,
    });
  } catch (error) {
    // Send error response if validation fails
    res.status(400).json({
      message: "Validation failed",
      error,
    });
  }
};