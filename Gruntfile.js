'use strict()';

var config= {
	port: 3000
};

module.exports = function(grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		express: {
			options: {
				port: config.port
			},
			dev: {
				options: {
					script: 'keystone.js',
					debug: true
				}
			}
		},

		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				force: true
			},
			all: [ 'routes/**/*.js',
						 'models/**/*.js'
			],
			server: [
				'./keystone.js'
			]
		},

		concurrent: {
			dev: {
				tasks: ['nodemon', 'node-inspector', 'watch'],
				options: {
					logConcurrentOutput: true
				}
			}
		},

		'node-inspector': {
			custom: {
				options: {
					'web-host': 'localhost'
				}
			}
		},

		nodemon: {
			debug: {
				script: 'keystone.js',
				options: {
					nodeArgs: ['--debug'],
					env: {
						port: config.port
					}
				}
			}
		},

		watch: {
			js: {
				files: [
					'model/**/*.js',
					'routes/**/*.js'
				],
				tasks: ['jshint:all']
			},
			express: {
				files: [
					'keystone.js',
					'public/js/lib/**/*.{js,json}'
				],
				tasks: ['jshint:server', 'concurrent:dev']
			},
			livereload: {
				files: [
					'public/styles/**/*.css',
					'public/styles/**/*.less',
					'templates/**/*.jade',
					'node_modules/keystone/templates/**/*.jade'
				],
				options: {
					livereload: true
				}
			}
		},

		jade: {
			mobicompi: {
		    options: {
		    	pretty: true,
		      data: {
		        debug: false
		      }
		    },
		    files: {
		      "mobile/www/index.html": ["templates/views/ang_bootm/app.jade"],
		      "mobile/www/ang_bootm/blog.html": ["templates/views/ang_bootm/blog.jade"],
		      "mobile/www/ang_bootm/contact.html": ["templates/views/ang_bootm/contact.jade"],
		      "mobile/www/ang_bootm/gallery.html": ["templates/views/ang_bootm/gallery.jade"],
		      "mobile/www/ang_bootm/post.html": ["templates/views/ang_bootm/post.jade"],
		    }
		  }
		},

		copy: {
			mobicopy: {
				files: [
					{expand: true, cwd: 'public/js/ang_bootm/', src: ['**'], dest: 'mobile/www/js/ang_bootm/'},
					{expand: true, cwd: 'public/js/lib/', src: ['**'], dest: 'mobile/www/js/lib/'},
					{expand: true, cwd: 'public/styles/', src: ['**'], dest: 'mobile/www/styles/'},
					{expand: true, cwd: 'public/fonts/', src: ['**'], dest: 'mobile/www/fonts/'},
					{expand: true, cwd: 'public/images/', src: ['**'], dest: 'mobile/www/images/'},
				]
			}
		},

		clean: {
			mobiclean: [
				'mobile/www/index.html',
				'mobile/www/js/ang_bootm',
				'mobile/www/js/lib',
				'mobile/www/styles',
				'mobile/www/fonts',
				'mobile/www/images'
			]
		}
	});

	// load jshint
	grunt.registerTask('lint', function(target) {
		grunt.task.run([
			'jshint'
		]);
	});

	// default option to connect server
	grunt.registerTask('serve', function(target) {
		grunt.task.run([
			'jshint',
			'concurrent:dev'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve:' + target]);
	});

	grunt.registerTask('mobilegen', function () {
		grunt.task.run([
			'clean:mobiclean',
			'jade:mobicompi',
			'copy:mobicopy'
		]);
	});

};
