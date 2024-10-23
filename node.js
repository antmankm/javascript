function lecarrede (){
    let tableau = [2, 25, 9, 89, 64, 10];

    for( let i = 0; i < tableau.length; i++){
        let nombre = tableau[i];

        if ( nombre % 2 === 0){
            console.log( nombre + " Cest un nombre paire");
        }else{
            console.log(nombre + " cest un nombre impaire");
        }

        let racinecarre = Math.sqrt(nombre);
        console.log( " La racine carre de " + nombre + " nombre est: " +racinecarre);
    }
    
}
lecarrede();