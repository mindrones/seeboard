import path from "path";

import gulp from "gulp";
import {rollup} from 'rollup';
import alias from "rollup-plugin-alias";
import json from "rollup-plugin-json";
import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import buble from "rollup-plugin-buble";
import {terser} from "rollup-plugin-terser";

import pkg from "../package.json";

import {makeResolveAliases} from "../src/utils/buildUtils";

import {SRC_PATH, BUILD_PATH} from "./index";
import options from "./options";

const isProductionBuild = options.production;
const resolveAliases = makeResolveAliases(path.resolve(__dirname, "../"));

const bundleOpts = {
    input: "src/app/main.js",
    plugins: [
        alias(resolveAliases({
            "@utils": "src/utils",
            "@data": "data"
        })),
        resolve(),
        commonjs(),
        json(),
        svelte({
            skipIntroByDefault: true,
            nestedTransitions: true,
            dev: !isProductionBuild,

            // bundle all components CSS into a single file
            css: css => {
                css.write(`${BUILD_PATH}/bundle.css`, !isProductionBuild);
            }
        }),

        isProductionBuild && buble(),
        isProductionBuild && terser()
    ],
    cache: true
};

const outputOpts = {
    file: "build/bundle.js",
    format: "iife",
    name: pkg.name,
    sourcemap: !isProductionBuild,
};

gulp.task("rollup", async function (done) {
    const bundle = await rollup(bundleOpts);
    await bundle.write(outputOpts);

    done();
});

gulp.task("watch.src", done => {
    gulp.watch(SRC_PATH, gulp.task("rollup"));

    done();
});
