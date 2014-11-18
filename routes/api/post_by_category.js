var async = require('async'),
  keystone = require('keystone');
 
var Post = keystone.list('Post');
var PostCategory = keystone.list('PostCategory');

/**
 * Get Post by Category
 */
exports.list = function(req, res) {
  PostCategory.model.findOne().where('key', req.params.key).exec(function(err, item) {
    
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');

    var category = item;
    
    Post.model.find().populate('author categories').where('categories').in([category.id]).exec(function(err, items) {
      if (err) return res.apiError('database error', err);
      if (!items || items.length === 0) return res.apiError('not found');

      res.apiResponse(
        items
      );
    });
  });
};