//1 Escribe una función que encuentre el primer carácter de un cadena de texto que no se repite. Prueba tu función con: 'abacddbec'
console.log("Función 1: ");
function NoRepeat(str) {
  let frequency = {};
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
      frequency[str[i]]++;
    } else {
      frequency[str[i]] = 1;
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]] === 1) {
      return str[i];
    }
  }
  console.log(frequency);
  return null;
}
let result = NoRepeat("aaabbbbcddee");
console.log(result); // Output: "h"

// 2. Escribe una función que implemente el algoritmo 'bubble-sort' para ordenar una lista de números.
console.log("Función 2: ");
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
//3 Escribe dos funciones: la primera que invierta un arreglo de números y regrese un nuevo arreglo con el resultado; la segunda que modifique el mismo arreglo que se pasa como argumento. No se permite usar la función integrada 'reverse'.
let arreglo=[1,2,3,4,5,6,7];
function invertir(arreglo){
    let nuevo=[];
    let array_length=arreglo.length;
    for(i=array_length -1; i>=0; i--){
        nuevo.push(arreglo[i]);
    }
    return nuevo;

}
console.log("Función 3: ");
console.log("implementacion uno: ", invertir(arreglo));


function invertir2(arreglo){
    let array_length = arreglo.length;
    let i = 0;
    let j = array_length -1;
    let temp;
    while (i < j){
        temp = arreglo[i];
        arreglo[i]=arreglo[j];
        arreglo[j]=temp;
        i++;
        j--;
    }
    return arreglo;
}

console.log("implementacion 2: ", invertir2(arreglo));
// 4. Escribe una función que reciba una cadena de texto y regrese una nueva con la primer letra de cada palabra en mayúscula.
let frase;
    frase="hola somos las chicass unicornio.";

function mayusculas(frase){
    let separation= frase.split(" ");
    let longitud=separation.length;
    
    for (let i=0; i < longitud; i++) {
        separation[i] = separation[i].charAt(0).toUpperCase() + separation[i].slice(1);
    }
    let unir=separation.join(" ");
    console.log(unir);
}
console.log("Función 4: ");
(mayusculas(frase));

// 5. Escribe una función que calcule el máximo común divisor de dos números.

let num1=24;
let num2=32;

function mcd(num1, num2){
    while(num1 !== 0 ){
        let num = num1;
        num1 = num2 % num1;
        num2 = num;
    }
    return num2;
}
console.log("Función 5: ");
console.log(mcd(num1, num2));


// 6 Crea una función que cambie una cadena de texto a 'Hacker Speak'. Por ejemplo, para la cadena 'Javascript es divertido', su hacker speak es: 'J4v45c1pt 35 d1v3rt1d0'.
console.log("Función 6: ");
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

// 7. Escribe una función que reciba un número, y regrese una lista con todos sus factores. Por ejemplo: factoriza(12) -> [1, 2, 3, 4, 6, 12].

let number = 12;

function factoriza(number){
    let div = 1;
    let factores = [];
    while (div <= number){
        if (number % div === 0){
            factores.push(div);
        }
        div++;
    }
    return factores;
}
console.log("Función 7: ");
console.log(factoriza(number));

// 8. Escribe una función que quite los elementos duplicados de un arreglo y regrese una lista con los elementos que quedan. Por ejemplo: quitaDuplicados([1, 0, 1, 1, 0, 0]) -> [1, 0]
let arr=[1, 0, 1, 1, 0, 0];
function duplicados(arr){
    let dixi = {};
    let nuevo=[];
    let array_length = arr.length;
    for (let j=0; j < array_length; j++){
        if (dixi[arr[j]]){
           dixi[arr[j]]++;

        }
        else{
            nuevo.push(arr[j]);
            dixi[arr[j]] = 1;

        }
        
    }
   
    return nuevo;
}
console.log("Función 8: ");
console.log(duplicados(arr));
// 9. Escribe una función que reciba como parámetro una lista de cadenas de texto, y regrese la longitud de la cadena más corta.

let cadenas=["hola", "emilia", "jshejdjdje", "como estas hoy", "ji"];

function cadena_corta(cadenas){
    let valores = cadenas[0].length;
    let cadenas_length=cadenas.length;
    for (let i=0; i < cadenas_length; i++){
        if (cadenas[i].length < valores){
            valores = cadenas[i].length;
        }
    }
    console.log("La cadena más corta tiene una longitud de: ", valores)
    return;

  
}
console.log("Función 9: ");
(cadena_corta(cadenas));

// 10. Escribe una función que revise si una cadena de texto es un palíndromo o no.
let palind= "anitalavalatina";
function palindromo(palind) {
    let nuevo = [];
    let array_length = palind.length;
    for (let i = array_length - 1; i >= 0; i--) {
      nuevo.push(palind[i]);
    }
    for (let j = 0; j < palind.length; j++) {
      if (palind[j] !== nuevo[j]) {
        console.log(palind, ":no es palíndromo");
        return;
      }
    }
    console.log(palind, ":es palíndromo");
    return;
  }
  
console.log("Función 10: ");
(palindromo(palind));


//11. Escribe una función que tome una lista de cadena de textos y devuelva una nueva lista con todas las cadenas en orden alfabético.
console.log("Función 11: ");
function sortStrings(strings) {
  return strings.sort();
}
const unsortedArray = ["emo", "fer", "asha", "lu"];
const sortedArray = sortStrings(unsortedArray);
console.log(sortedArray);

// 12. Escribe una función que tome una lista de números y devuelva la mediana y la moda.
console.log("Función 12: ");
let lista;
lista=[1,2,3,4,4,7,8,8,9,10];
function medianamoda(lista){
    let longitud;
    longitud=lista.length;
    // 
    //esta es la mediana
    if(longitud%2==0){
        let y;
        let x;
        let y2;
        y=lista[longitud/2];
        y2=lista[longitud/2 - 1];
        x=(y+y2)/2;
        console.log("La mediana es: ", x);
    }
    else{ //esto es impar
        let z;
        z=longitud/2-0.5;
        console.log("La mediana es: ",lista[z]);
    }
    let frec={};
    let maxfrec = 0;
    let moda;
    for(let num of lista){
        if(!frec[num]){
            frec[num] = 1;
        }
        else{
            frec[num]++;
        }
        if(frec[num]>maxfrec){
            maxfrec = frec[num];
            moda = num;
        }
        
    }
    console.log("La moda es",moda);
}
medianamoda(lista);

//13.Escribe una función que tome una lista de cadenas de texto y devuelva la cadena más frecuente.
console.log("Función 13: ");
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

// 14. Escribe una función que tome un número y devuelva verdadero si es una potencia de dos, falso de lo contrario.
console.log("Función 14: ");
function PowerofTwo(n){
    //Check if the given number is a positive value
    if(n>0){
        //While loop where the number is divided by two if it's an even number
        while(n % 2==0){
            n= n/2;
        }
    }
    //At the end of the while loop, if the result is =1, it is a power of 2
    if(n==1)
        return true;
    else
        return false;   
}
let n=64;
if (PowerofTwo(n)==true)
    console.log("True \n");
else
    console.log("False \n");

// 15. Escribe una función que tome una lista de números y devuelva una nueva lista con todos los números en orden descendente.
function Desencing (Mylist){
    // Iterate through the array 
     for (let i = 0; i < Mylist.length; i++) {
        //Iterate through the array starting one number after i
          for (let j = i + 1; j < Mylist.length; j++) {
            //Create an instance if the value j is bigger than i
            if (Mylist[j] > Mylist[i]) {
            //Change the  positions of the values
              //Create a tempral variable for the value swap to be possible
              temp = Mylist[i];
              Mylist[i] = Mylist[j];
              Mylist[j] = temp;
            }
          }
        }
    }
    let Mylist =[1,23,99,33,12];
    Desencing(Mylist);
    console.log("Función 15: ");
    console.log(Mylist);
