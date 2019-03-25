'use strict';

module.exports = {
   async getAll(req, res, next) {
      return res.send("todos");
   },

   async insert(req, res, next) {
      return res.send("insert");
   },

   async update(req, res, next) {
      return res.send("update");
   },

   async remove(req, res, next) {
      return res.send("remove");
   },
};