const express = require('express');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 3000;

console.log(path.join(__dirname, '..'));

app.use(express.static(__dirname + '..'));


app.listen(PORT,() => console.log(`hosting @${PORT}`));