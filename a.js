let Numero = 1239.95

function Round11(Numero) {
    let num = Numero.toString()
    let Numer = num.replace(num[num.length - 1], num[num.length - 2])
    
    // if (Numer.endsWith('.99')) {
    //     Math.round(Numer);
    //     return Numer;
    // } else { 
    //     return Numer; 
    // }
    if (Numer.endsWith('.99')) {
        Numer = Math.round(Numer);
    }
    return Numer;

}



console.log(Round11(Numero));


