const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/config.env"});

connectDB();

const points = require("./routes/points");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use("/api/points", points);

// Build settings for production
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/dist"));
  
    app.get("*", (req, res) =>
      res.sendFile(path.resolve("spatial-api-js", "client", "dist", "index.html"))
    );
  }

const PORT = process.env.PORT || 5001;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)