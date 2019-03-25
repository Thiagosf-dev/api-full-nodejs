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

// ROTAS
const indexRoute = require('./routes/Index');
const productRoute = require('./routes/ProductRoute');

app.use(express.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;