const gulp = require('gulp');
const concat = require('gulp-concat')           // Merge Files
const stylus = require('gulp-stylus');          // Stylus - CSS Preprocessor
const pug = require('gulp-pug');                // Pug - HTML Preprocessor
const minify = require('gulp-minify');          // JS Minifier
const cleanCSS = require('gulp-clean-css');     // CSS Minifier
const runSequence = require('run-sequence');    // Sequencer
const watch = require('gulp-watch');            // Watcher

//Pasta com os arquivos
var jsInput = 'resources/scripts/*.js';
var cssInput = 'resources/stylus/*.styl';
var htmlInput = 'resources/views/*.pug';
var imgInput = ['resources/images/*.{jpg,png}','resources/images/**/*.{jpg,png}']

//Caminho para assistir
var htmlWatch = ['resources/views/*.pug','resources/views/*/*.pug'];
var cssWatch = ['resources/stylus/*.styl','resources/stylus/*/*.styl'];

//Pasta com os pluginsJS
var jsPluginsInput = 'resources/scripts/plugins/*.js';

//Pasta de saida
var jsOutput = 'app/js/';
var cssOutput = 'app/css/';
var htmlOutput = 'app/';

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
  return gulp.src(['resources/scripts/plugins/*.js','!resources/scripts/plugins/_*.js'])
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