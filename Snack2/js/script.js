// Snack2
// Fai inserire un numero, che chiameremo N, all’utente. 
// Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. 
// Ogni volta che ne crei uno, stampalo.


let numbersArray = [];

let arrayQuantity = parseInt(prompt("Quanti array desideri?"));

while (isNaN(arrayQuantity)){
 arrayQuantity = parseInt(prompt("Input invalido, riprova."));
}

 for (let i = 0; i < arrayQuantity; i++){
  for (let j = 0; i < 10; j++){
   numbersArray[j] = Math.floor(Math.random() * 100) + 1;
  }
  console.log(numbersArray);
 }

