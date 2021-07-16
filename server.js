const express = require("express");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//connect to the database
const db = mysql.createConnection(
  {
    host: "localhost",
    //MYSQL username,
    user: "root",
    //MYSQL password
    password: "Rt@n2010",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query("SELECT * FROM candidates", (err, rows) => {
  console.log(rows);
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
