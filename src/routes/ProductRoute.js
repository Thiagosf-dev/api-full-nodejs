'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProductController');

router.get('/', controller.getAll)
   .post('/', controller.insert)
   .put('/:id', controller.update)
   .delete('/:id', controller.remove);

module.exports = router;