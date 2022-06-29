require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`)
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let wordSchema = mongoose.Schema({
  id: Number, // uuid
  name: String, // id
  type: String, // fl
  description: String // shortdef ** array of strings
});

let Word = mongoose.model('Word', wordSchema);


let getAll = function (callback) {
  Word.find().sort({ name: 'asc' }).exec((err, results) => {
    if (err) {
      console.log('error in get all', err);
      callback(err, null)
    } else {
      console.log(results);
      callback(null, results);
    }

  })
}





module.exports.getAll = getAll