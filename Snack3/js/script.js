// Snack3
// Il software deve chiedere per 5 volte all’utente di inserire un numero. 
// Il programma stampa la somma di tutti i numeri inseriti.

let sum = 0;

for (let i = 0; i < 5; i++){
let inputNumbers = parseInt(prompt("inserisci un numero"));
while (isNaN(inputNumbers)){
 inputNumbers = parseInt(prompt("inserisci un numero valido"));
}
sum = sum + inputNumbers;
}

console.log(sum);

