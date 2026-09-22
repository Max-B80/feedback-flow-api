import { Router } from "express";
import { 
  createRequest, 
  getAllRequests, 
  upvoteRequest 
} from "../controllers/request.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createRequestSchema } from "../schemas/request.schema.js";
import { upvoteSchema } from "../schemas/upvote.schema.js";

const router = Router();

router.post("/requests", validateBody(createRequestSchema), createRequest);
router.get("/requests", getAllRequests);
router.post("/requests/:id/upvote", validateBody(upvoteSchema), upvoteRequest);

export default router;