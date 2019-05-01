
var mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb+srv://matt:WxFmVVZqaGo7d3KP@my-api-bat81.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });
