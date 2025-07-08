/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function firstLetter(){
    return names.map(name => {
        //diviso il nome in parole//
        const words = name.split(' ');
        //estraggo la prima lettera di ogni parola e la unisco
        const initials = words.map(word => word.charAt(0)).join(' ')
        return initials;
    })
}

  

// Invoca la funzione qui e stampa il risultato in console

console.log(firstLetter())

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]