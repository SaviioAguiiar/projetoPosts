const PORT  = 3000;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const linkRouter = require('./Routes/linkRouter');
const path = require('path');

mongoose.connect('mongodb://localhost/posts');

let db = mongoose.connection;

db.on('err', () => {console.log('Houve um Erro')});
db.once('open', () => {console.log('Banco Carregado')});

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use('/', linkRouter);

app.listen(PORT, () => {
    console.log('Server Running'); 
});