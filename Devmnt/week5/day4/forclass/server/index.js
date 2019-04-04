const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const massive = require("massive");
require("dotenv").config();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
  app.set("db", db);
  db.init();
  console.log("connected to db");
});

// app.get("/api/students", (req, res, next) => {
//   // get database instance
//   const db = req.app.get("db");
// //   run db query to get all students from the db
//   db.query("select * from students").then(students => {
//     //   THEN when back with the response from the database, send students array to front
//     res.status(200).send(students);
//   });
// });

app.get("/api/students", (req, res, next) => {
  // get database instance
  const db = req.app.get("db");
  //   run db query to get all students from the db
  db.get_all_students()
    //   THEN when back with the response from the database, send students array to front
    .then(students => {
      res.status(200).send(students);
    });
});

app.put("/api/students/:id", (req, res, next) => {
  const db = req.app.get("db");
  const { id } = req.params;
  const { name, cohort, campus } = req.query;
  db.update_students_by_id([id, name, cohort, campus])
    .then(students => {
      res.status(200).send(students);
    })
    .catch(err => console.log(err));
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
