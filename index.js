const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

const http = require("http");

// app.use(cors())

const allowedOrigins = [
  process.env.CORS_ORIGIN];

app.use(cors());

app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.get("/", (req, res) => {
  res.status(200).send("WELCOME TO NOTHINGNESS!");
});

// Health-check route for Render
app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy!");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
