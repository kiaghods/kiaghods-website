const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

function minifyCSS() {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
}

function minifyJS() {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'));
}

function watchFiles() {
    gulp.watch('assets/css/*.css', minifyCSS);
    gulp.watch('assets/js/*.js', minifyJS);
}

const build = gulp.series(minifyCSS, minifyJS);

exports.default = build;
exports.watch = watchFiles;
exports.build = build;