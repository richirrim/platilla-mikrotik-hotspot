import { series, parallel, dest, src, watch } from 'gulp'
import pug from 'gulp-pug'
import sass from 'gulp-sass'
import minify from 'gulp-minify'
import babel from 'gulp-babel'
import plumber from 'gulp-plumber'
import imagemin from 'gulp-imagemin'
import autoprefixer from 'gulp-autoprefixer'
import browserSync from 'browser-sync'
import browserify from 'gulp-browserify'

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
    src: './dev/js/**/*.js',
    dest: './public/js/'
  },
  images: {
    src: './dev/images/**/**',
    dest: './public/images/'
  }
};

function babelJs () {
  return src(paths.scripts.src)
    .pipe(plumber())
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(babel({ 
        presets: ["@babel/preset-env"]
      }))
    .pipe(minify({
      ext: {
        src: '-min.js',
        min: '.js'
      }
    }))
    .pipe(dest(paths.scripts.dest))
}

function pugToHtml () {
  return src(paths.html.src)
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
        /* Agregar el "basedir" permite trabajar con rutas 
        relativas al servidor o raiz*/
        basedir: paths.rootPug
    }))
    .pipe(dest(paths.html.dest))
}

function sassToCss () {
  return src(paths.styles.src)
    .pipe(plumber())
    .pipe(sass({
      // outputStyle: 'compressed',
      outputStyle: 'expanded'
    }))
      .on('error', sass.logError)
    .pipe(autoprefixer({ cascade: false }))
    .pipe(dest(paths.styles.dest))
}

function optimizeImg () {
  return src(paths.images.src)
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo()
    ]))
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
  watch(paths.html.src, pugToHtml)
  watch(paths.styles.src, sassToCss)
  watch(paths.scripts.src, babelJs)
  watch(paths.images.src, optimizeImg)
  
  watch(paths.html.dest).on('change', server.reload)
  watch(paths.scripts.dest).on('change', server.reload)
}

exports.default = parallel(startServer, optimizeImg, series(sassToCss, pugToHtml, babelJs, watchFiles))
