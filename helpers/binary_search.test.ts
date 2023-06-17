import { describe, it, expect } from "vitest";
import { fibb } from "./fibb";
import { search } from "./binary_search";

describe("binary _search", () => {
    it("test when element exist", () => {
        expect(search([1, 2, 3], 2)).toBe(1);
    })
    // Write more test as required
})