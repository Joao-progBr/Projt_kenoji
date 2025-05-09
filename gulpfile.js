// const gulp = require('gulp')
// const cleanCss = require('gulp-clean-css')
// const less = require('gulp-less')
// const rename = require('gulp-rename')
// const replace = require('gulp-replace')
// const imagemin = require('gulp-imagemin')

import gulp from 'gulp';
import cleanCss from 'gulp-clean-css';
import less from 'gulp-less';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import imagemin from 'gulp-imagemin';
// import uglify from 'gulp-uglify'
import terser from 'gulp-terser'

import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import gifsicle from 'imagemin-gifsicle';
import svgo from 'imagemin-svgo';



function styles(){
  return gulp.src('./src/styles/*less')
  .pipe(less())
  .pipe(cleanCss())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('./dist/styles'))
}

function html(){
  return gulp.src('./src/index.html')
  .pipe(replace(`./styles/style.less`, './styles/style.min.css'))
  .pipe(gulp.dest('./dist'))
}

function script(){
  return gulp.src('./src/scripts/*.js')
  .pipe(terser())
  .pipe(gulp.dest('./dist/scripts'))

}


// function images(){
//     return gulp.src('./src/images/**/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('./dist/images'))
// }

export function images() {
  return gulp.src('./src/images/**/*')
    .pipe(imagemin([
        gifsicle({ interlaced: true }),
        mozjpeg({ quality: 75, progressive: true }),
        pngquant({ quality: [0.6, 0.8] }),
        svgo()
    ]))
    .pipe(gulp.dest('./dist/images'));
}

export const build = gulp.parallel(styles, html, images, script)
export const watch = function(){
    gulp.watch('./src/styles/*.less', gulp.parallel(styles))
    gulp.watch('./src/index.html', gulp.parallel(html))
    gulp.watch('./src/images/**/*', gulp.parallel(images));
    gulp.watch('./src/scripts/*.js', gulp.parallel(script));
}

export default build;



