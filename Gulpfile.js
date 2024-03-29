'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const del = require('del');

gulp.task('styles', () => {
    return gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('clean', () => {
    return del([
        'css/style.css',
    ]);
});
gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', (done) => {
        gulp.series(['clean', 'styles'])(done);
    });
});

gulp.task('default', gulp.series(['clean', 'styles']));