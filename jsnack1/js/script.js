// chiedere due parole a utente
const firstWord = prompt("Dimmi la prima parola");
const secondWord = prompt("Dimmi la seconda parola");

// calcolare le lunghezze
const firstWordLength = firstWord.length;
const secondWordLength = secondWord.length;

console.log(firstWord, firstWordLength);
console.log(secondWord, secondWordLength);

// confronto
let result;
if (firstWordLength > secondWordLength) {
    result = `${secondWord} ${firstWord}`;
} else if (secondWordLength > firstWordLength) {
    result = `${firstWord} ${secondWord}`;
} else {
    result = `Le parole hanno lunghezza uguale, ${firstWord} ${secondWord}`;
}

// output
console.log(result);