const gulp = require('gulp')
const stylus = require('gulp-stylus')
const path = require('path')
const connect = require('gulp-connect')

gulp.task('connect',()=>{
	connect.server({
		livereload: true
	})
})

gulp.task('html',()=>{
	gulp.src(path.join(__dirname,'index.html'))
	.pipe(connect.reload())
})

gulp.task('stylus',()=>{
	gulp.src(path.join(__dirname,'src/flex.styl'))
	.pipe(stylus())
	.pipe(gulp.dest(path.join(__dirname,'build/css')))
	.pipe(connect.reload())
})

gulp.task('watch',()=>{
	gulp.watch(path.join(__dirname,'src/flex.styl'),['stylus'])
	gulp.watch(path.join(__dirname,'index.html'),['html'])
})

gulp.task('default',['watch','html','stylus','connect'])