const array = [1,2,3,4,5,6,7,8,9,10] ;
let somma = 0 ;

for (let i=0; i<array.length; i++) {
    somma += array[i] ;
}

let media = (somma/10)

console.log(somma, media);