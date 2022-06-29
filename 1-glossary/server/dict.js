require("dotenv").config();
const axios = require('axios');


let dictionaryGetta = function (word, callback) {

  axios.get(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.API_KEY}`)
    .then((results) => {
      callback(null, results.data[0])
    })
    .catch((err) => {
      console.log('error retrieving words', err);
      callback(err, null)
    })
}


module.exports.dictionaryGetta = dictionaryGetta