const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const rename = require('gulp-rename');
const del = require('del');

var config = {  //it needs to an object literal
  mode: {
    css:{
      sprite:'sprite.svg', //needed to get rid of the .css in modules/_sprite
      render:{
        css: {
          template: './gulp/templates/sprite.css'
        }
      }
    }
  }
}

gulp.task('beginClean', function(){
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite')); //this was wrong by ending with sprite/. had to take out the /
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCSS', ['copySpriteGraphic'], function () {
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function() {
  return del('./app/temp/sprite');
})

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);
