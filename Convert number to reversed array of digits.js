let n = 1234567890;

let Valor = n.toString()
let arr = []

for (var i = 0; Valor.length > i; i++) {
    arr.push(Valor[i])
    console.log(Valor[i])
}
arr.reverse()
console.log(arr)