import { describe, it, expect } from "vitest";
import { search } from "../helpers/binary_search";

describe("binary _search", () => {
    it("test when element exist", () => {
        expect(search([1, 2, 3], 2)).toBe(1);
    })
    // Write more test as required
    it("first_test_case", () => {
        expect(search([-1, 0, 2, 5], -2)).toBe(-1);
    })
    it("second_test_case", () => {
        expect(search([-4, -2, -1, 0], 0)).toBe(1);
    })
    it("third_test_case", () => {
        expect(search([-1, 1, 3, 5], null)).toBe(-1);
    })
    it("fourth_test_case", () => {
        expect(search([-5, -3, -2, -1], -2)).toBe(1);
    })
    it("fifth_test_case", () => {
        expect(search([-5, -3, -2, -1,], 2)).toBe(-1);
    })
    it("sixth_test_case", () => {
        expect(search([0, 0, 0, 0], 0)).toBe(1);
    })
    it("seventh_test_case", () => {
        expect(search([-1, 2, 3, 5], undefined)).toBe(-1);
    })
    it("eighth_first_test_case", () => {
        expect(search([-1, 2, 3, 5], "sandy")).toBe(-1);
    })
    it("ninth_test_case", () => {
        expect(search([-1, 2, 3, 5], -2)).toBe(-1);
    })
    it("tenth_test_case", () => {
        expect(search(["sandy", "kumar"], "")).toBe(-1);
    })
    it("eleventh_test_case", () => {
        expect(search(["sandy", "kumar"], null)).toBe(-1);
    })
    it("twelth_test_case", () => {
        expect(search(["sandy", "kumar"], "sandy")).toBe(1);
    })
    it("thirteenth_test_case", () => {
        expect(search(["sandy", "kumar"], "sadny")).toBe(-1);
    })
    it("fourteenth_test_case", () => {
        expect(search(["sandy", "kumar"], "s")).toBe(-1);
    })
    it("fifteenth_test_case", () => {
        expect(search(["sandy", "kumar"], undefined)).toBe(-1);
    })
})