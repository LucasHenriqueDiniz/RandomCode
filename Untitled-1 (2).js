let num = 420370022 

// function expandedForm(num) {
//     resto = num % 10
//     dez = num - resto
//     restoMil = num % 1000 - resto
//     mil = num - restoMil - resto

//     if (num < 10) {
//         return (num)

//     } else if (num.valueOf() > 1000) {
//         return (mil + " + " + restoMil + " + " + resto);

//     } else if (num > 10) {
//         return (dez + " + " + resto);
//     }

// }

// console.log(num % 1000000)
// console.log(expandedForm(num));

str = String(num).slice('')
console.log(str);
// Test.assertEquals(expandedForm(12), '10 + 2');
// Test.assertEquals(expandedForm(42), '40 + 2');
// Test.assertEquals(expandedForm(70304), '70000 + 300 + 4');