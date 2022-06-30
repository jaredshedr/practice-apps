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

db.updateFormTwo = function (data, callback) {
  db.queryAsync(`UPDATE user SET street_add = ?, apartment = ?, city = ?, state = ?, zip = ?, phone = ?
  WHERE session_id = ?`, [data.address, data.apt, data.city, data.state, data.zip, data.phone, data.session], (err, success) => {
    if (err) {
      console.log(err);
      callback(err, null);
    } else {
      console.log('added')
      callback(null, 'success');
    }
  })
}

module.exports = db;


// UPDATE items,month SET items.price=month.price
// WHERE items.id=month.id;

// street_add VARCHAR(255),
//   apartment VARCHAR(255),
//   city VARCHAR(255),
//   state VARCHAR(255),
//   zip INT,
//   phone INT,