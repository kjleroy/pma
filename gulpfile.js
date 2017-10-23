var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import');

gulp.task('default', function(){
	console.log('hooray this is a gulp task')
});

gulp.task('html', function(){
	console.log('something happening to html here')
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){
	watch('./app/index.html', function(){
		gulp.start('html')
	});

	watch('./app/assets/styles/**/*', function(){
		gulp.start('styles')
	});
});