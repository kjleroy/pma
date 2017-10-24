var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested'),
	cssImport = require('postcss-import'),
	browserSync = require('browser-sync').create();

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

	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**/*', function(){
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
		.pipe(browserSync.stream());
});