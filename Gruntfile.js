module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			build: {
				files: {
					'public/03_ArielWenZhang/styles/style.min.css': 'public/03_ArielWenZhang/styles/style.css',
					'public/03_ArielWenZhang/styles/reset.min.css': 'public/03_ArielWenZhang/styles/reset.css',
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
