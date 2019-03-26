'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const mongoose = require('mongoose');

// CONEXÃO BANCO
mongoose.connect('mongodb://root:root123@ds225375.mlab.com:25375/api-full-nodejs', {
   useNewUrlParser: true
});

// CARREGANDO OS MODELS
requireDir('./models');

app.use(express.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

// ROTAS
app.use('/', require('./routes/Index'));
app.use('/products', require('./routes/ProductRoute'));

module.exports = app;