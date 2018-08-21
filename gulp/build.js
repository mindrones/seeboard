import gulp from "gulp";

gulp.task("build", gulp.parallel(
    "copy.html",
    gulp.series(
        "data.words",
        "rollup"
    )
));
