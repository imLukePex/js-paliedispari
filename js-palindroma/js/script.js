// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.

let parola = "";

// Chiediamo a User una parola
const userParola = prompt("Inserisci una parola");
console.log(userParola);

// Creaiamo variabile singolo carattere e variabile userParola invertita
let carattere;
let parolaInversa = "";

// Settiamo valore dell'indice
let i = userParola.length - 1;

// Ciclo while per scorrere ogni carattere della parola dalla fine all'inizio
while (i >= 0) {
    carattere = userParola[i];
    parolaInversa += carattere;
    console.log(carattere);
    i--;
}

console.log(parolaInversa);

if(parolaInversa === userParola) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita non è palindroma");
}