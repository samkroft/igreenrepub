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

// use the post request
app.post("/create", (req, res) => {
    const sql = "INSERT into fellows (`FirstName`, `LastName`, `Email`) VALUES (?)";
    const values = [
        // get the data from the fellow at frontend
        req.body.firstname,
        req.body.lastname,
        req.body.email,
    ]
    db.query(sql, [values], (err, res) => {
        if(err) return res.json("error");
        return res.json(data);
    })
});

// use the update request
app.put("/fellows", (req, res) => {
    const sql = "UPDATE fellows set `FirstName` = ?, `LastName` = ?, `Email = ?`) where ID = ?";
    const values = [
        // get the data from the fellow at frontend
        req.body.firstname,
        req.body.lastname,
        req.body.email,
    ]

    const id = req.params.id;

    db.query(sql, [...values], (err, res) => {
        if(err) return res.json("error");
        return res.json(data);
    })
});

app.delete("/fellows/:id", (req, res) => {
    const sql = "DELETE FROM fellows WHERE ID?";
    const id = req.params.id;

    db.query(sql, [id], (err, res) => {
        if(err) return res.json("error");
        return res.json(data);
    })
});

app.listen(5000, () => {
    console.log("App is listening on port 5000");
});