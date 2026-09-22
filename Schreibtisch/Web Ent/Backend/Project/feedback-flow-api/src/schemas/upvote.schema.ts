import { z } from "zod";

export const upvoteSchema = z.object({
  userId: z.string().uuid("Invalid user ID format"),
});