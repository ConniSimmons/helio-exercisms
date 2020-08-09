// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.
const LETTERS = [["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]

export class Robot { 
    constructor() {
        this._name = '';
        this.name = this.generateName;
    }
set name(name) {
    if (name === this._name) {
        const random = this.generateName();
        return this.name = random;
    }
    this.name = this._name;
    throw Error('nope')
}
get name() {
    return this._name;
}
reset() {
    this._name = this.generateName();
}
generateName() {
    // generate a random name that starts with 2 apital letters then followed by 3 random numbers
    return `${this.generateLetter()}${this.generateLetter()}${this.generateDigit()}${this.generateDigit()}${this.generateDigit()}`
    }
generateLetter() {
    // return random letter form letter array
    const seer = Math.floor(Math.random() * (LETTERS.length + 1));
    return LETTERS[seed];
}
generateDigit() {
    // return random numbers 
    return Math.floor(Math.random() * 10); 
}
}

Robot.releaseNames = () => { };

