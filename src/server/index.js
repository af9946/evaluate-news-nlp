const dotenv = require('dotenv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

dotenv.config();

var path = require('path')
var AYLIENTextAPI = require("aylien_textapi");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('dist'))

// set aylien API credentials
var aylienapi = new AYLIENTextAPI({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });

console.log(__dirname)
console.log(`Your API key is ${process.env.API_KEY}`);


app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
})

app.post('/nlpAnalysis', function (req, res) {
    aylienapi.sentiment({
        'url': req.body.url,
        'mode' : 'document'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response)
          return
        }
        res.send(error)
      });
})
