import _ from "lamb";

// array -> string

export const join = _.generic(Array.prototype.join);
export const joinWith = string => _.partial(join, [_, string]);

export const joinWithEmpty = joinWith("");
