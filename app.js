
var express = require('express');
var app = express();

var googlefusion = require('./api/googlefusion');
app.use('/api', googlefusion);

module.exports = app;
