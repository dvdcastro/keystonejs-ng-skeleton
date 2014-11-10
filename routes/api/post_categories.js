var async = require('async'),
  keystone = require('keystone');
 
var PostCategory = keystone.list('PostCategory');
 
/**
 * List PostCategories
 */
exports.list = function(req, res) {
  PostCategory.model.find(function(err, items) {
    
    if (err) return res.apiError('database error', err);
    
    res.apiResponse(items);
    
  });
};
 
/**
 * Get PostCategory by ID
 */
exports.get = function(req, res) {
  PostCategory.model.findOne().where('key', req.params.key).exec(function(err, item) {
    
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');
    
    res.apiResponse(
      item
    );
    
  });
};