var gulp = require('gulp');

gulp.task('sass',function(){
  return gulp.src('./dev/assets/css/index.scss')
  .pipe(sass().on('error',sass.logError))
  .pipe(gulp.dest('./dev/assets/css/'));
});

gulp.task('sass:watch',function(){
  gulp.watch('./dev/assets/css/index.scss',['sass']);
});