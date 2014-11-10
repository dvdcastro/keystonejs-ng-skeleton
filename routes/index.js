/**
 * This file is where you define your application routes and controllers.
 * 
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 * 
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 * 
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 * 
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 * 
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var _ = require('underscore'),
	keystone = require('keystone'),
	middleware = require('./middleware'),
	importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
	api: importRoutes('./api'),
	ang_mat: importRoutes('./ang_mat'),
	ang_bootm: importRoutes('./ang_bootm')
};

// Setup Route Bindings
exports = module.exports = function(app) {
	
	// Views
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.all('/contact', routes.views.contact);
	
	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

	app.get('/api/post/list', keystone.initAPI, routes.api.posts.list);
	app.all('/api/post/create', keystone.initAPI, routes.api.posts.create);
	app.get('/api/post/:slug', keystone.initAPI, routes.api.posts.get);
	app.all('/api/post/:id/update', keystone.initAPI, routes.api.posts.update);
	app.get('/api/post/:id/remove', keystone.initAPI, routes.api.posts.remove);

	app.get('/api/post-category/list', keystone.initAPI, routes.api.post_categories.list);
	app.get('/api/post-category/:key', keystone.initAPI, routes.api.post_categories.get);

	app.get('/api/post-by-category/:key', keystone.initAPI, routes.api.post_by_category.list);

	app.get('/api/gallery/list', keystone.initAPI, routes.api.galleries.list);
	app.get('/api/gallery/:key', keystone.initAPI, routes.api.galleries.get);

	app.get('/api/enquiry/list', keystone.initAPI, routes.api.enquiries.list);
	app.all('/api/enquiry/create', keystone.initAPI, routes.api.enquiries.create);
	app.all('/api/enquiry/:id/update', keystone.initAPI, routes.api.enquiries.update);
	app.get('/api/enquiry/:id/remove', keystone.initAPI, routes.api.enquiries.remove);
	
	// App Routes for Angular Material Project
	app.get('/ang-mat', routes.ang_mat.app);
	app.get('/ang-mat/blog', routes.ang_mat.blog);
	app.get('/ang-mat/post', routes.ang_mat.post);
	app.get('/ang-mat/gallery', routes.ang_mat.gallery);
	app.get('/ang-mat/contact', routes.ang_mat.contact);

	// App Routes for Angular Bootstrap Material Project
	app.get('/ang-bootm', routes.ang_bootm.app);
	app.get('/ang-bootm/blog', routes.ang_bootm.blog);
	app.get('/ang-bootm/post', routes.ang_bootm.post);
	app.get('/ang-bootm/gallery', routes.ang_bootm.gallery);
	app.get('/ang-bootm/contact', routes.ang_bootm.contact);
	
};
