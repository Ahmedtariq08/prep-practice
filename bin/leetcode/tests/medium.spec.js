"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _6_zigzag_conversion_1 = require("../medium/6-zigzag-conversion");
const _3159_occurences_of_element_1 = require("../medium/3159-occurences-of-element");
(0, globals_1.describe)("Zig Zag conversion", () => {
    (0, globals_1.test)("PAYPALISHIRING - 3", () => {
        const result = (0, _6_zigzag_conversion_1.convert)("PAYPALISHIRING", 3);
        (0, globals_1.expect)(result).toEqual("PAHNAPLSIIGYIR");
    });
    (0, globals_1.test)("PAYPALISHIRING - 4", () => {
        const result = (0, _6_zigzag_conversion_1.convert)("PAYPALISHIRING", 4);
        (0, globals_1.expect)(result).toEqual("PINALSIGYAHRPI");
    });
    (0, globals_1.test)("A - 1", () => {
        const result = (0, _6_zigzag_conversion_1.convert)("A", 1);
        (0, globals_1.expect)(result).toEqual("A");
    });
});
(0, globals_1.describe)("Occurence of elements in array", () => {
    (0, globals_1.test)("Ex 1", () => {
        const result = (0, _3159_occurences_of_element_1.occurrencesOfElement)([1, 3, 1, 7], [1, 3, 2, 4], 1);
        (0, globals_1.expect)(result).toEqual([0, -1, 2, -1]);
    });
});
//# sourceMappingURL=medium.spec.js.map