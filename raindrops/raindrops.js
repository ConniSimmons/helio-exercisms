//
// This is only a SKELETON file for the 'Raindrops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export function convert(number) {
  let rain = "";
  // pulls number out of string and returns sounds as prescribed
  if (number % 3 === 0) rain += "Pling";
  if (number % 5 === 0) rain += "Plang";
  if (number % 7 === 0) rain += "Plong";

  return rain || String(number);
}
