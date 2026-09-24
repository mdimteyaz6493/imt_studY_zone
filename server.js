const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();


/*
|--------------------------------------------------------------------------
| Middleware
|--------------------------------------------------------------------------
*/

app.use(
  cors({
    origin: "*"
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

const subjectRoutes = require("./routes/subjectRoutes");
const questionRoutes = require("./routes/questionRoutes");
const practicalRoutes = require("./routes/practicalRoutes");
const noteRoutes = require("./routes/noteRoutes");

app.use("/api/subjects", subjectRoutes);

app.use("/api/questions", questionRoutes);

app.use("/api/practical", practicalRoutes);

app.use("/api/notes", noteRoutes);


/*
|--------------------------------------------------------------------------
| Health Check
|--------------------------------------------------------------------------
*/

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Interview Preparation API is running",
    timestamp: new Date().toISOString()
  });
});


/*
|--------------------------------------------------------------------------
| Root
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Interview Preparation API",
    version: "1.0.0",

    endpoints: {
      health: "/api/health",
      subjects: "/api/subjects",
      questions: "/api/questions/:subjectSlug",
      checkAnswer: "/api/questions/check"
    }
  });
});


/*
|--------------------------------------------------------------------------
| 404
|--------------------------------------------------------------------------
*/

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found"
  });
});


/*
|--------------------------------------------------------------------------
| Error Handler
|--------------------------------------------------------------------------
*/

app.use((error, req, res, next) => {
  console.error(error);

  res.status(500).json({
    success: false,
    message: "Internal Server Error"
  });
});


/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});