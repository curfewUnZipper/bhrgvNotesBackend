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

app.use(cors({
  origin: 'https://notesfront-seven.vercel.app', // Replace with your Vercel frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the HTTP methods you need
  credentials: true // Allow cookies and other credentials to be sent
}));
app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
