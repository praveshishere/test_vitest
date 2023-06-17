import { describe, it, expect } from "vitest";
import { fibb } from "./fibb";

describe("fibb", () => {
    it("first position test", () => {
        expect(fibb(1)).toBe(0);
    })
    // Write more test as required
})