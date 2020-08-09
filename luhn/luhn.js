//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const luhnReducer = (acc, digit, index) => {
  // is the index of the digit div by 2 w/a remainder? If so, use factor of 1, else use 2.
  const factor = index % 2 === 1 ? 2 : 1;
  // newDigit is the digit * the factor
  const newDigit = digit * factor;
  // return accumulator + newDigit - (if newDigit is greater than 9, you'll be subtracting 9, if newDigit is not greater than 9, subtract 0)
  return acc + newDigit - (newDigit > 9 ? 9 : 0);
}

export const valid = number => {
  // strippedNumber is the number with spaces replaced with non-spaces (takes spaces out of credit card #)
  const strippedNumber = number.replace(/ /g, '');
  // if strippedNumber's length is 1 or shorter, OR find something besides a digit, return false
  if (strippedNumber.length <= 1 || /[^\d]/.test(strippedNumber))
    return false;
  // return strippedNumber as an array. digits reversed (because luhn starts from the right and js starts from left), reduce by luhnReducer. Will pass if the result divides by 10 evenly. 
  return [...strippedNumber].reverse().reduce(luhnReducer, 0) % 10 === 0;
}