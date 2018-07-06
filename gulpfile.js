let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer')
let browserSync = require('browser-sync').create();

gulp.task('default', () => console.log("test"))

gulp.task('styles', function()  {
    gulp.src('./sass/*.scss')
        .pipe(sass({
            outputStyle: 'compact'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
})