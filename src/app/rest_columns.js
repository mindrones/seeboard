import _ from "lamb";

import WORDS from "../../data/words.json";
import keyToChar from "./components/Keyboardio/keyToChar.json";

import {invertObj} from "@utils/objUtils";

const charToKey = invertObj(keyToChar);
const getInCharToKey = _.partial(_.getIn, [charToKey, _]);

// number -> bool (n < 1 | n > 4)
const notInLeftRestCols = _.anyOf(_.isLT(1), _.isGT(4));
const notInRightRestCols = _.anyOf(_.isLT(2), _.isGT(5));

// char -> boolean
const charIsNotInRestColumn = _.pipe(
    getInCharToKey,
    _.condition(
        _.pipe(_.getAt(0), _.is("L")),
        _.pipe(_.getAt(1), Number, notInLeftRestCols),
        _.pipe(_.getAt(1), Number, notInRightRestCols)
    )
);

// word -> boolean
const isWordInRestColumns = _.pipe(
    _.findWhere(charIsNotInRestColumn),
    _.isUndefined
);

export const wordsInRestColumns = _.filter(WORDS, isWordInRestColumns);
