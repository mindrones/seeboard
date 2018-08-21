import gulp from "gulp";
import ghPages from "gh-pages";

import options from "./options";

gulp.task("publish", done => {
    let opts = {
        clone: ".gh-pages",
        push: options.push
    };

    if (options.m) {
        opts.message = options.m
    };

    ghPages.publish("build", opts, done);
});

gulp.task("deploy", gulp.series(
    "build",
    "publish"
));
