'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
   async getAll(req, res, next) {
      return res.json(await Product.find({
         active: true
      }, 'title price slug'));
   },

   async getBySlug(req, res, next) {
      return res.json(await Product.findOne({
         active: true,
         slug: req.params.slug
      }, 'title description price slug'))
   },

   async getById(req, res, next) {
      return res.json(await Product.findById(req.params.id));
   },

   async getByTag(req, res, next) {
      return res.json(await Product.find({
         tags: req.params.tag,
         active: true
      }, 'title description price slug tags'));
   },

   async insert(req, res, next) {
      try {
         return res.json(await Product.create(req.body));
      } catch (error) {
         return res.send(error);
      }
   },

   async update(req, res, next) {
      return res.json(await Product.findByIdAndUpdate(req.params.id, req.body, {
         new: true
      }));
   },

   async remove(req, res, next) {
      return res.json(await Product.findByIdAndRemove(req.body.id));
   },
};