import express from "express";
import type { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  // The underscores tell TypeScript that _next is intentionally unused
  _next: NextFunction
) => {
  console.error("❌ Error caught by middleware:", err.message);

  // Send a structured 500 status code response
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "An unexpected error occurred.",
  });
};