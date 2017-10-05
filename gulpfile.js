/*!
 * gulp
 * Dependencies
 * - You need node installed if you don't already have it - https://nodejs.org/en/
 * - Open Terminal
 * - Run command 'npm install --global gulp'
 *
 */

// // Config
// 	var config = {
// 		url: 'bhargavgandhi.com',
// 		tinypngKey: process.env.TINYPNG_KEY,
// 		autoprefixer: ['last 2 versions', 'IE 9']
// 	},
//
// 	// Dependencies
// 	browserSync = require('browser-sync'),
// 	gulp = require('gulp'),
// 	del = require('del'),
// 	path = require('path'),
// 	summary = require('engage-eslint-summary'),
// 	plugins = require('gulp-load-plugins')(),
//
// 	// Paths
// 	base = {
// 		src: 'src',
// 		public: 'public'
// 	},
// 	assets = base.public + '/assets',
// 	paths = {
// 		styles: {
// 			src: base.src + '/scss/**/*.scss',
// 			dest: assets + '/css'
// 		},
// 		scripts: {
// 			dir: base.src + '/js',
// 			src: base.src + '/js/**/*.js',
// 			dest: assets + '/js'
// 		},
// 		images: {
// 			dir: base.src + '/img',
// 			src: base.src + '/img/**/*',
// 			dest: assets + '/img',
// 			icon: base.src + '/img/meta/favicon-152.png'
// 		},
// 		svgIcons: {
// 			src: base.src + '/img/svg-icons/**/*',
// 			dest: assets + '/img/svg-icons'
// 		},
// 		static: {
// 			src: base.src + '/static/**/*',
// 			dest: assets + '/static'
// 		}
// 	};
//
//
// // Clean
//
// gulp.task('clean', function(cb) {
// 	return del(assets, cb);
// });
//
//
// // Styles
//
// gulp.task('styles', function() {
// 	return gulp
// 		.src(paths.styles.src)
// 		.pipe(plugins.changed(paths.styles.dest))
// 		.pipe(plugins.sourcemaps.init())
// 		.pipe(
// 			plugins.sass({
// 				errLogToConsole: true,
// 				outputStyle: 'compressed'
// 			})
// 				.on('error', plugins.notify.onError({
// 					title: 'Sass Error',
// 					subtitle: '<%= error.relativePath %>:<%= error.line %>',
// 					message: '<%= error.messageOriginal %>',
// 					open: 'file://<%= error.file %>',
// 					onLast: true,
// 					icon: paths.images.icon
// 				}))
// 		)
// 		.pipe(plugins.cleanCss({ restructuring: false }))
// 		.pipe(plugins.autoprefixer({ browsers: config.autoprefixer, cascade: false }))
// 		.pipe(plugins.sourcemaps.write('.'))
// 		.pipe(gulp.dest(paths.styles.dest));
// });
//
//
// // JS
//
// gulp.task('scripts.lint', function() {
// 	return gulp
// 		.src(paths.scripts.dir + '/site/**/*.js')
// 		.pipe(plugins.eslint())
// 		.pipe(plugins.eslint.format(summary))
// 		.pipe(
// 			plugins.eslint.failOnError()
// 				.on('error', plugins.notify.onError({
// 					title: 'JavaScript Error',
// 					subtitle: '<%= options.relative(options.cwd, error.fileName) %>:<%= error.lineNumber %>',
// 					message: '<%= error.message %>',
// 					open: 'file://<%= error.fileName %>',
// 					templateOptions: {
// 						relative: path.relative,
// 						cwd: process.cwd()
// 					},
// 					icon: paths.images.icon
// 				}))
// 		)
// 		.pipe(plugins.eslint.failAfterError());
// });
//
// gulp.task('scripts.lint.full', function() {
// 	return gulp
// 		.src(paths.scripts.dir + '/site/**/*.js')
// 		.pipe(plugins.eslint())
// 		.pipe(plugins.eslint.format())
// 		.pipe(plugins.eslint.failAfterError());
// });
//
// gulp.task('scripts.site', function() {
// 	return gulp
// 		.src([
// 			paths.scripts.dir + '/site/global.js',
// 			paths.scripts.dir + '/site/modules/*.js',
// 			paths.scripts.dir + '/site/pages/*.js'
// 		])
// 		.pipe(plugins.sourcemaps.init())
// 		.pipe(plugins.concat('site.js'))
// 		.pipe(plugins.changed(paths.scripts.dest))
// 		.pipe(plugins.uglify())
// 		.pipe(plugins.sourcemaps.write('.'))
// 		.pipe(gulp.dest(paths.scripts.dest));
// });
//
// gulp.task('scripts.plugins', function() {
// 	return gulp
// 		.src([
// 			paths.scripts.dir + '/plugins/*.js',
// 			paths.scripts.dir + '/plugins/jquery/*.js'
// 		])
// 		.pipe(plugins.sourcemaps.init())
// 		.pipe(plugins.concat('plugins.js'))
// 		.pipe(plugins.changed(paths.scripts.dest))
// 		.pipe(plugins.uglify())
// 		.pipe(plugins.sourcemaps.write('.'))
// 		.pipe(gulp.dest(paths.scripts.dest));
// });
//
// gulp.task('scripts.libs', function() {
// 	return gulp
// 		.src(paths.scripts.dir + '/libs/*.js')
// 		.pipe(plugins.sourcemaps.init())
// 		.pipe(plugins.concat('libs.js'))
// 		.pipe(plugins.changed(paths.scripts.dest))
// 		.pipe(plugins.uglify())
// 		.pipe(plugins.sourcemaps.write('.'))
// 		.pipe(gulp.dest(paths.scripts.dest));
// });
//
// gulp.task('scripts', ['scripts.lint'], function() {
// 	gulp.start('scripts.site', 'scripts.plugins', 'scripts.libs');
// });
//
//
// // Images
//
// gulp.task('images', function() {
// 	var optimised = plugins.filter('**/*.{jpg,png}', { restore: true }),
// 		svgs = plugins.filter('**/*.svg', { restore: true });
//
// 	return gulp
// 		.src(paths.images.src)
// 		.pipe(optimised)
// 		.pipe(plugins.tinypngCompress({
// 			key: config.tinypngKey,
// 			sigFile: paths.images.dir + '/.tinypng',
// 			summarise: true
// 		}))
// 		.pipe(optimised.restore)
// 		.pipe(svgs)
// 		.pipe(plugins.svgmin({
// 			plugins: [
// 				{
// 					removeDoctype: true
// 				}
// 			]
// 		}))
// 		.pipe(svgs.restore)
// 		.pipe(gulp.dest(paths.images.dest));
// });
//
//
// // SVG icon sprite
//
// gulp.task('svg-icon-sprite', function() {
// 	return gulp
// 		.src(paths.svgIcons.src)
// 		.pipe(plugins.svgSprite({
// 			mode: {
// 				symbol: {
// 					dest: '',
// 					sprite: 'sprite.svg'
// 				}
// 			},
// 			svg: {
// 				xmlDeclaration: false,
// 				doctypeDeclaration: false
// 			}
// 		}))
// 		.pipe(gulp.dest(paths.svgIcons.dest));
// });
//
//
// // Static
//
// gulp.task('static', function() {
// 	return gulp
// 		.src(paths.static.src)
// 		.pipe(gulp.dest(paths.static.dest));
// });
//
//
// // Watch
//
// gulp.task('watch', function() {
// 	browserSync.init({
// 		ghostMode: { scroll: false },
// 		notify: false,
// 		open: false,
// 		proxy: config.url,
// 		port: 5757,
// 		files: [
// 			paths.styles.dest + '/**/*.css',
// 			paths.scripts.dest + '/**/*.js',
// 			paths.images.dest,
// 			base.public + '/**/*.{html,php}'
// 		]
// 	});
//
// 	gulp.watch(paths.styles.src, ['styles']);
// 	gulp.watch(paths.scripts.src, ['scripts']);
// 	gulp.watch(paths.images.src, ['images']);
// 	gulp.watch(paths.svgIcons.src, ['svg-icon-sprite']);
// 	gulp.watch(paths.static.src, ['static']);
// });
//
// gulp.task('default', [], function() {
// 	gulp.start('styles', 'scripts', 'images', 'svg-icon-sprite', 'static');
// });

//////////////////////
///Required  Tasks
//////////////////////

    var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    eslint = require('gulp-eslint');

    var browserSync = require('browser-sync').create();
    var reload = browserSync.reload;



//////////////////////

///Scripts  Tasks

//////////////////////
  gulp.task('scripts', function () {
    return gulp.src(['src/assets/js/*.js', '!src/assets/js/*.min.js', '!src/assets/js/vendor/*.js', '!src/assets/js/vendor/*.min.js'])
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('src/assets/js'))
    .on('error', function(e){
      console.log(e);
    });
  });



//////////////////////

  ///Sass  Tasks

//////////////////////


gulp.task('sass', function () {

  gulp.src('src/assets/scss/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(sourcemaps.write("./"))
  .pipe(gulp.dest('src/assets/css'))
  .on('error', function(e){
    console.log(e);
  })
  .pipe(reload({stream:true}));
});


//////////////////////

///  BrowserSync
///   Tasks

//////////////////////

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
});

//////////////////////

///  HTML  Tasks

//////////////////////


gulp.task('html', function() {
	gulp.src('src/**/*.html')
	.pipe(reload({stream:true}));
});


//////////////////////

///  ESLint Tasks

//////////////////////

gulp.task('lint', function () {
  return gulp.src(['src/assets/js/**/*.js','!node_modules/**', '!src/assets/js/**/*.min.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

//////////////////////

///  Build Tasks

//////////////////////


gulp.task('build:cleanfolder', function(cb){
    del([
        'build/**'
    ], cb);
});


gulp.task('build:copy',function(){
    return gulp.src('src/**/*/')
    .pipe(gulp.dest('build/'));
});


gulp.task('build:remove',['build:copy'], function(cb){
    del([
        'build/assets/scss/',
        'build/assets/css/!(*.css)',
        'build/assets/js/vendor/!(*.min.js)',
        'build/assets/js/!(vendor/*.min.js, *.min.js)'
    ], cb);
});

gulp.task('build', ['build:copy', 'build:remove']);



//////////////////////

///   Watch Tasks

//////////////////////


gulp.task('watch', function(){

  gulp.watch('src/assets/js/*.js', ['scripts']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);

});

//////////////////////

///Default  Tasks

//////////////////////

gulp.task('default', ['sass', 'browser-sync', 'html', 'lint', 'watch']);
