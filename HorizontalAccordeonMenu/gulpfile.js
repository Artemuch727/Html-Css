'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('sass', function () {
  //sass
  gulp.src('./app/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));

  //fonts
  gulp.src('./app/fonts/**/*.*')
      .pipe(gulp.dest('./dist/fonts/'));

  //html
  gulp.src('./app/*.html')
      .pipe(gulp.dest('./dist/'));

  // js
  gulp.src('./app/scripts/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./dist/scripts'));

  // img
  gulp.src('./app/img/**/*.*')
      .pipe(gulp.dest('./dist/img'));
});
 
gulp.task('default', function () {
  gulp.watch(['./app/sass/*.sass','./app/fonts/**/*.*','./app/scripts/**/*.js','./app/*.html'], ['sass']);
});