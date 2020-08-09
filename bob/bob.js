//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
    // set expression equal to the regex of the alphabet upper and/or lowercase
    let regex = /[a-zA-Z]/g;
    // if last index of input equals '?' and our regex expression tests a positive match on .toUpperCase, return Calm Down
    if (message.slice(-1) == "?" && (message === message.toUpperCase()) && (regex.test(message))) 
      return `Calm down, I know what I'm doing!`;
    // if the input equals all caps and our regex expression matches .toUpperCase
    if (message === message.toUpperCase() && (regex.test(
      message
    ))) 
      return 'Whoa, chill out!';
    // if input ends with a question mark, but didn't match UpperCase
    if (message.trim().slice(-1) == "?") 
      return 'Sure.';
    // if there is no input string will return Whatever
    if(message.trim().length === 0) 
      return "Fine. Be that way!";
  
    return 'Whatever.';
};
