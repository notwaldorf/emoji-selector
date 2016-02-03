'use strict';

let gulp = require('gulp');
let es = require('event-stream');

gulp.task('browser_modules', ['prism', 'hydrolysis'], () =>
  es.merge(
    gulp.src('node_modules/@polymer/**'),
    gulp.src([
      'node_modules/webcomponents.js/**/*',
      'node_modules/web-animations-js/**/*',
      'node_modules/emojilib/**/*',
      // waiting on https://github.com/Polymer/hydrolysis/issues/212
      // until then use bower :(
      // 'node_modules/hydrolysis/**/*',
      'node_modules/marked/**/*',
    ], {base: 'node_modules/'})
  )
  .pipe(gulp.dest('browser_modules')));

gulp.task('prism', [`prism-copy`], () =>
  gulp.src('browser_modules/prism/lib/prism.js')
    .pipe(gulp.dest('browser_modules/prism')));

gulp.task('prism-copy', () =>
  gulp.src('node_modules/prismjs-package/**/*')
    .pipe(gulp.dest('browser_modules/prism')));

gulp.task('hydrolysis', () =>
  gulp.src('bower_components/hydrolysis/**/*')
    .pipe(gulp.dest('browser_modules/hydrolysis')));
