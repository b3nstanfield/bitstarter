var express = require('express');
var app = express();
var fs = require('fs');
app.use(express.logger('dev'));

app.get('/', function(request, response) {

  var b = fs.readFileSync("index.html");
  response.send(b.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
