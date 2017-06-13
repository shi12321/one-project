//引入gulp模块
//nodejs的模块：commonJS(同步)
var gulp = require('gulp');

// 编译sass=>css
var sass = require('gulp-sass');

// 利用gulp模块创建任务
// 编译sass
gulp.task('compileSass',function(){
	// 1）找到list.scsss
	// gulp.src(['./src/sass/list.scss','./src/sass/goods.scss'])

	// 匹配所有sass文件
	// 如果不想编译的sass文件名前添加_
	gulp.src('./src/sass/*.scss')

	// 2）编译sass
	.pipe(sass({outputStyle:'compact'}))

	// 3）输出文件
	.pipe(gulp.dest('./src/css'))
});

// 自动编译
// watch
gulp.task('jtSass',function(){
	// 监听文件修改，执行相应任务
	gulp.watch('./src/sass/*.scss',['compileSass']);
});
