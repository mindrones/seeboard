import fs from "fs";

import gulp from "gulp";

import {DATA_PATH} from "./index";

gulp.task("data.words", done => {
    const wordsTxt = fs.readFileSync("node_modules/word-list/words.txt", "utf-8");
    const wordsJson = wordsTxt.split("\n");
    fs.writeFileSync(`${DATA_PATH}/words.json`, JSON.stringify(wordsJson, null, 2));

    done();
});
