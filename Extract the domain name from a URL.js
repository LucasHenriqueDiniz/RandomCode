// var url = "https://www.xakep.ru";

//     var cortado  = url.replace(':', ' ').replace('//', ' ').replace(/\./g, ' ').split(' ')
//     // var CU = cortado.indexOf('')
//     // if (CU != -1 | undefined) {cortado.splice(CU, 1)}
//     console.log(cortado);

// function find (cortado) {
//     var i = 0
// while (cortado[i] ==  'https' | 'www' | 'http' | '' | ' ' | undefined) {
//     console.log(cortado.splice(i, 1))
//     return cortado.splice(i, 1)
//     }
// }

// console.log(find(cortado)) 


// while (cortado[i] !=  'https' | 'www' | 'http' | '' ) {
//     var i = 0;
//     console.log(cortado[i]);
//     i++;
// }


var url = "https://www.xakep.ru";
var remover = ['https', 'www', 'http', '', ' ']
var cortado  = url.replace(':', ' ').replace('//', ' ').replace(/\./g, ' ').split(' ')

for (var i = 0 ; cortado.length > i ; i++) {
    if (cortado[i] != 'https' | 'www' | 'http' | ' ') {
        console.log(cortado[i])
    }
}

console.log(cortado)



// for (Remover in url) {
// url.replace('://', ' ').replace('.', ' ').trim()
// console.log(url)
// }