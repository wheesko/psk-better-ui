const express = require('express');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5000;

console.log(path.join(__dirname, '..'));

app.use(express.static(__dirname + '/public'));

app.use("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});

app.listen(PORT,() => console.log(`hosting @${PORT}`));