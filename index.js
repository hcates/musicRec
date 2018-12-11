let express = require("express");
let app = express();

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);

console.log("Listening on Port 8080");