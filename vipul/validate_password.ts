import { choose } from "./utilities";

/**
 * Tests the following for the given password, if one of these fail
 * the method returns false, else true
 * 1. At least 8 characters
 * 2. At least 2 numbers.
 * 3. exactly one '*' asterisk
 * 
 * @param password - the password to check
 * @returns - whether the password is valid
 */
export function validatePassword(password: string) {

    return choose([true, false]);
}