import { Router } from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";
import { validateBody } from "../middleware/validate.middleware.js";
import { createUserSchema } from "../schemas/user.schema.js";

const router = Router();

router.post("/users", validateBody(createUserSchema), createUser);
router.get("/users", getAllUsers);

export default router;