let n = 35231
let novo = '';
let arr = [];
n = n.toString()

for (var i = 0; n.length > i; i++) {
    novo = n[i] + ', ' + novo;
}
novo.padEnd(-5, 'cu')
console.log(novo)

// arr = [novo]
// console.log(arr);

//[1,3,2,5,3]
