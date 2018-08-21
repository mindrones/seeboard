import gulp from "gulp";
import BrowserSync from "browser-sync";

import pkg from "../package.json";

const browserSync = BrowserSync.create();

gulp.task("serve", done => {
    browserSync.init({
        server: {
            baseDir: "./build",
        },
        port: 3000,
        open: false,
        reloadOnRestart: true,
        notify: false,
        ghostMode: false,

        // watch & inject
        watch: true,
        files: [
            "build/bundle.css",
            "build/bundle.js",
            "build/index.html",
        ],
        ignore: [
            "build/bundle.css.map",
            "build/bundle.js.map",
        ],

        logPrefix: `${pkg.name}`
    });

    done();
});
