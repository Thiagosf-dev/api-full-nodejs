'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProductController');

router.get('/', controller.getAll)
   .post('/', controller.insert)
   .put('/:id', controller.update)
   .delete('/', controller.remove);

router.get('/:slug', controller.getBySlug);

router.get('/get/:id', controller.getById);

router.get('/tags/:tag', controller.getByTag);

module.exports = router;