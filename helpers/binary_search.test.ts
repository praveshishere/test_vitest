import { describe, it, expect } from "vitest";
import { search } from "./binary_search";

describe("binary _search", () => {
    // it("test when element exist", () => {
    //     expect(search([1, 2, 3], 2)).toBe(1); // fail in test 
    // })

    it("test  when element exit", () => {
        expect(search([2,3,6,8],6)).toBe(6); // pass in test
    })
    it("test when element exist", () => {
        expect(search([2,4,5,6,7,8,9],4)).toBeCloseTo(4); // pass in test
    })
    it("test when number to be greater then or equal to 2", () => {
        expect(search([2,3,4,5],3)).toBeGreaterThanOrEqual(2) // pass in test
    })
    it("test when elemnt to be less than 6", () => {
        expect(search([2,3,4,5],4)).toBeLessThanOrEqual(7) // pass in test
    })
    it("test when element  not exist", () => {
            expect(search([1, 2, 3], 2)).not.toBe(1); // pass in test 
        })
        it("when exist element less then 4", () => {
            expect(search([1, 2, 3], 2)).lessThan(4);
        })
        it("when exist element greater then 4", () => {
            expect(search([1, 2, 3,6], 6)).greaterThan(4);
        })
        it("when exist element equal to number", () => {
            expect(search([2,3,4,5,6,7],4)).toEqual(4);
        })
        it("when exist element find", () => {
            expect(search([2,3,4,5,6,7],4)).toBeTruthy();
        })
    // Write more test as required
})