const connectToMongo = require("./db");
const express = require("express");
var cors = require("cors");
require("dotenv").config();

connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

const http = require("http");

//app.use(cors());
const allowedOrigins = [
  "https://cloudscript-one.vercel.app",
  "http://192.168.0.150:5005"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


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
