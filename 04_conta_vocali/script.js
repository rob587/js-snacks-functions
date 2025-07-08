/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.


const vocali= ['a', 'e', 'i', 'o', 'u']



function vocalCount(str) {
    let count = 0;
    let vocaliTrovate = [];

    for (let i = 0; i < str.length; i++) {
        const lettera = str[i].toLowerCase();
        if (vocali.includes(lettera)) {
            count++;
            vocaliTrovate.push(lettera);
        } 
        
    }
    console.log("Vocali trovate:", vocaliTrovate); 
    return count; 
}
// Invoca la funzione qui e stampa il risultato in console



console.log("Numero di vocali:", vocalCount(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)