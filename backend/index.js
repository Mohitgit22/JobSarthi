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


// Allow all origins (not recommended for production)
const corsOptions = {
  origin: "*", // Allow any domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true, // Allow cookies and credentials
  optionsSuccessStatus: 200, // For legacy browsers
};

// Apply CORS middleware
app.use(cors(corsOptions));
// Handle preflight requests automatically
app.options("*", cors(corsOptions));




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