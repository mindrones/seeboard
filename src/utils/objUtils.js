import _ from "lamb";

// {a:1, b:2} -> {1: "a", 2: "b"}
export const invertObj = _.pipe(
    _.tear,
    _.reverse,
    _.apply(_.make)
);
