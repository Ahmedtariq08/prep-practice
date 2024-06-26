import { describe, test, expect } from "@jest/globals";
import { convert } from "../medium/6-zigzag-conversion";
import { occurrencesOfElement } from "../medium/3159-occurences-of-element";

describe("Zig Zag conversion", () => {
    test("PAYPALISHIRING - 3", () => {
        const result = convert("PAYPALISHIRING", 3);
        expect(result).toEqual("PAHNAPLSIIGYIR");
    });
    test("PAYPALISHIRING - 4", () => {
        const result = convert("PAYPALISHIRING", 4);
        expect(result).toEqual("PINALSIGYAHRPI");
    });
    test("A - 1", () => {
        const result = convert("A", 1);
        expect(result).toEqual("A");
    });
});

describe("Occurence of elements in array", () => {
    test("Ex 1", () => {
        const result = occurrencesOfElement([1, 3, 1, 7], [1, 3, 2, 4], 1);
        expect(result).toEqual([0, -1, 2, -1]);
    });
});
