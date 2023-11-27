// Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma.


// Chiediamo a User una parola
const userParola = prompt("Inserisci una parola");

// Richiamo funzione
let parolaInversa = typeParola(userParola);

// Condizione da verificare per capire se la parola inserita sia palindroma o no
if(parolaInversa === userParola) {
    console.log("La parola inserita è palindroma");
} else {
    console.log("La parola inserita non è palindroma");
}

// Funzione che capisce se la parola inserita è palindroma o no

// Settiamo la funzione
function typeParola(parolaToCheck) {
    
    // Variabile da popolare
    let parolaInversa = "";

    // Settiamo valore dell'indice
    let i = parolaToCheck.length - 1;

    // Ciclo while per scorrere ogni carattere della parola dalla fine all'inizio
    while (i >= 0) {
        parolaInversa += parolaToCheck[i];
        console.log(`La parola che hai inserito è: ${parolaToCheck}`);
        i--;
    }

    return parolaInversa;
}
