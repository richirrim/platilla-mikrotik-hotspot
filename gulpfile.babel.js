import { series, parallel, dest, src, watch } from 'gulp'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import minify from 'gulp-minify'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import autoprefixer from 'gulp-autoprefixer'
import browserSync from 'browser-sync'
import babelify from 'babelify'
import source from 'vinyl-source-stream'
import buffer from 'vinyl-buffer'
import browserify from 'browserify'

const server = browserSync.create()
sass.compiler = require('node-sass')

const paths = {
  rootServer: './public',
  rootPug: './dev/pug',
  html: {
    src: './dev/pug/pages/**/*.pug',
    dest: './public/'
  },
  styles: {
    src: './dev/scss/**/*.scss',
    dest: './public/css/'
  },
  scripts: {
    srcMultipleFiles: './dev/js/**/*.js',
    srcSingleFile: './dev/js/index.js',
    dest: './public/js/'
  },
  images: {
    src: './dev/images/**/**',
    dest: './public/images/'
  }
};

const scripts = function () {
  /** Tarea para desarrollo y tambíen para producción */
  return browserify(paths.scripts.srcSingleFile)
    .transform(babelify, {
      global: true
    })
    .bundle()
    .on('error', function (err) {
      console.error(err)
      this.emit('end')
    })
    .pipe(source('script.js'))
    .pipe(buffer())
    .pipe(minify({
      ext: {
        src: '-min.js',
        min: '.js'
      }
    }))
    .pipe(dest(paths.scripts.dest))
}

const pugBuild = function () {
  /** Tarea para producción */
  return src(paths.html.src)
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
      basedir: paths.rootPug
    }))
    .pipe(dest(paths.html.dest))
}

const pugDev = function () {
   /** Tarea para desarrollo */
  return src(paths.html.src)
    .pipe(plumber())
    .pipe(pug({
      basedir: paths.rootPug
    }))
    .pipe(dest(paths.html.dest))
}

const sassBuild = function () {
  /** Tarea para producción */
  return src(paths.styles.src)
    .pipe(plumber())
    .pipe(sass({
      outputStyle: 'expanded',
      includePaths: ['./node_modules']
    }))
      .on('error', sass.logError)
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(paths.styles.dest))
}

const sassDev = function () {
  /** Tarea para desarrollo */
  return src(paths.styles.src)
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['./node_modules']
    }))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(paths.styles.dest))
}

const images = function () {
  /** Tarea para producción */
  return src(paths.images.src)
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo()
    ]))
    .pipe(dest(paths.images.dest))
}

const imagesDev = function () {
  /** Tarea para desarrollo */
  return src(paths.images.src)
    .pipe(dest(paths.images.dest))
}

function startServer () {
  server.init({
    server: { 
      baseDir: paths.rootServer 
    }
  })
}

function watchFiles () {
  watch(paths.html.src, pugDev)
  watch(paths.styles.src, sassDev)
  watch(paths.scripts.srcMultipleFiles, scripts)
  watch(paths.images.src, imagesDev)
  
  watch(paths.html.dest).on('change', server.reload)
  watch(paths.scripts.dest).on('change', server.reload)
}

exports.dev = parallel(startServer, imagesDev, watchFiles, series(sassDev, pugDev, scripts)) // tasks dev.
exports.prod = series(images, sassBuild, pugBuild, scripts) // tasks production.
