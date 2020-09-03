const express = require("express");
const PORT = 3000;
const path = require("path");
const mysql = require("mysql");
const methodOverride = require("method-override");

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Dotenv
require("dotenv").config();

// Method Override
app.use(methodOverride("_method"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//setup public folder
app.use(express.static("./public"));

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

// Controller

const { getHomePage } = require("./controllers/index");
const { getAddPage, addPeople } = require("./controllers/add");

// Routes

app.get("/", getHomePage);
app.get("/add", getAddPage);
app.post("/add", addPeople);

app.listen(PORT, function () {
  console.log("Écoute le port : ", PORT);
});
