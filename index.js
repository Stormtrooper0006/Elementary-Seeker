import "dotenv/config";
import express from "express";
import mysql from "mysql";

const app = express();
const port = 3001;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.get("/school-list", (req, res) => {
  const province = req.query.province;
  const regency = req.query.regency;

  const query =
    "SELECT schools.id as school_id, schools.name, schools.description, photos.photo_url1 " +
    "FROM schools " +
    "JOIN photos ON schools.id = photos.school_id " +
    "JOIN regions ON schools.region_id = regions.id " +
    "WHERE regions.province = ? AND regions.regency = ?";
  db.query(query, [province, regency], (err, result) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
