// gulp
var gulp = require('gulp');

// plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
// tasks

// lint
gulp.task('lint', function() {
	return gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(reload({stream: true}));
});

// sass
gulp.task('sass', function() {
	return gulp.src('scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'))
		.pipe(reload({stream: true}));
});

// watchers
gulp.task('watch', function() {
	gulp.watch('js/*.js', ['lint']);
	gulp.watch('scss/*.scss', ['sass']);
	gulp.watch('*.html').on('change', reload);
});

// browser sync
gulp.task('serve', function() {
	browserSync({
		server: "./"
	});

	
});


gulp.task('default', ['lint', 'sass', 'watch', 'serve']);