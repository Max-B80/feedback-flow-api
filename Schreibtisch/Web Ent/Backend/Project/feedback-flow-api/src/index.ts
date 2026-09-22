import express from "express";
import requestRoutes from "./routes/request.routes.js";

const app = express();
// 🔑 Read PORT from environment variables, fallback to 3000
const PORT = process.env.PORT || 3000;
// 1. Middleware to parse JSON bodies from incoming requests
app.use(express.json());

// 2. Register our Feature Request routes under the /api prefix
app.use("/api", requestRoutes);

// 3. Start the server
app.listen(PORT, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${PORT}`);
});