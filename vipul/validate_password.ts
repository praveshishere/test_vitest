import { choose } from "../helpers/utilities";

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
    if (password.length < 8) return false;

    let numCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (!isNaN(parseInt(password[i]))) numCount++;
    }
    if (numCount < 2) return false;
  
    let asteriskCount = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === '*') asteriskCount++;
    }
    if (asteriskCount !== 1) return false;
  
    return true;
}