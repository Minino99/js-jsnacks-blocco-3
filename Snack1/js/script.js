// Snack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array 
// fino a quando la somma degli elementi è minore di 50.

let numbersArray = [];
let numbersSum = 0;

 for (let i = 0; numbersSum < 50; i++){
  numbersArray[i] = parseInt(prompt("Inserisci un numero"));
  while (numbersArray[i] > 50 || (isNaN(numbersArray[i]))){
   numbersArray[i] = parseInt(prompt("I numeri maggiori di 50 o le lettere non valgono. Riprova."));
  }
  numbersSum = numbersSum + numbersArray[i];
 }


console.log(numbersArray, numbersSum);