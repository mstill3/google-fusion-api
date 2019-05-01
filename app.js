
var express = require('express');
var app = express();
var db = require('./db');

var PlaceController = require('./foodfinder/PlaceController');
app.use('/mstill3', PlaceController);

module.exports = app;
