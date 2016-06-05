const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

gulp.task('default', ['sass', 'watch']);
gulp.task('dev', ['sass']);

const dir = {
  src: {
    scss: "./src/scss/**/*.scss"
  },
  dist: {
    scss: "./dist/css"
  }
}

gulp.task('sass', function(done){
  gulp.src(dir.src.scss)
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(clean())
  .pipe(gulp.dest(dir.dist.scss))
  .on('end', done)
});

gulp.task('watch', function(){
  gulp.watch(dir.src.scss, ['sass'])
})
