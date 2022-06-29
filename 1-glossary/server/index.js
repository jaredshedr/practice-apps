require("dotenv").config();
const express = require("express");
const path = require("path");
const { getAll, save, findOne, deleteOne } = require('./db')
const { dictionaryGetta } = require('./dict')

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
      res.status(200).send(data);
    }
  })
})

app.post('/words', (req, res) => {

  dictionaryGetta(req.body.newWord, (err, result) => {
    if (err) {
      console.log('error finding word', err);
    } else {
      save(result)
      let tempObj = {id: result.meta.uuid, name: result.meta.stems[0], type: result.fl, description: result.shortdef[0]}
      res.status(201).send(tempObj)
    }
  })
})

app.delete('/words', (req, res) => {
  deleteOne(req.body.newWord, (err, result) => {
    if (err) {
      console.log('error on delete', err)
    } else {
      getAll((err, data) => {
        if (err) {
          console.log('error getting all in server', err);
          res.status(500)
        } else {
          res.status(200).send(data);
        }
      })
    }
  })
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
