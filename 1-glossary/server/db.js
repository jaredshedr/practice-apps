require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`)
// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

let wordSchema = mongoose.Schema({
  id: String, // uuid
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
      callback(null, results);
    }
  })
}

let save = function (word) {
  let tempWord = new Word({id: word.meta.uuid, name: word.meta.stems[0], type: word.fl, description: word.shortdef[0]});
  tempWord.save((err) => {
    if (err) {
      console.log('error saving', err);
    }
  });
}

let findOne = function (word) {

}



module.exports.getAll = getAll
module.exports.save = save
module.exports.findOne = findOne