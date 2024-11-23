// Importing Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Environment Variables

// Initiating Express
const app = express();

// Connecting to Database
mongoose
  .connect(process.env.dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection to the Database was established!");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => console.error("Database connection error:", error));

// Middlewares
app.use(express.json()); // JSON Parser
app.use(express.urlencoded({ extended: true })); // URL-encoded Body Parser

// Enable CORS for frontend requests
app.use(
  cors({
    origin: "*", // Adjust this to restrict origins in production
  })
);

// Routes
const noteRoutes = require("./routes/noteRoutes"); // Notes-related routes
const authRoutes = require("./routes/authRoutes"); // Authentication routes

// Using Routes
app.use("/notes", noteRoutes); // Routes for note operations
app.use("/auth", authRoutes); // Routes for authentication

// Default Route for Unhandled Requests
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});
