function findnumber (tableau){
    let max = Math.max(...tableau);
    let min = Math.min(...tableau);

    console.log(" Le nombre max de ce tableau est : " +max);
    console.log(" Le nombre min de ce tableau est : " +min);

}
let nombre = [109, 99,398, 201, 0,  89, 78, 188];
findnumber(nombre);
// Exercice sur le nombre max et min 