import { describe, it, expect } from "vitest";
import { map } from "./map";

describe("map", () => {
    it("number add test", () => {
        expect(map([1, 2, 3], (num) => {
            return num + 2;
        })).toEqual([3, 4, 5]);
    })
    // Write more test as required
})