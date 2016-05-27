module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			build: {
				files: {
					'public/02_GarberCo/style.min.css': 'public/02_GarberCo/style.css',
					'public/02_GarberCo/reset.min.css': 'public/02_GarberCo/reset.css',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
