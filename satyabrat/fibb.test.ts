import { describe, it, expect } from "vitest";
import { fibb } from "../helpers/fibb";

describe("fibb", () => {
    function fib(num: number) {
        Math.round(Math.pow(1.6180339, num)/Math.sqrt(5))
    }
    it("first position test", () => {
        expect(fibb(1)).toBe(0);
    })
    // Write more test as required
    it("second position test", () => {
        expect(fibb(2)).toBe(1);
    })
    it("third position test", () => {
        expect(fibb(3)).toBe(1);
    })
    it("foruth position test", () => {
        expect(fibb(4)).toBe(2);
    })
    it("foruth position test", () => {
        expect(fibb(5)).toBe(3);
    })
    it("foruth position test", () => {
        expect(fibb(6)).toBe(5);
    })
    it("foruth position test", () => {
        expect(fibb(7)).toBe(8);
    })
    it("foruth position test", () => {
        expect(fibb(8)).toBe(13);
    })
    it("foruth position test", () => {
        expect(fibb(9)).toBe(17);
    })
    it("for neg test", () => {
        expect(fibb(10)).toBe(fib(10));
    })
})