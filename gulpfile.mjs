import gulp from 'gulp';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import { deleteAsync } from 'del';

const minifyCSS = () => {
    return gulp.src('assets/css/*.css')
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
};

const minifyJS = () => {
    return gulp.src('assets/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'));
};

const clean = () => {
    return deleteAsync(['assets/css/*.min.css', 'assets/js/*.min.js']);
};

const build = gulp.series(clean, gulp.parallel(minifyCSS, minifyJS));

export { minifyCSS, minifyJS, clean, build };

export default build;