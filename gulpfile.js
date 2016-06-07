const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');

gulp.task('default', ['sass', 'html', 'watch']);
gulp.task('dev', ['sass', 'html']);

const dir = {
  src: {
    scss: "./src/scss/**/*.scss",
    html: "./src/html/**/*.html"
  },
  dist: {
    scss: "./public/css",
    html: "./public/"
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

gulp.task('html', function(){
  return gulp.src(dir.src.html)
  .pipe(gulp.dest(dir.dist.html))
})


gulp.task('watch', function(){
  gulp.watch(dir.src.scss, ['sass'])
  gulp.watch(dir.src.html, ['html'])
  gulp.watch(dir.src.images, ['images'])
})
