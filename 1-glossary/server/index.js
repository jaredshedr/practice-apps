require("dotenv").config();
const express = require("express");
const path = require("path");
const {getAll} = require('./db')

const app = express();

app.use(express.json())

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

//get all in database on mount

app.get('/words', (req, res) => {
  getAll((err, data) => {
    if (err) {
      console.log('error getting all in server', err);
      res.status(500)
    } else {
      console.log(data);
      res.status(200).send(data);
    }
  })
})

app.post('/words', (req, res) => {
  console.log(req.body.newWord)
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
