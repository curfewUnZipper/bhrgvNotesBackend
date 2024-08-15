const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();

connectToMongo();

const app = express();
const port = process.env.PORT2 || 5000;

const http = require("http");

// app.use(cors())

const allowedOrigins = [process.env.CORS_ORIGIN || "http://localhost:5005 "];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // If you need to send cookies or other credentials
  })
);

app.use(express.json());

//Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
