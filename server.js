var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile('public/index.html');
});

app.listen(PORT, function() {
  console.log('Server running on ' + PORT);
});