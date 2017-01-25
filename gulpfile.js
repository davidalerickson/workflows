var gulp = require('gulp'),
    gutil = require('gulp-util'),
    coffee = require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];//array so that you can add multiple coffescript files

gulp.task('coffee', function(){
  gulp.src(coffeeSources)
    .pipe(coffee({bare: true})
    .on('error', gutil.log)
    )
    .pipe(gulp.dest('components/scripts'))
});
