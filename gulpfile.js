var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('default', ['js-linting-compiling', 'watchjs']);

gulp.task('js-linting-compiling', function() {
	return gulp.src('script/lib/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('watchjs', function(){
	gulp.watch('script/lib/**', function(){
		gulp.run('js-linting-compiling');
	});
});