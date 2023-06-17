import { describe, it, expect } from "vitest";
import { validatePassword } from "./validate_password";
describe("validatePassword", () => {
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    it("", () => {
        expect(validatePassword("ddkj")).toBe(false);
    })
    it("Atleast 8 Character check", ()=>{
        expect(validatePassword(password)).toBeGreaterThanOrEqual(8);
    })
    it("Atleast 8 Character check", ()=>{
        expect(validatePassword(password)).toContain('*');
    })
    it('Checking null value', () => {
        expect(validatePassword(password)).not.toBeNull();
    });
    it('', () => {
        expect(validatePassword(password)).toEqual(
          expect.arrayContaining(expected),
        );
      });
      
})