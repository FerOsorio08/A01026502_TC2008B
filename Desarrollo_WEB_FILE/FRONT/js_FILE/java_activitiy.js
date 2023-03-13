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


let result = NoRepeat("aaabbbbcddee");
console.log(result); // Output: "h"

// 2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
let bubble;
bubble = [1, 8, 10, 8, 3]

function bubblesort(bubble) {
  let longitud;
  let x;
  longitud = bubble.length;
  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < (longitud - i - 1); j++) {
      if (bubble[j] > bubble[j + 1]) {
        x = bubble[j];
        bubble[j] = bubble[j + 1];
        bubble[j + 1] = x;
      }
    }
  }
  //EL siguiente for imprime la cadena bubble ya acomodada
  for (let i = 0; i < longitud; i++) {
    console.log(bubble[i]);
  }
}

bubblesort(bubble);

// 6 Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
let quote;
quote = "Javascript es divertido";
function hackerspeak(quote) {
  //separates the string into sone character strings.
  let separation = quote.split("");
  let longitud = separation.length;
  for (let i = 0; i < longitud; i++) {
    if (separation[i] == "a") {
      separation[i] = "4";
    }
    else if (separation[i] == "s") {
      separation[i] = "5";
    }
    else if (separation[i] == "s") {
      separation[i] = "5";
    }
    else if (separation[i] == "i") {
      separation[i] = "1";
    }
    else if (separation[i] == "e") {
      separation[i] = "3";
    }
    else if (separation[i] == "o") {
      separation[i] = "0";
    }
    else {

    }
  }
  let unir = separation.join(" ");
  console.log(unir);
}
hackerspeak(quote);

//11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
function sortStrings(strings) {
  return strings.sort();
}
const unsortedArray = ["emo", "fer", "asha", "lu"];
const sortedArray = sortStrings(unsortedArray);
console.log(sortedArray);

//13.Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
function mostFrequentString(list) {
  let stringFrequency = {};
  let maxFrequency = 0;
  let mostFrequent;

  for (let str of list) {
    // If the string doesn't exist yet, add it with a frequency of 1
    if (!stringFrequency[str]) {
      stringFrequency[str] = 1;
      console.log(stringFrequency[str]);
    } else {
      // Otherwise, increment its frequency
      stringFrequency[str]++;
      console.log(stringFrequency[str]);
    }

    // Check if it's the most frequent string so far
    if (stringFrequency[str] > maxFrequency) {
      maxFrequency = stringFrequency[str];
      mostFrequent = str;
    }
  }

  return mostFrequent;
}

const stringList = ['emo', 'emo', 'fer', 'fer', 'lu', 'lu', 'lu'];
const frequentString = mostFrequentString(stringList);
console.log(frequentString);
