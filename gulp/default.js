import gulp from "gulp";

gulp.task("default", gulp.series(
    "build",
    "serve",
    gulp.parallel(
        "watch.html",
        "watch.src"
    )
));
