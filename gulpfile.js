"use strict";

const gulp = require("gulp");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const plumber = require("gulp-plumber");
const sourcemaps = require('gulp-sourcemaps');
const tardis = require('lbx-tardis');

function defaultTask(done) {
    // place code for your default task here
    console.log(tardis.doctorwho());
    build();
    watch();
    done();
}

function watchFiles(done) {
    gulp.watch('public/stylesheets/*.css', css);
    gulp.watch('public/javascripts/**/*.js', scripts);
    done();
}

// CSS task
function css() {
    return gulp
        .src('public/stylesheets/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat("bundle.css"))
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./public/css'));
}

// Transpile, concatenate and minify scripts
function scripts() {
    return (
        gulp
        .src('public/javascripts/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(plumber())
        .pipe(concat('script-bundled.min.js'))
        .on('error', onError)
        //.pipe(babel({  presets: ['@babel/env'] }))
        //.on('error', onError)
        .pipe(uglify())
        .on('error', onError)
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./public/js'))
    );
}

function onError(err) {
    console.log(err);
    this.emit('end');
}

const watch = gulp.parallel(watchFiles);
const js = gulp.series(scripts);
const build = gulp.series(gulp.parallel(css, js));

exports.watch = watch;
exports.build = build;
exports.js = js;
exports.default = defaultTask;