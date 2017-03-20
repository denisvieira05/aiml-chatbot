var express = require('express'),
    app = express(),
    path = require("path"),
    port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/build'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/build/index.html'));
});

app.listen(port);
console.log('conectado a ' + port);
