'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
   async getAll() {
      try {
         return await Product.find({
            active: true
         }, 'title price slug description');
      } catch (error) {
         throw error;
      }
   },

   async getBySlug(slug) {
      try {
         return await Product.findOne({
            active: true,
            slug
         }, 'title description price slug');
      } catch (error) {
         throw error;
      }
   },

   async getById(id) {
      try {
         return await Product.findById(id);
      } catch (error) {
         throw error;
      }
   },

   async getByTag(tag) {
      try {
         return await Product.find({
            active: true,
            tags: tag
         }, 'title description price slug tags');
      } catch (error) {
         throw error;
      }
   },

   async insert(body) {
      try {
         return await Product.create(body);
      } catch (error) {
         throw error;
      }
   },

   async update(id, payload) {
      try {
         return await Product.findByIdAndUpdate(id, payload, {
            new: true
         });
      } catch (error) {
         throw error;
      }
   },

   async remove(payload) {
      try {
         return await Product.findByIdAndRemove(payload);
      } catch (error) {
         throw error;
      }
   },
};