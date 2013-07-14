var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var s = (readFileSync("index.html")).toString("utf-8")
    response.send(s);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
