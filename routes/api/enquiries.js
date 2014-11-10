var async = require('async'),
  keystone = require('keystone');
 
var Enquiry = keystone.list('Enquiry');
 
/**
 * List Enquiries
 */
exports.list = function(req, res) {
  Enquiry.model.find().populate('author categories').exec(function(err, items) {
    
    if (err) return res.apiError('database error', err);
    
    // res.apiResponse({
    //   posts: items
    // });

    res.apiResponse(items);
    
  });
};
 
/**
 * Get Enquiry by ID
 */
exports.get = function(req, res) {
  Enquiry.model.findOne().populate('author categories').where('slug', req.params.slug).exec(function(err, item) {
    
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');
    
    res.apiResponse(
      item
    );
    
  });
};
 
 
/**
 * Create a Enquiry
 */
exports.create = function(req, res) {
  
  var data = (req.method == 'POST') ? req.body : req.query,
    item = new Enquiry.model(data);

  console.log('Saving: ');
  console.log(data);

  item.save(function(err) {
    if (err) return res.apiError('error', err);

    res.apiResponse(
      item
    );
  });
};
 
/**
 * Get Enquiry by ID
 */
exports.update = function(req, res) {
  Enquiry.model.findById(req.params.id).exec(function(err, item) {
    
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');
    
    var data = (req.method == 'POST') ? req.body : req.query;
    
    item.getUpdateHandler(req).process(data, function(err) {
      
      if (err) return res.apiError('create error', err);
      
      res.apiResponse(
        item
      );
      
    });
    
  });
};
 
/**
 * Delete Enquiry by ID
 */
exports.remove = function(req, res) {
  Enquiry.model.findById(req.params.id).exec(function (err, item) {
    
    if (err) return res.apiError('database error', err);
    if (!item) return res.apiError('not found');
    
    item.remove(function (err) {
      if (err) return res.apiError('database error', err);
      
      return res.apiResponse({
        success: true
      });
    });
    
  });
};