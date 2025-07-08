/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function salute(name){
    return 'ciao'+ ' '+userName
}

// Invoca la funzione qui e stampa il risultato in console

salute();
console.log(salute(name))


//Risultato atteso se si passa 'Mario': // ciao Mario
