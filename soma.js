var texto = "AAAABBBCCDAABBB"

texto.split("");

let arr = []

for(var i = 0; i < texto.length; i++) {
    if  (texto[i] !== texto[i - 1]) {
        console.log(texto[i], i)
        arr.push(texto[i])
    }
}

console.log(arr)