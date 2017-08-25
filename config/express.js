var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');
var expressValidator = require('express-validator');

module.exports = function(){
  var app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extend:true}));
  app.use(expressValidator());

  load('routes', {cwd: 'app'})
    .then('infra')
    .into(app);

  return app;
}
