//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = string => 
  // Convert the string to lowercase
  // Use regex to extract all the unique letters from string`
  // Check if the # of unique letters are 26
  [...new Set(string.toLowerCase().replace(/[^a-zA-Z]|\s/g, ""))].length === 26;
