const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      "CREATE TABLE IF NOT EXISTS responses (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY)"
    )
  )
  .catch((err) => console.log('this is the err', err));

db.addOrUpdateFormOne = function (data, callback) {
  console.log(data);
  db.queryAsync('INSERT INTO USER (session_id, name, email, password) Values (?, ?, ?, ?)', [data.session, data.name, data.email, data.password], (err, success) => {
    if (err) {
      console.log('error inserting into db', err)
      callback(err, null);
    } else {
      console.log('successful insert', success)
      callback(null, success);
    }
  })
}

module.exports = db;
