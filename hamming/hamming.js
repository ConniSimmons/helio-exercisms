//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (first, second) => {
  let counter = 0;
  // make sure both strands have value and are of the same length
  if (first.length !== second.length) {
    if (!first) throw new Error("left strand must not be empty");
    if (!second) throw new Error("right strand must not be empty");
    throw new Error("left and right strands must be of equal length");
  }
  // for loop through the strings and increase the counter each time the first and second arent equal
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) counter++;
  }
  return counter;
};
