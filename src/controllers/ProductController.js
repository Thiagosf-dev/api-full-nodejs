'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
   async getAll(req, res, next) {
      return res.send("todos");
   },

   async insert(req, res, next) {
      try {
         return res.json(await Product.create(req.body));
      } catch (error) {
         return res.send(error);  
      }
   },

   async update(req, res, next) {
      return res.send("update");
   },

   async remove(req, res, next) {
      return res.send("remove");
   },
};