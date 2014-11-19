var async = require('async'),
  keystone = require('keystone');

var enqTypes = [
  { value: 'message', label: "Just leaving a message" },
  { value: 'question', label: "I've got a question" },
  { value: 'other', label: "Something else..." }
];

/**
 * List PostCategories
 */
exports.list = function(req, res) {
  res.apiResponse(enqTypes);
};
 
/**
 * Get PostCategory by ID
 */
exports.get = function(req, res) {
  var item = null;

  for (var i = enqTypes.length - 1; i >= 0; i--) {
    if (enqTypes[i].value === req.params.value)
      item = enqTypes[i];
  }

  if (item === null) return res.apiError('item not found.');
  
  res.apiResponse(
    item
  );
};