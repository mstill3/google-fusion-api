
var express = require('express');
var app = express();
var googlefusion = require('./api/googlefusion');

app.use('/api', googlefusion);
app.listen(port, function() 
{
    console.log('Express server listening on port ' + process.env.PORT || 80);
});
