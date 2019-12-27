/**
 * Created by zhangnanning on 2019/12/3.
 */
const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const cleanCSS = require("gulp-clean-css");
const del = require("del");
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const removeUseStrict = require('gulp-remove-use-strict');
const sass = require('gulp-sass');
const stream = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpIf = require('gulp-if');

// 根目录
const buildPath = './dist';

// 初始化配置-产品环境
gulp.task('initDev', (done) => {
    process.env.BUILD_ENV = 'dev';
    done();
});

// 初始化配置-产品环境
gulp.task('initProd', (done) => {
    process.env.BUILD_ENV = 'pro';
    done();
});

// 清理开发环境的dist目录
gulp.task("clean", () => {
    return del([buildPath], {force: true});
});

// js
gulp.task('js', function () {
    // 定义入口文件
    return browserify({
        entries: 'src/index.js',
        debug: true
    })
    .transform(babelify.configure({
        presets: ["@babel/preset-env"]
    }))
    // 转成node readabel stream流，拥有pipe方法（stream流分小片段传输）
    .bundle()
    .on('error', function (error) {
        console.log(error.toString())
    })
    // 转成gulp系的stream流，node系只有content，添加名字
    .pipe(stream('index.js'))
    // 转成二进制的流（二进制方式整体传输）
    .pipe(buffer())
    .pipe(gulpIf(process.env.BUILD_ENV === "pro", uglify()))
    // 输出
    .pipe(gulp.dest(buildPath));
});

// css
gulp.task('css', () => {
    return gulp.src("src/index.scss")
        .pipe(sass())
        .pipe(gulp.dest(buildPath));
});

// js
gulp.task('dom_js', function () {
    // 定义入口文件
    return browserify({
        entries: 'dom/index.js',
        debug: true
    })
        .transform(babelify.configure({
            presets: ["@babel/preset-env"]
        }))
        // 转成node readabel stream流，拥有pipe方法（stream流分小片段传输）
        .bundle()
        .on('error', function (error) {
            console.log(error.toString())
        })
        // 转成gulp系的stream流，node系只有content，添加名字
        .pipe(stream('index.js'))
        // 转成二进制的流（二进制方式整体传输）
        .pipe(buffer())
        .pipe(gulpIf(process.env.BUILD_ENV === "pro", uglify()))
        // 输出
        .pipe(gulp.dest(buildPath + "/dom"));
});

// 生产环境构建入口
gulp.task('dev', gulp.series(
        ['initDev', 'clean'],
        gulp.parallel(["js", "css", "dom_js"])
    )
);

// 生产环境构建入口
gulp.task('prod', gulp.series(
        ['initProd', 'clean'],
        gulp.parallel(["js", "css", "dom_js"])
    )
);
