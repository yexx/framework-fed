const gulp = require('gulp');
const concat = require('gulp-concat')           // Merge Files
const stylus = require('gulp-stylus');          // Stylus - CSS Preprocessor
const pug = require('gulp-pug');                // Pug - HTML Preprocessor
const minify = require('gulp-minify');          // JS Minifier
const cleanCSS = require('gulp-clean-css');     // CSS Minifier
const runSequence = require('run-sequence');    // Sequencer
const watch = require('gulp-watch');            // Watcher

//Resource files input
const jsInput = 'resources/scripts/*.js';
const cssInput = 'resources/stylus/*.styl';
const htmlInput = 'resources/views/*.pug';

//NPM and plugins JS paths
var jsPluginsInput = [
  'resources/scripts/plugins/*.js',
  'node_modules/slick-carousel/slick/slick.js'
];

//App Output folder
var jsOutput = 'app/js/';
var cssOutput = 'app/css/';
var htmlOutput = 'app/';

//Watch
const jsWatch = ['resources/scripts/*.js', 'resources/scripts/plugins/*.js']
const htmlWatch = ['resources/views/*.pug','resources/views/*/*.pug'];
const cssWatch = ['resources/stylus/*.styl','resources/stylus/*/*.styl'];

// --- Junta e minifica os scripts
//Scripts do app
gulp.task('scripts-app', function() {
  return gulp.src(jsInput)
    .pipe(concat('app.js'))
    .pipe(minify({
      ext: {
        src:'-debug.js',
        min:'.js'
      },
      noSource: true
    }))
    .pipe(gulp.dest(jsOutput));
});

//Plugins terceiros
gulp.task('scripts-vendor', function() {
  return gulp.src(jsPluginsInput)
    .pipe(concat('vendor.js'))
    .pipe(minify({
      ext: {
        src:'-debug.js',
        min:'.js'
      },
      noSource: true,
      mangle: false
    }))
    .pipe(gulp.dest(jsOutput));
});

//Roda as tasks
gulp.task('scripts',['scripts-app','scripts-vendor']);

// Gera os HTMLs
gulp.task('views', function buildHTML() {
  return gulp.src(htmlInput)
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest(htmlOutput));
});


// --- * Compila os CSS
gulp.task('css-app', function(){
  return gulp.src([cssInput,'!resources/stylus/_*.styl'])
    .pipe(stylus({
      'include css': true
    })) // Converts Stylus to CSS with gulp-stylus
    .pipe(gulp.dest('app/css'))
});

//Agrupa os CSS de plugins
gulp.task('css-vendor',function(){
  return gulp.src('resources/stylus/plugins/*.css')
    .pipe(concat('vendor.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssOutput));
});

//Roda as tasks de CSS
gulp.task('css',['css-app','css-vendor']);

//Watch
gulp.task('build',['views','css','scripts']);

//Gulp Watch
gulp.task('watch',function() {

	//watch pug
	gulp.watch(htmlWatch,['views']);

	//watch styl
	gulp.watch(cssWatch,['css']);

  //watch scripts
  gulp.watch(jsInput, ['scripts']);

});

gulp.task('default', function(callback) {
  runSequence('build', 'watch');
});
