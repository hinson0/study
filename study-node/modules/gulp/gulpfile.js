'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('task1', function () {
  console.log('task1...');
});

gulp.task('task2', function () {
  console.log('task2...');
});

gulp.task('stuq', function () {
  console.log('stuq...');
});

gulp.task('uglify', function () {
  gulp.src('client/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build'));
});

gulp.task('mytask', ['stuq', 'task1', 'task2'], function() {
  console.log('my task...');
});

gulp.watch('client/**/*.js', ['reload']);
