import { describe, it, expect } from "vitest";
import { validatePassword } from "../helpers/validate_password";
describe("validatePassword", () => {
    it("", () => {
        expect(validatePassword("ddkj")).toBe(false);
    })
    // Write more test as required
    it("test character count  ", () => {
        expect(validatePassword("ddkj")).toBe(false);

    })
    it("test when all condition are ok ",()=>{
        expect(validatePassword("0900**HG")).toBeTruthy()
    })
    it("test if number count is less then 2",()=>{
        expect( validatePassword("sahi***9"
        )).toBe(false);
    })
    it("test  not contain * ",()=>{

expect( validatePassword("sahil@123")).toBe(false)

    })
    it("test not contain number",()=>{
expect( validatePassword("sahil*arora")).toBe(false);
    })
})