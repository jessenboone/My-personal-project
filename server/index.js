//needed moduels
const express = require('express'),
      cors = require('cors'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      session = require('express-session'),
      app = module.exports = express(),
      port = 8008;

      app.use(bodyParser.json());
      app.use(express.static(__dirname + './../dist'));
      app.use(cors());
      app.use(session({
          secret: config.SESSION_SECRET,
          saveUninitialized: false,
          resave: false
      }));

//creating setup for connection to a database
const conn = massive.connectSync({
  connectionString: config.connectionString
});

app.set('db', conn);
var db = app.get('db');
const carCtrl = require('./controller/mainCtrl');


//functions that run when handeling requets


app.get('/api/test', function(req, res) {
  console.log('hey');
  res.status(200).send('hey')
})
app.get('/api/cars/:model', carCtrl.getCars)

app.get('/api/images/:model', carCtrl.getImages)


//start the server listening on port
app.listen(port, function() {
    console.log('Ship docked at port ' + port);
});
