var async = require('async'),
  keystone = require('keystone');
 
var Gallery = keystone.list('Gallery');
 
/**
 * List PostCategories
 */
exports.list = function(req, res) {
  Gallery.model.find(function(err, items) {
    
    if (err) return res.apiError('database error', err);
    
    res.apiResponse(items);
    
  });
};
 
/**
 * Get Gallery by ID
 */
exports.get = function(req, res) {
  Gallery.model.findOne().where('key', req.params.key).exec(function(err, item) {
    
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');
    
    res.apiResponse(
      item
    );
    
  });
};