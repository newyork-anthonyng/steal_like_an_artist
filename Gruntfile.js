module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			build: {
				files: {
					'public/03_ArielWenZhang/styles/style.min.css': 'public/03_ArielWenZhang/styles/style.css',
					'public/03_ArielWenZhang/styles/reset.min.css': 'public/03_ArielWenZhang/styles/reset.css',
				}
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			my_target: {
				files: {
					'public/03_ArielWenZhang/app/app.min.js': ['public/03_ArielWenZhang/app/utility.js', 'public/03_ArielWenZhang/app/domApp.js'],
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
};
