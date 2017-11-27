const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('watch', function(){
  browserSync.init({
    // notify:false, //i like the notification
    server: {
      baseDir: "app"
    }
  });
  watch('./app/index.html', function(){
    browserSync.reload();
  });
  watch('./app/assets/styles/**/*.css', function(){
    // gulp.start('styles');
    gulp.start('cssInject');
  })
});

//ccsInject task won't begin until the styles task is complete
gulp.task('cssInject', ['styles'], function(){
  return gulp.src('./app/temp/styles/styles.css') //remember src is an async function so be sure to use return
    .pipe(browserSync.stream());
});
