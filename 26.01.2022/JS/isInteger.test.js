
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


