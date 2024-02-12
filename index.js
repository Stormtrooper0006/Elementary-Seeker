import "dotenv/config";
import express from "express";
import mysql from "mysql";
import cors from "cors";

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

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/home", (req, res) => {
  const query =
    "SELECT r.id, " + "r.province, " + "r.regency " + "FROM regions r";
  db.query(query, (err, result) => {
    if (err) {
      console.error("MySQL query error:", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(result);
    }
  });
});

app.get("/school-list", (req, res) => {
  const province = req.query.province;
  const regency = req.query.regency;

  const query =
    "SELECT s.id as school_id, " +
    "s.name, " +
    "s.description, " +
    "s.contact_number, " +
    "s.address, " +
    "s.website_link, " +
    "p.photo_url1, " +
    "p.photo_url2, " +
    "p.photo_url3 " +
    "FROM schools s " +
    "JOIN photos p ON s.id = p.school_id " +
    "JOIN regions r ON s.region_id = r.id " +
    "WHERE r.province = ? AND r.regency = ?";
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
