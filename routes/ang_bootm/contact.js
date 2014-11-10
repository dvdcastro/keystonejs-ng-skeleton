var keystone = require('keystone'),
  Enquiry = keystone.list('Enquiry');

exports = module.exports = function(req, res) {
  
  var view = new keystone.View(req, res),
    locals = res.locals;

  locals.enquiryTypes = Enquiry.fields.enquiryType.ops;
  
  // Render the view
  view.render('ang_bootm/contact');
};
