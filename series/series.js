//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(str) {
    this.str = str;
  }
  // .split splits the string to a substring and .map returns it as a number
  get digits() {
    return this.str.split('').map(Number);
  }

  slices(n) {
    // throws "error" message if there aren't enough digits to actually slice
    if (n > this.digits.length) throw 'Slice size is too big.';
    // iterates through string starting at i, ending at i + number as long as the lenght is equal to that number, then pushes the slice onto a new array
    return this.digits.reduce((acc, cur, i) => {
      if (this.digits.slice(i, i + n).length === n) {
        acc.push(this.digits.slice(i, i + n));
      }
      return acc;
    }, [])
  }
}
