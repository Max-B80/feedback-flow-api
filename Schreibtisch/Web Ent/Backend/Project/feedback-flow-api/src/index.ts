import express from "express";
import requestRoutes from "./routes/request.routes.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Register API Routes
app.use("/api", userRoutes);
app.use("/api", requestRoutes);

// Global Error Handler (MUST be last)
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`⚡️ [server]: Server running at http://localhost:${PORT}`);
});