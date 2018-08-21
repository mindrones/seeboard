import {invertObj} from "./objUtils";

/* invertObj */

const obj1 = {
    a: 1,
    b: 2
};

const inv1 = {
    "1": "a",
    "2": "b"
};

test('inverts a object with strings as values', () => {
    expect(invertObj(obj1)).toEqual(inv1);
});

const obj2 = {
    a: true,
    b: false,
    c: true
};

const inv2 = {
    "false": "b",
    "true": "c"
};

test('can invert a object with bool as values with loss', () => {
    expect(invertObj(obj2)).toEqual(inv2);
});
