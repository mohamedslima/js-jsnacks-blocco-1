let userNumber = parseInt(prompt("Inserisci un numero a 4 cifre"));
console.log("L'utente ha digitato", userNumber);

sum = 0;

while (userNumber) {
    sum += userNumber % 10;
    userNumber = Math.floor(userNumber / 10);
}

console.log("La somma tra le cifre inserite è:", sum);