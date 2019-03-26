'use strict';

const Repository = require('../repositories/ProductRepository');

module.exports = {
   async getAll(req, res, next) {
      try {
         return res.json(await Repository.getAll());
      } catch (error) {
         return res.send(error.errors);
      }
   },

   async getBySlug(req, res, next) {
      try {
         return res.json(await Repository.getBySlug(req.params.slug));
      } catch (error) {
         return res.send(error.errors);
      }
   },

   async getById(req, res, next) {
      try {
         return res.json(await Repository.getById(req.params.id));
      } catch (error) {
         return res.send(error.errors);
      }
   },

   async getByTag(req, res, next) {
      try {
         return res.json(await Repository.getByTag(req.params.tag));
      } catch (error) {
         return res.send(error.errors);
      }
   },

   async insert(req, res, next) {
      try {
         return res.json(await Repository.insert(req.body));
      } catch (error) {
         error.errors.isError = true;
         return res.send(error.errors);
      }
   },

   async update(req, res, next) {
      try {
         return res.json(await Repository.update(req.params.id, req.body));
      } catch (error) {
         return res.send(error.errors);
      }
   },

   async remove(req, res, next) {
      try {
         return res.json(await Repository.remove(req.body.id));
      } catch (error) {
         return res.send(error);  
      }
   }
};