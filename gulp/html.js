import gulp from "gulp";

import {BUILD_PATH} from "./index";

const INDEX_HTML_PATH = "src/app/index.html";

gulp.task("copy.html", done => {
    gulp.src(INDEX_HTML_PATH)
    .pipe(gulp.dest(BUILD_PATH));

    done();
});

gulp.task("watch.html", done => {
    gulp.watch(INDEX_HTML_PATH, gulp.task("copy.html"));

    done();
});
