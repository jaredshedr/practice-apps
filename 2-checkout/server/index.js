require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);
app.use(express.json())

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/checkout', (req, res) => {
  req.body.session = req.session_id;
  db.addOrUpdateFormOne(req.body, (err, data) => {
    if (err) {
      console.log('error adding');
      res.status(500).send(err)
    } else {
      console.log(data);
      res.status(201).send('successful load')
    }
  });
})

app.post('/checkout/second', (req, res) => {
  req.body.session = req.session_id;
  db.updateFormTwo(req.body, (err, data) => {
    if (err) {
      console.log('error updating form two'. err)
      res.status(500).send(err)
    } else {
      console.log(data);
      res.status(201).send('succcessful update');
    }
  })
})

app.post('/checkout/third', (req, res) => {
  req.body.session = req.session_id;
  db.updateFormThree(req.body, (err, data) => {
    if (err) {
      console.log('error adding third form')
      res.status(500).send('failure')
    } else {
      res.status(201).send('succesful third posting')
    }
  })
})

app.get('/checkout', (req, res) => {
  db.getUser(req.session_id, (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send('failure retrieving info')
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
