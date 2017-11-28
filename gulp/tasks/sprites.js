const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

var config = {  //it needs to an object literal
  mode: {
    css:{
      render:{
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('createSprite', function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});
