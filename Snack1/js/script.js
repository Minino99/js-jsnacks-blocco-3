// Snack1
// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array 
// fino a quando la somma degli elementi è minore di 50.

let numbersArray = [];
let numbersSum = 0;

 for (let i = 0; numbersSum < 50 && ! isNaN(numbersSum); i++){
  numbersArray[i] = parseInt(prompt("Inserisci un numero minore di 50"));
  while (numbersArray[i] > 50){
   numbersArray[i] = parseInt(prompt("Hai inserito un numero maggiore di 50, riprova."));
  }
  numbersSum = numbersSum + numbersArray[i];
 }


console.log(numbersArray, numbersSum);