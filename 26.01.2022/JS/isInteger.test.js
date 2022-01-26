
// faila nosaukumam jabut *.spec.js vai *.test.js
// isInteger.spec.js
test("Sanity check, just text", () => {});
test("Sanity check with function", () => {expect(true).toBe(true);
});

const isInteger = require("./isInteger");

test("isInteger passes for integer value", () => {
    expect(isInteger(1)).toBe(true);
});


test("isInteger fails for non-integer numeric value", () => {
    expect(isInteger(1.23)).toBe(false);
});


test("isInteger fails for non-integer symbol value", () => {
    expect(isInteger('a')).toBe(false);
});


const integerNumbers = [-1, 0, 1];
test.each(integerNumbers)(
    "isInteger passes for integer value %j from array (only true  is waited for)",
    (fixture) => expect(isInteger(fixture)).toBe(true)
);

const Numbers = [
  [-1, true],
  [0, true],
  [1.23, false]
];

test.each(Numbers)(
    "isInteger passes for numeric value %j from array with result %j",
    (fixture, result) => expect(isInteger(fixture)).toBe(result)
);


