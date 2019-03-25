'use strict';

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
   title: {
      type: String,
      required: true,
      trim: true,
   },

   slug: {
      type: String,
      required: true,
      trim: true,
      index: true,
   },

   description: {
      type: String,
      required: true,
   },

   url: {
      type: String,
      required: true,
      trim: true,
   },

   price: {
      type: Number,
      required: true,
   },

   active: {
      type: Boolean,
      required: true,
      default: true,
   },

   tags: [{ 
      type: String,
      require: true,
   }],

   createdAt: {
      type: Date,
      default: Date.now,
   }
});

// ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);