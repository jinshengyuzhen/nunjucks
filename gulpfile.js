var gulp   = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var data = require('gulp-data');

gulp.task('nunjucks', function() {
    return gulp.src('app/pages/**/*.nunjucks')
    // Adding data to Nunjucks
        .pipe(data(function() {
            return require('./app/data.json')
        }))
        .pipe(nunjucksRender({
            path: ['app']
        }))
        .pipe(gulp.dest('app/nunjucks'))
});
