var express = require('express');

var app = express.createServer(express.logger());

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var data = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  response.send(data.toString('utf-8'));
});

