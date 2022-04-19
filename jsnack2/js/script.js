// creazione array vuoto
const userList = [];

// chiedi a user sei numeri ciclo for
for (let i=0; i < 6; i++) {
    const userNumber = parseInt(prompt("dimmi un numero"));
    console.log(userNumber);
    
    // se dispari inserisci in array

    if (userNumber % 2 === 1) {
        userList.push(userNumber);
    }
}
console.log(userList);