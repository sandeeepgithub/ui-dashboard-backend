const express = require("express");
const jobRoutes = require("./routes/jobRoutes");

const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/v1/test", (req, res, next) => {
  res.send("Working...");
});

app.use("/api/v1/job", jobRoutes);

// if no routes found
app.all("/{*any}", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `No route found for ${req.originalUrl}`,
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
});

module.exports = app;
