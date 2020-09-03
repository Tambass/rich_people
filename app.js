const express = require("express");
const PORT = 3000;
const path = require("path");
const mysql = require("mysql");
const methodOverride = require("method-override");

const app = express();

// Dotenv
require("dotenv").config();

// Method Override
app.use(methodOverride("_method"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//setup public folder
app.use(express.static("./public"));
app.get("/", function (req, res) {
  res.render("index");
});

// Mysql
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATA,
});
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connecté à la base MySQL");
});
global.db = db;

app.listen(PORT, function () {
  console.log("Écoute le port : ", PORT);
});
