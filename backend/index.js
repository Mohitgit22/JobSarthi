import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

// Load environment variables
dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Define allowed origins
const allowedOrigins = [
  "https://job-sarthi.vercel.app",  // Correct URL format without trailing slash
  "http://localhost:5173"           // Correct URL format without trailing slash
];

// Configure CORS options
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., mobile apps or Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS middleware
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // Handle preflight requests

// Define port
const PORT = process.env.PORT || 3000;

// API routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

// Start the server
app.listen(PORT, () => {
  connectDB(); // Connect to the database
  console.log(`Server running at port ${PORT}`);
});
