('use strict')

// Modules
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Controllers
var TestController = require('./controllers/TestController');

// Constants
var port = 8887,
    mongoUri = 'mongodb://localhost:27017/sw_test';

// express
var app = express();

  app.use(bodyParser({ limit: 1000 * 1024 * 1024 }));
  app.use(cors());

  app.use(express.static(__dirname + '/public'));

  // Routes for TestController
  app.get('/api/test/', TestController.createTest);
  app.post('/api/test/', TestController.postTest);

  mongoose.connect(mongoUri);
  mongoose.connection.once('open', function() {
    console.log('Connected to Mongo at ', mongoUri);
  });

  app.listen(port, function() {
    console.log('pretending to listen on port ', port);
  });
