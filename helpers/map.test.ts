import { describe, it, expect } from "vitest";
import { map } from "./map";
// Remove .only if array type is string 
describe.only("map", () => {
    it("number add test", () => {
        expect(map([1,2,3], (num) => {
            return num + 2;
        })).toEqual([3, 4, 5]);
    })
    it("number substract test", () => {
        expect(map([3,4,5], (num) => {
            return num - 2;
        })).toEqual([1, 2, 3]);
    })
    it("number division test", () => {
        expect(map([4,8,10], (num) => {
            return num / 2;
        })).toEqual([2, 4, 5]);
    })
    it("number multiplication test", () => {
        expect(map([1,2,3], (num) => {
            return num * 2;
        })).toEqual([2, 4, 6]);
    })
    // Write more test as required
 

})

// add .only if array of type string
describe('for string', ()=>{
    it("number multiplication test", () => {
        expect(map(["a","b","c"], (el) => {
            return el + "x";
        })).toEqual(["ax", "bx", "cx"]);
    })
    it("number multiplication test", () => {
        expect(map(["ag","bh","ci"], (el) => {
            return el.slice(1);
        })).toEqual(["g", "h", "i"]);
    })
})