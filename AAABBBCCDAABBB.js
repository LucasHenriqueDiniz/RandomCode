var texto = "AAAABBBCCDAABBB".split('').sort();
var z = '';
let arr = []
let teste = []
for(var i = 0; i < texto.length; i++) {
    if  (texto[i] !== texto[i - 1]) {
        console.log (texto[i])
    } else {console.log (z++)}
}

console.log(arr)
