let str = 'strrrressss'.split('').sort();
let strN = 'strrressss'.split('');
// let teste = str.split('')
const repetidas = [];
const eoq = [];
let CU = '';
const teste = (element, index) => element == index;

for(var i = 0; i < str.length; i++) {
    if  (str[i] == str[i - 1]) {
        repetidas.push(str[i])    
    }
}

for(var x = 0; x < repetidas.length; x++) {
    if  (repetidas[x] !== repetidas[x - 1]) {
        eoq.push(repetidas[x])
    }
}

for (var z = 0; z < strN.length; z++) {
    do (strN.slice(z)) while
    
}

index = strN.findIndex(teste)
console.log(repetidas)
console.log(eoq)
// do ()
/*

arr1.flatMap(x => [x * 2]);
// [2, 4, 6, 8]
*/