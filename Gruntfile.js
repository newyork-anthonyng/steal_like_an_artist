module.exports = function(grunt) {
	grunt.initConfig({
		cssmin: {
			build: {
				files: {
					'public/04_AListApart/normalize.min.css': 'public/04_AListApart/normalize.css',
					'public/04_AListApart/skeleton.min.css': 'public/04_AListApart/skeleton.css',
					'public/04_AListApart/style.min.css': 'public/04_AListApart/style.css',
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
