import { z } from "zod";

export const createRequestSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  authorId: z.string().uuid("Invalid user ID format"),
});