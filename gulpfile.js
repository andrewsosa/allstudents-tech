var gulp = require('gulp');
var build = 'dist';

// Compiles .pug files into .html
gulp.task('pug', () => {
    var pug = require('gulp-pug');
    gulp.src('src/views/*.pug')
		.pipe(pug().on('error', console.log))
        .pipe(gulp.dest(build));
});

// Compiles .sass into .css
gulp.task('sass', function() {
    var sass = require('gulp-sass');
    gulp.src('src/assets/sass/*.sass')
        .pipe(sass().on('error', sass.logError))
    	.pipe(gulp.dest(build + '/css/'));
});

// Copies javascript into build
gulp.task('js', function() {
    gulp.src('src/assets/js/*')
        .pipe(gulp.dest(build + '/js/'))
    gulp.src('src/*.js')
        .pipe(gulp.dest(build + '/js/'))
});

// Copies other assets
gulp.task('assets', function() {
    gulp.src('src/assets/*.css')
        .pipe(gulp.dest(build + '/css/'))
    gulp.src('src/assets/favicons/*')
        .pipe(gulp.dest(build + '/assets/favicon/'))


});

// Designated image task
gulp.task('images', function() {
    const imagemin = require('gulp-imagemin');
    gulp.src('src/assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest(build + '/img/'))
})

// Removes built files
gulp.task('clean', function() {
    var clean = require('gulp-clean');
    gulp.src(build + '/**', {read:false})
        .pipe(clean());
});

// Monitors .pug and .sass
gulp.task('watch', ['build'], function() {
    gulp.watch('src/**', ['build']);
});

// Single time build of files
gulp.task('build', ['pug', 'sass', 'js', 'assets']);
gulp.task('default', ['build']);
