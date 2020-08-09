//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (obj) => {
  // sets transformedObj as in object
  const transformedObj = {};
  // identify each key/value pair in the input parameter and
  for (const [key, values] of Object.entries(obj))
    // identify the value of all of the values 
    for (const value of values)
    // transform each value to lowercase and match (=) it to its key
      transformedObj[value.toLowerCase()] = Number(key);

  return transformedObj;
};
