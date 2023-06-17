import { describe, it, expect, expectTypeOf } from "vitest";
import { map } from "../helpers/map";

describe("map", () => {
    it("number add test", () => {
        expect(map([1, 2, 3], (num) => {
            return num + 2;
        })).toEqual([3, 4, 5]);
    })

    // Write more test as required
    it("number add test", () => {
        expect(map(['1', '2', '3'], (num) => {
            return num;
        })).all("string")
    })

    it("number add not contain", () => {
        const arr = [1, 2, 3];

        expect(map(arr, (num) => {
            return num + 2;
        })).to.not.contains(null);
    })

    it("expected type of", () => {
        const arr: number[] = [];

        expectTypeOf(map(arr, (num) => {
            return num + 2;
        })).toBeArray();
    })

    it("number add test not contain NaN", () => {
        const arr = [1, 2, 3];

        expect(map(arr, (num) => {
            return num + 2;
        })).to.not.contains(NaN);
    })

    it("number add test", () => {
        const arr = [1, 2, 3];

        expect(map(arr, (num) => {
            return num + 2;
        })).to.not.contains(NaN);
    })

})