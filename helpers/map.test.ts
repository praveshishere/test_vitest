import { describe, it, expect, expectTypeOf } from "vitest";
import { map } from "./map";

describe("map", () => {
    it("number add test", () => {
        expect(map([1, 2, 3], (num) => {
            return num + 2;
        })).toEqual([3, 4, 5]);
    })
    // Write more test as required

    it("Empty array", () => {
        expect(map([], (num) => {
            return num + 2;
        })).toEqual([]);
    })

    it("array with undefined", () => {
        expect(map([undefined], (num) => {
            return num + 2;
        })).toEqual([NaN]);
    })

    it("Object Array", () => {
        expect(map([{jj: "j"}, {jj: "hj"}], (item) => {
            return item.jj;
        })).toEqual(["jj", "hj"]);
    })

    it("Null array", () => {
        expect(map([null], (num) => {
            return num + 2;
        })).toEqual([2]);
    })

    it("Nested null array", () => {
        expect(map([[null]], (num) => {
            // @ts-nocheck
            return num + 2;
        })).toEqual(["2"]);
    })

    it("Nested null array", () => {
        expect(map([[null]], (num) => {
            // @ts-nocheck
            return num + 2;
        })).toEqual(["2"]).toArray();
    })

    it("Multiple nested array", () => {
        expect(map([[[[null]]]], (num) => {
            // @ts-nocheck
            return num + 2;
        })).toEqual(["2"]);
    })

    it("Array with undefined and null", () => {
        expect(map([undefined, null], (num) => {
            // @ts-nocheck
            return num + 2;
        })).toEqual([NaN, 2]);
    })

    it("Nested Array with undefined and null", () => {
        expect(map([[undefined], [null]], (num) => {
            // @ts-nocheck
            return num + 2;
        })).toEqual(["2", "2"] );
    })

    it("Nested Array with undefined and null", () => {
        expectTypeOf(map([[undefined], [null]], (num) => {
            // @ts-nocheck
            return num;
        })).toBeArray();
    })
})