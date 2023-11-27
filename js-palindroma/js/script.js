// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.


// Chiediamo a User una parola
const userParola = prompt("Inserisci una parola");
console.log(userParola);

// Condizione da verificare per capire se la parola inserita sia palindroma o no
if(parolaInversa === typeParola(userParola)) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita non è palindroma");
}

// Funzione che capisce se la parola inserita è palindroma o no
function typeParola(parolaToCheck) {
    

    // Check se parola è palindroma o no
    let parolaInversa = "";

    // Settiamo valore dell'indice
    let i = parolaToCheck.length - 1;

    // Ciclo while per scorrere ogni carattere della parola dalla fine all'inizio
    while (i >= 0) {
        parolaInversa += parolaToCheck[i];
        console.log(parolaToCheck);
        i--;
    }

    return parolaInversa;
}














// // Creaiamo variabile singolo carattere e variabile userParola invertita
// let carattere;
// let parolaInversa = "";

// // Settiamo valore dell'indice
// let i = userParola.length - 1;

// // Ciclo while per scorrere ogni carattere della parola dalla fine all'inizio
// while (i >= 0) {
//     carattere = userParola[i];
//     parolaInversa += carattere;
//     console.log(carattere);
//     i--;
// }

// console.log(parolaInversa);
