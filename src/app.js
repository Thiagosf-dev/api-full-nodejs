'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const requireDir = require('require-dir');

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