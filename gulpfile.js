var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');

//Task para o sass
gulp.task('sass', function () {
    return gulp.src('sass/**/*.sass')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

//Task para o watch
gulp.task('watch', function () {
    gulp.watch('sass/**/*.sass', ['sass']);
});

//Task para o autoprefixer
gulp.task('autoprefixer', () =>
    gulp.src('css/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
);

//Task Default
gulp.task('default', ['sass', 'watch', 'autoprefixer']);



