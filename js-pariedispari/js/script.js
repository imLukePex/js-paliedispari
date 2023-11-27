// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.


// Selezione degli input
const inputPuntata = document.getElementById("puntata-user");

const inputNumero = document.getElementById("numero-user");

let finalBox = document.getElementById("result-box");

// Variabile value pari o dispari
const userPuntata = inputPuntata.value;
console.log("puntata user: ", userPuntata);

// Variabile value numero tra 1 e 5
const userNumero = parseInt(inputNumero.value);
console.log("numero user: ", userNumero);

let risultato;

// Richiamo funzione numero random tra 1 e 5 per il computer
let randomNum = numRandom();
console.log("Il numero random generato dal pc è: " + randomNum);

// Richiamo funzione somma due numeri
let gameResult = sommaNumeriTotal();
console.log(sommaNumeriTotal());


// al click del bottone Invia
document.getElementById("submit").addEventListener("click",

    function() {

        finalBox.classList.remove("d-none");

        document.getElementById("random-number").innerHTML = `Il numero random generato dal pc è: ${randomNum}`;
        document.getElementById("final-result").innerHTML = gameResult;

    }
);

// al click del bottone Annulla
document.getElementById("delete").addEventListener("click",

    function() {
        finalBox.classList.add("d-none");
        inputPuntata.value = "";
        inputNumero.value = "";
    }
)



// Funzioni 

// Funzione per numero random tra 1 e 5 per il computer
function numRandom() {
    
    let randomNum = Math.floor(Math.random() * 5 + 1);
    return randomNum;
}


// Funzione per stabilire se la somma dei due numeri è pari o dispari
function sommaNumeriTotal() {

    let sommaNumeri = parseInt(userNumero) + randomNum;

    // Check se numero è pari o dispari
    if (sommaNumeri % 2 === 0) {
        risultato = "pari";
    } else {
        risultato = "dispari";
    }

    if(risultato === userPuntata) {
        return "Hai vinto!!!";
    } else {
        return "Hai Perso...";
    }
}

























// const userPariODispari = prompt("Scegli se pari o dispari");
// console.log("Hai scelto: " + userPariODispari);

// const userNumero = prompt("Scegli un numero da 1 a 5");
// console.log("Hai scelto il numero: " + userNumero);

// let somma = userNumero + numRandom;
// console.log(somma);

// let risultato = numRandom(userPariODispari);

// // Funzione per numero random tra un range di numeri
// let newRandomNum = numRandom(1, 5);
// console.log(newRandomNum);

// // Funzione che genera un numero random
// function numRandom(min, max) {
    
//     const randomNum = Math.floor(Math.random() * (max - min)) + min;
//     return randomNum;
// }

// // Funzione per stabilire se la somma dei due numeri è pari o dispari
// function sommaPariODispari(sommaToCheck) {

//     let risultato;
//     // Check se numero è pari o dispari
//     if (sommaToCheck % 2 === 0) {
//         risultato = "Pari";
//         console.log("Pari");
//     } else {
//         risultato = "Dispari"
//         console.log("Dispari");
//     }

//     return risultato;
// }