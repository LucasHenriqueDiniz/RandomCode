const xd  = "is2 Thi1s T4est 3a";
let str = ("is2", "Thi1s", "T4est", "3a");


//const xdd = xd.split(' ');

//console.log(xdd.indexOf(/3a/))
//xdd.find(function check(i) { return i.search(/1/g  )})
let frase = "HELLO LOOK A1T YOU!";

//Converte sua String para um array de caracteres
temp = frase.split(' ');

//Seu caracter de pesquisa
let compare = '1';

//percorre todos os caracteres.
for ( let i = 0; i < temp.length; i++ ) {
if(temp[i] == compare){
  console.log(i);
//Adiciona eles num array
array.push(i);
} }
console.log()

//
////                   /\d/g
//
// console.log(xd.search(/1/g));
// console.log(xd[7]);

//seilafoedase

/*
 
let text = "Give 100%!"; 
let pattern = /\d/g;
let result = text.match(pattern);







const ages = [3, 10, 18, 20];

function checkAge(age) {
  return age > 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}



// maybe
// algo com localCompare() [/ [1-9] /g]
myArray.sort((a, b) => {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base'});
});

console.log(myArray);




['2000', '11000', '10000', '1000'].sort(
  (a, b) => a.localeCompare(b, undefined, {'numeric': true})
);


for
find lastIndexOf('i')
i++
*/