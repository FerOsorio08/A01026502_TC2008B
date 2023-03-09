function NoRepeat(str) {
  // create an empty object (dictionary)to store each character and its frequency
  let frequency = {};
  
  // iterate through the string and record the frequency of each character
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      // if the character has already been seen, increment its frequency
      frequency[str[i]]++;
    //   console.log(frequency[str[i]]);
    } else {
      // if the character has not been seen before, set its frequency to 1
      frequency[str[i]] = 1;
    //   console.log(frequency[str[i]]);
    }
  }
  for (let i = 0; i < str.length; i++) {
    // iterate through the string again, and return the first character that has a frequency of 1
    if (frequency[str[i]] === 1) {
      return str[i];
    }
  }
  
  // if there are no non-repeating characters, return null
  console.log(frequency);
  return null;
}


let result = NoRepeat("abcde");
console.log(result); // Output: "h"
