console.log('Server-side code running');

var express = require("express");
var path = require("path");
var open = require('open');
// var http = require('http');

var port = 8080;
var app = express();

//serve files from public dir - in this case, my src folder
app.use(express.static('src'));

//start server listening on port var
app.listen(port, (err)=>{
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + port);
    }
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '../src/index.html'));
});


// http.createServer( (req, res)=>{
//     res.sendFile(path.join(__dirname, '../src/index.html'));
// }).listen(8080);
