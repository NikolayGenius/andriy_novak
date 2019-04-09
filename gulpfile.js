
const gulp          = require('gulp');
const sass          = require('gulp-sass');
const sourcemaps    = require('gulp-sourcemaps');
const watch         = require('gulp-watch');
var gulpsync        = require('gulp-sync')(gulp);

gulp.task('sass', () => {
    return gulp.src('./assets/scss/**/*.scss')
           .pipe(sourcemaps.init()) 
           .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) 
           .pipe(sourcemaps.write('./')) 
           .pipe(gulp.dest('./assets/css/')) 
})

gulp.task('watch',  function() {    
    gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));
        
})
