const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sharp = require('sharp');
const through2 = require('through2');

// CSS minification task
function minifyCSS() {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
}

// JS minification task
function minifyJS() {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'));
}

// Image optimization task
function optimizeImages() {
    return gulp.src('assets/media/**/*')
        .pipe(through2.obj(function (file, _, cb) {
            if (file.isBuffer()) {
                const validFormats = ['jpeg', 'png', 'webp', 'gif', 'svg'];
                const format = sharp(file.contents).metadata().then(metadata => metadata.format);

                if (validFormats.includes(format)) {
                    sharp(file.contents)
                        .toBuffer()
                        .then(data => {
                            file.contents = data;
                            cb(null, file);
                        })
                        .catch(err => cb(err));
                } else {
                    cb(null, file);
                }
            } else {
                cb(null, file);
            }
        }))
        .pipe(gulp.dest('assets/media'));
}

// Watch files for changes
function watchFiles() {
    gulp.watch('assets/css/*.css', minifyCSS);
    gulp.watch('assets/js/*.js', minifyJS);
    gulp.watch('assets/media/**/*', optimizeImages);
}

// Build task
const build = gulp.series(minifyCSS, minifyJS, optimizeImages);

exports.minifyCSS = minifyCSS;
exports.minifyJS = minifyJS;
exports.optimizeImages = optimizeImages;
exports.watch = watchFiles;
exports.default = build;
exports.build = build;
