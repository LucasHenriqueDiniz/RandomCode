let str = 'Pig latin is cool'
let newString = "";
let Maior = str.length;
let Menor = 0;

for (var i = 0; str.length > i; i++) {
   newString += str[Maior--]
   // console.log('NewString ' + newString + ' Maior -- ' + Maior--)
}
// ay
console.log(str[16])
// newString.split(' ')