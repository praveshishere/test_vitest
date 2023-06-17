import { describe, it, expect } from "vitest";
import { validatePassword } from "./validate_password";
describe("validatePassword", () => {
    it("should has 8 chracters whether any conditions matches or not", () => {
        expect(validatePassword("ddkj*12")).toBe(false); // asterisk and number condition matches
        expect(validatePassword("ddkjbnmj*12")).toBe(true);
    })

    it("should has one asterisk whether any conditions matches or not", () => {
        expect(validatePassword("ddkjbubh12")).toBe(false); // number and length property matches
        expect(validatePassword("ddkjbubh**12")).toBe(false); // more than one asterisk
        expect(validatePassword("ddkjbubh*12")).toBe(true);
    })

    it("should has atlest 2 numbers whether any conditions matches or not", () => {
        expect(validatePassword("ddkjbubh*")).toBe(false); // no numbers present
        expect(validatePassword("ddkjbubh*1")).toBe(true); // one number present
        expect(validatePassword("ddkjbubh*123")).toBe(true);
    })
    // Write more test as required
})