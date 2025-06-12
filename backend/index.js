const express = require("express");
const app = express();

//mysql & cors
const cors = require("cors");
const mysql = require("mysql");

// use express to parse the data
app.use(express.json());

app.use(cors());

// create database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "igreenrepub"
});

// get request
app.get("/", (req, res) => {
    // define the sql table to access in the db
    const sql = "SELECT * from fellows"
    // then query
    db.query(sql, (err, data) => {
        if(err) return app.json("Error");
        return app.json(data);
    });
});

// use the psot request
app.post("/create", (req, res) => {
    const sql = "INSERT into fellows (`firstName`, `LastName`, `Email`) VALUES (?)";
    const values = [
        req.body.name
    ]
});

app.listen(5000, () => {
    console.log("App is litening on port 5000");
});