const express = require('express');
const app = express()

const PORT = 3333

app.get('/', function (req, res){
  res.send('Hello World!');
});

app.listen(PORT, function(){
  console.log('Rodando na porta:' + PORT )
});