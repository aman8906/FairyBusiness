import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

import contactRoutes from "./routes/contactRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";

dotenv.config();

const app = express();

/* -------------------------------------------------------
   ES Module __dirname setup
------------------------------------------------------- */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* -------------------------------------------------------
   Environment variables
------------------------------------------------------- */

const PORT = process.env.PORT || 5000;

const allowedOrigins = (
  process.env.FRONTEND_URLS || "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

/* -------------------------------------------------------
   CORS configuration
------------------------------------------------------- */

app.use(
  cors({
    origin(origin, callback) {
      // Allow Postman, Thunder Client and server-to-server requests
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      console.error(`CORS blocked origin: ${origin}`);

      return callback(new Error("This origin is not allowed by CORS"));
    },

    credentials: true,

    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],

    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

/* -------------------------------------------------------
   Body parsers
------------------------------------------------------- */

app.use(express.json({ limit: "2mb" }));

app.use(
  express.urlencoded({
    extended: true,
    limit: "2mb",
  }),
);

/* -------------------------------------------------------
   Static uploads
------------------------------------------------------- */

app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads")),
);

/* -------------------------------------------------------
   API routes
------------------------------------------------------- */

app.use("/api/contact", contactRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);

/* -------------------------------------------------------
   Root route
------------------------------------------------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FBS Management Consultancy API is running",
  });
});

/* -------------------------------------------------------
   Health route
------------------------------------------------------- */

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "healthy",
    environment: process.env.NODE_ENV || "development",
    database:
      mongoose.connection.readyState === 1
        ? "connected"
        : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

/* -------------------------------------------------------
   404 handler
------------------------------------------------------- */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

/* -------------------------------------------------------
   Global error handler
------------------------------------------------------- */

app.use((error, req, res, next) => {
  console.error("Server error:", error);

  if (error.message === "This origin is not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "Request origin is not allowed",
    });
  }

  if (error.name === "MulterError") {
    return res.status(400).json({
      success: false,
      message: error.message || "File upload failed",
    });
  }

  return res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal server error",
  });
});

/* -------------------------------------------------------
   Database and server startup
------------------------------------------------------- */

const startServer = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in environment variables");
    }

    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
    console.log(`Database: ${mongoose.connection.name}`);

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

/* -------------------------------------------------------
   MongoDB connection events
------------------------------------------------------- */

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error:", error.message);
});

mongoose.connection.on("disconnected", () => {
  console.warn("MongoDB disconnected");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  console.log("MongoDB connection closed");
  process.exit(0);
});

startServer();